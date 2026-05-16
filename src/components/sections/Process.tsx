"use client";

import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const steps = [
  {
    n: "01",
    title: "Consultation",
    body: "A 30-minute deep dive into your history, lifestyle, and goals. Postural exam, spinal scan, full diagnostic.",
  },
  {
    n: "02",
    title: "Adjustment Plan",
    body: "A personalized protocol built around your spine, your schedule, and your body's response. No two plans are the same.",
  },
  {
    n: "03",
    title: "Lifelong Wellness",
    body: "Maintenance care that keeps you out of pain and in motion — for the long haul, for the whole family.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-8 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>03 · Process</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-20">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            Three steps to a body that finally{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              works with you
            </span>
            .
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
