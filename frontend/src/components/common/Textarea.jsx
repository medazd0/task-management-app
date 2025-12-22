// src/components/common/Textarea.jsx
import React from 'react';

/**
 * Composant Textarea réutilisable
 */
const Textarea = ({ 
  value, 
  onChange, 
  placeholder = '', 
  label = '',
  required = false,
  rows = 3,
  className = '',
  name = ''
}) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default Textarea;