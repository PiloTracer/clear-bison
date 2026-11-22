import logging
import smtplib
from email.message import EmailMessage

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, Field

from clearbison_api import __version__
from clearbison_api.settings import settings

logger = logging.getLogger("clearbison_api")

_is_dev = settings.app_env == "dev"

app = FastAPI(
    title="ClearBison API",
    version=__version__,
    docs_url="/docs" if _is_dev else None,
    redoc_url=None,
    openapi_url="/openapi.json" if _is_dev else None,
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
    detail: str


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="clearbison-api",
        version=__version__,
        env=settings.app_env,
    )


def _send_contact_email(body: ContactRequest) -> None:
    option_line = body.option.strip() or "(general)"
    content = (
        f"Name: {body.name}\n"
        f"Email: {body.email}\n"
        f"Option: {option_line}\n"
        f"\n"
        f"Message:\n"
        f"{body.message.strip()}\n"
    )

    msg = EmailMessage()
    msg.set_content(content)
    msg["Subject"] = f"ClearBison contact: {body.name}"
    msg["From"] = settings.smtp_user
    msg["To"] = settings.contact_inbox
    msg["Reply-To"] = body.email

    if settings.smtp_port == 465:
        with smtplib.SMTP_SSL(settings.smtp_host, settings.smtp_port) as server:
            server.login(settings.smtp_user, settings.smtp_pass)
            server.send_message(msg)
    else:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            server.login(settings.smtp_user, settings.smtp_pass)
            server.send_message(msg)


@app.post("/api/contact", response_model=ContactResponse)
def contact(body: ContactRequest) -> ContactResponse | JSONResponse:
    if not settings.smtp_host or not settings.smtp_user or not settings.smtp_pass:
        logger.warning("SMTP not configured; contact message dropped")
        return JSONResponse(
            status_code=503,
            content={
                "ok": False,
                "detail": "The contact form is not configured yet. Try again later.",
            },
        )

    if not settings.contact_inbox:
        logger.warning("CONTACT_INBOX empty; contact message dropped")
        return JSONResponse(
            status_code=503,
            content={
                "ok": False,
                "detail": "The contact form is not configured yet. Try again later.",
            },
        )

    try:
        _send_contact_email(body)
    except Exception:
        logger.exception("Failed to send contact email")
        return JSONResponse(
            status_code=502,
            content={
                "ok": False,
                "detail": "Could not send the message. Try again in a moment.",
            },
        )

    logger.info("Contact email sent for option=%s", body.option.strip() or "general")
    return ContactResponse(
        ok=True,
        detail="Received. I will reply to schedule a short scoping call.",
    )
