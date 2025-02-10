import React from 'react'
import { Table } from 'react-bootstrap'

const AppDevice = ({ devices }) => {
  return (
    <>
      <Table striped bordered hover responsive className="mt-4" variant="dark" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>IP</th>
          <th>Device Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.id}>
            {/* <td>{index + 1}</td> */}
            <td>{device.ip}</td>
            <td>{device.name}</td>
            <td>{device.is_online}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default AppDevice
