import Marquee from 'react-fast-marquee';
import { LuStar } from 'react-icons/lu';

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
        <div className="flex items-center gap-0.5 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
                <LuStar
                    key={star}
                    size={16}
                    className={star <= rating ? 'fill-[#0096FF] text-[#0096FF]' : 'text-neutral-300'}
                />
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }) {
    return (
        <div
            className="shrink-0 bg-white rounded-lg p-7 flex flex-col justify-between mx-2"
            style={{
                width: '320px',
                height: '220px',
                border: '1px solid #e2e2e2',
            }}
        >
            <div>
                <StarRating rating={testimonial.rating} />
                <p className="text-[14px] font-medium text-[#0B1021] leading-[1.6] line-clamp-3">
                    "{testimonial.text}"
                </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0f0]">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                    style={{ border: '1px solid #e2e2e2' }}
                />
                <div>
                    <p className="text-sm font-medium text-[#0B1021]">{testimonial.name}</p>
                    <p className="text-xs font-medium text-[#7B8AB8]">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="clients" className="w-full bg-[#FAFAFA] py-20" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)' }}>
            {/* Header */}
            <div className="max-w-7xl mx-auto px-8 text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#4040FF]" />
                    <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#4A5578]">
                        Testimonials
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-[#0B1021] leading-[1.15] tracking-[-0.02em] mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-sm font-normal text-[#4A5578] leading-[1.7] max-w-lg mx-auto">
                    Honest reflections from clients who scaled their businesses with AI-powered systems and smart digital strategies.
                </p>
            </div>

            {/* Row 1 — left */}
            <div className="mb-3">
                <Marquee speed={50} pauseOnHover gradient={false} direction="left">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </Marquee>
            </div>

            {/* Row 2 — right */}
            <Marquee speed={50} pauseOnHover gradient={false} direction="right">
                {[...testimonials].reverse().map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                ))}
            </Marquee>

        </section>
    );
}