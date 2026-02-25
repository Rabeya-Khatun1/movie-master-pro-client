import React from 'react';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router';
import { FaPlay, FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import Inception from '../../assets/video/Inception.mp4'
import { CiSquareMore } from 'react-icons/ci';

const Banner = () => {
  return (
    <div 
     
      className="relative min-h-screen md:pt-24 flex items-center justify-between  px-4 md:px-8 lg:px-16 overflow-hidden bg-gray-900"
    >      
      {/* Left Content */}
      <div className="relative flex flex-col justify-center items-start z-10 max-w-2xl">
  

        {/* Main Headlines */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello <span className="text-primary">There!</span>
            <br />
            Welcome to Our <span className="text-primary text-4xl">MOVIEMASTERPRO!</span>
          </h2>
          
          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            Join the cinematic revolution. Watch blockbuster hits or become part of the action.
            Your movie journey starts here.
          </motion.p>
        </motion.div>

        {/* Featured Movie Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 mb-8 w-full max-w-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">IMDB:</span>
              <span className="text-white font-bold">8.8/10</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">USA</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300"> 2010</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">Inception</h3>
          <p className="text-gray-300 mb-6">
      Dom Cobb (Leonardo DiCaprio) is a skilled “extractor” who enters dreams to steal secrets. He is tasked with inception: planting an idea in someone’s mind. The film explores dreams, reality, and memory, leaving the audience questioning what is real.
          </p>
          
          <div className="flex items-center gap-4">
    <Link to={"/movies/691b1e79d7a64f1790ca986d"}>
            <motion.button
              className="btn btn-primary px-8 gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay />
              WATCH NOW
            </motion.button></Link>
           
          </div>
        </motion.div>



        {/* App Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-12"
        >
          <p className="text-gray-300 mb-4">OFFICIAL APP</p>
       <div className="flex gap-4">
  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn btn-neutral gap-2">
      <FaAppStore />
      App Store
    </button>
  </a>

  <a
    href="https://play.google.com/store/games?hl=en"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn btn-neutral gap-2">
      <FaGooglePlay />
      Google Play
    </button>

  </a>
  <Link to='/allMovies'>
    <button className=" gap-2">
    
   <CiSquareMore />
    </button></Link>
</div>

        </motion.div>

 
      </div>

      {/* Right Side - App/Platform Demo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden lg:block relative z-10"
      >
   {/* Mock App Interface */}
<div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-6 w-[500px] h-[600px] border border-gray-700 shadow-2xl mx-auto">
  
{/* Featured Movie Poster */}
<div className="relative rounded-xl overflow-hidden w-full h-full">

  {/* Video */}
  <video
    src={Inception}   
    controls
    autoPlay={false}
    loop
    muted
    className="w-full h-full object-cover"
  />

  {/* Movie Label */}
  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-md">
    <span className="text-white font-semibold text-sm">Inception</span>
  </div>

</div>


</div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <HiOutlineChevronDoubleDown className="text-3xl" />
      </motion.div>
    </div>
  );
};

export default Banner;