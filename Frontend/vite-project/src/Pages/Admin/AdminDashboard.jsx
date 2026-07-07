import React, { useEffect, useState } from "react";
import { api } from "../../api";

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState(null);
  const [patients, setPatients] = useState(null);

  const totalDoctors = async () => {
    try {
      const response = await api.get("/doctors");
      console.log(response.data);
      setDoctors(response.data);
    } catch (error) {}
  };

  const totalPatients = async () => {
    try {
      const response = await api.get("/patient");
      console.log(response.data);
      setPatients(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    totalDoctors();
    totalPatients();
  }, []);

  return (
    <main
      className="min-vh-100 py-4"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      {/* Admin Welcome Banner */}
      <div className="container-fluid">
        <div
          className="rounded-4 shadow-lg p-4 p-md-5 mb-4 text-white"
          style={{
            background: "linear-gradient(135deg,#0f766e,#14b8a6)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Admin Control Panel 🛠️</h2>

              <p className="fs-5 opacity-75 mb-4">
                Manage doctors, patients, appointments and system analytics from
                one place.
              </p>

              <button className="btn btn-light fw-semibold px-4">
                <i className="bi bi-speedometer2 me-2"></i>
                System Overview
              </button>
            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <i
                className="bi bi-shield-lock-fill"
                style={{
                  fontSize: "120px",
                  opacity: ".9",
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-4">
          {/* Doctors */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#e6fffa",
                  }}
                >
                  <i
                    className="bi bi-person-badge-fill"
                    style={{ fontSize: "30px", color: "#0f766e" }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">{doctors && doctors.length}</h3>
                  <small className="text-muted">Total Doctors</small>
                </div>
              </div>
            </div>
          </div>

          {/* Patients */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{ fontSize: "30px", color: "#4338ca" }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">
                    {patients && patients.length}
                  </h3>
                  <small className="text-muted">Total Patients</small>
                </div>
              </div>
            </div>
          </div>

          {/* Appointments */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#fff7ed",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{ fontSize: "30px", color: "#ea580c" }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">312</h3>
                  <small className="text-muted">Appointments</small>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#ecfdf5",
                  }}
                >
                  <i
                    className="bi bi-currency-rupee"
                    style={{ fontSize: "30px", color: "#16a34a" }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">₹1.2L</h3>
                  <small className="text-muted">Revenue</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-4">
          {/* Doctors Table */}
          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-person-badge-fill text-success me-2"></i>
                  Doctors Management
                </h4>
              </div>

              <div className="card-body">
                <div
                  className="table-responsive overflow-auto"
                  style={{
                    maxHeight: "450px",
                  }}
                >
                  <table className="table table-hover align-middle">
                    <thead
                      className="sticky-top"
                      style={{
                        backgroundColor: "#ffffff",
                        zIndex: "1",
                      }}
                    >
                      <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {doctors ? (
                        doctors.map((doctor) => {
                          return (
                            <tr key={doctor.docId}>
                              <td>{doctor.doctorName}</td>
                              <td>{doctor.specialization}</td>
                              <td>{doctor.experience} Years</td>
                              <td>
                                <span className="bg-success p-1 rounded">
                                  Active
                                </span>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-outline-primary me-2">
                                  <i className="bi bi-eye"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-danger">
                                  <i className="bi bi-trash"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            minHeight: "20vh",
                          }}
                        >
                          <div
                            className="spinner-border"
                            role="status"
                            style={{
                              width: "4rem",
                              height: "4rem",
                              color: "#0f766e",
                            }}
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Patients Panel */}

          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-people-fill text-primary me-2"></i>
                  Patients Overview
                </h4>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Patients</span>
                  <span className="fw-bold">{patients && patients.length}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>New Today</span>
                  <span className="badge bg-success">12</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Active</span>
                  <span className="badge bg-primary">140</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Inactive</span>
                  <span className="badge bg-secondary">49</span>
                </div>

                <hr />

                <button className="btn btn-outline-primary w-100">
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  View All Patients
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {/* Appointments Table */}
          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-calendar-week-fill text-warning me-2"></i>
                  All Appointments
                </h4>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rahul Sharma</td>
                        <td>Dr. John</td>
                        <td>12 Jul 2026</td>
                        <td>
                          <span className="badge bg-success">Completed</span>
                        </td>
                      </tr>

                      <tr>
                        <td>Priya Patel</td>
                        <td>Dr. Smith</td>
                        <td>13 Jul 2026</td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* System Activity */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-activity text-danger me-2"></i>
                  System Activity
                </h4>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">🆕 New doctor registered</li>

                  <li className="list-group-item">
                    📅 Appointment rescheduled
                  </li>

                  <li className="list-group-item">❌ Patient deleted record</li>

                  <li className="list-group-item">
                    💰 Payment received ₹2,500
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-4">
          {/* Notifications */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-bell-fill text-warning me-2"></i>
                  Notifications
                </h5>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <div className="fw-semibold">New Doctor Request</div>
                  <small className="text-muted">Dr. Alex wants approval</small>
                </div>

                <div className="mb-3">
                  <div className="fw-semibold">System Alert</div>
                  <small className="text-muted">Server load is normal</small>
                </div>

                <div>
                  <div className="fw-semibold">New Appointment Spike</div>
                  <small className="text-muted">+25% increase today</small>
                </div>
              </div>
            </div>
          </div>
          {/* Messages */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-chat-dots-fill text-primary me-2"></i>
                  Messages
                </h5>
              </div>

              <div className="card-body">
                <div className="mb-3 border-bottom pb-2">
                  <strong>Reception Team</strong>
                  <p className="mb-0 small text-muted">
                    Please verify today's schedule
                  </p>
                </div>

                <div className="mb-3 border-bottom pb-2">
                  <strong>Dr. Smith</strong>
                  <p className="mb-0 small text-muted">
                    Need leave approval tomorrow
                  </p>
                </div>

                <div>
                  <strong>System Bot</strong>
                  <p className="mb-0 small text-muted">
                    Backup completed successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-star-fill text-warning me-2"></i>
                  Feedback
                </h5>
              </div>

              <div className="card-body">
                <p className="mb-2">⭐⭐⭐⭐⭐</p>
                <p className="small text-muted">
                  Excellent hospital management system.
                </p>

                <hr />

                <p className="mb-2">⭐⭐⭐⭐</p>
                <p className="small text-muted">
                  Doctors are very responsive and helpful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 shadow rounded-4 mt-4">
          <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <h5 className="fw-bold mb-1">System Health</h5>
              <small className="text-muted">
                All services running normally
              </small>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <span className="badge bg-success fs-6">Uptime: 99.9%</span>
              <span className="badge bg-primary fs-6">Active Users: 320</span>
              <span className="badge bg-warning text-dark fs-6">
                Load: Normal
              </span>
            </div>
          </div>
        </div>
        {/* Notifications + Messages + Feedback */}
        {/* (Adm4 section ends here above) */}
      </div>
      {/* container-fluid ends */}
    </main>
  );
};

export default AdminDashboard;
