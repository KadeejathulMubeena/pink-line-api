// src/components/AdminRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminRedirect() {

    const navigate = useNavigate();

 useEffect(() => {
  const timer = setTimeout(() => {
    
    window.open("https://pink-line-api-7.onrender.com/admin/", "_blank");

    navigate('/'); 
  }, 1000);

  return () => clearTimeout(timer);
}, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tg-blue mx-auto mb-4"></div>
        <p className="text-slate-600 font-bold tracking-widest uppercase text-sm">
          Redirecting to Pink Line Admin...
        </p>
      </div>
    </div>
  );
}

export default AdminRedirect;