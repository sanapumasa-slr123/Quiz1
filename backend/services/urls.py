from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, TeamMemberViewSet, TestimonialViewSet, ContactInquiryViewSet, APIRoutesView

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'team', TeamMemberViewSet, basename='team-member')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'contact', ContactInquiryViewSet, basename='contact-inquiry')

urlpatterns = [
    path('', include(router.urls)),
    path('routes/', APIRoutesView.as_view(), name='api-routes'),
]
