import React from "react";

function About() {
  return (
    <div className="bg-black h-screen w-full">
      <div className="about-section h-[50vh] w-full relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex justify-center items-center h-full w-full">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
