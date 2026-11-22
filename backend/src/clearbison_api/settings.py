from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=None, extra="ignore")

    app_env: str = "dev"
    public_host: str = "logicbison.com"
    # Destination mailbox. Set only via server env (CONTACT_INBOX). Never expose to the web app.
    contact_inbox: str = ""
    cors_origins: str = "*"

    smtp_host: str = ""
    smtp_port: int = 465
    smtp_user: str = ""
    smtp_pass: str = ""


settings = Settings()
