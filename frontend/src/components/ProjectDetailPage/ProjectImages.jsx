import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: npm install lucide-react

function ProjectImages({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project?.gallery || [];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) return null;

  return (
    <div className='container bg-white py-8 sm:py-12 md:py-16 lg:py-20'>
      {/* Reduced height container: h-64 for mobile, md:h-96 for desktop */}
      <div className='relative w-full h-90 sm:h-100 md:h-110 overflow-hidden rounded-2xl group'>
        
        {/* Slides */}
        {images.map((img, index) => (
          <div
            key={img.id || index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img.image}
              alt={img.alt_text || 'Project Gallery'}
              className='w-full h-full object-cover'
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white transition-colors'
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white transition-colors'
        >
          <ChevronRight size={30} />
        </button>
        
      </div>
    </div>
  );
}

export default ProjectImages;