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

    // Pastikan response.data adalah array
    const dataArray = Array.isArray(response.data) ? response.data : [];

    // Konversi data API ke format yang sesuai
    const formattedDevices = dataArray.flatMap(item =>
      item.result.map(device => ({
        id: item.id,  // Menggunakan id dari API sebagai key
        ip: device.target,  // IP Address
        name: device.devices, // Nama perangkat
        is_online: device.alive === 1 ? "Online" : "Offline" // Status perangkat
      }))
    );

    console.log('Parsed Devices:', formattedDevices);
    return formattedDevices;
  } catch (error) {
    console.error('Devices API Fetch Error:', error.message);
    return [];
  }
};
