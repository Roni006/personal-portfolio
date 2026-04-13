"use client";
import Image from "next/image";
import Container from "./Container";
import { useState } from "react";

// ! image importting
import portflio1 from "../../src/img/portfolio/portfolio1.png";
import portflio2 from "../../src/img/portfolio/portfolio2.png";
import portflio3 from "../../src/img/portfolio/portfolio3.png";

const Portfolio = () => {
  const [isActive, setIsActive] = useState(1);

  const portfolio = [
    
    {
      img: portflio1,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio2,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio3,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio2,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio1,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio3,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio1,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio3,
      name:"Name Project" ,
      Category: "Categories"

    },

    {
      img: portflio2,
      name:"Name Project" ,
      category: "Categories"

    },
  ]
  return (
    <>
      <section className="pb-15">
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

              <div className="mt-10 min-h-[600px] transition-all duration-500 ease-in-out">
                {isActive === 1 && (
                  <Container>
                    <div className="grid grid-cols-3 gap-[18px] items-center justify-between"> 
                    
                    {
                        portfolio.map((item,i)=>(
                          <div key={i} > 
                          <Image className="rounded-[28px_28px_0_0] w-full h-auto" src={item.img}  alt="portfolio image"/>
                          <div className="flex items-center justify-between p-4  bg-[#252525] rounded-[0_0_16px_16px] ">
                          <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                          <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                          {/* <p className="text-[#959595] text-[16px] font-bold tracking-[3%] ">{item.category}</p>  */}
                          </div>
                        </div>
                        ))
                      }
                   </div>
                  </Container>
                )}
                {isActive === 2 && (
                   <Container>
                   <div className="grid grid-cols-3 gap-[18px] items-center justify-between"> 
                   
                   {
                       portfolio.map((item,i)=>(
                         <div key={i} > 
                         <Image className="rounded-[28px_28px_0_0] w-full h-auto" src={item.img}  alt="portfolio image"/>
                         <div className="flex items-center justify-between p-4  bg-[#252525] rounded-[0_0_16px_16px] ">
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         {/* <p className="text-[#959595] text-[16px] font-bold tracking-[3%] ">{item.category}</p>  */}
                         </div>
                       </div>
                       ))
                     }
                  </div>
                 </Container>   
                )}
                {isActive === 3 && (
                   <Container>
                   <div className="grid grid-cols-3 gap-[18px] items-center justify-between"> 
                   
                   {
                       portfolio.map((item,i)=>(
                         <div key={i} > 
                         <Image className="rounded-[28px_28px_0_0] w-full h-auto" src={item.img}  alt="portfolio image"/>
                         <div className="flex items-center justify-between p-4  bg-[#252525] rounded-[0_0_16px_16px] ">
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         {/* <p className="text-[#959595] text-[16px] font-bold tracking-[3%] ">{item.category}</p>  */}
                         </div>
                       </div>
                       ))
                     }
                  </div>
                 </Container>
                )}
                {isActive === 4 && (
                   <Container>
                   <div className="grid grid-cols-3 gap-[18px] items-center justify-between"> 
                   
                   {
                       portfolio.map((item,i)=>(
                         <div key={i} > 
                         <Image className="rounded-[28px_28px_0_0] w-full h-auto" src={item.img}  alt="portfolio image"/>
                         <div className="flex items-center justify-between p-4  bg-[#252525] rounded-[0_0_16px_16px] ">
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         {/* <p className="text-[#959595] text-[16px] font-bold tracking-[3%] ">{item.category}</p>  */}
                         </div>
                       </div>
                       ))
                     }
                  </div>
                 </Container>
                )}
                {isActive === 5 && (
                   <Container>
                   <div className="grid grid-cols-3 gap-[18px] items-center justify-between"> 
                   
                   {
                       portfolio.map((item,i)=>(
                         <div key={i} > 
                         <Image className="rounded-[28px_28px_0_0] w-full h-auto" src={item.img}  alt="portfolio image"/>
                         <div className="flex items-center justify-between p-4  bg-[#252525] rounded-[0_0_16px_16px] ">
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         <p className="text-[#c6c6c6] text-[16px] font-bold tracking-[3%] ">{item.name}</p> 
                         {/* <p className="text-[#959595] text-[16px] font-bold tracking-[3%] ">{item.category}</p>  */}
                         </div>
                       </div>
                       ))
                     }
                  </div>
                 </Container>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
