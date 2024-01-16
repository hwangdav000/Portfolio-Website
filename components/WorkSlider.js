/* eslint-disable react/jsx-key */
import Image from 'next/image';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper sytles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Beijing Pollution Time Series Modeling',
          path: '/thumb1_1.jpg',
          link: 'https://github.com/hwangdav000/Beijing_Air_Pollution',
        },
        {
          title: 'Analysis of Various Transformers',
          path: '/thumb2_1.jpg',
          link: 'https://github.com/hwangdav000/Transformers_NLP',
        },
        {
          title: 'Crop Classification using a CNN-Transformer',
          path: '/thumb3_1.jpg',
          link: 'https://github.com/hwangdav000/CNN-Transformer',
        },
        {
          title: 'Baxter Block Pickup',
          path: '/thumb4_1.jpg',
          link: 'https://github.com/hwangdav000/ROS_Baxter',
        },
      ],
    },
    {
      images: [
        {
          title: 'Turtle Translations',
          path: '/thumb5_2.jpg',
          link: 'https://github.com/hwangdav000/Translation_Website',
        },
        {
          title: 'Siemens Coding Challenge',
          path: '/thumb6_2.jpg',
          link: 'https://github.com/hwangdav000/SiemensChallenge',
        },
        {
          title: 'Munchies Quiz App',
          path: '/thumb7_2.jpg',
          link: 'https://github.com/hwangdav000/Munchies',
        },
        {
          title: 'Portfolio',
          path: '/thumb8_2.jpg',
          link: 'https://github.com/hwangdav000/Portfolio-Website',
        },
      ],
    },
  ],
};

// Function to generate a random hex color
const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="xl:h-[500px] lg:h-[600px] md:h-[500px] sm:h-[420px] h-[380px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500 cursor-pointer">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#e0c6ad] via-[#c2a172] to-[#9e8140] opacity-20"></div>

                    <div className="absolute inset-0 bg-gradient-to-l from-[#9eb5a3] via-[#3a5cbf] to-[#1e235e] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white"
                      >
                        <div className="flex items-center gap-x-2 text-white">
                          <div className="translate-y-[500%] custom-translate transition-all duration-300 custom-translate px-4">
                            {image.title}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
