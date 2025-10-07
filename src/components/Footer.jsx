const Footer = () => {
  return (
    <>
      <div className="footer bg-black text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 py-5 px-6 md:px-16  justify-between items-start text-sm md:text-base">
        
        {/* Contact Section */}
        <div className="footer-text mb-1 md:mb-0 sm:justify-center text-center space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Contact Us</h3>
          <p>Location</p>
          <p>Call: +01 1234567890</p>
          <p>Email: demo@gmail.com</p>
        </div>

        {/* Info Section */}
        <div className="footer-info mb-2 md:mb-0 max-w-sm text-center">
          <h5 className="text-xl font-bold text-yellow-500 mb-2">Apna Restaurant</h5>
          <p className="text-gray-400">
            Experience the vibrant atmosphere of our restaurant. 
            Immerse yourself in the aroma of freshly grilled delicacies and 
            authentic flavors made with passion.
          </p>
        </div>

        {/* Timing Section */}
        <div className="timing mb-2 text-center md:mb-0 space-y-1">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Opening Hours</h3>
          <p>Everyday</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className=" bg-zinc-950 text-center text-gray-400 py-3 text-xs">
        © {new Date().getFullYear()} Apna Restaurant — All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
