"use client";
import React, { useState } from "react";
import mobiledater from "../Data/mobiledater";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Mobiled() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="gridGeneralY px-4">
        {mobiledater.slice(0).map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-col flex justify-center items-center"
            initial={{ opacity: -0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <div className="w-[50%] flex justify-center my-3">
              <Image
                src={item.myimage}
                alt={item.title}
                layout="responsive"
                className=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="my-1 flex text-xl text-slate-900 font-bold">
                <h1>{item.title}</h1>
              </div>
              <div className="mb-2 flex flex-col text-slate-800">
                <p className="line-clamp-3">{item.detail}</p>
              </div>
              <div className="flex justify-end items-end">
                <motion.div
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                  className="flex justify-center items-center font-semibold hover:text-white bg-slate-200 p-2 mt-2 rounded-full w-[40%] hover:bg-black duration-700 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={item.live} className="w-full text-center" target="_blank">
                    {hoveredIndex === index ? "Just click" : "Download"}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
