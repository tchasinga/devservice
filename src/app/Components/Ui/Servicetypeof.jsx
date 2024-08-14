"use client";
import React from "react";
import AnimatedTooltipPreview from "../Ui/Tooltips";
import myDataobject from '../Data/Services.js'
import MarqueeDemo from "../Ui/MarqueeDemo";

export default function Servicetypeof() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto w-full overflow-hidden">
      <div className="flex flex-col justify-center pt-[100px]">
        <h1 className="text-slate-900 text-2xl font-bold">
          We provide solution on your bussness
          <hr className="mt-1 py-2 w-[150px]"/>
        </h1>
        
        <div className="flex items-center justify-around flex-wrap w-full">
            {/* Right index comments */}
        <div className="flex flex-col justify-center text-slate-900 font-medium">
          <p>
            Our mission is to leverage cutting-edge technology to bring your
            vision to life.
          </p>
          <p>
            We are committed to delivering a secure service with an intuitive
            and user-friendly interface.
          </p>
        </div>

        {/* Left index comments */}
        <div className="">
            <AnimatedTooltipPreview />
        </div>
        </div>

        {/* Displaying data  */}
        <div className="gridGeneral my-[50px]">
            {
                myDataobject.map((item) => (
                    <div key={item.id} className="flex justify-center items-center gap-2 m-2">
                       <div className="text-2xl bg-blue-700 p-2 rounded-full text-white">{item.MyIcons}</div>
                       <div className="flex flex-col justify-center">
                            <h1 className="text-slate-900 text-sm font-bold">{item.myTitle}</h1>
                            <p className="text-slate-900 text-xs first-letter:uppercase line-clamp-2">{item.Description}</p>
                       </div>
                    </div>
                ))
            }
        </div>

        {/* Adding testimonials...*/}
        <div className="text-slate-900 text-2xl justify-center flex-col flex py-[20px]">
          <h1>We made more than your expectation</h1>
          <p className="text-xs">Your imagination are your own limit</p>
        </div>
        
        <div className="py-[40px]">
        <MarqueeDemo />
        </div>
      </div>
    </div>
  );
}
