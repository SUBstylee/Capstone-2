import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import './Header.scss';

import brandLogo from "../../assets/images/logos/TAA-header-color-transparent.png";
import { logout } from "../../actions/userActions";
import Search from "../Search/Search";

const Header = () => {
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.cartItems.reduce((prevValue,currentValue)=>prevValue+currentValue.qty,0);
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
                <>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fa-solid fa-right-to-bracket'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <i className='fa-solid fa-user-plus'></i> Register
                  </Nav.Link>
                </LinkContainer>
                </>
              )}
              {userInfo&&userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>  
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>  
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>  
                  </LinkContainer>
                </NavDropdown>
              )}
              <Search/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="Header-cats" bg='white'>
            <Nav className='mx-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-hat-cowboy'></i> Hats
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-shoe-prints'></i> Shoes
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-shirt'></i> Jackets
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-person'></i> Women
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                <i className='fa-solid fa-person-dress'></i> Men
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa-solid fa-list-ul'></i> All
                </Nav.Link>
              </LinkContainer>
            </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
