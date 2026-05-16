"use client";

import { Sparkle, Lightning, Drop, HeartStraight } from "@phosphor-icons/react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const services = [
  {
    icon: Sparkle,
    title: "First Session — $69",
    body: "Baseline measurements, a full 25-minute Contour Light session, 10 minutes on the vibration plate, and a personalized roadmap. ~75 minutes total.",
  },
  {
    icon: Lightning,
    title: "Contour Program",
    body: "Twice-a-week protocol over six to eight weeks. The cadence that produces compounding inch loss for most clients.",
  },
  {
    icon: Drop,
    title: "Lymph + Activate",
    body: "Vibration plate, lymphatic drainage massage, and infrared sauna add-ons to help the body flush released contents faster.",
  },
  {
    icon: HeartStraight,
    title: "Maintenance",
    body: "Monthly single-session visits to preserve the result once you've hit your goal. No re-onboarding, walk in and start.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>02 · Sessions</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-16">
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tighter md:text-5xl lg:text-6xl leading-[1.05]">
            Four ways to work with us.
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
