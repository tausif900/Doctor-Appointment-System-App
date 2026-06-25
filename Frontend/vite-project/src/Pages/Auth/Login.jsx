import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center align-items-stretch g-0 shadow-lg rounded-4 overflow-hidden bg-white">
          <section
            className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between"
            style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
          >
            <div>
              <span className="badge text-bg-light mb-4 px-3 py-2" style={{ color: "#0f766e" }}>
                Doctor Appointment
              </span>
              <h1 className="display-6 fw-bold mb-3">Welcome back</h1>
              <p className="lead mb-4">
                Login to manage appointments, view doctor details, and continue
                your healthcare journey.
              </p>
            </div>

            <div className="border-top border-light pt-4">
              <p className="mb-2 fw-semibold">Your care, one click away</p>
              <p className="mb-0 opacity-75">
                Access your appointment dashboard quickly and securely.
              </p>
            </div>
          </section>

          <section className="col-lg-7 p-4 p-md-5">
            <div className="mb-4">
              <h2 className="h3 fw-bold text-dark mb-2">Login</h2>
              <p className="text-secondary mb-0">
                Enter your account details to continue.
              </p>
            </div>

            <form>
              <div className="row g-3">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#0f766e" }}
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="button"
                className="btn btn-lg w-100 mt-4 text-white fw-semibold"
                style={{ backgroundColor: "#0f766e", borderColor: "#0f766e" }}
              >
                Sign In
              </button>

              <p className="text-center text-secondary mt-4 mb-0">
                New user?{" "}
                <Link
                  to="/registration"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#0f766e" }}
                >
                  Register
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
