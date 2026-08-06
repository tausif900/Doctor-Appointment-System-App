import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DistinctPatientCards = () => {
  const [patientDetails, setPatientDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPatient, setFilteredPatient] = useState([]);
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const fetchDistinctPatient = async () => {
    try {
      const response = await api.get("/appointments/doctor/distinct-patients");
      console.log(response.data);
      setPatientDetails(response.data);
      setFilteredPatient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPatient = (name) => {
    const searchedPatient = patientDetails.filter((pd) =>
      pd.patientName.toLowerCase().includes(name.toLowerCase()),
    );
    console.log(searchedPatient);
    setFilteredPatient(searchedPatient);
  };

  useEffect(() => {
    fetchDistinctPatient();
  }, []);

  return (
    <div
      className="container-fluid py-4"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Heading */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h3 className="fw-bold" style={{ color: "#0f766e" }}>
          <i className="bi bi-people-fill me-2"></i>
          Medical Records Of Patients
        </h3>
        {/* 
        <span className="badge bg-success fs-6 px-3 py-2 ms-5">Total Patients</span> */}
      </div>

      {/* Search */}
      {filteredPatient.length > 0 ? (
        <div>
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    background: "#0f766e",
                    color: "white",
                    border: "none",
                  }}
                >
                  <i className="bi bi-search"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Patient..."
                  style={{
                    border: "1px solid #0f766e",
                    boxShadow: "none",
                  }}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    searchPatient(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Patient Cards */}

          <div className="row g-4">
            {/* Single Card */}

            {filteredPatient.map((patientDetail) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div
                    className="card border-0 shadow h-100"
                    style={{
                      borderRadius: "18px",
                    }}
                  >
                    <div className="card-body text-center">
                      <h4 className="fw-bold">{patientDetail.patientName}</h4>

                      <hr />

                      <p className="mb-2">
                        <strong>Age :</strong> {patientDetail.age} years
                      </p>

                      <p className="mb-2">
                        <strong>Gender :</strong> {patientDetail.gender}
                      </p>

                      <p className="mb-2">
                        <strong>Blood Group :</strong>{" "}
                        {patientDetail.bloodGroup}
                      </p>

                      <p className="mb-4">
                        <strong>City :</strong> {patientDetail.city}
                      </p>

                      <button
                        className="btn text-white w-100"
                        style={{
                          background: "#0f766e",
                          borderRadius: "10px",
                        }}
                        onClick={() =>
                          navigate(
                            `/all-medical-records/${patientDetail.patientId}`,
                          )
                        }
                      >
                        <i className="bi bi-file-earmark-medical me-2"></i>
                        View Medical History
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-5">
          <i
            className="bi bi-person-x-fill"
            style={{
              fontSize: "70px",
              color: "#6c757d",
            }}
          ></i>

          <h4 className="mt-3 text-muted">No Patients Found</h4>

          <p className="text-secondary">Completed patients will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default DistinctPatientCards;
