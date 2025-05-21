import React from "react";
import Slider from "../components/home/Slider";
import FeaturedGroups from "../components/home/FeaturedGroups";
import OurTeam from "../components/home/OurTeam";
import Total from "../components/home/Total";
import NewsLetter from "../components/home/NewsLetter";
import { useLoaderData } from "react-router";

const Home = () => {
  const groupData = useLoaderData();
  const sliceData = groupData.slice(0,6);
  
  return (
    <>
      <Slider/>
      <FeaturedGroups groupData={sliceData}/>
      <OurTeam/>
      <Total/>
      <NewsLetter/>
    </>
  );
};

export default Home;
