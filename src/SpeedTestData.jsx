import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
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
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
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
    <Container className="mt-4">
      <h2 className="text-center mb-4 text-primary">Speedtest Dashboard</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm border-primary">
            <Card.Body>
              <Card.Title className="text-center text-primary">Download Speed</Card.Title>
              <DownloadChart data={data} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm border-success">
            <Card.Body>
              <Card.Title className="text-center text-success">Upload Speed</Card.Title>
              <UploadChart data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SpeedTestData;
