"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is acme.ai?",
      answer:
        "Acme.ai is an advanced AI-powered platform designed to help businesses optimize their operations and improve efficiency through intelligent automation and data analysis.",
    },
    {
      question: "How can I get started with acme.ai?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete our quick onboarding process, and you'll have access to our full suite of AI tools and features.",
    },
    {
      question: "What types of AI models does acme.ai support?",
      answer:
        "We support a wide range of AI models including natural language processing, computer vision, predictive analytics, and custom machine learning models tailored to your specific needs.",
    },
    {
      question: "Is acme.ai suitable for beginners in AI development?",
      answer:
        "Yes! We've designed our platform to be user-friendly for beginners while offering advanced features for experienced users. Our comprehensive documentation and support team are here to help you every step of the way.",
    },
    {
      question: "What kind of support does acme.ai provide?",
      answer:
        "We offer 24/7 technical support, detailed documentation, video tutorials, community forums, and dedicated account managers for enterprise customers to ensure you get the most out of our platform.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[85rem] mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center space-y-4 mb-12 md:mb-16"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Box className="w-4 sm:w-5 h-4 sm:h-5 text-white fill-green-500" />
              <span className="text-green-500 text-xs sm:text-sm font-medium">
                FAQ
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center max-w-xl px-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto w-full"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants} custom={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-medium py-4 hover:no-underline group">
                      <span className="group-hover:text-green-500 transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm sm:text-base pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
