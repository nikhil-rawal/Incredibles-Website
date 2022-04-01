import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

function TopBar() {
  return (
    <Navbar expand="lg" fixed="top" className="topbar_everything">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="topbar_incredibleslogo"
              src={"assets/svg/incredibles_logo.svg"}
              alt="Incredibles Logo"
            />
          </Navbar.Brand>
        </LinkContainer>

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
      </Container>
    </Navbar>

    // <div className="topBar">
    //   <div className="topBar_logo">
    //     <img
    //       className="topBar_logo_incrediblesLogo"
    //       src={"assets/svg/incredibles_logo.svg"}
    //       alt="Incredibles Logo"
    //     />
    //   </div>
    //   <div className="topBar_links">
    //     <div className="topBar_links_services">Services</div>
    //     <div className="topBar_links_about">About</div>
    //     <div className="topBar_links_recommendations">Recommendations</div>
    //     <div className="topBar_links_faqs">FAQs</div>
    //     <div className="topBar_links_contact">Contact</div>
    //   </div>
    // </div>
  );
}

export default TopBar;
