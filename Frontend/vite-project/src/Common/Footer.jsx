import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

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
  return (
    <footer className={`${styles.footer} mt-5`}>
      <div className="container py-5">
        <div className="row g-4 pb-4">
          <div className="col-12 col-lg-4">
            <div className={styles.brandCard}>
              <span className={`badge rounded-pill ${styles.badge}`}>
                Trusted Healthcare Access
              </span>
              <h2 className="h4 fw-bold mt-3 mb-3">Doctor Appointment</h2>
              <p className="mb-4">
                Find specialists, schedule visits, and stay connected with care
                that feels simple, safe, and fast.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className={styles.infoChip}>24/7 Booking</span>
                <span className={styles.infoChip}>Verified Doctors</span>
                <span className={styles.infoChip}>Quick Support</span>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="h6 text-uppercase fw-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled mb-0">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-2">
                  <a href={link.to} className={styles.footerLink}>
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
                  <Link to={link.to} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="mb-1 fw-semibold">Email</p>
              <a
                href="mailto:care@doctorappointment.com"
                className={styles.footerLink}
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
                className={`form-control ${styles.input}`}
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="button" className={`btn ${styles.subscribeButton}`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={`row g-3 pt-4 ${styles.bottomBar}`}>
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              {"\u00A9"} 2026 Doctor Appointment. Seamless care for every
              patient.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">
              <a href="/" className={styles.footerLink}>
                Privacy
              </a>
              <a href="/" className={styles.footerLink}>
                Terms
              </a>
              <a href="/" className={styles.footerLink}>
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
