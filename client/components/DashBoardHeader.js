// components/DashboardHeader.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from '@styles/main.css'

function DashboardHeader2() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#" className='font-color'>    IBMResolve </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className='font-color'>Home</Nav.Link>
          <Nav.Link href="#" className='font-color'>Dashboard</Nav.Link>
          <Nav.Link href="#" className='font-color'>Settings</Nav.Link>
        </Nav>
        <Nav className='font-color'>
          <NavDropdown title="User" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DashboardHeader2;
