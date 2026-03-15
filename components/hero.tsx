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
          className={`object-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-80" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          priority
        />

        {/* Show content only when the image is fully loaded to prevent layout jumps/cracks */}
        <AnimatePresence>
          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-end space-y-12 pb-34"
            >
              <Invite />
              {/* Added animated Roadmap component instead of the frame grid */}
              <div className="max-w-5xl mx-auto px-4 w-full mt-10">
                <Roadmap />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
