import Image from "next/image";

interface FrameProps {
  imageSrc: string;
  functionName: string;
  date: string;
  time: string;
  place: string;
}

export default function Frame({
  imageSrc,
  functionName,
  date,
  time,
  place,
}: FrameProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative inline-flex items-center justify-center">
        <div className="absolute inset-[8%] z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt="inner content"
            fill
            className="object-cover p-12"
          />
        </div>

        <Image
          src="/assets/frame.png"
          alt="frame border"
          width={200}
          height={300}
          className="relative z-10 w-full h-auto pointer-events-none drop-shadow-lg"
        />
      </div>

      <div className="flex flex-col items-center text-center px-2 z-20">
        <h3 className="text-2xl md:text-3xl font-serif text-white drop-shadow-sm mb-1">
          {functionName}
        </h3>
        <div className="text-xs md:text-sm font-medium text-zinc-300 opacity-90 space-y-0.5">
          <p className="tracking-wide uppercase">
            {date} &bull; {time}
          </p>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
}
