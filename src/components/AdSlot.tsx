"use client";

import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";

interface AdSlotProps {
  id: string; // Ad unit ID
  type: "banner" | "rectangle" | "native"; // banner (728x90 or 320x50), rectangle (300x250), native (in-feed)
  label?: string;
}

export default function AdSlot({ id, type, label = "ADVERTISEMENT" }: AdSlotProps) {
  useEffect(() => {
    // In production, when ads scripts are loaded, you would execute them here.
    // example: (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [id]);

  const getSizeClasses = () => {
    switch (type) {
      case "banner":
        return "w-full min-h-[90px] max-w-[728px] mx-auto";
      case "rectangle":
        return "w-[300px] h-[250px] mx-auto";
      case "native":
        return "w-full min-h-[120px]";
      default:
        return "w-full min-h-[90px]";
    }
  };

  return (
    <div className="my-8 w-full flex flex-col items-center justify-center gap-1.5">
      <span className="text-[10px] tracking-widest text-slate-600 font-semibold uppercase">
        {label}
      </span>
      <div
        className={`relative flex items-center justify-center rounded-lg border border-purple-900/30 bg-purple-950/10 px-4 py-6 text-center text-xs overflow-hidden group ${getSizeClasses()}`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-amber-500/5 to-purple-900/5 opacity-50 group-hover:opacity-80 transition-opacity" />
        
        {/* Visual placeholders simulating advertising box */}
        <div className="z-10 flex flex-col items-center gap-1 text-purple-400/60 font-mono">
          <div className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 animate-spin text-amber-500/40" />
            <span>Ad Slot: {id}</span>
          </div>
          <span className="text-[10px] text-slate-500">
            ({type === "banner" ? "728x90 / 320x50 Responsive Banner" : type === "rectangle" ? "300x250 Medium Rectangle" : "In-feed Native Ad"})
          </span>
          {/* Ad integration instruction */}
          {/* 
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                 data-ad-slot={id}
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          */}
        </div>

        {/* Decorative corner stars */}
        <div className="absolute top-1 left-1 text-[8px] text-amber-400/20">✦</div>
        <div className="absolute bottom-1 right-1 text-[8px] text-amber-400/20">✦</div>
      </div>
    </div>
  );
}
