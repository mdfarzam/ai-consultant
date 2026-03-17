const testimonials = [
    {
        name: 'AquaFun Waterparks',
        role: "World's Largest Inflatable Waterpark",
        avatar: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&q=80',
        rating: 5,
        text: 'AK Consulting built our entire digital presence from scratch — website, chatbot, and social media strategy. Bookings increased by 300% in the first summer season.',
    },
    {
        name: 'Nura Beauty',
        role: 'Skincare Brand',
        avatar: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=80&q=80',
        rating: 5,
        text: 'Their AI chatbot handles 80% of our customer inquiries automatically. Our team can now focus on product development instead of repetitive DMs.',
    },
    {
        name: 'Omar T.',
        role: 'Business Consultant',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
        rating: 5,
        text: 'Their system is respectful, professional, and incredibly effective. We went from 6 sales calls per month to 28. Game changer.',
    },
    {
        name: 'YayNuts',
        role: 'Premium Nut Brand',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
        rating: 5,
        text: 'The brand identity and website they created perfectly captures our premium positioning. Online sales doubled within 60 days of launch.',
    },
    {
        name: 'Fatima R.',
        role: 'Executive Coach',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
        rating: 5,
        text: "The ROI is insane. I invested in their services and added $18,000 in new revenue in the first 60 days. Best business decision I've made.",
    },
    {
        name: 'Marhaba Wefada',
        role: 'Cultural Events Company',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
        rating: 5,
        text: 'Their social media management transformed our online presence. Event registrations are up 250% and we finally have a consistent brand voice.',
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5 mb-5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M8 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L8 9.385l-3.09 1.624.59-3.44L3 5.132l3.455-.502L8 1.5z"
                        fill={star <= rating ? '#0096FF' : 'none'}
                        stroke={star <= rating ? '#0096FF' : '#afadadff'}
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }) {
    return (
        <div
            className="w-80 shrink-0 bg-white rounded-2xl p-7 flex flex-col justify-between gap-6 transition-all duration-300"
            style={{
                border: '1px solid #e2e2e2',
                boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
        >
            {/* Top: stars + quote */}
            <div>
                <StarRating rating={testimonial.rating} />
                <p className="text-[15px] font-medium text-[#0B1021] leading-[1.65]">
                    "{testimonial.text}"
                </p>
            </div>

            {/* Bottom: avatar + name */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    style={{ border: '1px solid #e2e2e2' }}
                />
                <div>
                    <p className="text-sm font-semibold text-[#0B1021]">{testimonial.name}</p>
                    <p className="text-xs font-medium text-[#7B8AB8]">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const row1 = testimonials;
    const row2 = [...testimonials].reverse();

    return (
        <section id="clients" className="w-full bg-[#FAFBFF] py-20 overflow-hidden">

            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .track-left {
                    animation: marquee-left 30s linear infinite;
                }
                .track-right {
                    animation: marquee-right 30s linear infinite;
                }
                .track-left:hover, .track-right:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-8 text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Testimonials
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-sm font-medium text-[#4A5578] leading-[1.7] max-w-lg mx-auto">
                    Honest reflections from clients who scaled their businesses with AI-powered systems and smart digital strategies.
                </p>
            </div>

            {/* Row 1 — left */}
            <div className="flex gap-4 w-max track-left mb-4">
                {[...row1, ...row1].map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                ))}
            </div>

            {/* Row 2 — right */}
            <div className="flex gap-4 w-max track-right">
                {[...row2, ...row2].map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                ))}
            </div>

        </section>
    );
}