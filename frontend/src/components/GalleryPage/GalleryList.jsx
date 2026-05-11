import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function GalleryList() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [selectedImg, setSelectedImg] = useState(null); // New state for Lightbox

  const updateImagesPerPage = () => {
    const width = window.innerWidth;
    if (width < 640) setImagesPerPage(5);
    else if (width >= 640 && width < 768) setImagesPerPage(8);
    else if (width >= 768 && width < 1024) setImagesPerPage(9);
    else setImagesPerPage(10);
  };

  useEffect(() => {
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    
    const fetchAllProjectImages = async () => {
      try {
        const res = await axios.get('https://pink-line-api-7.onrender.com/api/projects/');
        const allImages = [];
        res.data.forEach(project => {
          if (project.hero_image) allImages.push({ url: project.hero_image, title: project.title });
          if (project.gallery) {
            project.gallery.forEach(img => allImages.push({ url: img.image, title: project.title }));
          }
        });
        setImages(allImages);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchAllProjectImages();
    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [imagesPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return (
                      <div className="flex items-center justify-center gap-3 pt-26">
                        <div className="w-5 h-5 border-3 border-tg-blue/40 border-t-tg-blue rounded-full animate-spin"></div>
                            Loading Gallery...
                    </div>);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 border-l-4 border-tg-blue pl-6">
          <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900"> PINK LINE Gallery</h1>
          <p className="text-slate-500 mt-2">Visualizing excellence across all our works.</p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImg(img)} // 1. Click to Open
              className="relative aspect-square overflow-hidden rounded-lg group shadow-md cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-tg-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <span className="text-white font-bold text-center text-sm uppercase">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="p-2 border rounded-full disabled:opacity-20 hover:bg-slate-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm font-bold">Page {currentPage} of {totalPages}</span>
          <button 
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className="p-2 border rounded-full disabled:opacity-20 hover:bg-slate-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. Lightbox Modal */}
{selectedImg && (
  <div 
    className="fixed inset-0 z-100 bg-black/85 backdrop-blur-md flex flex-col items-center onClick={() => setSelectedImg(null)}"
  >
    {/* Close Button */}
    <button 
      className="absolute top-6 right-6 z-110 text-white hover:text-tg-blue transition-colors bg-white/10 p-2 rounded-full"
      onClick={() => setSelectedImg(null)}
    >
      <X size={32} strokeWidth={2} />
    </button>

    <div className="relative w-full h-full flex flex-col items-center justify-start pt-24 md:pt-20 pb-10 px-4">
      
      {/* Image Container */}
      <div className="relative grow flex items-center justify-center  max-w-4xl">
        <img 
          src={selectedImg.url} 
          alt={selectedImg.title}
          className="min-w-full min-h-full object-contain shadow-2xl rounded-sm"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>

      <div className="mt-3 text-center">
        <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-[0.2em] border-b-2 border-tg-blue pb-2 inline-block">
          {selectedImg.title}
        </h3>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default GalleryList;