import React from "react";

const ManageSlots = () => {
  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}
    >
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

        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label fw-semibold">Date</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Start Time</label>
              <input type="time" className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">End Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="mt-4 text-end">
            <button
              className="btn text-white px-4"
              style={{ backgroundColor: "#0f766e" }}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Add Slot
            </button>
          </div>
        </div>
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
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>21 Jul 2026</td>
                <td>10:00 AM</td>
                <td>10:30 AM</td>
                <td>
                  <span className="badge bg-success">Available</span>
                </td>
                <td className="text-center">
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>

              {/* Map slots here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots;
