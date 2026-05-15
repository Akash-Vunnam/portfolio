import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 bg-brand-blue mt-2 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;
