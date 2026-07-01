import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { userId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/doctors/register/${userId}`, data);
      toast.success("Congrates!, Your Profile is completed.");
    } catch (error) {
      toast.error("Oops!, Something went wrong");
    }
  };
  return (
    <div>
      <main className="bg-light min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center align-items-stretch g-0 shadow-lg rounded-4 overflow-hidden bg-white">
            {/* Left Side */}
            <section
              className="col-lg-5 text-white p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                background: "linear-gradient(135deg, #0f766e, #14b8a6)",
              }}
            >
              <div>
                <span
                  className="badge text-bg-light mb-4 px-3 py-2"
                  style={{ color: "#0f766e" }}
                >
                  Doctor Appointment
                </span>

                <h1 className="display-6 fw-bold mb-3">
                  Complete Your Doctor Profile
                </h1>

                <p className="lead">
                  Provide your professional details so patients can find and
                  book appointments with you.
                </p>
              </div>

              <div className="border-top border-light pt-4">
                <p className="fw-semibold mb-2">Professional Profile</p>
                <p className="opacity-75 mb-0">
                  Accurate information helps patients trust and connect with
                  you.
                </p>
              </div>
            </section>

            {/* Right Side */}
            <section className="col-lg-7 p-4 p-md-5">
              <div className="mb-4">
                <h2 className="fw-bold">Doctor Profile</h2>
                <p className="text-secondary">
                  Complete your professional information.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="specialization"
                        placeholder="Specialization"
                        {...register("specialization", {
                          required: "specialization is required",
                        })}
                      />
                      <label htmlFor="specialization">Specialization</label>
                    </div>
                    <p className="text-danger">
                      {errors.specialization && errors.specialization.message}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="experience"
                        placeholder="Experience"
                        {...register("experience", {
                          required: "experience is required",
                        })}
                      />
                      <label htmlFor="experience">Experience (Years)</label>
                      {errors.experience && errors.experience.message}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="qualification"
                        placeholder="Qualification"
                        {...register("qualification", {
                          required: "qualification is required",
                        })}
                      />
                      <label htmlFor="qualification">Qualification</label>
                      {errors.qualification && errors.qualification.message}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="consultationFee"
                        placeholder="Consultation Fee"
                        {...register("consultationFee", {
                          required: "consultation fee is required",
                        })}
                      />
                      <label htmlFor="consultationFee">
                        Consultation Fee (₹)
                      </label>
                      {errors.consultationFee && errors.consultationFee.message}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 mt-4 text-white fw-semibold"
                  style={{ backgroundColor: "#0f766e", borderColor: "#0f766e" }}
                >
                  Complete Profile
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorProfile;
