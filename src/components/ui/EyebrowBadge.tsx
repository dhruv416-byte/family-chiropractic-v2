import type { ReactNode } from "react";

export function EyebrowBadge({ children }: { children: ReactNode }) {
  return (
    <span className="pill-surface inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
      {children}
    </span>
  );
}
