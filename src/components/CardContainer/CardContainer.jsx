import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBasketballBall, FaHandsHelping, FaStar } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { useState } from 'react';




const CardContainer = ({ name, img, statistics }) => {


    const statIcons = [
        <FaBasketballBall className="text-danger" />,   // points
        <GiBasketballBasket className="text-success" />, // rebounds
        <FaHandsHelping className="text-primary" />,     // assist
        <FaStar className="text-warning" />,              // all star
    ];

    const [flipped, setFlipped] = useState(true);

    return (

        <Card 
        className='h-100 player-card' 
        style={{cursor:"pointer"}}
        onClick={() => { setFlipped(!flipped) }}>

            {flipped ?
                (<>
                    <Card.Img variant="top" src={img} alt={name} className='h-100 p-3 mx-auto player-img' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </>
                )
                :
                (<Card.Body className='h-100 d-flex flex-column justify-content-center'>
                    <Card.Title className='mb-5 mt-5'>{name}</Card.Title>
                    <ListGroup variant="flush" className='mt-5 mb-5'>
                        {statistics.map((stat, i) => (
                            <ListGroup.Item
                                key={i}
                                className="d-flex align-items-center gap-2"
                            >
                                <span style={{ fontSize: "1.2rem" }}>
                                    {statIcons[i]}
                                </span>
                                {stat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>)}
        </Card>
    )
}

export default CardContainer