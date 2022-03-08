import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch,useSelector } from "react-redux";

import brandLogo from "../../assets/images/logos/TAA-header-color-transparent.png";
import { logout } from "../../actions/userActions";

const Header = () => {
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.cartItems.length;
  const dispatch=useDispatch();
  const cartColor= cartLength===0?'#fc917e':'#98cef9';

  const logoutHandler=()=>{
    dispatch(logout());
  };

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
                <span className='fa-layers fa-fw'>
                  <i className='fas fa-shopping-cart fa-lg'></i>
                    <span className='fa-layers-counter fa-layers-top-left' style={{ background: `${cartColor}`, borderRadius:'50%', padding:'0 6px', marginRight:'1px'}}>{cartLength}</span>
                </span>
                Cart
              </Nav.Link>
              </LinkContainer>
              {userInfo?(
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>  
                  </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ):(
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fa-solid fa-right-to-bracket'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
