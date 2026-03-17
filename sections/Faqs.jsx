'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'What exactly will you show me on the free call?',
        answer: 'We\'ll break down the exact strategies and systems we used to scale businesses like Mamba Panel (#4 on Google in 3 months) and Nura Beauty (80% DMs automated). You\'ll leave with a clear action plan — whether you work with us or not.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Most projects are delivered in 7-14 days. Yes, really. We\'ll explain our rapid delivery process on the call and give you a clear timeline for your specific project.',
    },
    {
        question: 'Do I need any technical knowledge?',
        answer: 'Zero. We handle everything from strategy to setup to launch. You just bring your business goals, and we handle the rest. We also train your team so everything runs smoothly.',
    },
    {
        question: 'How much do your services cost?',
        answer: 'Investment starts at less than the cost of a single mid-level employee — but you get a 24/7 AI-powered sales team instead. We custom-quote based on your specific growth goals so you only pay for what brings you measurable ROI.',
    },
    {
        question: 'What makes you different from other agencies?',
        answer: 'Speed to results. Most agencies take months to deliver generic work. We deliver proprietary, high-converting systems in days. Our clients average a 4x ROI because we use AI tech that competitors don\'t even know exists.',
    },
    {
        question: 'What if it doesn\'t work for my business?',
        answer: 'We offer a 100% Satisfaction Guarantee. If you don\'t see results, we revise the strategy until you do — at no extra cost. Plus, there are no long-term contracts. You stay because you see the growth, not because of a piece of paper.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="w-full bg-[#FAFAFA] px-8 py-20">
            <div className="max-w-5xl mx-auto">

                {/* Badge */}
                <div className="flex items-center justify-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        FAQ
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1021] leading-[1.15] tracking-[-0.02em] text-center mb-4">
                    Got Questions?
                </h2>
                <p className="text-sm font-medium text-[#4A5578] leading-[1.7] text-center mb-10">
                    We've worked with 30+ businesses — so we know what comes up before your first call. Here's what you should know.
                </p>

                {/* FAQ list */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl px-6 py-5 cursor-pointer transition-all duration-200"
                            style={{
                                border: '1px solid #e2e2e2',
                                boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                            }}
                            onClick={() => toggle(i)}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm font-semibold text-[#0B1021]">{faq.question}</p>
                                <span className="text-[#0096FF] text-lg shrink-0">
                                    {openIndex === i ? '−' : '+'}
                                </span>
                            </div>
                            {openIndex === i && (
                                <p className="mt-3 text-sm font-medium text-[#4A5578] leading-[1.7]">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}