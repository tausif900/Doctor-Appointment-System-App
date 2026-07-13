import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";

const MyAllAppointments = () => {
  const [patientAppointments, setPatientAppointments] = useState(null);

  const { patientId } = useParams();

  const getAllAppointmentsOfPatient = async () => {
    try {
      const response = await api.get(`/appointments/patient/${patientId}`);
      console.log(response.data);
      setPatientAppointments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAppointmentsOfPatient();
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
          <h2
            className="fw-bold"
            style={{
              color: "#0f766e",
            }}
          >
            My Appointments
          </h2>

          <p className="text-muted fs-5">
            View and manage all your booked appointments.
          </p>
        </div>

        <div className="card border-0 shadow rounded-4">
          <div className="card-header bg-white border-0 py-4">
            <h4
              className="fw-bold mb-0"
              style={{
                color: "#0f766e",
              }}
            >
              Appointment History
            </h4>
          </div>

          {patientAppointments ? (
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Doctor</th>

                      <th>Specialization</th>

                      <th>Date</th>

                      <th>Time</th>

                      <th>Status</th>

                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* map appointments here */}

                    {patientAppointments.map((appointment) => {
                      return (
                        <tr>
                          <td>
                            <div>
                              <h6 className="fw-bold p-3">
                                {appointment.doctorName}
                              </h6>
                            </div>
                          </td>

                          <td>
                            <span className="badge bg-info p-1 fs-6">
                              {appointment.specialization}
                            </span>
                          </td>

                          <td>{appointment.appointmentDate}</td>

                          <td>{appointment.appointmentTime}</td>

                          <td>
                            <span className="badge bg-warning text-dark  p-1 fs-6">
                              {appointment.status}
                            </span>
                          </td>

                          <td>
                            <button className="btn btn-sm btn-outline-danger px-3">
                              Cancel
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
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
        </div>
      </div>
    </main>
  );
};

export default MyAllAppointments;
