import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Table } from 'react-bootstrap';
import { fetchSpeedTestData } from './services/api';
import DownloadChart from './components/charts/DownloadChart';
import UploadChart from './components/charts/UploadChart';

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
      <Container className="text-center mt-5 text-light">
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

  return (
    <Container className="text-light" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '20px' }}>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Body>
              <Card.Title className="text-center">Download Speed</Card.Title>
              <DownloadChart data={data} title="Download Speed" type="download" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm border-light bg-dark text-light">
            <Card.Body>
              <Card.Title className="text-center">Upload Speed</Card.Title>
              <UploadChart data={data} title="Upload Speed" type="upload" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="mt-4" variant="dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <thead className="bg-secondary text-light text-center">
              <tr>
                <th className="px-4">Download Bytes</th>
                <th className="px-4">Download Elapsed</th>
                <th className="px-4">Upload Bytes</th>
                <th className="px-4">Upload Elapsed</th>
                <th className="px-4">Server</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 text-center">{(item.data.download.bytes / 1000000).toFixed(2)} Mbps</td>
                  <td className="px-4 text-center">{(item.data.download.elapsed / 1000).toFixed(2)}s</td>
                  <td className="px-4 text-center">{(item.data.upload.bytes / 1000000).toFixed(2)} Mbps</td>
                  <td className="px-4 text-center">{(item.data.upload.elapsed / 1000).toFixed(2)}s</td>
                  <td className="px-4 text-center">
                    {item.data.server.country} ({item.data.server.location}, {item.data.server.name})
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
