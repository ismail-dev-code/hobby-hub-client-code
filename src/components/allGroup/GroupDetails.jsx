import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "../../pages/Loading";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/all-group/${id}`)
      .then((res) => res.json())
      .then((data) => setGroup(data));
  }, [id]);

  useEffect(() => {
    const joinedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    if (joinedGroups.includes(id)) {
      setJoined(true);
    }
  }, [id]);

  const handleJoinGroup = () => {
    const joinedGroups = JSON.parse(localStorage.getItem("joinedGroups")) || [];

    if (joinedGroups.includes(id)) {
      toast.info("You have already joined this group.");
    } else {
      joinedGroups.push(id);
      localStorage.setItem("joinedGroups", JSON.stringify(joinedGroups));
      setJoined(true);
      toast.success("Successfully joined the group!");
    }
  };

  if (!group) return <Loading />;

  const { name, photo, category, date, members, description, location } = group;
  const currentDate = new Date();
  const groupDeadline = new Date(date);
  const isExpired = groupDeadline < currentDate;

  return (
    <div className="my-12 w-full">
      <Fade
        delay={50} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        triggerOnce // Only animate once
        fraction={0.5}
      >
        <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
          <figure className="flex justify-center mb-4">
            <img
              className="rounded-lg w-72 h-72 object-cover"
              src={photo}
              alt={name}
            />
          </figure>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Members:</span> {members}
            </p>
            <p>
              <span className="font-semibold">Deadline:</span> {date}
            </p>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
          </div>

          <div className="mt-6 text-center">
            {isExpired ? (
              <p className="text-red-500 font-medium">
                This group is no longer active. Deadline has passed.
              </p>
            ) : joined ? (
              <p className="text-green-600 font-medium">
                ✅ You have already joined this group.
              </p>
            ) : (
              <button
                onClick={handleJoinGroup}
                className="btn bg-violet-500 text-white hover:bg-violet-600"
              >
                Join Group
              </button>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default GroupDetails;
