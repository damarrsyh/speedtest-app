/* eslint-disable react/prop-types */
import { Table } from 'react-bootstrap';
import { format } from 'date-fns';

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover responsive className="mt-4" variant="dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <thead className="bg-secondary text-light text-center">
        <tr>
          <th className="py-3 text-center" style={{color: '#28a745'}}>Download Bytes</th>
          <th className="py-3 text-center" style={{color: '#28a745'}}>Download Elapsed</th>
          <th className="py-3 text-center" style={{color: '#00bcd4'}}>Upload Bytes</th>
          <th className="py-3 text-center" style={{color: '#00bcd4'}}>Upload Elapsed</th>
          <th className="py-3 text-center" style={{color: '#ffc107'}}>Ping Jitter</th>
          <th className="py-3 text-center">Time</th>
          <th className="py-3 text-center">Server</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
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
  );
};

export default DataTable;
