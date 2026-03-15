import Container from "./container";
import Image from "next/image";

export default function ThingsToKnow() {
  return (
    <Container>
      <div className="relative w-full text-white">
        <Image
          src="/assets/things-to-know.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "800px",
            objectFit: "cover",
          }}
          className="opacity-80"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center bg-black/40">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Things to know
          </h2>
          <p className="max-w-3xl text-lg md:text-xl mb-16">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mb-16">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-3 tracking-widest uppercase">
                Hashtag
              </h3>
              <p className="text-sm md:text-base">
                While posting photos on social media please use the hashtag -{" "}
                <strong>#BadriKiDulhania</strong>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-3 tracking-widest uppercase">
                Weather
              </h3>
              <p className="text-sm md:text-base">
                It will be mostly cloudy with temperature reaching up to 22
                degrees at the venue
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-3 tracking-widest uppercase">
                Staff
              </h3>
              <p className="text-sm md:text-base">
                We recommend the nearby lodge called VEGA near the venue for the
                staff members
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-3 tracking-widest uppercase">
                Parking
              </h3>
              <p className="text-sm md:text-base">
                Valet parking for all our guests will be available at the venue
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <h3 className="text-2xl font-serif mb-4">Follow the action</h3>
            <a
              href="https://instagram.com/explore/tags/BadriKiDulhania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Click to open Instagram
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
