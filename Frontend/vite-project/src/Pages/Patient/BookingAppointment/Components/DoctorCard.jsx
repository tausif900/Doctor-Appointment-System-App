import React from "react";

const DoctorCard = () => {
  return (
    <div className="px-2">
      <div>
        <h1 className="!text-2xl !font-semibold !font-mono !text-black !px-3 !text-center">
          Doctors List
        </h1>
        <div className="p-2 rounded-2xl bg-green-200 border-gray-500 shadow-2xl drop-shadow-xl text-shadow-2xs">
          <div className="flex justify-center items-center gap-3 border-b-2">
            <div className="h-30 w-30 rounded-full overflow-hidden">
              <img
                className="object-cover"
                src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-female-doctor-portrait-in-white-png-image_15971053.png"
              />
            </div>
            <div className="text-center">
              <h3>Tausif Ansari</h3>
              <p className="text-gray-600">specialist | 12 years experience</p>
              <p className="bg-green-300 rounded-xl">Pediatrics</p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button className="bg-green-500 w-full px-2 py-2 !rounded-2xl font-semibold !text-xl active:scale-95">
              Select Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
