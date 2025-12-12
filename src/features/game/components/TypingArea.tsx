"use client";

import { motion } from "framer-motion";
import { Sentence } from "../../../data/words";

interface TypingAreaProps {
  currentWord: Sentence | undefined;
  matchedRomaji: string;
  pendingInput: string;
  matchedKana: string;
  remainingTarget: string; // The hiragana reading remaining
  shake: boolean;
  ripple: { x: number; y: number; id: number } | null;
}

export default function TypingArea({
  currentWord,
  pendingInput,
  matchedKana,
  remainingTarget,
  shake,
  ripple,
}: TypingAreaProps) {
  if (!currentWord) return null;

  // Defensive check for HMR/State mismatch (Old data might be { kanji, kana })
  const display = currentWord.display;

  // Dynamic Font Sizing (Based on Kanji/Display length)
  const displayLength = display.length;
  let textSizeClass = "text-5xl";
  if (displayLength > 20) textSizeClass = "text-2xl";
  else if (displayLength > 12) textSizeClass = "text-3xl";
  else if (displayLength > 8) textSizeClass = "text-4xl";

  // Dynamic Reading Size
  const kanaSizeClass = displayLength > 15 ? "text-lg" : "text-xl";
  // const romajiSizeClass = displayLength > 15 ? "text-base" : "text-xl";

  return (
    <motion.div
      className={`relative w-full text-center flex flex-col items-center justify-center space-y-8 ${
        shake ? "animate-shake" : ""
      }`}
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* KANJI / VISUAL DISPLAY */}
      <motion.div
        key={currentWord.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${textSizeClass} font-zen-old-mincho font-bold tracking-widest text-shadow-glow leading-relaxed break-words whitespace-pre-wrap max-w-5xl`}
      >
        {display}
      </motion.div>

      {/* Kana reading with progress */}
      <div
        className={`relative flex flex-wrap items-center justify-center ${kanaSizeClass} font-normal max-w-4xl tracking-widest`}
      >
        {/* Render fully matched Kana (Past - Dimmed) */}
        <span className="text-white/30 transition-colors duration-200">
          {matchedKana}
        </span>

        {/* Render remaining target */}
        {remainingTarget && (
          <>
            {/* Current Character (Brightest + Glow + Caret) */}
            <motion.span
              className="text-off-white relative mx-[1px] font-bold"
              style={{ textShadow: "0 0 15px rgba(255,255,255,0.9)" }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,1)",
                  "0 0 10px rgba(255,255,255,0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {remainingTarget[0]}
              {/* Caret - Absolute Positioned */}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.span>

            {/* Future Characters (Crystal Clear) */}
            <span className="text-zinc-300 font-medium">
              {remainingTarget.slice(1)}
            </span>
          </>
        )}
      </div>

      {/* Romaji Input Display - Minimalist below */}
      <div className="h-6 font-inter text-subtle-gray text-opacity-50 tracking-wide">
        {pendingInput}
      </div>

      {/* Ripple Effect Layer */}
      {ripple && (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none rounded-full border border-cyan-400/50 z-0"
          initial={{ opacity: 0.8, scale: 0.5, width: 50, height: 50 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.4 }}
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
      )}
    </motion.div>
  );
}
