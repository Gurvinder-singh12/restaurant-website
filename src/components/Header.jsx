import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useSelector } from "react-redux";
const Header = () => {
  // const itemsCount = useSelector((state)=>state.cart.items.length);
  return (
    <>
      <Navbar data-bs-theme="dark" sticky="top" style={{ height: "5rem", backgroundColor:"black" }}>
        <Container>
          <Navbar.Brand to="/">Apna Restaurant</Navbar.Brand>
          <Nav className=" mx-auto fs-6 gap-5">
            <Nav.Link as={NavLink} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              MENU
            </Nav.Link>
            <Nav.Link as={NavLink} to="/team">
              TEAM
            </Nav.Link>
          </Nav>
          {/* <Nav.Link className="cart-icon mx-4" >
              <i className="bi bi-cart-fill fs-4"></i>
  <span className="cart-badge">{itemsCount}</span>
          </Nav.Link> */}
          <Nav.Link as={NavLink} to="/booktable" className="ms-right">
            BOOK A TABLE
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
