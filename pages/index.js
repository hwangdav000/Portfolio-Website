import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="h-full bg-background py-32">
      {/* text */}
      <div className="container mx-auto w-full flex flex-col">
        <div className="text-center flex-1 flex flex-col justify-center xl:pt-40 xl:text-left mt-12">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 bold font-montserrat text-text"
          >
            Welcome <br />
            Welcome <br />
            <span className="text-accent">Welcome</span>
            <br />
            <div>
              My Name Is <br /> David Hwang <br />{' '}
              <span className="text-accent">Computer Programmer</span>
            </div>
          </motion.h1>

          {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>
      {/* image */}
      {/* <div className="w-full h-full absolute right-0 bottom-0"> */}
      {/* particles */}
      {/* <ParticlesContainer /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
