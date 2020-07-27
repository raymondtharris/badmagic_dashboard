import React from 'react';

import { ListGroup} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const orderQuery = gql`
  {
    newsletterUsers{
      firstname
      emailAddress
    }
  }
`


function Newsletter() {
  const { loading, error, data} = useQuery(orderQuery);
  console.log()

  if (loading) return(
    <div>
        <h2>Newsletter</h2>
        <p>Loading...</p>
    </div>

  ); 
  return (
    <div>
        <h2>Newsletter</h2>
        {data.newsletterUsers}
        <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </div>
  );
}

export default Newsletter;