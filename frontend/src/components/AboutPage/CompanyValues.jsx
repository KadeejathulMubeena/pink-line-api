import React from 'react';
import Hero from '../../assets/contractor.jpg';
import { ShieldCheck, Star, Leaf, Users } from 'lucide-react';

function CompanyValues() {
  const values = [
    {
      title: "Integrity",
      desc: "Conducting business with honesty and transparency.",
      icon: <ShieldCheck className="text-tg-blue" size={28} />
    },
    {
      title: "Excellence",
      desc: "Pursuing the highest standards in all our endeavors.",
      icon: <Star className="text-tg-blue" size={28} />
    },
    {
      title: "Sustainability",
      desc: "Building solutions that are environmentally and socially responsible.",
      icon: <Leaf className="text-tg-blue" size={28} />
    },
    {
      title: "Teamwork",
      desc: "Collaborating with our stakeholders to achieve shared success.",
      icon: <Users className="text-tg-blue" size={28} />
    }
  ];

  return (
    // Switched to pt to match your layout rhythm + added pb-20 to space it from the Footer
    <section className='bg-white pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-20'>
      <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>

        {/* Image - Swapping order on mobile so text stays near the previous section if needed, 
            or keep it as is for a visual break. Added 'lg:order-last' if you want image on right. */}
        <div className='relative group'>
          <img 
            src={Hero}
            alt='Contractor at work'
            // Added aspect ratio for better grid alignment
            className='w-full h-full aspect-[4/3] lg:aspect-square object-cover rounded-2xl shadow-lg'
          />
        </div>

        {/* Content */}
        <div>
          <div className="border-tg-blue border-l-4 pl-4 mb-8">
            <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-tg-black'>
              Company Values
            </h2>
          </div>

          <div className='grid sm:grid-cols-2 gap-8'>
            {values.map((item, index) => (
              <div 
                key={index}
                // matching the card style from Mission/Vision for a cohesive brand look
                className='group p-5 border border-gray-300 rounded-xl hover:shadow-md hover:border-tg-blue/30 transition-all duration-300 bg-white'
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1.5 bg-blue-50 group-hover:bg-blue-100 rounded-lg">
                    {item.icon}
                  </div>
                  <h4 className='font-bold text-black uppercase text-sm tracking-tight'>
                    {item.title}
                  </h4>
                </div>
                <p className='text-slate-600 text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CompanyValues;