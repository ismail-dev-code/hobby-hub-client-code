import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex items-center min-h-screen p-6 sm:p-8 lg:p-16 bg-white dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mx-auto">
        <div className="max-w-md text-center">
          <h2 className="mb-6 font-extrabold text-7xl sm:text-8xl md:text-9xl text-red-300">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-sm sm:text-base text-gray-600">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link
            to={"/"}
            className="inline-block px-6 py-3 text-sm sm:text-base font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Back to HobbyHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
