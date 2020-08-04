import React, {useState} from 'react';

import { Container,Row, Col, Card, ToggleButton, ButtonGroup, Button, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCard(props) {
    //console.log(props)
    
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Available', value: '1' },
        { name: 'Shelved', value: '2' },
      ];
    

  return (
    <Row key={props.carddata.id} style={{marginTop: "10pt"}}>
        <Col md={4}>
        <Media>
            <img  alt={props.carddata.name}
                width={300}
                height={300}
                className="mr-3"
                variant="top" 
                src="https://s3.amazonaws.com/www.dobadmagic.com/test-media/placeholder_b.png" 
            />
        </Media>
        </Col>
        <Col>
            <Card>
                <Card.Header>
                        {props.carddata.name} 
                </Card.Header>
                <Card.Body>
                    <Card.Text>Price - {props.carddata.price}</Card.Text>
                    <Button variant="secondary">Discount</Button>{' '}
                    <Card style={{marginTop: "10pt"}}>
                        <Card.Header >
                            Inventory
                        </Card.Header>
                        <Container className="text-center">
                            <Row >
                                    <Col className="border">XS</Col>
                                    <Col className="border">S</Col>
                                    <Col className="border">M</Col>
                                    <Col className="border">L</Col>
                                    <Col className="border">XL</Col>
                                    <Col className="border">XXL</Col>
                                    <Col className="border">XXXL</Col>
                            </Row>
                            <Row>
                                    <Col className="border">{props.carddata.inventory.xsmall}</Col>
                                    <Col className="border">{props.carddata.inventory.small}</Col>
                                    <Col className="border">{props.carddata.inventory.medium}</Col>
                                    <Col className="border">{props.carddata.inventory.large}</Col>
                                    <Col className="border">{props.carddata.inventory.xlarge}</Col>
                                    <Col className="border">{props.carddata.inventory.xxlarge}</Col>
                                    <Col className="border">{props.carddata.inventory.xxxlarge}</Col>
                            
                                    
                            </Row>
                        </Container>
                    </Card>

                    
                    
                    <br/>
                    <ButtonGroup toggle>
                            {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                            ))}
                        </ButtonGroup>    
                </Card.Body>
            </Card>
        </Col>
    </Row>
  );
}

export default ItemCard;