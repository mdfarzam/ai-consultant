const services = [
    {
        image: '/s1.jpg',
        title: 'Discover & define',
        description: 'Uncover insights that matter most to your business.',
        features: ['Market research', 'Brand & audience mapping', 'Goal alignment', 'Competitive analysis'],
    },
    {
        image: '/s2.jpg',
        title: 'Strategy & direction',
        description: 'Translate insights into action with a clear growth path.',
        features: ['Innovation roadmap', 'Strategic positioning', 'Business transformation', 'Digital adoption'],
    },
    {
        image: '/s3.jpg',
        title: 'Build & execute',
        description: 'Bring ideas to life with precision and scalability.',
        features: ['Web & digital solutions', 'Product development', 'Campaign execution', 'User experience design'],
    },
    {
        image: '/s4.jpg',
        title: 'Test & refine',
        description: 'Validate detail to ensure seamless performance.',
        features: ['Usability testing', 'Feedback-driven adjustments', 'Scalable improvements', 'Iterative design processes'],
    },
];

export default function Process() {
    return (
        <section className="w-full bg-[#FAFBFF] px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Services
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-12 max-w-3xl">
                    Tailored solutions to unlock your business potential
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="flex flex-col gap-4 group">

                            {/* Image */}
                            <div className="w-full h-56 rounded-xl overflow-hidden bg-[#E5EDFF] border border-[#D0DDF7] shadow-[0_4px_15px_-4px_rgba(64,64,255,0.04)] group-hover:shadow-[0_8px_24px_-4px_rgba(64,64,255,0.08)] transition-shadow duration-300">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <h3 className="text-lg font-semibold text-[#0B1021]">
                                {service.title}
                            </h3>
                            <p className="text-sm font-medium text-[#4A5578] leading-[1.6] -mt-2">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="flex flex-col gap-2">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-[#2D3A5C]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="8" fill="#4040FF" />
                                            <path d="M4.5 8l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
