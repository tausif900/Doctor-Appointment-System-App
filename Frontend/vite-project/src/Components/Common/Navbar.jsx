import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const tealButton = {
    color: "#fff",
    background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    border: "none",
    boxShadow: "0 16px 28px rgba(15,118,110,.22)",
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm border-bottom"
      style={{
        background: "rgba(248,250,252,.82)",
        backdropFilter: "blur(18px)",
        borderColor: "rgba(15,118,110,.12)",
      }}
    >
      <div className="container">
        {/* Logo */}

        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-3 m-0"
        >
          <img
            src="Images/Doctor appointment system logo.png"
            alt="Doctor Appointment"
            width="65"
            height="65"
            className="rounded-circle object-fit-contain"
            style={{
              background: "linear-gradient(135deg,#95fff6 0%,#e7efee 100%)",
            }}
          />

          <div className="d-none d-sm-block">
            <h5 className="fw-bold mb-0 text-dark">Doctor Appointment</h5>

            <small className="text-secondary">
              Fast and trusted care booking
            </small>
          </div>
        </NavLink>

        {/* Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link fw-semibold"
                style={{ color: "#334155" }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="#specialties"
                className="nav-link fw-semibold"
                style={{ color: "#334155" }}
              >
                Specialties
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#process"
                className="nav-link fw-semibold"
                style={{ color: "#334155" }}
              >
                How It Works
              </a>
            </li>

            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link fw-semibold"
                style={{ color: "#334155" }}
              >
                Login
              </NavLink>
            </li>
          </ul>

          <div className="mt-3 mt-lg-0 d-grid d-lg-block">
            <NavLink
              to="/registration"
              className="btn px-4 py-2 rounded-4 fw-bold"
              style={tealButton}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
