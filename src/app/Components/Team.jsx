import React from "react";

function Team() {
  return (
    <div className="w-full h-[40vh] flex flex-row gap-3 justify-center">
      <div className="w-[18%] h-[30vh] pt-12">
        <h1 className="font-poppins font-sans font-bold text-2xl">
          Meet Expert Team Members
        </h1>
        <p className="font-poppins font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="font-poppins font-sans bg-blue-900 shadow-lg mt-3 p-2 rounded-md text-white hover:bg-orange-500 hover:text-black hover:outline-1 hover:shadow-md">
          About Team Members{" "}
        </button>
      </div>
      <div className="w-[18%] h-[38vh] shadow-xl align-text-bottom">
        <div className=" Member1 w-full h-[30vh]"></div>
        <div className=" mb-0 flex justify-center text-center items-center flex-col mt-1">
          <h4 className="font-bold">Tracy Miranja</h4>
          <p>Full-stack developer</p>
        </div>
      </div>
      <div className="w-[18%] h-[38vh] shadow-lg">
        <div className=" Member2 w-full h-[30vh]"></div>
        <div className="flex justify-center flex-col items-center mt-1 ">
          <h4 className="font-bold">Tchasinga Asiwaju</h4>
          <p>Full-stack Developer</p>
        </div>
      </div>
      <div className="w-[18%] h-[38vh] shadow-lg">
        <div className=" Member3 w-full h-[30vh]"></div>
        <div className="flex justify-center flex-col items-center mt-1">
          <h4 className="font-bold">Oscar winrar</h4>
          <p>Digital Marketor</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
