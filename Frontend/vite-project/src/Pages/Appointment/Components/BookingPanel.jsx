import React from "react";
import Calender from "./Calender";
import TimeSlots from "./TimeSlots";

const BookingPanel = () => {
  return (
    <div className="h-auto w-full bg-blue-600">
      <Calender />
      <TimeSlots />
    </div>
  );
};

export default BookingPanel;
