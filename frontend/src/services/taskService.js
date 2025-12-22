// src/services/taskService.js
import { apiRequest } from './api';

/**
 * Service pour gérer les tâches
 */
export const taskService = {
  /**
   * Récupérer toutes les tâches d'un projet
   */
  getAll: async (projectId) => {
    return await apiRequest(`/projects/${projectId}/tasks`);
  },

  /**
   * Créer une nouvelle tâche
   */
  create: async (projectId, taskData) => {
    return await apiRequest(`/projects/${projectId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(taskData)
    });
  },

  /**
   * Mettre à jour une tâche
   */
  update: async (projectId, taskId, taskData) => {
    return await apiRequest(`/projects/${projectId}/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify(taskData)
    });
  },

  /**
   * Marquer une tâche comme complétée (toggle)
   */
  toggleComplete: async (projectId, taskId) => {
    return await apiRequest(`/projects/${projectId}/tasks/${taskId}/complete`, {
      method: 'PATCH'
    });
  },

  /**
   * Supprimer une tâche
   */
  delete: async (projectId, taskId) => {
    return await apiRequest(`/projects/${projectId}/tasks/${taskId}`, {
      method: 'DELETE'
    });
  }
};

export default taskService;