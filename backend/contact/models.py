from django.db import models

class Contact(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    # Subject is usually a single line, so CharField is more standard
    subject = models.CharField(max_length=255) 
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Contact Inquiry"
        verbose_name_plural = "Contact Inquiries"
        ordering = ['-created_at'] # Shows newest messages first

    def __str__(self):
        return f"{self.full_name} - {self.subject}"