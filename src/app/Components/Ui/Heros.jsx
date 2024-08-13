/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import myImgIsadded from '../Images/REdI.png'
import Image from 'next/image'
import "./extension.css";

export default function Heros() {
  return (
    <div className='absolute top-[20%] w-full onrespo'>
       <div className="flex justify-between items-center max-w-screen-xl mx-auto border-black border onrespo">
               {/* new first div */}
        <div className="flex flex-col justify-center">
            <p className="text-blue-950 font-semibold">welcom to dev-service</p>
            <div className="flex flex-col justify-center text-5xl text-slate-900 font-extrabold mt-2">
                <h1>We solve business</h1>
                <h1>problems with</h1>
                <h1>technology</h1>
            </div>
            <div className="my-5 text-slate-900 font-normal">
                <p>Our performance is your success, our passion is</p>
                <p>Innovation, our expertise is unmatched, we get you</p>
                <p>More</p>
            </div>
            <div className="flex items-center w-full">
                <div className="bg-blue-400 p-4 cursor-pointer duration-500 flex justify-center items-center border w-1/2">
                    <p>Get Started</p>
                </div>
    
                <div className="bg-blue-400 p-4 cursor-pointer duration-500 flex justify-center items-center border w-1/2 ">
                    <p>Get Started</p>
                </div>
            </div>
        </div>

       {/* Second div is here */}
        <div className="flex  justify-center items-center">
            <div className='w-full relative'>
            <div className="w-[500px] h-[500px] top-[-3%] right-0 left-0  bottom-0 absolute z-[-9999] rounded-full bg-green-700"></div>
                 <Image src={myImgIsadded}/>
            </div>
        </div>

       </div>
    </div>
  )
}
