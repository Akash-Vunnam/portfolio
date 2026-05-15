import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setDarkMode(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center text-[#1e293b] dark:text-white hover:opacity-80 transition-opacity">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.to} smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-brand-blue transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300" aria-label="Toggle Theme">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300">{darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}</button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}</button>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium cursor-pointer hover:text-brand-blue">{link.name}</Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
