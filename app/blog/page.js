import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <section className="pt-24 md:pt-32 pb-14 md:pb-20 px-5 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 bg-[#4040FF]" />
                        <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                            Our Insights
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0B1021] mb-8 md:mb-12 leading-[1.15]">
                        Systems, AI, and <br className="hidden md:block" /> the Future of Growth.
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video bg-[#e2e2e2] rounded-lg mb-4 md:mb-5 overflow-hidden border border-[#e2e2e2]">
                                    <div className="w-full h-full bg-gradient-to-br from-[#4040FF]/10 to-[#0B1021]/10 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-xs font-medium text-[#4040FF] uppercase tracking-wider mb-2 block">
                                    AI Strategy
                                </span>
                                <h3 className="text-base md:text-xl font-medium text-[#0B1021] mb-3 group-hover:text-[#4040FF] transition-colors leading-[1.3]">
                                    How to Automate 80% of Your Customer Inquiries Without Sounding Like a Robot
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}