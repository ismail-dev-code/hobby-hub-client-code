import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logoHobby from "../assets/hobby-logo.png";
import {
  FaHome,
  FaUsers,
  FaPlusCircle,
  FaUserEdit,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const DashboardLayout = () => {
  const { user, updateUser } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle checkbox (used to control sidebar on small screens) */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="w-full navbar bg-base-300 lg:hidden">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        {/* Nested Route Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 space-y-2 text-base-content">
          <Link to="/">
            <img className="w-34 h-14 hidden md:block" src={logoHobby} alt="" />
          </Link>
          <li>
            <NavLink to="/dashboard" className="flex items-center gap-2">
              <FaHome /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-group"
              className="flex items-center gap-2"
            >
              <FaUsers /> My Groups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/new-group"
              className="flex items-center gap-2"
            >
              <FaPlusCircle /> Create Group
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() =>
                Swal.fire({
                  title: "Edit Profile",
                  html: `
          <input type="text" id="name" placeholder="Name" class="swal2-input" value="${
            user.displayName || ""
          }">
          <input type="text" id="photo" placeholder="Photo URL" class="swal2-input" value="${
            user.photoURL || ""
          }">
        `,
                  confirmButtonText: "Update",
                  showCancelButton: true,
                  focusConfirm: false,
                  preConfirm: () => {
                    const name = document.getElementById("name").value.trim();
                    const photo = document.getElementById("photo").value.trim();

                    const isValidUrl = (url) =>
                      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i.test(
                        url
                      );

                    // Check here if name contains at least two words
                    const nameWords = name
                      .split(" ")
                      .filter((word) => word.length > 0);
                    if (nameWords.length < 2) {
                      Swal.showValidationMessage(
                        "⚠️ Please enter your full name (at least two words)."
                      );
                      return false;
                    }

                    if (photo && !isValidUrl(photo)) {
                      Swal.showValidationMessage(
                        "⚠️ Please enter a valid image URL (must start with http/https and end in .jpg/.png/etc)."
                      );
                      return false;
                    }

                    return { displayName: name, photoURL: photo };
                  },
                }).then(async (result) => {
                  if (result.isConfirmed && result.value) {
                    try {
                      await updateUser(result.value);
                      Swal.fire(
                        "✅ Success!",
                        "Profile updated successfully.",
                        "success"
                      );
                      location.reload();
                    } catch (err) {
                      console.error(err);
                      Swal.fire(
                        "❌ Error",
                        "Failed to update profile.",
                        "error"
                      );
                    }
                  }
                })
              }
            >
              <FaUserEdit /> Edit Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
