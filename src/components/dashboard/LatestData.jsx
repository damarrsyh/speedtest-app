/* eslint-disable react/prop-types */
import { FaDownload, FaUpload, FaTachometerAlt } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';

const LatestData = ({ data }) => {
  const latestData = data.length > 0 ? data[data.length - 20] : null;

  if (!latestData) return null;

  return (
    <Row>
      <Card className='mb-4 shadow-sm border-light bg-dark text-light'>
        <Card.Header>
          <h3 style={{marginTop: '20px', marginBottom: '20px'}}>Latest Data</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaDownload style={{ marginRight: '10px', width: '15px', color: '#28a745' }} />
                  Latest Download
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{(latestData.data.download.bandwidth / 1000000).toFixed(2)} Mbps</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaUpload style={{ marginRight: '10px', width: '15px', color: '#00bcd4' }} />
                  Latest Upload
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{(latestData.data.upload.bandwidth / 1000000).toFixed(2)} Mbps</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaTachometerAlt style={{ marginRight: '10px', width: '15px', color: '#ffc107' }} />
                  Latest Ping
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{(latestData.data.ping.latency).toFixed(2)} ms</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default LatestData;
