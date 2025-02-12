import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Row, Col } from 'react-bootstrap';
import { fetchSpeedTestData } from '../services/api';
import AverageData from '../components/dashboard/AverageData';
import Chart from '../components/dashboard/ChartData';
import DataTable from '../components/dashboard/TableData';

const Dashboard = () => {
  const [data, setData] = useState([]);
  // const [devices, setDevices] = useState([]);
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
      <Container fluid className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
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
    <Container fluid className='d-flex'>
        <Col className="p-3 ms-auto">
          <h4 className='my-3'>Dashboard</h4>
          <Row>
            <Col>  
              <AverageData data={data} />
              <Chart data={data} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable data={data} />
            </Col>
          </Row>
        </Col>
    </Container>
  );
};

export default Dashboard;
