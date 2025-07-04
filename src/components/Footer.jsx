import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../assets/Logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Synauris
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting students with industry professionals for mentorship and
              career growth.
            </p>

            <div className="mt-4 flex space-x-4">
              <Link className="text-gray-400 hover:text-blue-600">
                <Facebook size={20} />
              </Link>
              <Link className="text-gray-400 hover:text-blue-600">
                <Twitter size={20} />
              </Link>
              <Link className="text-gray-400 hover:text-blue-600">
                <Linkedin size={20} />
              </Link>
              <Link className="text-gray-400 hover:text-blue-600">
                <Instagram size={20} />
              </Link>
             
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/apply"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/bloglist"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 text-sm"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} Synauris. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                className="text-sm text-gray-600 hover:text-blue-600 mr-4"
              >
                Terms
              </Link>
              <Link
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
