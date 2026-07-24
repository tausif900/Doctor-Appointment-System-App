import React, { useEffect, useState } from "react";
import { api } from "../../api";

const TodaySchedule = () => {
  const [todaySchedule, setTodaySchedule] = useState(null);

  const fetchTodaysSchedule = async () => {
    try {
      const response = await api.get("/appointments/today-schedule");
      setTodaySchedule(response.data);
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
    fetchTodaysSchedule();
  }, []);

  return (
    <div className="container py-4">
      <h3
        className="fw-bold mb-4"
        style={{
          color: "#0f766e",
        }}
      >
        Today's Schedule
      </h3>

      {todaySchedule ? (
        todaySchedule.map((ts) => {
          return (
            <div
              className="card border-0 shadow-lg mt-2"
              style={{
                borderRadius: "12px",
              }}
            >
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h5
                      className="fw-bold mb-2"
                      style={{
                        color: "#0f766e",
                      }}
                    >
                      Patient Name: {ts.patientName}
                    </h5>

                    <p className="mb-1 text-muted">
                      <strong>Age:</strong> {ts.age}
                    </p>

                    <p className="mb-1 text-muted">
                      <strong>Gender:</strong> {ts.gender}
                    </p>

                    <p className="mb-1 text-muted">
                      <i className="bi bi-calendar-event me-2"></i>
                      {formatDate(ts.appointmentDate)}
                    </p>

                    <p className="mb-0 text-muted">
                      <i className="bi bi-clock me-2"></i>
                      {ts.appointmentTime}
                    </p>
                  </div>

                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <span
                      className="badge px-3 py-2"
                      style={{
                        background: "#198754",
                        fontSize: "14px",
                      }}
                    >
                      COMPLETE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
};

export default TodaySchedule;
