"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SeasonalParticle {
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
    size: number;
}

interface SeasonalParticlesProps {
    emoji: string;
    color: string;
    count?: number;
}

function generateParticles(count: number): SeasonalParticle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 50,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 0.8 + Math.random() * 0.4,
    }));
}

/**
 * Animated seasonal particles (sakura petals, snowflakes, leaves, etc.)
 * Creates a subtle, zen atmosphere
 */
export default function SeasonalParticles({
    emoji,
    color,
    count = 15,
}: SeasonalParticlesProps) {
    const [particles] = useState<SeasonalParticle[]>(() =>
        generateParticles(count)
    );

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-2xl opacity-30"
                    style={{
                        left: `${particle.x}%`,
                        fontSize: `${particle.size}rem`,
                        filter: `drop-shadow(0 0 8px ${color})`,
                    }}
                    initial={{ y: `${particle.y}vh`, opacity: 0 }}
                    animate={{
                        y: "120vh",
                        opacity: [0, 0.3, 0.3, 0],
                        x: [0, 20, -10, 5],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {emoji}
                </motion.div>
            ))}
        </div>
    );
}
