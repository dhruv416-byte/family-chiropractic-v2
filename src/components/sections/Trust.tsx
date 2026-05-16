"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const duration = 1800;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.floor(eased * target));
              if (t < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-6xl font-semibold tracking-tighter md:text-7xl"
    >
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

const stats = [
  { value: 16, suffix: "", label: "Years in practice" },
  { value: 4200, suffix: "+", label: "Families served" },
  { value: 312, suffix: "", label: "Five-star reviews" },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32"
    >
      <AnimatedSection className="mx-auto max-w-[1400px]">
        <AnimatedItem>
          <EyebrowBadge>04 · Trust</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-20">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl">
            Sixteen years. Thousands of spines.{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              One mission.
            </span>
          </h2>
        </AnimatedItem>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <AnimatedItem key={s.label}>
              <div className="card-surface h-full p-8">
                <Counter target={s.value} suffix={s.suffix} />
                <div className="mt-4 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  {s.label}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
