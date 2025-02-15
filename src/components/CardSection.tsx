import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CardSection = () => {
  const cards = [
    {
      title: "Digital Innovation",
      description:
        "Transform your business with cutting-edge digital solutions. Our innovative approach combines the latest technology with strategic thinking to drive growth and efficiency.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scale your infrastructure seamlessly with our cloud-first approach. Get flexible, secure, and cost-effective solutions that grow with your business needs.",
      image: "/api/placeholder/600/400",

    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights. Our advanced analytics solutions help you make better decisions and uncover new opportunities for growth.",
      image: "/api/placeholder/600/400",

    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      {cards.map((card, index) => (
        <div key={index} className="mb-16 last:mb-0">
          <Card className="overflow-hidden">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src="https://img.freepik.com/premium-photo/3d-rising-bar-graph-isolated-yellow-background-business-growing-bars-4-step-up-financial-chart-3d-rendering_1014754-8472.jpg"
                  alt={card.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-lg mx-auto">
                  <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
