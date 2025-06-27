import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddGroup = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { user } = useContext(AuthContext);

  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());

    fetch("https://hobby-hub-server-pied.vercel.app/create-group", {
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
            confirmButtonColor: "#7c3aed",
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Create Group | HobbyHub</title>
      </Helmet>

      <section className="min-h-screen bg-base-100 px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Create a New Hobby Group
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Fill in the form below to create your own group and invite others who share the same passion.
          </p>
        </div>

        <form
          onSubmit={handleAddGroup}
          className=" mt-10 p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto space-y-6"
        >
          {/* Group Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="label font-semibold">Group Name</label>
              <input
                required
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="e.g. Nature Sketchers"
              />
            </div>

            <div>
              <label className="label font-semibold">Hobby Category</label>
              <select name="category" className="select select-bordered w-full">
                <option>Drawing & Painting</option>
                <option>Photography</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Reading</option>
                <option>Writing</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label font-semibold">Description</label>
              <textarea
                required
                name="description"
                className="textarea textarea-bordered w-full h-32"
                placeholder="Describe your group's purpose and activities"
              ></textarea>
            </div>

            <div>
              <label className="label font-semibold">Meeting Location</label>
              <input
                required
                type="text"
                name="location"
                className="input input-bordered w-full"
                placeholder="e.g. Dhaka Central Park"
              />
            </div>

            <div>
              <label className="label font-semibold">Max Members</label>
              <input
                required
                type="number"
                name="members"
                className="input input-bordered w-full"
                placeholder="e.g. 20"
              />
            </div>

            <div>
              <label className="label font-semibold">End Date</label>
              <input
                required
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label font-semibold">Group Photo URL</label>
              <input
                required
                type="url"
                name="photo"
                className="input input-bordered w-full"
                placeholder="Paste image URL here"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="label font-semibold">User Name</label>
              <input
                readOnly
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="label font-semibold">User Email</label>
              <input
                readOnly
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <input
              type="submit"
              value="Create Group"
              className="btn btn-primary w-full text-white text-lg font-semibold tracking-wide"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddGroup;
