import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Table } from 'react-bootstrap';
import { fetchSpeedTestData } from './services/api';
import DownloadChart from './components/charts/DownloadChart';
import UploadChart from './components/charts/UploadChart';
import { FaDownload, FaUpload, FaTachometerAlt } from 'react-icons/fa';
import PingChart from './components/charts/PingChart';

const SpeedTestData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchSpeedTestData();
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Container fluid className="text-center mt-5 text-light">
        <Spinner animation="border" variant="light" />
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  const latestData = data.length > 0 ? data[data.length - 20] : null;

  // const maxSpeed = 100; // Kecepatan ideal dalam Mbps
  // const goodPingThreshold = 50; // Ping ideal dalam ms

  // const downloadSpeed = (latestData.data.download.bandwidth / 100000).toFixed(2);
  // const uploadSpeed = (latestData.data.upload.bandwidth / 100000).toFixed(2);
  // const pingLatency = (latestData.data.ping.latency).toFixed(1);

  // // Hitung persentase performa
  // const downloadPercentage = ((downloadSpeed / maxSpeed) * 100).toFixed(1);
  // const uploadPercentage = ((uploadSpeed / maxSpeed) * 100).toFixed(1);

  // // Tentukan status performa
  // const downloadStatus = downloadPercentage >= 50 ? "Baik ✅" : "Buruk ❌";
  // const uploadStatus = uploadPercentage >= 50 ? "Baik ✅" : "Buruk ❌";
  // const pingStatus = pingLatency <= goodPingThreshold ? "Baik ✅" : "Buruk ❌";

  // const getStatusStyle = (status) => ({
  //   color: status.includes("Baik") ? "#28a745" : "#dc3545", // Hijau untuk Baik, Merah untuk Buruk
  //   fontWeight: "bold", 
  // });

  return (
    <Container className="text-light" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '20px' }}>
      {latestData && (
      <Row key={latestData._id}>
        <Col md={4}>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Header as="h5" style={{fontSize: '15px'}}>
              <FaDownload style={{ marginRight: '10px', width: '15px', color: '#28a745' }} />
                Latest Download
              </Card.Header>
            <Card.Body>
              <Card.Title as="h4">
              {(latestData.data.download.bandwidth / 1000000).toFixed(2)}Mbps
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Header as="h5" style={{fontSize: '15px'}}>
              <FaUpload style={{ marginRight: '10px', width: '15px', color: '#00bcd4' }} />
                Latest Upload
              </Card.Header>
            <Card.Body>
              <Card.Title as="h4">
              {(latestData.data.upload.bandwidth / 1000000).toFixed(2)}Mbps
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Header as="h5" style={{fontSize: '15px'}}>
              <FaTachometerAlt style={{ marginRight: '10px', width: '15px', color: '#ffc107' }} />
                Latest Ping
              </Card.Header>
            <Card.Body>
              <Card.Title as="h4">
              {(latestData.data.ping.latency).toFixed(2)}ms
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      )}
      <Row>
        <Col>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Body>
              <Card.Title>
                <FaDownload style={{ marginRight: '10px', color: '#28a745'}} />
                  Download
              </Card.Title>
                <DownloadChart data={data} title="Download Speed" type="download" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Body>
              <Card.Title>
                <FaUpload style={{ marginRight: '10px', width: '15px', color: '#00bcd4' }} />
                Upload
              </Card.Title>
                <UploadChart data={data} title="Upload Speed" type="upload" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Body>
              <Card.Title>
                <FaTachometerAlt style={{ marginRight: '10px', width: '15px', color: '#ffc107' }} />
                Ping
              </Card.Title>
                <PingChart data={data} title="Ping" type="ping" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="mt-4" variant="dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <thead className="bg-secondary text-light text-center">
              <tr>
                <th className="px-2 py-3 text-center" style={{color: '#28a745'}}>Download Bytes</th>
                <th className="px-2 py-3 text-center" style={{color: '#28a745'}}>Download Elapsed</th>
                <th className="px-2 py-3 text-center" style={{color: '#00bcd4'}}>Upload Bytes</th>
                <th className="px-2 py-3 text-center" style={{color: '#00bcd4'}}>Upload Elapsed</th>
                <th className="px-2 py-3 text-center">Server</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td className="px-2 py-3 text-center">{(item.data.download.bytes / 1048576).toFixed(1)} Mbps</td>
                  <td className="px-2 py-3 text-center">{(item.data.download.elapsed / 1000).toFixed(2)}s</td>
                  <td className="px-2 py-3 text-center">{(item.data.upload.bytes / 1048576).toFixed(1)} Mbps</td>
                  <td className="px-2 py-3 text-center">{(item.data.upload.elapsed / 1000).toFixed(2)}s</td>
                  <td className="px-2 py-3 text-center">
                    {item.data.isp} ({item.data.server.location}, {item.data.server.name}) 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default SpeedTestData;
