import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DoctorContext from "./Pages/Patient/BookingAppointment/Context/DoctorContext.jsx";

createRoot(document.getElementById("root")).render(
  <DoctorContext>
    <App />
  </DoctorContext>,
);
