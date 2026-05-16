"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
            scrolled
              ? "border-white/40 bg-white/70 px-5 py-2 shadow-lg shadow-zinc-950/5"
              : "border-white/30 bg-white/40 px-6 py-3"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-zinc-950"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[11px] font-bold text-white shadow-md shadow-indigo-500/30">
              L
            </span>
            <span className="text-sm">LUMA Studio</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-zinc-700 md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-zinc-950"
            >
              Services
            </a>
            <a
              href="#process"
              className="transition-colors hover:text-zinc-950"
            >
              Process
            </a>
            <a href="#trust" className="transition-colors hover:text-zinc-950">
              Trust
            </a>
            <a href="#faq" className="transition-colors hover:text-zinc-950">
              FAQ
            </a>
          </div>
          <a
            href="#book"
            className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Book a visit
          </a>
        </nav>
      </div>
    </header>
  );
}
