// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Check, ArrowUpRight } from "lucide-react";

// const PricingCard = ({ tier, price, features, isPopular }: any) => {
//   return (
//     <Card
//       className={`w-full max-w-sm mx-auto ${
//         isPopular ? "border-blue-500 border-2" : ""
//       }`}
//     >
//       <CardHeader className="text-center">
//         <h3 className="text-2xl font-bold">{tier}</h3>
//         <div className="mt-4">
//           <span className="text-4xl font-bold">${price}</span>
//           <span className="text-gray-500 ml-2">/month</span>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-3">
//           {features.map((feature: any, index: any) => (
//             <li key={index} className="flex items-center">
//               <Check className="h-5 w-5 text-green-500 mr-2" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//       <CardFooter>
//         <Button
//           className={`w-full ${
//             isPopular ? "bg-blue-500 hover:bg-blue-600" : ""
//           }`}
//         >
//           Get Started
//           <ArrowUpRight className="ml-2 h-4 w-4" />
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// const PricingSection = () => {
//   const pricingTiers = [
//     {
//       tier: "Basic",
//       price: 99,
//       features: [
//         "Up to 5 users",
//         "Basic support",
//         "2GB storage",
//         "Email notifications",
//       ],
//       isPopular: false,
//     },
//     {
//       tier: "Pro",
//       price: 199,
//       features: [
//         "Up to 20 users",
//         "Priority support",
//         "10GB storage",
//         "Advanced analytics",
//         "Custom domains",
//       ],
//       isPopular: true,
//     },
//     {
//       tier: "Enterprise",
//       price: 299,
//       features: [
//         "Unlimited users",
//         "24/7 dedicated support",
//         "Unlimited storage",
//         "Advanced security",
//         "Custom integration",
//         "SLA guarantee",
//       ],
//       isPopular: false,
//     },
//   ];

//   return (
//     <div className="flex">
//       {pricingTiers.map((tier, index) => (
//         <PricingCard key={index} {...tier} />
//       ))}
//     </div>
//   );
// };

// export default PricingSection;



import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";

const PricingCard = ({ tier, price, features, isPopular }: any) => {
  return (
    <Card
      className={`w-full max-w-sm mx-auto ${
        isPopular ? "border-blue-500 border-2" : ""
      }`}
    >
      <CardHeader className="text-center">
        <h3 className="text-2xl font-bold">{tier}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            isPopular ? "bg-blue-500 hover:bg-blue-600" : ""
          }`}
        >
          Get Started
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      tier: "Basic",
      price: 99,
      features: [
        "AI Receipt Scanning & Recognition",
        "Basic Expense Categories",
        "Monthly Spending Reports",
        "Up to 100 Receipts/month",
        "Mobile App Access",
        "Up to 100 Receipts/month",
        "Web App Access",
        "Web App Access",
        "Email Support",
        "Mobile Support",
        "24/7 Support",
        "Monthly Graphs",
      ],
      isPopular: false,
    },
    {
      tier: "Pro",
      price: 199,
      features: [
        "Everything in Basic +",
        "Everything in Basic +",
        "Smart Expense Categorization",
        "Real-time Expense Tracking",
        "Up to 1000 Receipts/month",
        "Custom Categories & Tags",
        "Multi-currency Support",
        "Priority Support",
        "Priority Support",
        "Multi-currency Support",
        "Flash Support via Chats",
        "Expense Forecasting",
      ],
      isPopular: true,
    },
    {
      tier: "Enterprise",
      price: 299,
      features: [
        "Everything in Pro +",
        "Unlimited Receipt Processing",
        "Advanced AI Fraud Detection",
        "Custom Expense Policies",
        "Team Expense Management",
        "API Integration",
        "API Integration",
        "Dedicated Account Manager",
        "Team Expense Management",
        "Custom Reporting & Analytics",
        "Advanced AI Fraud Detection",
        "24/7 Premium Support",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="flex">
      {pricingTiers.map((tier, index) => (
        <PricingCard key={index} {...tier} />
      ))}
    </div>
  );
};

export default PricingSection;
