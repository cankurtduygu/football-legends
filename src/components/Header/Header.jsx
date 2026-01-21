import React from 'react'
import Container from 'react-bootstrap/Container';
import nbaLogo from '../../helpers/nba-logo.png';
import { Col, Row } from 'react-bootstrap';



const Header = () => {
  return (
    <Container fluid className='text-center'>
        <Row>
        <Col className='mt-5 mb-5'>
            <img src={nbaLogo} alt="" style={{width:"10rem"}} />
        <h1 className='mt-4 mb-3'>NBA Legends</h1>
        <input type="text" style={{width:"20rem", height:"2rem"}} placeholder='Search a legend'/>
    </Col>
    </Row>
    </Container>
  )
}

export default Header