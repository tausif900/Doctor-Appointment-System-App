import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { toast } from "react-toastify";

const ManageSlots = () => {
  const { register, handleSubmit, reset } = useForm();
  const [slots, setSlots] = useState(null);
  const [slotId, setSlotId] = useState(null);

  const addSlots = async (data) => {
    try {
      const response = await api.post(`/slots`, data);
      console.log(response.data);
      toast.success("Slot added successfully");
      getAllSlots();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const getAllSlots = async () => {
    try {
      const response = await api.get(`/slots/my-slots`);
      console.log(response.data);
      setSlots(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSlot = async (id) => {
    try {
      const response = await api.delete(`/slots/${id}`);
      toast.success("Slot deleted");
      getAllSlots();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const updateSlot = async (data) => {
    try {
      const response = await api.put(`/slots/${slotId}`, data);
      console.log(response.data);
      toast.success("slot updated successfully");
      getAllSlots();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSlots();
  }, []);

  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}
    >
      {/* Update Slot Modal */}

      <div
        className="modal fade"
        id="updateSlotModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <form onSubmit={handleSubmit(updateSlot)}>
            <div
              className="modal-content border-0"
              style={{ borderRadius: "15px" }}
            >
              {/* Header */}

              <div
                className="modal-header text-white"
                style={{ backgroundColor: "#0f766e" }}
              >
                <h5 className="modal-title">
                  <i className="bi bi-pencil-square me-2"></i>
                  Update Slot
                </h5>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* Body */}

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Slot Date</label>

                  <input
                    type="date"
                    className="form-control"
                    {...register("slotDate")}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Start Time</label>

                    <input
                      type="time"
                      className="form-control"
                      {...register("startTime")}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">End Time</label>

                    <input
                      type="time"
                      className="form-control"
                      {...register("endTime")}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ backgroundColor: "#0f766e" }}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Update Slot
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#0f766e" }}>
          Manage Appointment Slots
        </h2>
        <p className="text-muted">
          Create and manage your available appointment slots.
        </p>
      </div>

      {/* Add Slot Card */}
      <div
        className="card shadow border-0 mb-5"
        style={{ borderRadius: "15px" }}
      >
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#0f766e" }}
        >
          <h5 className="mb-0">Create New Slot</h5>
        </div>

        <form onSubmit={handleSubmit(addSlots)}>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("slotDate")}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-semibold">Start Time</label>
                <input
                  type="time"
                  className="form-control"
                  {...register("startTime")}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-semibold">End Time</label>
                <input
                  type="time"
                  className="form-control"
                  {...register("endTime")}
                />
              </div>
            </div>

            <div className="mt-4 text-end">
              <button
                type="submit"
                className="btn text-white px-4"
                style={{ backgroundColor: "#0f766e" }}
              >
                <i className="bi bi-plus-circle me-2"></i>
                Add Slot
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Slot List */}
      <div className="card shadow border-0" style={{ borderRadius: "15px" }}>
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#0f766e" }}
        >
          <h5 className="mb-0">Available Slots</h5>
        </div>

        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="text-center">Date</th>
                <th className="text-center">Start Time</th>
                <th className="text-center">End Time</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {slots ? (
                slots.map((s) => {
                  return (
                    <tr>
                      <td className="text-center">{s.slotDate}</td>
                      <td className="text-center">{s.startTime}</td>
                      <td className="text-center">{s.endTime}</td>
                      <td className="text-center">
                        <span className="badge bg-success">Available</span>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteSlot(s.slotId)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-info mx-2"
                          data-bs-toggle="modal"
                          data-bs-target="#updateSlotModal"
                          onClick={() => {
                            setSlotId(s.slotId);
                            reset({
                              slotDate: s.slotDate,
                              startTime: s.startTime,
                              endTime: s.endTime,
                            });
                          }}
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
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

              {/* Map slots here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots;
