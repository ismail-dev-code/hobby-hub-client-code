const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between border border-gray-200 shadow-md mb-10 rounded-lg py-10 mx-4 md:py-16 px-4 md:px-10">
      <div className="title flex-1 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-bold">News Letter</h2>
        <h1 className="text-2xl md:text-4xl font-bold">Get Regular Update</h1>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          required
          className="w-full sm:w-auto flex-1 border border-gray-200 pl-4 py-2 rounded-md"
          placeholder="Enter your email address..."
        />
        <button className="w-full sm:w-auto px-4 py-2 bg-violet-500 text-white rounded-md sm:rounded-r-2xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
