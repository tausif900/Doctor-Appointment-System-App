import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState({});
  const { docId, patientId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchDoctor = async () => {
    try {
      const response = await api.get(`/doctors/${docId}`);
      setDoctor(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (data) => {
    console.log(data);

    const appointmentData = {
      ...data,
      patientId,
      docId,
    };
    console.log(appointmentData.patientId);
    console.log(appointmentData.docId);
    console.log(appointmentData);

    try {
      const response = await api.post(`/appointments`, appointmentData);
      console.log(response);
      toast.success("Appointment added! 👍");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong 😓");
    }
  };

  useEffect(() => {
    fetchDoctor();
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

              <form
                className="col-lg-7"
                action=""
                onSubmit={handleSubmit(submitHandler)}
              >
                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#0f766e",
                    }}
                  >
                    Appointment Details
                  </h4>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      className="form-control form-control-lg"
                      {...register("appointmentDate", {
                        required: "please select Date",
                      })}
                    />
                  </div>
                  {errors.appointmentDate && (
                    <p className="text-danger">
                      {errors.appointmentDate.message}
                    </p>
                  )}

                  <div className="mb-5">
                    <label className="form-label fw-semibold">
                      Appointment Time
                    </label>

                    <input
                      type="time"
                      className="form-control form-control-lg"
                      {...register("appointmentTime", {
                        required: "please select time",
                      })}
                    />
                  </div>
                  {errors.appointmentTime && (
                    <p className="text-danger">
                      {errors.appointmentTime.message}
                    </p>
                  )}

                  <div
                    className="rounded-3 p-4 mb-5"
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #dbeafe",
                    }}
                  >
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        color: "#0f766e",
                      }}
                    >
                      Consultation Summary
                    </h5>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Consultation Fee</span>
                      <strong>₹{doctor.consultationFee}</strong>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Status</span>

                      <span className="badge bg-success">Available</span>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg text-white fw-semibold"
                      style={{
                        background: "#0f766e",
                      }}
                      onClick={() =>
                        navigate(`/patient/my-appointments/${patientId}`)
                      }
                    >
                      <i className="bi bi-calendar2-check-fill me-2"></i>
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookAppointment;
