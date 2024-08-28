import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#13265e] text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="font-semibold">About Us</h2>
            <p className="mt-2 text-sm">
              We are a dynamic IT solutions company dedicated to turning your
              ideas into reality.
              <a href="#" className="text-orange-500 hover:text-white ml-1">Read more...</a>
            </p>
            <h1 className="mt-4 text-2xl font-bold text-orange-500">DevServes</h1>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="font-semibold">Support</h2>
            <ul className="mt-2 text-sm">
              <li className="hover:text-orange-500"><a href="#">Q&A</a></li>
              <li className="hover:text-orange-500"><a href="#">Testimonials</a></li>
              <li className="hover:text-orange-500"><a href="#">Blog</a></li>
              <li className="hover:text-orange-500"><a href="#">Events & Webinars</a></li>
              <li className="hover:text-orange-500"><a href="#">Our Service</a></li>
              <li className="hover:text-orange-500"><a href="#">Portfolio</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="font-semibold">Get In Touch</h2>
            <p className="mt-2 text-sm">Get in touch with us today!</p>
            <p className="mt-4 text-sm"><span className="font-semibold">Phone:</span> +250787289028 / +254769212978</p>
            <p className="mt-2 text-sm"><span className="font-semibold">Email:</span> Devservice@gmail.com</p>
            <div className="flex mt-4 space-x-2 text-orange-500">
              <FaFacebook className="hover:scale-125 hover:text-white text-2xl" />
              <FaInstagram className="hover:scale-125 hover:text-white text-2xl" />
              <FaLinkedin className="hover:scale-125 hover:text-white text-2xl" />
              <FaYoutube className="hover:scale-125 hover:text-white text-2xl" />
              <FaTwitter className="hover:scale-125 hover:text-white text-2xl" />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="font-semibold">Subscribe Newsletter</h2>
            <p className="mt-2 text-sm">
              Stay updated with the latest in IT innovations, expert tips, and
              exclusive offers by subscribing to our newsletter.
            </p>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-4 p-2 w-full rounded-md text-black"
            />
            <button
              type="button"
              className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-orange-500 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/30 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.{" "}
            <span className="font-bold text-orange-500">@Devservice</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;