import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slider1 from '../../assets/slider-1one.webp';
import slider2 from '../../assets/slider-twos.webp';
import slider3 from '../../assets/slider2thre.webp';
import { Link } from 'react-router';

const sliderData = [
  {
    image: slider1,
    title: 'Create Your Favorite Hobbies',
    description: 'I love photography, traveling to new places, reading inspiring books, coding creative projects, and enjoying peaceful music in my free time.',
    buttonText: 'Create Hobbies',
  },
  {
    image: slider2,
    title: 'Discover New Adventures',
    description: 'Travel the world, meet new people, and gather experiences that will last a lifetime. Adventure is calling!',
    buttonText: 'Discover Now',
  },
  {
    image: slider3,
    title: 'Build Your Creative Group',
    description: 'Turn your free time into a journey of learning and creativity. Start building your own hobby world today.',
    buttonText: 'Create Group',
  },
];

const Slider = () => {
  return (
    <div className="w-full md:mt-8 mt-6 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-28 left-4 sm:left-6 md:left-16 z-10 text-white space-y-1.5 md:space-y-3 max-w-md sm:max-w-lg md:max-w-xl">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  {slide.description}
                </p>
                <Link
                  to="/create-group"
                  className="btn btn-sm sm:btn-md md:btn-lg bg-violet-600 hover:bg-violet-700 text-white rounded-full px-4 py-2"
                >
                  {slide.buttonText}
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
