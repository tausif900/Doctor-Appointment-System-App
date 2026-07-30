import React from "react";
import { useForm } from "react-hook-form";

const WriteMedicalReport = () => {
  const {
    register,
    handleSubmit,
  } = useForm();




  
  return (
    <div
      className="container py-5"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg rounded-4">
            <div
              className="card-header text-white text-center py-3"
              style={{
                background: "#0f766e",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            >
              <h3 className="mb-0">
                <i className="bi bi-file-earmark-medical me-2"></i>
                Medical Report & Prescription
              </h3>
            </div>

            <div className="card-body p-4">
              <div className="mb-4">
                <label className="form-label fw-semibold">Diagnosis</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Diagnosis..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Symptoms</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Symptoms..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Medicines</label>

                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Medicines..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Dosage</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Dosage..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Advice</label>

                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Advice..."
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn text-white px-5 py-2"
                  style={{
                    background: "#0f766e",
                    fontSize: "18px",
                  }}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Save Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteMedicalReport;
