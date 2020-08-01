import React, {useState} from 'react';

import { Row, Col, Card, ListGroup, ToggleButton, ButtonGroup, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCard(props) {
    //console.log(props)
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Available', value: '1' },
        { name: 'Shelved', value: '2' },
      ];
    

  return (
    <Row key={props.carddata.id} >
        <Col md={4}>
        <Media >
            <img  
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
                    <Card.Text>Inventory</Card.Text>
                    <ListGroup horizontal style={{border : 0 }} >
                        <ListGroup.Item ><Row >XS</Row><Row >{props.carddata.inventory.xsmall}</Row></ListGroup.Item>
                        <ListGroup.Item><Row>S</Row><Row>{props.carddata.inventory.small}</Row></ListGroup.Item>
                        <ListGroup.Item><Row className="text-center">M</Row><Row>{props.carddata.inventory.medium}</Row></ListGroup.Item>
                        <ListGroup.Item><Row>L</Row><Row>{props.carddata.inventory.large}</Row></ListGroup.Item>
                        <ListGroup.Item><Row>XL</Row><Row>{props.carddata.inventory.xlarge}</Row></ListGroup.Item>
                        <ListGroup.Item><Row>XXL</Row><Row>{props.carddata.inventory.xxlarge}</Row></ListGroup.Item>
                        <ListGroup.Item><Row>XXXL</Row><Row>{props.carddata.inventory.xxxlarge}</Row></ListGroup.Item>
                    </ListGroup>
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