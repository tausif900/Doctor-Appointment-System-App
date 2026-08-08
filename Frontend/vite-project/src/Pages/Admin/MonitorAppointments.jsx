import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api";

const MonitorAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAllAppointments = async () => {
    try {
      const response = await api.get("/appointments");
      console.log(response.data);
      setAppointments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (appointmentDate) => {
    const date = new Date(appointmentDate);
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

  useEffect(() => {
    fetchAllAppointments();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Appointments</h2>
          <p className="text-muted mb-0">
            Monitor all doctor and patient appointments
          </p>
        </div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "15px",
            background: "#fff3cd",
          }}
        >
          <i
            className="bi bi-calendar2-check-fill"
            style={{
              fontSize: "28px",
              color: "#d97706",
            }}
          ></i>
        </div>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-3">
          <div className="row g-3">
            {/* Search */}
            <div className="col-lg-5 col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search text-muted"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search doctor or patient..."
                />
              </div>
            </div>

            {/* Status */}
            <div className="col-lg-3 col-md-3">
              <select className="form-select">
                <option value="">All Status</option>
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Rejected</option>
                <option>Cancelled</option>
              </select>
            </div>

            {/* Date */}
            <div className="col-lg-3 col-md-3">
              <input type="date" className="form-control" />
            </div>

            <div className="col-lg-1 col-md-12">
              <button
                className="btn btn-outline-secondary w-100"
                title="Reset Filters"
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead
                style={{
                  background: "#0d6efd",
                  color: "white",
                }}
              >
                <tr>
                  <th className="px-4 py-3">Appointment</th>
                  <th>Doctor</th>
                  <th>Patient</th>
                  <th>Appointment Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {/* Appointments */}
                {appointments.map((a) => {
                  return (
                    <tr>
                      <td className="px-4">
                        <span className="fw-semibold"># {a.appointmentId}</span>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex justify-content-center align-items-center me-2"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "#e7f1ff",
                            }}
                          >
                            <i
                              className="bi bi-person-badge-fill"
                              style={{
                                color: "#0d6efd",
                                fontSize: "19px",
                              }}
                            ></i>
                          </div>

                          <div>
                            <div className="fw-semibold">
                              Dr. {a.doctorName}
                            </div>

                            <small className="text-muted">
                              {a.specialization}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="fw-semibold">{a.patientName}</div>

                        <small className="text-muted">
                          Patient ID: {a.patientId}
                        </small>
                      </td>

                      <td>{formatDate(a.appointmentDate)}</td>

                      <td>{a.appointmentTime}</td>

                      <td>
                        <span
                          className={`badge ${
                            a.status === "Completed"
                              ? "bg-success"
                              : a.status === "Rejected"
                                ? "bg-danger"
                                : a.status === "Pending"
                                  ? "bg-warning text-dark"
                                  : a.status === "Confirmed"
                                    ? "bg-primary"
                                    : a.status === "Cancelled"
                                      ? "bg-secondary"
                                      : "bg-dark"
                          }`}
                        >
                          {a.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorAppointments;
