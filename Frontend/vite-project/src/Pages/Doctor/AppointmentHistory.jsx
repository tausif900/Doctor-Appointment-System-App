import React, { useEffect, useState } from "react";
import { api } from "../../api";

const AppointmentHistory = () => {
  const [appointmentHistory, setAppointmentHistory] = useState(null);

  const fetchAppointmentHistory = async () => {
    try {
      const response = await api.get("/appointments/appointment-history");
      console.log(response.data);
      setAppointmentHistory(response.data);
    } catch (error) {}
  };

  const formatDate = (appointmentDate) => {
    const date = new Date(appointmentDate);
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
    fetchAppointmentHistory();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0 fw-bold text-primary">
            <i className="bi bi-clock-history me-2"></i>
            Appointment History
          </h4>

          <span className="badge bg-success fs-6">
            Total: {appointmentHistory.length}
          </span>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="text-center">Patient Id</th>
                  <th className="text-center">Patient</th>
                  <th className="text-center">Age</th>
                  <th className="text-center">Gender</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Time</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {/* Map Here */}
                {appointmentHistory ? (
                  appointmentHistory.map((a) => {
                    return (
                      <tr key={a.patientId}>
                        <td className="text-center">{a.patientId}</td>

                        <td className="text-center">
                          <div className="fw-semibold">{a.patientName}</div>
                        </td>

                        <td className="text-center">{a.age}</td>

                        <td className="text-center">{a.gender}</td>

                        <td className="text-center">
                          {formatDate(a.appointmentDate)}
                        </td>

                        <td className="text-center">{a.appointmentTime}</td>

                        <td className="text-center">
                          <span className="badge bg-success px-3 py-2">
                            {a.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "80vh" }}
                  >
                    <div className="text-center">
                      <div
                        className="spinner-border text-primary"
                        style={{ width: "4rem", height: "4rem" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>

                      <h5 className="mt-4 fw-semibold text-secondary">
                        Loading Appointment History...
                      </h5>

                      <p className="text-muted mb-0">
                        Please wait while we fetch your records.
                      </p>
                    </div>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
