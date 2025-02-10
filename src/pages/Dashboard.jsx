import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Pagination, Row, Col } from 'react-bootstrap';
import { fetchSpeedTestData } from '../services/api';
import { fetchActiveDevices } from "../services/api"; // Impor fungsi API
import AverageData from '../components/dashboard/AverageData';
import Chart from '../components/dashboard/ChartData';
import LatestData from '../components/dashboard/LatestData';
import DataTable from '../components/dashboard/TableData';
import AppDevice from '../components/dashboard/AppDevice';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <Container fluid className="text-light" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#1a1a1a', minHeight: '', padding: '20px' }}>

      <Row>
        <Col>
      {/* Average Data */}

      <AverageData data={data} />

      {/* Charts */}
      <Chart data={data} />

      {/* Latest Data */}
      {/* <LatestData data={data} /> */}
        </Col>
      </Row>

      {/* Data Table */}
      <Row>
        <Col md="4">
          <AppDevice devices={devices}/>
        </Col>
        <Col md="8">
          <DataTable data={currentData} />
          <Pagination className="justify-content-center">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Col>
      </Row>

      {/* Pagination Controls Table Data*/}

    </Container>
  );
};

export default Dashboard;
