import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState({});
  const [slots, setSlots] = useState(null);
  const { docId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formatDate = (slotDate) => {
    const date = new Date(slotDate);
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

  const fetchDoctor = async () => {
    try {
      const response = await api.get(`/doctors/${docId}`);
      setDoctor(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllSlots = async (docId) => {
    const response = await api.get(`/slots/doctor/${docId}`);
    console.log(response.data);
    setSlots(response.data);
  };

  useEffect(() => {
    fetchDoctor();
    fetchAllSlots(docId);
  }, []);

  return (
    <main
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%, #eef2ff 50%, #e0f2fe 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              color: "#0f766e",
            }}
          >
            Book Appointment
          </h2>

          <p className="text-muted fs-5">
            Select your preferred appointment date and time.
          </p>
        </div>

        <div className="card border-0 shadow-lg rounded-4">
          <div className="card-body p-4 p-lg-5">
            <div className="row g-5 align-items-center">
              {/* Doctor Details */}

              <div className="col-lg-5">
                <div className="text-center">
                  <div
                    className="mx-auto rounded-4 overflow-hidden shadow"
                    style={{
                      width: "220px",
                      height: "220px",
                      background: "#eefaf8",
                    }}
                  >
                    <img
                      src={`http://localhost:8080/doctors/get-image/${doctor.docId}`}
                      alt="Doctor"
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <h3
                    className="fw-bold mt-4 mb-2"
                    style={{
                      color: "#0f766e",
                    }}
                  >
                    {doctor.doctorName}
                  </h3>

                  <span className="badge bg-info fs-6 px-3 py-2">
                    {doctor.specialization}
                  </span>
                </div>

                <hr className="my-4" />

                <div className="fs-5">
                  <p>
                    <i
                      className="bi bi-mortarboard-fill me-2"
                      style={{ color: "#0f766e" }}
                    ></i>
                    <strong>Qualification :</strong>
                    <br />
                    {doctor.qualification}
                  </p>

                  <p>
                    <i
                      className="bi bi-briefcase-fill me-2"
                      style={{ color: "#0f766e" }}
                    ></i>
                    <strong>Experience :</strong>
                    <br />
                    {doctor.experience} Years
                  </p>

                  <p>
                    <i
                      className="bi bi-cash-stack me-2"
                      style={{ color: "#0f766e" }}
                    ></i>
                    <strong>Consultation Fee :</strong>
                    <br />₹{doctor.consultationFee}
                  </p>
                </div>
              </div>

              {/* Appointment Form */}

              <div className="col-lg-7">
                <h4
                  className="fw-bold mb-4"
                  style={{
                    color: "#0f766e",
                  }}
                >
                  Available Appointment Slots
                </h4>

                <div
                  className="p-3 rounded-4 mb-4"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #dbeafe",
                    maxHeight: "420px",
                    overflowY: "auto",
                  }}
                >
                  {/* Map available slots here */}

                  {slots ? (
                    slots.map((slot) => (
                      <div
                        key={slot.slotId}
                        className="card border-0 shadow-sm mb-3"
                        style={{
                          borderRadius: "12px",
                        }}
                      >
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-8">
                              <h6
                                className="fw-bold mb-2"
                                style={{
                                  color: "#0f766e",
                                }}
                              >
                                {formatDate(slot.slotDate)}
                              </h6>

                              <p className="mb-0 text-muted">
                                <i className="bi bi-clock me-2"></i>
                                {slot.startTime} AM - {slot.endTime} AM
                              </p>
                            </div>

                            <div className="col-md-4 text-md-end mt-3 mt-md-0">
                              <button
                                className="btn text-white px-4"
                                style={{
                                  background: "#0f766e",
                                }}
                              >
                                <i className="bi bi-calendar-check me-2"></i>
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "300px" }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookAppointment;
