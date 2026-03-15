import Footer from "@/components/footer";
import Ring from "@/components/ring";
import ThingsToKnow from "@/components/things-to-know";
import Message from "@/components/message";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Message />
      <Ring />
      <Footer />
    </div>
  );
}
