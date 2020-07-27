import React from 'react';

import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './components/sidebar';
import  Dashboard from './pages/dashboard';
import  Orders from './pages/orders';
import SupportCases from './pages/supportcases';
import Items from './pages/items';
import Newsletter from './pages/newsletter';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://uo4ksvhnf9.execute-api.us-east-1.amazonaws.com/dev/graphqlHandler'
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Row>
            <Col md={2}>
              <Sidebar></Sidebar>
            </Col>
            <Col >
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/orders">
                  <Orders />
                </Route>
                <Route path="/support-cases">
                  <SupportCases />
                </Route>
                <Route path="/items">
                  <Items />
                </Route>
                <Route path="/newsletter">
                  <Newsletter />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}
export default App;



