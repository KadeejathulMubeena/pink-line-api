import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react'; 
import { Link, useLocation } from 'react-router-dom';

export const navLinks = [
  { name: 'HOME', path: "/" },
  { name: 'ABOUT US', path: "/about" },
  { name: 'PROJECTS', path: "/projects" },
  { name: 'GALLERY', path: "/gallery" },
  { name: 'CONTACT', path: "/contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

    const buttonClasses = `
    flex items-center gap-1
    rounded-lg border border-tg-blue 
    text-sm lg:text-md font-serif tracking-wider
    py-2 px-4 md:py-2 md:px-4 uppercase
    font-bold
    cursor-pointer transition-all duration-300 
    bg-tg-blue text-white
    hover:bg-white hover:text-tg-blue hover:shadow-lg 
    transform hover:-translate-y-0.5
  `;

  const whatsappNumber = ""; 
  const message = "Hello Pink Line Team, I am interested in your services."; 
  
  // Encode the message for the URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    const handleSticky = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/10 transition-opacity duration-500 z-90 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <header
  className={`px-12 lg:px-30 w-full border-b transition-all duration-500 ease-in-out fixed top-0 left-0 z-100 ${
    isSticky
      ? " bg-white/90 shadow-md border-gray-200 py-1"
      : " bg-white/10 backdrop-blur-[2px] border-white/20 py-1"
  }`}
>
        <nav className="container mx-auto py-5 flex items-center justify-between">
          <div className="text-3xl pr-5 font-bold text-tg-blue md:text-4xl tracking-tight z-110">
            Pink Line
          </div>

          <div className="lg:hidden flex items-center z-110">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-tg-black hover:text-tg-blue  focus:outline-none"
            >
              {menuOpen ? <X size={28} className='transition-all duration-300 transform hover:rotate-90'/> : <Menu size={28} />}
            </button>
          </div>

          {/* NAVIGATION LINKS */}
          <ul className={`
            fixed top-0 right-0 h-screen w-[50%]  bg-white z-100 p-10 flex flex-col pt-24
            transition-transform duration-300 ease-in-out shadow-2xl
            lg:static lg:h-auto lg:w-auto lg:max-w-none lg:bg-transparent lg:p-0 lg:flex-row lg:space-x-10 lg:shadow-none lg:translate-x-0
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            text-sm lg:text-md font-serif tracking-wider
          `}>
            {navLinks.map((link) => {

                const isActive = location.pathname === link.path || 
                   (link.path === '/projects' && location.pathname.startsWith('/projects/'));
              return (
                <Link 
                to={link.path}
                key={link.name}
                className={`group relative py-4 transition-all duration-200 border-b border-gray-300 hover:translate-x-1 lg:hover:translate-0 lg:border-none ${
                  isActive ? "text-tg-blue" : "text-tg-black hover:text-tg-blue"
                }`}
                onClick={() => {
                  setMenuOpen(false); 
                }}
              >
                <span className="relative inline-block">
                  {link.name}
                  <span className={`hidden lg:block absolute -bottom-1 left-0 h-0.5 w-0 bg-tg-blue transition-all duration-300
                  group-hover:w-full`}></span>
                </span>
              </Link>
              )
            }
              
            )}
           <li className="mt-4 lg:mt-1.5">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                <MessageCircle size={18} fill="currentColor" />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;