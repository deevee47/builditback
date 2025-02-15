import React from "react";
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    {
      name: "Google",
      url: "/images/logos/google.svg",
    },
    {
      name: "Microsoft",
      url: "/images/logos/microsoft.svg",
    },
    {
      name: "Amazon",
      url: "/images/logos/amazon.svg",
    },
    {
      name: "Netflix",
      url: "/images/logos/netflix.svg",
    },
    {
      name: "YouTube",
      url: "/images/logos/youtube.svg",
    },
    {
      name: "Instagram",
      url: "/images/logos/instagram.svg",
    },
    {
      name: "Uber",
      url: "/images/logos/uber.svg",
    },
    {
      name: "Spotify",
      url: "/images/logos/spotify.svg",
    },
    // Duplicate first few logos to ensure smooth infinite scroll
    {
      name: "Google",
      url: "/images/logos/google.svg",
    },
    {
      name: "Microsoft",
      url: "/images/logos/microsoft.svg",
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-gray-600 text-lg font-medium mb-12">
          TRUSTED BY LEADING TEAMS
        </h3>

        <div className="relative w-full overflow-hidden h-20">
          <motion.div
            className="flex absolute"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            <div className="flex gap-20 items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
