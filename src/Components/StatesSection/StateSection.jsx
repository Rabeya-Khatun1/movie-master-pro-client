import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { HiUsers } from 'react-icons/hi';
import { PiFilmSlateFill, PiVideoCameraFill } from 'react-icons/pi';
import useAxios from '../../Hooks/useAxios';

const StatCounter = ({ value, title, icon: Icon, delay = 0 }) => {
    const count = useSpring(0, { stiffness: 40, damping: 20 });
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, delay });
        return controls.stop;
    }, [value, count, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative flex flex-col items-center p-10 rounded-[var(--radius-box)] bg-base-200 border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 w-full max-w-xs"
        >
            {/* Icon Floating Badge */}
            <div className="absolute -top-6 bg-primary p-4 rounded-xl shadow-lg ring-4 ring-base-100">
                <Icon className="text-3xl text-white" />
            </div>
            
            <div className="mt-4 text-center">
                <motion.h3 className="text-5xl md:text-6xl font-black tracking-tight text-base-content">
                    {rounded}
                </motion.h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-widest text-base-content/60">
                    {title}
                </p>
            </div>
        </motion.div>
    );
};

const StatsSection = () => {
    const axios = useAxios();
    const [stats, setStats] = useState({ totalMovies: 0, totalUsers: 0 });

    useEffect(() => {
        axios.get('/stats')
            .then(res => setStats(res.data))
            .catch(err => console.error(err));
    }, [axios]);

    return (
        <section className=" transition-colors duration-300">
            <div className="container mx-auto px-6">
                <header className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black mb-6 tracking-tighter"
                    >
                        <PiFilmSlateFill className="animate-pulse text-lg" />
                        <span>PLATFORM METRICS</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content tracking-tight">
                        MovieMaster <span className="text-primary">Pro</span> Stats
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
                </header>

                <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
                    <StatCounter 
                        value={stats.totalMovies} 
                        title="Total Movies" 
                        icon={PiVideoCameraFill} 
                        delay={0.1}
                    />
                    <StatCounter 
                        value={stats.totalUsers} 
                        title="Active Users" 
                        icon={HiUsers} 
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;