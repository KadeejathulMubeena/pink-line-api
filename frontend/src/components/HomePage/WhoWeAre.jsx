import React from 'react'
import Contractor from '../../assets/whoweare.png'

function WhoWeAre() {
  return (
    <section className=' bg-white py-8 sm:py-12 md:py-16 lg:py-20 '>
        <div className='container mx-auto px-6 sm:pb-2 '>
            <h2 className='text-3xl md:text-4xl font-extrabold mb-8 text-tg-blue flex flex-col items-center text-center  uppercase tracking-tight'>
                Pink Line 
                <span className='text-tg-black font-medium text-lg md:text-xl lg:text-2xl tracking-widest mt-2'> 
                    Engineering and Contracting L.L.C
                </span>
            </h2>
        </div>
        <div className='relative my-10 h-90 sm:h-100 md:h-110  flex items-center'>
            {/* Image Container */}
            <div className='absolute inset-0 z-2'>
                <img 
                    src={Contractor}
                    alt='Contractor'
                    className='w-full h-full rounded-xl object-cover'
                />
                <div className="absolute inset-0 rounded-xl bg-black/20 backdrop-grayscale-20"></div>
            </div>
    {/* Text Box */}
            <div className='relative z-20 bg-black/20 
            backdrop-blur-md border border-white/20
            w-45 sm:w-60 md:w-70 lg:w-80 mx-8 sm:mx-10 md:mx-14 py-8 px-4 sm:px-6 md:px-8 lg:px-10 h-[110%] md:h-[115%] text-white tracking-wider flex flex-col 
            rounded-sm justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]'>
                <h3 className='text-[12px] sm:text-md md:text-lg tracking-[0.3em] 
                uppercase md:mb-4 text-blue-200'>
                    Who We Are</h3>
                <p className='text-[10px] sm:text-[13px] md:text-md  leading-4 sm:leading-5 md:leading-6 py-2 '>
                    Pink Line Engineering and Contracting L.L.C is a leading engineering and contracting company with a proven track record of delivering exceptional projects across various industries. 
                    From building projects to specialized oil and gas field services, we provide a comprehensive range of solutions tailored to meet our clients’ unique needs.        
                </p>
                <div className="w-12 h-1 bg-white/50 mt-6"></div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre
