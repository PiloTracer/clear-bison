from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=None, extra="ignore")

    app_env: str = "dev"
    public_host: str = "logicbison.com"
    contact_inbox: str = "hello@clearbison.com"
    cors_origins: str = "*"


settings = Settings()
