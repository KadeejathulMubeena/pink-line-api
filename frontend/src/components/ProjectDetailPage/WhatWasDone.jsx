import React from 'react'
import { MapPin, Calendar } from 'lucide-react'; // Optional for better UI

function WhatWasDone({ project }) {
  if (!project) return null;

  return (
    <section className='bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20'>
      <div className='container mx-auto  flex flex-col lg:flex-row items-stretch gap-5 sm:gap-12 '>
        
        {/* Image Container - Using items-stretch and h-full to match content height */}
        <div className='lg:w-1/2'>
          <div className='relative h-full min-h-85'>
            <img 
              src={project.hero_image} 
              alt={project.title}
              className='w-full h-full object-cover rounded-xl shadow-xl'
            />
          </div>
        </div>

        {/* Content Container */}
        <div className='lg:w-1/2 flex flex-col justify-center'>
          
          {/* Heading Group */}
          <div className="border-tg-blue border-l-4 pl-3">
            {/* Fixed the vertical bar alignment */}
            <div>
              <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight'>
                What Was Done?
              </h2>
              <div className="flex flex-wrap gap-4 mt-1 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-tg-blue" />
                  {new Date(project.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} className="text-tg-blue" />
                  {project.location}
                </span>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-slate-600 text-base md:text-lg leading-relaxed whitespace-pre-line'>
              {project.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhatWasDone