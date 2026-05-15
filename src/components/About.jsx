import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-brand-light dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Passionate Developer & Engineering Student</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
              I am a passionate Computer Science Engineering student interested in AI, Full Stack Development, IoT, and software development. I enjoy building real-world projects and learning modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              My goal is to become a skilled software developer and contribute to meaningful projects that make a positive impact. I am always eager to learn and grow in the field of computer science.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-light dark:bg-gray-900 p-8 rounded-2xl shadow-sm flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-brand-blue shadow-sm"><FiMail size={24} /></div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:vunnamakashreddy@gmail.com" className="text-gray-800 dark:text-white hover:text-brand-blue transition-colors break-all">vunnamakashreddy@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-brand-blue shadow-sm"><FiPhone size={24} /></div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                <a href="tel:+918125699109" className="text-gray-800 dark:text-white hover:text-brand-blue transition-colors">+91 8125699109</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full text-brand-blue shadow-sm"><FiMapPin size={24} /></div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-gray-800 dark:text-white">Ongole, Andhra Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
