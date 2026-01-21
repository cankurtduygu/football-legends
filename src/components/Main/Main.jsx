import React from 'react'
import Header from '../Header/Header'
import { Card, Container } from 'react-bootstrap'
import CardContainer from '../CardContainer/CardContainer'
import './main.css'
import { data } from '../../helpers/data.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Main = () => {
    return (
        <Container fluid className='main text-center pb-4'>
            <Header />

            <Row className="g-4 mx-2 mb-4">

                {data.map((player, index) => {

                    

                    return (
                        <Col key={index} xs={12} sm={12} md={6} lg={3}>
                            <CardContainer {...player} />
                        </Col>

                    )

                })}
            </Row>
        </Container>
    )
}

export default Main