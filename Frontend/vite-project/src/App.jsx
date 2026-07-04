import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import PatientLayout from "./Layouts/PatientLayout";
import AuthLayout from "./Layouts/AuthLayout";
import PatientProfile from "./Pages/Patient/PatientProfile";
import { ToastContainer } from "react-toastify";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
import Home from "./Components/Home";
import PatientDashboard from "./Pages/Patient/PatientDashboard";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
