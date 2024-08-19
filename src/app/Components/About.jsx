import React from "react";
import "./Ui/about.css";

function About() {
  return (
    <div className="bg-black h-fit w-full " id="#description">
      <div className="about-section h-[30vh] w-full relative bg-fixed">
        <div className="absolute inset-0 bg-sky-800 opacity-20"></div>
        <div className="relative flex justify-center items-center h-full w-full">
          <h1 className="text-white text-4xl font-semibold font-poppins font-sans">
            About Us
          </h1>
        </div>
      </div>
      {/* second section */}
      <div className="second flex bg-white h-fit sm:h-[30vh] w-full gap-5 justify-center flex-col items-center sm:flex-row lg:h-fit">
        <div className="w-[90%] h-fit mt-4 md:w-[25%]">
          <h3 className="text-2xl text-center text-slate-900 font-poppins font-sans font-bold sm:text-blue-600">
            Where innovation meets excellence in the digital realm
          </h3>
        </div>
        <div className=" w-[90%] p-2 md:w-[30%] md:h-fit">
          <p className="font-poppins font-sans">
            <span className="text-blue-950 font-poppins font-sans font-bold text-2xl text-medium">
              W
            </span>
            e are a dynamic IT solutions company dedicated to turning your ideas
            into reality. Whether you need cutting-edge web development,
            seamless app experiences, or stunning UI designs that captivate
            users, our team of experts is here to deliver. But that’s not
            all—our services extend beyond development. We empower your brand
            through
          </p>
        </div>
        <div className="w-[90%] p-2 md:w-[30%] md:h-fit">
          {" "}
          <p className="font-poppins font-sans">
            strategic digital marketing and branding, ensuring you stand out in
            a crowded market. Plus, our professional training programs equip
            your team with the skills needed to thrive in today’s tech-driven
            world. At DevService we don’t just offer services; we create lasting
            partnerships that drive your business forward. Choose us, and let’s
            build something extraordinary together.
          </p>
        </div>
      </div>
      <div className="flex bg-white flex-col h-fit w-[100%] md:h-[40vh] md:flex-row gap-[2%]">
        <div className="sectionA w-full h-[40vh] md:w-[49%] shadow-custom-dark mt-5"></div>
        <div className="sectionB w-full h-[40vh] md:w-[49%] shadow-custom-dark mt-5"></div>
      </div>
    </div>
  );
}

export default About;
