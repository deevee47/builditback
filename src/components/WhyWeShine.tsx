"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Globe2,
  Shield,
  Lightbulb,
  TrendingUp,
  Sparkles,
  Zap,
  ChartBar,
  LineChart,
  Brain,
  Lock,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const marqueeStyle = `
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 15s linear infinite;
}

.animate-marquee-slow {
  animation-duration: 20s;
}`;

const marqueeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Carousel = ({ items, chipStyle, speed }: any) => {
  return (
    <motion.div
      className="relative overflow-hidden w-full"
      initial="hidden"
      animate="visible"
      variants={marqueeVariants}
    >
      <style>{marqueeStyle}</style>
      <div className={`flex whitespace-nowrap ${speed} gap-2`}>
        {[...items, ...items].map((item, index) => (
          <motion.span
            key={index}
            className={`px-3 py-1 rounded-full text-xs ${chipStyle}`}
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const WhyWeShine = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const takeaways = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms analyze complex data patterns to provide actionable insights for strategic decision-making.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description:
        "Process and analyze data in real-time, enabling quick responses to market changes and emerging opportunities.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "State-of-the-art encryption and security measures protect your sensitive data from potential threats.",
    },
    {
      icon: ChartBar,
      title: "Automated Reporting",
      description:
        "Generate comprehensive reports automatically, saving time and ensuring consistent data presentation.",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description:
        "Leverage machine learning to forecast trends and make data-driven decisions for future growth.",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description:
        "Built-in compliance features ensure your data handling meets industry standards and regulations.",
    },
  ];

  const features = [
    "AI-driven Analytics",
    "24/7 Support",
    "Scalable Solutions",
    "User-friendly UI",
    "High Security",
    "Cloud Integration",
    "Cost Savings",
    "Real-time Insights",
  ];

  return (
    <div className="relative py-32 px-6 bg-white">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-green-600" />
            <h2 className="text-5xl pb-2 md:text-6xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Why We Shine
            </h2>
          </div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover the achievements and milestones that set us apart in
            delivering excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {takeaways.map((takeaway, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-green-50 rounded-full p-4 mb-6">
                <takeaway.icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{takeaway.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {takeaway.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 w-full">
          <Carousel
            items={features}
            chipStyle="bg-gray-300/80 text-gray-600"
            speed="animate-marquee"
          />
          <Carousel
            items={features}
            chipStyle="bg-gray-300/80 text-gray-600 mt-4"
            speed="animate-marquee-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWeShine;
