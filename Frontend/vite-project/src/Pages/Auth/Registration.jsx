import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";
import { LoginContext } from "../../Context/LoginContext";

const Registration = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/users/register", data);
      console.log(response.data);

      toast.success("Registration done successfully");

      const userId = response.data.id;

      if (data.role === "ROLE_Patient") {
        navigate(`/patient-profile/${userId}`);
      }

      if (data.role === "ROLE_Doctor") {
        navigate(`/doctor-profile/${userId}`);
      }
    } catch (error) {
      toast.error("Oops! Something went wrong...");
    }
  };

  const checkEmail = async (value) => {
    let exist;

    try {
      const response = await api.get(`/users/check-email?email=${value}`);

      exist = response.data;

      return exist ? "Email already exists" : true;
    } catch (error) {}
  };

  const password = watch("password");

  return (
    <main
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#e0f2fe 50%,#dbeafe 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="card border-0 shadow-lg overflow-hidden rounded-4">
              <div className="row g-0">
                {/* LEFT PANEL */}

                <div
                  className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between"
                  style={{
                    background: "linear-gradient(135deg,#0f766e,#14b8a6)",
                    minHeight: "760px",
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-2 shadow-sm mb-4"
                      style={{ color: "#0f766e" }}
                    >
                      <i className="bi bi-hospital-fill me-2"></i>
                      <span className="fw-bold">Doctor Appointment</span>
                    </div>

                    <h1 className="display-5 fw-bold mb-3">Create Account</h1>

                    <p className="fs-5 opacity-75 mb-5">
                      Join our healthcare platform to book appointments, consult
                      doctors, manage profiles and access medical services
                      securely.
                    </p>

                    <div className="mb-4 p-3 rounded-4 bg-white bg-opacity-10 border border-light">
                      <h6 className="fw-bold">
                        <i className="bi bi-calendar2-check-fill me-2"></i>
                        Easy Appointment Booking
                      </h6>

                      <small className="opacity-75">
                        Schedule appointments anytime from anywhere.
                      </small>
                    </div>

                    <div className="mb-4 p-3 rounded-4 bg-white bg-opacity-10 border border-light">
                      <h6 className="fw-bold">
                        <i className="bi bi-shield-lock-fill me-2"></i>
                        Secure Information
                      </h6>

                      <small className="opacity-75">
                        Your healthcare information is completely protected.
                      </small>
                    </div>
                  </div>

                  <div>
                    <hr className="border-light" />

                    <p className="mb-1 fw-semibold">
                      Your Health, Our Responsibility
                    </p>

                    <small className="opacity-75">
                      Trusted by Patients & Doctors
                    </small>
                  </div>
                </div>

                {/* RIGHT PANEL */}

                <div className="col-lg-7 bg-white">
                  <div className="p-4 p-md-5">
                    <div className="mb-5">
                      <h2 className="fw-bold">Create Your Account</h2>

                      <p className="text-muted">
                        Fill in the information below to get started.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-4">
                        {/* Full Name */}
                        <div className="col-12">
                          <label className="form-label fw-semibold">
                            Full Name
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-person-fill"></i>
                            </span>

                            <input
                              type="text"
                              className={`form-control ${
                                errors.name ? "is-invalid" : ""
                              }`}
                              placeholder="Enter your full name"
                              {...register("name", {
                                required: "name is required",
                                minLength: {
                                  value: 2,
                                  message:
                                    "full name must be at least 2 character",
                                },
                                maxLength: {
                                  value: 60,
                                  message: "maximum 60 characters allow",
                                },
                              })}
                            />
                          </div>

                          {errors.name && (
                            <small className="text-danger">
                              {errors.name.message}
                            </small>
                          )}
                        </div>

                        {/* Email */}
                        <div className="col-12">
                          <label className="form-label fw-semibold">
                            Email Address
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-envelope-fill"></i>
                            </span>

                            <input
                              type="email"
                              className={`form-control ${
                                errors.email ? "is-invalid" : ""
                              }`}
                              placeholder="Enter your email"
                              {...register("email", {
                                required: "email is required",
                                pattern: {
                                  value:
                                    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                                  message: "Please enter a valid email address",
                                },
                                validate: { checkEmail },
                              })}
                            />
                          </div>

                          {errors.email && (
                            <small className="text-danger">
                              {errors.email.message}
                            </small>
                          )}
                        </div>

                        {/* Password */}
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Password
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-lock-fill"></i>
                            </span>

                            <input
                              type="password"
                              className={`form-control ${
                                errors.password ? "is-invalid" : ""
                              }`}
                              placeholder="Create password"
                              {...register("password", {
                                required: "password is required",
                                pattern: {
                                  value:
                                    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                                  message:
                                    "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                                },
                              })}
                            />
                          </div>

                          {errors.password && (
                            <small className="text-danger">
                              {errors.password.message}
                            </small>
                          )}
                        </div>

                        {/* Confirm Password */}
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Confirm Password
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-shield-lock-fill"></i>
                            </span>

                            <input
                              type="password"
                              className={`form-control ${
                                errors.confirmPassword ? "is-invalid" : ""
                              }`}
                              placeholder="Confirm password"
                              {...register("confirmPassword", {
                                required: "confirm password is required",
                                validate: (value) => {
                                  return (
                                    value === password ||
                                    "password and confirm password is not matching"
                                  );
                                },
                              })}
                            />
                          </div>

                          {errors.confirmPassword && (
                            <small className="text-danger">
                              {errors.confirmPassword.message}
                            </small>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div className="col-12">
                          <label className="form-label fw-semibold">
                            Phone Number
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-telephone-fill"></i>
                            </span>

                            <input
                              type="tel"
                              className={`form-control ${
                                errors.phNo ? "is-invalid" : ""
                              }`}
                              placeholder="Enter your phone number"
                              {...register("phNo", {
                                required: "provide a phone number",
                                minLength: {
                                  value: 10,
                                  message:
                                    "number cannot be less than 10 digit",
                                },
                                maxLength: {
                                  value: 10,
                                  message:
                                    "number cannot exceeds after 10 digit",
                                },
                              })}
                            />
                          </div>

                          {errors.phNo && (
                            <small className="text-danger">
                              {errors.phNo.message}
                            </small>
                          )}
                        </div>

                        {/* Role */}
                        <div className="col-12">
                          <label className="form-label fw-semibold">
                            Select Role
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-person-badge-fill"></i>
                            </span>

                            <select
                              className={`form-select ${
                                errors.role ? "is-invalid" : ""
                              }`}
                              {...register("role", {
                                required: "Please select your role",
                              })}
                            >
                              <option value="">Choose your role</option>
                              <option value="ROLE_Patient">Patient</option>
                              <option value="ROLE_Doctor">Doctor</option>
                            </select>
                          </div>

                          {errors.role && (
                            <small className="text-danger">
                              {errors.role.message}
                            </small>
                          )}
                        </div>
                      </div>

                      {/* Register Button */}

                      <button
                        type="submit"
                        className="btn btn-lg w-100 text-white fw-bold mt-5 shadow"
                        style={{
                          background: "#0f766e",
                          borderColor: "#0f766e",
                          padding: "14px",
                        }}
                      >
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Create Account
                      </button>

                      {/* Divider */}

                      <div className="d-flex align-items-center my-4">
                        <hr className="flex-grow-1" />
                        <span className="px-3 text-muted small">OR</span>
                        <hr className="flex-grow-1" />
                      </div>

                      {/* Login */}

                      <div className="text-center">
                        <p className="text-muted mb-0">
                          Already have an account?{" "}
                          <Link
                            to="/login"
                            className="fw-bold text-decoration-none"
                            style={{ color: "#0f766e" }}
                          >
                            <i className="bi bi-box-arrow-in-right me-1"></i>
                            Login Here
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
