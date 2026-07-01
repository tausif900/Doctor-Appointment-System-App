import React from "react";

const DoctorDashboard = () => {
  return (
    <>
      <main className="bg-light min-vh-100 py-4">
        <div className="container">
          {/* Welcome Banner */}
          <div
            className="rounded-4 shadow text-white p-4 p-md-5 mb-4"
            style={{
              background: "linear-gradient(135deg, #0f766e, #14b8a6)",
            }}
          >
            <h2 className="fw-bold">Welcome Back, Doctor 👨‍⚕️</h2>
            <p className="mb-0 fs-5">
              Manage appointments, update your profile, and provide excellent
              care.
            </p>
          </div>

          {/* Quick Actions */}

          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">📅</div>

                  <h5 className="fw-bold mt-3">Today's Appointments</h5>

                  <p className="text-secondary">
                    View today's scheduled patients.
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

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">👨‍⚕️</div>

                  <h5 className="fw-bold mt-3">My Profile</h5>

                  <p className="text-secondary">
                    Update your professional information.
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

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center p-4">
                  <div className="display-4">📖</div>

                  <h5 className="fw-bold mt-3">Appointment History</h5>

                  <p className="text-secondary">
                    Review completed consultations.
                  </p>

                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#0f766e" }}
                  >
                    View History
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}

          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h2 className="fw-bold text-success">08</h2>
                  <p className="mb-0">Today's Patients</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h2 className="fw-bold text-warning">05</h2>
                  <p className="mb-0">Upcoming</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body">
                  <h2 className="fw-bold text-primary">143</h2>
                  <p className="mb-0">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Appointments */}

          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h4 className="fw-bold mb-0">Today's Appointments</h4>
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
                      <td>2:00 PM</td>
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
      </main>
    </>
  );
};

export default DoctorDashboard;
