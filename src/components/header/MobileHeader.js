import React from 'react';
import { ListGroup, Navbar, Container, Nav } from 'react-bootstrap';
import logo5 from '../../assets/images/logo5.png';
import category from '../../assets/images/category.png';
import service from '../../assets/images/service.png';
import foodcart from '../../assets/images/foodcart.png';
import './MobileHeader.css'

const MobileHeader = () => {
    return (
        <div className="mobileheader">
            <div class="topmenu">
                <Navbar collapseOnSelect expand="lg">
                  <Container>
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
                      </Navbar.Collapse>

                  </Container>
              </Navbar> 
            </div>
            <div className="headergroup">
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <img src={logo5} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={category} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={service} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img src={foodcart} />
                    </ListGroup.Item>
                </ListGroup>
            </div>
            
        </div>
    )
}

export default MobileHeader;