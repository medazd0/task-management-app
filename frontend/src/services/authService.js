// src/services/authService.js
import { apiRequest, API_URL } from './api';

/**
 * Service d'authentification
 */
const authService = {
  /**
   * Connexion utilisateur
   * @param {Object} credentials - { email, password }
   * @returns {Promise<Object>} - { token, email, fullName }
   */
  login: async (credentials) => {
    
    try {
      console.log('Tentative de connexion avec:', JSON.stringify(credentials));
      
    
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      console.log('Statut de la réponse:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur du serveur:', errorData);
        throw new Error(errorData.message || 'Identifiants invalides');
      }

      const data = await response.json();
      console.log('Données reçues:', data);
      
      // Stocker le token et les infos utilisateur
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', data.email);
      if (data.fullName) {
        localStorage.setItem('fullName', data.fullName);
      }

      return data;
    } catch (error) {
      console.error('Erreur complète:', error);
      throw error.message || 'Erreur lors de la connexion';
    }
  },

  /**
   * Déconnexion utilisateur
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('fullName');
  },

  /**
   * Vérifier si l'utilisateur est authentifié
   * @returns {boolean}
   */
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    console.log('Token présent:', !!token);
    return !!token;
  },

  /**
   * Récupérer le token
   * @returns {string|null}
   */
  getToken: () => {
    return localStorage.getItem('token');
  },

  /**
   * Récupérer l'email de l'utilisateur
   * @returns {string|null}
   */
  getUserEmail: () => {
    return localStorage.getItem('userEmail');
  },

  /**
   * Récupérer le nom complet de l'utilisateur
   * @returns {string|null}
   */
  getFullName: () => {
    return localStorage.getItem('fullName');
  }
};

// Export par défaut ET nommé pour flexibilité
export { authService };
export default authService;