"use client"
import React, { useState, useRef } from 'react';
import { social } from './jumbo-head';

export default function GyroCard() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        
        // Get mouse position relative to card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate center of card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (normalize to -1 to 1, then multiply by max rotation degrees)
        const rotateY = ((x - centerX) / centerX) * 15; // max 15 degrees
        const rotateX = ((centerY - y) / centerY) * 15; // max 15 degrees (inverted)
        
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <section className="basis-2/5 p-4 lg:p-8 flex flex-col justify-center items-center">
            {/* The Animated Card */}
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full max-w-[340px] aspect-[3/4] lg:w-[367px] lg:h-[537px] bg-white/50 rounded-[20px] cursor-pointer gyroCard relative"
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                    boxShadow: '0 25px 30px -12px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }}
            >
                <div className="w-full h-full flex flex-col items-center justify-center p-8 pointer-events-none">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mb-6"></div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Gyro Card</h2>
                    <p className="text-gray-600 text-center text-sm">
                        Hover over different parts of the card to see it tilt
                    </p>
                </div>
            </div>

            {/* SOCIALS - ONLY VISIBLE ON MOBILE/TABLET */}
            <div className="flex lg:hidden gap-8 items-center justify-center p-4">
                {social.map((btn) => (
                    <a href={btn.link} key={btn.name} target="_blank" rel="noreferrer">
                        <img src={`icons/${btn.name}.svg`} alt={`${btn.name} btn`} className="w-12 h-12" />
                    </a>
                ))}
            </div>
        </section>
    );
}