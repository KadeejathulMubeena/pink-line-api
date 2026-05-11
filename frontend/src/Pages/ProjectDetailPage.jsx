import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProjectDetailHero from '../components/ProjectDetailPage/ProjectDetailHero';
import WhatWasDone from '../components/ProjectDetailPage/WhatWasDone';
import ProjectImages from '../components/ProjectDetailPage/ProjectImages';
import NextProject from '../components/ProjectDetailPage/NextProject';
import PageHeader from '../components/PageHeader';

function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const detailRes = await axios.get(`http://127.0.0.1:8000/api/projects/${projectSlug}/`);
        setProject(detailRes.data);

        const listRes = await axios.get(`http://127.0.0.1:8000/api/projects/`);
        setAllProjects(listRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [projectSlug]);

  if (loading) return (
                      <div className="flex items-center justify-center gap-3 pt-26">
                        <div className="w-5 h-5 border-3 border-tg-blue/40 border-t-tg-blue rounded-full animate-spin"></div>
                            Loading Projects...
                    </div>);
  if (!project) return <div className="p-20 text-center">Project not found!</div>;

  return (
    <>
      <Navbar />
      {/* <ProjectDetailHero project = {project} /> */}
      <PageHeader title={project.title} subtitle={project.location} image={project.hero_image} />
      <div className='px-12 lg:px-30 py-8'>
        <WhatWasDone project = {project} />
        <ProjectImages project = {project}/>
<NextProject currentProject={project} allProjects={allProjects} />      </div>
      <Footer />
    </>
  );
}

export default ProjectDetailPage;