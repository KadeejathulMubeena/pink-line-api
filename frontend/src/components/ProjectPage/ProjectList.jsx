import React, { useState, useEffect } from 'react'; // Added hooks
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

function ProjectList() {
  const [projects, setProjects] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from Django
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleView = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/projects/${slug}`);
  };

  if (loading) return (
                      <div className="flex items-center justify-center gap-3 pt-26">
                        <div className="w-5 h-5 border-3 border-tg-blue/40 border-t-tg-blue rounded-full animate-spin"></div>
                            Loading Projects...
                    </div>);

  return (
    <section className='bg-white py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12'>
        {projects.map((project, index) => {
          const isLarge = index % 4 === 0 || index % 4 === 3;
          const gridClass = isLarge ? 'lg:col-span-2' : 'lg:col-span-1';

          return (
            <div key={project.id || index} className={gridClass}>
              <div className='relative rounded-lg w-full h-80 overflow-hidden group'>
                <img 
                  src={project.hero_image} 
                  alt={project.title}
                  className='object-cover h-full w-full transition-transform duration-300 group-hover:scale-105'
                />
                
                <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <button 
                    onClick={() => handleView(project.title)}
                    className='rounded-full px-6 py-3 bg-tg-blue text-white font-medium'
                  >
                    View
                  </button>
                </div>
              </div>

              <h3 className='mt-4 tracking-wide text-black font-semibold text-xl md:text-2xl'>
                {project.title} 
              </h3>
              <p className='text-gray-500'>{project.location}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default ProjectList;