"use client";
import React, { useState } from "react";
import projectmanager from "../Data/Upworks";
import Image from "next/image";

export default function Website() {
  const [changeNameWhileIsHover, setChangeNameWhileIsHover] = useState("Live");

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const handleMouseOver = () => {
    setChangeNameWhileIsHover("Just click");
  };

  const handleMouseLeave = () => {
    setChangeNameWhileIsHover("Live");
  };

  return (
    <div>
      <div className="gridGeneralY">
        {projectmanager.slice(0, 5).map((item) => (
          <div key={item.id} className="flex-col flex justify-center items-center">
            <div className="w-full h-full flex justify-center my-3">
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center ">
              <div className="my-1 flex text-xl text-slate-900 font-bold">
                <h1>{item.title}</h1>
              </div>
              <div className="mb-2 flex flex-col text-slate-800">
                <p className="line-clamp-3">{item.details}</p>
              </div>
              <div className="flex flex-wrap justify-start items-start gap-2">
                {techStackToArray(item.techStack).map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 bg-slate-200 text-slate-800 px-4 text-sm py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end items-end">
                <div
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  className="flex justify-center items-center font-semibold hover:text-white bg-slate-200 p-2 mt-2 rounded-full w-[40%] hover:bg-black duration-700 cursor-pointer"
                >
                  <a href={item.live} className="w-full text-center">
                    {changeNameWhileIsHover}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}