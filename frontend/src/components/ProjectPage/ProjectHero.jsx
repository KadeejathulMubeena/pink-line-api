import React from 'react'
import heroImage from '../../assets/buildingHero.jpg';

function ProjectHero() {
  return (
    <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden ">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
            <img 
                src={heroImage} 
                alt="Modern Building Architecture" 
                // Increased mix-blend-overlay impact for a more premium "tinted" look
                className="h-full w-full object-cover grayscale-20"
            />
            
            {/* Subtle Gradient to make the text "pop" regardless of the image behind it */}
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent"></div>
        </div>
    
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mt-20">
            {/* Tagline above the heading (Matches the Contact Hero style) */}
            <span className='inline-block font-bold text-tg-black/80 tracking-[0.3em] uppercase text-xs mb-4'>
                Portfolio
            </span>
            
            {/* Changed to text-white for better contrast against the blue background */}
            <h1 className="text-tg-blue text-4xl sm:text-5xl  font-extrabold leading-tight uppercase tracking-tight">
                Our Projects
            </h1>
            
            {/* Added a small decorative underline or divider for extra polish */}
            {/* <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div> */}
        </div>
    </section>
  )
}

export default ProjectHero