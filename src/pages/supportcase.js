import React from 'react';

import { Container, Col, Row, Media} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams  } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client';

const SUPPORTCASES_QUERY = gql`
  query SuppotCasesQuery($id: String!){
    supportCase(id: $id){
      id
      name
      emailAddress
      supportDate
      supportMessage
      supportStatus
      supportResolution
      supportOwner{
        firstname
        credentials{
          username
        }
      }
    }
  }
`


function SupportCase() {
  const param = useParams()
  const { loading, error, data} = useQuery(SUPPORTCASES_QUERY,{
    variables: {id: param.id}
  });
  

  if (loading) return(
    <div>
        <h2>Support Case {' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;
  return (
    <div>
        <h2>Support Case - #{data.supportCase.id}</h2>
        <Container>
          <Row>{data.supportCase.supportStatus}</Row>
          <Row>{data.supportCase.name} - {data.supportCase.emailAddress}</Row>
          <Row>{data.supportCase.supportMessage}</Row>
        </Container>
    </div>
  );
}

export default SupportCase;