import React from 'react';

const NewsLetter = () => {
    return (
        <div className="flex gap-6 justify-between border border-gray-200 shadow-md mb-10 bg-white rounded-lg py-16 p-10">
          <div className="title flex-1">
            <h2 className="text-xl font-bold">News Letter</h2>
            <h1 className="text-4xl font-bold">Get Regular Update</h1>
          </div>
          <div className='flex-1 flex'>
            <input
              type="email"
              required
              className="p-1 w-full border pl-4 border-gray-200"
              placeholder="Enter your email address..."
            />
            <button className="p-1 px-3 cursor-pointer bg-violet-500 text-white rounded-r-2xl">
              Subscribe
            </button>
          </div>
        </div>
    );
};

export default NewsLetter;