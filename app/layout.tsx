import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/provider/lenis.provider";
import AudioPlayer from "@/components/audio-player";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deeksha & Shivanshu Wedding",
  description: "Join us in celebrating the wedding of Deeksha and Shivanshu!",
  openGraph: {
    title: "Deeksha & Shivanshu Wedding",
    description: "Join us in celebrating the wedding of Deeksha and Shivanshu!",
    url: "https://deeksha-weds-shivanshu.vercel.app", // You can replace this with your actual URL when deployed
    siteName: "Deeksha & Shivanshu Wedding",
    images: [
      {
        url: "/assets/hero.jpeg", // You can replace this with your actual image URL when deployed
        width: 1200,
        height: 630,
        alt: "Deeksha & Shivanshu Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeksha & Shivanshu Wedding",
    description: "Join us in celebrating the wedding of Deeksha and Shivanshu!",
    images: ["/assets/hero.jpeg"], // You can replace this with your actual image URL when deployed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${montserrat.variable} antialiased bg-white`}
      >
        <SmoothScroll>
          <AudioPlayer />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
