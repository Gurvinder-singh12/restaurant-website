import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import BookingForm from "../pages/BookingForm";

const Header = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar data-bs-theme="dark" sticky="top" style={{ height: "5rem", backgroundColor: "black" }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Apna Restaurant</Navbar.Brand>

          {/* Desktop Links */}
          <Nav className="d-none d-md-flex mx-auto fs-6 gap-5">
            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/menu">MENU</Nav.Link>
            <Nav.Link as={NavLink} to="/team">TEAM</Nav.Link>
          </Nav>

          {/* Booking Button */}
          <Nav.Link className="d-none d-md-flex ms-right" onClick={() => setShowBookingModal(true)}>
            BOOK A TABLE
          </Nav.Link>

          {/* Hamburger Icon for Mobile */}
          <div
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </div>
        </Container>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center gap-5 p-10 transition-transform duration-300 ease-in-out z-50
            ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <Nav.Link as={NavLink} to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Nav.Link>
          <Nav.Link as={NavLink} to="/menu" onClick={() => setIsMobileMenuOpen(false)}>MENU</Nav.Link>
          <Nav.Link as={NavLink} to="/team" onClick={() => setIsMobileMenuOpen(false)}>TEAM</Nav.Link>
          <Nav.Link onClick={() => { setShowBookingModal(true); setIsMobileMenuOpen(false); }}>
            BOOK A TABLE
          </Nav.Link>
        </div>
      </Navbar>

      <BookingForm show={showBookingModal} setShow={setShowBookingModal} />
    </>
  );
};

export default Header;
