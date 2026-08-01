import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

const WriteMedicalReport = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await api.post(`/medical-record/${patientId}`, data);
      console.log(response.data);
      toast.success("Record Updated");
      navigate("/doctor/today's-schedule");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

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

            <form
              className="card-body p-4"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="mb-4">
                <label className="form-label fw-semibold">Diagnosis</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Diagnosis..."
                  {...register("diagnosis", { required: "Enter Diagnosis" })}
                ></textarea>
              </div>
              {errors.diagnosis && (
                <small className="text-danger">
                  {errors.diagnosis.message}
                </small>
              )}

              <div className="mb-4">
                <label className="form-label fw-semibold">Symptoms</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Symptoms..."
                  {...register("symptoms", { required: "Enter Symptoms" })}
                ></textarea>
              </div>
              {errors.name && (
                <small className="text-danger">{errors.symptoms.message}</small>
              )}

              <div className="mb-4">
                <label className="form-label fw-semibold">Medicines</label>

                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Medicines..."
                  {...register("medicines", { required: "Enter Medicines" })}
                ></textarea>
              </div>
              {errors.medicines && (
                <small className="text-danger">
                  {errors.medicines.message}
                </small>
              )}

              <div className="mb-4">
                <label className="form-label fw-semibold">Dosage</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Dosage..."
                  {...register("dosage", { required: "Enter Dosage" })}
                ></textarea>
              </div>
              {errors.dosage && (
                <small className="text-danger">{errors.dosage.message}</small>
              )}

              <div className="mb-4">
                <label className="form-label fw-semibold">Medical Tests</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Medical Test..."
                  {...register("medicalTest")}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Advice</label>

                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Advice..."
                  {...register("advice", { required: "Enter advice" })}
                ></textarea>
              </div>
              {errors.advice && (
                <small className="text-danger">{errors.advice.message}</small>
              )}

              <div className="text-center mt-4">
                <button
                  type="submit"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteMedicalReport;
