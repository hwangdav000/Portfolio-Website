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

// icons
import { BsArrowRight } from 'react-icons/bs';

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
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={image.path}
                        width={500}
                        height={400}
                        alt=""
                      />
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
