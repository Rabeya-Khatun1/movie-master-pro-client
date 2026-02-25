import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Zubair Ahmed",
    role: "Movie Critic",
    image: "https://i.pravatar.cc/150?u=1",
    comment: "This platform is a game changer for cinephiles. Managing my collection has never been this smooth and aesthetic!",
    rating: 5
  },
  {
    id: 2,
    name: "Sara Islam",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?u=2",
    comment: "The UI is incredibly intuitive. I love how I can filter movies by genre and ratings so easily. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Rakib Hossain",
    role: "Casual Viewer",
    image: "https://i.pravatar.cc/150?u=3",
    comment: "The watchlist feature helps me keep track of my weekend plans. The dark mode is just the cherry on top!",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic text-base-content tracking-tighter"
          >
            What Our <span className="text-primary">Cinephiles</span> Say
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-base-200 p-10 rounded-[var(--radius-box)] border border-base-300 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 text-primary/10 text-7xl group-hover:text-primary/20 transition-colors pointer-events-none">
                <FaQuoteRight />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <HiStar 
                    key={i} 
                    className={`text-xl ${i < item.rating ? "text-primary" : "text-base-content/20"}`} 
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-base-content/70 italic mb-10 text-lg leading-relaxed relative z-10">
                "{item.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-5 border-t border-base-300 pt-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-primary/10 shadow-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-black text-xl text-base-content leading-none mb-2">{item.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              {/* Subtle Decorative Gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;