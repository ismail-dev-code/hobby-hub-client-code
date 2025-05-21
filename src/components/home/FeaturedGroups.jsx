import React from "react";
import GroupCard from "../allGroup/GroupCard";

const FeaturedGroups = ({ groupData }) => {
  //   console.log(groupData);
  return (
    <div>
      {" "}
      <h1 className="text-center text-3xl mt-10 font-bold ">Featured Spot</h1>
      <div className="flex-1 h-px w-1/8 mx-auto bg-gray-300 animate-ping"></div>
      <p className="text-center pt-2 text-gray-500">
        Discover a wide range of hobbies — from art and travel to tech and
        wellness. Find your passion and connect with like-minded enthusiasts.
      </p>
      <div className="grid grid-cols-1 my-8 md:my-16  md:grid-cols-2 gap-6">
        {groupData.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroups;
