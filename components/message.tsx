"use client";

import { useRef } from "react";
import Container from "./container";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function GalleryItem({
  src,
  index,
  total,
  scrollYProgress,
  className,
}: {
  src: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const peak = index / (total - 1);
  const start = peak - 0.25;
  const end = peak + 0.25;

  const scale = useTransform(
    scrollYProgress,
    [start, peak, end],
    [0.85, 1.45, 0.85],
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, peak, end],
    [0.3, 1, 0.3],
  );
  const zIndex = useTransform(scrollYProgress, [start, peak, end], [1, 30, 1]);

  return (
    <motion.div
      style={{ scale, opacity, zIndex: zIndex as unknown as number }}
      className={`relative overflow-hidden rounded-xl shadow-xl border border-[#d4af37]/30 bg-black/50 backdrop-blur-sm ${className}`}
    >
      <Image
        src={src}
        alt={`Gallery Image ${index + 1}`}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}

export default function Message() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const galleryItems = [
    { src: "/assets/one.jpeg", className: "col-span-2 row-span-2" },
    { src: "/assets/two.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/three.jpeg", className: "col-span-1 row-span-2" },
    { src: "/assets/four.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/five.jpeg", className: "col-span-2 row-span-1" },
    { src: "/assets/six.jpeg", className: "col-span-1 row-span-1" },
    { src: "/assets/seven.jpeg", className: "col-span-1 row-span-1" },
  ];

  return (
    <Container>
      <div className="relative w-full flex items-center justify-center  overflow-hidden shadow-2xl ">
        <Image
          src="/assets/message.png"
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "900px",
            objectFit: "cover",
          }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start py-12 md:py-20 text-center text-white bg-linear-to-b from-black/60 via-black/40 to-black/80 overflow-y-auto custom-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl px-6"
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-6 text-[#f3e5ab] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
              A Message from the Couple
            </h2>
            <div className="w-24 h-px bg-[#d4af37] mb-8 opacity-70"></div>
            <p className="text-sm md:text-lg mb-12 leading-loose drop-shadow-md text-gray-100 font-light tracking-wide">
              We are both so delighted that you are able to join us in
              celebrating what we hope will be one of the happiest days of our
              lives. The affection shown to us by so many people since our roka
              has been incredibly moving, and has touched us both deeply. We
              would like to take this opportunity to thank everyone most
              sincerely for their kindness. We are looking forward to see you at
              the wedding.
            </p>
          </motion.div>

          <div
            ref={containerRef}
            className="w-full max-w-5xl mx-auto px-4 pb-10 mt-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] md:auto-rows-[200px] gap-3 md:gap-4 w-full grid-flow-dense">
              {galleryItems.map((item, index) => (
                <GalleryItem
                  key={index}
                  src={item.src}
                  index={index}
                  total={galleryItems.length}
                  scrollYProgress={scrollYProgress}
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
            className="flex flex-wrap justify-center mt-24 px-4"
          >
            {"Looking forward to see you".split(" ").map((word, index) => (
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
                className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-serif italic text-[#f3e5ab] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-center mr-3 last:mr-0"
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
