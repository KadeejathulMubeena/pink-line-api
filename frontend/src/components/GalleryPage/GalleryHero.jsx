import React from 'react'
import Office1 from '../../assets/office1.jpg'

function GalleryHero() {
  return (
      <section className="relative h-[30vh] flex items-center justify-center bg-white pt-16 overflow-hidden border-b border-gray-100">
  
  {/* The Grid Pattern - Light Blue/Gray lines on White */}
  <div 
    className="absolute inset-0 opacity-40"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }}
  ></div>

  {/* Soft Radial Fade to make the center text pop */}
  <div className="absolute inset-0 bg-radial-gradient from-transparent to-white opacity-80"></div>

  <div className="relative z-10 text-center pt-20">
    <span className="block text-tg-blue font-black tracking-[0.4em] uppercase text-[10px] mb-2">
      Portfolio
    </span>
    <h1 className="text-slate-800 text-3xl md:text-5xl font-black uppercase tracking-tight">
      Project <span className="text-tg-blue">Gallery</span>
    </h1>
    {/* Minimalist Blue Underline */}
  </div>
</section>


    // <div className="relative h-[55vh] md:h-[65vh]  flex items-center justify-center bg-tg-blue">
    // {/* The Image */}
    // <img src={Office1} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
    
    // {/* The Content */}
    // <div className="relative text-center">
    //     <h1 className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-tight">Our Portfolio</h1>
    //     <p className="text-blue-100 mt-2">Precision in every project</p>
    //             <div className="w-20 h-1 bg-blue-400 mx-auto mt-6 rounded-full"></div>

    // </div>
    
    // </div>
  )
}

export default GalleryHero
