import { LuCheck } from 'react-icons/lu';

const results = [
    {
        title: '#4 Google Ranking',
        company: 'Mamba Panel',
        description: 'Ranked #4 on Google for "face search" in just 3 months with $0 ad spend. Their competitor PimEyes took 9 years to reach #1.',
        features: ['3 Months timeline', '$0 Ad spend', 'Outpaced decade-old competitors'],
    },
    {
        title: 'AI Powered Growth',
        company: 'YayNuts',
        description: 'Built an AI algorithm to qualify UGC content, automated customer support emails, and streamlined their operations.',
        features: ['UGC qualification AI', 'Email automation', 'Operational streamlining'],
    },
    {
        title: 'Full Digital Build',
        company: 'Marhaba Wefada',
        description: 'Built their complete system from scratch — website, booking system, and brand identity. Everything they needed to launch.',
        features: ['System from scratch', 'Booking automation', 'Full brand identity'],
    },
    {
        title: '80% DMs Automated',
        company: 'Nura Beauty',
        description: 'We deployed an AI system that handles the majority of customer inquiries — without sounding like a robot.',
        features: ['AI-powered responses', 'Human-like tone', 'Majority of DMs handled'],
    },
];

export default function TheProof() {
    return (
        <section className="w-full bg-[#FAFAFA] px-5 md:px-8 py-14 md:py-20">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div id="results" className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        The Proof
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-medium text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-12 ">                    The Secrets Behind These Numbers
                </h2>

                {/* Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#e2e2e2]"
                    style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                    {results.map((result, i) => (
                        <div
                            key={i}
                            className="bg-[#F0F0F0] p-8 flex flex-col justify-between gap-6"
                        >
                            <div>
                                <span className="text-xs font-medium text-[#4040FF] uppercase tracking-wider mb-2 block">
                                    {result.company}
                                </span>
                                <h3 className="text-lg font-medium text-[#0B1021] mb-3 leading-[1.3]">
                                    {result.title}
                                </h3>
                                <p className="text-sm font-medium text-[#4A5578] leading-[1.6] mb-5">
                                    {result.description}
                                </p>
                                <ul className="flex flex-col gap-2">
                                    {result.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm font-normal text-[#2D3A5C]">
                                            <LuCheck size={14} className="text-[#4040FF] shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-fit px-5 py-2 rounded-lg bg-neutral-100 border border-neutral-300 text-sm font-medium text-[#0B1021] hover:bg-neutral-200/60 active:scale-[0.98] transition-all duration-200">
                                View Case Study
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}