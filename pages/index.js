import React from 'react';
import Typed from 'typed.js';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// framer motion
import { motion, AnimatePresence } from 'framer-motion';

// variants
import { fadeIn, fadeIn2, fadeInOut } from '../variants';

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    // Function to create Typed instance
    const createTypedInstance = () => {
      const typed = new Typed(el.current, {
        strings: [
          'Multi-Linguist',
          'Adventurer',
          'Artist',
          'Creator',
          'Data Scientist',
          'Web Designer',
          'Pianist',
          'Korean',
          'American',
          'Gamer',
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 5000,
        smartBackspace: false,
        loop: true,
        onLastStringBackspaced: () => (typed.strPos = 0),
      });

      // Return the Typed instance to use it later if needed
      return typed;
    };
    // Set a timeout before creating the Typed instance
    const timeoutId = setTimeout(() => {
      // Call the function to create Typed instance
      const typedInstance = createTypedInstance();

      // Cleanup function
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typedInstance.destroy();
      };
    }, 750); // Adjust the delay time as needed

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="h-full bg-background py-32 z-20">
      <div className="container mx-auto w-full flex flex-col">
        <div className="text-center flex-1 flex flex-col justify-center xl:pt-40  mt-12 z-40">
          {/* title */}

          <motion.h1
            variants={fadeInOut('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h-welcome bold font-montserrat text-text "
          >
            Welcome <br />
            Welcome <br />
            <span
              className="text-accent
            "
            >
              Welcome{' '}
            </span>
          </motion.h1>
        </div>
      </div>

      <div className="w-full h-full absolute right-0 bottom-0 z-30">
        {/* particles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 5, duration: 0.75 } }}
          exit={{ opacity: 0 }}
        >
          <ParticlesContainer />
        </motion.div>

        {/* Masking Motion Div */}
        <div
          id="collision-div"
          className="absolute h-full  cutout-sizing bg-[#e9e9e9]"
        />
      </div>

      <div className="w-full h-full absolute right-0 bottom-0 z-30">
        {/* title */}
        <motion.h1
          variants={fadeIn2('right', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h-title bold font-montserrat text-text z-20"
        >
          <div
            className="absolute left-1/2 items-center w-full h-full text-left"
            style={{ width: '1000px', left: '25%' }} // Set a fixed width
          >
            <div>
              <div>
                My Name Is <br /> David Hwang <br />{' '}
              </div>

              <span
                className="text-accent"
                ref={el}
              >
                Computer Scientist
              </span>
            </div>
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export default Home;
