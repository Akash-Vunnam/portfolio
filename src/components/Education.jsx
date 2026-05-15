import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-brand-light dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeading title="Education & Qualifications" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-brand-blue mb-6"><FiBookOpen size={32} /></div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Bachelor of Technology — Computer Science Engineering</h3>
            <h4 className="text-lg font-medium text-brand-blue mb-4">QIS College of Engineering and Technology</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">2024 – 2028 (3rd Year)</p>
            <p className="text-gray-500 dark:text-gray-400">Vegamukkapalem, Ongole, Prakasam, Andhra Pradesh</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center text-brand-blue mb-6"><FiAward size={32} /></div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Previous Qualifications</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-brand-blue pl-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Intermediate</h4>
                <p className="text-gray-600 dark:text-gray-300">Board of Intermediate Education, AP</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed in 2024</p>
              </div>
              <div className="border-l-2 border-brand-blue pl-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Secondary School</h4>
                <p className="text-gray-600 dark:text-gray-300">Board of Secondary Education, AP</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed in 2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
