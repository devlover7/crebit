// // src/services/authService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/auth'; // Update the port if necessary

// export const register = async (userData) => {
//     try {
//         const response = await axios.post(`${API_URL}/register`, userData);
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// };

// export const login = async (userData) => {
//     try {
//         const response = await axios.post(`${API_URL}/login`, userData);
//         return response.data; // This will be the JWT token
//     } catch (error) {
//         throw error.response.data;
//     }
// };
