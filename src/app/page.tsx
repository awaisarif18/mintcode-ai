import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeBuild from "@/components/sections/WhatWeBuild";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeBuild />
      {/* TODO: homepage sections build in order — Why MintCode next */}
    </main>
  );
}
