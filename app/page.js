import Navbar from "@/components/Navbar";
import TheProof from "@/sections/TheProof";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import OurArsenal from "@/sections/OurArsenal";
import OurUnfairAdvantage from "@/sections/OurUnfairAdvantage";
import CompanyStats from "@/sections/CompanyStats";
import Testimonials from "@/sections/Testimonials";
import Videos from "@/sections/Videos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Videos />
      <CompanyStats />
      <OurArsenal />
      <OurUnfairAdvantage />
      <TheProof />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
