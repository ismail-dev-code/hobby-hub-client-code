import { ourTeam } from "../../utilities/OurTeamData";
import gradientBg from "../../assets/shared/gradient-bg.json";
import Lottie from "lottie-react";

const OurTeam = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-10">
          <h2 className="mb-2 text-3xl tracking-tight font-extrabold">
            Meet the HobbyHub Team
          </h2>
          <div className="flex-1 h-px w-1/10 mx-auto bg-gray-200 animate-ping"></div>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Get to know the passionate creators behind HobbyHub — a team
            dedicated to building a vibrant space for hobby lovers everywhere.
          </p>
        </div>

        {/* Team Grid with Lottie Background */}
        <div className="relative">
          {/* Background Animation */}
          <Lottie
            animationData={gradientBg}
            loop
            autoplay
            className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
          />

          {/* Grid Content */}
          <div className="relative z-10 grid p-10 gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ourTeam.map((team, index) => (
              <div
                key={index}
                className="text-center p-3"
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={team.image}
                  alt={team.name}
                />
                <h3 className="mb-1 text-xl font-bold tracking-tight">
                  {team.name}
                </h3>
                <p className="text-sm">{team.position}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  {team.icons.map((icon, i) => (
                    <li key={i}>
                      <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                      >
                        {icon.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
