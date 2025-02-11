// import AppDevice from '../components/dashboard/AppDevice';
import TableData from '../components/dashboard/TableData';
import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Row, Col } from 'react-bootstrap';
import { fetchSpeedTestData } from '../services/api';
import { fetchActiveDevices } from '../services/api';


function DevicesPage() {

  const [data, setData] = useState([]);
  const [devices, setDevices] = useState([]);
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

  return (
    <Container fluid className='d-flex' style={{ fontFamily: 'Poppins, sans-serif'}}>
        <Col className="p-3 ms-auto">
          <h4 className='my-3'>Devices Page</h4>
          <TableData data={data}/>
        </Col>
    </Container>
  );
}

export default DevicesPage;