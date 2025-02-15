"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Product", "Review", "Benefits", "Pricing", "Changelog"];

  return (
    <motion.div
      className="fixed z-50 top-6 mx-auto w-fit" // Changed from fixed positioning to centered with auto margins
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
        opacity: { duration: 1.2 },
      }}
    >
      {/* Blob effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 via-purple-100/20 to-pink-100/20 blur-xl rounded-full" />

      {/* Frosted glass nav */}
      <nav className="relative px-2 py-0.5 rounded-full backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.toLowerCase()}>
              <button className="px-3 py-1.5 rounded-full transition-all duration-300 text-black">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Additional decorative blobs */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/20 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-200/20 rounded-full blur-xl" />
    </motion.div>
  );
};

export default Navbar;
