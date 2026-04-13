import React from "react";
import { FaChartLine } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 container mx-auto justify-between">
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/timeline'>Timeline</Link>
              </li>
              <li>
                <Link to='/stats'>Stats</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to='/'>
          <img src={logo} alt="Logo" /></Link>
        </div>
        <div className="navbar-end hidden md:flex gap-1.5">
          <NavLink to="/">
            <button className="link-btn ">
              <RiHome4Line /> Home
            </button>
          </NavLink>
          <NavLink to='/timeline'>
            <button className="link-btn ">
              <IoTimeOutline /> Timeline
            </button>
          </NavLink>
          <NavLink to='/stats'>
            <button className="link-btn ">
              <FaChartLine /> Stats
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
