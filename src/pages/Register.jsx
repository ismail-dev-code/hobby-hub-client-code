import React, { use, useState } from "react";
import loginImg from "../assets/hobby-logo.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warning(
        "Password must include at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters in length."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            navigate("/");
          })
          .catch((error) => {
            setUser(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md border border-gray-200 shadow-md px-4 py-4 sm:p-8 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl text-violet-800 sm:text-xl font-bold text-center">
          <img className="w-42 h-16 mx-auto" src={loginImg} alt="" />
          Register to HobbyHub
        </h1>

        <form onSubmit={handleRegister} className="space-y-4 mb-0">
          <div className="space-y-2 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <label htmlFor="name" className="block dark:text-gray-600">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <label htmlFor="password" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              required
              type="url"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-center font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Register
          </button>
          {nameError ? (
            <p className="text-red-500 text-center">{nameError}</p>
          ) : (
            ""
          )}
        </form>

        <p className="text-sm text-center text-nowrap pt-2 text-gray-600">
          Already have an account? Please
          <Link
            to={"/login"}
            href="#"
            className="ml-1 underline text-violet-700 hover:text-violet-900"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
