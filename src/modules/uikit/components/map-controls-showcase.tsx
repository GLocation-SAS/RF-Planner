"use client";

import React from "react";
import { MapToolbar } from "@/components/ui/map-toolbar";
import { SignalIndicator } from "@/components/ui/signal-indicator";
import { MapPin } from "lucide-react";

export function MapControlsShowcase() {
  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="size-5 text-primary" />
        <h2 className="text-h2 font-heading font-bold text-foreground">Map Controls</h2>
      </div>

      <p className="text-body-sm text-muted-foreground mb-6">
        Componentes de interfaz superpuestos sobre el mapa: barras de herramientas y paneles de indicadores con diseño dark frosted glass.
      </p>

      {/* Container simulating a map background */}
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-inner border border-border bg-slate-900">
        {/* Realistic Satellite Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/10" />

        {/* Toolbar - Vertical Right */}
        <div className="absolute top-8 right-8">
            <MapToolbar orientation="vertical" />
        </div>

        {/* Signal Indicator - Bottom Left */}
        <div className="absolute bottom-8 left-8">
            <SignalIndicator />
        </div>
      </div>
    </section>
  );
}
