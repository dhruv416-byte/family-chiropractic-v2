"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 193;
const framePath = (i: number) =>
  `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

type Annotation = {
  id: string;
  show: number;
  hide: number;
  kicker: string;
  title: string;
  body: string;
};

const annotations: Annotation[] = [
  {
    id: "card-1",
    show: 0.14,
    hide: 0.34,
    kicker: "01 · The Light",
    title: "It's the wavelength, not a workout.",
    body: "Red and near-infrared light reaches the fat cell, the cell releases its contents, your lymphatic system clears them out. No incisions. No downtime.",
  },
  {
    id: "card-2",
    show: 0.38,
    hide: 0.6,
    kicker: "02 · The Session",
    title: "Twenty-five minutes. Lunch break done.",
    body: "Lie down under the panels for 25 minutes, then 10 minutes on the vibration plate to push the released contents into circulation.",
  },
  {
    id: "card-3",
    show: 0.64,
    hide: 0.9,
    kicker: "03 · The Result",
    title: "Measurable inches, first session.",
    body: "Most clients lose between 1 and 6 inches in their very first session. Consistency over weeks is where the real shape change shows up.",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const currentFrameRef = useRef(0);
  const prevVisibleIdsRef = useRef("");

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [visibleCardIds, setVisibleCardIds] = useState<string[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      const tick = () => {
        loadedCount++;
        setLoadProgress(loadedCount / FRAME_COUNT);
        if (loadedCount === FRAME_COUNT) setLoaded(true);
      };
      img.onload = tick;
      img.onerror = tick;
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = framesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
    } else {
      drawH = ch;
      drawW = ch * imgRatio;
    }

    if (window.innerWidth <= 768) {
      drawW *= 1.15;
      drawH *= 1.15;
    }

    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;
    const section = sectionRef.current;
    if (!section) return;

    drawFrame(0);

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT),
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }

        if (heroTextRef.current) {
          const opacity = Math.max(0, 1 - progress / 0.08);
          heroTextRef.current.style.opacity = String(opacity);
        }

        const newVisible = annotations
          .filter((a) => progress >= a.show && progress < a.hide)
          .map((a) => a.id);
        const newIds = [...newVisible].sort().join(",");
        if (newIds !== prevVisibleIdsRef.current) {
          prevVisibleIdsRef.current = newIds;
          setVisibleCardIds(newVisible);
        }

        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="scroll-animation relative bg-zinc-950"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/10 to-zinc-950/95" />

        <div
          ref={heroTextRef}
          className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-end px-6 pb-24 text-white md:px-8 md:pb-32"
        >
          <span className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            LUMA Studio · Red-Light Body Contouring · Denver, CO
          </span>
          <h1 className="max-w-[14ch] text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
            Inches off.{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              Pain free.
            </span>{" "}
            Twenty-five minutes.
          </h1>
          <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-white/70 md:text-lg">
            FDA-cleared red-light therapy that targets the fat cell directly.
            No needles, no recovery, no fasting protocol. Walk in, lie down,
            walk out lighter.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 shadow-xl shadow-black/20 transition-colors hover:bg-indigo-50"
            >
              Try your first session — $69 →
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          {annotations.map((card) => {
            const visible = visibleCardIds.includes(card.id);
            return (
              <div
                key={card.id}
                className={`absolute inset-x-4 bottom-8 mx-auto max-w-[420px] transition-all duration-500 md:bottom-auto md:inset-x-auto md:right-10 md:top-1/2 md:max-w-[340px] md:-translate-y-1/2 ${
                  visible
                    ? "translate-y-0 opacity-100 md:translate-x-0"
                    : "translate-y-4 opacity-0 md:translate-y-[-50%] md:translate-x-6"
                }`}
              >
                <div className="card-surface bg-white/95 p-5 backdrop-blur-md md:p-6">
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-indigo-500 md:mb-3">
                    {card.kicker}
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-zinc-950 md:text-lg">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600 md:text-sm">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-white/60 md:left-10">
          <div className="h-px w-12 bg-white/30" />
          Scroll to explore
        </div>
      </div>

      {!loaded && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white">
          <div className="mb-6 text-[10px] font-medium uppercase tracking-wider text-white/60">
            Preparing experience
          </div>
          <div className="h-px w-64 overflow-hidden bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-[width] duration-200"
              style={{ width: `${loadProgress * 100}%` }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-white/40">
            {Math.round(loadProgress * 100)}%
          </div>
        </div>
      )}
    </section>
  );
}
