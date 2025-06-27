import { ourTeam } from "../../utilities/OurTeamData";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const OurTeam = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-10">
          <h2 className="mb-2 text-2xl tracking-tight font-extrabold">
            Meet the HobbyHub Team
          </h2>
          <div className="flex-1 h-px w-1/10 mx-auto bg-gray-200 animate-ping"></div>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Get to know the passionate creators behind HobbyHub — a team
            dedicated to building a vibrant space for hobby lovers everywhere.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper relative z-10 !pb-10"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {ourTeam.map((team, index) => (
            <SwiperSlide
              key={index}
              className="bg-gray-50 bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-xl w-[280px] md:w-[300px]"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
                src={team.image}
                alt={team.name}
              />
              <h3 className="mb-1 text-gray-800 text-xl font-bold tracking-tight">
                {team.name}
              </h3>
              <p className="text-sm text-gray-600">{team.position}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;
