# Mabalacat City Water District - Full Stack Website

A complete full-stack application for Mabalacat City Water District (MCWD) featuring a React frontend and Django REST Framework backend.

## Project Overview

This project consists of two main components:

1. **Frontend**: React 19 SPA (Single Page Application) with responsive design
2. **Backend**: Django REST Framework API for data management and business logic

---

## Quick Start

### Prerequisites
- Python 3.8+ (for backend)
- Node.js 16+ and npm (for frontend)
- Git

### Frontend Setup (React)

```bash
# Install dependencies
npm install

# Create .env file for frontend
# REACT_APP_API_URL=http://localhost:8000/api

# Start development server
npm start
```

Frontend runs at: `http://localhost:3000`

### Backend Setup (Django)

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure .env (already created with defaults)
# DEBUG=True
# CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Run migrations
python manage.py migrate

# Load sample data (optional)
python manage.py load_sample_data

# Start development server
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

---

## Technology Stack

### Frontend
- **React**: 19.0.0-rc-66e3fa4 (latest)
- **React Router**: v6 (SPA navigation)
- **Bootstrap**: 5.3.3
- **Bootswatch**: Lux theme
- **Axios**: HTTP client for API calls
- **CSS3**: Custom styling

### Backend
- **Django**: 4.2.7
- **Django REST Framework**: 3.14.0
- **django-cors-headers**: 4.3.1 (CORS support)
- **python-dotenv**: 1.0.0 (Environment variables)
- **Pillow**: 10.1.0 (Image processing)
- **SQLite3**: Database

---

## Project Structure

```
AGUILAR/
├── frontend (React)
│   ├── src/
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   └── TestimonialsSection.jsx
│   │   ├── services/        # API service calls
│   │   │   └── api.js
│   │   ├── config/          # Configuration
│   │   │   └── axiosConfig.js
│   │   ├── data/
│   │   │   └── content.js   # Website content
│   │   ├── styles/          # CSS files
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   │   ├── assets/
│   │   │   └── team/        # Team member images
│   │   └── index.html
│   ├── package.json
│   ├── .env                 # Frontend environment variables
│   └── .gitignore
│
└── backend (Django)
    ├── mcwd_api/            # Project settings
    │   ├── settings.py
    │   ├── urls.py
    │   ├── wsgi.py
    │   └── asgi.py
    ├── services/            # Main API app
    │   ├── models.py        # Database models
    │   ├── serializers.py   # DRF serializers
    │   ├── views.py         # API viewsets
    │   ├── urls.py          # API routing
    │   ├── admin.py         # Admin configuration
    │   └── management/
    │       └── commands/
    │           └── load_sample_data.py
    ├── venv/                # Virtual environment
    ├── manage.py
    ├── requirements.txt
    ├── .env                 # Backend environment variables
    ├── .gitignore
    ├── db.sqlite3           # SQLite database
    └── README.md            # Backend documentation
```

---

## API Endpoints

### Services
```
GET    /api/services/          - List all active services
GET    /api/services/<id>/     - Retrieve specific service
POST   /api/services/          - Create service (admin)
PUT    /api/services/<id>/     - Update service (admin)
DELETE /api/services/<id>/     - Delete service (admin)
```

### Team Members
```
GET    /api/team/              - List all team members
GET    /api/team/<id>/         - Retrieve specific member
POST   /api/team/              - Create team member (admin)
PUT    /api/team/<id>/         - Update team member (admin)
DELETE /api/team/<id>/         - Delete team member (admin)
```

### Testimonials
```
GET    /api/testimonials/      - List all testimonials
GET    /api/testimonials/<id>/ - Retrieve specific testimonial
POST   /api/testimonials/      - Create testimonial
PUT    /api/testimonials/<id>/ - Update testimonial (admin)
DELETE /api/testimonials/<id>/ - Delete testimonial (admin)
```

### Contact Inquiries
```
GET    /api/contact/           - List inquiries (admin)
GET    /api/contact/<id>/      - Retrieve specific inquiry
POST   /api/contact/           - Submit contact inquiry
PUT    /api/contact/<id>/      - Update inquiry (admin)
DELETE /api/contact/<id>/      - Delete inquiry (admin)
```

### API Documentation
```
GET    /api/routes/            - List all available endpoints
```

---

## Database Models

### Service
- `name`: Service name
- `description`: Service description
- `service_type`: Category (Distribution, Testing, etc.)
- `icon`: Icon identifier
- `is_active`: Whether service is active
- `created_at`, `updated_at`: Timestamps

### TeamMember
- `name`: Full name
- `position`: Job title
- `email`: Contact email
- `phone`: Contact phone
- `image_url`: Profile image URL
- `created_at`, `updated_at`: Timestamps

