'use client';

import Marquee from 'react-fast-marquee';

const videos = [
    { src: 'r1.mp4' },
    { src: 'r2.mp4' },
    { src: 'r3.mp4' },
    { src: 'r4.mp4' },
    { src: 'r3.mp4' },
];

export default function Videos() {
    return (
        <section className="w-full bg-[#FAFAFA] py-14 overflow-hidden">
            <Marquee speed={60} pauseOnHover gradient={false} gap={16}>
                {videos.map((video, i) => (
                    <div
                        key={i}
                        className="w-74 h-120 rounded-lg overflow-hidden shrink-0 bg-white transition-shadow duration-300 mx-2"
                        style={{
                            border: '1px solid #e2e2e2',
                            boxShadow: '0 10px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                        }}
                    >
                        <video
                            src={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
}