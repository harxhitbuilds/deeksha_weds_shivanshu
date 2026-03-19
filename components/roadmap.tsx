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
      className="relative w-full max-w-4xl mx-auto py-10 md:py-16 lg:py-12 font-serif"
    >
      {/* Animated SVG ZigZag Path */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none flex justify-center z-0 overflow-visible">
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-100 h-full">
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
              style={{ pathLength: smoothProgress, willChange: "stroke-dashoffset" }}
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
              willChange: "top, left, transform",
            }}
          >
            {/* Replace /assets/bicycle.png with your own image later. For now, it's a styled container. */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/50 rounded-full border border-primary shadow-lg p-2 flex items-center justify-center">
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
      <div className="relative z-10 flex flex-col justify-between h-full py-5 gap-16 md:gap-24">
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
                viewport={{ once: false, margin: "0px 0px -25% 0px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                style={{
                  border: "1px solid #d4af37",
                  borderRadius: "16px 2px 16px 2px",
                  willChange: "transform, opacity",
                }}
                className={`w-[50%] h-auto md:w-[45%] bg-[#fffdf9] p-4 md:p-6 shadow-xl relative group ${isLeft
                  ? "mr-auto text-left md:text-center"
                  : "ml-auto text-right md:text-center"
                  }`}
              >
                {/* Decorative border corners */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-primary opacity-60"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-primary opacity-60"></div>

                <h3 className="text-xl md:text-2xl lg:text-3xl text-[#8b5e34] tracking-wide">
                  {event.functionName}
                </h3>
                <div className="w-12 h-px bg-primary mx-auto md:mx-auto mb-2 opacity-50" />
                <div className="text-xs md:text-sm lg:text-[15px] text-[#5a5a5a] space-y-1 font-sans font-light">
                  <div className={`flex flex-col md:flex-row md:items-center ${isLeft ? "text-left md:justify-center" : "text-right md:justify-center"} gap-1 md:gap-3`}>
                    <p className="uppercase tracking-[0.15em] text-[#8b5e34]">
                      {event.date}
                    </p>
                    <span className="hidden md:inline text-primary">|</span>
                    <p className="tracking-widest opacity-80">{event.time}</p>
                  </div>
                  <p className="pt-1 italic font-serif text-[#6b6b6b]">
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
