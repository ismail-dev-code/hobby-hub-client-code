import React from "react";
import Swal from "sweetalert2";
const AddGroup = () => {
  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());

    // send to data to the db
    fetch("http://localhost:3000/create-group", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group Created Successfully.",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
  <div className="text-center px-2 sm:px-4 md:px-8 lg:px-12 space-y-4">
    <h1 className="text-2xl sm:text-5xl md:text-4xl font-bold">Add Group</h1>
    <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">
      Use the form below to add a new group to the collection. Fill in the
      details like Group Name, Hobby Category, Description, Meeting
      Location, Max Members, Start Date, image URL, User Name, User Email.
    </p>
  </div>

  <form onSubmit={handleAddGroup} className="mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Form fields - unchanged structure */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Group Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Enter your group name"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Hobby Category</label>
        <input
          type="text"
          name="category"
          className="input w-full"
          placeholder="Enter hobby category"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Description</label>
        <input
          type="text"
          name="description"
          className="input w-full"
          placeholder="Enter Description"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Meeting Location</label>
        <input
          type="text"
          name="location"
          className="input w-full"
          placeholder="Enter meeting location"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Max Members</label>
        <input
          type="number"
          name="members"
          className="input w-full"
          placeholder="Enter max members"
        />
      </fieldset>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Start Date</label>
        <input
          type="date"
          name="date"
          className="input w-full"
          placeholder="Enter start date"
        />
      </fieldset>
    </div>

    {/* Other fields */}
    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Photo</label>
      <input
        type="url"
        name="photo"
        className="input w-full"
        placeholder="Photo URL"
      />
    </fieldset>
    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">User Name</label>
      <input
        type="text"
        name="userName"
        className="input w-full"
        placeholder="Dynamic user name"
      />
    </fieldset>
    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">User Email</label>
      <input
        type="email"
        name="userEmail"
        className="input w-full"
        placeholder="Dynamic user email"
      />
    </fieldset>
    
    <input type="submit" className="btn text-white btn-primary w-full mt-4" value="Create Group" />
  </form>
</div>

  );
};

export default AddGroup;
