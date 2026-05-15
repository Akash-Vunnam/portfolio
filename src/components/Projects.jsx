import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: "VoiceGYM",
      description: "A specialized application focusing on voice-based exercises and interactions, enhancing users' vocal abilities through guided practice.",
      image: "/images/voicegym.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Python", "MediaPipe"],
      link: "#",
      github: "#"
    },
    {
      title: "AndhraVista",
      description: "AndhraVista is a modern tourism website that showcases the beauty, culture, spiritual places, beaches, caves, hills, and famous destinations of Andhra Pradesh in a visually attractive and user-friendly way.",
      image: "/images/andhravista.png",
      tags: ["React", "Vite", "Tailwind CSS", "React Router DOM"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeading title="My Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.map((project, index) => (<ProjectCard key={index} project={project} index={index} />))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
