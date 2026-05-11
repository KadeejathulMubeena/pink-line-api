import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectList from '../components/ProjectPage/ProjectList'
import ProjectHero from '../components/ProjectPage/ProjectHero'
import PageHeader from '../components/PageHeader'
import Construction from '../assets/construction-sites-.jpg'


function Projects() {
  return (
   <>
   <Navbar />
   {/* <ProjectHero /> */}
   <PageHeader title={"Our Projects"} subtitle={""} image={Construction}/>
    <div className='px-12 lg:px-30 py-8'>
        <ProjectList />
    </div>
   <Footer />
   </>
  )
}

export default Projects
