import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const PatientMedicalHistory = () => {
  const { patientId } = useParams();
  const [record, setRecord] = useState([]);
  const [patientRecord, setPatientRecord] = useState({});

  const fetchPatientRecords = async () => {
    try {
      const response = await api.get(
        `/medical-record/all-records/${patientId}`,
      );
      console.log(response.data);
      setRecord(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPatientRecord = async (appointmentId) => {
    try {
      const response = await api.get(
        `/medical-record/doctor/patient-record/${appointmentId}`,
      );
      console.log(response.data);
      setPatientRecord(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (createdDate) => {
    const date = new Date(createdDate);
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
    fetchPatientRecords();
    fetchPatientRecord();
  }, []);

  return (
    <div className="container-fluid py-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#0f766e" }}>
        Patient Medical History
      </h2>

      <div className="row g-4">
        {record.map((r) => (
          <div className="col-lg-3 col-md-6" key={r.reportId}>
            <div
              className="card shadow border-0 h-100"
              style={{
                borderRadius: "15px",
                transition: "0.3s ease",
              }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                    Report #{r.reportId}
                  </h5>
                </div>

                <hr />

                <p className="mb-2">
                  <strong>Diagnosis :</strong>
                  <br />
                  {r.diagnosis}
                </p>

                <p className="mb-2">
                  <strong>Medical Test :</strong>
                  <br />
                  {r.medicalTest}
                </p>

                <p className="mb-3">
                  <strong>Created Date :</strong>
                  <br />
                  {formatDate(r.createdDate)}
                </p>
              </div>

              <div className="card-footer bg-white border-0">
                <button
                  className="btn btn-success w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#viewMedicalRecordModal"
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

      {/* =============================Modal==================================== */}

      <div
        className="modal fade"
        id="viewMedicalRecordModal"
        tabIndex="-1"
        aria-labelledby="viewMedicalRecordModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div
            className="modal-content border-0"
            style={{ borderRadius: "15px" }}
          >
            <div
              className="modal-header text-black"
              style={{ background: "#0f766e" }}
            >
              <h4
                className="modal-title fw-bold"
                id="viewMedicalRecordModalLabel"
              >
                Medical Record
              </h4>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body p-4">
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="fw-bold">Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={patientRecord.patientName}
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <label className="fw-bold">Created Date</label>
                  <input
                    type="text"
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
                  type="text"
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

export default PatientMedicalHistory;
