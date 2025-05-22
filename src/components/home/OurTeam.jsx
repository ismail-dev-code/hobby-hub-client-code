import { ourTeam } from "../../utilities/OurTeamData";

const OurTeam = () => {
  
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-10">
          <h2 class="mb-2 text-3xl tracking-tight font-extrabold ">
            Meet the HobbyHub Team
          </h2>
          <div className="flex-1 h-px w-1/10 mx-auto bg-gray-200 animate-ping"></div>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Get to know the passionate creators behind HobbyHub — a team
            dedicated to building a vibrant space for hobby lovers everywhere.
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ourTeam.map((team) => (
            <div class="text-center shadow-2xl p-3 rounded-2xl">
              <img
                class="mx-auto mb-4 w-36 h-36 rounded-full"
                src={team.image}
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight">
                <h1>{team.name}</h1>
              </h3>
              <p>{team.position}</p>
              <ul class="flex justify-center mt-4 space-x-4">
                {team.icons.map((icon) => (
                  <li>
                    <a
                      href={icon.link}
                      target="_blank"
                      class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
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
    </section>
  );
};

export default OurTeam;
