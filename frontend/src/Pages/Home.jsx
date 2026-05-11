import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HomePage/HeroSection'
import WhoWeAre from '../components/HomePage/WhoWeAre'
import ProjectSection from '../components/HomePage/ProjectSection'
import OurServices from '../components/HomePage/OurServices'
import ReadyToWork from '../components/HomePage/ReadyToWork'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
            <Navbar />
        <main>
            <HeroSection />
            <div className='px-12 lg:px-30 '>
                <WhoWeAre />
                <ProjectSection />
                <OurServices />
            </div>
        </main> 
            <ReadyToWork />
            <Footer />
      
    </>
  )
}

export default Home
