import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <section
      className={`container-fluid ${styles.loginSection} d-flex align-items-center justify-content-center py-5`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            <div className={`card border-0 shadow-lg ${styles.loginCard}`}>
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <span
                    className={`badge rounded-pill px-3 py-2 mb-3 ${styles.loginBadge}`}
                  >
                    Secure Patient Portal
                  </span>
                  <h1 className="fw-bold mb-2">Welcome Back</h1>
                  <p className="text-muted mb-0">
                    Sign in to manage your appointments, doctors, and care
                    updates.
                  </p>
                </div>

                <form className={styles.formContainer}>
                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label fw-semibold">
                      Email address
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-sm ${styles.formControl}`}
                      id="emailId"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <label
                        htmlFor="password"
                        className="form-label fw-semibold mb-0"
                      >
                        Password
                      </label>
                      <a
                        href="/"
                        className={`small text-decoration-none ${styles.helperLink}`}
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      className={`form-control form-control-sm ${styles.formControl}`}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <span className="small text-muted">
                      Fast and secure login
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`btn btn-primary btn-lg w-100 mt-2 ${styles.loginButton}`}
                  >
                    Sign In
                  </button>

                  <p className="text-center text-muted mt-4 mb-0">
                    New here?{" "}
                    <a
                      href="/registration"
                      className={`fw-semibold text-decoration-none ${styles.helperLink}`}
                    >
                      Create an account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
