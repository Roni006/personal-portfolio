import AboutMe from "@/Components/AboutMe";
import Banner from "@/Components/Banner";
import Service from "@/Components/Service";
import Progress from "@/Components/Progress";
import React from "react";
import Portfolio from "@/Components/Portfolio";
import Contact from "@/Components/Contact";

const page = () => {
  return (
    <div>
      <Banner />
      <Service />
      <AboutMe />
      {/* <Progress/> */}
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default page;
