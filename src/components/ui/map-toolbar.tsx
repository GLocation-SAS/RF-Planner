"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Box, Hexagon, Ruler, Trash2, Moon, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ─── Types ────────────────────────────────────────────────────────────────────

export type MapToolId =
  | "base-map"
  | "3d-mode"
  | "draw-polygon"
  | "measure-distance"
  | "clear-drawings";

export interface MapToolbarProps {
  /** Currently active tool */
  activeTool?: MapToolId | null;
  /** Callback when a tool is selected */
  onToolChange?: (tool: MapToolId) => void;
  /** Layout direction */
  orientation?: "vertical" | "horizontal";
  className?: string;
}

// ─── Tool definitions ─────────────────────────────────────────────────────────

interface MapTool {
  id: MapToolId;
  label: string;
  description: string;
  icon: React.ElementType;
  /** Accent gradient for the active state */
  gradient: string;
  glowColor: string;
}

const MAP_TOOLS: MapTool[] = [
  {
    id: "base-map",
    label: "Cambiar Mapa Base",
    description: "Satélite, terreno y vectorial",
    icon: Map,
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(56, 189, 248, 0.5)",
  },
  {
    id: "3d-mode",
    label: "Modo 3D Inmersivo",
    description: "Vista tridimensional interactiva",
    icon: Box,
    gradient: "from-violet-500 to-fuchsia-400",
    glowColor: "rgba(192, 132, 252, 0.7)",
  },
  {
    id: "draw-polygon",
    label: "Dibujar Polígono",
    description: "Traza áreas personalizadas",
    icon: Hexagon,
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "rgba(52, 211, 153, 0.5)",
  },
  {
    id: "measure-distance",
    label: "Medir Distancia",
    description: "Calcula distancias",
    icon: Ruler,
    gradient: "from-amber-500 to-orange-400",
    glowColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    id: "clear-drawings",
    label: "Borrar Dibujos",
    description: "Elimina todos los trazos",
    icon: Trash2,
    gradient: "from-rose-500 to-red-400",
    glowColor: "rgba(244, 63, 94, 0.5)",
  },
];

const MAP_STYLES = [
  { id: "hibrido", label: "Google Híbrido", bg: "bg-blue-500", image: "url('https://mt1.google.com/vt/lyrs=y&x=0&y=0&z=0')" },
  { id: "satelite", label: "Google Satélite", bg: "bg-stone-700", image: "url('https://mt1.google.com/vt/lyrs=s&x=0&y=0&z=0')" },
  { id: "calles", label: "Google Calles", bg: "bg-slate-500", image: "url('https://mt1.google.com/vt/lyrs=m&x=0&y=0&z=0')" },
  { id: "terreno", label: "Google Terreno", bg: "bg-emerald-600", image: "url('https://mt1.google.com/vt/lyrs=p&x=0&y=0&z=0')" },
];

// ─── MapToolButton ─────────────────────────────────────────────────────────────

interface MapToolButtonProps {
  tool: MapTool;
  isActive: boolean;
  onClick: () => void;
}

