import React from "react";
import LeftOfBA from "./LeftOfBA";

const BookingAppointment = () => {
  const doctors = [
    {
      id: 1,
      name: "Amanda Clara",
      specialization: "Pediatric",
      experience: 12,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 2,
      name: "Dr. Raj Mehta",
      specialization: "Cardiologist",
      experience: 15,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Dr. Neha Sharma",
      specialization: "Dermatologist",
      experience: 8,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Dr. Arjun Patel",
      specialization: "Orthopedic",
      experience: 10,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Heading */}
      <div>
        <h3 className="px-4 py-3 text-lg font-semibold sm:px-5 sm:text-xl">
          Book Appointment
        </h3>
      </div>

      {/* Main div */}
      {/* Left div for Doctors */}
      <div className="flex h-auto min-h-[92%] flex-col gap-4 px-3 pb-4 sm:px-4 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col gap-3 lg:w-1/2 xl:w-5/12">
          <div className="font-mono text-sm text-gray-400 sm:text-base">
            <h2>Choose Doctor</h2>
          </div>
          {doctors.map((doc, idx) => (
            <LeftOfBA
              key={doc.id ?? idx}
              name={doc.name}
              specialization={doc.specialization}
              experience={doc.experience}
              image={doc.image}
            />
          ))}
        </div>

        {/* Center  for individual doctors details*/}
        <div className="w-full lg:min-h-full lg:flex-1"></div>

        {/* Calender to select date for Appointment */}
        <div className="w-full lg:min-h-full lg:flex-1"></div>
      </div>
    </div>
  );
};

export default BookingAppointment;
