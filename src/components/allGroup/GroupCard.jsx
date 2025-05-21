import React from "react";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const GroupCard = ({ group }) => {
//   console.log(group);
  const { name, photo, category, date, members } = group;
  return (
    <div className="card border border-gray-200 card-side bg-base-100 shadow-md">
      <figure>
        <img className="w-44 h-44 rounded-lg p-2" src={photo} alt="photo" />
      </figure>

      <div className="ml-4 p-2 flex-1">
        <h2 className="card-title text-xl">{name}</h2>
        <h2 className="mt-2">Category: {category}</h2>
        <h2 className="mt-1">Members:{members}</h2>
        <p className="mt-1">Deadline: {date}</p>
      </div>
      <div className="flex flex-1 h-full items-center justify-end pr-3">
        <button className="btn bg-violet-500 text-white hover:bg-violet-600">See More</button>
      </div>
    </div>
  );
};

export default GroupCard;
