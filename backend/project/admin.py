from django.contrib import admin
from .models import Project, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1  

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'created_at')
    
    # Enable searching and filtering
    search_fields = ('title', 'location')
    prepopulated_fields = {'slug': ('title',)} 
    
    # Attach the gallery inline
    inlines = [ProjectImageInline]

# admin.site.register(ProjectImage)
