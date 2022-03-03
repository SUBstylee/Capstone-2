import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import brandLogo from "../../assets/images/logos/TAA-header-color-transparent.png";

const Header = () => {
  return (
    <header className='Header'>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              className='ps-2'
              src={brandLogo}
              alt='Totally Awesome Apparel Logo'
              height='36'
            />
          </Navbar.Brand>
        </LinkContainer>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-cart-shopping'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fa-solid fa-right-to-bracket'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
