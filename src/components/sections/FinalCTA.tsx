"use client";

import { Phone, MapPin, Clock } from "@phosphor-icons/react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-8 md:py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_30%,rgba(99,102,241,0.4),transparent_50%),radial-gradient(at_70%_70%,rgba(139,92,246,0.4),transparent_50%)] opacity-20" />

      <AnimatedSection className="relative mx-auto max-w-[1400px]">
        <AnimatedItem>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            07 · Next step
          </span>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-8">
          <h2 className="max-w-[16ch] text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-8xl">
            Your spine is waiting.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Book.
            </span>
          </h2>
        </AnimatedItem>
        <AnimatedItem className="mb-12">
          <p className="max-w-[55ch] text-base leading-relaxed text-white/70 md:text-lg">
            First consultation is on us. No insurance pressure, no pushy plans.
            Just an honest conversation about your body.
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <form
            className="mb-16 grid max-w-[700px] gap-3 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll reach out within 24 hours.");
            }}
          >
            <input
              required
              placeholder="Your name"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors placeholder:text-white/30 focus:border-indigo-400 focus:outline-none"
            />
            <input
              required
              type="tel"
              placeholder="Phone number"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors placeholder:text-white/30 focus:border-indigo-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 transition-opacity hover:opacity-95 md:col-span-2"
            >
              Book free consultation →
            </button>
          </form>
        </AnimatedItem>

        <div className="grid grid-cols-1 gap-5 border-t border-white/10 pt-12 md:grid-cols-3">
          <AnimatedItem>
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <Phone size={16} weight="bold" />
              </div>
              <div>
                <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                  Call
                </div>
                <div className="text-sm">(303) 555-0142</div>
              </div>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <MapPin size={16} weight="bold" />
              </div>
              <div>
                <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                  Visit
                </div>
                <div className="text-sm">
                  1420 Wellness Blvd
                  <br />
                  Denver, CO 80203
                </div>
              </div>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <Clock size={16} weight="bold" />
              </div>
              <div>
                <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                  Hours
                </div>
                <div className="text-sm">
                  Mon–Fri 8a–7p
                  <br />
                  Sat 9a–2p
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>

        <AnimatedItem className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[10px] font-bold text-white">
                F
              </span>
              <span>Family Chiropractic</span>
            </div>
            <span>© 2026 · All Systems Aligned</span>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </section>
  );
}
