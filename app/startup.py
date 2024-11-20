from fastapi.middleware.cors import CORSMiddleware


def configure_app(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  # Ensure frontend origin is correct
        allow_credentials=True,
        allow_methods=["*"],  # Allows all methods (including OPTIONS)
        allow_headers=["*"],  # Allows all headers
    )
