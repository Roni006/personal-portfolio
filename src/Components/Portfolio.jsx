"use client"; 
import Container from "./Container";
import { useState } from "react";

const Portfolio = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <>
      <section className="pb-[150px] ">
        <Container>
          <div>
            {/* title  */}
            <div>
              <h1 className="text-center text-[#eeeeee] text-[40px] font-bold tracking-[3%] pb-10 ">
                Portfolio
              </h1>
            </div>

            {/* tabs  */}
            <div>
              <ul className="flex items-center justify-center gap-6">
                
                <li
                  className={`${
                    isActive === 1 && "bg-[#e76500] text-[#ffffff]"
                  } py-3.5 px-10 bg-[#252525] text-[#c6c6c6] text-[16px] font-bold tracking-[3%] rounded-md transition duration-300 cursor-pointer`}
                  onClick={() => setIsActive(1)}
                > 
                 All
                </li>
                
                <li
                  className={`${
                    isActive === 2 && "bg-[#e76500] text-[#ffffff]"
                  } py-3.5 px-10 bg-[#252525] text-[#c6c6c6] text-[16px] font-bold tracking-[3%] rounded-md transition duration-300 cursor-pointer`}
                  onClick={() => setIsActive(2)}
                > 
                  Website Design
                </li>
                
                <li
                  className={`${
                    isActive === 3 && "bg-[#e76500] text-[#ffffff]"
                  } py-3.5 px-10 bg-[#252525] text-[#c6c6c6] text-[16px] font-bold tracking-[3%] rounded-md transition duration-300 cursor-pointer`}
                  onClick={() => setIsActive(3)}
                > 
                  Mobile App Design
                </li>
                
                <li
                  className={`${
                    isActive === 4 && "bg-[#e76500] text-[#ffffff]"
                  } py-3.5 px-10 bg-[#252525] text-[#c6c6c6] text-[16px] font-bold tracking-[3%] rounded-md transition duration-300 cursor-pointer`}
                  onClick={() => setIsActive(4)}
                > 
                  App Desktop
                </li>
                
                <li
                  className={`${
                    isActive === 5 && "bg-[#e76500] text-[#ffffff]"
                  } py-3.5 px-10 bg-[#252525] text-[#c6c6c6] text-[16px] font-bold tracking-[3%] rounded-md transition duration-300 cursor-pointer`}
                  onClick={() => setIsActive(5)}
                > 
                  Branding
                </li>
                
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
