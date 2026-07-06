import React, { useEffect, useState } from "react";
import { api } from "../../api";

const DoctorList = () => {
  const [doctors, setDoctors] = useState(null);

  const fetchDoctors = async () => {
    try {
      const response = await api.get("/doctors");
      console.log(response.data);
      setDoctors(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <main
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      <div className="px-3">
        {/* Heading */}

        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              color: "#0f766e",
            }}
          >
            Find Your Doctor
          </h2>

          <p className="text-muted fs-5">
            Choose a specialist and book your appointment in just a few clicks.
          </p>
        </div>

        {/* Search */}

        <div className="card border-0 shadow rounded-4 mb-5">
          <div className="card-body p-4">
            <div className="row g-3 align-items-center">
              <div className="col-lg-9">
                <select className="form-select form-select-lg fs-6">
                  <option>All Specializations</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Orthopedic</option>
                  <option>Neurologist</option>
                  <option>Pediatrician</option>
                  <option>Gynecologist</option>
                  <option>ENT Specialist</option>
                </select>
              </div>

              <div className="col-lg-3 d-grid">
                <button
                  className="btn btn-lg text-white"
                  style={{
                    background: "#0f766e",
                  }}
                >
                  <i className="bi bi-search me-2"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors */}

        {doctors ? (
          <div className="row g-4">
            {doctors.map((doctor) => (
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                key={doctor.id}
              >
                <div
                  className="card border-0 shadow rounded-4 h-100"
                  style={{
                    transition: ".3s",
                  }}
                >
                  <div className="card-body text-center p-4">
                    {/* Avatar */}

                    <div
                      className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#eefaf8",
                      }}
                    >
                      <i
                        className="bi bi-person-circle"
                        style={{
                          fontSize: "70px",
                          color: "#0f766e",
                        }}
                      ></i>
                    </div>

                    <h4 className="fw-bold mb-2">{doctor.doctorName}</h4>

                    <span className="badge bg-info mb-3 fs-6">
                      {doctor.specialization}
                    </span>

                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      <span className="fw-semibold">4.8</span>

                      <span className="text-muted ms-2">(120 Reviews)</span>
                    </div>

                    <hr />

                    <div className="text-start">
                      <p className="mb-2">
                        <i
                          className="bi bi-briefcase-fill me-2"
                          style={{ color: "#0f766e" }}
                        ></i>
                        <strong>Experience : </strong>
                        {doctor.experience} years
                      </p>

                      <p className="mb-2">
                        <i
                          className="bi bi-cash-stack me-2"
                          style={{ color: "#0f766e" }}
                        ></i>
                        <strong>Fee :</strong> {doctor.consultationFee}
                      </p>

                      <p className="mb-4">
                        <span className="badge bg-success fs-6">
                          Available Today
                        </span>
                      </p>
                    </div>

                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary w-50">
                        View Profile
                      </button>

                      <button
                        className="btn text-white w-50"
                        style={{
                          background: "#0f766e",
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              minHeight: "70vh",
            }}
          >
            <div
              className="spinner-border"
              role="status"
              style={{
                width: "4rem",
                height: "4rem",
                color: "#0f766e",
              }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default DoctorList;
