import { LuSearchCode, LuZap, LuTrendingUp, LuUserCheck, LuShieldCheck, LuTrophy } from 'react-icons/lu';

const steps = [
    {
        number: '01',
        title: 'No BS, No Fluff',
        description: 'We don\'t hide behind jargon. You get full transparency into exactly what we\'re building and why it works.',
        icon: <LuSearchCode size={20} className="text-[#0B1021]" />,
    },
    {
        number: '02',
        title: 'Hyper-Speed Execution',
        description: 'While legacy agencies get bogged down in endless meetings, we deliver your entire system in 7-14 days using proprietary AI workflows.',
        icon: <LuZap size={20} className="text-[#0B1021]" />,
    },
    {
        number: '03',
        title: '4x ROI (On Average)',
        description: 'Our clients don\'t just break even — they see an average 4x return. We\'ll break down the exact formula for you.',
        icon: <LuTrendingUp size={20} className="text-[#0B1021]" />,
    },
    {
        number: '04',
        title: 'Insider-Level Support',
        description: 'You get a dedicated account manager who knows your business inside-out. Not a shared inbox.',
        icon: <LuUserCheck size={20} className="text-[#0B1021]" />,
    },
    {
        number: '05',
        title: 'Proprietary Growth Stack',
        description: 'Access AI and automation tools that aren\'t available to the general public. We give you the tech that competitors don\'t even know exists.',
        icon: <LuShieldCheck size={20} className="text-[#0B1021]" />,
    },
    {
        number: '06',
        title: 'We Win When You Win',
        description: 'This isn\'t a one-and-done. We become your growth partner and scale with you for the long haul.',
        icon: <LuTrophy size={20} className="text-[#0B1021]" />,
    },
];

export default function Method2() {
    return (
        <section className="w-full bg-[#FAFAFA] px-5 md:px-8 py-14 md:py-20">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Our Unfair Advantage
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-medium text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-8 md:mb-12 max-w-3xl">
                    Why Our Clients Never Leave
                </h2>

                {/* Layout */}
                <div className="flex items-stretch gap-8">

                    {/* Left card — hidden on mobile */}
                    <div className="hidden md:flex shrink-0 w-72 flex-col gap-4">
                        <div className="relative bg-white rounded-lg overflow-hidden flex-1 flex flex-col justify-end shadow-sm"
                            style={{ border: '1px solid #e2e2e2' }}
                        >
                            <img src="/akhi.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1021] via-[#0B1021]/30 to-transparent" />
                            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)' }} />
                            <div className="relative z-10 p-5">
                                <p className="text-xl font-regular text-white mb-1 tabular-nums">Experts built for <br />growth & results</p>
                            </div>
                        </div>
                    </div>

                    {/* Steps list — full width on mobile */}
                    <div className="flex-1 flex flex-col divide-y divide-[#C7D4F5]">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3 md:gap-4 py-5 md:py-6 first:pt-0 last:pb-0">

                                {/* Icon */}
                                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 bg-white border border-[#E8E8E8] rounded-lg flex items-center justify-center shadow-sm">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="text-sm md:text-base font-medium text-[#0B1021] mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-normal text-[#4A5578] leading-[1.6]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Number */}
                                <span className="shrink-0 text-xs md:text-sm font-medium text-[#0096FF]/80">
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