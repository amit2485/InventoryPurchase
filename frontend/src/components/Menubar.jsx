import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Menubar = () => {
  return (
    <div id='menubar'> 
    <h1>Menu</h1>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/product">Product</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/supplier">Supplier</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/purchase">Purchase</Navbar.Brand>
        </Container>
      </Navbar></div>
  )
}
