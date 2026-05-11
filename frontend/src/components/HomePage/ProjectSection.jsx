import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

function ProjectSection() {

  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
   // State for the full list
   const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/projects/`);
        setAllProjects(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

// Handlers for cycling through projects
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  if (loading) return <div className="p-20 text-center">Loading Projects...</div>;
  if (allProjects.length === 0) return null;

  // The project currently displayed in the featured slot
  const currentProject = allProjects[currentIndex];

  return (
      <section className='flex gap-12 flex-col md:flex-row md:items-center pt-6 sm:pt-10 md:pt-12  pb-8 sm:pb-0'>
        <div className='md:w-1/3  '>
          <div className="border-tg-blue border-l-4 pl-4 mb-6">
            <h2 className='text-3xl md:text-4xl font-black uppercase tracking-wide text-tg-black leading-tight'>
              Our Projects
            </h2>
        </div>          
        <p className='pb-4 text-slate-600  text-sm md:text-base leading-relaxed'>
           {currentProject.description}
            </p>
          <button 
          onClick={()=> navigate("/projects")}
          className='group text-tg-blue text-xs lg:text-sm tracking-[0.2em] transition-all font-bold flex items-center gap-2'>
          VIEW ALL PROJECTS 
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
        </div>
        <div className='relative md:flex-1 h-85 sm:h-90 md:h-92 lg:h-120 group'>
            <img 
            key={currentProject.id}
          src={currentProject.hero_image}
          alt={currentProject.title}
              className='absolute w-full h-full object-cover rounded-xl shadow-lg inset-0 z-5 
              transition-transform duration-500 group-hover:scale-105 '
            >
            </img>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10
             transition-transform duration-500  group-hover:scale-105 rounded-b-xl"></div>
            <div className=' absolute bottom-0 left-0  right-0 z-12  text-white gap-3 p-10 text-[12px] sm:text-[13px] md:text-md/9 '>
            
              <h4 className='text-xl md:text-3xl font-bold pb-5 uppercase tracking-tight text-tg-blue' >
                {currentProject.title}
              </h4>
              <p className='pb-5 uppercase tracking-wide '>
                {currentProject.location}</p>
              <div className='flex justify-between '>
                
                <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500"
                onClick={() => navigate(`/projects/${currentProject.slug}`)}
                >
            <span className="text-sm font-medium border-b border-white/50 pb-1">
              View Project
            </span>
            <ArrowRight size={15} />
          </div>
                <div className='flex items-center gap-6 text-xs   font-bold tracking-[0.2em]'>
                  <button 
                  onClick={handlePrev}
                  className='opacity-60 hover:opacity-100 hover:-translate-x-1 transition-all uppercase cursor-pointer'>
                    ← Prev
                  </button>
                  <div className='h-4 w-px bg-white/30'></div>
                  <button 
                  onClick={handleNext}
                  className='opacity-60 hover:opacity-100 hover:translate-x-1 transition-all uppercase cursor-pointer'>
                    Next →
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProjectSection
