"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { animatePageIn } from "@/utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    animatePageIn();
  }, [pathname, router]);

  return (
    <div className="relative z-[1000]">
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
        style={{ transform: "translateY(0%)" }}
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
        style={{ transform: "translateY(0%)" }}
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
        style={{ transform: "translateY(0%)" }}
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
        style={{ transform: "translateY(0%)" }}
      />
      {children}
    </div>
  );
}
