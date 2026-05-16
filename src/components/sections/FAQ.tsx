"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const faqs = [
  {
    q: "Is red-light therapy safe?",
    a: "Yes. The device is FDA-cleared for circumferential reduction. There's no UV, no heat damage, no needles, no incisions — it's a wavelength of light, not a laser cutting anything.",
  },
  {
    q: "Does it hurt?",
    a: "No. Most clients describe it as warm and relaxing. You'll lie back on a comfortable surface with the panels positioned around your target zones for the duration of the session.",
  },
  {
    q: "How many sessions will I need?",
    a: "Our standard program is two sessions per week. The total count depends on your starting point and goal — we'll give you a recommendation after your first measure-in.",
  },
  {
    q: "How long do the results last?",
    a: "Once the contents are released from the fat cell and cleared by the lymphatic system, they're gone. If your diet and movement stay roughly the same, the result holds. New fat can be stored if habits regress.",
  },
  {
    q: "What should I wear?",
    a: "Loose, comfortable clothing you can move easily. We'll need access to the target areas, so bring a tank/shorts if we're treating the waist, hips, or thighs.",
  },
  {
    q: "Can I work out the same day?",
    a: "Yes — light cardio after a session actually helps flush the released contents. Skip an intense workout right before if you can, so we can get accurate measurements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32"
    >
      <AnimatedSection className="mx-auto max-w-[900px]">
        <AnimatedItem>
          <EyebrowBadge>06 · Questions</EyebrowBadge>
        </AnimatedItem>
        <AnimatedItem className="mt-6 mb-12">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">
            Frequently asked.
          </h2>
        </AnimatedItem>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AnimatedItem key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="card-surface w-full p-6 text-left transition-all md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">
                    {f.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} weight="bold" />
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-relaxed text-zinc-600">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
