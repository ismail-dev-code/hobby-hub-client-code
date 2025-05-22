import { Link } from "react-router";

const GroupCard = ({ group }) => {
  const { _id, name, photo, category, date, members } = group;
  return (
    <div className="card text-nowrap md:flex-row flex-col border border-gray-200 card-side shadow-md mx-5">
      <figure>
        <img className="md:w-44 w-full md:h-44 rounded-lg p-2" src={photo} alt="photo" />
      </figure>

      <div className="ml-4 p-2 flex-1">
        <h2 className="card-title text-xl capitalize">{name}</h2>
        <h2 className="mt-2">Category: {category}</h2>
        <h2 className="mt-1">Members:{members}</h2>
        <p className="mt-1">Deadline: {date}</p>
      </div>
      <div className="flex flex-1 md:mt-17 h-full items-center ml-6 mb-3 md:justify-end pr-3">
        <Link
          to={`/details-group/${_id}`}
          className="btn bg-violet-500 text-white hover:bg-violet-600"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
