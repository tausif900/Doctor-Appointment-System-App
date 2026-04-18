import React from "react";
import LeftOfBA from "./LeftOfBA";

const BookingAppointment = () => {
  return (
    <div className="h-screen w-screen">
      {/* Heading */}

      <div>
        <h3 className="px-5 py-2">Book Appointment</h3>
      </div>
      {/* Main div */}

      <div className="h-[92%] pl-2 flex">
        {/* Left div for Doctors */}
        <LeftOfBA />
        {/* Center  for individual doctors details*/}
        <div></div>
        {/* Calender to select date for Appointment */}
        <div></div>
      </div>
    </div>
  );
};

export default BookingAppointment;
