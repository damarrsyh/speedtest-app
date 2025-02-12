/* eslint-disable react/prop-types */
import { Table } from 'react-bootstrap';
import { format } from 'date-fns';
import { FaDownload, FaUpload, FaTachometerAlt } from "react-icons/fa";

const DataTable = ({ data = [] }) => {
  return (
    <div style={{ overflowX: "auto", maxHeight: "400px", overflowY: "auto", position: "relative", borderTop: "1px solid #ddd" }}>
    <Table striped bordered hover responsive style={{ fontFamily: 'Poppins, sans-serif', minWidth: "900px"}}>
      <thead className="bg-secondary text-center" style={{ position: "sticky", top: 0, zIndex: 10, backgroundColor: "#6c757d" }}>
        <tr>
          <th className="py-3 text-center align-middle">No</th>
          <th className="py-3 text-center align-middle" style={{ color: '#28a745' }}>
            <FaDownload className="me-2" /> Bytes
          </th>
          <th className="py-3 text-center align-middle" style={{ color: '#28a745' }}>
            <FaDownload className="me-2" /> Elapsed
          </th>
          <th className="py-3 text-center align-middle" style={{ color: '#00bcd4' }}>
            <FaUpload className="me-2" /> Bytes
          </th>
          <th className="py-3 text-center align-middle" style={{ color: '#00bcd4' }}>
            <FaUpload className="me-2" /> Elapsed
          </th>
          <th className="py-3 text-center align-middle" style={{ color: '#ffc107' }}>
            <FaTachometerAlt className="me-2" /> Jitter
          </th>
          <th className="py-3 text-center align-middle">Time</th>
          <th className="py-3 text-center align-middle">Server</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item._id}>
            <td className="py-3 text-center">{index + 1}</td>
            <td className="py-3 text-center">{(item.data.download.bytes / 1048576).toFixed(1)} Mbps</td>
            <td className="py-3 text-center">{(item.data.download.elapsed / 1000).toFixed(2)}s</td>
            <td className="py-3 text-center">{(item.data.upload.bytes / 1048576).toFixed(1)} Mbps</td>
            <td className="py-3 text-center">{(item.data.upload.elapsed / 1000).toFixed(2)}s</td>
            <td className="py-3 text-center">{(item.data.ping.jitter).toFixed(1)}ms</td>
            <td className="py-3 text-center">{format(new Date(item.datetime), 'eeee, d MMMM yyyy HH:mm:ss')}</td>
            <td className="py-3 text-center">{item.data.isp} ({item.data.server.name}, {item.data.server.location})</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  );
};

export default DataTable;
