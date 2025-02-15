"use client";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Green Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hidden md:block absolute -top-48 -right-[650px] w-3/4 h-screen"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-green-500/30 
          transform rotate-12 filter blur-3xl opacity-30"
          style={{
            borderRadius: "92% 28% 83% 17% / 71% 44% 56% 29%",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-green-400 via-green-500 to-emerald-400 
          transform -bottom-48 -rotate-6 mix-blend-multiply filter blur-2xl opacity-15"
          style={{
            borderRadius: "2% 58% 31% 69% / 23% 41% 59% 37%",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-green-400 
          transform -bottom-96 right-0 rotate-3 mix-blend-multiply filter blur-3xl opacity-10"
          style={{
            borderRadius: "53% 47% 43% 57% / 51% 39% 61% 49%",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <Navbar />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Badge content */}
          <div
            className="absolute inset-0 blur-lg rounded-full opacity-30"
            style={{
              background: `linear-gradient(90deg, #FFD700, #FFA500, #FFD700)`,
              backgroundSize: "200% 100%",
              animation: "shimmerBg 3s linear infinite",
            }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, #FFD700, #FFA500, #FFD700)`,
              backgroundSize: "200% 100%",
              animation: "shimmerBorder 2s linear infinite",
              padding: "1.5px",
            }}
          >
            <div className="w-full h-full bg-white/70 rounded-full" />
          </div>

          <div className="relative px-4 py-2 flex items-center gap-2">
            <span className="text-sm text-gray-800 z-10">55+ trusted user</span>
          </div>

          <style jsx>{`
            @keyframes shimmerBorder {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 200% 50%;
              }
            }
            @keyframes shimmerBg {
              0% {
                background-position: 200% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl italic mt-6 md:text-6xl lg:text-7xl font-bold text-center text-gray-900 max-w-4xl mb-8"
        >
          Aman Bhaiya is the boss of this collage
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8"
        >
          AI powered savings manager animated components and effects built with
          React, TypeScript, and Tailwind CSS.
        </motion.p>

        <div className="flex space-x-2">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors shadow-lg"
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-black-600 transition-colors shadow-lg"
          >
            ? More Info
          </motion.button>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-500 mt-12 text-center"
        >
          *Perfect companion for modern web development.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
