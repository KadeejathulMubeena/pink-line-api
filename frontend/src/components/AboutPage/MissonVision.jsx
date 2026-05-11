import React from 'react';
import { Target, Eye } from 'lucide-react';

function MissionVision() {
  return (
    // Matching the pt logic from your AboutUs section
    <section className='bg-white pt-10 sm:pt-16 md:pt-20 lg:pt-24'>
      {/* 
          Using a grid ensures both cards are the same width/height automatically.
          Gap-8 or 10 provides enough breathing room.
      */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
        
        {/* Mission Card */}
        <div className='group border border-gray-400 p-8 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out bg-slate-50/50'>
          <div className="flex items-center gap-4 mb-4">
            {/* Background wrap for the icon makes it look more premium */}
            <div className='p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg'>
              <Target className="text-blue-600" size={28} />
            </div>
            <h3 className='text-xl tracking-wide text-black font-bold uppercase'>
              Our Mission
            </h3>
          </div>
          <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
            To deliver innovative and sustainable engineering solutions that exceed client expectations
            while fostering long-term relationships built on trust, reliability, and excellence.
          </p>
        </div>

        {/* Vision Card */}
        <div className='group border border-gray-400 p-8 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out bg-slate-50/50'>
          <div className="flex items-center gap-4 mb-4">
            <div className='p-2 bg-blue-50 group-hover:bg-blue-100 rounded-lg'>
              <Eye className="text-blue-600" size={28} />
            </div>
            <h3 className='text-xl tracking-wide text-black font-bold uppercase'>
              Our Vision
            </h3>
          </div>
          <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
            To become a global leader in engineering and contracting by consistently delivering
            high-quality projects and setting new industry benchmarks.
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;