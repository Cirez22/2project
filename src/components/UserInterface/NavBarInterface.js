import { Image,Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'



const NavBarInterface = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Link to="/login">
              <button style={{marginLeft: "1100px"}} className=" btn btn-outline-dark">Log Out</button>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarInterface;
