import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import useAuth from '../../hooks/useAuth';

import Dropdown from 'react-bootstrap/Dropdown';


const NavB = () => {
  const { handleLogout } = useAuth();

  const logoutHandler = () => {
    handleLogout(); 

  };

  return (
    <Navbar bg='light' expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rides">Rides</Nav.Link>
            <Nav.Link href="/booking">Bookings</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          
          

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
            <i className="fas fa-user"></i>  
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={logoutHandler} href="/login">Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>  

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;