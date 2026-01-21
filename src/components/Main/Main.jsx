import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardContainer from '../CardContainer/CardContainer'
import './main.css'
import { data } from '../../helpers/data.js'

const Main = ({ value }) => {
    const filtered = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));

    return (
        <Container fluid className='main text-center pb-4'>
            <Row className="g-4 mx-2 mb-4 border-light-subtle bg-warning-subtle p-3 rounded-3">
                {filtered.map((player, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={3}>
                        <CardContainer {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Main