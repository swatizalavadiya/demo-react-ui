import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo5 from '../../assets/images/logo5.png';
import shoppingcart from '../../assets/images/shoppingcart.png';
import './Header.css';

const Header = () => {
    return (
      <div className="header">
              <Navbar collapseOnSelect expand="lg">
                  <Container fluid>
                      <Navbar.Brand href="#home">
                        <img
                            src={logo5}
                            width="80"
                            className="d-inline-block align-top"
                            alt="logo" />
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">About</Nav.Link>
                                <Nav.Link href="/">Categories</Nav.Link>
                                <Nav.Link href="/">Services</Nav.Link>
                                <Nav.Link href="/">Blog</Nav.Link>
                                <Nav.Link href="/">FAQs</Nav.Link>
                                <Nav.Link href="/">Contacts</Nav.Link>
                              </Nav>
                              <Nav className="align-items-md-center">
                                <Nav.Link href="#" className="secondNav">
                                    <img
                                        src={shoppingcart}
                                        width="40"
                                        className="d-inline-block align-top cartLogo"
                                        alt="logo" />
                                </Nav.Link>
                                <Nav.Link href="#" className="secondNav call">
                                    +91 1234567890
                                </Nav.Link>
                                </Nav>
                      </Navbar.Collapse>

                  </Container>
              </Navbar> 
          </div>
      )
  }

export default Header;