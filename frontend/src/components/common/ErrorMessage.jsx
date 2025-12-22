// src/components/common/ErrorMessage.jsx
import React from 'react';

/**
 * Composant pour afficher les messages d'erreur
 */
const ErrorMessage = ({ message, className = '' }) => {
  if (!message) return null;

  return (
    <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg ${className}`}>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;