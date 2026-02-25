import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';

const ContactUs = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
        e.target.reset();
    };

    return (
        <div className="min-h-screen px-4 md:px-12 lg:px-24 py-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-5">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black italic text-base-content tracking-tighter"
                    >
                        Contact <span className="text-primary">Us</span>
                    </motion.h1>
                    <p className="text-lg text-base-content/60 mt-6 max-w-2xl mx-auto">
                        Have a question or just want to say hi? We'd love to hear from you. 
                        Our team usually responds within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-black italic text-base-content tracking-tight">Contact Information</h2>
                        
                        {/* Email Card */}
                        <div className="group p-8 bg-base-200 rounded-[var(--radius-box)] border border-base-300 hover:border-primary/30 transition-all duration-300 flex items-center gap-6 shadow-sm hover:shadow-xl">
                            <div className="p-5 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                                <HiOutlineMail className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base-content/40 uppercase text-[10px] tracking-[0.2em]">Email Us</h3>
                                <p className="text-xl md:text-2xl font-black text-base-content">moviemaster@pro.com</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="group p-8 bg-base-200 rounded-[var(--radius-box)] border border-base-300 hover:border-primary/30 transition-all duration-300 flex items-center gap-6 shadow-sm hover:shadow-xl">
                            <div className="p-5 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                                <HiOutlineLocationMarker className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base-content/40 uppercase text-[10px] tracking-[0.2em]">Location</h3>
                                <p className="text-xl md:text-2xl font-black text-base-content">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                      {/* Social Box */}
<div className="p-10 bg-base-300 rounded-[var(--radius-box)] relative overflow-hidden group shadow-inner">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
    <h3 className="font-black text-xl mb-6 italic text-base-content relative z-10">Follow Our Updates</h3>
    <div className="flex gap-4 relative z-10">
        {[
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaTwitter />, link: "https://x.com" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
            { icon: <FaGithub />, link: "https://github.com" }
        ].map((social, i) => (
            <a key={i} href={social.link} target='_blank' rel="noreferrer">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-base-content/20 text-base-content hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-md hover:scale-110 active:scale-95">
                    <span className="text-lg">
                        {social.icon}
                    </span>
                </button>
            </a>
        ))}
    </div>
</div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-base-200 p-8 md:p-12 rounded-[var(--radius-box)] border border-base-300 shadow-2xl relative"
                    >
                        <h2 className="text-3xl font-black italic mb-8 text-base-content tracking-tight">Send Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <input type="text" placeholder="Your Name" className="input bg-base-100 border-base-300 focus:border-primary focus:outline-none h-14 rounded-xl text-base-content transition-all shadow-inner" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Your Email" className="input bg-base-100 border-base-300 focus:border-primary focus:outline-none h-14 rounded-xl text-base-content transition-all shadow-inner" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <select className="select bg-base-100 border-base-300 focus:border-primary focus:outline-none h-14 rounded-xl text-base-content shadow-inner">
                                    <option disabled selected>Pick a reason</option>
                                    <option>General Inquiry</option>
                                    <option>Bug Report</option>
                                    <option>Feature Request</option>
                                    <option>Privacy Concern</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <textarea className="textarea bg-base-100 border-base-300 focus:border-primary focus:outline-none h-40 rounded-xl text-base-content shadow-inner p-4" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button className="btn btn-primary w-full h-16 rounded-xl shadow-lg shadow-primary/20 text-white font-black uppercase tracking-widest group">
                                Send Message
                                <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Success Toast */}
            {showToast && (
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="toast toast-end toast-bottom z-50 p-6"
                >
                    <div className="alert bg-primary text-white shadow-2xl rounded-2xl border-none pr-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="font-black uppercase text-xs tracking-tighter">Message sent successfully!</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ContactUs;