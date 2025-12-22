// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';

/**
 * Composant Layout - Structure de page avec header
 */
const Layout = ({ children, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;