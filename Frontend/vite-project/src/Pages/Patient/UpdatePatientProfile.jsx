import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../Context/LoginContext";
import { api } from "../../api";
import { toast } from "react-toastify";

const UpdatePatientProfile = () => {
  const { register, handleSubmit, reset } = useForm();

  const fetchPatientDetails = async () => {
    try {
      const response = await api.get(`/patient`);
      console.log(response.data);
      reset({
        dateOfBirth: response.data.dateOfBirth,
        gender: response.data.gender,
        bloodGroup: response.data.bloodGroup,
        address: response.data.address,
        city: response.data.city,
        state: response.data.state,
        pincode: response.data.pincode,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updatePatient = async (data) => {
    try {
      const response = await api.put(`/patient/update-patient`, data);
      console.log(response.data);
      toast.success("Profile updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg">
            <div
              className="card-header text-white text-center py-3"
              style={{
                background: "#0f766e",
              }}
            >
              <h3 className="mb-0">
                <i className="bi bi-person-circle me-2"></i>
                Update Patient Profile
              </h3>
            </div>

            <form
              className="card-body p-4"
              onSubmit={handleSubmit(updatePatient)}
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("dateOfBirth")}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Gender</label>

                  <select className="form-select" {...register("gender")}>
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Blood Group</label>

                  <select className="form-select" {...register("bloodGroup")}>
                    <option>Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">Address</label>

                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Enter Address"
                    {...register("address")}
                  ></textarea>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">City</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter City"
                    {...register("city")}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">State</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State"
                    {...register("state")}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Pincode</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pincode"
                    {...register("pincode")}
                  />
                </div>
              </div>

              <div className="text-center mt-5">
                <button
                  className="btn btn-success px-5 py-2"
                  type="submit"
                  style={{
                    background: "#0f766e",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePatientProfile;
