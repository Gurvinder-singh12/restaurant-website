import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
const Header = () => {

  return (
    <>
      <Navbar data-bs-theme="dark" sticky="top" style={{ height: "5rem", backgroundColor:"black" }}>
        <Container>
          <Navbar.Brand to="/">Apna Restaurant</Navbar.Brand>
          <Nav className=" d-none d-md-flex mx-auto fs-6 gap-5 ">
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
          <Nav.Link as={NavLink} to="/booktable" className="d-none d-md-flex ms-right">
            BOOK A TABLE
          </Nav.Link>
          <div className="text-white text-2xl md:hidden ">&#9776;</div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
