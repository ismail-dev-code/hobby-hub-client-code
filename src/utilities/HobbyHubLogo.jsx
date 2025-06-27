import logo from "../../public/hobby-logo.png";

const HobbyHubLogo = () => {
  return (
    <div
      className="flex gap-1 justify-center items-center"
    >
      <img
        className="mb-2.5 -mr-4 w-8 h-8"
        src={logo}
        alt="HobbyHub Logo"
      />
      <p className="text-xl font-bold pt-1 text-secondary">HobbyHub</p>
    </div>
  );
};

export default HobbyHubLogo;
