import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyMintCode from "@/components/sections/WhyMintCode";
import Process from "@/components/sections/Process";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Founders from "@/components/sections/Founders";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeBuild />
      <WhyMintCode />
      <Process />
      <FeaturedWork />
      <Founders />
      <Contact />
      <Footer />
    </main>
  );
}
