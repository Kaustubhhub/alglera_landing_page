import Appbar from "@/components/appbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <BackgroundBeams/>
      <Appbar/>
      <HeroSection/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
