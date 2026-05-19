"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SignalIndicatorProps {
  label?: string;
  className?: string;
}

const SignalIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    {/* Bar 1 (Lowest) */}
    <rect x="2" y="16" width="4" height="6" rx="1" />
    {/* Bar 2 */}
    <rect x="8" y="11" width="4" height="11" rx="1" />
    {/* Bar 3 */}
    <rect x="14" y="6" width="4" height="16" rx="1" />
    {/* Bar 4 (Highest) */}
    <rect x="20" y="1" width="4" height="21" rx="1" />
  </svg>
);

const RSSI_LEGEND = [
  { color: "bg-[#1C3ED3]", label: "< -98 dBm" },
  { color: "bg-[#668E4A]", label: "-98 a -85 dBm" },
  { color: "bg-[#D8D42A]", label: "-85 a -70 dBm" },
  { color: "bg-[#C22019]", label: "-70 a -50 dBm" },
  { color: "bg-[#AF7028]", label: ">= -50 dBm" },
];

export function SignalIndicator({ 
  label = "Señal (RSSI)", 
  className 
}: SignalIndicatorProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-col gap-3 p-4",
        "rounded-[14px]",
        "bg-[#242A32] backdrop-blur-xl", // matching the dark background of the screenshot
        "border border-white/5",
        "shadow-lg",
        className
      )}
    >
      {/* Header: Icon + Title */}
      <div className="flex items-center gap-2 text-white mb-1">
        <SignalIcon />
        <span className="font-bold tracking-wide text-[16px]">{label}</span>
      </div>

      {/* Legend List */}
      <div className="flex flex-col gap-2.5">
        {RSSI_LEGEND.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={cn("size-4 rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]", item.color)} />
            <span className="text-[#9BA5B1] font-medium text-[14px] tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignalIndicator;
