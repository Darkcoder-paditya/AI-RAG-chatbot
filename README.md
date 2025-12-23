# AI Personal RAG Chatbot - Backend

## Overview

This repository contains the backend code for the **AI Personal RAG Chatbot**. The project is currently being migrated from a Flask-based architecture to a robust **Django** setup. The goal is to build a scalable, personal chatbot capable of Retrieval-Augmented Generation (RAG) tasks.

## Current Status

- **Architecture:** Monolithic Django Backend (Migrated from Flask).
- **Containerization:** Fully Dockerized using Docker Compose.
- **Database:** SQLite (default for development).
- **API:** Django Rest Framework (DRF) is installed for API endpoints.

## Tech Stack

- **Framework:** Django 5.x
- **API:** Django Rest Framework (DRF)
- **Server:** Gunicorn (for production/docker)
- **Containerization:** Docker & Docker Compose
- **Language:** Python 3.x

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.
- OR Python 3.10+ for manual local development.

### Running with Docker (Recommended)

The easiest way to run the backend is using Docker Compose.

1.  **Build and Run:**
    ```bash
    docker-compose up --build
    ```

2.  **Access the Application:**
    The backend will be available at `http://localhost:5000`.

    - Admin Panel: `http://localhost:5000/admin/`
    - API Endpoints: `http://localhost:5000/api/` (depending on your URL configuration)

### Running Manually (Local Development)

If you prefer to run it without Docker:

1.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run Migrations:**
    ```bash
    python manage.py migrate
    ```

4.  **Start the Development Server:**
    ```bash
    python manage.py runserver
    ```
    *Note: The local development server usually runs on port 8000 by default (`http://localhost:8000`), whereas the Docker setup maps it to port 5000.*

## Project Structure

- **`backend_project/`**: The main Django project configuration (settings, urls, wsgi).
- **`core_app/`**: The main application app containing views, models, and logic.
- **`Dockerfile`**: Configuration for building the backend image.
- **`docker-compose.yml`**: Service orchestration.

## Roadmap

- [ ] Complete migration of all endpoints from Flask to Django.
- [ ] Implement RAG (Retrieval-Augmented Generation) pipeline.
- [ ] Integreate Vector Database.
- [ ] Finalize Frontend (Next.js) integration.
