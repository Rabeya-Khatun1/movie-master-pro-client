
import React, { useState, useEffect } from 'react';

const StatCard = ({ count, label, icon }) => {
    const [displayCount, setDisplayCount] = useState(0);


    useEffect(() => {
        if (count > 0) {
            let start = 0;
            const duration = 2000;
            const step = Math.ceil(duration / 50);

            const timer = setInterval(() => {
          
                const increment = Math.ceil(count / (duration / 50));
                start += increment;
                
                if (start >= count) {
                    start = count;
                    clearInterval(timer);
                }
                setDisplayCount(start);
            }, 50);

            return () => clearInterval(timer);
        } else {
             setDisplayCount(0);
        }
    }, [count]);

    return (
        <div className="text-center p-6 bg-gray-800 rounded-xl shadow-lg w-64 transform transition duration-500 hover:scale-105">
            <div className="text-5xl mb-2">{icon}</div>
            <div className="text-6xl font-extrabold text-teal-400">
               
                {displayCount.toLocaleString()} 
            </div>
            <p className="text-lg mt-2 text-gray-400 uppercase tracking-widest">{label}</p>
        </div>
    );
};

export default StatCard;