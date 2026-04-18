import React from "react";

const LeftOfBA = ({ name, specialization, experience, image }) => {
  return (
    <div className="h-full w-full">
      <div className="group w-full rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col sm:flex-row">
          <div className="m-2 h-44 w-auto overflow-hidden rounded sm:h-28 sm:w-28 md:h-32 md:w-32">
            <img
              src={image}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="w-full p-3 sm:p-2 md:p-3">
            <h3 className="font-serif text-lg font-semibold sm:text-xl">
              {name}
            </h3>
            <div className="text-gray-500">
              <p className="text-sm sm:text-base">
                specialist | {experience} years experience
              </p>
            </div>
            <div className="mt-2 w-fit rounded bg-gray-600 px-3 py-1 text-center text-sm text-white sm:text-base">
              <p>{specialization}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center px-2 pb-3 sm:px-3">
          <button className="btn btn-success w-full transition-all duration-200 hover:scale-[1.02] active:scale-95">
            Select Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftOfBA;
