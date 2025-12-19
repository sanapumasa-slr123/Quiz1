from django.core.management.base import BaseCommand
from services.models import Service, TeamMember, Testimonial, ContactInquiry


class Command(BaseCommand):
    help = 'Load sample data for MCWD API'

    def handle(self, *args, **options):
        # Clear existing data
        Service.objects.all().delete()
        TeamMember.objects.all().delete()
        Testimonial.objects.all().delete()

        # Create services
        services_data = [
            {
                'name': 'Water Supply',
                'description': 'Reliable 24/7 potable water distribution to residential and commercial areas',
                'service_type': 'Distribution',
                'icon': 'droplet',
                'is_active': True
            },
            {
                'name': 'Water Testing & Quality Assurance',
                'description': 'Regular water quality testing and monitoring to ensure safe drinking water',
                'service_type': 'Testing',
                'icon': 'beaker',
                'is_active': True
            },
            {
                'name': 'Billing & Payment',
                'description': 'Convenient payment options and billing services for our customers',
                'service_type': 'Administrative',
                'icon': 'receipt',
                'is_active': True
            },
            {
                'name': 'Customer Support',
                'description': 'Responsive customer service and leak reporting hotline available 24/7',
                'service_type': 'Support',
                'icon': 'headset',
                'is_active': True
            }
        ]

        for service in services_data:
            Service.objects.create(**service)
            self.stdout.write(self.style.SUCCESS(f'Created service: {service["name"]}'))

        # Create team members
        team_data = [
            {
                'name': 'Engr. Maria Santos',
                'position': 'General Manager',
                'email': 'maria.santos@mcwd.gov.ph',
                'phone': '(045) 324-5678',
                'image_url': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
            },
            {
                'name': 'Engr. Juan Cruz',
                'position': 'Operations Manager',
                'email': 'juan.cruz@mcwd.gov.ph',
                'phone': '(045) 324-5679',
                'image_url': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
            },
            {
                'name': 'Ana Garcia',
                'position': 'Finance Director',
                'email': 'ana.garcia@mcwd.gov.ph',
                'phone': '(045) 324-5680',
                'image_url': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
            },
            {
                'name': 'Dr. Ramon Lopez',
                'position': 'Quality Assurance Head',
                'email': 'ramon.lopez@mcwd.gov.ph',
                'phone': '(045) 324-5681',
                'image_url': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
            }
        ]

        for member in team_data:
            TeamMember.objects.create(**member)
            self.stdout.write(self.style.SUCCESS(f'Created team member: {member["name"]}'))

        # Create testimonials
        testimonials_data = [
            {
                'author_name': 'Mrs. Patricia Reyes',
                'location': 'Mabalacat City',
                'message': 'MCWD has significantly improved water supply reliability in our area. The service is exceptional!',
                'rating': 5,
                'is_featured': True
            },
            {
                'author_name': 'Mr. Ferdinand Villareal',
                'location': 'Mabalacat City',
                'message': 'Fast response to water issues and excellent customer service. Highly recommended!',
                'rating': 5,
                'is_featured': True
            },
            {
                'author_name': 'Ms. Christine Soriano',
                'location': 'Mabalacat City',
                'message': 'Clean, safe drinking water consistently delivered. MCWD is doing great work!',
                'rating': 5,
                'is_featured': True
            }
        ]

        for testimonial in testimonials_data:
            Testimonial.objects.create(**testimonial)
            self.stdout.write(self.style.SUCCESS(f'Created testimonial from: {testimonial["author_name"]}'))

        self.stdout.write(self.style.SUCCESS('Sample data loaded successfully!'))
