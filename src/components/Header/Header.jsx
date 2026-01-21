import Container from 'react-bootstrap/Container';
import nbaLogo from '../../helpers/nba-logo.png';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



const Header = ({ inputValue, setInputValue }) => {



    return (
        <Container fluid className='text-center'>
            <Row>
                <Col className='mt-5 mb-5'>
                    <img src={nbaLogo} alt="" style={{ width: "10rem" }} />
                    <h1 className='mt-4 mb-3 text-danger'>NBA Legends</h1>
                    <Form className='mt-3'>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Control
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                type="text" placeholder="Search Player..." />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Header