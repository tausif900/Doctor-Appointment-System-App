import React from "react";

const Approval = () => {
  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        className="card border-0 shadow rounded-4 mb-4"
        style={{
          background: "linear-gradient(135deg,#0f766e,#14b8a6)",
        }}
      >
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="text-white fw-bold">Doctor Approval Requests</h2>

              <p
                className="text-white mb-0"
                style={{
                  opacity: ".9",
                }}
              >
                Review newly registered doctors before allowing them into the
                system.
              </p>
            </div>

            <div className="col-lg-4 text-end">
              <span
                className="badge rounded-pill px-4 py-3"
                style={{
                  background: "#fff",
                  color: "#0f766e",
                  fontSize: "15px",
                }}
              >
                Pending : 15
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Search */}
      <div className="card border-0 shadow rounded-4 mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 className="fw-bold mb-0">Registered Doctors</h5>
            </div>

            <div className="col-lg-6">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search Doctor..."
              />
            </div>
          </div>
        </div>
      </div>
      {/* ========================= TABLE ========================= */}
      <div className="card border-0 shadow rounded-4">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead
                style={{
                  background: "#0f766e",
                }}
              >
                <tr>
                  <th className="text-white ps-4 py-3">Doctor</th>

                  <th className="text-white py-3">Specialization</th>

                  <th className="text-white py-3">Qualification</th>

                  <th className="text-white py-3">Experience</th>

                  <th className="text-white py-3">Status</th>

                  <th className="text-white text-center py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="ps-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://i.pravatar.cc/100?img=12"
                        alt=""
                        className="rounded-circle"
                        style={{
                          width: "55px",
                          height: "55px",
                        }}
                      />

                      <div className="ms-3">
                        <h6 className="fw-bold mb-0">Dr. Ahmed Khan</h6>

                        <small className="text-muted">ahmed@gmail.com</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="badge bg-info">Cardiologist</span>
                  </td>

                  <td>MBBS, MD</td>

                  <td>8 Years</td>

                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>

                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-primary rounded-pill me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#doctorApprovalModal"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ========================= DOCTOR DETAILS MODAL ========================= */}
      <div className="modal fade" id="doctorApprovalModal" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 shadow">
            {/* Header */}

            <div
              className="modal-header border-0 text-white"
              style={{
                background: "#0f766e",
              }}
            >
              <h4 className="modal-title fw-bold">Doctor Verification</h4>

              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Body */}

            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    src="https://i.pravatar.cc/250?img=12"
                    className="rounded-circle shadow"
                    alt=""
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />

                  <h4 className="fw-bold mt-3">Dr. Ahmed Khan</h4>

                  <span className="badge bg-warning fs-6">Pending</span>
                </div>

                <div className="col-md-8">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">Email</label>

                      <div className="form-control">doctor@gmail.com</div>
                    </div>

                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">Mobile</label>

                      <div className="form-control">+91 9876543210</div>
                    </div>

                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">
                        Qualification
                      </label>

                      <div className="form-control">MBBS, MD</div>
                    </div>

                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">
                        Experience
                      </label>

                      <div className="form-control">8 Years</div>
                    </div>

                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">
                        Specialization
                      </label>

                      <div className="form-control">Cardiologist</div>
                    </div>

                    <div className="col-md-6">
                      <label className="fw-semibold text-muted">
                        License Number
                      </label>

                      <div className="form-control">LIC-45896231</div>
                    </div>

                    <div className="col-12">
                      <label className="fw-semibold text-muted">Address</label>

                      <textarea className="form-control" rows="3" readOnly>
                        123, MG Road, Mumbai, Maharashtra
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}

            <div className="modal-footer border-0">
              <button className="btn btn-danger rounded-pill px-4">
                <i className="bi bi-x-circle-fill me-2"></i>
                Reject
              </button>

              <button
                className="btn text-white rounded-pill px-4"
                style={{
                  background: "#0f766e",
                }}
              >
                <i className="bi bi-check-circle-fill me-2"></i>
                Approve Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
