import GroupCard from "../allGroup/GroupCard";
import { Fade } from "react-awesome-reveal";

const FeaturedGroups = ({ groupData }) => {
  return (
    <div>
  
      <Fade delay={50} duration={1000} triggerOnce fraction={0.5}>
        <h1 className="text-center mt-4 mb-2 text-2xl tracking-tight font-extrabold">
          Featured Spot
        </h1>
      </Fade>
      <div className="flex-1 h-px w-1/8 mx-auto bg-gray-200 animate-ping"></div>
      <p className="text-center max-w-screen-sm mx-auto px-5 font-light text-gray-500 dark:text-gray-400">
        Discover a wide range of hobbies — from art and travel to tech and
        wellness. Find your passion and connect with like-minded enthusiasts.
      </p>
      <div className="grid grid-cols-1 my-8 md:my-16  md:grid-cols-4 gap-6">
        <Fade delay={50} duration={1000} triggerOnce fraction={0.5}>
          {groupData.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default FeaturedGroups;
