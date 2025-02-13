import Image from "next/image";
import HeroSection from "../components/heroSection";
import Brands from "../components/brands";
import Highlights from "../components/highlights";
import MVV from "../components/mvv";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Brands/>
      <Highlights/>
      <MVV/>
    </div>
    
  );
}
