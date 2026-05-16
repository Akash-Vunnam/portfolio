import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">Hello, I am</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">Vunnam Akash Reddy</h1>
          <h3 className="text-xl md:text-2xl font-medium text-brand-blue mb-6">B.Tech CSE — 3rd Year</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            QIS College of Engineering and Technology<br />
            Vegamukkapalem, Ongole, Prakasam, Andhra Pradesh, India
          </p>
          <a 
            href="/assets/Vunnam_Akash_Reddy_CV.pdf" 
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-medium shadow-md shadow-brand-blue/30 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-white dark:bg-gray-700 flex items-center justify-center">
            <img 
              src="/profile.png" 
              alt="Vunnam Akash Reddy"
              className="w-full h-full object-cover scale-[1.25]"
              onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
