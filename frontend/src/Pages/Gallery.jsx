import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryList from '../components/GalleryPage/GalleryList'
import GalleryHero from '../components/GalleryPage/GalleryHero'

function Gallery() {
  return (
    <>
        <Navbar />
        {/* <GalleryHero /> */}
        <div className='px-12 lg:px-30 py-8 pt-20'>

        <GalleryList />
        </div>
        <Footer />
    </>
  )
}

export default Gallery
