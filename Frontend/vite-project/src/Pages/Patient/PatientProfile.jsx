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
    <main className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card border-0 shadow-lg rounded-4">
              {/* Header */}
              <div
                className="card-header border-0 text-white py-4"
                style={{
                  background: "linear-gradient(135deg, #0f766e, #14b8a6)",
                }}
              >
                <h2 className="fw-bold mb-1">Complete Your Profile</h2>
                <p className="mb-0 opacity-75">
                  Fill in your personal details to continue booking
                  appointments.
                </p>
              </div>

              {/* Form */}
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-4">
                    {/* DOB */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          {...register("dateOfBirth", { required: "fill DOB" })}
                        />
                        <label htmlFor="dob">Date of Birth</label>
                      </div>
                      <p className="text-danger">
                        {errors.dateOfBirth && errors.dateOfBirth.message}
                      </p>
                    </div>

                    {/* Gender */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="gender"
                          {...register("gender", { required: "select gender" })}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="gender">Gender</label>
                      </div>
                      <p className="text-danger">
                        {errors.gender && errors.gender.message}
                      </p>
                    </div>

                    {/* Blood Group */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="bloodGroup">
                          <option value="">Select Blood Group</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          <option>O+</option>
                          <option>O-</option>
                        </select>
                        <label htmlFor="bloodGroup">Blood Group</label>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          id="address"
                          style={{ height: "120px" }}
                          {...register("address", {
                            required: "Please fill the address",
                          })}
                        ></textarea>
                        <label htmlFor="address">Address</label>
                      </div>
                      <p className="text-danger">
                        {errors.address && errors.address.message}
                      </p>
                    </div>

                    {/* City */}
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                          {...register("city")}
                        />
                        <label htmlFor="city">City</label>
                      </div>
                    </div>

                    {/* State */}
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="State"
                          {...register("state")}
                        />
                        <label htmlFor="state">State</label>
                      </div>
                    </div>

                    {/* Pincode */}
                    <div className="col-md-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          placeholder="Pincode"
                          {...register("pincode")}
                        />
                        <label htmlFor="pincode">Pincode</label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg w-100 mt-5 text-white fw-semibold"
                    style={{
                      backgroundColor: "#0f766e",
                      borderColor: "#0f766e",
                    }}
                  >
                    Complete Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PatientProfile;
