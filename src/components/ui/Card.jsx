// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'p-6' 
}) => {
  const baseStyles = `bg-white rounded-lg shadow-lg ${padding}`;
  const hoverStyles = hover ? 'hover:shadow-xl transition-all hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;