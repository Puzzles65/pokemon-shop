import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
  <Navbar expand="lg" Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/cards">Cards</Nav.Link>
          <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
          <Nav.Link as={Link} to="/plushies">Plushies</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Item className="text-light">Welcome, {user.name}</Nav.Item>
          &nbsp;&nbsp;<Nav.Link as={Link} to="" onClick={handleLogOut}>Log Out</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    // <nav>
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Order</Link>
    //   &nbsp;&nbsp;
    //   <span>Welcome, {user.name}</span>
    //   &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    // </nav>
  );
}