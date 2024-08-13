import React from "react";
import myImgIsadded from "../Images/REdI.png";
import Image from "next/image";
import "./extension.css";
import ShimmerButton from "../../../app/Animation/magicui/ShimmerButtonDemo";

export default function Heros() {
  return (
    <div className="relative w-full py-[200px] px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto onrespo">
        {/* New first div */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-blue-950 font-semibold text-lg md:text-xl">
            Welcome to Dev-Service
          </p>
          <div className="flex flex-col justify-center text-4xl md:text-5xl text-slate-900 font-extrabold mt-2 first-letter:uppercase">
            <h1>We solve business</h1>
            <h1>Problems with</h1>
            <h1>Technology</h1>
          </div>
          <div className="my-5 text-slate-900 font-normal text-sm md:text-base">
            <p>Our performance is your success, our passion is</p>
            <p>Innovation, our expertise is unmatched, we get you</p>
            <p>More</p>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-4">
         
          <div className="bg-blue-900 text-slate-300 p-4 cursor-pointer duration-500 flex justify-center items-center border w-full md:w-1/2">
              <p>Get stared</p>
            </div>

            <div className="bg-slate-900 text-slate-300 p-4 cursor-pointer duration-500 flex justify-center items-center border w-full md:w-1/2">
              <p>View services</p>
            </div>
          </div>
        </div>

        {/* Second div is here */}
        <div className="flex  justify-center items-center">
          <div className="w-full relative">
            <div className="w-[500px] h-[500px] top-[-3%] right-0 left-0  bottom-0 absolute z-[-9999] rounded-full bg-green-700"></div>
            <Image src={myImgIsadded} />
          </div>
        </div>
      </div>
    </div>
  );
}
