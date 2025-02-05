import axios from 'axios';

const API_URL = 'https://raspberry.pandawa24jam.com/speed';

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
