import React, { useContext } from "react";
import DoctorCard from "./Components/DoctorCard";
import DoctorDetails from "./Components/DoctorDetails";
import BookingPanel from "./Components/BookingPanel";
import DoctorList from "./Components/DoctorList";

const BookingAppointment = () => {
  return (
    <div
      className="h-screen w-full custom-bg flex flex-col "
    >
      <h1 className="!font-bold !text-green-500 !text-2xl text-center">
        Choose and Book Doctors for Appointment
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-3 px-2 flex-1 overflow-hidden">
        <DoctorList />
        <DoctorDetails />
        <BookingPanel />
      </div>
    </div>
  );
};

export default BookingAppointment;
