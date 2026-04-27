import React, { useContext } from "react";
import DoctorCard from "./DoctorCard";
import { DoctorContext } from "../Context/DoctorContext";

const DoctorList = () => {
  const { doctors, selectedDoctor, setSelectedDoctor } =
    useContext(DoctorContext);
  return (
    <div
      id="doctorlist"
      className="h-full flex flex-col rounded-xl overflow-y-auto"
    >
      <div className="sticky top-0 z-10 backdrop-blur-md bg-[#ecfeff]-300/70 px-3 py-2 text-center border-b-[#ecfeff]">
        <h1 className="!text-2xl !font-semibold !font-mono !text-gray-700 !px-3 !text-center">
          Doctors List
        </h1>
      </div>

      {doctors.map((doc) => (
        <DoctorCard
          name={doc.name}
          specialization={doc.specialization}
          experience={doc.experience}
          image={doc.image}
          onClick={() => setSelectedDoctor(doc)}
        />
      ))}
    </div>
  );
};

export default DoctorList;
