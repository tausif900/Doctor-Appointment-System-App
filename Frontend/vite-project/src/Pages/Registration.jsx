import React from "react";
import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <div
      className={`container d-flex justify-content-center align-items-center vh-100 ${styles.pageShell}`}
    >
      <form className={`border p-4 rounded  ${styles.formContainer}`}>
        {/* HEADING */}
        <h1 className={`text-center ${styles.heading}`}>Registration</h1>
        <h6 className={`text-center mb-3 ${styles.subheading}`}>
          {/* SUB-HEADING */}
          Create your account to continue!!!
        </h6>
        {/* FULL-NAME */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="name"
            className={`form-control ${styles.inputField}`}
            id="name"
            placeholder="name"
          />
          <label htmlFor="name">Full Name:</label>
        </div>
        {/* ADDRESS */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className={`form-control ${styles.inputField}`}
            id="address"
            placeholder="Address"
          />
          <label htmlFor="address">Address: </label>
        </div>
        {/* CONTACT NUMBER */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className={`form-control ${styles.inputField}`}
            id="contactNo"
            placeholder="Address"
          />
          <label htmlFor="coontactNo">Contact No: </label>
        </div>
        {/* GENDER */}
        <div className="d-flex justify-content-around align-items-center">
          <div className="form-check">
            <input
              className={`form-check-input ${styles.checkInput}`}
              type="radio"
              name="radioDefault"
              id="radioDefault1"
            />
            <label className="form-check-label" htmlFor="radioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className={`form-check-input ${styles.checkInput}`}
              type="radio"
              name="radioDefault"
              id="radioDefault1"
            />
            <label className="form-check-label" htmlFor="radioDefault1">
              Female
            </label>
          </div>
        </div>
        {/* EMAIL */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="email"
            className={`form-control ${styles.inputField}`}
            id="email"
            placeholder="Enter email"
          />
          <label htmlFor="email">Email:</label>
        </div>
        {/* PASSWORD */}
        <div className=" form-floating mb-3">
          <input
            type="password"
            className={`form-control ${styles.inputField}`}
            id="password"
            placeholder="Enter password"
          />
          <label htmlFor="password">Password:</label>
        </div>
        {/* CONFIRM PASSWORD */}
        <div className=" form-floating mb-3">
          <input
            type="password"
            className={`form-control ${styles.inputField}`}
            id="password"
            placeholder="Confirm password"
          />
          <label htmlFor="password">Confirm Password:</label>
        </div>
        {/* BUTTONS */}
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
