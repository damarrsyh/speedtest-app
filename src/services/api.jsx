import axios from 'axios';

const API_URL = 'https://raspberry.pandawa24jam.com/speed';

export const fetchSpeedTestData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Author': 'vedeom',
      },
    });
    return response.data.data || [];
  } catch (error) {
    throw new Error(error.message);
  }
};
