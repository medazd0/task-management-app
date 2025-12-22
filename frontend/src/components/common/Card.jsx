// src/components/common/Card.jsx
import React from 'react';

/**
 * Composant Card réutilisable
 */
const Card = ({ 
  children, 
  className = '', 
  hover = false,
  onClick = null
}) => {
  const hoverClass = hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-200' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${clickableClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;