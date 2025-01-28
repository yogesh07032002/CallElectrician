import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-400" onClick={scrollToTop}>
            Call Electrician
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={scrollToTop} // Scroll to top on click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={scrollToTop} // Scroll to top on click
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={scrollToTop} // Scroll to top on click
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={scrollToTop} // Scroll to top on click
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={scrollToTop} // Scroll to top on click
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navigation Links (Mobile) */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute bg-black w-1/2 h-screen top-0 left-0`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="hover:text-gray-400 transition-colors duration-200"
              activeClassName="text-gray-400 border-b-2 border-gray-400"
              onClick={() => {
                scrollToTop();
                closeMenu();
              }} // Scroll to top and close menu on click
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
