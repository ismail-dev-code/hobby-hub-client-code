import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../components/allGroup/GroupCard";
import { Fade } from "react-awesome-reveal";

const AllGroups = () => {
  const groupData = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-3xl mt-10 font-bold ">All Groups</h1>
      <div className="flex-1 h-px w-1/8 mx-auto bg-gray-300 animate-ping"></div>
      <p className="text-center pt-2 text-gray-500">
        Discover a wide range of hobbies — from art and travel to tech and
        wellness. Find your passion and connect with like-minded enthusiasts.
      </p>
      <div className="grid px-5 md:px-0  grid-cols-1 md:grid-cols-2 gap-4 my-16">
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

export default AllGroups;