### Testimonial
- `author_name`: Customer name
- `location`: Location (Mabalacat City)
- `message`: Testimonial text
- `rating`: 1-5 stars
- `is_featured`: Display on homepage
- `created_at`, `updated_at`: Timestamps

### ContactInquiry
- `name`: Sender name
- `email`: Sender email
- `subject`: Inquiry subject
- `message`: Inquiry message
- `status`: new, in_progress, resolved, closed
- `created_at`, `updated_at`: Timestamps

---

## Features

### Frontend Features
- ✅ Home page with hero section
- ✅ Service showcase with cards
- ✅ Team member profiles with images
- ✅ Customer testimonials
- ✅ Contact form
- ✅ Office location and info
- ✅ Mobile responsive design
- ✅ Professional styling
- ✅ Smooth navigation with React Router

### Backend Features
- ✅ RESTful API with Django REST Framework
- ✅ CORS support for frontend integration
- ✅ Environment-based configuration
- ✅ SQLite database with migrations
- ✅ Admin interface for data management
- ✅ Sample data loading
- ✅ API documentation endpoint
- ✅ Serialization for all models
- ✅ Complete error handling

---

## Configuration

### Frontend .env
```
REACT_APP_API_URL=http://localhost:8000/api
```

### Backend .env
```
DEBUG=True
SECRET_KEY=django-insecure-mcwd-quiz2-local-development-key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
DATABASE_NAME=db.sqlite3
```

---

## CORS Configuration

The backend is configured to accept requests from the React frontend at:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

Update `backend/.env` to add more origins:
```
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://example.com
```

---

## Sample Data

The backend includes sample data for testing:
- 4 Services (Water Supply, Testing, Billing, Support)
- 4 Team Members with professional images
- 3 Testimonials from Mabalacat residents

Load sample data:
```bash
cd backend
python manage.py load_sample_data
```

---

## Running Both Servers

**Terminal 1 (Frontend):**
```bash
npm start
```

**Terminal 2 (Backend):**
```bash
cd backend
.\venv\Scripts\python.exe manage.py runserver
```

Both servers will run simultaneously.

---

## Usage Examples

### Fetch Services in React
```javascript
import { getServices } from './services/api';

useEffect(() => {
  getServices().then(response => {
    console.log(response.data); // Array of services
  });
}, []);
```

### Submit Contact Form
```javascript
import { submitContactInquiry } from './services/api';

const handleSubmit = (formData) => {
  submitContactInquiry(formData).then(response => {
    console.log('Inquiry submitted:', response.data);
  });
};
```

---

## Common Issues & Solutions

### CORS Errors in Browser
- Ensure backend is running on port 8000
- Check `.env` CORS_ALLOWED_ORIGINS matches frontend URL
- Clear browser cache and reload

### "Module not found" errors
- Run `npm install` (frontend)
- Run `pip install -r requirements.txt` (backend)

### Port 3000 or 8000 already in use
- Kill process: `lsof -ti:3000 | xargs kill -9` (macOS/Linux)
- Or specify different port: `npm start -- --port 3001`

### Virtual environment issues
- Delete `venv/` folder and recreate: `python -m venv venv`
- Reactivate and reinstall: `pip install -r requirements.txt`

---

## Deployment

For production deployment:

1. **Frontend**: Build and deploy to hosting (Vercel, Netlify, GitHub Pages)
2. **Backend**: Deploy to cloud platform (Heroku, PythonAnywhere, AWS, DigitalOcean)

See `backend/README.md` for production setup details.

---

## Version Control

The project is version controlled with Git and pushed to GitHub:
```
Repository: https://github.com/sanapumasa-slr123/Quiz1.git
Branch: main
```

---

## Company Information

**Mabalacat City Water District (MCWD)**
- Main Office: Ground Reservoir, Pampanga 2301
- Phone: (045) 324-5678
- Email: support@mcwd.gov.ph
- Established: 2008
- Service Coverage: 250,000+ people

---

## License

Educational project for academic purposes.

---

**Created for**: Quiz 2 Assignment  
**Student**: [Student Name]  
**Date**: December 2025

---

For detailed backend documentation, see `backend/README.md`  
  - Eng. Carlos Fernandez (Operations Manager)
  - Mr. John Reyes (Finance Director)

### Contact Page
- Office address: Water District Office, Barangay Tayabas, Mabalacat City, Pampanga 2301
- Phone: (045) 324-5678
- Email: support@mcwd.gov.ph
- Office hours and contact form
- Facebook and messaging platform info

## Components Used
- **Navbar**: Responsive navigation with mobile menu
- **HeroSection**: Reusable banner component 
- **FeaturesSection**: Service cards and highlights grid
- **TestimonialsSection**: Customer reviews with ratings
- **Footer**: Company info and quick links

The website provides information about MCWD's water services to Mabalacat City residents and businesses.