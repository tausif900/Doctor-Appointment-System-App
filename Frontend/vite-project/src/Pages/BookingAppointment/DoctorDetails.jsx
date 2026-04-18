import React from "react";

const DoctorDetails = ({ doctor }) => {
  if (!doctor) {
    return (
      <p className="text-gray-400 text-4xl flex justify-center items-center">
        Select A Doctor
      </p>
    );
  }
  return (
    <div className="w-full rounded-xl bg-white shadow-md overflow-hidden mt-4">
      <img src={doctor.image} className="w-32 m-4 rounded-lg" />
      <h4 className="text-5xl font-semibold ml-5">{doctor.name}</h4>
      <p className="text-gray-500 ml-5 text-2xl">
        Specialization: {doctor.specialization}
      </p>
      <p className="ml-5 font-bold text-xl">
        {doctor.experience} years experience
      </p>
    </div>
  );
};

export default DoctorDetails;
