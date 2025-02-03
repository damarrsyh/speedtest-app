import axios from 'axios'
import {useEffect, useState} from 'react'
// import fetch from 'node-fetch';

const SpeedTestData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get('https://raspberry.pandawa24jam.com/speed', {
          headers: {
            'Author': 'vedeom'
          }
        });

        console.log('API Response:', response.data);
        

        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Speedtest Data</h1>

    </div>
  );
};

export default SpeedTestData
