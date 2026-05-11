import React from 'react';
import heroImage from '../../assets/Tallest-buildings-in-Abu-Dhabi.jpg';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react'; // Added icons for a premium look

function HeroSection() {
  const navigate = useNavigate();

  // Base transition and layout styles
  const baseBtn = `w-full sm:w-auto flex items-center justify-center gap-2
    rounded-sm lg:rounded-lg text-sm sm:text-md lg:text-lg tracking-wide font-bold 
    py-3 px-8 uppercase transition-all duration-300 transform hover:-translate-y-0.5`;

  // Primary: Solid Blue
  const primaryBtn = `${baseBtn} bg-tg-blue text-white  hover:bg-white hover:text-tg-blue hover:shadow-xl`;

  // Secondary: Outlined/Clear
  const secondaryBtn = `${baseBtn} bg-white/80 backdrop-blur-sm text-tg-blue  hover:bg-tg-blue hover:text-white`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white ">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Building Architecture" 
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-12 text-center max-w-5xl">
        <span className="inline-block text-tg-blue font-black tracking-[0.4em] uppercase text-xs mb-4  px-4 py-1 rounded-full">
          Engineering Excellence
        </span>

        <h1 className="text-slate-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8">
          Building the Future with <br />
          <span className="text-tg-blue">Pink Line</span>
        </h1>

        <p className="text-black text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 ">
          Your vision, our engineering precision. 
        </p>

        {/* Standardized CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className={primaryBtn}
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <ArrowRight size={18} />
          </button>
          
          <button 
            onClick={() => navigate('/projects')} 
            className={secondaryBtn}
          >
            <Briefcase size={18} />
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;