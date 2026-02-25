import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaStar, FaCloudDownloadAlt, FaUserFriends } from "react-icons/fa";

const AboutPlatform = () => {
  const features = [
    { 
      icon: <FaFilm />, 
      title: "Vast Library", 
      desc: "Access thousands of movies across all genres, from indie gems to blockbuster hits." 
    },
    { 
      icon: <FaStar />, 
      title: "Top Rated Picks", 
      desc: "Curated collections of trending and critically acclaimed films just for you." 
    },
    { 
      icon: <FaCloudDownloadAlt />, 
      title: "Watchlists", 
      desc: "Save your favorites and organize your personal watchlists with a single click." 
    },
    { 
      icon: <FaUserFriends />, 
      title: "Community", 
      desc: "Join thousands of movie lovers to share reviews and ratings worldwide." 
    },
  ];

  return (
    <section className="py-28 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Header Area */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-base-content leading-tight mb-6"
            >
              Your Ultimate <br /> 
              <span className="text-primary italic">Cinematic</span> Journey
            </motion.h2>
          </div>

          <div className="md:w-1/2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-base-content/70 leading-relaxed italic"
            >
              MovieMaster Pro is more than just a database. It’s a cutting-edge platform 
              designed for true cinephiles. Discover, explore, and manage your favorite 
              content with a seamless interface that puts the magic of cinema in your hands.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[var(--radius-box)] bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-base-content/60 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;