import React from "react";

function Team() {
  return (
    <div className="w-full h-[40vh] flex flex-row gap-3 justify-center">
      <div className="w-[18%] h-[30vh]">
        <h1 className="font-poppins font-sans font-bold text-2xl">
          Meet Expert Team Members
        </h1>
        <p className="font-poppins font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="font-poppins font-sans bg-blue-900 mt-3 p-2 rounded-md text-white hover:bg-inherit hover:text-black hover:outline-1 hover:shadow-md">
          About Team Members{" "}
        </button>
      </div>
      <div className="w-[18%] h-[38vh] shadow-lg"></div>
      <div className="w-[18%] h-[38vh] shadow-lg"></div>
      <div className="w-[18%] h-[38vh] shadow-lg"></div>
    </div>
  );
}

export default Team;
