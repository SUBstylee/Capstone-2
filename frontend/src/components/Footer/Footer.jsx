
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <Container>
        <Row>
          <Col className='text-center'>
            Copyright &copy; Totally Awesome Apparel
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <a className="btn" style={{backgroundColor: '#333333', color:'#fff'}} rel="noopener noreferrer" href="https://github.com/SUBstylee" role="button" target='_blank'><i className="fab fa-github"></i></a>
            <a className="btn" style={{backgroundColor: '#0082ca', color:'#fff'}} rel="noopener noreferrer" href="https://www.linkedin.com/in/jeremy-threlfall/" role="button" target='_blank'><i className="fab fa-linkedin-in"></i></a>
            <a className="btn" style={{backgroundColor: '#06C755', color:'#fff'}} rel="noopener noreferrer" href="https://line.me/R/ti/p/substylee" role="button" target='_blank'><i className="fab fa-line"></i></a>
            <a className="btn" style={{backgroundColor: '#55acee', color:'#fff'}} rel="noopener noreferrer" href="https://twitter.com/jjthrelfall" role="button" target='_blank'><i className="fab fa-twitter"></i></a>
            <a className="btn" style={{backgroundColor: '#3b5998', color:'#fff'}} rel="noopener noreferrer" href="https://www.facebook.com/substylee" role="button" target='_blank'><i className="fab fa-facebook-f"></i></a>
            <a className="btn" style={{backgroundColor: '#ac2bac', color:'#fff'}} rel="noopener noreferrer" href="https://www.instagram.com/jjthrelfall/" role="button" target='_blank'><i className="fab fa-instagram"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer