import React from "react";
import Slider from "../components/home/Slider";
import FeaturedGroups from "../components/home/FeaturedGroups";
import OurTeam from "../components/home/OurTeam";

const Home = () => {
  return (
    <>
      <Slider/>
      <FeaturedGroups/>
      <OurTeam></OurTeam>
    </>
  );
};

export default Home;
