import React, { useContext } from "react";
import DoctorCard from "./DoctorCard";
import { DoctorContext } from "../Context/DoctorContext";

const DoctorList = () => {
  const { doctors, selectedDoctor, setSelectedDoctor } =
    useContext(DoctorContext);
  return (
    <div
      id="doctorlist"
      className="h-auto w-full bg-green-300 rounded-xl overflow-y-auto"
    >
      <h1 className="!text-2xl !font-semibold !font-mono !text-black !px-3 !text-center">
        Doctors List
      </h1>
      {doctors.map((doc) => (
        <DoctorCard />
      ))}
    </div>
  );
};

export default DoctorList;
