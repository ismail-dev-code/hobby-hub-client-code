import { Link } from "react-router";

const GroupCard = ({ group }) => {
  const { _id, name, photo, category, date, members } = group;

  return (
    <div
      className="border border-gray-200 rounded-xl bg-white shadow-sm 
                 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out
                 p-4 w-full max-w-xs mx-auto h-80 flex flex-col items-center text-center cursor-pointer"
      // Removed AOS data attributes for hover anim
    >
      {/* Image on Top */}
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 object-cover rounded-full border-2 border-primary shadow mb-4
                   transition-transform duration-300 ease-in-out
                   group-hover:scale-110"
      />

      {/* Content Below Image */}
      <div className="flex-1 flex flex-col justify-between space-y-1 text-sm text-gray-700">
        <div className="space-y-1">
          <h2 className="text-base font-semibold text-gray-800 truncate">
            {name}
          </h2>
          <p className="truncate">
            <span className="font-medium text-gray-600">Category:</span>{" "}
            {category}
          </p>
          <p className="truncate">
            <span className="font-medium text-gray-600">Members:</span>{" "}
            {members}
          </p>
          <p className="truncate">
            <span className="font-medium text-gray-600">Deadline:</span> {date}
          </p>
        </div>

        {/* Button */}
        <div className="pt-3">
          <Link
            to={`/details-group/${_id}`}
            className="btn btn-xs sm:btn-sm border-none bg-primary hover:bg-secondary text-white font-medium rounded-full px-4
                       transition-transform duration-300 ease-in-out
                       hover:scale-105 hover:shadow-lg"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
