import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState({});
  const [dashboard, setDashboard] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  const fetchDoctor = async () => {
    try {
      const response = await api.get(`/doctors/${user?.doctor.id}`);
      setDoctor(response.data);
    } catch (error) {}
  };

  const fetchDashboardDetails = async () => {
    try {
      const response = await api.get("/appointments/doctors/dashboard-cards");
      console.log(response.data);
      setDashboard(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDoctor();
    fetchDashboardDetails();
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
                <span className="text-warning"> {user?.name} 👨‍⚕️</span>
              </h2>

              <p className="fs-5 opacity-75 mb-4">
                Manage appointments, patients, prescriptions and your daily
                schedule from one place.
              </p>

              <button className="btn btn-light fw-semibold px-4">
                <i className="bi bi-calendar2-check-fill me-2"></i>
                Today's Schedule
              </button>
            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <img
                src={`http://localhost:8080/doctors/get-image/${user?.doctor.docId}`}
                alt="Doctor"
                className="rounded-circle border border-4"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                  borderColor: "#0f766e",
                }}
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="card border-0 shadow rounded-4 my-4">
          <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h5 className="fw-bold mb-1">Next Appointment</h5>
              <p className="text-muted mb-0">Rahul Sharma - 10:00 AM (Today)</p>
            </div>

            <div className="text-end">
              <span className="badge bg-success fs-6">In 45 mins</span>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
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
                    {dashboard?.todayAppointments}
                  </h3>

                  <small className="text-muted">Today's Appointments</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
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
                    className="bi bi-people-fill"
                    style={{
                      color: "#4338ca",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">{dashboard?.totalPatients}</h3>

                  <small className="text-muted">Total Patients</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#ecfdf5",
                  }}
                >
                  <i
                    className="bi bi-check-circle-fill"
                    style={{
                      color: "#16a34a",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">{dashboard?.completedVisits}</h3>

                  <small className="text-muted">Completed Visits</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#fff7ed",
                  }}
                >
                  <i
                    className="bi bi-currency-rupee"
                    style={{
                      color: "#ea580c",
                      fontSize: "30px",
                    }}
                  ></i>
                </div>

                <div>
                  <h3 className="fw-bold mb-0">
                    ₹ {dashboard?.monthlyEarnings}
                  </h3>

                  <small className="text-muted">Monthly Earnings</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row g-4">
          {/* Manage Slots */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#ecfdf5",
                  }}
                >
                  <i
                    className="bi bi-calendar-plus-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#16a34a",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Manage Slots</h3>

                <p className="text-muted mb-4">
                  Create, update and manage your available appointment slots for
                  patients.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#16a34a",
                  }}
                  onClick={() => navigate("/doctor/manage-slots")}
                >
                  <i className="bi bi-calendar-plus me-2"></i>
                  Manage
                </button>
              </div>
            </div>
          </div>
          {/* Today's Schedule */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#dff7f3",
                  }}
                >
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Today's Schedule</h3>

                <p className="text-muted mb-4">
                  View today's accepted appointments and manage your daily
                  schedule.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                  }}
                  onClick={() => navigate("/doctor/today's-schedule")}
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Patient Appointments */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#e8ebff",
                  }}
                >
                  <i
                    className="bi bi-people-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#4f46e5",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Patient Appointments</h3>

                <p className="text-muted mb-4">
                  Review appointment requests and manage patient consultations.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#4f46e5",
                  }}
                  onClick={() => navigate(`/doctor/my-appointments`)}
                >
                  <i className="bi bi-list-check me-2"></i>
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* My Profile */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-person-vcard-fill"
                    style={{
                      fontSize: "2rem",
                      color: "#2563eb",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">My Profile</h3>

                <p className="text-muted mb-4">
                  Update your professional profile and availability information.
                </p>

                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/doctor/update-profile")}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Appointment History */}

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#fff3e8",
                  }}
                >
                  <i
                    className="bi bi-clock-history"
                    style={{
                      fontSize: "2rem",
                      color: "#f97316",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Appointment History</h3>

                <p className="text-muted mb-4">
                  View completed and cancelled consultation records.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#f59e0b",
                  }}
                  onClick={() => navigate("/appointment-history")}
                >
                  <i className="bi bi-clock-history me-2"></i>
                  History
                </button>
              </div>
            </div>
          </div>

          {/* Rejected Appointment */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#ffeaea",
                  }}
                >
                  <i
                    className="bi bi-x-circle"
                    style={{
                      fontSize: "2rem",
                      color: "#dc3545",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Rejected Appointments</h3>

                <p className="text-muted mb-4">
                  View all rejected appointment requests and their details.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#dc3545",
                  }}
                  onClick={() => navigate("/rejected-appointment")}
                >
                  <i className="bi bi-x-circle me-2"></i>
                  Rejected
                </button>
              </div>
            </div>
          </div>

          {/* View Records */}
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body text-center p-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#e6fffa",
                  }}
                >
                  <i
                    className="bi bi-file-earmark-medical-fill"
                    style={{
                      fontSize: "38px",
                      color: "#0f766e",
                    }}
                  ></i>
                </div>

                <h3 className="fw-bold mb-3">Medical Records</h3>

                <p className="text-muted mb-4">
                  View and manage medical records of all patients whose
                  appointments have been completed.
                </p>

                <button
                  className="btn text-white px-4"
                  style={{
                    background: "#0f766e",
                    borderRadius: "10px",
                    fontWeight: "600",
                  }}
                  onClick={() =>
                    navigate("/doctor/medical-records-of-distinct-patinet")
                  }
                >
                  <i className="bi bi-eye-fill me-2"></i>
                  View Medical Records
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoctorDashboard;
