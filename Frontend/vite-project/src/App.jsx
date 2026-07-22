import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import AuthLayout from "./Layouts/AuthLayout";
import PatientProfile from "./Pages/Patient/PatientProfile";
import { ToastContainer } from "react-toastify";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
import Home from "./Components/Home";
import PatientDashboard from "./Pages/Patient/PatientDashboard";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import DoctorList from "./Pages/Doctor/DoctorList";
import BookAppointment from "./Pages/Patient/BookAppointment";
import MyAllAppointments from "./Pages/Patient/MyAllAppointments";
import DoctorAllAppointments from "./Pages/Doctor/DoctorAllAppointments";
import { LoginProvider } from "./Context/LoginContext";
import UpdateDoctor from "./Pages/Doctor/UpdateDoctor";
import ManageSlots from "./Pages/Doctor/ManageSlots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/patient-profile/:userId",
        element: <PatientProfile />,
      },
      {
        path: "/doctor-profile/:userId",
        element: <DoctorProfile />,
      },
      {
        path: "/patient-dashboard",
        element: <PatientDashboard />,
      },
      {
        path: "/doctor-dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/patient/doctors",
        element: <DoctorList />,
      },
      {
        path: "/patient/book-appointment/:docId",
        element: <BookAppointment />,
      },
      {
        path: "/patient/my-appointments",
        element: <MyAllAppointments />,
      },
      {
        path: "/doctor/my-appointments/:docId",
        element: <DoctorAllAppointments />,
      },
      {
        path: "/doctor/update-profile",
        element: <UpdateDoctor />,
      },
      {
        path: "/doctor/manage-slots",
        element: <ManageSlots />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <LoginProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </LoginProvider>
    </>
  );
}

export default App;
