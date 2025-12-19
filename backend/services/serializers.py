from rest_framework import serializers
from .models import Service, TeamMember, Testimonial, ContactInquiry


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'description', 'service_type', 'icon', 'is_active', 'created_at', 'updated_at']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'email', 'phone', 'image_url', 'created_at', 'updated_at']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'author_name', 'location', 'message', 'rating', 'is_featured', 'created_at', 'updated_at']


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'name', 'email', 'subject', 'message', 'status', 'created_at', 'updated_at']


class APIRoutesSerializer(serializers.Serializer):
    """Serializer for API routes information"""
    endpoint = serializers.CharField()
    method = serializers.CharField()
    description = serializers.CharField()
