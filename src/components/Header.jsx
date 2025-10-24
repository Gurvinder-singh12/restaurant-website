import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import BookingForm from "../pages/BookingForm";

const Header = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 h-72 py-5 bg-black text-white">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 h-full">
          <NavLink to="/">Apna Restaurant</NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex mx-auto space-x-24">
            <NavLink to="/" className="hover:text-yellow-400 transition">HOME</NavLink>
            <NavLink to="/menu"className="hover:text-yellow-400 transition">MENU</NavLink>
            <NavLink to="/team"className="hover:text-yellow-400 transition">TEAM</NavLink>
          </div>

          {/* Booking Button */}
          <NavLink className="hidden md:flex" onClick={() => setShowBookingModal(true)}>
            BOOK A TABLE
          </NavLink>

          {/* Hamburger Icon for Mobile */}
          <div
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center gap-5 p-10 transition-transform duration-300 ease-in-out z-50
            ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400 transition">HOME</NavLink>
          <NavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400 transition">MENU</NavLink>
          <NavLink to="/team" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400 transition">TEAM</NavLink>
          <NavLink onClick={() => { setShowBookingModal(true); setIsMobileMenuOpen(false); }}className="hover:text-yellow-400 transition">
            BOOK A TABLE
          </NavLink>
        </div>
      </nav>

      <BookingForm show={showBookingModal} setShow={setShowBookingModal} />
    </>
  );
};

export default Header;
