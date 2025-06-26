import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../assets/slider-1one.webp";
import slider2 from "../../assets/slider-twos.webp";
import slider3 from "../../assets/slider2thre.webp";
import { Link } from "react-router";

const sliderData = [
  {
    image: slider1,
    title: "Create Your Favorite Hobbies",
    description:
      "Capture moments, explore new passions, and share your interests with a community that celebrates creativity.",
    buttonText: "Create Hobbies",
  },
  {
    image: slider2,
    title: "Discover New Creative Adventures",
    description:
      "Travel the world, meet new people, and gather experiences that will last a lifetime. Adventure is calling!",
    buttonText: "Discover Now",
  },
  {
    image: slider3,
    title: "Build Your Creative Group",
    description:
      "Turn your free time into a journey of learning and creativity. Start building your own hobby world today.",
    buttonText: "Create Group",
  },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="overflow-hidden"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-[78vh]">
              {/* Background image */}
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-100 z-10"></div>

              {/* Slide Content */}
              <div className="absolute z-20 bottom-8 md:bottom-25 left-4 sm:left-8 md:left-26 max-w-xl text-white space-y-3">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-14 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-snug text-gray-200 drop-shadow">
                  {slide.description}
                </p>
               <Link
  to="/create-group"
  className="relative inline-block  bg-primary hover:bg-secondary mt-2 px-6 py-2 text-sm sm:text-base font-semibold text-white rounded-full overflow-hidden group"
>
  {/* Running animated border using mask technique */}
  <span className="absolute inset-0 rounded-full p-[2px] bg-[conic-gradient(from_0deg,_#002349,_teal,_#002349)] animate-borderRun z-0"></span>

  {/* Inner content with same border radius and background */}
  <span className="relative z-10 block  rounded-full">
    {slide.buttonText}
  </span>
</Link>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
