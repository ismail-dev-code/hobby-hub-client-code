import React from "react";
import GroupCard from "../allGroup/GroupCard";
import { Fade } from "react-awesome-reveal";

const FeaturedGroups = ({ groupData }) => {
  //   console.log(groupData);
  return (
    <div>
      {" "}
      <Fade delay={50} duration={1000} triggerOnce fraction={0.5}>
        <h1 className="text-center text-3xl mt-10 font-bold ">Featured Spot</h1>
      </Fade>
      <div className="flex-1 h-px w-1/8 mx-auto  animate-ping"></div>
      <p className="text-center pt-2 ">
        Discover a wide range of hobbies — from art and travel to tech and
        wellness. Find your passion and connect with like-minded enthusiasts.
      </p>
      <div className="grid grid-cols-1 my-8 md:my-16  md:grid-cols-2 gap-6">
        <Fade
          delay={50} // Wait 200ms before starting
          duration={1000} // Animation lasts 1 second
          triggerOnce // Only animate once
          fraction={0.5}
        >
          {groupData.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default FeaturedGroups;
