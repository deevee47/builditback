"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head of Sales",
      avatar: "/api/placeholder/32/32",
      rating: 5,
      text: "The platform delivered exceptional value. Their analytics provided deep insights into our operations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO at TechCo",
      avatar: "/api/placeholder/32/32",
      rating: 5,
      text: "Highly competent! The platform is fast, intuitive, and gives us the competitive advantage we needed.",
    },
    {
      id: 3,
      name: "Emily Roberts",
      role: "Marketing Director",
      avatar: "/api/placeholder/32/32",
      rating: 5,
      text: "Great experience! The insights provided are incredibly helpful.",
    },
    // Add more testimonials to fill the grid
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Valued Clients</h2>
          <p className="text-gray-600">
            We're here to help you make the right decision. Support our
            thousands using experience platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-4">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
