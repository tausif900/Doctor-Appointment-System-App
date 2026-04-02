import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div
        className={`container d-flex justify-content-center align-items-center vh-100 ${styles.pageShell}`}
      >
        <form className={`border p-4 rounded  ${styles.formContainer}`}>
          <h1 className={`text-center ${styles.heading}`}>Login</h1>
          <h6 className={`text-center mb-3 ${styles.subheading}`}>
            Welcome back! Please login to your account
          </h6>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className={`form-control ${styles.inputField}`}
              id="email"
              placeholder="Enter email"
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div className=" form-floating mb-3">
            <input
              type="password"
              className={`form-control ${styles.inputField}`}
              id="password"
              placeholder="Enter password"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <div className={`form-check mb-3 ${styles.formOptions}`}>
            <label className={`form-check-label mx-5 ${styles.rememberLabel}`}>
              <input
                className={`form-check-input ${styles.checkInput}`}
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
            <a href="#" className={`text-decoration-none ${styles.forgotPswd}`}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
