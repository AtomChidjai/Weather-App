import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaCloudSun } from "react-icons/fa";

const NavbarComp = () => {
  return (
        <Navbar expand='lg' className='bg-light p-3'>
            <Navbar.Brand><FaCloudSun className='me-3' style={{fontSize : '1.5em'}}/>Weather App</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#'>Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default NavbarComp