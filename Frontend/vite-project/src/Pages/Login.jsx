import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="border p-4 rounded shadow" style={{ width: "350px" }}>
          <h1 className="text-center">Login</h1>
          <h6 className="text-center text-muted mb-3">
            Welcome back! Please login to your account
          </h6>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            <label htmlFor="email">Email:</label>
          </div>
          <div className=" form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
