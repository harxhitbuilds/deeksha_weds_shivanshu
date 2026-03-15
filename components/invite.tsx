import Image from "next/image";

export default function Invite() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4 text-black drop-shadow-sm px-4">
      <div className="relative mb-4 flex justify-center items-center">
        <Image
          src="/assets/ganesh.png"
          alt="Ganesh"
          width={120}
          height={120}
          className="object-contain opacity-80"
        />
        <span className="absolute text-white text-sm md:text-base whitespace-nowrap drop-shadow-md -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold tracking-wide">
          ॐ श्री गणेशाय नम
        </span>
      </div>

      <p className="text-sm md:text-base tracking-widest text-white">
        With the heavenly blessings of
      </p>
      <p className="text-lg md:text-xl font-medium text-white">
        Smt. Lata Devi & Sm. Kamal Kapoor
      </p>

      <div className="w-16 h-px bg-orange-400 my-2 opacity-60"></div>

      <p className="text-lg md:text-xl font-medium text-white">
        Mrs. Reena & Mr. Rajiv Kapoor
      </p>

      <h2 className="text-2xl md:text-4xl font-serif tracking-[0.3em] uppercase py-4 text-white">
        Invite
      </h2>

      <p className="text-sm md:text-base text-white">
        You to join us in the wedding celebrations of
      </p>

      <h1 className="text-5xl md:text-7xl font-serif italic py-4 text-white">
        Abhishek
        <span className="block text-3xl md:text-5xl my-2 not-italic text-pink-600">
          &
        </span>
        Kanika
      </h1>

      <div className="flex flex-col space-y-2 text-white">
        <p className="text-sm md:text-base italic">Daughter of</p>
        <p className="text-base md:text-lg font-medium text-white">
          Mrs. Shalini & Mr. Aakash Mittal,
        </p>
      </div>

      <p className="text-lg md:text-xl font-serif italic pt-6 text-white">
        On the following events
      </p>
    </div>
  );
}
