import React from "react";

function Team() {
  return (
    <div className="w-[100%] h-fit flex flex-col gap-3 justify-center md:flex-row md:h-[40vh] mb-10">
      <div className=" w-[100%] md:w-[18%] h-[30vh] pt-12 flex justify-center items-center flex-col md:justify-start md:items-start">
        <h1 className="font-poppins font-sans font-bold text-2xl">
          Meet Expert Team Members
        </h1>
        <p className="font-poppins font-sans">
          passionate professionals driven by innovation, dedicated to delivering
          top-tier IT solutions that transform your vision into reality
        </p>
        <button className="font-poppins font-sans bg-blue-900 shadow-lg mt-3 p-2 rounded-md text-white hover:bg-orange-500 hover:text-black hover:outline-1 hover:shadow-md">
          About Team Members{" "}
        </button>
      </div>
      <div className=" w-[100%] md:w-[18%] h-fit md:h-fit shadow-xl align-text-bottom">
        <div className=" Member1 w-full h-[50vh] md:h-[30vh]"></div>
        <div className=" mb-0 flex justify-center text-center items-center flex-col mt-1 p-5">
          <h4 className="font-bold">Tracy Miranja</h4>
          <p className="font-poppins font-sans">Full-stack developer</p>
        </div>
      </div>
      <div className=" w-[100%] md:w-[18%] h-fit md:h-fit  shadow-lg">
        <div className=" Member2 w-full h-[50vh] md:h-[30vh]"></div>
        <div className="flex justify-center flex-col items-center mt-1 p-5 ">
          <h4 className="font-bold">Tchasinga Asiwaju</h4>
          <p className="font-poppins font-sans">Full-stack Developer</p>
        </div>
      </div>
      <div className="w-[100%] md:w-[18%] h-fit md:h-fit  shadow-lg">
        <div className=" Member3 w-full h-[50vh] md:h-[30vh]"></div>
        <div className="flex justify-center flex-col items-center mt-1 p-5">
          <h4 className="font-bold">Oscar winrar</h4>
          <p className="font-poppins font-sans">Digital Marketor manager</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
