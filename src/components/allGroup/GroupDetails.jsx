import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../pages/Loading";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    fetch(`https://hobby-hub-server-pied.vercel.app/all-group/${id}`)
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
    <>
      <Helmet>
        <title>HobbyHub | Group Details</title>
      </Helmet>
      <div className="my-12 px-2 w-full">
        <Fade delay={50} duration={1000} triggerOnce fraction={0.5}>
          <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg shadow-lg p-6">
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
                <span className="font-semibold">Description:</span>{" "}
                {description}
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
                  ✅ You have successfully joined this group.
                </p>
              ) : (
                <button
                  onClick={handleJoinGroup}
                  className="btn bg-primary text-white hover:bg-secondary"
                >
                  Join Group
                </button>
              )}
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default GroupDetails;
