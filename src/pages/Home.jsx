import Slider from "../components/home/Slider";
import FeaturedGroups from "../components/home/FeaturedGroups";
import OurTeam from "../components/home/OurTeam";
import Total from "../components/home/Total";
import NewsLetter from "../components/home/NewsLetter";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Home = () => {
  const groupData = useLoaderData();
  const sliceData = groupData.slice(0, 8);
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>HobbyHub | Home</title>
      </Helmet>
     <Slider />
      <div className="w-10/12 mx-auto">
        <FeaturedGroups groupData={sliceData} />
      <OurTeam />
      <Total />
      <NewsLetter />
      </div>
    </>
  );
};

export default Home;
