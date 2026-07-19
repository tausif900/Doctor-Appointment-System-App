import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  const fetchDoctor = async () => {
    try {
      const response = await api.get(`/doctors/${user?.doctor.id}`);
      setDoctor(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDoctor();
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
                <span className="text-warning"> {user?.name} 👨‍⚕️</span>
              </h2>

              <p className="fs-5 opacity-75 mb-4">
                Manage appointments, patients, prescriptions and your daily
                schedule from one place.
              </p>

              <button className="btn btn-light fw-semibold px-4">
                <i className="bi bi-calendar2-check-fill me-2"></i>
                Today's Schedule
              </button>
            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <img
                src={`http://localhost:8080/doctors/get-image/${user?.doctor.docId}`}
                alt="Doctor"
                className="rounded-circle border border-4"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderColor: "#0f766e",
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="card border-0 shadow rounded-4 my-4">
          <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h5 className="fw-bold mb-1">Next Appointment</h5>
              <p className="text-muted mb-0">Rahul Sharma - 10:00 AM (Today)</p>
            </div>

            <div className="text-end">
              <span className="badge bg-success fs-6">In 45 mins</span>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
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
                    className="bi bi-calendar-check-fill"
                    style={{
                      color: "#0f766e",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">12</h3>

                  <small className="text-muted">Today's Appointments</small>
                </div>
              </div>
            </div>
          </div>

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
                    style={{
                      color: "#4338ca",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">156</h3>

                  <small className="text-muted">Total Patients</small>
                </div>
              </div>
            </div>
          </div>
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
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">143</h3>

                  <small className="text-muted">Completed Visits</small>
                </div>
              </div>
            </div>
          </div>

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
                    className="bi bi-currency-rupee"
                    style={{
                      color: "#ea580c",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">₹24K</h3>

                  <small className="text-muted">Monthly Earnings</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row g-4">
          {/* Today's Schedule */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#dff7f3",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Today's Schedule</h3>

                <p className="text-muted mb-4">
                  View today's accepted appointments and manage your daily
                  schedule.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Patient Appointments */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#e8ebff",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#4f46e5",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Patient Appointments</h3>

                <p className="text-muted mb-4">
                  Review appointment requests and manage patient consultations.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#4f46e5",
                  }}
                  onClick={() => navigate(`/doctor/my-appointments/${docId}`)}
                >
                  <i className="bi bi-list-check me-2"></i>
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* My Profile */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-person-vcard-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#2563eb",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">My Profile</h3>

                <p className="text-muted mb-4">
                  Update your professional profile and availability information.
                </p>

                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/doctor/update-profile")}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Appointment History */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#fff3e8",
                  }}
                >
                  <i
                    className="bi bi-clock-history"
                    style={{
                      fontSize: "2rem",
                      color: "#f97316",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Appointment History</h3>

                <p className="text-muted mb-4">
                  View completed and cancelled consultation records.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#f59e0b",
                  }}
                >
                  <i className="bi bi-clock-history me-2"></i>
                  History
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Appointments & Earnings */}

        <div className="row g-4 mb-4 mt-2">
          {/* Today's Appointments */}

          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-calendar-week-fill text-success me-2"></i>
                  Today's Appointments
                </h4>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr>
                        <th>Patient</th>
                        <th>Time</th>
                        <th>Problem</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Rahul Sharma</td>
                        <td>10:00 AM</td>
                        <td>Fever</td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            Upcoming
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>Priya Patel</td>
                        <td>11:30 AM</td>
                        <td>Headache</td>
                        <td>
                          <span className="badge bg-success">Completed</span>
                        </td>
                      </tr>

                      <tr>
                        <td>Aman Khan</td>
                        <td>02:00 PM</td>
                        <td>Back Pain</td>
                        <td>
                          <span className="badge bg-info">In Progress</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Summary */}

          <div className="col-lg-4 ">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-graph-up-arrow text-success me-2"></i>
                  Today's Summary
                </h4>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Patients Today</span>
                  <span className="badge bg-primary">08</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Upcoming</span>
                  <span className="badge bg-warning text-dark">05</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Completed</span>
                  <span className="badge bg-success">03</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span>Today's Earnings</span>
                  <span className="badge bg-info">₹4,500</span>
                </div>

                <button
                  className="btn w-100 text-white"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-bar-chart-fill me-2"></i>
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Patients */}

        <div className="card border-0 shadow rounded-4">
          <div className="card-header bg-white border-0 py-3">
            <h4 className="fw-bold mb-0">
              <i className="bi bi-people-fill text-primary me-2"></i>
              Recent Patients
            </h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Age</th>
                    <th>Problem</th>
                    <th>Last Visit</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Rahul Sharma</td>
                    <td>28</td>
                    <td>Fever</td>
                    <td>02 Jul 2026</td>
                    <td>
                      <span className="badge bg-success">Recovered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Priya Patel</td>
                    <td>34</td>
                    <td>Migraine</td>
                    <td>30 Jun 2026</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Follow-up
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Aman Khan</td>
                    <td>42</td>
                    <td>Back Pain</td>
                    <td>28 Jun 2026</td>
                    <td>
                      <span className="badge bg-info">Under Treatment</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Neha Verma</td>
                    <td>25</td>
                    <td>Allergy</td>
                    <td>25 Jun 2026</td>
                    <td>
                      <span className="badge bg-primary">New Patient</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Extra Advanced Sections */}

        <div className="row g-4 mt-2">
          {/* Notifications */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-bell-fill text-warning me-2"></i>
                  Notifications
                </h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    🆕 New appointment booked by Rahul Sharma
                  </li>

                  <li className="list-group-item">
                    ❌ Appointment cancelled by Priya Patel
                  </li>

                  <li className="list-group-item">
                    💊 Prescription pending approval
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-chat-dots-fill text-primary me-2"></i>
                  Recent Messages
                </h5>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <strong>Rahul Sharma</strong>
                  <p className="mb-0 text-muted small">
                    Doctor, I need to reschedule my appointment.
                  </p>
                </div>

                <div className="mb-3">
                  <strong>Neha Verma</strong>
                  <p className="mb-0 text-muted small">
                    Thank you for the consultation!
                  </p>
                </div>

                <div>
                  <strong>Aman Khan</strong>
                  <p className="mb-0 text-muted small">Report kab milega?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="col-lg-4">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0">
                <h5 className="fw-bold mb-0">
                  <i className="bi bi-star-fill text-warning me-2"></i>
                  Patient Reviews
                </h5>
              </div>

              <div className="card-body">
                <p className="mb-2">⭐⭐⭐⭐⭐</p>
                <p className="small text-muted">
                  Very good doctor, explained everything clearly.
                </p>

                <hr />

                <p className="mb-2">⭐⭐⭐⭐</p>
                <p className="small text-muted">
                  Treatment was effective and fast recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorDashboard;
