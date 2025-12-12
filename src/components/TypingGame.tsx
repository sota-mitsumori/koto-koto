"use client";

import React from "react";
import useGameController from "../features/game/hooks/useGameController";
import TypingArea from "../features/game/components/TypingArea";
import ResultScreen from "../features/result/components/ResultScreen";
import MobileBlocker from "./MobileBlocker";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TypingGame() {
  const {
    gameState,
    currentWord,
    matchedRomaji,
    pendingInput,
    remainingTarget,
    matchedKana,
    elapsedTime,
    shake,
    ripple,
    startGame,
    quitGame,
    correctKeyCount,
    errorCount,
    maxCombo,
    currentWordIndex,
    totalSentences,
  } = useGameController();

  // Format Elapsed Time (MM:SS)
  const pad = (n: number) => n.toString().padStart(2, "0");
  const mm = Math.floor(elapsedTime / 60);
  const ss = Math.floor(elapsedTime % 60);
  const timeStr = `${pad(mm)}:${pad(ss)}`;

  return (
    <div className="relative min-h-screen w-full bg-zen-dark flex flex-col items-center justify-center overflow-hidden font-zen-old-mincho select-none">
      {/* Mobile Blocker */}
      <MobileBlocker />

      {/* Header */}
      {gameState === "playing" && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 w-full p-8 flex justify-between items-start z-50 text-subtle-gray"
        >
          {/* Left: Back to Title */}
          <button
            onClick={quitGame}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-inter tracking-widest uppercase">
              Title
            </span>
          </button>

          {/* Center: Timer */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-[0.2em] uppercase mb-1">
              Time
            </span>
            <span className="text-xl font-inter font-light tracking-wider text-off-white">
              {timeStr}
            </span>
          </div>

          {/* Right: Progress */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] tracking-[0.2em] uppercase mb-1">
              Progress
            </span>
            <span className="text-xl font-inter font-light tracking-wider text-off-white">
              {currentWordIndex + 1}
              <span className="text-sm text-zinc-600 mx-1">/</span>
              {totalSentences}
            </span>
          </div>
        </motion.header>
      )}

      {/* Main Game Area */}
      <div className="w-full max-w-5xl px-8 flex flex-col items-center relative z-10">
        <AnimatePresence mode="wait">
          {/* Waiting State / Intro */}
          {gameState === "waiting" && (
            <motion.div
              key="waiting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-thin tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-4 opacity-90">
                Koto-Koto
              </h1>
              <p className="text-sm font-inter tracking-[0.4em] text-subtle-gray uppercase">
                Japanese Zen Typing
              </p>

              <button
                onClick={startGame}
                className="mt-12 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-off-white font-inter text-sm tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
              >
                PRESS ENTER TO START
              </button>
            </motion.div>
          )}

          {/* Playing State */}
          {gameState === "playing" && currentWord && (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <TypingArea
                currentWord={currentWord}
                matchedRomaji={matchedRomaji}
                pendingInput={pendingInput}
                matchedKana={matchedKana}
                remainingTarget={remainingTarget}
                shake={shake}
                ripple={ripple}
              />
            </motion.div>
          )}

          {/* Finished State */}
          {gameState === "finished" && (
            <motion.div
              key="finished"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-center"
            >
              <ResultScreen
                correctKeyCount={correctKeyCount}
                errorCount={errorCount}
                maxCombo={maxCombo}
                duration={elapsedTime}
                onRestart={quitGame}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-zen-dark to-zen-dark z-0" />
    </div>
  );
}
