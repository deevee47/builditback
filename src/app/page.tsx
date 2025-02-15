import BookACall from "@/components/BookACall";
import CardSection from "@/components/CardSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import KeyTakeways from "@/components/KeyTakeways";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyWeShine from "@/components/WhyWeShine";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <WhyWeShine />
      <CardSection />
      <PricingSection />
      <ComparisonTable />
      <KeyTakeways />
      <Testimonials />
      <FAQSection />
      <BookACall />
    </div>
  );
}
