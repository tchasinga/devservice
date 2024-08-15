import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center  h-[35vh] w-full bg-[#13265e] mt-5 text-white mb-0 pt-9">
      <div className="flex flex-row gap-16 h-[30vh] w-[80%] justify-center">
        <div className="w-[25%] ">
          <h2 className="font-semibold">About Us</h2>
          <p className="mt-1 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur in corporis!
          </p>
          <h1 className=" font-poppins mt-2">
            Dev
            <span className="font-poppins font-sans text-orange-500 font-bold text-2xl">
              Serves
            </span>
          </h1>
        </div>
        <div className="w-fit">
          <h2 className="font-semibold font-poppins font-sans">Support</h2>
          <ul className="mt-1 font-poppins font-sans">
            <li className="hover:text-orange-500">Q&A</li>
            <li className="hover:text-orange-500">Our service</li>
            <li>
              <a className="hover:text-orange-500">Best services</a>
            </li>
            <li className="hover:text-orange-500">Lorem</li>
            <li className="hover:text-orange-500">Our service</li>
            <li className="hover:text-orange-500">Blog</li>
          </ul>
        </div>
        <div className="w-fit">
          <h2 className="font-semibold font-poppins font-sans">Get In Touch</h2>
          <p className="mt-1 font-light font-poppins font-sans">
            Lorem ipsum dolor sit amet.
          </p>
          <h4 className="font-poppins font-sans mt-3">
            <span className="font-semi-bold">Phone:</span>{" "}
            +250787289028/+254769212978
          </h4>
          <h4 className="font-poppins font-sans">
            <span className="font-semibold">Email:</span> Devservice@gmail.com{" "}
          </h4>
          <div className="flex flex-row gap-2 mt-3 font-[10px] text-base text-orange-500">
            <FaFacebook className="hover:scale-125 hover:text-white" />
            <FaInstagram className="hover:scale-125 hover:text-white" />
            <FaLinkedin className="hover:scale-125 hover:text-white" />
            <FaYoutube className="hover:scale-125 hover:text-white" />
            <FaTwitter className="hover:scale-125 hover:text-white" />
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="font-semibold font-poppins font-sans">
            Subscribe Newsettler
          </h2>
          <p className="mt-1 font-light font-poppins font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos ut
            perspiciatis.adipisicing elit
          </p>
          <input
            type="text"
            placeholder="Enter Email"
            className="mt-3 h-[5vh] p-3 flex items-center w-[70%] font-poppins font-sans"
          />
          <button
            type="button"
            className="bg-blue-600 rounded-md mt-3 h-[5vh] p-3 flex items-center w-[70%] font-poppins font-sans hover:bg-orange-500"
          >
            Subscribe To NewSettlers
          </button>
        </div>
      </div>
      <div className="h-10px mb-0 w-full flex items-center flex-col">
        <div className="bg-white h-[0.3px] w-[100%]"></div>
        <h3 className="font-poppins font-sans m-3">
          all rights reserved{" "}
          <span className="text-orange-500 font-bold">@Devservice</span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
