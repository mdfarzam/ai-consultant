'use client';

import Link from 'next/link';
import { LuStar } from 'react-icons/lu';

export default function Hero() {
    return (
        <section className="w-full bg-[#FAFAFA] flex flex-col items-center justify-center px-5 md:px-6 pt-28 md:pt-32 pb-12 md:pb-16 text-center">

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
                <span className="w-2 h-2 mb-0.5 bg-[#4040FF]" />
                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                    The Growth Secrets Behind 30+ Scaled Businesses
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.03em] text-[#0B1021]">
                Growth That Scales <br /> Without the Burnout
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-sm md:text-base font-medium text-[#4A5578] leading-[1.6] max-w-xl mx-auto">
                Stop letting manual tasks cap your revenue. We deploy AI systems that
                automate 80% of your workload, giving you the freedom to scale while we handle the tech.
            </p>

            {/* CTA Buttons */}
            <div className="my-7 md:my-8 flex items-center gap-3 md:gap-4 flex-wrap justify-center">
                <Link
                    href="/contact"
                    className="px-6 md:px-7 py-3 md:py-3.5 rounded-lg text-sm font-medium text-white bg-[#4040FF] hover:bg-[#2e2ee0] transition-all shadow-sm hover:-translate-y-0.5 border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                >
                    Book a Free Call
                </Link>
                <Link
                    href="/#results"
                    className="px-6 md:px-7 py-3 md:py-3.5 rounded-lg text-sm font-medium text-[#0B1021] bg-white border border-neutral-300 border-b-[3px] hover:bg-neutral-100 transition-all active:border-b active:translate-y-[2px]"
                >
                    See the Results
                </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
                {/* Avatars */}
                <div className="flex -space-x-2.5">
                    {['bg-orange-300', 'bg-pink-400', 'bg-blue-400'].map((color, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#FAFBFF] shadow-sm ${color}`} />
                    ))}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <LuStar key={i} size={14} className="fill-[#1A1A1A] text-[#1A1A1A]" />
                    ))}
                </div>

                {/* Rating text */}
                <span className="text-xs md:text-sm font-medium text-[#4A5578]">
                    4.8/5 &nbsp; 610+ Reviews
                </span>
            </div>

        </section>
    );
}