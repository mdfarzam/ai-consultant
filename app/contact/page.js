import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { LuMail, LuMapPin, LuClock, LuChevronRight } from 'react-icons/lu';

const contactInfo = [
    {
        label: 'Email',
        value: 'ahmed@akconsulting.com',
        href: 'mailto:ahmed@akconsulting.com',
        icon: <LuMail size={18} className="text-[#4040FF]" />,
    },
    {
        label: 'Location',
        value: 'Dubai, United Arab Emirates',
        href: null,
        icon: <LuMapPin size={18} className="text-[#4040FF]" />,
    },
    {
        label: 'Response time',
        value: 'Within 24 hours',
        href: null,
        icon: <LuClock size={18} className="text-[#4040FF]" />,
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <section className="pt-24 md:pt-32 pb-14 md:pb-20 px-5 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Top header row */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 bg-[#4040FF]" />
                                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                                    Contact Us
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0B1021] leading-[1.1] tracking-[-0.02em]">
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
                        <div className="bg-white p-6 md:p-10 flex flex-col justify-between gap-8 md:gap-10">
                            <div className="flex flex-col gap-6 md:gap-8">
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
                                    className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg text-sm font-medium bg-[#4040FF] hover:bg-[#2e2ee0] text-white transition-all shadow-sm border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                                >
                                    Book on Calendly
                                    <LuChevronRight size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Right — form (spans 2 cols) */}
                        <div className="md:col-span-2 bg-white p-6 md:p-10">
                            <h3 className="text-base md:text-lg font-medium text-[#0B1021] mb-6 md:mb-8">
                                Send us a message
                            </h3>

                            <form className="flex flex-col gap-4 md:gap-5">
                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
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
                                    <label className="text-xs font-medium text-[#0B1021] uppercase tracking-wider">
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
                                    <label className="text-xs font-medium text-[#0B1021] uppercase tracking-wider">
                                        How can we help?
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your project, goals, or challenges..."
                                        className="w-full px-4 py-3 rounded-lg bg-[#FAFAFA] text-sm font-medium text-[#0B1021] placeholder:text-[#B8C4E0] focus:outline-none focus:ring-2 focus:ring-[#4040FF]/20 transition-all resize-none"
                                        style={{ border: '1px solid #e2e2e2', minHeight: '120px' }}
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                                    <p className="text-xs font-medium text-[#B8C4E0]">
                                        We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 w-full sm:w-fit px-6 py-3 rounded-lg text-sm font-medium bg-[#0B1021] hover:bg-black text-white transition-all border border-[#0B1021] border-b-[3px] border-b-black active:border-b active:translate-y-[2px]"
                                    >
                                        Send Message
                                        <LuChevronRight size={18} />
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