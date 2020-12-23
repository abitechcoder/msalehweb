import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./NavBar.css"
function NavBar() {
    return (
      <div>
          <header className="App-header">
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
              <div className="container nav__bar">
              <Navbar.Brand href="#home">
                <img src="/images/logo.png" alt="M.Saleh logo" id="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                  <Nav.Link >HOME</Nav.Link>
                  <Nav.Link >ABOUT US</Nav.Link>
                  <Nav.Link >SERVICES</Nav.Link>
                  <Nav.Link >PRODUCTS</Nav.Link>
                  <Nav.Link >CONTACT US</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </Navbar>
        </header>
      </div>
    )
}

export default NavBar