function MapToolButton({ tool, isActive, onClick }: MapToolButtonProps) {
  const Icon = tool.icon;
  const is3D = tool.id === "3d-mode";

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <motion.button
          onClick={onClick}
          aria-label={tool.label}
          aria-pressed={isActive}
          initial={false}
          animate={{
            scale: isActive ? 1.05 : (is3D ? 1.05 : 1), // 3D button is slightly larger by default
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative flex items-center justify-center",
            "size-14 rounded-2xl",
            "transition-colors duration-300",
            "shadow-lg",
            "group",
            isActive
              ? "bg-surface border-transparent"
              : is3D 
                ? "bg-violet-100/40 dark:bg-violet-900/40 border border-violet-500/50 hover:bg-violet-200/60 dark:hover:bg-violet-800/60 backdrop-blur-md"
                : "bg-surface/60 border border-border/50 hover:bg-surface/80 hover:border-border/80 backdrop-blur-md"
          )}
        >
          {/* Active State Background & Glow */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                layoutId="active-tool-bg"
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br z-0",
                  tool.gradient
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  boxShadow: `0 8px 24px -4px ${tool.glowColor}, inset 0 2px 4px rgba(255,255,255,0.4)`,
                }}
              />
            )}
          </AnimatePresence>

          {/* Prominent pulse effect for 3D button */}
          {!isActive && is3D && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-violet-400 z-0 pointer-events-none"
              animate={{
                opacity: [0.1, 0.6, 0.1],
                boxShadow: [
                  "0 0 0px 0px rgba(167, 139, 250, 0)",
                  "0 0 20px 2px rgba(167, 139, 250, 0.6)",
                  "0 0 0px 0px rgba(167, 139, 250, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {/* Interactive hover light effect for non-active state */}
          {!isActive && !is3D && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-foreground/0 via-foreground/5 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          )}

          {/* Icon */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            animate={{
              color: isActive ? "#ffffff" : is3D ? "#8b5cf6" : "var(--muted-foreground)",
              scale: isActive ? 1.1 : is3D ? 1.15 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon 
              className={cn(
                "size-[26px]", 
                !isActive && !is3D && "group-hover:text-foreground transition-colors",
                is3D && "drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
              )} 
              strokeWidth={isActive || is3D ? 2.5 : 2} 
            />
          </motion.div>

          {/* Active indicator dot */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-white shadow-sm"
              />
            )}
          </AnimatePresence>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent
        variant={is3D ? "secondary" : "info"}
        side="left"
        sideOffset={14}
      >
        {tool.description}
      </TooltipContent>
    </Tooltip>
  );
}

// ─── MapToolbar ───────────────────────────────────────────────────────────────

export function MapToolbar({
  activeTool = null,
  onToolChange,
  orientation = "vertical",
  className,
}: MapToolbarProps) {
  const [active, setActive] = React.useState<MapToolId | null>(activeTool);
  const [selectedMapStyle, setSelectedMapStyle] = React.useState("hibrido");

  const handleSelect = (id: MapToolId) => {
    const next = active === id ? null : id;
    setActive(next);
    onToolChange?.(id);
  };

  return (
    <TooltipProvider>
      <div className={cn("relative flex items-center", className)}>
        <motion.div
          role="toolbar"
          aria-label="Herramientas del mapa"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className={cn(
            "relative z-20 inline-flex gap-3 p-3",
            "rounded-[28px]",
            "bg-surface/40 backdrop-blur-2xl",
            "border border-border/50",
            "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
            orientation === "vertical" ? "flex-col" : "flex-row",
          )}
        >
          {MAP_TOOLS.map((tool) => (
            <MapToolButton
              key={tool.id}
              tool={tool}
              isActive={active === tool.id}
              onClick={() => handleSelect(tool.id)}
            />
          ))}
        </motion.div>

        {/* Floating Base Map Menu */}
        <AnimatePresence>
          {active === "base-map" && (
            <motion.div
              initial={{ opacity: 0, x: orientation === "vertical" ? 10 : 0, y: orientation === "horizontal" ? 10 : 0, scale: 0.95 }}
              animate={{ opacity: 1, x: orientation === "vertical" ? -16 : 0, y: orientation === "horizontal" ? -16 : 0, scale: 1 }}
              exit={{ opacity: 0, x: orientation === "vertical" ? 10 : 0, y: orientation === "horizontal" ? 10 : 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className={cn(
                "absolute z-10 p-4 rounded-3xl bg-surface/85 backdrop-blur-3xl border border-border/50 shadow-2xl flex flex-col gap-4",
                orientation === "vertical" ? "right-full top-0" : "bottom-full left-0",
                "w-[340px]"
              )}
            >
              {/* Map Type Grid */}
              <div className="grid grid-cols-2 gap-3">
                {MAP_STYLES.map((style) => (
                  <Tooltip key={style.id} delayDuration={200}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setSelectedMapStyle(style.id)}
                        className={cn(
                          "group relative flex flex-col h-24 rounded-2xl overflow-hidden border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          selectedMapStyle === style.id 
                            ? "border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] scale-[1.02]" 
                            : "border-border/50 hover:border-border/80 hover:scale-[1.02]"
                        )}
                      >
                        {/* Background Preview */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                          style={{ backgroundImage: style.image }}
                        />
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        
                        {/* Active highlight */}
                        {selectedMapStyle === style.id && (
                          <div className={cn("absolute inset-0 bg-gradient-to-b opacity-40 mix-blend-overlay", style.bg)} />
                        )}

                        {/* Content */}
                        <div className="relative z-10 mt-auto p-3 w-full text-center">
                          <span className={cn(
                            "text-sm font-bold tracking-tight transition-colors drop-shadow-md",
                            selectedMapStyle === style.id ? "text-white" : "text-white/90 group-hover:text-white"
                          )}>
                            {style.label}
                          </span>
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent variant="info" side="top" sideOffset={10}>
                      Cambiar a mapa {style.label.replace('Google ', '')}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <button
                    className="group relative flex items-center justify-center h-14 rounded-2xl overflow-hidden border border-border/50 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 dark:opacity-20" />
                    <div className="relative z-10 flex items-center gap-2">
                      <Moon className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">Modo Oscuro</span>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent variant="secondary" side="bottom" sideOffset={10}>
                  Alternar apariencia del mapa
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}

export default MapToolbar;
