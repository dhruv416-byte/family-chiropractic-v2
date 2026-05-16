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
          <EyebrowBadge>01 · The Premise</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            You don&apos;t need to live in the gym to lose the{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              last few inches
            </span>
            .
          </h2>
        </AnimatedItem>
        <AnimatedItem className="mt-6">
          <p className="max-w-[55ch] text-base leading-relaxed text-zinc-600 md:text-lg">
            Stubborn fat doesn&apos;t care how many crunches you do. Red-light
            therapy works on the fat cell directly — no scalpels, no suction,
            no sweat. You lie down, the panels do the work, and the lymphatic
            system carries the rest out. That&apos;s the whole protocol.
          </p>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
