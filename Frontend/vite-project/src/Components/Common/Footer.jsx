import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Specialties", to: "/#specialties" },
  { label: "How It Works", to: "/#process" },
  { label: "Register", to: "/registration" },
];

const supportLinks = [
  { label: "Book Appointment", to: "/registration" },
  { label: "Patient Login", to: "/login" },
  { label: "Emergency Support", to: "/" },
];

const Footer = () => {
  const footerLinkClass =
    "link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover";

  const tealButton = {
    color: "#ffffff",
    background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    border: "none",
    boxShadow: "0 16px 28px rgba(15, 118, 110, 0.22)",
  };

  return (
    <footer
      className="text-light"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(45, 212, 191, 0.2), transparent 30%), linear-gradient(135deg, #0f172a 0%, #0f766e 55%, #115e59 100%)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4 pb-4">
          <div className="col-12 col-lg-4">
            <div
              className="h-100 p-4 rounded-4 border border-light border-opacity-10 shadow"
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
            >
              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  color: "#ccfbf1",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                }}
              >
                Trusted Healthcare Access
              </span>
              <h2 className="h4 fw-bold mt-3 mb-3">Doctor Appointment</h2>
              <p className="mb-4">
                Find specialists, schedule visits, and stay connected with care
                that feels simple, safe, and fast.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-dark bg-opacity-25 border border-light border-opacity-10 px-3 py-2">
                  24/7 Booking
                </span>
                <span className="badge rounded-pill text-bg-dark bg-opacity-25 border border-light border-opacity-10 px-3 py-2">
                  Verified Doctors
                </span>
                <span className="badge rounded-pill text-bg-dark bg-opacity-25 border border-light border-opacity-10 px-3 py-2">
                  Quick Support
                </span>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="h6 text-uppercase fw-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled mb-0">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-2">
                  <a href={link.to} className={footerLinkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="h6 text-uppercase fw-bold mb-3">Support</h3>
            <ul className="list-unstyled mb-0">
              {supportLinks.map((link) => (
                <li key={link.label} className="mb-2">
                  <Link to={link.to} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="mb-1 fw-semibold">Email</p>
              <a
                href="mailto:care@doctorappointment.com"
                className={footerLinkClass}
              >
                care@doctorappointment.com
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h3 className="h6 text-uppercase fw-bold mb-3">Stay Updated</h3>
            <p className="mb-3">
              Get appointment tips, service updates, and health reminders in
              your inbox.
            </p>
            <form className="d-flex flex-column gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button
                type="button"
                className="btn btn-success fw-bold"
                style={tealButton}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="row g-3 pt-4 border-top border-light border-opacity-10">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              {"\u00A9"} 2026 Doctor Appointment. Seamless care for every
              patient.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">
              <a href="/" className={footerLinkClass}>
                Privacy
              </a>
              <a href="/" className={footerLinkClass}>
                Terms
              </a>
              <a href="/" className={footerLinkClass}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
