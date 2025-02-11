/* eslint-disable react/prop-types */
import { Table } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AppDevice = ({ devices }) => {
  return (
    <>
      <Table striped bordered hover responsive style={{ fontFamily: 'Poppins, sans-serif' }}>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Device Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.ip}</td>
              <td>{device.name}</td>
              <td style={{ color: device.is_online === "Online" ? "green" : "red", display: "flex", alignItems: "center" }}>
                {device.is_online === "Online" ? (
                  <>
                    <FaCheckCircle className="me-2" color="green" />
                    Online
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="me-2" color="red" />
                    Offline
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AppDevice;
