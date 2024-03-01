// components
import WorkSlider from '../../components/WorkSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-background py-32">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col xl:flex-row gap-x-8 xl:mt-40 mt-14">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-20">
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-text text-sizing"
            >
              A <span className="text-accent">collection</span> of the projects
              that I worked on <span className="text-accent">personally</span>{' '}
              and <span className="text-accent">academically</span>.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            id="work_m_div"
            exit={{
              opacity: 0,
              position: 'absolute',
              transition: { duration: 0.0 },
            }}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
