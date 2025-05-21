import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../pages/Loading";
import { useNavigate, useParams } from "react-router";

const UpdateGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/all-group/${id}`)
      .then((res) => res.json())
      .then((data) => setGroup(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/all-group/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Group Updated Successfully!",
            icon: "success",
          });
          navigate("/my-group");
        }
      });
  };

  if (!group) return <Loading></Loading>;

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Update Group</h2>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          required
          className="input"
          type="text"
          name="name"
          defaultValue={group.name}
          placeholder="Group Name"
        />
        <select
          className="select"
          name="category"
          defaultValue={group.category}
        >
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
        </select>
        <input
          required
          className="input"
          type="text"
          name="description"
          defaultValue={group.description}
          placeholder="Description"
        />
        <input
          required
          className="input"
          type="text"
          name="location"
          defaultValue={group.location}
          placeholder="Meeting Location"
        />
        <input
          required
          className="input"
          type="number"
          name="members"
          defaultValue={group.members}
          placeholder="Max Members"
        />
        <input
          required
          className="input"
          type="date"
          name="date"
          defaultValue={group.date}
          placeholder="Start Date"
        />
        <input
          required
          className="input"
          type="url"
          name="photo"
          defaultValue={group.photo}
          placeholder="Photo URL"
        />
        <input
          required
          className="input"
          type="text"
          name="userName"
          defaultValue={group.userName}
          placeholder="User Name"
          readOnly
        />
        <input
          required
          className="input"
          type="email"
          name="userEmail"
          defaultValue={group.userEmail}
          placeholder="User Email"
          readOnly
        />

        <div className="col-span-1 md:col-span-2">
          <input
            type="submit"
            value="Update Group"
            className="btn bg-violet-500 hover:bg-violet-600 text-white w-full mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateGroup;
