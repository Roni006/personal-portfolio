import React from "react";
import Container from "./Container";
import Image from "next/image";

import user from "../../src/img/service-icons/user.png";

const Service = () => {
  const cards = [
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: user,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur",
    },
  ];
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="mb-15 text-center">
              <h1 className="text-white text-[40px] font-bold tracking-[3%] pb-4.5 ">
                Services
              </h1>
              <p className="text-[#707070] text-[20px] font-medium ">
                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                blandit felis ligula aliquam
              </p>
            </div>
            <div className="grid grid-cols-3 items-center justify-center gap-10">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="w-100 py-8.75 px-7.5 bg-[#1b1b1b] border border-[#1b1b1b] hover:border-[#fd6f00] duration-300 cursor-pointer rounded-md text-center flex flex-col items-center jsutify-center"
                >
                  <Image src={card.icon} alt="User" />
                  <h2 className="text-[#fd6f00] font-bold text-[24px] tracking-[3%] pt-4 pb-8.75">
                    {card.title}
                  </h2>
                  <p className="text-[#707070] text-[20px] font-medium ">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Service;
