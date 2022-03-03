

import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='Footer'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Totally Awesome Apparel
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer