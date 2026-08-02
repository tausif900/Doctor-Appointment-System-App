import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { toast } from "react-toastify";
import { LoginContext } from "../../Context/LoginContext";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const [nextAppointment, setNextAppointment] = useState();

  const [lastConsultationDate, setLastConsultationDate] = useState();

  const [dashboard, setDashboard] = useState({});

  const { user } = useContext(LoginContext);

  const fetchNextAppointment = async () => {
    try {
      const response = await api.get(`appointments/patient-next-appointment`);
      console.log(response.data);
      if (!response.data || response.data.appointmentDate == null) {
        setNextAppointment(null);
      } else {
        setNextAppointment(response.data);
      }
    } catch (error) {
      console.log(error);
      setNextAppointment(null);
    }
  };

  const fetchLastConsultationDate = async () => {
    try {
      const response = await api.get(`appointments/last-consultation-date`);
      console.log(response.data);
      if (!response.data || response.data == null) {
        setLastConsultationDate(null);
      } else {
        setLastConsultationDate(response.data);
      }
    } catch (error) {
      console.log(error);
      setLastConsultationDate(null);
    }
  };

  const formatDate = (d) => {
    const date = new Date(d);
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

  const fetchDashboardDetails = async () => {
    try {
      const response = await api.get("/appointments/patient/dashboard-cards");
      console.log(response.data);
      setDashboard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNextAppointment();
    fetchDashboardDetails();
    fetchLastConsultationDate();
  }, []);

  return (
    <main
      className="min-vh-100 py-4"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef2ff 50%,#e0f2fe 100%)",
      }}
    >
      <div className="container-fluid">
        {/* Welcome Banner */}

        <div
          className="rounded-4 shadow-lg p-4 p-md-5 mb-4 text-white"
          style={{
            background: "linear-gradient(135deg,#0f766e,#14b8a6)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                Welcome Back,
                <span className="text-warning"> {user?.name} 👋</span>
              </h2>

              <p className="fs-5 opacity-75 mb-4">
                Manage appointments, monitor your healthcare and connect with
                trusted doctors from one place.
              </p>

              <button
                className="btn btn-light fw-semibold px-4"
                onClick={() => {
                  navigate(`/patient/doctors`);
                }}
              >
                <i className="bi bi-calendar2-plus-fill me-2"></i>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#e6fffa",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      color: "#0f766e",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">
                    {dashboard?.totalAppointments}
                  </h3>

                  <small className="text-muted">Total Appointments</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-person-badge-fill"
                    style={{
                      color: "#4338ca",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">
                    {dashboard?.doctorsConsulted}
                  </h3>

                  <small className="text-muted">Doctors Consulted</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-body  d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-calendar-event-fill"
                    style={{ fontSize: "30px", color: "#16a34a" }}
                  ></i>
                </div>

                {nextAppointment ? (
                  <div className="d-flex flex-column">
                    <small className="text-muted">
                      Your Upcoming Appointment is on
                    </small>
                    <h1 className="fs-4 mb-1">
                      {formatDate(nextAppointment.appointmentDate)}
                    </h1>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <small className="text-muted">
                      Book an appointment to see it here.
                    </small>
                    <h4 className="fs-semi-bold text-danger">
                      No Upcoming Appointment
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow h-100 rounded-4">
              <div className="card-body  d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#e9f8ef",
                  }}
                >
                  <i
                    className="bi bi-calendar-event-fill"
                    style={{ fontSize: "30px", color: "#16a34a" }}
                  ></i>
                </div>

                <div className="ms-4">
                  {lastConsultationDate ? (
                    <>
                      <h6 className="mb-0 text-secondary mt-2">
                        Last Consultation was on
                      </h6>
                      <h4 className="fw-bold mb-1">
                        {formatDate(lastConsultationDate.appointmentDate)}
                      </h4>
                    </>
                  ) : (
                    <>
                      <h5
                        className="fs-bold mb-1 fs-4"
                        style={{ color: "#dc3545" }}
                      >
                        No Consultation Yet
                      </h5>
                      <small className="text-muted">
                        Complete your first appointment to see it here.
                      </small>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="row g-4 mb-4">
          <div className="col-lg-3">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#e6fffa",
                  }}
                >
                  <i
                    className="bi bi-search-heart-fill"
                    style={{
                      fontSize: "40px",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">Find Doctors</h4>

                <p className="text-muted">
                  Search doctors by specialization and instantly book
                  appointments.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                  }}
                  onClick={() => navigate("/patient/doctors")}
                >
                  <i className="bi bi-calendar2-plus-fill me-2"></i>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-calendar-week-fill"
                    style={{
                      fontSize: "40px",
                      color: "#4338ca",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">My Appointments</h4>

                <p className="text-muted">
                  View upcoming, completed and cancelled appointments.
                </p>

                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/patient/my-appointments")}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#fff7ed",
                  }}
                >
                  <i
                    className="bi bi-person-lines-fill"
                    style={{
                      fontSize: "40px",
                      color: "#ea580c",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">My Profile</h4>

                <p className="text-muted">
                  Update your personal details and manage your account.
                </p>

                <button
                  className="btn btn-warning text-white px-4"
                  onClick={() => navigate("/patient/update-profile")}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    background: "#17b958",
                  }}
                >
                  <i
                    className="bi bi-file-earmark-medical-fill"
                    style={{
                      fontSize: "40px",
                      color: "#2d610f",
                    }}
                  ></i>
                </div>

                <h4 className="fw-bold">Medical Record</h4>

                <p className="text-muted">
                  View your diagnosis, medicines, medical tests and doctor's
                  advice.
                </p>

                <button
                  className="btn btn-success text-white px-4"
                  onClick={() => navigate("/view-medical-report")}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View Record
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment & Health Tips */}
        <div className="row g-4 mb-4">
          {/* Upcoming Appointment */}

          <div className="col-lg-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-calendar-check-fill text-success me-2"></i>
                  Upcoming Appointment
                </h4>
              </div>

              <div className="card-body">
                <div className="row g-4">
                  <div className="col-md-6">
                    <small className="text-muted">Doctor</small>
                    <h6 className="fw-bold mt-1">Dr. John Doe</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Specialization</small>
                    <h6 className="fw-bold mt-1">Cardiologist</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Appointment Date</small>
                    <h6 className="fw-bold mt-1">12 July 2026</h6>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted">Appointment Time</small>
                    <h6 className="fw-bold mt-1">10:30 AM</h6>
                  </div>

                  <div className="col-12 d-flex flex-wrap gap-3 mt-3">
                    <button className="btn btn-outline-danger">
                      <i className="bi bi-x-circle-fill me-2"></i>
                      Cancel Appointment
                    </button>

                    <button className="btn btn-outline-success">
                      <i className="bi bi-chat-dots-fill me-2"></i>
                      Contact Doctor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Tips */}

          <div className="col-lg-3">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-heart-pulse-fill text-danger me-2"></i>
                  Health Tips
                </h4>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-droplet-fill text-primary me-2"></i>
                    Drink at least 2–3 litres of water daily.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-egg-fried text-warning me-2"></i>
                    Eat a balanced and healthy diet.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-activity text-success me-2"></i>
                    Exercise for at least 30 minutes every day.
                  </li>

                  <li className="list-group-item">
                    <i className="bi bi-moon-stars-fill text-secondary me-2"></i>
                    Sleep 7–8 hours to stay healthy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PatientDashboard;
