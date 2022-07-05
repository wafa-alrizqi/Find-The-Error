import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container} from 'react-bootstrap';

import { Link } from "react-router-dom";

function Header() {
  return (
    // <div>
    //   <Link to="/Cards">Cards</Link>
    //   <Link to="/About">About</Link>
    // </div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to='/' className='nav-title'>#My-Dashboard</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link class='nav-items' to="/Cards">Cards</Link></Nav.Link>
      <Nav.Link><Link class='nav-items' to="/About">About</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
  );
}

export default Header;
