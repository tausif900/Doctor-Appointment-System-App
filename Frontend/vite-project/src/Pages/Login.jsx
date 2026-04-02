import React from "react";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div
        className={`container d-flex justify-content-center align-items-center vh-100 ${styles.pageShell}`}
      >
        <form
          className={`border p-4 rounded  ${styles.formContainer}`}
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className={`text-center ${styles.heading}`}>Login</h1>
          <h6 className={`text-center mb-3 ${styles.subheading}`}>
            Welcome back! Please login to your account
          </h6>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              {...register("email", {
                required: "Email Id is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "Please enter a valid email address (e.g., example@gmail.com)",
                },
              })}
              className={`form-control ${styles.inputField}`}
              id="email"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-primary">{errors.email.message}</p>
            )}
            <label htmlFor="email">Email:</label>
          </div>
          <div className=" form-floating mb-3">
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                  message:
                    "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.",
                },
              })}
              className={`form-control ${styles.inputField}`}
              id="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-primary">{errors.password.message}</p>
            )}
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
