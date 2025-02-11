/* eslint-disable react/prop-types */
import { Card, Row, Col } from 'react-bootstrap';
import DownloadChart from '../charts/DownloadChart';
import UploadChart from '../charts/UploadChart';
import PingChart from '../charts/PingChart';
import { FaDownload, FaUpload, FaTachometerAlt } from 'react-icons/fa';

const Chart = ({ data }) => {
  return (
    <>
      <Row>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>
                <FaDownload style={{ marginRight: '10px', color: '#28a745'}} />
                Download
              </Card.Title>
              <DownloadChart data={data} title="Download Speed" type="download" />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>
                <FaUpload style={{ marginRight: '10px', width: '15px', color: '#00bcd4' }} />
                Upload
              </Card.Title>
              <UploadChart data={data} title="Upload Speed" type="upload" />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
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
    </>
  );
};

export default Chart;
