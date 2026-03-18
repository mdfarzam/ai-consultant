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
                        className="w-44 h-72 md:w-74 md:h-120 rounded-lg overflow-hidden shrink-0 bg-white shadow-sm transition-shadow duration-300 mx-2" style={{
                            border: '1px solid #e2e2e2',
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