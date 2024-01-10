import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// framer motion
import { motion, AnimatePresence } from 'framer-motion';

// variants
import { fadeIn, fadeIn2, fadeInOut } from '../variants';

const Home = () => {
  return (
    <div className="h-full bg-background py-32 z-20">
      <div className="flex-1 flex flex-col justify-center xl:pt-40 text-left mt-12 items-center z-20">
        {/* title */}
        <motion.h1
          variants={fadeIn2('right', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1 bold font-montserrat text-text"
        >
          <div>
            My Name Is <br /> David Hwang <br />{' '}
            <span className="text-accent">Computer Programmer</span>
          </div>
        </motion.h1>
      </div>

      <div className="container mx-auto w-full flex flex-col">
        <div className="text-center flex-1 flex flex-col justify-center xl:pt-40 xl:text-left mt-12 z-20">
          {/* title */}

          <motion.h1
            variants={fadeInOut('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h1 bold font-montserrat text-text"
          >
            Welcome <br />
            Welcome <br />
            <span className="text-accent">Welcome</span>
          </motion.h1>
        </div>
      </div>

      <div className="w-full h-full absolute right-0 bottom-0 z-30">
        {/* particles */}
        {/* <ParticlesContainer /> */}
      </div>
    </div>
  );
};

export default Home;
