import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const MyGroup = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-groups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <Loading></Loading>;

  if (groups.length === 0)
    return <p className="text-center mt-12">No groups found for you.</p>;

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 overflow-x-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Groups</h2>

      <table className="table table-zebra w-full border border-base-300 rounded-lg">
        <thead className="bg-base-200 text-base">
          <tr>
            <th>Serial No.</th>
            <th>Group Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Date</th>
            <th>Max Members</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group._id}>
              <td>{index + 1}</td>
              <td className="font-semibold">{group.name}</td>
              <td>{group.category}</td>
              <td>{group.location}</td>
              <td>{group.date}</td>
              <td>{group.members}</td>
              <td>
                <img
                  src={group.photo}
                  alt={group.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>

              <td className="join join-vertical space-y-3 p-2">
                <button className=" rounded-full join-item">
                  <FaInfoCircle
                    className="text-purple-500 cursor-pointer"
                    size={25}
                  />
                </button>
                <Link to={`/update-group/${group._id}`} className=" rounded-full join-item">
                  <FaEdit
                    className="text-purple-500 cursor-pointer"
                    size={25}
                  />
                </Link>
                <button className=" rounded-full join-item">
                  <MdDelete
                    className="text-purple-500 cursor-pointer"
                    size={25}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyGroup;
