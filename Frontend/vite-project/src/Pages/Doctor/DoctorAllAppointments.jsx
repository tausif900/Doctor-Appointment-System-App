import React from "react";

const DoctorAllAppointments = () => {
  return (
    <main
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      <div className="container">
        {/* Heading */}

        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#0f766e" }}>
            Patient Appointments
          </h2>

          <p className="text-muted fs-5">
            Manage all appointment requests from your patients.
          </p>
        </div>

        <div className="card border-0 shadow rounded-4">
          <div className="card-header bg-white border-0 py-4">
            <h4 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
              Appointment Requests
            </h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Patient</th>

                    <th>Date</th>

                    <th>Time</th>

                    <th>Status</th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {/* map appointments */}

                  <tr>
                    <td>
                      <div>
                        <h6 className="fw-bold mb-1">Rahul Sharma</h6>

                        <small className="text-muted">Male • 24 Years</small>
                      </div>
                    </td>

                    <td>15 Jul 2026</td>

                    <td>10:30 AM</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2 flex-wrap">
                        <button className="btn btn-sm btn-success">
                          Accept
                        </button>

                        <button className="btn btn-sm btn-danger">
                          Reject
                        </button>

                        <button className="btn btn-sm btn-primary">
                          Complete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorAllAppointments;
