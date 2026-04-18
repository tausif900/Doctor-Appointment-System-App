import React, { useState } from "react";
import DoctorsList from "./DoctorsList";
import DoctorDetails from "./DoctorDetails";
import TimeSlots from "./TimeSlots";

const BookingAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
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
    {
      id: 5,
      name: "Dr. Priya Nair",
      specialization: "Gynecologist",
      experience: 11,
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 6,
      name: "Dr. Rohit Verma",
      specialization: "Neurologist",
      experience: 14,
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      id: 7,
      name: "Dr. Sneha Kapoor",
      specialization: "Dentist",
      experience: 7,
      image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      id: 8,
      name: "Dr. Vikram Singh",
      specialization: "General Physician",
      experience: 9,
      image: "https://randomuser.me/api/portraits/men/60.jpg",
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
      <div className="grid h-auto min-h-[92%] gap-4 px-3 pb-4 sm:px-4 grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr]">
        <div className="flex w-full flex-col gap-3 ">
          <div className="font-mono text-sm text-gray-400 sm:text-base">
            <h2>Choose Doctor</h2>
          </div>
          {doctors.map((doc, idx) => (
            <DoctorsList
              key={doc.id ?? idx}
              {...doc}
              onSelect={() => setSelectedDoctor(doc)}
            />
          ))}
        </div>

        {/* Center  for individual doctors details*/}
        <div className="w-full lg:min-h-full">
          <div className="font-mono text-sm text-gray-400 sm:text-base">
            <h2>Doctor Details</h2>
          </div>
          <DoctorDetails doctor={selectedDoctor} />
        </div>

        {/* Calender to select date for Appointment */}
        <div className="w-full lg:min-h-full">
          <TimeSlots />
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
