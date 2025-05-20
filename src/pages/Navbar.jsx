import React from "react";
import logoNav from "../assets/hobby-logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      {" "}
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
        <details>
          <summary>All Groups</summary>
          <ul>
            <li>
              <NavLink to={'/books'} className="text-nowrap">Book Clubs</NavLink>
            </li>
            <li>
              <NavLink to={'/hiking'} className="text-nowrap"> Hiking Crews</NavLink>
            </li>
            <li>
              <NavLink to={'/painting'} className="text-nowrap">Painting Circles</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li><NavLink to={'/create-group'}>Create Group</NavLink></li>
      <li><NavLink to={'/my-group'}>My Groups</NavLink></li>
     
    </>
  );

  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <img className="w-34 h-14 hidden md:block" src={logoNav} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-5 menu-horizontal px-1">
           {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'} className="btn mr-3">Log in</Link>
        <Link to={'/register'} className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
