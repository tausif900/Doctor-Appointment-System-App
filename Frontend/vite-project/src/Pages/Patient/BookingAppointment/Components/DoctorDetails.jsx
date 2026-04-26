import React from "react";

const DoctorDetails = () => {
  return (
    <div className="h-full w-full bg-amber-400 flex flex-col overflow-y-auto">
      <h1 className="!text-xl text-center">Doctor Details</h1>
      {/* Name with speciality */}
      <div className="flex bg-amber-100 h-[25%] mx-2 p-2">
        <div className="bg-red-300 h-full w-1/3 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="bg-yellow-300 w-100 mx-3 px-5">
          <h1>name</h1>
          <p>specialist</p>
          <p>Pediatrics</p>
        </div>
      </div>
      {/* Education & Certificate */}
      <div className="flex justify-between w-full bg-red-400 !px-2">
        <div className="bg-blue-300 w-1/2">
          <p>Education</p>
          <h4>Bsc.CS</h4>
        </div>
        <div className="bg-blue-300 w-1/2">
          <p>Certificate</p>
          <h4>Award</h4>
        </div>
      </div>
      {/* Availability */}
      <div className="bg-yellow-600">
        <p className="!px-2">Availability</p>
        <div className="flex justify-around">
          <h5>Online Consultation</h5>
          <h5>Offline at Doctaria Hospital,Mumbai</h5>
        </div>
      </div>
      {/* Days with time */}
      <div className="flex justify-around">
        <h4>Mon-Saturday</h4>
        <div>
          <h5>first time</h5>
          <h5>first time</h5>
        </div>
      </div>
      {/* Symptons */}
      <div className="px-2 bg-purple-400">
        <p>Symptons</p>
        <h5>Anxiety,......................</h5>
      </div>
      {/* Speciality Procedure */}
      <div className="px-2">
        <p>Speciality Procedure</p>
        <div className="flex flex-wrap justify-between">
          <p>Cognitive Behavioral Therapy (CBT)</p>
          <p>Family & Couples Therapy</p>
          <p>Supportive Psychotherapy</p>
          <p>Mindfulness-Based Stress Reduction (MBSR)</p>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="px-2 flex flex-col flex-1 overflow-hidden">
        <h5 className="font-semibold">Reviews</h5>

        <div id="review-scroll" className="flex-1 overflow-y-auto">
          <h6>name</h6>
          <p>Excellent</p>

          <h6>name</h6>
          <p>Excellent</p>

          <h6>name</h6>
          <p>Excellent</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
