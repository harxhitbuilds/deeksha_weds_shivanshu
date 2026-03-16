import Image from "next/image";

export default function Invite() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 lg:space-y-8 text-black drop-shadow-sm px-4 w-full pt-12 md:pt-0">
      <div className="relative mb-2 md:mb-4 flex justify-center items-center">
        <Image
          src="/assets/ganesh.png"
          alt="Ganesh"
          width={80}
          height={80}
          className="object-contain opacity-80 md:w-30 md:h-30"
        />
        <span className="absolute text-white text-xs md:text-base lg:text-lg whitespace-nowrap drop-shadow-md -top-6 left-1/2 transform -translate-x-1/2 font-semibold tracking-wide bg-black/20 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0">
          ॐ श्री गणेशाय नम
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <p className="text-xs md:text-base lg:text-lg tracking-widest text-white/90 uppercase">
          With the heavenly blessings of
        </p>
        <p className="text-base md:text-xl lg:text-2xl font-medium text-white">
          Smt. Lata Devi & Sm. Kamal Kapoor
        </p>
      </div>

      <div className="w-16 md:w-24 h-px bg-orange-400 my-4 opacity-60"></div>

      <p className="text-base md:text-xl lg:text-2xl font-medium text-white">
        Mrs. Reena & Mr. Rajiv Kapoor
      </p>

      <h2 className="text-xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase py-2 md:py-4 text-white">
        Invite
      </h2>

      <p className="text-xs md:text-base lg:text-lg text-white/90 max-w-[80%] mx-auto">
        You to join us in the wedding celebrations of
      </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic py-2 md:py-4 text-white leading-tight">
        Abhishek
        <span className="block text-3xl md:text-5xl lg:text-6xl my-2 not-italic text-pink-500 drop-shadow-md">
          &
        </span>
        Kanika
      </h1>

      <div className="flex flex-col space-y-1 md:space-y-2 text-white pt-2 md:pt-4">
        <p className="text-xs md:text-base lg:text-lg italic text-white/80">
          Daughter of
        </p>
        <p className="text-sm md:text-lg lg:text-xl font-medium text-white">
          Mrs. Shalini & Mr. Aakash Mittal,
        </p>
      </div>

      <p className="text-base md:text-xl lg:text-2xl font-serif italic pt-4 md:pt-8 text-white/90">
        On the following events
      </p>
    </div>
  );
}
