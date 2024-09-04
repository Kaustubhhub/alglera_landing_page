import Appbar from "@/components/appbar";
import HeroSection from "@/components/HeroSection";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <BackgroundBeams/>
      <Appbar/>
      <HeroSection/>
    </main>
  );
}
