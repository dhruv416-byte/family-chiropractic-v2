"use client";

import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const steps = [
  {
    n: "01",
    title: "Measure",
    body: "Quick health screen, baseline measurements at every target zone, and a short conversation about what you actually want changed.",
  },
  {
    n: "02",
    title: "Light",
    body: "Twenty-five minutes under the red and near-infrared panels. We treat multiple zones in the same session — no single-zone bottleneck.",
  },
  {
    n: "03",
    title: "Activate",
    body: "Ten minutes on the vibration plate to move the released contents into the lymphatic system. Re-measure. See what came off.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-8 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>03 · Protocol</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-20">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            Three steps. Twenty-five minutes.{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Measurable inches.
            </span>
          </h2>
        </AnimatedItem>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <AnimatedItem key={step.n}>
              <div className="card-surface h-full p-8">
                <div className="mb-6 flex items-baseline gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-500 bg-clip-text text-6xl font-semibold tracking-tighter text-transparent">
                    {step.n}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-zinc-300 to-transparent" />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {step.body}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
