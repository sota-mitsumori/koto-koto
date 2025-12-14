"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useSeason } from "../hooks/useSeason";
import type { SeasonalTheme } from "../config/seasons";

interface SeasonalContextValue {
    theme: SeasonalTheme;
}

const SeasonalContext = createContext<SeasonalContextValue | null>(null);

interface SeasonalProviderProps {
    children: ReactNode;
}

/**
 * Provides seasonal theme to all child components
 * Prevents unnecessary re-fetching of seasonal data across the component tree
 */
export function SeasonalProvider({ children }: SeasonalProviderProps) {
    const theme = useSeason();

    return (
        <SeasonalContext.Provider value={{ theme }}>
            {children}
        </SeasonalContext.Provider>
    );
}

/**
 * Hook to access the current seasonal theme
 * Must be used within SeasonalProvider
 */
export function useSeasonalTheme(): SeasonalTheme {
    const context = useContext(SeasonalContext);
    if (!context) {
        throw new Error(
            "useSeasonalTheme must be used within SeasonalProvider"
        );
    }
    return context.theme;
}
