import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { SiGithub } from "react-icons/si";
import {  FaLinkedin } from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          ishaguptarg2019@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Isha Kumari. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Ishakumari2830" target="_blank" className="text-3xl">
             <SiGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ishakumari2811/" target="_blank" className="text-3xl">
             <FaLinkedin /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
