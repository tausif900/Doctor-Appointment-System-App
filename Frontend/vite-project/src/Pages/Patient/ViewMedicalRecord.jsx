import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const ViewMedicalRecord = () => {
  const [medicalRecord, setMedicalRecord] = useState([]);
  const [patientRecord, setPatientRecord] = useState({});

  const navigate = useNavigate();

  const { user } = useContext(LoginContext);

  const fetchMedicalRecord = async () => {
    try {
      const response = await api.get(
        `/medical-record/all-records/${user.patient?.patientId}`,
      );
      console.log(response.data);
      setMedicalRecord(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPatientRecord = async (appointmentId) => {
    try {
      const response = await api.get(
        `/medical-record/patient/${appointmentId}`,
      );
      console.log(response.data);
      setPatientRecord(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (d) => {
    const date = new Date(d);
    const day = date.toLocaleDateString("en-IN", {
      weekday: "long",
    });
    const formattedDate = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return `${day}, ${formattedDate}`;
  };

  useEffect(() => {
    fetchMedicalRecord();
    fetchPatientRecord();
  }, []);

  return (
    <div className="container-fluid py-4">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#0f766e" }}>My Medical Records</h2>
        <p className="text-muted">View all your previous medical reports.</p>
      </div>

      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search By Doctor..."
          />
        </div>
      </div>

      {/* Records */}

      <div className="row g-4">
        {medicalRecord.map((r) => (
          <div className="col-lg-3 col-md-6" key={r.reportId}>
            <div
              className="card border-0 shadow h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                    Report #{r.reportId}
                  </h5>
                </div>

                <hr />

                <p className="mb-2">
                  <strong>Doctor</strong>
                  <br />
                  Dr. {r.doctorName}
                </p>

                <p className="mb-2">
                  <strong>Diagnosis</strong>
                  <br />
                  {r.diagnosis}
                </p>

                <p className="mb-2">
                  <strong>Medical Test</strong>
                  <br />
                  {r.medicalTest}
                </p>

                <p className="mb-3">
                  <strong>Date</strong>
                  <br />
                  {formatDate(r.createdDate)}
                </p>
              </div>

              <div className="card-footer bg-white border-0">
                <button
                  className="btn btn-success w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#patientMedicalRecordModal"
                  onClick={() => fetchPatientRecord(r.appointmentId)}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View Record
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="patientMedicalRecordModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div
            className="modal-content border-0"
            style={{ borderRadius: "15px" }}
          >
            <div
              className="modal-header text-white"
              style={{ background: "#0f766e" }}
            >
              <h4 className="fw-bold mb-0">Medical Record</h4>

              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-4">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="fw-bold">Doctor</label>
                  <input
                    className="form-control"
                    value={patientRecord.doctorName}
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <label className="fw-bold">Date</label>
                  <input
                    className="form-control"
                    value={formatDate(patientRecord.createdDate)}
                    readOnly
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="fw-bold">Diagnosis</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={patientRecord.diagnosis}
                  readOnly
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="fw-bold">Symptoms</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={patientRecord.symptoms}
                  readOnly
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="fw-bold">Medicines</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={patientRecord.medicines}
                  readOnly
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="fw-bold">Dosage</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={patientRecord.dosage}
                  readOnly
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="fw-bold">Medical Test</label>
                <input
                  className="form-control"
                  value={patientRecord.medicalTest}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label className="fw-bold">Advice</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={patientRecord.advice}
                  readOnly
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMedicalRecord;
