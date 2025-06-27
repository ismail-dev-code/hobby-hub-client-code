import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
const AddGroup = () => {
  const { user } = useContext(AuthContext);

  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());

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
    <>
      <Helmet>
        <title>HobbyHub | Create Group</title>
      </Helmet>
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center px-2 sm:px-4 md:px-8 lg:px-12 space-y-4">
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-bold">
            Create Group
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">
            Use the form below to add a new group to the collection. Fill in the
            details like Group Name, Hobby Category, Description, Meeting
            Location, Max Members, End Date and image URL.
          </p>
        </div>

        <form onSubmit={handleAddGroup} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Group Name</label>
              <input
                required
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your group name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Hobby Categories</label>
              <select name="category" className="select w-full">
                <option>Drawing & Painting</option>
                <option>Photography</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Reading</option>
                <option>Writing </option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <textarea
                required
                name="description"
                className="textarea w-full"
                placeholder="Enter Description"
                rows={4}
              ></textarea>
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Meeting Location</label>
              <input
                required
                type="text"
                name="location"
                className="input w-full"
                placeholder="Enter meeting location"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Max Members</label>
              <input
                required
                type="number"
                name="members"
                className="input w-full"
                placeholder="Enter max members"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">End Date</label>
              <input
                required
                type="date"
                name="date"
                className="input w-full"
                placeholder="Enter start date"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              required
              type="url"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
            />
          </fieldset>
          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              readOnly
              defaultValue={user?.displayName}
              type="text"
              name="userName"
              className="input w-full"
              placeholder="Dynamic user name"
            />
          </fieldset>
          <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              readOnly
              defaultValue={user?.email}
              type="email"
              name="userEmail"
              className="input w-full"
              placeholder="Dynamic user email"
            />
          </fieldset>

          <input
            type="submit"
            className="btn bg-violet-500 hover:bg-violet-600 text-white w-full mt-4"
            value="Create Group"
          />
        </form>
      </div>
    </>
  );
};

export default AddGroup;
