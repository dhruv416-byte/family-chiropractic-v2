"use client";

import { Star } from "@phosphor-icons/react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const quotes = [
  {
    name: "Maria R.",
    role: "Mother of three",
    initials: "MR",
    color: "from-indigo-500 to-violet-500",
    text: "I walked in skeptical. After four sessions, my migraines were gone and my eight-year-old's posture had completely transformed. This place is the real deal.",
  },
  {
    name: "David K.",
    role: "Marathon runner",
    initials: "DK",
    color: "from-zinc-700 to-zinc-950",
    text: "Shaved 14 minutes off my marathon time after six months of regular adjustments. The recovery alone changed how I train.",
  },
  {
    name: "Jenna T.",
    role: "New mom",
    initials: "JT",
    color: "from-amber-400 to-amber-600",
    text: "Prenatal care here got me through pregnancy without back pain. Now my newborn gets adjusted too. The whole team is incredible.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-32">
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>05 · Testimonials</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-16">
          <h2 className="max-w-[18ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            What families say.
          </h2>
        </AnimatedItem>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <AnimatedItem key={q.name}>
              <div className="card-surface flex h-full flex-col p-7">
                <div className="mb-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      size={14}
                      weight="fill"
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-base leading-relaxed text-zinc-700">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${q.color} text-xs font-semibold text-white`}
                  >
                    {q.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{q.name}</div>
                    <div className="text-xs text-zinc-500">{q.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
