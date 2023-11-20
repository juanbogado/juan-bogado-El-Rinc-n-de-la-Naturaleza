import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';

const NavBarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={"/"} style={{textDecoration: "none", color: "pink"}}>El Rincón de la Naturaleza</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={"/category/semillas"} style={{textDecoration: "none", color: "pink"}}>Semillas</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to={"/category/herramientas"} style={{textDecoration: "none", color: "pink"}}>Herramientas de jardineria</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to={"/category/abonos"} style={{textDecoration: "none", color: "pink"}}>Sustrato y abonos</Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
            <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponents;