import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <>
      <section className="py-28 mb-[200px]">
        <Container>
          <div>
            <div>
              {/* title  */}
              <div>
                <h1 className="text-center text-[#eeeeee] text-[40px] font-bold tracking-[3%] pb-4.5 ">
                  Portfolio
                </h1>
                <p className="text-[#707070] text-[20px] font-medium ">
                  <p className="text-[#707070] text-[20px] font-medium text-center">
                    Cultivating Connections: Reach Out and Connect with Me
                  </p>
                </p>
              </div>

              {/* form  */}
              <div className="mt-12.5">
                <form action="#">
                  <div className="main-content-area ">
                    {/* email and name  */}
                    <div className="flex items-center justify-center gap-7.5">
                      <input
                        className="outline-none w-[490px] text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5 px-7 "
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        className="outline-none w-[490px]  text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5 px-7 "
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    {/* phone and seclect service  */}
                    <div className="flex items-center justify-center gap-7.5 py-7.5">
                      <input
                        className=" outline-none w-[490px] text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5 px-7 "
                        type="text"
                        placeholder="Phone Number"
                      />
                      <div className="relative ">
                        <select
                          className="appearance-none outline-none w-[490px] text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5  ps-8 pe-8 "
                          name=""
                          id=""
                        >
                          <option value="Servicce of interest">
                            Servicce Of Interest
                          </option>
                          <option value="Design">Web Design</option>
                          <option value="Development">Web Development</option>
                          <option value="Graphics">Graphic Design</option>
                          <option value="Marketing">Digital Marketing</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#959595]">
                          ⌄
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-7.5">
                      <div className="">
                        <input
                          className=" outline-none inline-block w-[490px] text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5 px-7 "
                          type="text"
                          placeholder="Timeline"
                        />
                      </div>
                      <textarea
                        className=" outline-none resize-none w-[490px] text-[16px] tracking-[3%] text-[#959595] bg-[#1b1b1b] py-3.5 px-7 "
                        rows={10}
                        cols={5}
                        placeholder="Project Details...."
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
