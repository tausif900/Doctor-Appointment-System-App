import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/#specialties" },
  { label: "How It Works", to: "/#process" },
  { label: "Appointment", to: "/book_appointment" },
  { label: "Login", to: "/login" },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          <img
            className={styles.logoMark}
            src="Images/Doctor appointment system logo.png"
          />
          <div className={styles.brandText}>
            <strong>Doctor Appointment</strong>
            <span>Fast and trusted care booking</span>
          </div>
        </NavLink>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <NavLink to="/registration" className={styles.primaryButton}>
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
