import React, { useEffect, useState } from "react";
import { api } from "../../api";

const ManagePatients = () => {
  const [patients, setPatients] = useState([]);

  const [patient, setPatient] = useState({});

  const fetchAllPatients = async () => {
    try {
      const response = await api.get("/patient/all-patients");
      console.log(response.data);
      setPatients(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPatient = async (patientId) => {
    try {
      const response = await api.get(`/patient/${patientId}`);
      console.log(response.data);
      setPatient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPatients();
    fetchPatient();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1" style={{ color: "#0c6b24" }}>
            Manage Patients
          </h2>
          <p className="text-muted mb-0">View and manage registered patients</p>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "15px",
            background: "#e7f1ff",
          }}
        >
          <i
            className="bi bi-people-fill"
            style={{ fontSize: "28px", color: "#0c6b24" }}
          ></i>
        </div>
      </div>

      {/* Search + Total */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-3">
          <div className="row align-items-center g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search text-muted"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patient by name..."
                />
              </div>
            </div>

            <div className="col-md-6 text-md-end">
              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background: "#e7f1ff",
                  color: "#0c6b24",
                  fontSize: "14px",
                }}
              >
                <i className="bi bi-people-fill me-2"></i>
                Total Patients: {patients.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Table */}
      {patients.length > 0 ? (
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead
                  style={{
                    background: "#0d6efd",
                    color: "white",
                  }}
                >
                  <tr>
                    <th className="px-4 py-3">Patient</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Blood Group</th>
                    <th>City</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Patient 1 */}
                  {patients.map((p) => {
                    return (
                      <tr key={p.patientId}>
                        <td className="px-4 py-3">
                          <div className="d-flex align-items-center">
                            <div
                              className="d-flex justify-content-center align-items-center me-3"
                              style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                background: "#e7f1ff",
                              }}
                            >
                              <i
                                className="bi bi-person-fill"
                                style={{
                                  fontSize: "22px",
                                  color: "#0c6b24",
                                }}
                              ></i>
                            </div>

                            <div>
                              <h6 className="fw-bold mb-1">{p.patientName}</h6>

                              <small className="text-muted">
                                Patient ID: {p.patientId}
                              </small>
                            </div>
                          </div>
                        </td>

                        <td>{p.email}</td>

                        <td>{p.phoneNumber}</td>

                        <td>
                          <span className="badge bg-primary-subtle text-primary">
                            {p.gender}
                          </span>
                        </td>

                        <td>
                          <span
                            className="badge"
                            style={{
                              background: "#fff0f0",
                              color: "#dc3545",
                            }}
                          >
                            {p.bloodGroup}
                          </span>
                        </td>

                        <td>{p.city}</td>

                        <td className="text-center">
                          <button
                            className="btn btn-outline-success btn-sm px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#patientDetailsModal"
                            onClick={() => fetchPatient(p.patientId)}
                          >
                            <i className="bi bi-eye-fill me-1"></i>
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="card-body text-center py-5">
            <div
              className="mx-auto mb-4 d-flex justify-content-center align-items-center"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#e7f1ff",
              }}
            >
              <i
                className="bi bi-person-x-fill"
                style={{
                  fontSize: "42px",
                  color: "#0d6efd",
                }}
              ></i>
            </div>

            <h4 className="fw-bold mb-2">No Patients Found</h4>

            <p className="text-muted mb-0">
              There are currently no registered patients in the system.
            </p>
          </div>
        </div>
      )}

      {/* Patient Details Modal */}
      <div
        className="modal fade"
        id="patientDetailsModal"
        tabIndex="-1"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className="modal-content border-0 shadow"
            style={{ borderRadius: "18px" }}
          >
            <div
              className="modal-header text-white"
              style={{
                background: "#0c6b24",
                borderRadius: "18px 18px 0 0",
              }}
            >
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-person-vcard-fill me-2"
                  style={{ fontSize: "24px" }}
                ></i>

                <h5 className="modal-title fw-bold">Patient Details</h5>
              </div>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-4">
              {/* Patient Header */}
              <div
                className="d-flex align-items-center p-3 mb-4"
                style={{
                  background: "#f8f9fa",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center me-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    background: "#e7f1ff",
                  }}
                >
                  <i
                    className="bi bi-person-fill"
                    style={{
                      fontSize: "32px",
                      color: "#0c6b24",
                    }}
                  ></i>
                </div>

                <div>
                  <h5 className="fw-bold mb-1">{patient.patientName}</h5>

                  <small className="text-muted">
                    Patient ID: {patient.patientId}
                  </small>
                </div>
              </div>

              {/* Details */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.email}
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.phoneNumber}
                    readOnly
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Date of Birth
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.dateOfBirth}
                    readOnly
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Gender</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.gender}
                    readOnly
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Blood Group</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.bloodGroup}
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">City</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.city}
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">State</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.state}
                    readOnly
                  />
                </div>

                <div className="col-md-8">
                  <label className="form-label fw-semibold">Address</label>

                  <textarea
                    className="form-control"
                    rows="2"
                    value={patient.address}
                    readOnly
                  ></textarea>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Pincode</label>

                  <input
                    type="text"
                    className="form-control"
                    value={patient.pincode}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagePatients;
