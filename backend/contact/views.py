from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail
from django.conf import settings

class ContactCreateView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        
        if serializer.is_valid():
            # 1. Save to Database (Postgres)
            contact_instance = serializer.save()

            # 2. Send Email Notification (Optional but recommended)
            try:
                self.send_contact_email(contact_instance)
            except Exception as e:
                print(f"Email failed to send: {e}")

            return Response(
                {"message": "Inquiry received successfully!"}, 
                status=status.HTTP_201_CREATED
            )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_contact_email(self, contact):
        subject = f"PINK LINE Customer : {contact.subject}"
        message = (
            f"You have a new inquiry from {contact.full_name}.\n\n"
            f"Email: {contact.email}\n\n"
            f"Message: {contact.message}"
        )
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['kadeejathulmubeena97@gmail.com'], # Replace with your actual email
            fail_silently=False,
        )