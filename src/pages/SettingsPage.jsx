import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SettingsPage = () => {
  return (
    <Container fluid className='d-flex' style={{ fontFamily: 'Poppins, sans-serif'}}>
        <Col className="p-3 ms-auto">
          <h4 className='my-3'>Settings</h4>
        </Col>
    </Container>
  )
}

export default SettingsPage
