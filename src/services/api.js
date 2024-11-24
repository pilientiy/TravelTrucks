import axios from 'axios';

// Створюємо інстанс Axios з базовим URL
const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export default api;

// src/services/api.js
export const getCampers = async (filters) => {
    try {
      // Додамо фільтри в запит, якщо вони є
      const response = await api.get('/campers', {
        params: filters,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching campers:', error);
      throw error;
    }
  };