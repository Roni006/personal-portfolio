import AboutMe from "@/Components/AboutMe";
import Banner from "@/Components/Banner";
import Service from "@/Components/Service";
import Progress from "@/Components/Progress";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Service />
      <AboutMe />
      <Progress/>
    </div>
  );
};

export default page;
