export default function CTA() {
    return (
        <section className="w-full bg-[#FAFAFA] py-20 px-8">
            <div className="max-w-7xl mx-auto">

                {/* Main block */}
                <div
                    className="relative w-6xl flex items-center justify-center mx-auto h-[600px] rounded-4xl overflow-hidden bg-[#e0e0e0]"
                    style={{
                        border: '1px solid #e2e2e2',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                    }}
                >
                    <img src="/cta.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

                    {/* Bottom-right white card */}
                    <div
                        className="absolute bottom-0 border-t-1 border-l-1 right-0 w-96 bg-[#0096FF]/80 text-white backdrop-blur-md p-8"
                        style={{
                            borderTopLeftRadius: '1.5rem',
                            // borderBottomRightRadius: '1.9rem',
                            // borderTop: '1px solid #e2e2e2',
                            // borderLeft: '1px solid #e2e2e2',
                            // boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
                        }}
                    >
                        <h3 className="text-xl font-semibold leading-[1.3] mb-3">
                            Want to Know the Exact System We Used to Scale 30+ Businesses?
                        </h3>
                        <p className="text-sm font-medium leading-[1.7] mb-5">
                            In just 15 minutes, we'll reveal the strategies behind our clients' biggest wins and show you exactly how we'd apply them to your business. No pitch, no pressure — just the playbook.
                        </p>
                        <a href="/contact" className="flex items-center gap-1.5 text-sm font-semibold ">
                            Get the Playbook — Free 15-Min Call
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Trust bar */}
                <div className="mt-8 flex justify-center">
                    <div
                        className="flex items-center gap-3 bg-white rounded-full px-2 py-2"
                        style={{
                            border: '1px solid #e2e2e2',
                            boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                        }}
                    >
                        <span className="bg-[#0B1021] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            TRUST
                        </span>
                        <p className="text-sm font-medium text-[#4A5578]">
                            Join the 850+ companies <span className="text-[#4040FF]">trusting</span> our business solutions services
                        </p>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
}