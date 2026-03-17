'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Results', href: '/#results' },
    { label: 'Clients', href: '/#clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <nav className="w-full fixed z-50  backdrop-blur-2xl bg-white/75 backdrop-blur border-b border-white/30">
            <div className="w-full px-8 h-18 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <h3 className="text-base font-medium text-[#0B1021]">AK Consulting</h3>
                </Link>
                <ul className="hidden md:flex items-center gap-7 list-none">
                    {navLinks.map((link) => (
                        <li key={link.label} className="relative">
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-[#4A5578] hover:text-[#0096FF] transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#4040FF] hover:bg-[#2e2ee0] text-white transition-all shadow-[0_4px_14px_rgba(64,64,255,0.3)] border border-[#4040FF] border-b-[3px] border-b-[#2e2ee0] active:border-b active:translate-y-[2px]"
                >
                    Book a Free Call
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

            </div>
        </nav>
    );
}