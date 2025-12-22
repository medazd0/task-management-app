// src/components/common/Button.jsx
import React from 'react';

/**
 * Composant Button réutilisable avec variantes de couleurs
 * @param {string} variant - 'primary', 'secondary', 'success', 'danger'
 * @param {boolean} disabled - État désactivé
 * @param {function} onClick - Fonction au clic
 * @param {ReactNode} children - Contenu du bouton
 * @param {string} className - Classes CSS additionnelles
 */
const Button = ({ 
  variant = 'primary', 
  disabled = false, 
  onClick, 
  children, 
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const baseClasses = 'font-bold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white disabled:bg-gray-300',
    success: 'bg-green-600 hover:bg-green-700 text-white disabled:bg-green-300',
    danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-300',
    ghost: 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;