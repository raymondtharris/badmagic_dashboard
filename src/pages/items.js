import React from 'react';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, gql } from '@apollo/client';
import ItemCard from '../components/itemcard';

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
  //console.log(data)

  if (loading) return(
    <div>
        <h2>Items {' '}<Button variant="secondary" size="sm">Add Item</Button>{' '}</h2>
        <p>Loading...</p>
    </div>

  ); 
  
  if (error) return `Error! ${error.message}`;


  return (
    <div>
        <h2>Items {' '}<Button variant="secondary" size="sm">Add Item</Button>{' '}</h2>
        {data.items.map(item=>(
              <ItemCard key={item.id} carddata={item} ></ItemCard>
            ))}
        
    </div>
  );
}

export default Items;