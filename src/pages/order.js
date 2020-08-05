import React from 'react';

import { ListGroup,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const ORDER_QUERY = gql`
  query OrderQuery($id: String!){
    order(id: $id){
      id
      status
      totalPrice
      emailAddress
      submitDate
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
        <ListGroup>
          
        </ListGroup>
    </div>
  );
}

export default Order;