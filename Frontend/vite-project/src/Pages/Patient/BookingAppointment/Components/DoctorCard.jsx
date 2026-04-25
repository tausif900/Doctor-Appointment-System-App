import React from "react";

const DoctorCard = ({ name, specialization, experience, image }) => {
  return (
    <div className="px-2 mt-2">
      <div>
        <div className="p-2 mb-3 rounded-2xl border-gray-500 shadow-2xl drop-shadow-xl text-shadow-2xs hover:shadow-lg hover:scale-[1.01] transition">
          <div className="flex justify-center items-center gap-3 border-b-2">
            <div className="h-30 w-30 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src={image} />
            </div>
            <div className="text-center">
              <h3>{name}</h3>
              <p className="text-gray-600">
                specialist | {experience} years experience
              </p>
              <p className="bg-green-300 rounded-xl">{specialization}</p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button className="bg-[#86f795] w-full px-2 py-2 !rounded-2xl font-semibold !text-xl active:scale-95">
              Select Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
