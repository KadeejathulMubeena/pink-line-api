import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { navLinks } from './Navbar'
import { Link, useLocation } from 'react-router-dom'

function Footer() {

  const location = useLocation();
  return (
    <footer className='bg-tg-blue text-white pt-20 pb-10 px-12 lg:px-30 w-full font-serif'>
      
      <div className='flex flex-row justify-between items-start gap-7 border-b border-white/30 pb-12'>
        
        <div className='flex flex-col gap-6 md:gap-8'>
          <div className="text-2xl  lg:text-3xl font-black tracking-tighter uppercase">
            Pink Line
          </div>
          
          <div className='space-y-4 text-blue-50/70 text-sm '>
            <div className='flex gap-3 items-start'>
              <MapPin size={18} className='text-white shrink-0 mt-1' />
              <p className=' leading-relaxed'>
                P.O. Box 91800, M-36<br />
                Mussafah, Abu Dhabi, UAE
              </p>
            </div>
            <div className='flex gap-3 items-center'>
              <Phone size={16} className='text-white shrink-0' />
              <p className='font-medium'>+971 50 158 1094</p>
            </div>
            <div className='flex gap-3 items-center'>
              <Mail size={16} className='text-white shrink-0' />
              <p className='font-medium'>info@pinkline.ae</p>
            </div>
          </div>
        </div>

     
        <nav className='flex flex-col md:flex-row gap-x-10 gap-y-4 text-sm md:text-md  tracking-wider  text-right md:text-left'>
          {navLinks.map((link,index)=>{
              const isActive = location.pathname === link.path || 
               (link.path === '/projects' && location.pathname.startsWith('/projects/'));
            return(
            <Link to={link.path}
            key={index}
            className={`group transition-all duration-300 ${isActive ? "font-bold" : "font-normal"}`}>
            {link.name}
            <span className='hidden md:block h-px w-0 bg-white transition-all duration-300 group-hover:w-full'></span>
            </Link>)
            
          })}
        </nav>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center pt-8 gap-6'>
        <div className='text-xs text-blue-50/70 tracking-widest uppercase text-center md:text-left'>
          © 2026 Pink Line Engineering and Contracting L.L.C.
        </div>

        <div className='flex items-center gap-6 md:gap-8'>
          <a href="#" className='text-lg md:text-xl opacity-60 hover:opacity-100 hover:text-[#1877F2] transition-all transform hover:-translate-y-1'>
            <FaFacebook />
          </a>
          <a href="#" className='text-lg md:text-xl opacity-60 hover:opacity-100 hover:text-[#0A66C2] transition-all transform hover:-translate-y-1'>
            <FaLinkedin />
          </a>
          <a href="#" className='text-lg md:text-xl opacity-60 hover:opacity-100 hover:text-[#E4405F] transition-all transform hover:-translate-y-1'>
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer