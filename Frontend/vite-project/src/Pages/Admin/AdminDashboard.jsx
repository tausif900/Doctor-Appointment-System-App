import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState(null);
  const [patients, setPatients] = useState(null);
  const [pendingStatusCount, setPendingStatusCount] = useState(null);
  const { user, logout } = useContext(LoginContext);

  const navigate = useNavigate();

  const totalDoctors = async () => {
    try {
      const response = await api.get("/doctors");
      console.log(response.data);
      setDoctors(response.data);
    } catch (error) {}
  };

  const totalPatients = async () => {
    try {
      const response = await api.get("/patient/all-patients");
      console.log(response.data);
      setPatients(response.data);
    } catch (error) {}
  };

  const fetchCountOfPendingStatus = async () => {
    try {
      const response = await api.get("/appointments/count-of-pending-status");
      console.log(response.data);
      setPendingStatusCount(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalDoctors();
    totalPatients();
    fetchCountOfPendingStatus();
  }, []);

  return (
    <div className="container-fluid my-2">
      {/* ======================= ADMIN HERO ======================= */}

      <div
        className="rounded-5 shadow-lg p-5 mb-5"
        style={{
          background: "linear-gradient(135deg,#0f766e,#14b8a6,#0ea5e9)",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1
              className="fw-bold text-white"
              style={{
                fontSize: "45px",
              }}
            >
              Hospital Administration
            </h1>

            <p
              className="text-white mt-3"
              style={{
                fontSize: "18px",
                opacity: ".9",
              }}
            >
              Manage doctors, patients, appointments and hospital operations
              from one centralized dashboard.
            </p>

            <div className="mt-4">
              <button className="btn btn-light rounded-pill px-4 fw-semibold">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard Overview
              </button>

              <button
                className="btn btn-light fw-semibold px-4 mx-5"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <i
              className="bi bi-hospital-fill text-white"
              style={{
                fontSize: "130px",
              }}
            ></i>
          </div>
        </div>
      </div>

      {/* ======================= DASHBOARD CARDS ======================= */}

      <div className="row g-4 mb-5">
        {/* Doctors */}

        <div className="col-lg-3 col-md-6">
          <div
            className="card border-0 shadow rounded-5 h-100"
            style={{
              transition: ".3s",
            }}
          >
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted fw-semibold">
                    Total Doctors
                  </small>

                  <h1 className="fw-bold mt-2">{doctors?.length}</h1>
                </div>

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#dcfce7",
                  }}
                >
                  <i
                    className="bi bi-person-badge-fill"
                    style={{
                      fontSize: "35px",
                      color: "#15803d",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patients */}

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow rounded-5 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted fw-semibold">
                    Total Patients
                  </small>

                  <h1 className="fw-bold mt-2">{patients?.length}</h1>
                </div>

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#dbeafe",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{
                      fontSize: "35px",
                      color: "#2563eb",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments */}

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow rounded-5 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted fw-semibold">
                    Pending Appointments
                  </small>

                  <h1 className="fw-bold mt-2">{pendingStatusCount}</h1>

                  <small className="text-muted">Awaiting Doctor Action</small>
                </div>

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#fef3c7",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      fontSize: "35px",
                      color: "#d97706",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue */}

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow rounded-5 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted fw-semibold">Revenue</small>

                  <h1 className="fw-bold mt-2">₹0</h1>

                  <small className="text-danger">Razorpay Integration</small>
                </div>

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#fee2e2",
                  }}
                >
                  <i
                    className="bi bi-cash-stack"
                    style={{
                      fontSize: "35px",
                      color: "#dc2626",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= QUICK ACTIONS ================= */}

      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Quick Actions</h3>

          <span className="text-muted">Manage Hospital Efficiently</span>
        </div>

        <div className="row g-4">
          {/* Manage Doctors */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow rounded-5 h-100"
              style={{
                cursor: "pointer",
                transition: ".3s",
              }}
              onClick={() => navigate("/admin/doctor-approval")}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mx-auto mb-3 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#dcfce7",
                  }}
                >
                  <i
                    className="bi bi-person-badge-fill"
                    style={{
                      fontSize: "35px",
                      color: "#15803d",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Manage Doctors</h5>

                <small className="text-muted">
                  Add, Update & Remove Doctors
                </small>
              </div>
            </div>
          </div>

          {/* Manage Patients */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow rounded-5 h-100"
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/admin/patients")}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mx-auto mb-3 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#dbeafe",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{
                      fontSize: "35px",
                      color: "#2563eb",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Manage Patients</h5>

                <small className="text-muted">View Registered Patients</small>
              </div>
            </div>
          </div>

          {/* Appointments */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow rounded-5 h-100"
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/admin/appointments")}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mx-auto mb-3 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#fef3c7",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      fontSize: "35px",
                      color: "#d97706",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Appointments</h5>

                <small className="text-muted">Monitor Appointment Status</small>
              </div>
            </div>
          </div>

          {/* Payments */}

          <div className="col-lg-3 col-md-6">
            <div
              className="card border-0 shadow rounded-5 h-100"
              style={{
                cursor: "pointer",
              }}
            >
              <div className="card-body text-center p-4">
                <div
                  className="mx-auto mb-3 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "75px",
                    height: "75px",
                    background: "#fee2e2",
                  }}
                >
                  <i
                    className="bi bi-cash-stack"
                    style={{
                      fontSize: "35px",
                      color: "#dc2626",
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold">Payments</h5>

                <small className="text-danger">Coming Soon</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
