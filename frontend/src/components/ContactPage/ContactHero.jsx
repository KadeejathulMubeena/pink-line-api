import React from 'react'
import Office1 from '../../assets/office1.jpg'

function ContactHero() {
  return (
    <div className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <img 
        src={Office1} 
        alt="Pink Line Office" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay " 
      />
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent"></div>
      
      {/* Content */}
      <div className="relative text-center px-4 mt-20">
        {/* Changed 'Wanna Chat?' to something more professional for Engineering */}
        <span className='inline-block font-bold text-white tracking-[0.2em] uppercase text-xs mb-4 bg-tg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20'>
          Get In Touch
        </span>
        
        {/* Refined Heading */}
        <h1 className="text-tg-blue text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
          Contact Our Team
        </h1>
        
        {/* Refined Subtext */}
        <p className="text-tg-black mt-4 text-sm md:text-lg max-w-lg mx-auto font-medium opacity-90">
          Send Us Your Feedback,We Love Hearing It!        </p>
      </div>
    </div>
  )
}

export default ContactHero