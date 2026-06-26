import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyMintCode from "@/components/sections/WhyMintCode";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeBuild />
      <WhyMintCode />
      <Process />
      {/* TODO: homepage sections build in order — Featured Work next */}
    </main>
  );
}
