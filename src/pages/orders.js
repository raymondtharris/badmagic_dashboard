import React from 'react';

import { ListGroup,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const ORDER_QUERY = gql`
  query OrderQuery{
    orders{
      id
      status
      totalPrice
      emailAddress
      submitDate
    }
  }
`

function Orders() {
  const { loading, error, data} = useQuery(ORDER_QUERY);
  

  if (loading) return(
    <div>
        <h2>Orders {' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;

  return (
    <div>
        <h2>Orders</h2>
        <ListGroup>
          {data.orders.map(order=>(
              
              <ListGroup.Item key={order.id}>
                <Button value={order.id} variant="secondary" size="sm" >View</Button>
                {' '} {order.status} #{order.id} {order.totalPrice} {order.emailAddress} {order.submitDate}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  );
}

export default Orders;