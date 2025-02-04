import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const SpeedTestData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raspberry.pandawa24jam.com/speed', {
          headers: {
            'Author': 'vedeom',
          },
        });

        console.log('API Response:', response.data);

        setData(response.data.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString();
  };

  const chartDataDownload = {
    series: [
      {
        name: 'Bandwidth Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(), // Convert datetime to timestamp
          y: item.data.download.bandwidth,
        })),
      },
      {
        name: 'Bytes Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(), // Convert datetime to timestamp
          y: item.data.download.bytes,
        })),
      },
    ],
    options: {
      chart: {
        height: 150,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };

  const chartDataUpload = {
    series: [
      {
        name: 'Bandwidth Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(), // Convert datetime to timestamp
          y: item.data.upload.bandwidth,
        })),
      },
      {
        name: 'Bytes Speed',
        data: data.map((item) => ({
          x: new Date(item.datetime).getTime(), // Convert datetime to timestamp
          y: item.data.upload.bytes,
        })),
      },
    ],
    options: {
      chart: {
        height: 150,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Speedtest Data</h2>

      <div id="chart">
      <h3>Download Speed</h3>
        <ReactApexChart options={chartDataDownload.options} series={chartDataDownload.series} type="area" height={250} width={600} />
      <h3>Upload Speed</h3>
        <ReactApexChart options={chartDataUpload.options} series={chartDataUpload.series} type="area" height={250} width={600}/>
      </div>

      {/* <div>
        <table>
          <thead>
            <tr>
              <th>Data & Time</th>
              <th>Ping Jitter</th>
              <th>Ping Latency</th>
              <th>Download Bandwidth</th>
              <th>Download Bytes</th>
              <th>Upload Bandwidth</th>
              <th>Upload Bytes</th>
              <th>ISP</th>
              <th>Server</th>
              <th>Interface (IP)</th>
              <th>Interface (IP)</th>
              <th>PacketLoss</th>
              <th>Result URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{formatDateTime(item.datetime)}</td>
                <td>{item.data.ping.jitter} ms</td>
                <td>{item.data.ping.latency} ms</td>
                <td>{item.data.download.bandwidth} Mbps</td>
                <td>{item.data.download.bytes} Bytes</td>
                <td>{item.data.upload.bandwidth} Mbps</td>
                <td>{item.data.upload.bytes} Bytes</td>
                <td>{item.data.isp}</td>
                <td>{item.data.server.country} ({item.data.server.location})</td>
                <td>{item.data.interface.internalIp}</td>
                <td>{item.data.interface.externalIp}</td>
                <td>{item.data.packetLoss}</td>
                <td>
                  <a href={item.data.result.url} target="_blank" rel="noopener noreferrer">
                    View Result
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default SpeedTestData;
