import axios from 'axios';

const API_URL_JSON = import.meta.env.VITE_API_JSON_URL;

console.log(import.meta.env.VITE_API_JSON_URL)

export const fetchJsonData = async () => {
  try {
    const response = await axios.get(API_URL_JSON);

    // console.log('API Response:', response.data); // Log seluruh response
    // console.log('Parsed Data:', response.data.data || []); // Log data yang diproses

    return response.data || [];
  } catch (error) {
    console.error('API Fetch Error:', error.message); // Log error jika terjadi kesalahan
    throw new Error(error.message);
  }
};
