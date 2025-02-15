"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

function BookACall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex justify-center items-center h-screen px-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white text-black p-6 rounded-2xl shadow-2xl w-[40rem] text-center border border-yellow-300"
      >
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-3"
        >
          <PhoneCall className="w-10 h-10 text-yellow-400" />
        </motion.div>
        <h2 className="text-xl font-extrabold mb-2 text-yellow-500">
          🚀 Book a 15-Minute Strategy Call
        </h2>
        <p className="text-sm mb-2 text-gray-700">
          Have an idea? Let's discuss and bring it to life with expert guidance.
        </p>
        <p className="text-xs mb-4 text-gray-500 italic">
          Still confused? Let's chat and clear things up!
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#facc15" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-yellow-400 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl"
        >
          Schedule Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default BookACall;
