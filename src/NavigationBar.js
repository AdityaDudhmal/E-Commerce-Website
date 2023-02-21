import React from 'react'
import "./Style.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


function Navigationbar() {
  return (
    <>
        <Navbar expand="lg" className='main-navbar'>
          <Container fluid className='navbar-container'>
            <Navbar.Brand href="#">Raj Super Market</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <LinkContainer to="/">
              <Nav.Link className='nav-items'>Grocery</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/accessary">
              <Nav.Link className='nav-items'>Accessories</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to={<Accessary/>}>
              <Nav.Link href="#" className='nav-items'>Other</Nav.Link>   
            </LinkContainer>            */}
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

export default Navigationbar