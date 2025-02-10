/* eslint-disable react/prop-types */
import { Card, Col, Row } from 'react-bootstrap';
import { FaDownload, FaUpload, FaTachometerAlt } from 'react-icons/fa';

const AverageData = ({ data }) => {
  const average = {
    download: 0,
    upload: 0,
    ping: 0,
  };

  if (data.length > 0) {
    // Menghitung rata-rata download, upload, dan ping
    average.download = data.reduce((acc, item) =>
      item.data && item.data.download ? acc + item.data.download.bandwidth : acc, 0) / data.length;

    average.upload = data.reduce((acc, item) =>
      item.data && item.data.upload ? acc + item.data.upload.bandwidth : acc, 0) / data.length;

    average.ping = data.reduce((acc, item) =>
      item.data && item.data.ping ? acc + item.data.ping.latency : acc, 0) / data.length;
  }

  return (
    <Row>
      <Card  className="mb-4 shadow-sm border-light bg-dark text-light">
        <Card.Header>
          <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Average Data</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaDownload style={{ marginRight: '10px', width: '15px', color: '#28a745' }} />
                  Average Download
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{(average.download / 1000000).toFixed(2)} Mbps</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaUpload style={{ marginRight: '10px', width: '15px', color: '#00bcd4' }} />
                  Average Upload
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{(average.upload / 1000000).toFixed(2)} Mbps</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm bg-dark text-light">
                <Card.Header as="h6">
                  <FaTachometerAlt style={{ marginRight: '10px', width: '15px', color: '#ffc107' }} />
                  Average Ping
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">{average.ping.toFixed(1)} ms</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AverageData;
