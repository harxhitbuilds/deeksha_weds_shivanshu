import Container from "./container";
import Image from "next/image";

export default function Ring() {
  return (
    <Container>
      <div className="relative w-full">
        <Image
          src="/assets/ring.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="object-contain opacity-80"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white/90 drop-shadow-md">
            Abhishek
            <span className="block text-3xl md:text-5xl lg:text-6xl my-4">
              &
            </span>
            Kanika
          </h1>
        </div>
      </div>
    </Container>
  );
}
