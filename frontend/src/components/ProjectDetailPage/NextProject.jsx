import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 

function NextProject({ currentProject, allProjects }) {
  const navigate = useNavigate();

  // 1. Find the position of the current project
  const currentIndex = allProjects.findIndex(p => p.id === currentProject.id);
  
  // 2. Determine the next project (Loop to start if at the end)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];

  // 3. Safety check: Don't show if there's nothing to navigate to
  if (!allProjects.length || allProjects.length <= 1) return null;

  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20'>

    <div className="container mx-auto">
      <div 
        onClick={() => {
          navigate(`/projects/${nextProject.slug}`);
          window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }}
        className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
      >
        {/* Background Image with Zoom Effect on Hover */}
        <img
          src={nextProject.hero_image}
          alt={nextProject.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 group-hover:from-black/60 transition-colors" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
          <p className="text-sm uppercase tracking-widest font-semibold text-tg-blue mb-2">
            Next Project
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {nextProject.title}
          </h2>

          <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
            <span className="text-sm font-medium border-b border-white/50 pb-1">
              View Details
            </span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default NextProject;