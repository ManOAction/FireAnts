# FireAnts
Note Detection App

## Main Goals
Learn Audio Detection and Microphone Access
Use Docker
FastAPI Backend
React Front End
Tailwind Styling (Daisy or Flowbite?)
Apparently we don't need a backend with Meyda.


### Suggested Folder Structure as the App Grows ###

**Root Directory**
```
project-root/
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py          # Main entry point for FastAPI
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/   # Individual API endpoint modules
│   │   │       ├── hello.py
│   │   ├── core/
│   │   │   ├── config.py    # Configuration settings
│   │   ├── models/          # Database models
│   │   ├── schemas/         # Pydantic models for data validation
│   │   ├── services/        # Business logic and service functions
│   ├── Dockerfile           # Dockerfile for backend
│   ├── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── public/              # Static public assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── HelloButton.tsx
│   │   ├── pages/           # Page-level components (e.g., Home.tsx)
│   │   ├── services/        # API call services (e.g., api.ts for backend calls)
│   │   ├── App.tsx          # Main App component
│   │   ├── index.tsx        # Entry point
│   ├── Dockerfile           # Dockerfile for frontend
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── package.json         # Node.js dependencies
│
├── docker-compose.yml       # Docker Compose file for managing multi-container setup
└── README.md                # Project documentation
```

### Explanation ###
- **Backend** (`backend/`):
  - `app/`: Contains all the application logic for FastAPI.
    - `api/endpoints/`: Split your API into individual modules for better modularity (e.g., `hello.py` for the hello endpoint).
    - `core/`: For configuration and initialization code.
    - `models/`: Contains the database models.
    - `schemas/`: Pydantic models for data validation and serialization.
    - `services/`: Contains the business logic, which helps to separate the API layer from the core functionalities.

- **Frontend** (`frontend/`):
  - `components/`: Contains reusable components (e.g., `HelloButton.tsx`).
  - `pages/`: Contains page-level components that represent different screens or views.
  - `services/`: Contains functions to make API calls to the backend (e.g., `api.ts`).

- **Docker**:
  - Each service (`backend` and `frontend`) has its own Dockerfile to containerize the app.
  - A `docker-compose.yml` file can be added at the root level to manage the multi-container setup.

