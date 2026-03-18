export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-[#e2e2e2] px-5 md:px-8 py-10 md:py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Top row */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="max-w-xs">
                        <h3 className="text-base font-medium text-[#0B1021] mb-3">AK Consulting</h3>
                        <p className="text-sm font-medium text-[#4A5578] leading-[1.7]">
                            AI-Powered Growth for Your Business. Helping businesses grow with AI-powered automation, stunning design, and smart digital strategies.
                        </p>
                        <p className="mt-4 text-sm font-medium text-[#0B1021]">
                            ahmed@akconsulting.com
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-10 md:gap-16">
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-medium text-[#0B1021] uppercase tracking-[0.1em]">Quick Links</p>
                            <a href="/#services" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Services</a>
                            <a href="/#results" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Results</a>
                            <a href="/#clients" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Clients</a>
                            <a href="/blog" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Blog</a>
                            <a href="/#faq" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">FAQ</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-medium text-[#0B1021] uppercase tracking-[0.1em]">Services</p>
                            <a href="#" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">AI Chatbots</a>
                            <a href="#" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Website Development</a>
                            <a href="#" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Brand Identity</a>
                            <a href="#" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">Social Media</a>
                            <a href="#" className="text-sm font-medium text-[#4A5578] hover:text-[#0B1021] transition-colors">CRM Setup</a>
                        </div>
                    </div>

                </div>

                {/* Bottom row */}
                <div className="border-t border-[#e2e2e2] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <p className="text-xs font-medium text-[#7B8AB8]">
                        © {new Date().getFullYear()} AK Consulting. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-xs font-medium text-[#7B8AB8] hover:text-[#0B1021] transition-colors">Twitter</a>
                        <a href="#" className="text-xs font-medium text-[#7B8AB8] hover:text-[#0B1021] transition-colors">LinkedIn</a>
                        <a href="#" className="text-xs font-medium text-[#7B8AB8] hover:text-[#0B1021] transition-colors">Instagram</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}