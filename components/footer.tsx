"use client";

import { useState, useEffect } from "react";
import Container from "./container";
import Image from "next/image";

export default function Footer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2026-04-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <Container>
      <div className="relative w-full flex items-center justify-center min-h-[50vh] md:min-h-0 bg-black">
        <Image
          src="/assets/footer.png"
          alt="logo"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 py-16 text-white w-full h-full">
          <h2 className="text-2xl md:text-5xl font-serif text-secondary tracking-widest uppercase drop-shadow-md">
            The countdown begins
          </h2>

          <div className="w-16 md:w-24 h-px bg-primary opacity-80 mt-2 mb-4"></div>

          <div className="text-3xl md:text-7xl lg:text-8xl font-serif font-light tracking-widest md:tracking-[0.2em] text-white flex items-center justify-center">
            <span className="inline-block px-1 md:px-2">{formatTime(timeLeft.days)}</span>
            <span className="text-primary text-xl md:text-5xl lg:text-6xl mx-1 md:mx-2">
              :
            </span>
            <span className="inline-block px-1 md:px-2">{formatTime(timeLeft.hours)}</span>
            <span className="text-primary text-xl md:text-5xl lg:text-6xl mx-1 md:mx-2">
              :
            </span>
            <span className="inline-block px-1 md:px-2">{formatTime(timeLeft.minutes)}</span>
            <span className="text-primary text-xl md:text-5xl lg:text-6xl mx-1 md:mx-2">
              :
            </span>
            <span className="inline-block px-1 md:px-2">{formatTime(timeLeft.seconds)}</span>
          </div>

          <div className="flex justify-center gap-12 md:gap-28 lg:gap-36 text-[0.6rem] md:text-sm uppercase tracking-[0.2em] text-white/70 mt-2">
            <span>Days</span>
            <span>Hours</span>
            <span>Mins</span>
            <span>Secs</span>
          </div>

          <a
            href="https://maps.app.goo.gl/CUGUrHqzZ7SHEGCR8" // Placeholder map link, update as needed
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-8 py-3 bg-primary text-[#8b5e34] rounded-sm font-sans uppercase tracking-widest text-xs md:text-sm font-semibold shadow-lg flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-0.5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Location Map
          </a>
        </div>
      </div>
    </Container>
  );
}
