"use client";

import { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Lalten() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 2000], [0, 800]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const laltens = useMemo(() => {
    const positions = [
      // TOP CORNERS — mid to big lanterns, scattered
      { left: "-1%", top: "1%", scale: 0.90 },
      { left: "5%", top: "6%", scale: 1.10 },
      { left: "11%", top: "2%", scale: 0.80 },
      { left: "18%", top: "8%", scale: 0.95 },
      { left: "26%", top: "3%", scale: 0.75 },

      { left: "73%", top: "4%", scale: 0.78 },
      { left: "80%", top: "9%", scale: 0.95 },
      { left: "87%", top: "2%", scale: 0.85 },
      { left: "93%", top: "7%", scale: 1.10 },
      { left: "99%", top: "1%", scale: 0.88 },

      // BACKGROUND layer (small lanterns)
      { left: "5%", top: "80%", scale: 0.4 },
      { left: "15%", top: "50%", scale: 0.4 },
      { left: "25%", top: "70%", scale: 0.4 },
      { left: "35%", top: "30%", scale: 0.4 },
      { left: "45%", top: "60%", scale: 0.4 },
      { left: "55%", top: "80%", scale: 0.4 },
      { left: "65%", top: "40%", scale: 0.4 },
      { left: "75%", top: "65%", scale: 0.4 },
      { left: "85%", top: "45%", scale: 0.4 },
      { left: "95%", top: "75%", scale: 0.4 },

      // MID layer
      { left: "10%", top: "60%", scale: 0.7 },
      { left: "20%", top: "35%", scale: 0.7 },
      { left: "30%", top: "55%", scale: 0.7 },
      { left: "40%", top: "75%", scale: 0.7 },
      { left: "50%", top: "45%", scale: 0.7 },
      { left: "60%", top: "65%", scale: 0.7 },
      { left: "70%", top: "30%", scale: 0.7 },
      { left: "80%", top: "55%", scale: 0.7 },
      { left: "90%", top: "40%", scale: 0.7 },
      { left: "25%", top: "20%", scale: 0.7 },

      // FOREGROUND layer (big lanterns)
      { left: "15%", top: "25%", scale: 1.1 },
      { left: "35%", top: "15%", scale: 1.1 },
      { left: "55%", top: "25%", scale: 1.1 },
      { left: "75%", top: "15%", scale: 1.1 },
      { left: "50%", top: "10%", scale: 1.1 },
    ];

    // Scale down items significantly on mobile, or filter some out
    return positions
      .filter((_, i) => (isMobile ? i % 2 === 0 : true)) // Show 50% fewer units on mobile
      .map((pos, i) => ({
        id: i,
        ...pos,
        scale: isMobile ? pos.scale * 0.45 : pos.scale, // Scale down all items by half on mobile
        delayNum: i * 0.15,
      }));
  }, [isMobile]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      style={{ height: "300vh" }}
    >
      <motion.div
        className="relative w-full h-[200vh]"
        style={{ y: parallaxY }}
      >
        {laltens.map((lalten) => (
          <motion.div
            key={lalten.id}
            className="absolute origin-top"
            style={{ left: lalten.left, top: lalten.top }}
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: lalten.delayNum,
              }}
              style={{ scale: lalten.scale }}
            >
              <Image
                src="/assets/lalten.png"
                alt="Lantern"
                width={70}
                height={100}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}