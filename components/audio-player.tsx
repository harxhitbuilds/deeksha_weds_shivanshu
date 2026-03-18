"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const tryPlayAudio = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
                // Only remove listeners if playback actually succeeded
                const events = ["click", "touchstart", "scroll", "keydown"];
                events.forEach((evt) => document.removeEventListener(evt, tryPlayAudio));
            } catch {
                // Autoplay blocked by browser. Leave listeners active for the next interaction.
            }
        };

        // 1. Attempt to play immediately on mount
        tryPlayAudio();

        // 2. Add event listeners to play on first user interaction anywhere on the page
        const events = ["click", "touchstart", "scroll", "keydown"];
        events.forEach((evt) => {
            // Don't use { once: true } here because some events (like programmatic scroll) 
            // might fire without granting interaction permissions.
            document.addEventListener(evt, tryPlayAudio);
        });

        return () => {
            events.forEach((evt) => {
                document.removeEventListener(evt, tryPlayAudio);
            });
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed top-4 right-4 md:top-8 md:right-8 z-100">
            {/* Make sure to add your background music file as 'public/assets/music.mp3' */}
            <audio ref={audioRef} src="/assets/music.mp3" loop preload="auto" autoPlay />
            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-md border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:bg-black/60 transition-all group"
                aria-label="Toggle Music"
            >
                {isPlaying ? (
                    // Pause Icon
                    <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                ) : (
                    // Play Icon
                    <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white transition-colors ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
}
