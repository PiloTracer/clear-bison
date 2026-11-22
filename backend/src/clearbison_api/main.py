from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

from clearbison_api import __version__
from clearbison_api.settings import settings

app = FastAPI(
    title="ClearBison API",
    version=__version__,
    docs_url="/docs" if settings.app_env == "dev" else None,
    redoc_url=None,
)

origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins != ["*"] else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str
    env: str


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    option: str = Field(
        default="",
        description="Engagement option id: package | repo-scan | domain-scan | scan-fix",
        max_length=40,
    )
    message: str = Field(min_length=1, max_length=4000)


class ContactResponse(BaseModel):
    ok: bool
    inbox: str
    detail: str


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="clearbison-api",
        version=__version__,
        env=settings.app_env,
    )


@app.post("/api/contact", response_model=ContactResponse)
def contact(body: ContactRequest) -> ContactResponse:
    # Intake only — delivery is email/CRM outside this process for v0.
    # Logs stay free of PII beyond option id.
    _ = body
    return ContactResponse(
        ok=True,
        inbox=settings.contact_inbox,
        detail=(
            "Received. A founder will reply to schedule a short scoping call. "
            f"You can also write {settings.contact_inbox} directly."
        ),
    )
