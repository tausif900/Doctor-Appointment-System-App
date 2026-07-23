import React, { useEffect, useState } from "react";
import { api } from "../../api";

const DoctorAllAppointments = () => {
  const [appointmentRequest, setAppointmentRequest] = useState(null);

  const fetchAppointmentRequest = async () => {
    try {
      const response = await api.get("/appointments");
      console.log(response.data);
      setAppointmentRequest(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formDate = (slotDate) => {
    const date = new Date(slotDate);
    console.log(date);
    console.log(date.toDateString());
    const day = date.toLocaleDateString("en-IN", {
      weekday: "long",
    });
    console.log(day);
    const formattedDate = date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    console.log(formattedDate);
    return `${day}, ${formattedDate}`;
  };

  useEffect(() => {
    fetchAppointmentRequest();
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
        {/* Heading */}

        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#0f766e" }}>
            Patient Appointments
          </h2>

          <p className="text-muted fs-5">
            Manage all appointment requests from your patients.
          </p>
        </div>

        <div className="card border-0 shadow rounded-4">
          <div className="card-header bg-white border-0 py-4">
            <h4 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
              Appointment Requests
            </h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th className="text-center">Patient</th>

                    <th className="text-center">Date</th>

                    <th className="text-center">Time</th>

                    <th className="text-center">Status</th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {/* map appointments */}

                  {appointmentRequest ? (
                    appointmentRequest.map((a) => {
                      return (
                        <tr key={a.appointmentId}>
                          <td className="text-center">
                            <div>
                              <h6 className="fw-bold mb-1">{a.patientName}</h6>

                              <small className="text-muted">
                                {a.gender} • {a.age} Years
                              </small>
                            </div>
                          </td>

                          <td className="text-center">
                            {formDate(a.appointmentDate)}
                          </td>

                          <td className="text-center">{a.appointmentTime}</td>

                          <td className="text-center">
                            <span className="badge bg-warning text-dark">
                              Pending
                            </span>
                          </td>

                          <td>
                            <div className="d-flex gap-2 flex-wrap">
                              <button className="btn btn-sm btn-success">
                                Accept
                              </button>

                              <button className="btn btn-sm btn-danger">
                                Reject
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorAllAppointments;
