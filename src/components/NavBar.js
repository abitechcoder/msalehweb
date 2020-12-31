import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <header className="App-header">
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="light"
          variant="light"
        >
          <div className="container-fluid nav__bar">
            <Navbar.Brand href="#home">
              <img src="/images/logo.png" alt="M.Saleh logo" id="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <NavLink exact to="/" className="nav-link" role="button">
                  HOME
                </NavLink>

                <NavLink to="/about" className="nav-link" role="button">
                  ABOUT US
                </NavLink>

                {/* <NavLink to="/services" className="nav-link" role="button">
                  SERVICES
                </NavLink> */}

                <NavLink to="/products" className="nav-link" role="button">
                  PRODUCTS
                </NavLink>

                <NavLink to="/contact" className="nav-link" role="button">
                  CONTACT US
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
