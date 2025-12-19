# MCWD API Backend - Quiz 2

Django REST Framework backend for Mabalacat City Water District (MCWD) website.

## Tech Stack

- **Framework**: Django 4.2.7
- **API**: Django REST Framework 3.14.0
- **Database**: SQLite3
- **CORS**: django-cors-headers 4.3.1
- **Environment**: python-dotenv 1.0.0
- **Image Processing**: Pillow 10.1.0

## Project Structure

```
backend/
├── mcwd_api/              # Main project configuration
│   ├── settings.py        # Django settings with CORS & DRF config
│   ├── urls.py            # Main URL routing
│   ├── wsgi.py            # WSGI application
│   └── asgi.py            # ASGI application
├── services/              # Main API app
│   ├── models.py          # Database models
│   ├── serializers.py     # DRF serializers
│   ├── views.py           # API viewsets and views
│   ├── urls.py            # API routing
│   ├── admin.py           # Django admin configuration
│   └── management/
│       └── commands/
│           └── load_sample_data.py  # Sample data loader
├── db.sqlite3             # SQLite database
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── .env                   # Environment variables (not tracked in git)
├── .gitignore             # Git ignore rules
└── venv/                  # Python virtual environment
```

## Database Models

### Service
- `id`: Primary key
- `name`: Service name (max 100 chars)
- `description`: Detailed description
- `service_type`: Category (Distribution, Testing, etc.)
- `icon`: Icon identifier for frontend
- `is_active`: Boolean flag for active services
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### TeamMember
- `id`: Primary key
- `name`: Full name
- `position`: Job title
- `email`: Contact email
- `phone`: Contact phone number
- `image_url`: Profile image URL
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### Testimonial
- `id`: Primary key
- `author_name`: Customer name
- `location`: Location (e.g., Mabalacat City)
- `message`: Testimonial message
- `rating`: 1-5 star rating
- `is_featured`: Whether to display on homepage
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### ContactInquiry
- `id`: Primary key
- `name`: Inquiry sender name
- `email`: Sender email
- `subject`: Inquiry subject
- `message`: Inquiry message
- `status`: new, in_progress, resolved, closed
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Installation & Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Activate Virtual Environment
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables
Create/Edit `.env` file:
```
DEBUG=True
SECRET_KEY=django-insecure-mcwd-quiz2-local-development-key
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
DATABASE_NAME=db.sqlite3
```

### 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Load Sample Data (Optional)
```bash
python manage.py load_sample_data
```

### 7. Create Superuser (Optional - for Django Admin)
```bash
python manage.py createsuperuser
```

### 8. Run Development Server
```bash
python manage.py runserver
```

Server will be available at: `http://localhost:8000`

## API Endpoints

### Services
- **GET** `/api/services/` - List all active services
- **GET** `/api/services/<id>/` - Retrieve specific service
- **POST** `/api/services/` - Create new service (admin only)
- **PUT** `/api/services/<id>/` - Update service (admin only)
- **DELETE** `/api/services/<id>/` - Delete service (admin only)

### Team Members
- **GET** `/api/team/` - List all team members
- **GET** `/api/team/<id>/` - Retrieve specific team member
- **POST** `/api/team/` - Create new team member (admin only)
- **PUT** `/api/team/<id>/` - Update team member (admin only)
- **DELETE** `/api/team/<id>/` - Delete team member (admin only)

### Testimonials
- **GET** `/api/testimonials/` - List all testimonials
- **GET** `/api/testimonials/<id>/` - Retrieve specific testimonial
- **POST** `/api/testimonials/` - Create new testimonial
- **PUT** `/api/testimonials/<id>/` - Update testimonial (admin only)
- **DELETE** `/api/testimonials/<id>/` - Delete testimonial (admin only)

### Contact Inquiries
- **GET** `/api/contact/` - List all contact inquiries (admin only)
- **GET** `/api/contact/<id>/` - Retrieve specific inquiry
- **POST** `/api/contact/` - Submit new contact inquiry
- **PUT** `/api/contact/<id>/` - Update inquiry status (admin only)
- **DELETE** `/api/contact/<id>/` - Delete inquiry (admin only)

### API Documentation
- **GET** `/api/routes/` - List all available API routes and descriptions

## Example API Requests

### Get All Services
```bash
curl http://localhost:8000/api/services/
```

### Get Specific Team Member
```bash
curl http://localhost:8000/api/team/1/
```

### Submit Contact Inquiry
```bash
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Water Issue",
    "message": "I have a water quality concern..."
  }'
```

### Get All Routes
```bash
curl http://localhost:8000/api/routes/
```

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

To add more origins, update the `.env` file:
```
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,https://example.com
```

## Django Admin

Access Django admin panel at: `http://localhost:8000/admin/`

Use the superuser credentials created with `createsuperuser` command.

## Frontend Integration

The React frontend (running on `localhost:3000`) connects to this backend API.

Update the frontend `.env` file:
```
REACT_APP_API_URL=http://localhost:8000/api
```

Use Axios in React components:
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Get services
apiClient.get('/services/').then(response => {
  console.log(response.data);
});

// Submit contact
apiClient.post('/contact/', {
  name: 'User',
  email: 'user@example.com',
  subject: 'Question',
  message: 'Hello...'
}).then(response => {
  console.log(response.data);
});
```

## Troubleshooting

### "ModuleNotFoundError: No module named 'rest_framework'"
- Ensure virtual environment is activated
- Run `pip install -r requirements.txt`

### "CORS errors" in browser console
- Check `.env` file CORS_ALLOWED_ORIGINS matches frontend URL
- Verify frontend and backend are on correct ports

### "No such table" error
- Run migrations: `python manage.py migrate`

### Port 8000 already in use
- Run on different port: `python manage.py runserver 8001`

## Environment Setup for Production

For production deployment:
1. Set `DEBUG=False` in `.env`
2. Use strong `SECRET_KEY`
3. Configure proper `ALLOWED_HOSTS`
4. Use PostgreSQL instead of SQLite
5. Set `CORS_ALLOWED_ORIGINS` to actual domain
6. Use environment-specific database credentials

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers)

---

**Created for**: Mabalacat City Water District (MCWD) - Quiz 2 Submission
**Student**: [Your Name]
