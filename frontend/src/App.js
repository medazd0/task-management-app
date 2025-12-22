// src/App.jsx
import React, { useState, useEffect } from 'react';
import LoginPage from './components/auth/LoginPage.jsx';
import Layout from './components/layout/Layout.jsx';
import ProjectList from './components/projects/ProjectList.jsx';
import ProjectDetails from './components/projects/ProjectDetails.jsx';
import { authService } from './services/authService.js';

/**
 * Composant principal de l'application
 * Gère l'état global: authentification, navigation entre projets
 */
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Vérifie l'authentification au chargement
  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setSelectedProject(null);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Page de connexion
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  // Page principale avec layout
  return (
    <Layout onLogout={handleLogout}>
      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : (
        <ProjectList onSelectProject={handleSelectProject} />
      )}
    </Layout>
  );
}

export default App ;