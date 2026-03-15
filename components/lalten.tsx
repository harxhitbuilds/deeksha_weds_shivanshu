"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Lalten() {
  const { scrollY } = useScroll();
  // Parallax effect: moves down 800px over 2000px of scroll
  const parallaxY = useTransform(scrollY, [0, 2000], [0, 800]);

  // Generate 30 lanterns randomly spread
  const laltens = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 90}%`,
      top: `${Math.random() * 90}%`,
      scale: 0.5 + Math.random() * 1.0,
      delayNum: Math.random() * 3,
    }));
  }, []);

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
