import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const getSource = () => typeof window !== 'undefined' ? window.location.href : 'portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const submittingRef = useRef(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    submittingRef.current = true;
    setStatus('submitting');
    setErrorMsg('');
    try {
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        source: getSource(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => { setStatus('idle'); submittingRef.current = false; }, 6000);
    } catch (err) {
      console.error('Firestore submission error:', err);
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      setStatus('error');
      submittingRef.current = false;
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field]
        ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
        : 'border-gray-200 dark:border-gray-700 focus:ring-brand-blue'
    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all`;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeading title="Contact Me" />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light dark:bg-gray-900 p-4 rounded-full text-brand-blue"><FiMail size={20} /></div>
                <div><h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4><a href="mailto:vunnamakashreddy@gmail.com" className="text-brand-blue hover:underline break-all">vunnamakashreddy@gmail.com</a></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light dark:bg-gray-900 p-4 rounded-full text-brand-blue"><FiPhone size={20} /></div>
                <div><h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h4><a href="tel:+918125699109" className="text-brand-blue hover:underline">+91 8125699109</a></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light dark:bg-gray-900 p-4 rounded-full text-brand-blue"><FiMapPin size={20} /></div>
                <div><h4 className="font-semibold text-gray-800 dark:text-gray-200">Location</h4><p className="text-gray-600 dark:text-gray-400">Ongole, Andhra Pradesh, India</p></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/vunnam-akash-reddy-6970b9323" target="_blank" rel="noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue transition-colors"><FiLinkedin size={20} /></a>
              <a href="https://github.com/Akash-Vunnam" target="_blank" rel="noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue transition-colors"><FiGithub size={20} /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-brand-light dark:bg-gray-900 p-8 rounded-2xl shadow-sm">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex flex-col items-center justify-center h-full py-10 text-center space-y-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-5 rounded-full"><FiCheckCircle size={40} className="text-green-500 dark:text-green-400" /></div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={status === 'submitting'} className={inputClass('name')} placeholder="Your Name" autoComplete="name" />
                  {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={status === 'submitting'} className={inputClass('email')} placeholder="Your Email" autoComplete="email" />
                  {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} disabled={status === 'submitting'} rows="4" className={inputClass('message')} placeholder="Your Message (min. 10 characters)" />
                  {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><FiAlertCircle size={12} /> {errors.message}</p>}
                </div>
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-blue hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md shadow-brand-blue/30 flex justify-center items-center gap-2">
                  {status === 'submitting' ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending…</>) : 'Send Message'}
                </button>
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                    <FiAlertCircle className="mt-0.5 shrink-0" />{errorMsg}
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
