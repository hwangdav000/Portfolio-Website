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
      <div className="container mx-auto w-full flex flex-col">
        <div className="text-center flex-1 flex flex-col justify-center xl:pt-40  mt-12 z-20">
          {/* title */}

          <motion.h1
            variants={fadeInOut('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h-welcome text-[10rem] md:text-[2rem] bold font-montserrat text-text "
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

        {/* title */}
        <motion.h1
          variants={fadeIn2('right', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h-title bold font-montserrat text-text z-20"
        >
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <div>
              My Name Is <br /> David Hwang <br />{' '}
              <span className="text-accent">Computer Programmer</span>
            </div>
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
