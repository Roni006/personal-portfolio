"use client";
import React from "react";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiBehanceLogoLight } from "react-icons/pi";
import { AiOutlineDribbble } from "react-icons/ai";


// !image import
import bannerShape from '../../src/img/banner-shape.png' 
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="relative">
              <div>
                <Image className="absolute left-0 top-5" src={bannerShape} alt="Banner Shape" />
              </div>
              <span className="intro">Hi, Iam</span>
              <h6 className="name pt-3">Anik Islam</h6>
              <h1 className="font-bold tracking-[3%] bg-linear-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent text-[70px] pt-4 pb-4.5 ">
                Front End Developer
              </h1>

              <div className="icons">
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
              </div>

              <div className="pt-15 pb-20 flex items-center gap-5">
                <button className="text-[16px] font-bold tracking-[3%] text-white bg-[#fd6f00] py-3 px-10 rounded-md cursor-pointer border-2 border-[#fd6f00] hover:bg-transparent hover:text-[#fd6f00] duration-300 ease-in-out ">
                  Hire Me
                </button>
                <button className="text-[16px] font-bold tracking-[3%] text-white bg-transparent py-3 px-10 rounded-md cursor-pointer border-2 border-[#707070] hover:text-white hover:bg-[#fd6f00] hover:border-[#fd6f00]  duration-300 ease-in-out ">
                  Download CV
                </button>
              </div>

              <div className="details p-6 bg-[rgba(255,255,255,0.04)] rounded-lg flex items-center gap-7.5 w-133.75 justify-between">
                <div className="">
                  <h2 className="text-[24px] font-extrabold text-[#fd6f00] tracking-[3%] pb-3 ">
                    5+
                  </h2>
                  <p className="text-[20px] font-bold tracking-[3%] text-[#dfdfdf] ">
                    Experiences
                  </p>
                </div>

                <div className="border-l-2 border-r-2 border-[#898585] px-7.5">
                  <h2 className="text-[24px] font-extrabold text-[#fd6f00] tracking-[3%] pb-3 ">
                    5+
                  </h2>
                  <p className="text-[20px] font-bold tracking-[3%] text-[#dfdfdf] ">
                    Experiences
                  </p>
                </div>

                <div>
                  <h2 className="text-[24px] font-extrabold text-[#fd6f00] tracking-[3%] pb-3 ">
                    5+
                  </h2>
                  <p className="text-[20px] font-bold tracking-[3%] text-[#dfdfdf] ">
                    Experiences
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
