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
      buttonText: "Learn More",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scale your infrastructure seamlessly with our cloud-first approach. Get flexible, secure, and cost-effective solutions that grow with your business needs.",
      image: "/api/placeholder/600/400",
      buttonText: "Explore Services",
    },
    {
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights. Our advanced analytics solutions help you make better decisions and uncover new opportunities for growth.",
      image: "/api/placeholder/600/400",
      buttonText: "View Analytics",
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
                  src={card.image}
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
                  <Button>{card.buttonText}</Button>
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
