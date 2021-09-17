import { Navbar, Container, Nav } from 'react-bootstrap'



const NavBarInterface = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Nav.Link href="login">
              <button style={{marginLeft: "1100px"}} className=" btn btn-outline-dark">Log Out</button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarInterface;
