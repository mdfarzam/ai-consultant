const logos = [
    { name: 'AquaFun', symbol: '❋' },
    { name: 'Nura Beauty', symbol: '❋' },
    { name: 'YayNuts', symbol: '❋' },
    { name: 'Marhaba Wefada', symbol: '❋' },
    { name: 'KO King', symbol: '❋' },
];

const stats = [
    { value: '30+', label: 'Businesses Scaled' },
    { value: '300%', label: 'Avg. Growth' },
    { value: '4x', label: 'Average ROI' },
    { value: '7-14', label: 'Days to Deliver' },
];

export default function Services() {
    return (
        <section className="w-full bg-[#FAFAFA]">

            <style>{`
                @keyframes marquee-logos {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .logo-track {
                    animation: marquee-logos 18s linear infinite;
                }
            `}</style>

            {/* Logo Marquee */}
            <div className="w-full overflow-hidden py-6">
                <div className="flex gap-12 w-max logo-track">
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={i} className="flex items-center gap-2 shrink-0">
                            <span className="text-xl font-bold text-[#0B1021]">{logo.symbol}</span>
                            <span className="text-lg font-semibold text-[#0B1021]">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Block */}
            <div className="w-full bg-[#FAFAFA] px-8 py-16">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">

                    {/* Left Text — takes more space */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1021] leading-[1.4]">
                        Stop wasting money on agencies that deliver "pretty" sites with zero results. You need <span className="text-[#0096FF]">AI Chatbots </span> that close deals 24/7, CRM Pipelines that prevent lead leakage, and high-conversion systems that <span className="text-[#0096FF]">guarantee</span> your growth.
                    </h2>

                    {/* Right Image — fixed size matching screenshot */}
                    <div className="shrink-0 w-100 h-60 rounded-xl overflow-hidden bg-[#FAFAFA] border-2 border-neutral-300">
                        <img
                            src="p1.png"
                            alt="Team"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

            {/* Stats Row */}
            <div className="w-full border-t border-b border-neutral-300 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C7D4F5] items-stretch">
                    {stats.map((stat, i) => (
                        <div key={i} className="px-10 py-8 first:pl-0">
                            <p className="text-3xl font-bold text-[#0B1021] mb-2">{stat.value}</p>
                            <p className="text-sm font-medium text-[#4A5578] leading-[1.6]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}