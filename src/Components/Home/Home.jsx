import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../HeroSections/HeroSection';
import Banner from '../Banner/Banner';
import StatsSection from '../StatesSection/StateSection';
import TopRatedMovies from '../TopRatedMovie/TopRatedMovies';
import RecentlyAdded from '../RecentlyAdded/RecentlyAdded';
import GenreSection from '../Genre/GenreSection';
import AboutPlatform from '../AboutPlatform/About';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="bg-gray-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Banner />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <TopRatedMovies />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <RecentlyAdded />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GenreSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <AboutPlatform />
      </motion.div>
    </div>
  );
};

export default Home;
