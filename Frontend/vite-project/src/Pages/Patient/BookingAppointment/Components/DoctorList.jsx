import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div
      id="doctorlist"
      className="h-auto w-full bg-green-300 rounded-xl overflow-y-auto"
    >
      <DoctorCard />
    </div>
  );
};

export default DoctorList;
