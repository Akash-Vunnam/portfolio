import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full group"
    >
      <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 font-medium">{project.title} Image</div>
        <img 
          src={project.image} alt={project.title} 
          className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20">
          <div className="flex space-x-3 w-full justify-end">
            {project.github && (<a href={project.github} target="_blank" rel="noreferrer" className="bg-white text-gray-900 p-2 rounded-full hover:text-brand-blue transition-colors"><FiGithub size={18} /></a>)}
            {project.link && (<a href={project.link} target="_blank" rel="noreferrer" className="bg-brand-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors"><FiExternalLink size={18} /></a>)}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag, i) => (<span key={i} className="text-xs font-medium bg-brand-light dark:bg-gray-900 text-brand-blue px-3 py-1 rounded-full">{tag}</span>))}
        </div>
        <a href={project.link || '#'} target={project.link ? "_blank" : "_self"} rel="noreferrer"
          className="inline-flex items-center justify-center w-full bg-brand-light dark:bg-gray-700 text-brand-blue dark:text-white font-medium py-2 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
        >View Details</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
