import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoPaperPlane } from "react-icons/io5";
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the club! 🎬");
      setEmail("");
    }
  };

  return (
    <section className="pt-32 pb-16 px-6 bg-base-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative group">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[3rem] bg-base-200 p-10 md:p-24 border border-base-300 shadow-2xl transition-all duration-700"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-40 -mb-40"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">Live Premiere Updates</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black italic text-base-content leading-tight mb-6 tracking-tighter uppercase">
                Don't Watch <br />
                <span className="text-primary">Alone.</span>
              </h2>
              <p className="text-base-content/60 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                Join our elite circle of cinephiles. Get curated movie lists and underground news before anyone else.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5 w-full">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    placeholder="yourname@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-base-100 border border-base-300 px-8 py-6 outline-none rounded-3xl text-base-content placeholder:text-base-content/30 font-bold focus:border-primary/50 transition-all shadow-inner"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white font-black px-10 py-6 rounded-3xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 uppercase tracking-[0.2em] text-sm group/btn"
                >
                  Join the Premiere
                  <IoPaperPlane className="text-xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
              <p className="text-[10px] text-base-content/40 mt-6 text-center lg:text-left font-bold tracking-widest uppercase">
                Locked & Secured • No Spam Policy
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;