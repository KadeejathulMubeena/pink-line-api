import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHeroSection from '../components/AboutPage/AboutHeroSection'
import AboutUs from '../components/AboutPage/AboutUs'
import MissonVision from '../components/AboutPage/MissonVision'
import CompanyValues from '../components/AboutPage/CompanyValues'
import PageHeader from '../components/PageHeader'
import Construction from '../assets/construction-sites-.jpg'

function About() {
  return (
    <>
    <Navbar />
    <PageHeader title={"Pink Line Engineering and Contracting L.L.C"} 
    subtitle={"Built on integrity.Driven by excellence"}
    image={Construction}/>
    <div className='px-12 lg:px-30 py-8'>
        <AboutUs />
        <MissonVision />
        <CompanyValues />
    </div>
    <Footer />
    </>
  )
}

export default About
