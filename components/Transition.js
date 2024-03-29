import { motion } from 'framer-motion';

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen  bg-[#aac0af] "
        style={{ zIndex: 80 }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.4, ease: 'easeInOut' }}
        key="trans1"
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#b6c9ba]"
        style={{ zIndex: 80 }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key="trans2"
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#cedccc]"
        style={{ zIndex: 80 }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
        key="trans3"
      ></motion.div>
    </>
  );
};

export default Transition;
