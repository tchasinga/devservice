import React from "react";

function About() {
  return (
    <div className="bg-black h-screen w-full" id="description">
      <div className="about-section h-[30vh] w-full relative bg-fixed">
        <div className="absolute inset-0 bg-sky-800 opacity-20"></div>
        <div className="relative flex justify-center items-center h-full w-full">
          <h1 className="text-white text-4xl font-semibold font-poppins font-sans">
            About Us
          </h1>
        </div>
      </div>
      {/* second section */}
      <div className="flex bg-white h-[30vh] w-full gap-5 justify-center items-center">
        <div className="w-[25%]">
          <h3 className="text-2xl text-center text-slate-900 font-poppins font-sans font-bold">
            Society Where There Is Understanding
          </h3>
        </div>
        <div className="w-[25%]">
          <p className="font-poppins font-sans">
            <span className="text-blue-950 font-poppins font-sans font-bold text-2xl text-medium">
              L
            </span>
            orem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            pariatur aliquid eveniet nesciunt? Mollitia doloremque, velit sed
            nihil suscipit rem est temporibus libero, accusantium aperiam ipsam
            sequi earum. Exercitationem, et!
          </p>
        </div>
        <div className="w-[25%]">
          {" "}
          <p className="font-poppins font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nesciunt id amet provident vitae accusamus maiores. Perferendis
            quidem quas expedita consequatur, voluptatum alias magni at sit
            atque in natus quisquam?
          </p>
        </div>
      </div>
      <div className="flex bg-white w-full h-[40vh] gap-[2%]">
        <div className="sectionA w-[49%] shadow-custom-dark"></div>
        <div className="sectionB w-[49%] shadow-custom-dark"></div>
      </div>
    </div>
  );
}

export default About;
