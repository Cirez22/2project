import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


import '../styles/Navbar.css';


const NavBar = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand> SELL4U
        {/* <img src="./public/images/logo.png" className="img-fluid" alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#works">How it Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/login">
              <button className="btn btn-outline-dark">Login</button>
            </Link>
            <Nav.Link href="register">
              <button className="btn btn-outline-dark">Sign In</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
