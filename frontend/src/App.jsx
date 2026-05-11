import { useState,useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import {Routes,Route,useNavigate} from 'react-router-dom'
import About from './Pages/About'
import Projects from './Pages/Projects'
import ProjectDetailPage from './Pages/ProjectDetailPage'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import ScrollToTop from './ScrollToTop'
import AdminRedirect from './Pages/AdminRedirect'


function App() {
  const navigate = useNavigate(); // 2. Initialize navigate

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        navigate('/admin-portal'); // 3. Navigate to the secret route
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
  <div className="w-full font-serif">  
  <ScrollToTop />
     <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element= {<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path ="/contact" element ={<Contact />} />
          <Route path="/admin-portal" element={<AdminRedirect />} />
      </Routes>
   </div>
  )
}

export default App
