"use client";

import { useRef } from "react";
import Container from "./container";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function GalleryItem({
  src,
  index,
  className,
}: {
  src: string;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll exactly for this individual image element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center center", "end 5%"], // scales up as it reaches the center of the viewport
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [1, 20, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, zIndex: zIndex as unknown as number }}
      className={`relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-primary/40 bg-black backdrop-blur-sm group ${className}`}
    >
      {/* Dark overlay that fades away on hover for an interactive feel */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10" />

      <Image
        src={src}
        alt={`Gallery Image ${index + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </motion.div>
  );
}

export default function Message() {
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    { src: "/assets/two.jpeg", className: "col-span-2 row-span-2" },
    { src: "/assets/one.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/three.jpeg", className: "col-span-1 row-span-2" },
    { src: "/assets/four.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/five.jpeg", className: "col-span-2 row-span-1" },
    { src: "/assets/six.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/seven.jpeg", className: "col-span-1 row-span-1" },
  ];

  return (
    <Container>
      <div className="relative w-full flex items-center justify-center overflow-hidden shadow-2xl min-h-screen">
        <Image
          src="/assets/message.png"
          alt="background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-start py-12 md:py-20 text-center text-white bg-linear-to-b from-black/70 via-black/50 to-black/80 w-full min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl px-4 md:px-8 mt-10 md:mt-0"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary drop-shadow-lg tracking-wide mt-4 md:mt-0">
              A Message from the Couple
            </h2>
            <div className="w-32 h-px bg-primary mb-8 opacity-80"></div>
            <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-12 leading-relaxed md:leading-loose drop-shadow-md text-gray-200 font-sans tracking-wide px-2 md:px-10">
              We are both so delighted that you are able to join us in
              celebrating what we hope will be one of the happiest days of our
              lives. The affection shown to us by so many people
              has been incredibly moving, and has touched us both deeply. We
              would like to take this opportunity to thank everyone most
              sincerely for their kindness. We are looking forward to see you at
              the wedding.❤️
            </p>
          </motion.div>

          <div
            ref={containerRef}
            className="w-full max-w-5xl mx-auto px-4 pb-10 mt-12 md:mt-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[220px] lg:auto-rows-[250px] gap-2 md:gap-4 w-full grid-flow-dense mt-6 md:mt-10">
              {galleryItems.map((item, index) => (
                <GalleryItem
                  key={index}
                  src={item.src}
                  index={index}
                  className={item.className}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap justify-center mt-8 md:mt-24 px-4 pb-12 w-full"
          >
            {"Looking forward to seeing you".split(" ").map((word, index) => (
              <motion.h3
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="relative z-10 text-3xl md:text-5xl lg:text-5xl tracking-wider font-serif text-secondary drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-center mr-3 last:mr-0 mt-8"
              >
                {word}
              </motion.h3>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
