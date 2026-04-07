import React from "react";
import Container from "./Container";
import Link from "next/link";

// ! ICONS IMPORT 
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiBehanceLogoLight } from "react-icons/pi";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi"; 


const Footer = () => (
  <>
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-10">
          {/* LOGO PART  */}
          <div className="logo">
            <Link
              href="/"
              className="text-[30px] font-bold tracking-[3%] bg-linear-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent"
            >
              LOGO
            </Link>
          </div>

          {/* MENU PART  */}
          <div className="menus">
            <nav>
              <ul className="flex items-center gap-15">
                <li className="link">
                  <Link href="#home">Home</Link>
                </li>
                <li className="link">
                  <Link href="#services">Service</Link>
                </li>
                <li className="link">
                  <Link href="#about">About Me</Link>
                </li>
                <li className="link">
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="link">
                  <Link href="#contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* SOCIAL ICONS  */}
          <div className="flex items-center gap-5">
            <span className=" w-10 h-10 bg-[#7a7a7a7d] border border-[#ddd] rounded-full flex items-center justify-center cursor-pointer hover:bg-transparent hover:border-[#fd6f00] duration-300 ease-in-out ">
              <FaInstagram className="text-[20px] text-white " />
            </span>

            <span className=" w-10 h-10 bg-[#7a7a7a7d] border border-[#ddd] rounded-full flex items-center justify-center cursor-pointer hover:bg-transparent hover:border-[#fd6f00] duration-300 ease-in-out ">
              <CiLinkedin className="text-[20px] text-white " />
            </span>

            <span className=" w-10 h-10 bg-[#7a7a7a7d] border border-[#ddd] rounded-full flex items-center justify-center cursor-pointer hover:bg-transparent hover:border-[#fd6f00] duration-300 ease-in-out ">
              <AiOutlineDribbble className="text-[20px] text-white " />
            </span>

            <span className=" w-10 h-10 bg-[#7a7a7a7d] border border-[#ddd] rounded-full flex items-center justify-center cursor-pointer hover:bg-transparent hover:border-[#fd6f00] duration-300 ease-in-out ">
              <PiBehanceLogoLight className="text-[20px] text-white " />
            </span>
          </div>

          {/* GET IN TOUCH */}
          <div className="flex items-center gap-5">

            {/* PHONE  */}
            <div className="flex items-center gap-2">
              <span>
                <FaRegEnvelope className="text-[#959595]" />
              </span>
              <p className="text-[#959595] font-bold text-[20px] tracking-[3%] ">
                <Link href="mailto:infto@gmail.com">infto@gmail.com</Link>
              </p>
            </div>

            {/* EMAIL  */}
            <div className="flex items-center gap-3">
              <span>
                <FiPhone className="text-[#959595]" />
              </span>
              <p className="text-[#959595] font-bold text-[20px] tracking-[3%] ">
                <Link href="tel:+11234567890">+1 (123) 456-7890</Link>
              </p>
            </div> 
          </div>

           {/* COPY RIGHT  */}
            <div className=" border-t-2 border-[#898585]  w-133.75 text-center mx-auto pt-4">
                <p className="text-[16px] font-medium text-[#b2b0b0] tracking-[3%]">Designed by @AnikIslam Front End Developer</p>
            </div>
        </div>
      </Container>
    </section>
  </>
);

export default Footer;
