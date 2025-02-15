"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Box, TrendingUp, Wallet, Sparkles, BarChart3 } from "lucide-react";

const KeyTakeaways = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Gain Smart, Actionable Spending Insights",
      className: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Wallet,
      title: "Flexible, Tailored Cash-Back Plans Available",
      className: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Sparkles,
      title: "Experience Fully Automated Business Savings",
      className: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: BarChart3,
      title: "Efficient Expense Management Tools",
      className: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  const cardVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <Box className="w-5 h-5 text-white fill-green-500" />
              <span className="text-green-500 text-sm font-medium">
                KEY TAKEAWAYS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Maximize Your Savings with Smart Automation
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Save effortlessly with smart automation that maximizes rewards on
              every purchase, tailored to your needs.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="relative">
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-6 rounded-xl ${feature.className} hover:scale-[1.02] transition-transform cursor-pointer`}
                >
                  <div className={`${feature.iconColor}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 -bottom-10 -left-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;
