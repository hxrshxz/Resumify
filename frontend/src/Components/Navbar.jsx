import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Resume from "./Resume";

const Navbar = () => {
  return (
    <nav className="navbar flexitems-center space-between gap-y-4 bg-gray-800 text-white p-6">
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>
      <NavLink to="/resume" className="nav-link">
        Resume
      </NavLink>
    </nav>
  );
};

export default Navbar;
