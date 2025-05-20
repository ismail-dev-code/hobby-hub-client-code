import React from "react";
import CountUp from "react-countup";
import { FaCommentDots, FaHandshake } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";

const Total = () => {
  return (
    <div className="pb-10">
      <h1 className="text-center text-3xl pb-2 font-bold">
        Trusted by Thousands in the Hobby Community
      </h1>
      <p className="text-center text-gray-500 pb-6">
        Join our growing network of passionate members, dedicated contributors,
        and satisfied users.
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-3 gap-2 items-center justify-items-center">
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <FaHandshake className="text-violet-500" size={35} />
          <h1 className="text-3xl font-bold py-1.5">
            <CountUp end={2500} duration={99.75} suffix=" +" />
          </h1>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <GiTrophyCup className="text-violet-500" size={35} />
          <h1 className="text-3xl font-bold py-1.5">
            <CountUp end={500} duration={44.75} suffix=" +" />
          </h1>
          <p className="text-gray-600">Award Win</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <GrUserWorker className="text-violet-500" size={35} />
          <h1 className="text-3xl font-bold py-1.5">
            <CountUp end={100} duration={33.75} suffix=" +" />
          </h1>
          <p className="text-gray-600">Active Worker</p>
        </div>
        <div className="bg-white flex flex-col justify-start rounded-md p-6">
          <FaCommentDots className="text-violet-500" size={35} />
          <h1 className="text-3xl font-bold py-1.5">
            <CountUp end={300} duration={33.75} suffix=" +" />
          </h1>
          <p className="text-gray-600">Rating Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
