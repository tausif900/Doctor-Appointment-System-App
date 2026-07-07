import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState();
  const { patientId } = useParams();

  const fetchPatientName = async () => {
    const response = await api.get(`/patient/${patientId}`);
    setPatientName(response.data.patientName);
  };

  useEffect(() => {
    fetchPatientName();
  }, []);

  return (
    <main
      className="min-vh-100 py-4"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      <div className="container-fluid">
        {/* Welcome Banner */}

        <div
          className="rounded-4 shadow-lg p-4 p-md-5 mb-4 text-white"
          style={{
            background: "linear-gradient(135deg,#0f766e,#14b8a6)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                Welcome Back,
                <span className="text-warning"> {patientName} 👋</span>
              </h2>

              <p className="fs-5 opacity-75 mb-4">
                Manage appointments, monitor your healthcare and connect with
                trusted doctors from one place.
              </p>

              <button
                className="btn btn-light fw-semibold px-4"
                onClick={() => {
                  navigate("/doctors");
                }}
              >
                <i className="bi bi-calendar2-plus-fill me-2"></i>
                Book Appointment
              </button>
            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <i
                className="bi bi-person-circle"
                style={{
                  fontSize: "120px",
                  opacity: ".9",
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
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
                    className="bi bi-calendar-check-fill"
                    style={{
                      color: "#0f766e",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">12</h3>

                  <small className="text-muted">Total Appointments</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
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
                    className="bi bi-person-badge-fill"
                    style={{
                      color: "#4338ca",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">8</h3>

                  <small className="text-muted">Doctors Consulted</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
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
                    className="bi bi-file-earmark-medical-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">5</h3>

                  <small className="text-muted">Medical Reports</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
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
                    className="bi bi-capsule-pill"
                    style={{
                      color: "#ea580c",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">3</h3>

                  <small className="text-muted">Prescriptions</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#e6fffa",
                  }}
                >
                  <i
                    className="bi bi-search-heart-fill"
                    style={{
                      fontSize: "40px",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">Find Doctors</h4>

                <p className="text-muted">
                  Search doctors by specialization and instantly book
                  appointments.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                  }}
                  onClick={() => navigate("/doctors")}
                >
                  <i className="bi bi-calendar2-plus-fill me-2"></i>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-calendar-week-fill"
                    style={{
                      fontSize: "40px",
                      color: "#4338ca",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">My Appointments</h4>

                <p className="text-muted">
                  View upcoming, completed and cancelled appointments.
                </p>

                <button className="btn btn-primary px-4">
                  <i className="bi bi-eye-fill me-2"></i>
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#fff7ed",
                  }}
                >
                  <i
                    className="bi bi-person-lines-fill"
                    style={{
                      fontSize: "40px",
                      color: "#ea580c",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">My Profile</h4>

                <p className="text-muted">
                  Update your personal details and manage your account.
                </p>

                <button className="btn btn-warning text-white px-4">
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment & Health Tips */}

        <div className="row g-4 mb-4">
          {/* Upcoming Appointment */}

          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-calendar-check-fill text-success me-2"></i>
                  Upcoming Appointment
                </h4>
              </div>

              <div className="card-body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <small className="text-muted">Doctor</small>
                    <h6 className="fw-bold mt-1">Dr. John Doe</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Specialization</small>
                    <h6 className="fw-bold mt-1">Cardiologist</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Appointment Date</small>
                    <h6 className="fw-bold mt-1">12 July 2026</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Appointment Time</small>
                    <h6 className="fw-bold mt-1">10:30 AM</h6>
                  </div>

                  <div className="col-12 d-flex flex-wrap gap-3 mt-3">
                    <button className="btn btn-outline-danger">
                      <i className="bi bi-x-circle-fill me-2"></i>
                      Cancel Appointment
                    </button>

                    <button className="btn btn-outline-success">
                      <i className="bi bi-chat-dots-fill me-2"></i>
                      Contact Doctor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Tips */}

          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-heart-pulse-fill text-danger me-2"></i>
                  Health Tips
                </h4>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-droplet-fill text-primary me-2"></i>
                    Drink at least 2–3 litres of water daily.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-egg-fried text-warning me-2"></i>
                    Eat a balanced and healthy diet.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-activity text-success me-2"></i>
                    Exercise for at least 30 minutes every day.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-moon-stars-fill text-secondary me-2"></i>
                    Sleep 7–8 hours to stay healthy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}

        <div className="row g-4">
          {/* Recent Activity */}

          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-clock-history me-2 text-primary"></i>
                  Recent Activity
                </h4>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>02 Jul 2026</td>

                        <td>Dr. John Doe</td>

                        <td>Cardiology</td>

                        <td>
                          <span className="badge bg-success">Completed</span>
                        </td>
                      </tr>

                      <tr>
                        <td>12 Jul 2026</td>

                        <td>Dr. Smith</td>

                        <td>Neurology</td>

                        <td>
                          <span className="badge bg-warning text-dark">
                            Upcoming
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>18 Jul 2026</td>

                        <td>Dr. Robert</td>

                        <td>Orthopedic</td>

                        <td>
                          <span className="badge bg-info">Scheduled</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Health Summary */}

          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-clipboard2-pulse-fill text-success me-2"></i>
                  Today's Summary
                </h4>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Appointments</span>
                  <span className="badge bg-primary">1 Today</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Pending Reports</span>
                  <span className="badge bg-warning text-dark">2</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Medicines</span>
                  <span className="badge bg-success">Active</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span>Health Status</span>
                  <span className="badge bg-info">Good</span>
                </div>

                <button
                  className="btn w-100 text-white"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-file-earmark-medical-fill me-2"></i>
                  View Medical Records
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PatientDashboard;
