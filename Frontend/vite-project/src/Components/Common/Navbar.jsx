import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/#specialties" },
  { label: "How It Works", to: "/#process" },
  { label: "Appointment", to: "/book_appointment" },
  { label: "Login", to: "/login" },
];

const Navbar = () => {
  const tealButton = {
    color: "#ffffff",
    background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    border: "none",
    boxShadow: "0 16px 28px rgba(15, 118, 110, 0.22)",
  };

  return (
    <header
      className="navbar navbar-expand-lg fixed-top border-bottom shadow-sm py-3"
      style={{
        background: "rgba(248, 250, 252, 0.72)",
        backdropFilter: "blur(18px)",
        borderColor: "rgba(15, 118, 110, 0.12)",
      }}
    >
      <nav className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-3 m-0"
        >
          <img
            className="rounded-circle object-fit-contain"
            src="Images/Doctor appointment system logo.png"
            alt="Doctor Appointment logo"
            width="72"
            height="72"
            style={{
              background: "linear-gradient(135deg, #95fff6 0%, #e7efee 100%)",
            }}
          />
          <div className="d-flex flex-column lh-sm">
            <strong className="text-dark fs-6">Doctor Appointment</strong>
            <span className="text-secondary small">
              Fast and trusted care booking
            </span>
          </div>
        </NavLink>

        <div
          className="nav nav-pills justify-content-center gap-1 p-2 border rounded-pill"
          style={{
            background: "rgba(255, 255, 255, 0.88)",
            borderColor: "rgba(15, 118, 110, 0.12)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="nav-link fw-semibold px-3"
              style={{ color: "#334155" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="d-flex align-items-center">
          <NavLink
            to="/registration"
            className="btn fw-bold px-4 py-2 rounded-4"
            style={tealButton}
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
