import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Home from "./Pages/Patient/Home";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import PatientLayout from "./Layouts/PatientLayout";
import BookingPanel from "./Pages/Patient/BookingAppointment/Components/BookingPanel";
import AuthLayout from "./Layouts/AuthLayout";

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
    ],
  },
  {
    element: <PatientLayout />,
    children: [
      {
        path: "/book_appointment",
        element: <BookingPanel />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
