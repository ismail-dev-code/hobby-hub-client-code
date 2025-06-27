import loginImg from "../assets/hobby-logo.png";
import { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import HobbyHubLogo from "../utilities/HobbyHubLogo";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        // const user = result.user;

        Swal.fire({
          title: "Log in Successfully",
          icon: "success",
          showConfirmButton: true,
          timer: 3000,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Helmet>
        <title>HobbyHub | Login</title>
      </Helmet>
      <div className="flex items-center min-h-screen justify-center  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-6 border border-gray-200 shadow-md sm:p-6 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h2 className="text-xl text-violet-800 sm:text-xl whitespace-nowrap font-bold text-center">
            <Link to={"/"}>
              <HobbyHubLogo />
            </Link>{" "}
            <span className="text-center ml-4 text-primary"> Welcome Back</span>
          </h2>

          <form onSubmit={handleLogIn} className="space-y-4 mb-0">
            <div className="space-y-2 text-sm">
              <label htmlFor="name" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-center font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              Log in
            </button>
            {error ? <p className="text-red-500 text-center">{error}</p> : ""}
          </form>

          <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social account</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center my-3">
            {/* Google log in */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          <p className="text-sm text-center text-gray-600">
            Don't have an account? Please
            <Link
              to={"/register"}
              href="#"
              className="ml-1 underline text-violet-700 hover:text-violet-900"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
