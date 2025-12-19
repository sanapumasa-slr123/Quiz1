from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Service, TeamMember, Testimonial, ContactInquiry
from .serializers import ServiceSerializer, TeamMemberSerializer, TestimonialSerializer, ContactInquirySerializer, APIRoutesSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    """
    API endpoint for services.
    List all services or retrieve a specific service.
    """
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


class TeamMemberViewSet(viewsets.ModelViewSet):
    """
    API endpoint for team members.
    List all team members or retrieve a specific team member.
    """
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class TestimonialViewSet(viewsets.ModelViewSet):
    """
    API endpoint for testimonials.
    List all testimonials or retrieve a specific testimonial.
    """
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class ContactInquiryViewSet(viewsets.ModelViewSet):
    """
    API endpoint for contact inquiries.
    List all inquiries or create a new inquiry.
    """
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer


class APIRoutesView(APIView):
    """
    API endpoint that lists all available routes and their descriptions.
    """
    def get(self, request):
        routes = [
            {
                'endpoint': '/api/services/',
                'method': 'GET',
                'description': 'List all active services'
            },
            {
                'endpoint': '/api/services/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific service'
            },
            {
                'endpoint': '/api/team/',
                'method': 'GET',
                'description': 'List all team members'
            },
            {
                'endpoint': '/api/team/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific team member'
            },
            {
                'endpoint': '/api/testimonials/',
                'method': 'GET',
                'description': 'List all testimonials'
            },
            {
                'endpoint': '/api/testimonials/<id>/',
                'method': 'GET',
                'description': 'Retrieve a specific testimonial'
            },
            {
                'endpoint': '/api/contact/',
                'method': 'POST',
                'description': 'Submit a contact inquiry'
            },
            {
                'endpoint': '/api/contact/',
                'method': 'GET',
                'description': 'List all contact inquiries'
            },
            {
                'endpoint': '/api/routes/',
                'method': 'GET',
                'description': 'List all available API routes'
            },
        ]
        return Response(routes)
