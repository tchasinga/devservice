import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-[35vh] w-full bg-blue-900 mt-5 text-white mb-0 pt-9">
      <div className="flex flex-row gap-16 h-[30vh] w-[80%] justify-center">
        <div className="w-[25%] ">
          <h2>About Us</h2>
          <p className="mt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur in corporis!
          </p>
        </div>
        <div className="w-fit">
          <h2>Support</h2>
          <ul className="mt-5">
            <li>Q&A</li>
            <li>Our service</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="w-fit">
          <h2>Get In Touch</h2>
          <p className="mt-5">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-[30%]">
          <h2>Subscribe Newsettler</h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos ut
            perspiciatis.
          </p>
          <input type="text" placeholder="Enter Email" className="mt-3" />
          <button type="button" className="bg-blue-600 rounded-md mt-3">
            Subscribe To NewSettlers
          </button>
        </div>
      </div>
      <div className="h-10px mb-0">
        <div className="bg-white h-[0.3px] w-full"></div>
        <h3>@reserved rights Devservice</h3>
      </div>
    </div>
  );
}

export default Footer;
