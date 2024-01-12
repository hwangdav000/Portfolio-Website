// fonts
import { Sora } from '@next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';

// framer motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Layout = ({ children }) => {
  return (
    <div
      className={
        'page bg-site text-black bg-cover bg-no-repeat ${sora.variable} font-sora relative'
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 5, duration: 0.75 } }}
        exit={{ opacity: 0 }}
        key="layout"
      >
        <Nav />
        <Header />
      </motion.div>

      {children}
    </div>
  );
};

export default Layout;
