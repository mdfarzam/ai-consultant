const services = [
    {
        title: 'Plug-and-Play AI Chatbots',
        description: 'Turnkey sales machines that handle inquiries, qualify leads, and close deals 24/7 — without you lifting a finger.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="9" stroke="#4040FF" strokeWidth="1.8" />
                <path d="M12 18l4 4 8-8" stroke="#4040FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Zero-Leads-Lost CRM',
        description: 'A fully automated pipeline that scores, follows up, and tracks every deal. We set it up, you just watch the sales come in.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="8" y="8" width="20" height="20" rx="2" stroke="#4040FF" strokeWidth="1.8" />
                <path d="M12 14h12M12 18h12M12 22h8" stroke="#4040FF" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Website Design & Development',
        description: 'We know exactly what makes visitors convert. Our sites are engineered with conversion secrets most agencies don\'t even know exist.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="6" y="8" width="24" height="20" rx="3" stroke="#4040FF" strokeWidth="1.8" />
                <path d="M6 14h24" stroke="#4040FF" strokeWidth="1.8" />
                <circle cx="10" cy="11" r="1" fill="#4040FF" />
                <circle cx="13" cy="11" r="1" fill="#4040FF" />
            </svg>
        ),
    },
    {
        title: 'Social Media Management',
        description: 'The content strategies we use helped one client go from 0 to 250% more registrations. We\'ll show you how on a free call.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 8c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" stroke="#4040FF" strokeWidth="1.8" />
                <path d="M15 15l6 6M21 15l-6 6" stroke="#4040FF" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Brand Identity & Design',
        description: 'The brands we build don\'t just look good — they command premium pricing. Discover how we position our clients to charge more.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 6l10 18H8L18 6z" stroke="#4040FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Turnkey Software Automations',
        description: 'Custom-built systems that eliminate 20+ hours of manual work per week. We handle the coding, you reap the time savings.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M10 14l-4 4 4 4M26 14l4 4-4 4M15 24l6-12" stroke="#4040FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function Method1() {
    return (
        <section id="services" className="w-full bg-[#FAFAFA] px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Our Arsenal
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-medium text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-12">
                    The Secrets We Use to Scale You
                </h2>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#e2e2e2]"
                    style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 flex flex-col gap-4"
                        >
                            {/* Icon */}
                            <div>{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-lg font-medium text-[#0B1021] leading-[1.3]">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm font-medium text-[#4A5578] leading-[1.7]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}