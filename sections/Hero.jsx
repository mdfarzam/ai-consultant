'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full bg-[#FAFAFA] flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center">

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-8">
                <span className="w-2 h-2 mb-0.5 bg-[#4040FF]" />
                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                    The Growth Secrets Behind 30+ Scaled Businesses
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-normal leading-[1.1] tracking-[-0.03em] text-[#0B1021]">
                Growth That Scales <br /> Without the Burnout
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-base font-medium text-[#4A5578] leading-[1.6]">
                Stop letting manual tasks cap your revenue. We deploy AI systems that <br />
                automate 80% of your workload, giving you the freedom to scale while we handle the tech.
            </p>

            {/* CTA Buttons */}
            <div className="my-8 flex items-center gap-4 flex-wrap justify-center">
                <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-lg text-sm font-medium text-white bg-[#4040FF] hover:bg-[#2e2ee0] transition-all shadow-[0_8px_25px_rgba(64,64,255,0.35)] hover:-translate-y-0.5 border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                >
                    Book a Free Call
                </Link>
                <Link
                    href="/#results"
                    className="px-7 py-3.5 rounded-lg text-sm font-medium text-[#0B1021] bg-white border border-neutral-300 border-b-[3px] hover:bg-neutral-100 transition-all  active:border-b active:translate-y-[2px]"
                >
                    See the Results
                </Link>
            </div>

            {/* Social Proof */}
            <div className=" flex items-center gap-3">
                {/* Avatars */}
                <div className="flex -space-x-2.5">
                    {['bg-orange-300', 'bg-pink-400', 'bg-blue-400'].map((color, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#FAFBFF] shadow-sm ${color}`} />
                    ))}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75L8 1z"
                                fill="#1A1A1A"
                            />
                        </svg>
                    ))}
                </div>

                {/* Rating text */}
                <span className="text-sm font-medium text-[#4A5578] ">
                    4.8/5 &nbsp; 610+ Reviews
                </span>
            </div>

        </section>
    );
}