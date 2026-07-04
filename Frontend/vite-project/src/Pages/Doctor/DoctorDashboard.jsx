import React from "react";

const DoctorDashboard = () => {
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
                <span className="text-warning"> Doctor 👨‍⚕️</span>
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
              <i
                className="bi bi-person-badge-fill"
                style={{
                  fontSize: "120px",
                  opacity: ".9",
                }}
              ></i>
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

        <div className="row g-4 mb-4">
          {/* Today's Appointments */}

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
                    className="bi bi-calendar2-check-fill"
                    style={{
                      fontSize: "40px",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">Today's Appointments</h4>

                <p className="text-muted">
                  View and manage today's patient appointments.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View
                </button>
              </div>
            </div>
          </div>

          {/* My Profile */}

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
                    className="bi bi-person-vcard-fill"
                    style={{
                      fontSize: "40px",
                      color: "#4338ca",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">My Profile</h4>

                <p className="text-muted">
                  Update your professional profile and availability.
                </p>

                <button className="btn btn-primary px-4">
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>
          {/* Appointment History */}

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
                    className="bi bi-clock-history"
                    style={{
                      fontSize: "40px",
                      color: "#ea580c",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">Appointment History</h4>

                <p className="text-muted">
                  Review all completed and cancelled consultations.
                </p>

                <button className="btn btn-warning text-white px-4">
                  <i className="bi bi-journal-medical me-2"></i>
                  History
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Appointments & Earnings */}

        <div className="row g-4 mb-4">
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
