# Mabalacat City Water District Website

A full-stack web application for MCWD with a React frontend and Django backend.

## Setup

### Frontend
```bash
npm install
npm start
```
Frontend runs at `http://localhost:3001`

### Backend
```bash
cd backend
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py load_sample_data
python manage.py runserver
```
Backend runs at `http://localhost:8000`

## Features

### Frontend (React)
- **Single Page Application (SPA)**: Built with React 19 for fast, dynamic user experience
- **Three Main Pages**: Home, About, Contact with seamless navigation via React Router
- **Home Page**: Hero section, services listing, testimonials carousel
- **About Page**: Team member profiles with images and contact information
- **Contact Page**: Form submission to backend API with validation
- **Responsive Design**: Mobile-first approach using Bootstrap 5 with Bootswatch Lux theme
- **API Integration**: Axios-based HTTP client for seamless frontend-backend communication

### Backend (Django REST Framework)
- Services API endpoints for listing and retrieving water services
- Team member management with image URLs
- Testimonials management and display
- Contact inquiry submission and tracking
- Comprehensive API documentation at `/api/routes/`

## Tech Stack

- **Frontend**: React 19, React Router v6, Bootstrap 5, Bootswatch Lux theme, Axios
- **Backend**: Django 4.2, Django REST Framework 3.14, django-cors-headers
- **Database**: SQLite3
- **Environment Management**: python-dotenv for backend, .env for frontend
