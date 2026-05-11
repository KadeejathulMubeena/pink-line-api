import React from 'react';
import Hero from '../../assets/whoweare.png';

function AboutUs() {
  return (
    <section className='bg-white pt-10 sm:pt-16 md:pt-20 lg:pt-24'> 
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-10'>
        
        {/* Image - Added a slight shadow and rounded corners for a modern feel */}
        <div className='lg:w-1/2 w-full'>
          <img 
            src={Hero} 
            alt="About Pink Line Engineering"
            className='w-full h-auto object-cover rounded-xl shadow-sm'
          />
        </div>

        {/* Content */}
        <div className='lg:w-1/2 max-w-xl'>
          {/* Using mb-6 instead of mb-8 to keep the heading closer to its description */}
          <div className="border-tg-blue border-l-4 pl-4 mb-6">
            <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-tg-black leading-tight'>
              About Us
            </h2>
          </div> 
          
          <div className='space-y-4'>
            <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
              Pink Line Engineering and Contracting L.L.C is a trusted name 
              in the engineering and contracting industry, known for delivering
              superior quality projects with precision and professionalism.
            </p>

            <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
              With a focus on safety, sustainability, and efficiency, we specialize
              in building projects, oil and gas field services, and advanced
              technology-driven construction solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
export default AboutUs;