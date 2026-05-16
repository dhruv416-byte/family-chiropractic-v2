"use client";

import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export default function Mission() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-40">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>01 · Framework</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            Your spine is the{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              highway
            </span>{" "}
            your nervous system drives on.
          </h2>
        </AnimatedItem>
        <AnimatedItem className="mt-6">
          <p className="max-w-[55ch] text-base leading-relaxed text-zinc-600 md:text-lg">
            We keep that road clear — so your body can do what it was built to
            do. No pressure plans, no upsell carousels. Just careful,
            considered care for the people you love.
          </p>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
