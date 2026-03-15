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
    const targetDate = new Date("2026-12-31T00:00:00").getTime();

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
      <div className="relative w-full">
        <Image
          src="/assets/footer.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="object-contain opacity-80"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  space-y-6">
          <h2 className="text-3xl font-semibold">The countdown begins</h2>

          <div className="text-5xl font-mono font-bold tracking-widest">
            {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground px-4">
            Our families are excited that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives.
          </p>
        </div>
      </div>
    </Container>
  );
}
