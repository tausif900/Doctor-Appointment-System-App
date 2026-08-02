import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

const ViewMedicalRecord = () => {
  const [medicalRecord, setMedicalRecord] = useState({});

  const navigate = useNavigate();

  const fetchMedicalRecord = async () => {
    try {
      const response = await api.get("/medical-record/patient");
      console.log(response.data);
      setMedicalRecord(response.data);
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
  }, []);

  return (
    <div
      className="py-4 d-flex justify-content-center"
      style={{ background: "#f4f7fb", minHeight: "100vh" }}
    >
      {medicalRecord ? (
        <div className="card border-0 shadow-lg rounded-4 w-50">
          {/* Header */}
          <div
            className="card-header text-white py-3"
            style={{
              background: "#0f766e",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <h3 className="mb-0">
              <i className="bi bi-file-earmark-medical-fill me-2"></i>
              View Your Medical Record
            </h3>
          </div>

          <div className="card-body p-4">
            {/* Diagnosis */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">Diagnosis</label>
              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {medicalRecord?.diagnosis}
              </div>
            </div>

            {/* Symptoms */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">Symptoms</label>

              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {" "}
                {medicalRecord?.symptoms}
              </div>
            </div>

            {/* Medicines */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">Medicines</label>

              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {" "}
                {medicalRecord?.medicines}
              </div>
            </div>

            {/* Dosage */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">Dosage</label>

              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {" "}
                {medicalRecord?.dosage}
              </div>
            </div>

            {/* Medical Test */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">
                Medical Test
              </label>

              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {" "}
                {medicalRecord?.medicalTest}
              </div>
            </div>

            {/* Advice */}
            <div className="mb-4">
              <label className="fw-bold text-secondary mb-2">
                Doctor Advice
              </label>

              <div
                className="p-3 rounded-3"
                style={{
                  background: "#f8f9fa",
                  border: "1px solid #dee2e6",
                }}
              >
                {" "}
                {medicalRecord?.advice}
              </div>
            </div>

            {/* Footer */}
            <hr />

            <div className="row text-center">
              <div className="col-md-6">
                <small className="text-muted">Created On</small>
                <h6 className="fw-bold">
                  {" "}
                  {formatDate(medicalRecord?.createdDate)}
                </h6>
              </div>

              <div className="col-md-6">
                <small className="text-muted">Last Consultation</small>
                <h6 className="fw-bold">
                  {" "}
                  {formatDate(medicalRecord?.updatedDate)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "70vh" }}
        >
          <div
            className="card shadow border-0 rounded-4 text-center p-5"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <div className="mb-4">
              <i
                className="bi bi-file-earmark-medical"
                style={{
                  fontSize: "70px",
                  color: "#0f766e",
                }}
              ></i>
            </div>

            <h3 className="fw-bold mb-3">No Medical Record Found</h3>

            <p className="text-muted mb-4">
              Your doctor has not created any medical record yet. Please
              complete your consultation first.
            </p>

            <button
              className="btn text-white px-4"
              style={{
                background: "#0f766e",
                borderRadius: "10px",
              }}
              onClick={() => navigate("/patient/doctors")}
            >
              <i className="bi bi-calendar-check me-2"></i>
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMedicalRecord;
