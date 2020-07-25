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


function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
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
  );
}
export default App;



