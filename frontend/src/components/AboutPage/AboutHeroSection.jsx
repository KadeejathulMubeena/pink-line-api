import React from 'react'
import heroImage from '../../assets/buildingHero.jpg';

function AboutHeroSection() {
  return (
        <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden  ">
            <div className="absolute inset-0">
                    <img 
                    src={heroImage} 
                    alt="Modern Building Architecture" 
                    className="h-full w-full object-cover"
                    />
                    {/* Brightness Overlay: Light white tint with a subtle blur */}
                    <div className="absolute inset-0 backdrop-blur-[xs]"></div>
                    {/* Blends the bottom of the image into the next white section */}
                    <div className="absolute inset-0 bg-linear-to-b from-white to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl ">
                <h1 className="text-tg-black text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-25 leading-tight mb-6">
                    Pink Line <br/>  
                    <span className="block text-tg-blue ">
                        Engineering and Contracting L.L.C
                    </span>
                </h1>

                {/* Description - Slate gray is easier on the eyes in bright designs */}
                <p className="text-slate-900 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                    Built on integrity. <br/>
                    Driven by excellence
                </p>
            </div>
        </section>
  )
}

export default AboutHeroSection
