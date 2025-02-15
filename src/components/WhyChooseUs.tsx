"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, PiggyBank, LineChart, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "AI-Powered Intelligence",
      description:
        "Our advanced AI analyzes spending patterns and market trends to make intelligent purchasing decisions, saving you time and resources.",
      icon: <Bot className="w-12 h-12 mb-4 text-green-500" />,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Maximize Savings",
      description:
        "Automatically identify cost-saving opportunities and optimize your purchasing strategy to reduce expenses and improve profits.",
      icon: <PiggyBank className="w-12 h-12 mb-4 text-green-500" />,
      gradient: "from-emerald-400 to-green-600",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Gain comprehensive analytics and actionable insights to make informed decisions about your procurement and spending strategy.",
      icon: <LineChart className="w-12 h-12 mb-4 text-green-500" />,
      gradient: "from-green-500 to-emerald-700",
    },
  ];

  return (
    <div className="relative py-60 px-6 bg-white">
      {/* Green Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hidden md:block absolute top-10 -left-[650px] w-3/4 h-screen"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 
          transform -rotate-12 filter blur-3xl opacity-10"
          style={{
            borderRadius: "92% 28% 83% 17% / 71% 44% 56% 29%",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-green-400 via-green-500 to-emerald-400 
          transform -bottom-48 rotate-6 mix-blend-multiply filter blur-2xl opacity-15"
          style={{
            borderRadius: "2% 58% 31% 69% / 23% 41% 59% 37%",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-green-400 
          transform -bottom-96 left-0 -rotate-3 mix-blend-multiply filter blur-3xl opacity-10"
          style={{
            borderRadius: "53% 47% 43% 57% / 51% 39% 61% 49%",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-green-500" />
            <h2 className="text-5xl md:text-6xl font-bold text-green-500">
              Why Choose Us?
            </h2>
          </div>
          <p className="text-lg text-green-600/80 max-w-2xl mt-4">
            Transform your business with our cutting-edge solutions that combine
            AI intelligence with practical insights
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full p-8 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl border-0 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <CardHeader>
                  <div className="flex flex-col items-center text-center relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {card.icon}
                    </motion.div>
                    <CardTitle className="text-2xl mb-4 font-bold text-green-500">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-green-600/80 text-lg leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
