"use clietn";

import React from "react";
import Container from "./Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <Container>
          <div className="flex items-center justify-between gap-12.5 py-10 ">
            <div className="logo">
              <Link
                href={"/"}
                className="text-[30px] font-bold tracking-[3%] bg-linear-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent"
              >
                LOGO
              </Link>
            </div>
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
            <div className="button">
              <button className="text-[16px] font-bold tracking-[3%] text-white bg-[#fd6f00] py-3 px-10 rounded-md cursor-pointer border-2 border-[#fd6f00] hover:bg-transparent hover:text-[#fd6f00] duration-300 ease-in-out ">
                Hire Me
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
