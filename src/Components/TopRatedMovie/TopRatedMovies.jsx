import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const TopRatedMovies = () => {
  const axios = useAxios();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies/top-rated')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, [axios]);

  return (
    <div className="p-6 pt-16 md:py-20 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-base-content">
        Top Rated <span className="text-primary">Movies</span>
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        spaceBetween={24}
        slidesPerView={1}
        navigation={true} 
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      
      >
        {movies.map(movie => (
          <SwiperSlide key={movie._id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group rounded-[var(--radius-box)] overflow-hidden shadow-lg bg-base-100 border border-base-300 h-[400px]"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2 italic">
                  {movie.plotSummary || "Explore more details about this top-rated movie."}
                </p>
                <Link to={`/movies/${movie._id}`}>
                  <button className="btn-primary w-full py-2 font-bold uppercase tracking-wider text-xs">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedMovies;