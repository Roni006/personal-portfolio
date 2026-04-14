import AboutMe from "@/Components/AboutMe";
import Banner from "@/Components/Banner";
import Service from "@/Components/Service";
import Progress from "@/Components/Progress";
import React from "react";
import Portfolio from "@/Components/Portfolio";
import Contact from "@/Components/Contact";
import Counter from "@/Components/Counter";

const page = () => {
  return (
    <div>
      <Banner />
      <Service />
      <AboutMe />
      <Progress/>
      <Portfolio/>
      <Contact/>
      <Counter/>
    </div>
  );
};

export default page;
