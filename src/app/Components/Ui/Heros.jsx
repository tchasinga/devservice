
"use client"
import React, { useState, useEffect } from "react";
import myImgIsadded from "../Images/REdI.png";
import Image from "next/image";
import "./extension.css";
import SparklesText from "../../../app/Animation/magicui/SparklesText";

// Function to generate a random color in hex format
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Heros() {
  
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    // Function to change the background color every 3 seconds
    const interval = setInterval(() => {
      setBgColor(getRandomColor());
    }, 3000); // Change color every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-[200px] px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
        {/* New first div */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-blue-950 font-semibold text-lg md:text-xl">
            Welcome to dev service
          </p>
          <div className="flex flex-col justify-center text-4xl md:text-5xl text-slate-900 font-extrabold mt-2 first-letter:uppercase">
            <h1>We solve business</h1>
            <h1>Problems with</h1>
            <h1>
              <SparklesText
                className="text-4xl md:text-5xl"
                text="Technology"
              />
            </h1>
          </div>
          <div className="my-5 text-slate-900 font-normal text-sm">
            <p>Our performance is your success, our passion is</p>
            <p>Innovation, our expertise is unmatched, we get you</p>
            <p>More</p>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-4">
            <div className="bg-blue-900 text-slate-300 p-4 cursor-pointer duration-500 flex justify-center items-center border w-full md:w-1/2">
              <p>Get started</p>
            </div>
            <div className="bg-slate-900 text-slate-300 p-4 cursor-pointer duration-500 flex justify-center items-center border w-full md:w-1/2">
              <p>View services</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center myDirection">
          <div className="w-full relative">
            <div
              className="lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] top-[-3%] right-0 left-0 bottom-0 absolute z-[-9999] rounded-full"
              style={{
                backgroundColor: bgColor,
                transition: "background-color 1s ease",
              }}
            ></div>
            <Image src={myImgIsadded} alt="web services" />
          </div>
        </div>
      </div>
    </div>
  );
}
