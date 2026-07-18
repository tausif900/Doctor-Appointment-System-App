import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";
import { api } from "../../api";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      console.log(response);
      const role = response.data.userDto.role;
      if (role == "Role_Patient") {
        navigate(`/patient-dashboard`);
      } else if (role == "Role_Doctor") {
        navigate(`/doctor-dashboard`);
      }
      login(response.data.token, response.data.userDto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #dbeafe 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div
              className="card border-0 shadow-lg overflow-hidden rounded-4"
              style={{ borderRadius: "25px" }}
            >
              <div className="row g-0">
                {/* Left Side */}
                <div
                  className="col-lg-5 d-flex flex-column justify-content-between text-white p-4 p-md-5"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
                    minHeight: "650px",
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center bg-white px-3 py-2 rounded-pill shadow-sm mb-4"
                      style={{ color: "#0f766e" }}
                    >
                      <i className="bi bi-hospital-fill me-2"></i>
                      <span className="fw-bold">Doctor Appointment</span>
                    </div>

                    <h1 className="display-5 fw-bold mb-3">Welcome Back!</h1>

                    <p className="fs-5 opacity-90 mb-5">
                      Sign in to manage appointments, consult doctors, access
                      your health records, and continue your healthcare journey
                      securely.
                    </p>

                    <div className="row g-3">
                      <div className="col-12">
                        <div
                          className="bg-white bg-opacity-10 rounded-4 p-3 border border-light border-opacity-25"
                          style={{
                            backdropFilter: "blur(5px)",
                          }}
                        >
                          <h6 className="fw-bold mb-2">
                            <i className="bi bi-calendar2-check-fill me-2"></i>
                            Easy Appointment Booking
                          </h6>
                          <p className="small mb-0 opacity-75">
                            Book appointments anytime with trusted doctors.
                          </p>
                        </div>
                      </div>

                      <div className="col-12">
                        <div
                          className="bg-white bg-opacity-10 rounded-4 p-3 border border-light border-opacity-25"
                          style={{
                            backdropFilter: "blur(5px)",
                          }}
                        >
                          <h6 className="fw-bold mb-2">
                            <i className="bi bi-shield-lock-fill me-2"></i>
                            Secure Healthcare Portal
                          </h6>
                          <p className="small mb-0 opacity-75">
                            Your medical information stays safe and protected.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <hr className="border-light opacity-50" />

                    <p className="mb-1 fw-semibold">
                      Your health, our responsibility.
                    </p>

                    <small className="opacity-75">
                      Fast • Secure • Reliable Healthcare Services
                    </small>
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-7 bg-white">
                  <div className="p-4 p-md-5">
                    <div className="text-center text-lg-start mb-5">
                      <h2 className="fw-bold mb-2">Sign In</h2>
                      <p className="text-muted mb-0">
                        Enter your credentials to access your account.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Email */}
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="form-label fw-semibold"
                        >
                          Email Address
                        </label>

                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-envelope-fill"></i>
                          </span>

                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            {...register("email")}
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="form-label fw-semibold"
                        >
                          Password
                        </label>

                        <div className="input-group input-group-lg">
                          <span className="input-group-text bg-light">
                            <i className="bi bi-lock-fill"></i>
                          </span>

                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            {...register("password")}
                          />
                        </div>
                      </div>

                      {/* Remember */}
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />

                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>

                        <a
                          href="#"
                          className="text-decoration-none fw-semibold"
                          style={{ color: "#0f766e" }}
                        >
                          Forgot Password?
                        </a>
                      </div>

                      {/* Button */}
                      <button
                        type="submit"
                        className="btn btn-lg w-100 text-white fw-bold shadow"
                        style={{
                          background: "#0f766e",
                          borderColor: "#0f766e",
                          padding: "14px",
                        }}
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </button>

                      {/* Divider */}
                      <div className="d-flex align-items-center my-4">
                        <hr className="flex-grow-1" />
                        <span className="px-3 text-muted small">OR</span>
                        <hr className="flex-grow-1" />
                      </div>

                      {/* Register */}
                      <div className="text-center">
                        <p className="text-muted mb-0">
                          Don't have an account?{" "}
                          <Link
                            to="/registration"
                            className="fw-bold text-decoration-none"
                            style={{ color: "#0f766e" }}
                          >
                            Create Account
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

export default Login;
