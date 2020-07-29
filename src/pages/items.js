import React from 'react';

import {Row, Col, CardDeck, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, gql } from '@apollo/client';

const ITEMS_QUERY = gql`
  query {
    items{
      id
      name
      collection
      description
      price
      inventory{
        xsmall
        small
        medium
        large
        xlarge
        xxlarge
        xxxlarge
      }
    }
  }
`

function Items() {
  const { loading, error, data} = useQuery(ITEMS_QUERY);
  console.log(data)

  if (loading) return(
    <div>
        <h2>Newsletter</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;


  return (
    <div>
        <h2>Items</h2>
        <div>Add Item</div>
        
        {data.items.map(item=>(
              <Row key={item.id} >
                <Col>
                <Card.Img variant="top" src="https://via.placeholder.com/300x320?text=" />
                </Col>
                
                <Card.Body>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>Inventory</Card.Text>
                    <ListGroup horizontal>
                    <ListGroup.Item>{item.inventory.xsmall}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.small}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.medium}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.large}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.xlarge}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.xxlarge}</ListGroup.Item>
                      <ListGroup.Item>{item.inventory.xxxlarge}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
              </Row>
            ))}
        
    </div>
  );
}

export default Items;