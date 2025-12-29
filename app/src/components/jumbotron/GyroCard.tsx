"use client"
import React, { useState, useRef } from 'react';

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
        <section className="basis-2/5 p-8 h-full flex justify-center items-center">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-[367px] h-[537px] bg-white/50 rounded-[20px] cursor-pointer gyroCard"
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                    boxShadow: '0 25px 30px -12px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
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
        </section>
    );
}