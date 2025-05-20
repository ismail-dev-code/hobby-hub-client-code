import React from "react";
import loginImg from "../assets/hobby-logo.png";
import { Link } from "react-router";
const Register = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md border border-gray-200 shadow-md px-4 py-4 sm:p-8 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl text-violet-800 sm:text-xl font-bold text-center">
          <img className="w-42 h-16 mx-auto" src={loginImg} alt="" />
          Register to HobbyHub
        </h1>

        <form className="space-y-4 mb-0">
          <div className="space-y-2 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <label htmlFor="name" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <label htmlFor="password" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
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
        </form>

        <p className="text-sm text-center pt-2 text-gray-600">
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
