import React from "react";
import projectmanager from "../Data/Upworks";
import Image from "next/image";

export default function Website() {
  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  return (
    <div>
      <div className="gridGeneralY">
        {projectmanager.slice(0, 5).map((item) => {
          return (
            <div
              key={item.id}
              className="flex-col flex justify-center items-center"
            >
              <div className="w-full h-full flex justify-center my-3">
                <Image src={item.image} alt={item.title} className="" />
              </div>
              <div className="flex flex-col justify-center ">
                <div className="my-1 flex text-xl text-slate-900 font-bold">
                  <h1 className="">{item.title}</h1>
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
                  <div className="flex justify-center items-center cursor-pointer font-semibold hover:text-green-700 duration-700 bg-slate-200 p-2 mt-2 rounded-xl w-[40%]">
                    <a href={item.live} className="">
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
