import React from 'react'
import { MapPin, Clock, Mail, Phone } from 'lucide-react' // Import icons

function ContactDetail() {

    const values = [
        {
            title: "Physical Address",
            desc: "P.O. Box 91800, M-36 Abu Dhabi",
            icon: <MapPin className="text-tg-blue" size={24} />
        },
        {
            title: "Work Hours",
            desc: "Sunday to Thursday, 8 AM - 6 PM",
            icon: <Clock className="text-tg-blue" size={24} />
        },
        {
            title: "Email Address",
            desc: "info@pinkline-group.com",
            icon: <Mail className="text-tg-blue" size={24} />
        },
        {
            title: "Phone Number",
            desc: "+971 501581094",
            icon: <Phone className="text-tg-blue" size={24} />
        }
    ]

    return (
        <section className='bg-white py-8 sm:py-12 md:py-16 lg:py-20'>
            <div className='container mx-auto '>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10'>
                    {values.map((item, index) => (
                        <div 
                            key={index}
                            className='group border border-gray-300 p-8 rounded-2xl hover:border-tg-blue/30 hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white'
                        >
                            <div className="flex flex-col items-start gap-4">
                                {/* Icon Wrapper with a light blue background on hover */}
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                
                                <div>
                                    <h4 className='font-bold text-black text-lg mb-1'>{item.title}</h4>
                                    <p className='text-slate-500 text-sm leading-relaxed'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactDetail