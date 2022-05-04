import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Images from "../heads/Images";

function TopBar() {
  return (
    <Navbar expand="lg" className="topbar_everything">
      <Container>
        <Navbar.Brand>
          <Images
            key="brandlogo"
            imageClass="topbar_incredibleslogo"
            imageSrc="assets/svg/incredibles_logo.svg"
            imageAlt="Incredibles Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopBar;

/*

<Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto topbar_links_container">
            <LinkContainer to="/services">
              <Nav.Link className="nav-links">
                <span className="topbar_links">Services</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-links">
                <span className="topbar_links">About</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/recommendations">
              <Nav.Link className="nav-links">
                <span className="topbar_links">Recommendations</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <Nav.Link className="nav-links">
                <span className="topbar_links">FAQs</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-links">
                <span className="topbar_links">Contact</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/termsandpolicy">
              <Nav.Link className="nav-links">
                <span className="topbar_links">Terms and Policy</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

        */
