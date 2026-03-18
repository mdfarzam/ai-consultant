import { LuChevronRight } from 'react-icons/lu';

export default function CTA() {
    return (
        <section className="w-full bg-[#FAFAFA] py-14 md:py-20 px-5 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Main block */}
                <div
                    className="relative w-full mx-auto h-[420px] md:h-[600px] rounded-2xl md:rounded-4xl overflow-hidden bg-[#e0e0e0] shadow-sm"
                    style={{ border: '1px solid #e2e2e2' }}
                >
                    <img src="/cta.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

                    {/* Bottom-right card — full width on mobile, fixed width on desktop */}
                    <div
                        className="absolute bottom-0 right-0 w-full md:w-101 bg-[#0096FF]/80 text-white backdrop-blur-md p-6 md:p-8"
                        style={{
                            borderTopLeftRadius: '1.5rem',
                            borderTopRightRadius: '0',
                        }}
                    >
                        <h3 className="text-base md:text-xl font-medium leading-[1.3] mb-3">
                            Want to Know the Exact System<br className="hidden md:block" /> We Used to Scale 30+ Businesses?
                        </h3>
                        <a href="/contact" className="flex items-center gap-1.5 text-sm font-normal">
                            Get the Playbook — Free 15-Min Call
                            <LuChevronRight size={16} className="text-[#1A1A1A]" />
                        </a>
                    </div>

                </div>

                {/* Trust bar */}
                <div className="mt-6 md:mt-8 flex justify-center px-2">
                    <div
                        className="flex items-center gap-2 md:gap-3 bg-white rounded-full px-2 py-2 shadow-sm"
                        style={{ border: '1px solid #e2e2e2' }}
                    >
                        <span className="bg-[#0B1021] text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                            TRUST
                        </span>
                        <p className="text-xs md:text-sm font-normal text-[#4A5578]">
                            Join the 850+ companies <span className="text-[#4040FF]">trusting</span> our business solutions services
                        </p>
                        <LuChevronRight size={14} className="text-[#1A1A1A] shrink-0" />
                    </div>
                </div>

            </div>
        </section>
    );
}