"use client";

import { useState, useEffect } from "react";
import { getCurrentSeasonalTheme, type SeasonalTheme } from "@/config/seasons";

/**
 * Hook to get the current seasonal theme
 * Updates whenever the component mounts (in case user keeps the app open across seasons)
 */
export function useSeason() {
    const [seasonalTheme, setSeasonalTheme] = useState<SeasonalTheme>(() =>
        getCurrentSeasonalTheme()
    );

    useEffect(() => {
        // Check for season change every hour (in case user keeps app open)
        const interval = setInterval(() => {
            setSeasonalTheme(getCurrentSeasonalTheme());
        }, 1000 * 60 * 60); // 1 hour

        return () => clearInterval(interval);
    }, []);

    return seasonalTheme;
}
