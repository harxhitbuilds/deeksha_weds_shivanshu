"use client";

import { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Invite from "./invite";
import Lalten from "./lalten";
import Roadmap from "./roadmap";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Container>
      <div className="relative w-full flex flex-col min-h-[50vh] ">
        <Lalten />

        <Image
          src="/assets/hero.png"
          alt="hero background"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className={`object-cover transition-opacity duration-1000  ${imageLoaded ? "opacity-80" : "opacity-0"
            }`}
          onLoad={() => setImageLoaded(true)}
          priority
        />


        <AnimatePresence>
          {imageLoaded && (
            <>
              {/* Save the Date smoothly fading and expanding at the top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                className="absolute top-8 md:top-16 inset-x-0 z-20 flex justify-center pointer-events-none"
              >
                <motion.h2
                  initial={{ letterSpacing: "0.1em" }}

                  animate={{ y: [0, -30, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  // transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-script  text-white  uppercase drop-shadow-2xl text-center px-4 mt-34  decoration-secondary/80 underline-offset-8 hidden md:flex"
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
                >
                  Save the Date
                </motion.h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-x-0 bottom-0 md:bottom-12 flex flex-col items-center justify-end space-y-8 md:space-y-12 pb-10 md:pb-100"
              >
                <Invite />

                <div className="max-w-5xl mx-auto px-4 w-full mt-4 md:mt-10">
                  <Roadmap />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
