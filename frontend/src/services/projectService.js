// src/services/projectService.js
import { apiRequest } from './api';

/**
 * Service pour gérer les projets
 */
export const projectService = {
  /**
   * Récupérer tous les projets
   */
  getAll: async () => {
    return await apiRequest('/projects');
  },

  /**
   * Récupérer un projet par ID
   */
  getById: async (projectId) => {
    return await apiRequest(`/projects/${projectId}`);
  },

  /**
   * Créer un nouveau projet
   */
  create: async (projectData) => {
    return await apiRequest('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData)
    });
  },

  /**
   * Mettre à jour un projet
   */
  update: async (projectId, projectData) => {
    return await apiRequest(`/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    });
  },

  /**
   * Supprimer un projet
   */
  delete: async (projectId) => {
    return await apiRequest(`/projects/${projectId}`, {
      method: 'DELETE'
    });
  },

  /**
   * Obtenir la progression d'un projet
   */
  getProgress: async (projectId) => {
    return await apiRequest(`/projects/${projectId}/progress`);
  }
};

export default projectService;