import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { PiFilmSlateFill } from 'react-icons/pi';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import { motion } from "framer-motion";
import { CiBoxList, CiHome, CiLogout } from "react-icons/ci";
import { BiCookie, BiMoviePlay } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineDashboardCustomize, MdOutlineFeaturedPlayList, MdOutlineHomeRepairService, MdOutlinePrivacyTip, MdOutlineRecentActors, MdOutlineRoundaboutLeft } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { GrBlog } from "react-icons/gr";
import { IoStatsChartOutline } from "react-icons/io5";
import { GoCodeReview } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import Logo from '../logo/Logo';

const Navbar = ({ setActiveSection, activeSection }) => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'light');
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success('Log Out Success!');
        navigate('/login');
      })
      .catch(() => toast.error('Log Out Failed'));
  };

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300
     ${isActive
       ? "bg-primary/90 text-white shadow-md shadow-primary/30 scale-[1.04]"
       : "text-gray-200 hover:bg-primary/20 hover:text-white hover:shadow-sm"
     }`;

  const scrollItemClass = (id) => `
    flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300
    ${activeSection === id
      ? "bg-primary/90 text-white shadow-md shadow-primary/30 scale-[1.04] pointer-events-none"
      : "text-gray-200 hover:bg-primary/20 hover:text-white hover:shadow-sm"
    }
  `;

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
  };

  const publicLinks = [
    { to: "/", label: "Home", icon: <CiHome className="text-lg" /> },
    { to: "/allMovies", label: "All Movies", icon: <BiMoviePlay className="text-lg" /> },
  ];

  const defaultLinks = (
    <>
      <NavLink to="/about" className={navItemClass}><MdOutlineRoundaboutLeft className="text-lg" /> About</NavLink>
      <NavLink to="/contact" className={navItemClass}><RiContactsLine className="text-lg" /> Contact</NavLink>
      <NavLink to="/privacy-policy" className={navItemClass}><MdOutlinePrivacyTip className="text-lg" /> Privacy</NavLink>
      <NavLink to="/cookies" className={navItemClass}><BiCookie className="text-lg" /> Cookies</NavLink>
      <NavLink to="/blogs" className={navItemClass}><GrBlog className="text-lg" /> Blog</NavLink>
      <NavLink to="/testimonial" className={navItemClass}><GoCodeReview className="text-lg" /> Testimonials</NavLink>
      <NavLink to="/news-letter" className={navItemClass}><AiOutlineMail className="text-lg" /> Newsletter</NavLink>
      <NavLink to="/services" className={navItemClass}><MdOutlineHomeRepairService className="text-lg" /> Services</NavLink>
    </>
  );

  const userLinks = (
    <>
      <NavLink to="/myCollection" className={navItemClass}><BsCollectionPlay className="text-lg" /> Collection</NavLink>
      <NavLink to="/myWatchlist" className={navItemClass}><CiBoxList className="text-lg" /> Watchlist</NavLink>
      <NavLink to="/dashboard" className={navItemClass}><MdOutlineDashboardCustomize className="text-lg" /> Dashboard</NavLink>
    </>
  );

  const scrollLinks = [
    { id: "stats", label: "Stats", icon: <IoStatsChartOutline className="text-lg" /> },
    { id: "topRated", label: "Top Rated", icon: <BiMoviePlay className="text-lg" /> },
    { id: "recent", label: "Recent", icon: <MdOutlineRecentActors className="text-lg" /> },
    { id: "contact", label: "Contact", icon: <RiContactsLine className="text-lg" /> },
    { id: "services", label: "Services", icon: <MdOutlineFeaturedPlayList className="text-lg" /> },
    { id: "blog", label: "Blog", icon: <GrBlog className="text-lg" /> },
    { id: "news-letter", label: "Newsletter", icon: <AiOutlineMail className="text-lg" /> },
    { id: "testimonial", label: "Testimonials", icon: <GoCodeReview className="text-lg" /> },
    { id: "about", label: "About", icon: <MdOutlineRoundaboutLeft className="text-lg" /> },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/allMovies?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/70 to-transparent backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="navbar-start flex items-center gap-5 lg:gap-8">
        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white hover:bg-primary/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-2xl bg-base-900/95 backdrop-blur-lg rounded-2xl w-72 border border-white/10 max-h-[80vh] overflow-y-auto">
            {publicLinks.map(link => (
              <li key={link.to}>
                <NavLink to={link.to} className={navItemClass}>
                  {link.icon} {link.label}
                </NavLink>
              </li>
            ))}
            {user ? userLinks : defaultLinks}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3">
      
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white tracking-tight hover:text-primary transition-colors">
                <div className="hidden md:block">
            <Logo />
          </div>
          </Link>
        </div>
      </div>

      {/* Desktop Center Menu */}
   {/* Desktop Center Menu */}
<div className="navbar-center hidden lg:flex flex-1 justify-center overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-base-900/40">
  <ul className="menu menu-horizontal px-1 gap-2 flex-nowrap min-w-max">
    {publicLinks.map(link => (
      <li key={link.to}>
        <NavLink to={link.to} className={navItemClass}>
          {link.icon} {link.label}
        </NavLink>
      </li>
    ))}

    {user
      ? userLinks
      : scrollLinks.map(link => (
          <li key={link.id}>
            <button
              onClick={() => handleScroll(link.id)}
              className={scrollItemClass(link.id)}
            >
              {link.icon} {link.label}
            </button>
          </li>
        ))}
  </ul>
</div>

      {/* Right Side */}
      <div className="navbar-end flex items-center gap-4 lg:gap-6">
        {user ? (
          <>
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered bg-base-900/60 border-white/10 text-white placeholder:text-gray-400
                           w-40 md:w-56 lg:w-64 focus:w-72 transition-all duration-300 rounded-xl h-11 pl-4 pr-10
                           focus:bg-base-900/80 focus:border-primary/50 focus:shadow-md focus:shadow-primary/20"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Add Movie Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
            >
              <Link to="/movies/add">
                <button className="btn btn-primary gap-2 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow px-5">
                  <FaPlus /> Add Movie
                </button>
              </Link>
            </motion.div>

            {/* User Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-primary/20">
                <div className="w-11 rounded-full ring-2 ring-primary/40 ring-offset-2 ring-offset-base-900">
                  <img
                    alt="User avatar"
                    src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  />
                </div>
              </label>
<ul
  tabIndex={0}
  className="dropdown-content mt-3 z-[100] w-64 
             bg-black
             rounded-2xl border border-white/10 
             shadow-2xl flex flex-col"
>

  {/* User Name */}
  <div className="px-4 py-3 border-b border-white/10 text-gray-200 font-semibold">
    {user?.displayName || "User"}
  </div>

  {/* Scrollable Routes */}
  <div className="flex-1 overflow-y-auto p-2 space-y-1 max-h-60">
    {defaultLinks}
    {userLinks}
  </div>

  {/* Bottom Fixed Actions */}
  <div className="border-t border-white/10 p-3 flex flex-col gap-2">

    {/* Theme Toggle */}
    <button
      onClick={handleToggle}
      className="w-full py-2 rounded-lg bg-primary/20 text-white hover:bg-primary/40 transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>

    {/* Logout */}
    <button
      onClick={handleLogOut}
      className="w-full py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
    >
      Logout
    </button>

  </div>
</ul>

            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={handleToggle}
              className="btn btn-ghost text-gray-200 hover:text-primary hover:bg-primary/10 rounded-xl px-4"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <Link to="/login" className="btn btn-outline btn-primary rounded-xl px-6">
              Login
            </Link>

            <Link to="/register" className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/30">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;