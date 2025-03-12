import Image from "next/image";
import HeroSection from "@/components/heroSection";
import Brands from "@/components/brands";
import Highlights from "@/components/highlights";
import MVV from "@/components/mvv";
import getHighlightsProducts from "../../../actions/home/actions";

export default async function Home() {

  const products = await getHighlightsProducts();  

  return (
    <div>
      <HeroSection/>
      <Brands/>
      <Highlights products={products}/>
      <MVV/>
    </div>
    
  );
}
