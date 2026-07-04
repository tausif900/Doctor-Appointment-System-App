import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PatientProfile = () => {
  const { userId } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/patient/register/${userId}`, data);

      toast.success("Congrates!, Your Profile is completed.");

      navigate("/patient-dashboard");
    } catch (error) {
      toast.error("Oops!, Something went wrong");
    }
  };

  return (
    <main
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#e0f2fe 50%,#dbeafe 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="row g-0">
                {/* LEFT PANEL */}

                <div
                  className="col-lg-4 text-white p-4 p-md-5 d-flex flex-column justify-content-between"
                  style={{
                    background: "linear-gradient(135deg,#0f766e,#14b8a6)",
                    minHeight: "760px",
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center bg-white rounded-pill px-3 py-2 shadow-sm mb-4"
                      style={{ color: "#0f766e" }}
                    >
                      <i className="bi bi-person-vcard-fill me-2"></i>
                      <span className="fw-bold">Patient Profile</span>
                    </div>

                    <h2 className="fw-bold mb-3">Complete Your Profile</h2>

                    <p className="opacity-75 fs-5 mb-5">
                      Your profile helps doctors understand your health details
                      and provide better treatment.
                    </p>

                    <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-light mb-4">
                      <h6 className="fw-bold">
                        <i className="bi bi-heart-pulse-fill me-2"></i>
                        Better Healthcare
                      </h6>

                      <small className="opacity-75">
                        Complete medical information improves consultation.
                      </small>
                    </div>

                    <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-light">
                      <h6 className="fw-bold">
                        <i className="bi bi-shield-check me-2"></i>
                        Secure Information
                      </h6>

                      <small className="opacity-75">
                        Your profile is completely secure and private.
                      </small>
                    </div>
                  </div>

                  <div>
                    <hr className="border-light" />

                    <p className="fw-semibold mb-1">Healthcare made simple.</p>

                    <small className="opacity-75">
                      Trusted by thousands of patients.
                    </small>
                  </div>
                </div>

                {/* RIGHT PANEL */}

                <div className="col-lg-8 bg-white">
                  <div className="p-4 p-md-5">
                    <div className="mb-5">
                      <h2 className="fw-bold">Patient Information</h2>

                      <p className="text-muted">
                        Please fill all required details carefully.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-4">
                        {/* Date of Birth */}
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Date of Birth
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-calendar-date-fill"></i>
                            </span>

                            <input
                              type="date"
                              className={`form-control ${
                                errors.dateOfBirth ? "is-invalid" : ""
                              }`}
                              {...register("dateOfBirth", {
                                required: "fill DOB",
                              })}
                            />
                          </div>

                          {errors.dateOfBirth && (
                            <small className="text-danger">
                              {errors.dateOfBirth.message}
                            </small>
                          )}
                        </div>

                        {/* Gender */}
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Gender
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-gender-ambiguous"></i>
                            </span>

                            <select
                              className={`form-select ${
                                errors.gender ? "is-invalid" : ""
                              }`}
                              {...register("gender", {
                                required: "select gender",
                              })}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {errors.gender && (
                            <small className="text-danger">
                              {errors.gender.message}
                            </small>
                          )}
                        </div>

                        {/* Blood Group */}
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Blood Group
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-droplet-fill"></i>
                            </span>

                            <select
                              className="form-select"
                              {...register("bloodGroup")}
                            >
                              <option value="">Select Blood Group</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                              <option value="B+">B+</option>
                              <option value="B-">B-</option>
                              <option value="AB+">AB+</option>
                              <option value="AB-">AB-</option>
                              <option value="O+">O+</option>
                              <option value="O-">O-</option>
                            </select>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="col-12">
                          <label className="form-label fw-semibold">
                            Address
                          </label>

                          <div className="input-group">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-geo-alt-fill"></i>
                            </span>

                            <textarea
                              className={`form-control ${
                                errors.address ? "is-invalid" : ""
                              }`}
                              rows="5"
                              placeholder="Enter your complete address"
                              {...register("address", {
                                required: "Please fill the address",
                              })}
                            ></textarea>
                          </div>

                          {errors.address && (
                            <small className="text-danger">
                              {errors.address.message}
                            </small>
                          )}
                        </div>
                        {/* City */}
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">City</label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-buildings-fill"></i>
                            </span>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                              {...register("city")}
                            />
                          </div>
                        </div>

                        {/* State */}
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">
                            State
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-map-fill"></i>
                            </span>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State"
                              {...register("state")}
                            />
                          </div>
                        </div>

                        {/* Pincode */}
                        <div className="col-md-4">
                          <label className="form-label fw-semibold">
                            Pincode
                          </label>

                          <div className="input-group input-group-lg">
                            <span className="input-group-text bg-light">
                              <i className="bi bi-pin-map-fill"></i>
                            </span>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Pincode"
                              {...register("pincode")}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}

                      <button
                        type="submit"
                        className="btn btn-lg w-100 mt-5 text-white fw-bold shadow"
                        style={{
                          background: "#0f766e",
                          borderColor: "#0f766e",
                          padding: "14px",
                        }}
                      >
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Complete Profile
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PatientProfile;
