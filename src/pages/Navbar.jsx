import { useContext, useEffect, useState } from "react";
import logoNav from "../assets/hobby-logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleLogOut = () => {
  MySwal.fire({
    title: "Are you sure?",
    text: "Do you really want to log out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#bb0f1e", 
    cancelButtonColor: "#002349",
    confirmButtonText: "Yes, log out",
    cancelButtonText: "Cancel",
    background: "#f8f8f8",
    backdrop: `
      rgba(0, 0, 0, 0.6)
      left top
      no-repeat
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      logOut()
        .then(() => {
          MySwal.fire({
            title: "Logged Out",
            text: "You have been logged out successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
            backdrop: `rgba(0, 0, 0, 0.6)`,
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
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
    <div className="navbar shadow-lg bg-primary text-white sticky z-50 top-0 md:px-6 ">
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
        className="btn btn-sm mr-3 btn-circle avatar"
      >
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={user?.displayName}
          className="w-10 btn-sm rounded-full ring"
        >
          {user?.photoURL ? (
            <img
              className="w-full h-full"
              src={user?.photoURL}
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
        <li className="text-center font-semibold py-1 text-gray-800">
          {user?.displayName || "User"}
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-error text-white hover:bg-red-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <Link
        to={"/login"}
        className="btn btn-sm bg-primary hover:bg-secondary text-white border-none font-semibold mr-3"
      >
        Log in
      </Link>
      <Link
        to={"/register"}
        className="btn btn-sm bg-primary hover:bg-secondary mr-3 text-white border-none font-semibold"
      >
        Register
      </Link>
    </>
  )}

  {/* Theme Toggle Button */}
  <button
    onClick={toggleTheme}
    className="btn btn-circle border btn-sm transition-all duration-300"
    title="Toggle Theme"
  >
    {isDark ? (
      <FaSun className="text-yellow-400 transition-transform duration-300 scale-110" />
    ) : (
      <FaMoon className="transition-transform duration-300 scale-110" />
    )}
  </button>
</div>

    </div>
  );
};

export default Navbar;
