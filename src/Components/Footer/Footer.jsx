import React from "react";
import Logo from "../logo/Logo";
import { FaXTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Logo />
            <p className="text-base-content/60 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Your ultimate destination for movie tracking, reviews, and cinematic insights. Join our community of cinephiles today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h6 className="text-primary font-black uppercase tracking-widest text-xs italic">Quick Links</h6>
            <nav className="flex flex-col items-center md:items-start gap-4 text-sm font-bold uppercase tracking-tight">
              <a href="/about" className="hover:text-primary transition-colors duration-300">About Us</a>
              <a href="/contact" className="hover:text-primary transition-colors duration-300">Contact</a>
              <a href="/services" className="hover:text-primary transition-colors duration-300">Services</a>
            </nav>
          </div>

          {/* Privacy Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h6 className="text-primary font-black uppercase tracking-widest text-xs italic">Legals</h6>
            <nav className="flex flex-col items-center md:items-start gap-4 text-sm font-bold uppercase tracking-tight">
              <a href="/blogs" className="hover:text-primary transition-colors duration-300">Our Blog</a>
              <a href="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="/cookies" className="hover:text-primary transition-colors duration-300">Cookie Policy</a>
            </nav>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h6 className="text-primary font-black uppercase tracking-widest text-xs italic">Follow Us</h6>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com" },
                { icon: <FaXTwitter />, link: "https://x.com" },
                { icon: <FaYoutube />, link: "https://youtube.com" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-base-100 border border-base-content/10 text-base-content hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-base-content/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium opacity-50 uppercase tracking-tighter">
            &copy; {new Date().getFullYear()} <span className="text-primary font-black">MOVIEMASTER PRO</span>. All rights reserved.
          </p>
          <p className="text-[10px] font-black italic opacity-20 uppercase tracking-[0.3em]">
            Built for Cinema Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;