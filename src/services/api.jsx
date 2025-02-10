import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_JSON_URL = import.meta.env.VITE_API_JSON_URL;

// console.log(import.meta.env.VITE_API_URL)

export const fetchSpeedTestData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Author': 'vedeom',
      },
    });

    console.log('API Response:', response.data); // Log seluruh response
    console.log('Parsed Data:', response.data.data || []); // Log data yang diproses

    return response.data.data || [];
  } catch (error) {
    console.error('API Fetch Error:', error.message); // Log error jika terjadi kesalahan
    throw new Error(error.message);
  }
};

export const fetchActiveDevices = async () => {
  try {
    const response = await axios.get(API_JSON_URL);

    console.log('Devices API Response:', response.data);
    console.log('Parsed Data Devices:', response.data.devices || []);

    return response.data.devices || [];
  } catch (error) {
    console.error('Devices API Fetch Error:', error.message);
    return [];
  }
};
