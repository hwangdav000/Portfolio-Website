import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
} from 'react-icons/fa';

import { SiPandas, SiTensorflow } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

//  data
const aboutData = [
  {
    title: 'Proficiency',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          { component: <FaPython />, title: 'Python' },
          { component: <FaJava />, title: 'Java' },
        ],
      },
      {
        title: 'Web Development',
        icons: [
          { component: <FaHtml5 />, title: 'HTML' },
          { component: <FaCss3 />, title: 'CSS' },
          { component: <FaJs />, title: 'JavaScript' },
          { component: <FaReact />, title: 'React' },
        ],
      },
      {
        title: 'Data Science',
        icons: [
          { component: <TbSql />, title: 'SQL' },
          { component: <SiPandas />, title: 'Pandas' },
          { component: <SiTensorflow />, title: 'Tensorflow' },
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer Intern - Siemens',
        stage: '2020 - Current',
      },
      {
        title: 'Student Instructor - Tech Academy',
        stage: '2019',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title:
          'B.S. Computer Science, Math Minor - University of Minnesota, Twin Cities',
        stage: '2021',
      },
      {
        title: 'M.S. Computer Science - University of Minnesota, Twin Cities ',
        stage: '2023',
      },
    ],
  },
  {
    title: 'Certifications',
    info: [
      {
        title: 'IBM Data Science - Coursera',
        stage: '2023',
      },
      {
        title: 'Machine Learning (DeepLearning.AI) - Coursera ',
        stage: '2023',
      },
    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-background py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-12">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
            style={{ zIndex: 1 }}
          >
            Turning <span className="text-accent">ideas </span> into reality
            through the language of <span className="text-accent">logic </span>{' '}
            and <span className="text-accent">innovation</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-text"
            style={{ zIndex: 1 }}
          >
            Korean-American heritage raised in the United States. Passionate
            about Data Science and learning new things every day.
          </motion.p>
          {/*  counters */}
          {/* removed */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[340px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`
                    ${
                      index === itemIndex
                        ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                        : 'after:bg-black'
                    } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0
                  `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-text"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          className="text-2xl text-black"
                          key={`${itemIndex}-${icon.title}-div`}
                        >
                          <a
                            data-tooltip-content={icon.title}
                            data-tooltip-id={`${itemIndex}-${icon.title}-icon`}
                          >
                            {icon.component}
                          </a>
                          <Tooltip id={`${itemIndex}-${icon.title}-icon`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
