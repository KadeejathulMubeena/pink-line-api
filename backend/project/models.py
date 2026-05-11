from django.db import models
from cloudinary_storage.storage import MediaCloudinaryStorage

class Project(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True, null=True) 
    description = models.TextField()
    hero_image = models.ImageField(upload_to='projects/heros/',storage=MediaCloudinaryStorage()  )   
    created_at = models.DateTimeField(auto_now_add=True) 

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"
        ordering = ['-created_at'] 

    def __str__(self):
        return f"{self.title} ({self.location})"

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='gallery', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/gallery/',storage=MediaCloudinaryStorage() )    
    alt_text = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Image for {self.project.title}"