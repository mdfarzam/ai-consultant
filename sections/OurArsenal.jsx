import { LuBot, LuDatabase, LuGlobe, LuShare2, LuLayers, LuCpu } from 'react-icons/lu';

const services = [
    {
        title: 'Plug-and-Play AI Chatbots',
        description: 'Turnkey sales machines that handle inquiries, qualify leads, and close deals 24/7 — without you lifting a finger.',
        icon: <LuBot size={32} className="text-[#4040FF]" />,
    },
    {
        title: 'Zero-Leads-Lost CRM',
        description: 'A fully automated pipeline that scores, follows up, and tracks every deal. We set it up, you just watch the sales come in.',
        icon: <LuDatabase size={32} className="text-[#4040FF]" />,
    },
    {
        title: 'Website Design & Development',
        description: 'We know exactly what makes visitors convert. Our sites are engineered with conversion secrets most agencies don\'t even know exist.',
        icon: <LuGlobe size={32} className="text-[#4040FF]" />,
    },
    {
        title: 'Social Media Management',
        description: 'The content strategies we use helped one client go from 0 to 250% more registrations. We\'ll show you how on a free call.',
        icon: <LuShare2 size={32} className="text-[#4040FF]" />,
    },
    {
        title: 'Brand Identity & Design',
        description: 'The brands we build don\'t just look good — they command premium pricing. Discover how we position our clients to charge more.',
        icon: <LuLayers size={32} className="text-[#4040FF]" />,
    },
    {
        title: 'Turnkey Software Automations',
        description: 'Custom-built systems that eliminate 20+ hours of manual work per week. We handle the coding, you reap the time savings.',
        icon: <LuCpu size={32} className="text-[#4040FF]" />,
    },
];

export default function OurArsenal() {
    return (
        <section id="services" className="w-full bg-[#FAFAFA] px-5 md:px-8 py-14 md:py-20">
            <div className="max-w-7xl mx-auto  ">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Our Arsenal
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-medium text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-8 md:mb-12">                    The Secrets We Use to Scale You
                </h2>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#e2e2e2]"
                    style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-[#F0F0F0] p-8 flex flex-col gap-4"
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