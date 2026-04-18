import React from "react";

const LeftOfBA = () => {
  return (
    <div className="h-full w-1/4">
      <div className="flex flex-start text-gray-600 font-mono text-xs">
        <h4>Choose Doctor</h4>
      </div>
      <div className="w-full h-45 border-2 rounded-xl">
        <div className="flex border-b-white">
          <div className="h-1/2 w-1/2  m-2 rounded overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-2 w-full">
            <h3 className="font-serif">Amanda Clara</h3>
            <div className="text-gray-500">
              <p>specialist | 12 years experience</p>
            </div>
            <div className="bg-gray-600 text-white text-center px-2 rounded w-1/2">
              <p>Pediatric</p>
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <button className="btn btn-success w-full ">Select Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default LeftOfBA;
