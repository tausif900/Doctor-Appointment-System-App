import React from "react";

const PatientDashboard = () => {
  return (
    <>
      <main className="bg-light min-vh-100 py-4">
        <div className="container">
          {/* Welcome Banner */}
          <div
            className="rounded-4 p-5 text-white shadow mb-4"
            style={{
              background: "linear-gradient(135deg, #0f766e, #14b8a6)",
            }}
          >
            <h2 className="fw-bold">Welcome Back 👋</h2>
            <p className="mb-0 fs-5">
              Book appointments, manage your profile and track your healthcare.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="row g-4 mb-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">🩺</div>

                  <h5 className="fw-bold mt-3">Find Doctors</h5>

                  <p className="text-secondary">
                    Search doctors and book your appointment.
                  </p>

                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#0f766e" }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">📅</div>

                  <h5 className="fw-bold mt-3">My Appointments</h5>

                  <p className="text-secondary">
                    View upcoming and previous appointments.
                  </p>

                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#0f766e" }}
                  >
                    View Appointments
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">👤</div>

                  <h5 className="fw-bold mt-3">My Profile</h5>

                  <p className="text-secondary">
                    Update your personal information anytime.
                  </p>

                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#0f766e" }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Upcoming Appointment */}

            <div className="col-lg-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white">
                  <h4 className="fw-bold mb-0">Upcoming Appointment</h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong>Doctor</strong>
                      <p className="mb-0">Dr. John Doe</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>Specialization</strong>
                      <p className="mb-0">Cardiologist</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>Date</strong>
                      <p className="mb-0">12 July 2026</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>Time</strong>
                      <p className="mb-0">10:30 AM</p>
                    </div>
                  </div>

                  <button className="btn btn-outline-danger">
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Health Tips */}

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white">
                  <h4 className="fw-bold mb-0">Health Tips</h4>
                </div>

                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      💧 Drink enough water daily.
                    </li>

                    <li className="list-group-item">🥗 Eat healthy meals.</li>

                    <li className="list-group-item">
                      🚶 Exercise for 30 minutes.
                    </li>

                    <li className="list-group-item">
                      😴 Sleep 7-8 hours daily.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}

          <div className="card border-0 shadow-sm mt-4">
            <div className="card-header bg-white">
              <h4 className="fw-bold mb-0">Recent Activity</h4>
            </div>

            <div className="card-body">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>02 Jul 2026</td>
                    <td>Dr. John Doe</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                  </tr>

                  <tr>
                    <td>12 Jul 2026</td>
                    <td>Dr. Smith</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Upcoming
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PatientDashboard;
