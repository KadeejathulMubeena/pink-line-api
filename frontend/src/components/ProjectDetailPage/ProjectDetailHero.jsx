import React from 'react'

function ProjectDetailHero({project}) {
  return (
    <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center overflow-hidden bg-white">
      
      <div className={`absolute inset-0 ${!project.hero_image? "bg-tg-blue/20": ""} bg-tg-blue/20`}>
            <img 
                src={project.hero_image} 
                alt={project.title} 
                className="h-full w-full object-cover"
            />
        {/* Subtle Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent"></div>

      </div>

      {/* Content Container */}
      <div className="relative z-10 container mt-20 mx-auto px-6 text-center max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">

        <h1 className="text-tg-blue text-3xl sm:text-4xl uppercase lg:text-5xl font-extrabold leading-tight ">
          {project.title} 
        </h1>
        <p className="text-tg-black text-lg md:text-xl font-medium uppercase leading-relaxed max-w-2xl mx-auto mb-8">
            {project.location}
        </p>

      </div>
    </section>
  )
}

export default ProjectDetailHero
