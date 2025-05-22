import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

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
    return (
      <p className="text-center mt-12">You did not create any group yet.</p>
    );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-group/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setGroups((prevGroups) =>
                prevGroups.filter((group) => group._id !== id)
              );
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 overflow-x-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Groups</h2>

      <table className="table table-zebra w-full border border-base-300 rounded-lg">
        <thead className="bg-base-200 text-base">
          <tr className="text-center">
            <th>No.</th>
            <th>Group Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Date</th>
            <th>Max Members</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {groups.map((group, index) => (
            <tr key={group._id}>
              <td>{index + 1}</td>
              <td className="font-semibold text-nowrap">{group.name}</td>
              <td>{group.category}</td>
              <td>{group.location}</td>
              <td className="text-nowrap">{group.date}</td>
              <td>{group.members}</td>
              <td>
                <img
                  src={group.photo}
                  alt={group.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>

              <td className="join join-vertical space-y-3 p-2">
                <Link
                  to={`/details-group/${group._id}`}
                  className=" rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"See More Info"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <FaInfoCircle
                    className="text-purple-500 cursor-pointer"
                    size={18}
                  />
                </Link>
                <Link
                  to={`/update-group/${group._id}`}
                  className=" rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"Edit Group"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <FaEdit
                    className="text-purple-500 cursor-pointer"
                    size={18}
                  />
                </Link>
                <button
                  onClick={() => handleDelete(group._id)}
                  className="rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"Delete Group"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <MdDelete
                    className="text-purple-500 cursor-pointer"
                    size={18}
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
