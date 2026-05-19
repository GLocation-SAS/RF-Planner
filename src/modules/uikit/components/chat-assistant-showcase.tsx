"use client";

import * as React from "react";
import ChatAssistant from "@/components/ui/ChatAssistant";
import { MessageSquare, Sparkles, Send, Mic } from "lucide-react";

export function ChatAssistantShowcase() {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="p-2 rounded-lg bg-primary/10">
          <MessageSquare className="size-5 text-primary" />
        </div>
        <div>
          <h3 className="text-h3 font-heading font-bold text-foreground">Chat Assistant</h3>
          <p className="text-caption text-muted-foreground">
            Asistente de IA flotante con animaciones y estados interactivos.
          </p>
        </div>
      </div>

      {/* FIGMA INSPIRED INTERACTIVE CARD PREVIEW */}
      <div className="flex flex-col items-center justify-center p-8 bg-neutral-50/50 dark:bg-neutral-950/20 rounded-2xl border border-neutral-100 dark:border-neutral-800/80">
        
        {/* Title above card */}
        <h4 className="text-2xl font-bold tracking-wide text-primary mb-8 font-heading text-center">
          AI Chat
        </h4>

        {/* The Card */}
        <div className="relative w-full max-w-[420px] rounded-[2.5rem] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-between min-h-[380px] overflow-hidden group">
          
          {/* Subtle orb glow in card background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-15">
            <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary/30 blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center my-auto space-y-6">
            
            {/* Center Orb (Mesh/Glowing with Brand Primary & Secondary) */}
            <div className="relative flex items-center justify-center size-28 rounded-full bg-primary-100/10 dark:bg-primary-950/10">
              <div className="absolute size-20 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary/60 blur-md opacity-85 animate-pulse duration-[4000ms]"></div>
              <div className="absolute size-16 rounded-full bg-gradient-to-tr from-primary-400 via-secondary-500 to-secondary-700 shadow-inner"></div>
              {/* Inner highlight */}
              <div className="absolute top-2 left-4 size-4 rounded-full bg-white/20 blur-xs"></div>
            </div>

            {/* Description Text */}
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-[280px]">
              Neo AI&apos;s legacy few ideas to round out your dashboard with a third card. Each follows the main.
            </p>
          </div>

          {/* Pill Input Group at the bottom */}
          <div className="relative z-10 w-full mt-6">
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 p-1.5 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300">
              
              {/* Plus button */}
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors">
                <span className="text-xl font-light leading-none">+</span>
              </button>

              {/* Search label/button inside pill */}
              <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 text-[10px] font-bold text-secondary dark:text-secondary-300 hover:bg-secondary/20 dark:hover:bg-secondary/35 transition-colors shrink-0 border border-secondary/10">
                <Sparkles className="size-3 text-secondary" />
                <span>Search</span>
              </button>

              {/* Input text placeholder */}
              <div className="flex-1 bg-transparent text-left px-2 py-1 text-xs text-neutral-400 dark:text-neutral-500 truncate select-none">
                pixelate a few ideas to round out your dashboard...
              </div>

              {/* Mic button */}
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors">
                <Mic className="size-3.5" />
              </button>

              {/* Send arrow button */}
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                <Send className="size-3 rotate-45 -translate-x-[1px] translate-y-[0.5px]" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer text below card */}
        <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-wide mt-8 text-center">
          AI chat UI with threads, prompts, and quick actions.
        </p>
      </div>

      {/* Floating Assistente */}
      <ChatAssistant />
    </section>
  );
}
