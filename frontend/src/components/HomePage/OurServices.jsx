import React from 'react'
import { 
  Building2, 
  Droplets, 
  Settings, 
  Zap, 
  Cpu, 
  Wrench 
} from 'lucide-react'

const services = [
  {
    title: "All Kind Building Projects Contracting",
    desc: "Our expertise in building contracting ensures quality construction for residential, commercial, and industrial projects. We deliver structures that stand the test of time.",
    icon: <Building2 size={28} />
  },
  {
    title: "Onshore and Offshore Oil and Gas Fields",
    desc: "Specialized services for oil and gas sectors, from facility construction to maintenance, ensuring operational excellence and safety.",
    icon: <Droplets size={28} />
  },
  {
    title: "Mechanical Contracting",
    desc: "Comprehensive mechanical contracting services, including HVAC systems, piping, and equipment installations tailored to your project needs.",
    icon: <Settings size={28} />
  },
  {
    title: "Electrical Contracting",
    desc: "Innovative electrical solutions for infrastructure, industrial facilities, and technology projects, ensuring efficiency and compliance with standards.",
    icon: <Zap size={28} />
  },
  {
    title: "Technology Projects Contracting",
    desc: "From design to final handover, we deliver cutting-edge technology-related projects that integrate modern engineering practices.",
    icon: <Cpu size={28} />
  },
  {
    title: "Buildings Maintenance",
    desc: "Reliable maintenance services to keep your buildings operational, efficient, and safe, minimizing downtime and maximizing longevity.",
    icon: <Wrench size={28} />
  }
];

function OurServices() {
  return (
    <section className=' bg-white py-8 sm:py-12 md:py-16 lg:py-20  '>
      <div className='container mx-auto '>
        {/* Section Header */}
          <div className="border-tg-blue border-l-4 pl-4 md:mb-6">
            <h2 className='text-3xl md:text-4xl font-black uppercase tracking-wide text-tg-black leading-tight'>
              Our Services
            </h2>
        </div> 

        <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 justify-center'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='group border border-gray-300 p-6 rounded-xl hover:-translate-y-1 transition duration-300 ease-in-out shadow-sm cursor-default'
            >
                <div className="mb-6 text-tg-blue place-items-center  duration-300 transform group-hover:scale-110  ">
                {service.icon}
              </div>
              <h3 className='text-tg-black  font-bold  '>
                {service.title}
              </h3>
              
              <p className='mt-4 text-slate-600  text-sm md:text-base leading-relaxed '>
                {service.desc}
              </p>

              <div className='w-0 group-hover:w-12 h-1 bg-tg-blue mt-6 transition-all duration-500 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices