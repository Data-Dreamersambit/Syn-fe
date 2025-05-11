import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Apply", to: "/apply" },
    { name: "Contact", to: "/contact" },
  ];

  const resourceLinks = [
    { name: "Blog", to: "/bloglist" },
    { name: "FAQ", to: "/faq" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Synauris
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 group inline-flex items-center px-3 py-2 text-sm font-medium hover:text-blue-600 cursor-pointer"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4 group-hover:text-blue-600" />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-md"
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-3 py-2">
              <button
                className="flex justify-between w-full text-base font-medium text-gray-700"
                onClick={toggleDropdown}
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="pl-4 pt-2 space-y-1">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="block px-3 py-2 text-base text-gray-600 hover:text-blue-600"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4 px-4">
              <Link
                to="/login"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
