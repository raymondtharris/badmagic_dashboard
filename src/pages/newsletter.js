import React from 'react';

import { ListGroup, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const ORDER_QUERY = gql`
  query OrderQuery{
    newsletterUsers{
      firstname
      emailAddress
    }
  }
`


function Newsletter() {
  const { loading, error, data} = useQuery(ORDER_QUERY);
  

  if (loading) return(
    <div>
        <h2>Newsletter {' '}<Button as="Link" variant="secondary" size="sm">New Newsletter</Button>{' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;
  return (
    <div>
        <h2>Newsletter {' '}<Button variant="secondary" size="sm">New Newsletter</Button>{' '}</h2>
        
        <ListGroup>
            
            
        </ListGroup>
    </div>
  );
}

export default Newsletter;