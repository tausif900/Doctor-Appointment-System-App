import React from "react";

const AdminDashboard = () => {
  return (
    <main className="bg-light min-vh-100 p-3">
        {/* Welcome Banner */}
        <div
          className="rounded-4 shadow text-white p-4 p-md-5 mb-4"
          style={{
            background: "linear-gradient(135deg,#0f766e,#14b8a6)",
          }}
        >
          <h2 className="fw-bold">Welcome, Admin 👋</h2>
          <p className="mb-0 fs-5">
            Manage doctors, patients and appointments from one place.
          </p>
        </div>

        {/* Quick Actions */}

        <div className="row g-4 mb-4">

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="display-4">👨‍⚕️</div>

                <h5 className="fw-bold mt-3">
                  Doctors
                </h5>

                <p className="text-secondary">
                  View and manage doctors.
                </p>

                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#0f766e" }}
                >
                  Manage
                </button>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="display-4">🧑</div>

                <h5 className="fw-bold mt-3">
                  Patients
                </h5>

                <p className="text-secondary">
                  View registered patients.
                </p>

                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#0f766e" }}
                >
                  Manage
                </button>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="display-4">📅</div>

                <h5 className="fw-bold mt-3">
                  Appointments
                </h5>

                <p className="text-secondary">
                  View all appointments.
                </p>

                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#0f766e" }}
                >
                  View
                </button>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="display-4">⚙️</div>

                <h5 className="fw-bold mt-3">
                  Settings
                </h5>

                <p className="text-secondary">
                  Configure system settings.
                </p>

                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#0f766e" }}
                >
                  Open
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Statistics */}

        <div className="row g-4 mb-4">

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 text-center">
              <div className="card-body">
                <h2 className="fw-bold text-primary">12</h2>
                <p className="mb-0">Doctors</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 text-center">
              <div className="card-body">
                <h2 className="fw-bold text-success">148</h2>
                <p className="mb-0">Patients</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 text-center">
              <div className="card-body">
                <h2 className="fw-bold text-warning">26</h2>
                <p className="mb-0">Today's Appointments</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 text-center">
              <div className="card-body">
                <h2 className="fw-bold text-danger">04</h2>
                <p className="mb-0">Pending Requests</p>
              </div>
            </div>
          </div>

        </div>

        {/* Recent Appointments */}

        <div className="card shadow-sm border-0">

          <div className="card-header bg-white">
            <h4 className="fw-bold mb-0">
              Recent Appointments
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
                    <td>Dr. Mehta</td>
                    <td>03 Jul 2026</td>
                    <td>
                      <span className="badge bg-success">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Priya Patel</td>
                    <td>Dr. Shah</td>
                    <td>03 Jul 2026</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Upcoming
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Aman Khan</td>
                    <td>Dr. Khan</td>
                    <td>04 Jul 2026</td>
                    <td>
                      <span className="badge bg-danger">
                        Cancelled
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>
    </main>
  );
};

export default AdminDashboard;