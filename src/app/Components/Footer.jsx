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
    <div className="flex flex-col  justify-center items-center h-fit  md:h-fit w-full bg-[#13265e] mt-5 text-white mb-0 pt-4">
      <div className="flex gap-16 h-fit  md:h-fit md:w-[80%] justify-center items-center flex-col md:flex-row  md:mb-10">
        <div className="w-[100%] h-fit md:w-[25%] flex justify-center items-center flex-col ">
          <h2 className="font-semibold">About Us</h2>
          <p className="mt-1 font-light text-center">
            We are a dynamic IT solutions company dedicated to turning your
            ideas into reality.
            <a className="text-orange-500 hover:text-white">Read more...</a>
          </p>
          <h1 className=" font-poppins mt-2">
            Dev
            <span className="font-poppins font-sans text-orange-500 font-bold text-2xl">
              Serves
            </span>
          </h1>
        </div>
        <div className=" w-[100%] h-fit md:w-[25%] flex justify-center items-center flex-col">
          <h2 className="font-semibold font-poppins font-sans">Support</h2>
          <ul className="mt-1 font-poppins font-sans">
            <li className="hover:text-orange-500">Q&A</li>
            <li className="hover:text-orange-500">Testimonials</li>
            <li>
              <a className="hover:text-orange-500">Blog</a>
            </li>
            <li className="hover:text-orange-500">Events & Webinars</li>
            <li className="hover:text-orange-500">Our service</li>
            <li className="hover:text-orange-500">Portfolio</li>
          </ul>
        </div>
        <div className=" w-[100%] h-fit md:w-[25%] flex justify-center items-center flex-col ">
          <h2 className="font-semibold font-poppins font-sans">Get In Touch</h2>
          <p className="mt-1 font-light font-poppins font-sans text-center">
            Get in touch with us today!
          </p>
          <h4 className="font-poppins font-sans mt-3">
            <span className="font-semi-bold">Phone:</span>{" "}
            +250787289028/+254769212978
          </h4>
          <h4 className="font-poppins font-sans">
            <span className="font-semibold">Email:</span> Devservice@gmail.com{" "}
          </h4>
          <div className="flex flex-row gap-2 mt-3 font-[10px] text-base text-orange-500">
            <FaFacebook className="hover:scale-125 hover:text-white text-[20px]" />
            <FaInstagram className="hover:scale-125 hover:text-white text-[20px]" />
            <FaLinkedin className="hover:scale-125 hover:text-white text-[20px]" />
            <FaYoutube className="hover:scale-125 hover:text-white text-[20px]" />
            <FaTwitter className="hover:scale-125 hover:text-white text-[20px]" />
          </div>
        </div>
        <div className="md:w-[30%] w-[100%] h-fit flex justify-center items-center flex-col p-10 md:p-0 md:h-fit">
          <h2 className="font-semibold font-poppins font-sans text-center">
            Subscribe Newsettler
          </h2>
          <p className="mt-1 font-light font-poppins font-sans text-center">
            Stay updated with the latest in IT innovations, expert tips, and
            exclusive offers by subscribing to our newsletter.
          </p>
          <input
            type="text"
            placeholder="Enter Email"
            className="mt-3 h-[5vh] p-3 flex items-center w-[70%] font-poppins font-sans"
          />
          <button
            type="button"
            className="bg-blue-600 rounded-md mt-3 h-[5vh] p-3 flex md:font-[5px] items-center w-[70%] font-poppins font-sans hover:bg-orange-500"
          >
            Subscribe
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
