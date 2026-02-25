import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { Link, useNavigate, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { FiYoutube, FiArrowLeft, FiHeart } from "react-icons/fi";
import { FaEdit, FaStar, FaTrashAlt, FaPlay } from 'react-icons/fa';
import FullScreenLoader from '../FullScreenLoader';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

const ViewDetails = () => {
    const axios = useAxios();
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`/movies/${id}`)
            .then(result => {
                setDetails(result.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [axios, id]);

    const handleDelete = (movieId) => {
        Swal.fire({
            title: "Delete Movie?",
            text: "This cinematic piece will be removed forever!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#EF4444",
            cancelButtonColor: "#1F2937",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                axios.delete(`/movies/${movieId}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success('Movie Removed');
                            navigate('/all-movies'); 
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        toast.error('Failed to delete');
                    });
            }
        });
    };

    if (loading) return <FullScreenLoader />;

    const isOwner = user?.email === details.addedBy;

    return (
        <div className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-white">
            <ToastContainer position="bottom-right" theme="dark" />
            
            {/* Immersive Background Backdrop */}
            <div className="fixed inset-0 z-0">
                <img 
                    src={details.posterUrl} 
                    className="w-full h-full object-cover opacity-20 blur-3xl scale-110" 
                    alt="bg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-base-100/10 via-base-100 to-base-100"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors mb-8 group font-bold uppercase tracking-widest text-xs"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Explore
                </button>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Left: Premium Poster Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full lg:w-[400px] sticky top-28"
                    >
                        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5">
                            <img
                                src={details.posterUrl}
                                alt={details.title}
                                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <a 
                                    href={`https://www.youtube.com/results?search_query=${details.title} trailer`}
                                    target="_blank"
                                    className="p-6 bg-primary rounded-full text-white text-3xl shadow-2xl hover:scale-110 transition-transform"
                                >
                                    <FaPlay />
                                </a>
                            </div>
                        </div>
                        
                        {/* Quick Actions for Owner */}
                        {isOwner && (
                            <div className="flex gap-3 mt-6">
                                <Link to={`/movies/update/${details._id}`} className="flex-1">
                                    <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-sm font-black uppercase tracking-tighter transition-all">
                                        <FaEdit className="text-primary" /> Edit Vault
                                    </button>
                                </Link>
                                <button 
                                    onClick={() => handleDelete(details._id)}
                                    className="px-6 py-4 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-2xl transition-all"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Detailed Information */}
                    <div className="flex-1 space-y-10">
                        {/* Title & Badge Section */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest italic">
                                    {details.genre}
                                </span>
                                <span className="px-4 py-1.5 bg-base-200 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest italic opacity-60">
                                    {details.language}
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black italic text-base-content tracking-tighter uppercase leading-[0.9]">
                                {details.title}
                            </h1>
                            <div className="flex items-center gap-6 pt-2">
                                <div className="flex items-center gap-2">
                                    <FaStar className="text-primary text-2xl" />
                                    <span className="text-2xl font-black italic">{details.rating}/10</span>
                                </div>
                                <div className="h-8 w-[2px] bg-white/10"></div>
                                <span className="text-xl font-bold opacity-60">{details.releaseYear}</span>
                                <div className="h-8 w-[2px] bg-white/10"></div>
                                <span className="text-xl font-bold opacity-60">{details.duration}</span>
                            </div>
                        </div>

                        {/* Synopsis Card */}
                        <div className="bg-base-200/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-xl">
                            <h3 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Storyline</h3>
                            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed font-medium">
                                {details.plotSummary}
                            </p>
                        </div>

                        {/* Cast & Crew Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Director</h4>
                                <p className="text-2xl font-black italic opacity-90">{details.director}</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-primary font-black uppercase tracking-widest text-[10px]">Starring</h4>
                                <p className="text-lg font-bold opacity-70">{details.cast}</p>
                            </div>
                        </div>

                        {/* Secondary Actions */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                             <a 
                                href={`https://www.youtube.com/results?search_query=${details.title} trailer`}
                                target="_blank"
                                className="btn btn-primary btn-lg rounded-2xl px-12 italic font-black uppercase tracking-widest shadow-2xl shadow-primary/30"
                             >
                                <FiYoutube className="text-2xl" /> Play Trailer
                             </a>
                             <button className="btn btn-neutral btn-lg rounded-2xl px-8 border border-white/5 group">
                                <FiHeart className="group-hover:fill-primary group-hover:text-primary transition-all" /> Add to List
                             </button>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-3 opacity-30 italic text-xs pt-4">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span>Curated by {details.addedBy}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;