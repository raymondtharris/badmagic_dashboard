import React from 'react';

import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/">BadMagic Dashboard</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/support-cases">Support Cases</Link>
            <Link to="/items">Items</Link>
            <Link to="/newsletter">Newsletter</Link>
        </Nav>
    </div>
  );
}

export default Sidebar;