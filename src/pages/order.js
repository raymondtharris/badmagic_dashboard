import React from 'react';

import {Container, Col, Row, Media} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const ORDER_QUERY = gql`
  query OrderQuery($id: String!){
    order(id: $id){
      id
      submitDate
      totalPrice
      emailAddress
      status
      tracking
      purchases{
        item{
          price
          name
          resourceURL
        }
        size
        quantity
      }
    }
  }
  `

function Order(props) {
  const param = useParams()
  
  const { loading, error, data} = useQuery(ORDER_QUERY, {
    variables: { id: param.id },
  });
  

  if (loading) return(
    <div>
        <h2>Order{' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;

  return (
    <div>
        <h2>Order - #{data.order.id}</h2>
        <Container>
          {data.order.purchases.map(purchase => (
            <Row key={purchase.id} style={{marginTop: "10pt"}}>
              <Col>
                <Media>
                    <img  alt={purchase.item.name}
                        width={140}
                        height={140}
                        className="mr-3"
                        variant="top" 
                        src="https://s3.amazonaws.com/www.dobadmagic.com/test-media/placeholder_b.png" 
                    />
                </Media>
              </Col>
              <Col >
                <Row ><span className="text-justify text-right">{purchase.item.name} - {purchase.size}</span></Row>
                <Row className="text-right">{purchase.item.price} x {purchase.quantity}</Row>
              </Col>
              <Col>
                <Row>
                  {purchase.item.price * purchase.quantity}
                </Row>
              </Col>
            </Row>
          ))}
          <Row>
            {data.order.totalPrice}
          </Row>
        </Container>
    </div>
  );
}

export default Order;