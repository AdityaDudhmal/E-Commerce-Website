import React, { Component } from 'react'
import "../Style.css"
import "./Grocery.js"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from 'react-router-bootstrap';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grocery from "./Grocery";
import Accessary from "./Accessary";
// import Other from "./Other"
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Navigate extends Component {
  render() {
    return (
      <>
         <Navbar expand="lg" className='main-navbar'>
          <Container fluid className='navbar-container'>

            {/* <LinkContainer> */}
              <Navbar.Brand >Raj Super Market</Navbar.Brand>
            {/* </LinkContainer> */}

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            
            <LinkContainer to="/">
              <Nav.Link  className='nav-items'>Grocery</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/accessary">
              <Nav.Link  className='nav-items'>Accessories</Nav.Link>
            </LinkContainer>      

            {/* <LinkContainer to="/other">
              <Nav.Link  className='nav-items'>Other</Nav.Link>
            </LinkContainer>  */}
          
                       
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Find Your Item Here" className="me-2" aria-label="Search" />
            <Button variant="outline-success" id='nav-search-btn'>Search</Button>
            <Button variant="outline-success" id='nav-login-btn'>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </>
    )
  }
}

