import React, { use } from "react";
import logoNav from "../assets/hobby-logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaUserCircle } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire({
          title: <p>Log Out Successfully.</p>,
          icon: "error",
          showConfirmButton: true,
          timer: 3000,
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const links = (
    <>
      {" "}
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-groups"} className="text-nowrap">
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink to={"/create-group"}>Create Group</NavLink>
      </li>
      <li>
        <NavLink to={"/my-group"}>My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-34 h-14 hidden md:block" src={logoNav} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="w-10 rounded-full ring ring-violet-400 ring-offset-base-100 ring-offset-2"
              >
                {user?.photoURL ? (
                  <img
                    className="w-full h-full"
                    src={user.photoURL}
                    alt="user profile"
                  />
                ) : (
                  <FaUserCircle className="w-full h-full" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold py-1">
                {user?.displayName || "User"}
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-error text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to={"/login"} className="btn mr-3">
              Log in
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
