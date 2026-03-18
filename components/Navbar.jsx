'use client';

import { useState } from 'react';
import { LuChevronRight, LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';

const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Results', href: '/#results' },
    { label: 'Clients', href: '/#clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full fixed z-50 backdrop-blur-3xl bg-white/90 border-b border-white/30">

            {/* Main bar */}
            <div className="w-full px-5 md:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-[#0B1021]">AK Consulting</h3>
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden md:flex items-center gap-7 list-none">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-[#4A5578] hover:text-[#0096FF] transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Desktop CTA */}
                    <Link
                        href="/contact"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#4040FF] hover:bg-[#2e2ee0] text-white transition-all shadow-sm border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                    >
                        Book a Free Call
                        <LuChevronRight size={18} />
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-[#0B1021]"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                    </button>
                </div>

            </div>

            {/* Mobile menu */}
            <div
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl"
                style={{
                    maxHeight: mobileOpen ? '400px' : '0px',
                    opacity: mobileOpen ? 1 : 0,
                    transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                    borderBottom: mobileOpen ? '1px solid #e2e2e2' : 'none',
                }}
            >
                <ul className="flex flex-col px-5 py-4 gap-1 list-none">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-base font-medium text-[#4A5578] hover:text-[#0096FF] py-2.5 transition-colors border-b border-[#f0f0f0] last:border-0"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-3">
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-medium bg-[#4040FF] hover:bg-[#2e2ee0] text-white transition-all border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                        >
                            Book a Free Call
                            <LuChevronRight size={18} />
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}