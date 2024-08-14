import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-[35vh] w-full bg-blue-900 mt-5 text-white mb-0 pt-9">
      <div className="flex flex-row gap-5 h-[30vh]">
        <div>
          <h2>About Us</h2>
        </div>
        <div>
          <h2>Support</h2>
        </div>
        <div>
          <h2>Get In Touch</h2>
        </div>
        <div>
          <h2>Subscribe Newsettler</h2>
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
