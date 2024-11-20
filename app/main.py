from fastapi import FastAPI
from startup import configure_app
from routes.base import router as base_routes

app = FastAPI()

# Configure middleware, CORS, etc.
configure_app(app)

# Include routes
app.include_router(base_routes)
