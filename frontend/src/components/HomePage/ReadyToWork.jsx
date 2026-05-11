import React from 'react'
import readyToWork from '../../assets/ready-to-work.webp'
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

function ReadyToWork() {

  const navigate = useNavigate ();

  const buttonClasses = `
    rounded-sm lg:rounded-lg border-2 border-blue-50 
    text-sm sm:text-md lg:text-lg tracking-wide
    py-2 px-4 md:py-4 md:px-8 uppercase 
    cursor-pointer transition-all duration-300 
    hover:bg-white hover:text-tg-blue hover:shadow-xl 
    font-bold transform hover:-translate-y-0.5
  `;

  const whatsappNumber = "917306225429"; 
  const message = "Hello Pink Line Team, I am interested in your services."; 
  
  // Encode the message for the URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className='bg-white relative w-full overflow-hidden'>
      <img 
        src={readyToWork} 
        alt="Ready to work background"
        className='w-full h-70 sm:h-80  md:h-112.5 object-cover'
      />
      
      <div className='absolute inset-0 m-auto bg-tg-blue/95 p-6 md:p-10 text-blue-100 z-20 
                      h-fit w-[85%] md:w-[70%] lg:w-[50%] 
                      flex flex-col items-center justify-center gap-6 md:gap-10 
                      shadow-2xl backdrop-blur-sm'>
        
        <h3 className='font-bold text-center text-lg md:text-xl lg:text-2xl uppercase tracking-[0.15em]'>
          Ready To Work With Us?
        </h3>
        
        <div className='flex gap-4 md:gap-8 justify-center  w-full'>
          <button 
          onClick={() => navigate('/contact')}
           className={buttonClasses}>
            Contact Us
          </button>
          <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        WhatsApp
      </a>
        </div>
      </div>
    </section>
  )
}

export default ReadyToWork