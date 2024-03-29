import * as React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../public/logo192.png"
import logo from "../images/brandlogo.svg"
import { UserContext } from "../App";

const Navbar = ({ darkTheme, setDarkTheme }) => {
    const { state, dispatch } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="shadow-sm bg-white p-5 w-full">
        <div className="flex items-center md:mx-20  justify-between">
          <div className="flex-shrink-0 flex align-bottom">
            <img src={logo} alt="wordpass" width="40" height="25" />
            <p className="mt-2 mr-px font-semibold">wordpass</p>
          </div>
          <div className="ml-10 hidden md:flex items-baseline space-x-8">
            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="cursor-pointer hover:text-green-500 font-semibold py-2 text-md">
              <NavLink to="/generate">Generate Password</NavLink>
            </div>
            <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
              <NavLink to="/contact">Contact</NavLink>
            </div>
            {!state ? (
              <>
                <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                  <NavLink to="/signin">Login</NavLink>
                </div>
                <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                  <NavLink to="/register">Signup</NavLink>
                </div>
              </>
            ) : (
              <>
                <div className="cursor-pointer hover:text-blue-500 font-semibold py-2 text-md">
                  <NavLink to="/logout">Logout</NavLink>
                </div>
              </>
            )}
          </div>
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="cursor-pointer hover:bg-blue-600 mt-2 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="cursor-pointer hover:bg-green-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                <NavLink to="/generate">Generate Password</NavLink>
              </div>
              <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                <a href="contact">Contact</a>
              </div>
              {!state ? (
                <>
                  <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <NavLink to="/signin">Login</NavLink>
                  </div>
                  <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <NavLink to="/register">Signup</NavLink>
                  </div>
                </>
              ) : (
                <>
                  <div className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <NavLink to="/logout">Logout</NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

