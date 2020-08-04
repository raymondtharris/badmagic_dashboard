import React, {useState} from 'react';

import { ListGroup, Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';

const ORDER_QUERY = gql`
  query OrderQuery{
    newsletterUsers{
      firstname
      emailAddress
    }
  }
`


function NewsletterUsers() {
  const { loading, error, data} = useQuery(ORDER_QUERY);
  //console.log(data)
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (ev) => {
    setShow(true)
    //console.log(ev.currentTarget)
    setSelectedUser(ev.currentTarget.value)
  }

  if (loading) return(
    <div>
        <h2>Newsletter Users</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;
  return (
    <div>
        <h2>Newsletter Users</h2>
        
        <ListGroup>
            {data.newsletterUsers.map(newsletterUser=>(
              
              <ListGroup.Item key={newsletterUser.emailAddress}>
                <Button value={newsletterUser.emailAddress} variant="secondary" size="sm" onClick={handleShow}>Remove</Button>
                {' '} {newsletterUser.firstname} {newsletterUser.emailAddress}
                </ListGroup.Item>
            ))}
            
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you would like to remove {selectedUser}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewsletterUsers;