import React from 'react';

import { ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const SUPPORTCASES_QUERY = gql`
  query SuppotCasesQuery{
    supportCases{
      id
      supportStatus
      supportDate
      emailAddress
      supportOwner{
        credentials{
          username
        }
      }
    }
  }
`


function SupportCases() {
  const { loading, error, data} = useQuery(SUPPORTCASES_QUERY);
  

  if (loading) return(
    <div>
        <h2>Support Cases {' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;
  return (
    <div>
        <h2>Support Cases</h2>
        <ListGroup>
          {data.supportCases.map(supportCase=>(
              
              <ListGroup.Item key={supportCase.id}>
                <Button value={supportCase.id} variant="secondary" size="sm" >View</Button>
          {' '} {supportCase.supportStatus} #{supportCase.id} {supportCase.emailAddress} {supportCase.supportOwner.credentials.username} {supportCase.supportDate}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  );
}

export default SupportCases;