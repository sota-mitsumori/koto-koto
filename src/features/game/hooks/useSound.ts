"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext on mount
    const AudioContextClass =
      window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioContextRef.current = new AudioContextClass();
    }

    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playKeySound = useCallback(() => {
    if (!audioContextRef.current) return;

    // Resume context if suspended (browser policy)
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    const ctx = audioContextRef.current;
    const t = ctx.currentTime;

    // Create oscillators
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Base frequency (wooden block sound usually around 800-1200Hz, or lower for "pot" sound)
    // "Wooden, organic, percussive"
    // Let's try a base around 300-400Hz for a warm "thock",
    // or higher for a "clack".
    // Requirement says: "Sine + Low-pass Triangle".
    // "Simmering pots" might be lower.
    // Let's go with ~350Hz base.
    const baseFreq = 350;

    // Dynamic Pitch: +/- 5 cents
    // 1 cent = 1/1200 octave. ratio = 2^(cents/1200).
    const cents = Math.random() * 10 - 5; // -5 to +5
    const pitchMultiplier = Math.pow(2, cents / 1200);
    const finalFreq = baseFreq * pitchMultiplier;

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(finalFreq, t);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(finalFreq, t); // Slightly detune? Maybe.
    // Low-pass the triangle to make it softer?
    // We can use a BiquadFilterNode.

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, t); // Cutoff high harmonics of triangle

    // Envelope (ADSR)
    // Short decay, no sustain.
    // Attack: very fast (0.005s)
    // Decay: short (0.05s - 0.1s)

    gainNode.gain.setValueAtTime(0, t);
    gainNode.gain.linearRampToValueAtTime(0.3, t + 0.005); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.1); // Decay

    // Connect graph
    // osc1 -> gain -> dest
    // osc2 -> filter -> gain -> dest

    osc1.connect(gainNode);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.15);
    osc2.stop(t + 0.15);
  }, []);

  return { playKeySound };
}
