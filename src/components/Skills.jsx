import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 95, gradient: "from-rose-400 to-pink-300", textClass: "text-rose-500 dark:text-rose-400" },
    { name: "CSS", level: 90, gradient: "from-sky-400 to-cyan-300", textClass: "text-sky-500 dark:text-sky-400" },
    { name: "JavaScript", level: 85, gradient: "from-amber-400 to-yellow-300", textClass: "text-amber-500 dark:text-amber-400" },
    { name: "React", level: 80, gradient: "from-teal-400 to-emerald-300", textClass: "text-teal-500 dark:text-teal-400" },
    { name: "Python", level: 85, gradient: "from-indigo-400 to-violet-300", textClass: "text-indigo-500 dark:text-indigo-400" },
    { name: "Flask", level: 75, gradient: "from-slate-400 to-gray-300", textClass: "text-slate-500 dark:text-slate-400" },
    { name: "Git", level: 80, gradient: "from-orange-400 to-amber-300", textClass: "text-orange-500 dark:text-orange-400" },
    { name: "Firebase", level: 70, gradient: "from-yellow-400 to-orange-300", textClass: "text-yellow-500 dark:text-yellow-400" }
  ];

  return (
    <section id="skills" className="section-padding bg-brand-light dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeading title="My Skills" />
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-base font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className={`text-sm font-medium ${skill.textClass}`}>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
