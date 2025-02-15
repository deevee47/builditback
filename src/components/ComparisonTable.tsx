"use client";
import React from "react";
import { Box, Check } from "lucide-react";
import { motion } from "framer-motion";

const ComparisonTable = () => {
  const tiers = ["Ayush", "Vaibhav", "Aman"];
  const features = [
    "AI Receipt Scanning",
    "Basic Expense Categories",
    "Monthly Reports",
    "Mobile App Access",
    "Email Support",
    "24/7 Support",
    "Smart Categorization",
    "Multi-currency Support",
    "Expense Forecasting",
    "Unlimited Receipt Processing",
  ];

  const availability: { [key: string]: boolean[] } = {
    Ayush: [true, true, true, true, true, false, false, false, false, false],
    Vaibhav: [true, true, true, true, true, true, true, false, false, false],
    Aman: [true, true, true, true, true, true, true, true, true, true],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100 min-h-screen"
    >
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-2">
          <Box className="w-5 h-5 text-white fill-green-500" />
          <span className="text-green-500 text-sm font-medium">
            COMPARISON
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Choose what suits you best.
        </h2>
      </div>
      <div className="overflow-x-auto w-full max-w-4xl shadow-xl rounded-lg border border-gray-300 bg-white">
        <table className="w-full border-collapse text-left text-gray-700">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="border border-gray-300 p-4 text-lg">Features</th>
              {tiers.map((tier) => (
                <th
                  key={tier}
                  className="border border-gray-300 p-4 text-lg text-center"
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className="odd:bg-gray-50 even:bg-white hover:bg-gray-200 transition"
              >
                <td className="border border-gray-300 p-4 font-medium">
                  {feature}
                </td>
                {tiers.map((tier) => (
                  <td
                    key={tier}
                    className="border border-gray-300 p-4 text-center"
                  >
                    {availability[tier][index] ? (
                      <Check className="text-green-500 inline-block w-6 h-6" />
                    ) : (
                      <span className="text-2xl font-bold text-gray-500">
                        —
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;
