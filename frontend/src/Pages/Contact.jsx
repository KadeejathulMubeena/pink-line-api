import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactDetail from '../components/ContactPage/ContactDetail';
import ContactForm from '../components/ContactPage/ContactForm';
import ContactHero from '../components/ContactPage/ContactHero';

const Contact = () => {

    return(
        <>
            <Navbar />
            {/* <ContactHero /> */}
            {/* Gallery Banner - Light Professional Version */}

            <div className='px-12 lg:px-30 py-8 pt-20'>
                <ContactForm />
                <ContactDetail />
            </div>
            <Footer />
        </>
    );
};


export default Contact;