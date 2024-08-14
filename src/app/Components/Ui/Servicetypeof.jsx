"use client";
import React from "react";
import AnimatedTooltipPreview from "../Ui/Tooltips";
import myDataobject from '../Data/Services.js'

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
        <div className="">
            {
                myDataobject.map((item) => {
                    <div key={item.id} className="">
                        <p>{item.MyIcons}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
}
