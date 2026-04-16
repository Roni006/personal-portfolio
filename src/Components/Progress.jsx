import React from "react";
import Container from "./Container";
import figma from '../../src/img/icons/figma.png' 

const Progress = () => {
  return (
    <>
      <section>
        <Container>
          <div classNameName="text-[#fff] ">Progress</div>

          {/* <div className="bg-gray-200 rounded-full w-full max-w-4xl mx-auto mt-4">
      <div className="w-1/2 py-0.5 flex items-center justify-center rounded-full bg-blue-500">
        <p className="text-xs text-white font-semibold leading-none">50%</p>
      </div>
    </div> */}
          <div>
            <div>
              <div className="border border-[#e46400] h-32.5 w-[32.5] rounded-full ">
                <img src={figma} alt="figma image" />
              </div>
              <h4 className="text-[30px] font-bold text-[#E46400]  ">100%</h4>
              <p className="text-[18px] font-medium text-[#959595] pt-2 ">
                HTML/CSS
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Progress;
