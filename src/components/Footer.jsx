import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-10 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0 text-[#1e293b] dark:text-white">
          <Logo className="w-8 h-8" />
          <span className="font-bold text-xl">Akash Reddy</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
          &copy; {new Date().getFullYear()} Vunnam Akash Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
