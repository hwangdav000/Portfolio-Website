//components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import {} from 'framer-motion';

// variants
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className="h-full bg-background py-32">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[700px] mt-12">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {/* text */}
            Contact <span className="text-accent">Me</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full max-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input border-black/10 bg-gray-300 placeholder-black/60"
              />
              <input
                type="text"
                placeholder="email"
                className="input border-black/10 bg-gray-300 placeholder-black/60"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input border-black/10 bg-gray-300 placeholder-black/60"
            />
            <textarea
              placeholder="message"
              className="textarea border-black/10 bg-gray-300 placeholder-black/60"
            ></textarea>
            <button
              className="btn
              rounded-full
             border border-black/10 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group bg-gray-300"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
