const steps = [
    {
        number: '01',
        title: 'No BS, No Fluff',
        description: 'We don\'t hide behind jargon. You get full transparency into exactly what we\'re building and why it works.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="9" stroke="#0B1021" strokeWidth="1.5" />
                <path d="M7 11l3 3 5-5" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Hyper-Speed Execution',
        description: 'While legacy agencies get bogged down in endless meetings, we deliver your entire system in 7-14 days using proprietary AI workflows.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M13 3l-2 7h6l-4 9 2-7H9l4-9z" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '03',
        title: '4x ROI (On Average)',
        description: 'Our clients don\'t just break even — they see an average 4x return. We\'ll break down the exact formula for you.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 17l4-4-4-4M7 13h8" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="9" stroke="#0B1021" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Insider-Level Support',
        description: 'You get a dedicated account manager who knows your business inside-out. Not a shared inbox.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 11a4 4 0 100-8 4 4 0 000 8zM3 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Proprietary Growth Stack',
        description: 'Access AI and automation tools that aren\'t available to the general public. We give you the tech that competitors don\'t even know exists.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 3v16M3 11h16" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="5" y="5" width="12" height="12" rx="2" stroke="#0B1021" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        number: '06',
        title: 'We Win When You Win',
        description: 'This isn\'t a one-and-done. We become your growth partner and scale with you for the long haul.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 5l3 3-3 3M7 8h7" stroke="#0B1021" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="9" stroke="#0B1021" strokeWidth="1.5" />
            </svg>
        ),
    },
];


export default function Method2() {
    return (
        <section className="w-full bg-[#FAFAFA] px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Our Unfair Advantage
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-12 max-w-3xl">
                    Why Our Clients Never Leave
                </h2>

                {/* Flex row */}
                <div className="flex items-stretch gap-8 ">

                    {/* Left card */}
                    <div className="shrink-0 w-72 flex flex-col gap-4">
                        <div className="relative bg-white rounded-xl overflow-hidden flex-1 flex flex-col justify-end"
                            style={{
                                border: '1px solid #e2e2e2',
                                boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                            }}
                        >
                            <img src="/akhi.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1021] via-[#0B1021]/30 to-transparent" />
                            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)' }} />
                            <div className="relative z-10 p-5">
                                <p className="text-xl font-bold text-white mb-1 tabular-nums">Built for Results & <br /> Growth
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right — steps list */}
                    <div className="flex-1 flex flex-col divide-y divide-[#E8E8E8]">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 py-6 first:pt-0 last:pb-0">

                                {/* Icon */}
                                <div className="shrink-0 w-10 h-10 bg-white border border-[#E8E8E8] rounded-lg flex items-center justify-center shadow-sm">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold text-[#0B1021] mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm font-medium text-[#4A5578] leading-[1.6]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number */}
                                <span className="shrink-0 text-sm font-medium text-[#0096FF]/80">
                                    {step.number}
                                </span>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}