import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { toast } from 'react-toastify';
import useAxios from '../../Hooks/useAxios';

// Icons Import
import action from '../../assets/icons8-action-50.png';
import drama from '../../assets/icons8-drama-48.png';
import comedy from '../../assets/icons8-comedy-48.png';
import sci_fi from '../../assets/icons8-science-fiction-48.png';
import Thriller from '../../assets/icons8-thriller-100.png';
import Romance from '../../assets/icons8-romance-48.png';
import Horror from '../../assets/icons8-horror-48.png';
import Fantasy from '../../assets/icons8-fantasy-48.png';
import Documentary from '../../assets/icons8-document-64.png';

const staticGenres = [
  { name: "Action", icon: action },
  { name: "Drama", icon: drama },
  { name: "Comedy", icon: comedy },
  { name: "Sci-Fi", icon: sci_fi },
  { name: "Thriller", icon: Thriller },
  { name: "Romance", icon: Romance },
  { name: "Horror", icon: Horror },
  { name: "Fantasy", icon: Fantasy },
  { name: "Documentary", icon: Documentary },
];

const GenreSection = () => {
  const axios = useAxios();
  const [movieCounts, setMovieCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      const counts = {};
      try {
        // সব রিকোয়েস্ট একসাথে করার জন্য Promise.all ব্যবহার করা হয়েছে (Better Performance)
        await Promise.all(
          staticGenres.map(async (genre) => {
            try {
              const res = await axios.get(`/movies/filter?genre=${genre.name}`);
              counts[genre.name] = res.data.length;
            } catch (err) {
              counts[genre.name] = 0;
            }
          })
        );
        setMovieCounts(counts);
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, [axios]);

  const handleGenreClick = (genreName) => {
    const count = movieCounts[genreName] || 0;
    toast.info(`Exploring ${genreName}: Found ${count} movies`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <section className="py-16 md:py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">          
          <h2 className="text-3xl md:text-5xl font-black text-base-content tracking-tight">
            Browse <span className="text-primary italic">Movies</span> By Genre
          </h2>
          <p className="mt-4 text-base-content/60 font-medium italic">
            "Find your next favorite story in seconds"
          </p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {staticGenres.map((genre, index) => (
            <motion.button
              key={genre.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGenreClick(genre.name)}
              className="relative group overflow-hidden p-6 rounded-[var(--radius-box)] bg-base-200 border border-base-300 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-xl"
            >
              {/* Decorative Background Glow */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 mx-auto p-2 bg-base-100 rounded-2xl shadow-inner group-hover:rotate-6 transition-transform duration-300">
                  <img 
                    src={genre.icon} 
                    alt={genre.name} 
                    className={`w-full h-full object-contain ${loading ? 'animate-pulse' : ''}`} 
                  />
                </div>
                
                <h3 className="text-lg font-bold text-base-content mb-1 group-hover:text-primary transition-colors">
                  {genre.name}
                </h3>
                
                <span className="text-xs font-bold text-base-content/40 uppercase tracking-tighter">
                  {movieCounts[genre.name] ?? '...'} Titles
                </span>
              </div>

              {/* Hover Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-base-300 bg-base-200 text-sm text-base-content/50">
            Select a category to start your cinematic journey
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenreSection;