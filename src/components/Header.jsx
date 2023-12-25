import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>  <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand href="#home" className='text-white'>Product Listing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header
