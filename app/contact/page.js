import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const contactInfo = [
    {
        label: 'Email',
        value: 'ahmed@akconsulting.com',
        href: 'mailto:ahmed@akconsulting.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="4" width="14" height="10" rx="2" stroke="#4040FF" strokeWidth="1.5" />
                <path d="M2 6l7 5 7-5" stroke="#4040FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Location',
        value: 'Dubai, United Arab Emirates',
        href: null,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.485-2.015-4.5-4.5-4.5z" stroke="#4040FF" strokeWidth="1.5" />
                <circle cx="9" cy="6" r="1.5" stroke="#4040FF" strokeWidth="1.3" />
            </svg>
        ),
    },
    {
        label: 'Response time',
        value: 'Within 24 hours',
        href: null,
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#4040FF" strokeWidth="1.5" />
                <path d="M9 5v4l2.5 2.5" stroke="#4040FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <section className="pt-32 pb-20 px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Top header row */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 bg-[#4040FF]" />
                                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                                    Contact Us
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-medium text-[#0B1021] leading-[1.1] tracking-[-0.02em]">
                                Ready to Scale?<br />Let's Talk Strategy.
                            </h1>
                        </div>
                        <p className="text-sm font-medium text-[#4A5578] leading-[1.7] max-w-xs md:text-right">
                            Whether you're deploying AI systems or just exploring options — we'll give you a clear picture in 15 minutes.
                        </p>
                    </div>

                    {/* Main grid */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e2e2]"
                        style={{ borderRadius: '8px', overflow: 'hidden' }}
                    >

                        {/* Left — contact info + CTA */}
                        <div className="bg-white p-10 flex flex-col justify-between gap-10">
                            <div className="flex flex-col gap-8">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2 mb-1">
                                            {item.icon}
                                            <span className="text-xs font-medium text-[#0B1021] uppercase tracking-wider">
                                                {item.label}
                                            </span>
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} className="text-base font-medium text-[#4040FF] hover:underline">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-base font-medium text-[#4A5578]">{item.value}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Calendly CTA */}
                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-medium text-[#4A5578] leading-[1.6]">
                                    Prefer a call? Book a free 15-minute strategy session directly on our calendar.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg text-sm font-medium bg-[#4040FF] hover:bg-[#2e2ee0] text-white transition-all shadow-[0_4px_14px_rgba(64,64,255,0.3)] border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                                >
                                    Book on Calendly
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right — form (spans 2 cols) */}
                        <div className="md:col-span-2 bg-white p-10">
                            <h3 className="text-lg font-medium text-[#0B1021] mb-8">
                                Send us a message
                            </h3>

                            <form className="flex flex-col gap-5">
                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-[#0B1021] uppercase tracking-wider">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-lg bg-[#FAFAFA] text-sm font-medium text-[#0B1021] placeholder:text-[#B8C4E0] focus:outline-none focus:ring-2 focus:ring-[#4040FF]/20 transition-all"
                                            style={{ border: '1px solid #e2e2e2' }}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-[#0B1021] uppercase tracking-wider">
                                            Work Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg bg-[#FAFAFA] text-sm font-medium text-[#0B1021] placeholder:text-[#B8C4E0] focus:outline-none focus:ring-2 focus:ring-[#4040FF]/20 transition-all"
                                            style={{ border: '1px solid #e2e2e2' }}
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#0B1021] uppercase tracking-wider">
                                        Company <span className="text-[#B8C4E0] normal-case font-medium tracking-normal">(optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your company name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#FAFAFA] text-sm font-medium text-[#0B1021] placeholder:text-[#B8C4E0] focus:outline-none focus:ring-2 focus:ring-[#4040FF]/20 transition-all"
                                        style={{ border: '1px solid #e2e2e2' }}
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#0B1021] uppercase tracking-wider">
                                        How can we help?
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your project, goals, or challenges..."
                                        className="w-full px-4 py-3 rounded-lg bg-[#FAFAFA] text-sm font-medium text-[#0B1021] placeholder:text-[#B8C4E0] focus:outline-none focus:ring-2 focus:ring-[#4040FF]/20 transition-all resize-none"
                                        style={{ border: '1px solid #e2e2e2', minHeight: '140px' }}
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex items-center justify-between gap-4 pt-2">
                                    <p className="text-xs font-medium text-[#B8C4E0]">
                                        We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-[#0B1021] hover:bg-black text-white transition-all border border-[#0B1021] border-b-[3px] border-b-black active:border-b active:translate-y-[2px]"
                                    >
                                        Send Message
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                            <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}