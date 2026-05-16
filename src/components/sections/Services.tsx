"use client";

import { PersonArmsSpread, Baby, Barbell, HeartStraight } from "@phosphor-icons/react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const services = [
  {
    icon: PersonArmsSpread,
    title: "Spinal Adjustment",
    body: "Precision corrections to restore mobility, reduce nerve interference, and bring the spine back into balance.",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    body: "Gentle, age-appropriate adjustments for infants and children — supporting healthy growth from day one.",
  },
  {
    icon: Barbell,
    title: "Sports Recovery",
    body: "Performance-tier protocols for athletes — faster recovery, better range of motion, fewer injuries.",
  },
  {
    icon: HeartStraight,
    title: "Prenatal Care",
    body: "Specialized adjustments for expecting mothers — relieve pressure, prepare the body, ease delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>02 · Services</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-16">
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tighter md:text-5xl lg:text-6xl leading-[1.05]">
            Built for the whole family.
          </h2>
        </AnimatedItem>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedItem key={s.title}>
                <div className="card-surface h-full p-7">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30">
                    <Icon size={22} weight="bold" />
                  </div>
                  <div className="mb-2 font-mono text-xs font-semibold text-zinc-400">
                    /0{i + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {s.body}
                  </p>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
