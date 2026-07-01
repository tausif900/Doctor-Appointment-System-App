import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/users/register", data);
      toast.success("Registration done successfully");
      
      const userId = response.data.id;
      if (data.role === "Role_Patient") {
        navigate(`/patient-profile/${userId}`);
      }
      if (data.role === "Role_Doctor") {
        navigate(`/doctor-profile/${userId}`);
      }
    } catch (error) {
      toast.error("Oops! something went wrong...");
    }
  };

  const checkEmail = async (value) => {
    let exist;
    try {
      const response = await api.get(`/users/check-email?email=${value}`);
      exist = response.data;
      return exist ? "email already exist" : true;
    } catch (error) {
      alert("Oops! something went wrong");
    }
  };

  const password = watch("password");

  return (
    <main className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center align-items-stretch g-0 shadow-lg rounded-4 overflow-hidden bg-white">
          <section
            className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between"
            style={{ background: "linear-gradient(135deg, #0f766e, #14b8a6)" }}
          >
            <div>
              <span
                className="badge text-bg-light mb-4 px-3 py-2"
                style={{ color: "#0f766e" }}
              >
                Doctor Appointment
              </span>
              <h1 className="display-6 fw-bold mb-3">
                Create your patient account
              </h1>
              <p className="lead mb-4">
                Register to book appointments, manage visits, and connect with
                trusted healthcare professionals.
              </p>
            </div>

            <div className="border-top border-light pt-4">
              <p className="mb-2 fw-semibold">Simple appointment access</p>
              <p className="mb-0 opacity-75">
                A clean profile helps doctors contact you quickly when it
                matters.
              </p>
            </div>
          </section>

          <section className="col-lg-7 p-4 p-md-5">
            <div className="mb-4">
              <h2 className="h3 fw-bold text-dark mb-2">Registration</h2>
              <p className="text-secondary mb-0">
                Enter your details to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-3">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                      {...register("name", {
                        required: "name is required",
                        minLength: {
                          value: 2,
                          message: "full name must be at least 2 character",
                        },
                        maxLength: {
                          value: 60,
                          message: "maximum 60 characters allow",
                        },
                      })}
                    />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <p className="text-danger">
                    {errors.name && errors.name.message}
                  </p>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
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
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <p className="text-danger">
                    {errors.email && errors.email.message}
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
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
                    <label htmlFor="password">Password</label>
                  </div>
                  <p className="text-danger">
                    {errors.password && errors.password.message}
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <p className="text-danger">
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </p>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      {...register("phNo", {
                        required: "provide a phone number",
                        minLength: {
                          value: 10,
                          message: "number cannot be less than 10 digit",
                        },
                        maxLength: {
                          value: 10,
                          message: "number cannot exceeds after 10 digit",
                        },
                      })}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  <p className="text-danger">
                    {errors.phNo && errors.phNo.message}
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="role"
                    {...register("role", {
                      required: "Please select your role",
                    })}
                  >
                    <option value="">Select Role</option>
                    <option value="Role_Patient">Patient</option>
                    <option value="Role_Doctor">Doctor</option>
                  </select>
                  <label htmlFor="role">Role</label>
                </div>
                <p className="text-danger">
                  {errors.role && errors.role.message}
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 mt-4 text-white fw-semibold"
                style={{ backgroundColor: "#0f766e", borderColor: "#0f766e" }}
              >
                Register
              </button>

              <p className="text-center text-secondary mt-4 mb-0">
                Already have an account?
                <Link
                  to="/login"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#0f766e" }}
                >
                  Login here
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Registration;
