import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="AR Logo" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
