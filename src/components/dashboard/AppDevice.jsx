import React from 'react'
import { Table } from 'react-bootstrap'

const AppDevice = ({ devices }) => {
  return (
    <>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Device Name</th>
          <th>IP Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device, index) => (
          <tr key={device.id}>
            <td>{index + 1}</td>
            <td>{device.name}</td>
            <td>{device.ip}</td>
            <td>{device.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default AppDevice
