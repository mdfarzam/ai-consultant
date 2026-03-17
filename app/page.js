import Navbar from "@/components/Navbar";
import Analytics from "@/sections/Analytics";
import CTA from "@/sections/CTA";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Method1 from "@/sections/method1";
import Method2 from "@/sections/method2";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Videos from "@/sections/Videos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Videos />
      <Services />
      <Method1 />
      <Method2 />
      <Analytics />
      <Testimonials />
      <Faqs />
      <CTA />
      <Footer />
    </div>
  );
} 
