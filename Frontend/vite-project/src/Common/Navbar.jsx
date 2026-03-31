import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav class={`navbar navbar-expand-md  fixed-top ${styles.header}`}>
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4 ">Doctor Appointment System</span>
      </Link>
      <ul
        className={`nav nav-pills d-flex justify-content-center align-item-center${styles.ul}`}
      >
        <li className="nav-item">
          <Link to="/" className={`nav-link ${styles.li}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className={`nav-link ${styles.li}`}>
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link ${styles.li}`}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={`nav-link ${styles.li}`}>
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className={`nav-link ${styles.li}`}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/registration" className={`nav-link ${styles.li}`}>
            Registration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
