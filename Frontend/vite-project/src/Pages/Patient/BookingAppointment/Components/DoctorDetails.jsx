import React, { useContext } from "react";
import { DoctorContext } from "../Context/DoctorContext";

const DoctorDetails = () => {
  const { selectedDoctor } = useContext(DoctorContext);
  if (selectedDoctor === null) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Select a doctor to see details</p>
      </div>
    );
  }
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto">
      <h1 className="!text-2xl !font-semibold !font-mono !text-gray-700 !px-3 !text-center">Doctor Details</h1>
      {/* Name with speciality */}
      <div className="flex h-[25%] mx-2 p-2">
        <div className="h-full w-1/3 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={selectedDoctor.image}
          />
        </div>
        <div className="w-100 mx-3 px-5">
          <h1>{selectedDoctor.name}</h1>
          <p>specialist | {selectedDoctor.experience} years experience</p>
          <p>{selectedDoctor.specialization}</p>
        </div>
      </div>
      {/* Education & Certificate */}
      <div className="flex justify-between w-full !px-2">
        <div className="w-1/2">
          <p>Education</p>
          <h6>{selectedDoctor.education}</h6>
        </div>
        <div className="w-1/2">
          <p>Certificate</p>
          <h6>{selectedDoctor.certificate}</h6>
        </div>
      </div>
      {/* Availability */}
      <div>
        <p className="!px-2">Availability</p>
        <div className="flex justify-around">
          {selectedDoctor.availability.modes.map((mode, i) => {
            return <h5 key={i}>{mode}</h5>;
          })}
        </div>
      </div>
      {/* Days with time */}
      <div className="flex justify-around">
        <h4>{selectedDoctor.availability.days}</h4>
        <div>
          {selectedDoctor.availability.slots.map((slot, i) => {
            return <h5 key={i}>{slot}</h5>;
          })}
        </div>
      </div>
      {/* Symptons */}
      <div className="px-2">
        <p>Symptons</p>
        <h5>{selectedDoctor.symptoms.join(" , ")}</h5>
      </div>
      {/* Speciality Procedure */}
      <div className="px-2">
        <p>Speciality Procedure</p>
        <div className="flex flex-wrap justify-between">
          {selectedDoctor.procedures.map((procedure, i) => {
            return <p key={i}>{procedure}</p>;
          })}
        </div>
      </div>
      {/* Reviews Section */}
      <div className="px-2 flex flex-col flex-1 overflow-hidden">
        <h5 className="font-semibold">Reviews</h5>

        <div id="review-scroll" className="flex-1 overflow-y-auto">
          {selectedDoctor.reviews.map((rev) => {
            return (
              <div key={rev.id} className="mb-2">
                <h6 className="font-semibold">{rev.name}</h6>
                <p className="text-sm text-gray-600">{rev.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
