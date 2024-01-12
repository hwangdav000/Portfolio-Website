import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// header
import Head from 'next/head';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/Logo-bg-2.ico"
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            className="h-full"
            style={{ zIndex: 80 }}
          >
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
