import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <div>
              <h1 className="text-center text-[#eeeeee] text-[40px] font-bold tracking-[3%] pb-4.5 ">
                Portfolio
              </h1>
              <p className="text-[#707070] text-[20px] font-medium ">
                <p className="text-[#707070] text-[20px] font-medium text-center">
                  Cultivating Connections: Reach Out and Connect with Me
                </p>
              </p>

              <div className="mt-12.5">
                <form action="#">
                  <div className="main-content-area">
                    <div>
                      <input type="text" placeholder="Name" />
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
