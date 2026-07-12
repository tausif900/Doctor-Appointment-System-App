import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { api } from "../../api";
import { useForm } from "react-hook-form";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState({});
  const { docId, patientId } = useParams();
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

  const appointmentData = {
    ...data,
    patientId,
    docId,
  };
  console.log(appointmentData);

  const submitHandler = async (data) => {
    try {
      const response = await api.post(`/appointments`, appointmentData);
      console.log(response);
    } catch (error) {
      console.log(error);
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
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#0f766e" }}>
          Book Appointment
        </h2>

        <div className="card border-0 shadow-lg rounded-4">
          <div className="card-body p-5">
            <div className="row">
              {/* Doctor Details */}

              <div className="col-lg-4 border-end">
                <div className="text-center">
                  <div
                    className="rounded-3 overflow-hidden mx-auto mb-4"
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

                  <h3 className="fw-bold">{doctor.doctorName}</h3>

                  <span className="badge bg-info fs-6 mb-4">
                    {doctor.specialization}
                  </span>
                </div>

                <hr />

                <p className="fs-5">
                  <strong>Qualification :</strong>
                  <br />
                  {doctor.qualification}
                </p>

                <p className="fs-5">
                  <strong>Experience :</strong>
                  <br />
                  {doctor.experience} Years
                </p>

                <p className="fs-5">
                  <strong>Consultation Fee :</strong>
                  <br />₹{doctor.consultationFee}
                </p>
              </div>

              {/* Appointment Form */}
              <form
                className="col-lg-8"
                action=""
                onSubmit={handleSubmit(submitHandler)}
              >
                <div>
                  <h4 className="fw-bold mb-4" style={{ color: "#0f766e" }}>
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
                        required: "please select appointment date",
                      })}
                    />
                  </div>
                  {errors.appointmentDate && (
                    <p className="text-danger">
                      {errors.appointmentDate.message}
                    </p>
                  )}

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Appointment Time
                    </label>

                    <input
                      type="time"
                      className="form-control form-control-lg"
                      {...register("appointmentTime", {
                        required: "please select appointment time",
                      })}
                    />
                  </div>
                  {errors.appointmentTime && (
                    <p className="text-danger">
                      {errors.appointmentTime.message}
                    </p>
                  )}

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Symptoms (Optional)
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Describe your symptoms..."
                    ></textarea>
                  </div>

                  <div className="d-grid mt-5">
                    <button
                      type="submit"
                      className="btn btn-lg text-white fw-semibold"
                      style={{
                        background: "#0f766e",
                      }}
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
