import React from "react";
import styles from "./Registration.module.css";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center mt-4">
      <form
        className={`border p-4 rounded  ${styles.formContainer}`}
        onSubmit={handleSubmit(submitHandler)}
      >
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
            {...register("name", {
              required: "provide a full name",
              minLength: {
                value: 8,
                message: "username must be 8 character long",
              },
            })}
          />
          {errors.name && <p className="text-primary">{errors.name.message}</p>}
          <label htmlFor="name">Full Name:</label>
        </div>
        {/* ADDRESS */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className={`form-control ${styles.inputField}`}
            id="address"
            placeholder="Address"
            {...register("address", { required: "Enter your full address" })}
          />
          {errors.address && (
            <p className="text-primary">{errors.address.message}</p>
          )}
          <label htmlFor="address">Address: </label>
        </div>
        {/* CONTACT NUMBER */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            maxLength={10}
            className={`form-control ${styles.inputField}`}
            id="contactNo"
            placeholder="Address"
            {...register("phoneNo", {
              required: "Fill Contact Number",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact Number must be 10 digit",
              },
            })}
          />
          {errors.phoneNo && (
            <p className="text-primary">{errors.phoneNo.message}</p>
          )}
          <label htmlFor="coontactNo">Contact No: </label>
        </div>
        {/* GENDER */}
        {/* <div className="d-flex justify-content-around align-items-center">
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
        </div> */}
        {/* EMAIL */}
        <div className="form-floating mb-3 mt-3">
          <input
            type="email"
            className={`form-control ${styles.inputField}`}
            id="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email Id is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Please enter a valid email address (e.g., example@gmail.com)",
              },
            })}
          />
          <label htmlFor="email">Email:</label>
          {errors.email && (
            <p className="text-primary">{errors.email.message}</p>
          )}
        </div>
        {/* PASSWORD */}
        <div className=" form-floating mb-3">
          <input
            type="password"
            className={`form-control ${styles.inputField}`}
            id="password"
            placeholder="Enter password"
            {...register("password", {
              required: "password is required",
              pattern: {
                value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                message:
                  "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.",
              },
            })}
          />
          <label htmlFor="password">Password:</label>
          {errors.password && (
            <p className="text-primary">{errors.password.message}</p>
          )}
        </div>
        {/* CONFIRM PASSWORD */}
        <div className=" form-floating mb-3">
          <input
            type="password"
            className={`form-control ${styles.inputField}`}
            id="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Enter the Confirm Password",
              validate: (value) =>
                value === password ||
                "Confirm Password doesn't match the actual password",
            })}
          />
          <label htmlFor="password">Confirm Password:</label>
          {errors.confirmPassword && (
            <p className="text-primary">{errors.confirmPassword.message}</p>
          )}
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
