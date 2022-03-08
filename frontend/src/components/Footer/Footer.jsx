
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='Footer'>
      <Container>
        <Row>
          <Col className='text-center'>
            Copyright &copy; Totally Awesome Apparel
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer