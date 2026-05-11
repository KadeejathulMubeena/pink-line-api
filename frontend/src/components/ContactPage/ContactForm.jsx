import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CheckCircle2, ArrowRight, Mail, MapPin } from 'lucide-react'; // Optional: install lucide-react for icons

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://pink-line-api-7.onrender.com/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success('Message sent successfully!');
      } else {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        toast.error('Validation error. Please check your inputs.');
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error('Connection failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto ">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className=" border-tg-blue border-l-4 pl-3">
            <h2 className='text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-tg-black leading-none'>
              CONTACT US
            </h2>
            <p className="text-gray-600  leading-relaxed pt-3 ">
            Have a project in mind or need expert advice? Reach out to us and let's build something exceptional together.
          </p>
          </div>           
          
        </div>

        {/* Main Content Card */}
        <div className="bg-white overflow-hidden flex flex-col lg:flex-row border border-gray-100 rounded-3xl shadow-xl shadow-gray-100/50">
          
          {/* LEFT SIDE: GOOGLE MAP */}
          <div className="lg:w-1/2 h-[450px] lg:h-auto relative bg-gray-700">
            <iframe
              title="Pink Line Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3635.0215!2d54.4978881!3d24.3402417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sM36!5e0!3m2!1sen!2sae!4v1715000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full  contrast-125 opacity-90"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-2xl rounded-2xl border border-white/20 md:w-80">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-tg-blue/10 p-2 rounded-lg text-tg-blue">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold text-tg-black">Our Office</h4>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                P.O. Box 91800, M-36<br />
                Mussafah Industrial Area<br />
                Abu Dhabi, United Arab Emirates
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM / SUCCESS CONTENT */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[500px]">
            
            {!submitted ? (
              /* FORM STATE */
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-700">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-tg-black ml-1 ">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    required
                    className="w-full mt-2 px-5 py-4 rounded-xl border border-gray-400 focus:border-tg-blue focus:ring-4 focus:ring-tg-blue/10 transition-all outline-none bg-gray-50/50"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-tg-black ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    required
                    className="w-full px-5 py-4 mt-2 rounded-xl border border-gray-400 focus:border-tg-blue focus:ring-4 focus:ring-tg-blue/10 transition-all outline-none bg-gray-50/50"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-tg-black ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    required
                    className="w-full px-5 py-4 mt-2 rounded-xl border border-gray-400 focus:border-tg-blue focus:ring-4 focus:ring-tg-blue/10 transition-all outline-none bg-gray-50/50"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-tg-black ml-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    required
                    rows="4"
                    className="w-full px-5 py-4 mt-2 rounded-xl border border-gray-400 focus:border-tg-blue focus:ring-4 focus:ring-tg-blue/10 transition-all outline-none resize-none bg-gray-50/50"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-tg-blue text-white font-extrabold rounded-xl shadow-lg shadow-tg-blue/20 
                    transition-all duration-300 transform 
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-[0.98]' : 'hover:bg-opacity-95 hover:-translate-y-1 active:scale-95'}
                  `}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center space-y-8 animate-in zoom-in-95 fade-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-success-pop">
                  <CheckCircle2 size={48}
                  className="animate-in zoom-in-50 duration-700 delay-150 fill-green-100"
                  />
                </div>
                <div className="space-y-3">
                <h3 className="text-3xl font-extrabold text-tg-black animate-in slide-in-from-bottom-4 duration-700 delay-200">                   
                  Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-300"> 
                    Thank you for reaching out. We have received your inquiry and a specialist from the <span className="text-tg-blue font-semibold">Pink Line</span> team will respond shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-tg-blue font-bold hover:gap-3 transition-all"
                  >
                    Send another message <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;