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

          <p className="max-w-xs md:max-w-3xl text-sm md:text-lg text-gray-200 mt-8 px-4 font-sans leading-relaxed tracking-wide">
            Our families are excited that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives.
          </p>
        </div>
      </div>
    </Container>
  );
}
