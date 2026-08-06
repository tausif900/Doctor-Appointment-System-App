import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateMedicalRecord = () => {
  const [patientRecord, setPatientRecord] = useState({});
  const [patient, setPatient] = useState({});

  const { appointmentId } = useParams();

  const { register, handleSubmit, reset } = useForm();

  const fetchPatientRecord = async () => {
    try {
      const response = await api.get(
        `/medical-record/doctor/patient-record/${appointmentId}`,
      );
      console.log(response.data);
      setPatientRecord(response.data);
      reset({
        diagnosis: response.data.diagnosis,
        symptoms: response.data.symptoms,
        medicines: response.data.medicines,
        dosage: response.data.dosage,
        medicalTest: response.data.medicalTest,
        advice: response.data.advice,
      });
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

  const updateMedicalRecord = async (data) => {
    try {
      const response = await api.put(
        `/medical-record/update-record/${appointmentId}`,
        data,
      );
      console.log(response.data);
      toast.success("Record Updated Successfully!!!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const fetchPatient = async () => {
    try {
      const response = await api.get(`patient/${patientId}`);
      setPatient(response.data);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  

  useEffect(() => {
    fetchPatientRecord();
    fetchPatient();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ background: "#f4f7fb", minHeight: "100vh" }}
    >
      <div className="row g-4">
        {/* ===================== Patient Information ===================== */}

        <div className="col-lg-4">
          <div
            className="card border-0 shadow rounded-4"
            style={{
              position: "sticky",
              top: "20px",
            }}
          >
            <div
              className="card-header text-white text-center py-4"
              style={{
                background: "#0f766e",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            >
              <h4 className="mb-1">{patient.patientName}</h4>

              <span className="badge bg-success px-3 py-2 fs-6">
                Existing Patient
              </span>
            </div>

            <div className="card-body">
              <div className="row g-3">
                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Patient ID</small>
                    <h6 className="fw-bold mb-0">{patient.patientId}</h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Age</small>
                    <h6 className="fw-bold mb-0">{patient.age} Years</h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Gender</small>
                    <h6 className="fw-bold mb-0">{patient.gender}</h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Blood Group</small>
                    <h6 className="fw-bold mb-0">{patient.bloodGroup}</h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Created On</small>
                    <h6 className="fw-bold mb-0">
                      {formatDate(patientRecord.createdDate)}
                    </h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="p-3 rounded-3"
                    style={{ background: "#f8f9fa" }}
                  >
                    <small className="text-muted">Last Updated</small>
                    <h6 className="fw-bold mb-0">
                      {formatDate(patientRecord.updatedDate)}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== Update Medical Record ===================== */}

        <form className="col-lg-8" onSubmit={handleSubmit(updateMedicalRecord)}>
          <div className="card border-0 shadow rounded-4">
            <div
              className="card-header text-white py-3"
              style={{
                background: "#0f766e",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            >
              <h3 className="mb-0">
                <i className="bi bi-pencil-square me-2"></i>
                Update Medical Record
              </h3>
            </div>

            <div className="card-body p-4">
              <div className="mb-4">
                <label className="form-label fw-semibold">Diagnosis</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Diagnosis..."
                  {...register("diagnosis")}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Symptoms</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Symptoms..."
                  {...register("symptoms")}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Medicines</label>

                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter Medicines..."
                  {...register("medicines")}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Dosage</label>

                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Dosage..."
                  {...register("dosage")}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Medical Test</label>

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
                  {...register("advice")}
                ></textarea>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-4">
                <button
                  type="submit"
                  className="btn text-white px-5"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-save me-2"></i>
                  Update Record
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateMedicalRecord;
