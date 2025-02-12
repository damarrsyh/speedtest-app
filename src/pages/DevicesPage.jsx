import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Col } from 'react-bootstrap';
import { fetchActiveDevices } from "../services/api";
import AppDevice from '../components/dashboard/AppDevice';

const DevicesPage = () => {

  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

	useEffect(() => {
    const loadDevices = async () => {
      try {
        const data = await fetchActiveDevices();
        setDevices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadDevices();
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
          <h4 className='my-3'>Device Page </h4>
            <AppDevice devices={devices}/>
        </Col>
    </Container>
  )
}

export default DevicesPage
