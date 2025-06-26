import Slider from "../components/home/Slider";
import FeaturedGroups from "../components/home/FeaturedGroups";
import OurTeam from "../components/home/OurTeam";
import Total from "../components/home/Total";
import NewsLetter from "../components/home/NewsLetter";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const groupData = useLoaderData();
  const sliceData = groupData.slice(0, 8);

  return (
    <>
      <Helmet>
        <title>HobbyHub | Home</title>
      </Helmet>
     <Slider />
      <div className="md:px-6 px-4">
        <FeaturedGroups groupData={sliceData} />
      <OurTeam />
      <Total />
      <NewsLetter />
      </div>
    </>
  );
};

export default Home;
