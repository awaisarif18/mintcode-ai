import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyMintCode from "@/components/sections/WhyMintCode";
import Process from "@/components/sections/Process";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Founders from "@/components/sections/Founders";
import ContactForm from "@/components/sections/ContactForm";

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

      {/* Section #8 Contact + Footer is NOT fully built yet — this is an interim
          wrapper so the wired ContactForm is reachable from the #call CTAs.
          TODO: build the final Contact section (copy + layout from design-reference). */}
      <section
        id="call"
        className="border-t border-line bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]"
      >
        <div className="mx-auto max-w-[640px]">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
