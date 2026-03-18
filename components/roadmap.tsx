"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface EventCheckpoint {
  functionName: string;
  date: string;
  time: string;
  place: string;
}

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate the bicycle position strictly following the Bezièr curve math
  const bikeLeft = useTransform(
    smoothProgress,
    [0, 0.11, 0.2, 0.29, 0.38, 0.47, 0.56, 0.65, 0.74, 0.83, 0.92, 0.95, 1],
    [
      "50%",
      "80%",
      "50%",
      "20%",
      "50%",
      "80%",
      "50%",
      "20%",
      "50%",
      "80%",
      "50%",
      "20%",
      "50%",
    ],
  );

  const bikeTop = useTransform(smoothProgress, [0, 1], ["2%", "98%"]);

  const events: EventCheckpoint[] = [
    {
      functionName: "Tilak",
      date: "19th April",
      time: "10:00 AM",
      place: "Madhuvan Garden",
    },
    {
      functionName: "Sangeet",
      date: "19th April",
      time: "8:00 PM ",
      place: "Madhuvan Garden",
    },
    {
      functionName: "Haldi",
      date: "20th April",
      time: "9:00 AM",
      place: "Madhuvan Garden",
    },
    {
      functionName: "Vivah Sanskar",
      date: "20th April",
      time: "8:00 PM",
      place: "Madhuvan Garden",
    },
    
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-24 min-h-screen font-serif"
    >
      {/* Animated SVG ZigZag Path */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none flex justify-center z-0 overflow-visible">
        <div className="relative w-full max-w-md h-full">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle background path */}
            <path
              d="M 50,20 C 90,80 90,140 50,200 C 10,260 10,320 50,380 C 90,440 90,500 50,560 C 10,620 10,680 50,740 C 90,800 90,860 50,920 C 10,980 10,980 50,980"
              stroke="#e5dbce"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            {/* Animated gold progress path */}
            <motion.path
              d="M 50,20 C 90,80 90,140 50,200 C 10,260 10,320 50,380 C 90,440 90,500 50,560 C 10,620 10,680 50,740 C 90,800 90,860 50,920 C 10,980 10,980 50,980"
              stroke="url(#goldGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: smoothProgress }}
            />
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D4AF37" />
                <stop offset="0.5" stopColor="#F3E5AB" />
                <stop offset="1" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Bicycle Image (Will track exactly along the curve) */}
          <motion.div
            className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center mt-2"
            style={{
              top: bikeTop,
              textShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              left: bikeLeft,
            }}
          >
            {/* Replace /assets/bicycle.png with your own image later. For now, it's a styled container. */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 backdrop-blur-sm rounded-full border border-[#d4af37] shadow-lg p-2 flex items-center justify-center">
              <Image
                src="/assets/bicycle.png"
                alt="Couple on bicycle"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Checkpoints */}
      <div className="relative z-10 flex flex-col justify-between h-full py-10 gap-32 md:gap-40">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} items-center relative`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "0px 0px -45% 0px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className={`w-[85%] md:w-[45%] bg-[#fffdf9]/95 backdrop-blur-md p-6 md:p-8 shadow-2xl relative group ${
                  isLeft
                    ? "mr-auto text-right md:text-center"
                    : "ml-auto text-left md:text-center"
                }`}
                style={{
                  border: "1px solid #d4af37",
                  borderRadius: "16px 2px 16px 2px",
                }}
              >
                {/* Decorative border corners */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-[#d4af37] opacity-60"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-[#d4af37] opacity-60"></div>

                <h3 className="text-2xl md:text-4xl text-[#8b5e34] mb-3 tracking-wide">
                  {event.functionName}
                </h3>
                <div className="w-12 h-px bg-[#d4af37] mx-auto mb-4 opacity-50" />
                <div className="text-sm md:text-base text-[#5a5a5a] space-y-1 font-sans font-light">
                  <p className="uppercase tracking-[0.15em] text-[#8b5e34]">
                    {event.date}
                  </p>
                  <p className="tracking-widest opacity-80">{event.time}</p>
                  <p className="pt-2 italic font-serif text-[#6b6b6b]">
                    {event.place}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
