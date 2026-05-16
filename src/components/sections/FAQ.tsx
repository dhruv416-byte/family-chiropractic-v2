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
    q: "Is chiropractic care safe for children?",
    a: "Absolutely. Pediatric adjustments use a fraction of the force used for adults — about the same pressure you'd use to test a ripe tomato. We've cared for thousands of children, from newborns up.",
  },
  {
    q: "Do I need a referral from my doctor?",
    a: "No referral needed. Walk in or book online — we'll handle the rest.",
  },
  {
    q: "How long is a typical session?",
    a: "Your first visit runs about 60 minutes — consultation, exam, and your first adjustment. Follow-ups are 20–30 minutes.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with most major insurance carriers and offer affordable cash plans for the uninsured. We'll verify your benefits before your first visit.",
  },
  {
    q: "What should I wear?",
    a: "Anything comfortable that lets you move freely — gym wear or loose layers work best.",
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
                className="card-surface w-full p-7 text-left transition-all"
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
