import React from 'react'

function PageHeader({ title, subtitle, image }) {
  return (
<section className="relative h-[45vh] md:h-[50vh] w-full px-12 lg:px-30 flex items-center justify-center overflow-hidden bg-slate-900">      
    <img 
        src={image} 
        className="absolute inset-0 w-full h-full object-cover opacity-20" 
        alt={title}
      />
    <div className="absolute inset-0 bg-linear-to-b from-white via-white/40 to-transparent"></div>
    <div className="relative z-10 text-center px-6 pt-24 md:pt-32">        
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-widest">
          {title}
        </h1>
        {subtitle && <p className="text-tg-blue mt-2 tracking-wide italic">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader
