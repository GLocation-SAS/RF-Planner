"use client";

import * as React from "react";
import { 
  Download, 
  Copy, 
  Check, 
  Image as ImageIcon, 
  Sun, 
  Moon,
  Eclipse
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoreAsset {
  id: string;
  name: string;
  type: "Horizontal" | "Vertical" | "Icon" | "Favicon";
  description: string;
  files: {
    oscuro: string;
    normal: string;
    alternativo: string;
  };
}

const CORE_ASSETS: CoreAsset[] = [
  {
    id: "logo-horizontal",
    name: "Logotipo Horizontal",
    type: "Horizontal",
    description: "Versión horizontal oficial de la marca. Incluye variantes para impresión de alta neutralidad, la versión principal en color y la variante negativa para fondos oscuros.",
    files: {
      oscuro: "Logotipo horizontal oscuro.svg",
      normal: "Logotipo horizontal.svg",
      alternativo: "Logotio horizontal  alternativo.svg",
    }
  },
  {
    id: "logo-vertical",
    name: "Logotipo Vertical",
    type: "Vertical",
    description: "Distribución vertical recomendada para espacios centrados o de alta visibilidad en entornos claros, oscuros o monocromáticos.",
    files: {
      oscuro: "Logotipo Vertical oscuro.svg",
      normal: "Logotipo Vertical.svg",
      alternativo: "Logotipo Vertical alternativo.svg",
    }
  },
  {
    id: "logo-icon",
    name: "Icono Principal",
    type: "Icon",
    description: "Isotipo simplificado de la marca para aplicaciones móviles, avatares, barra lateral colapsada o espacios reducidos.",
    files: {
      oscuro: "Icon oscuro.svg",
      normal: "Icon.svg",
      alternativo: "Icon icon alternativo.svg",
    }
  },
  {
    id: "logo-favicon",
    name: "Favicon Oficial",
    type: "Favicon",
    description: "Icono optimizado a baja resolución para pestañas de navegador y accesos directos web corporativos.",
    files: {
      oscuro: "Favicon.svg",
      normal: "Favicon.svg",
      alternativo: "Favicon.svg",
    }
  }
];

export function ResourcesShowcase() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [variants, setVariants] = React.useState<Record<string, "oscuro" | "normal" | "alternativo">>({});

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const setVariant = (id: string, mode: "oscuro" | "normal" | "alternativo") => {
    setVariants((prev) => ({ ...prev, [id]: mode }));
  };

  const toggles = [
    { value: "oscuro", label: "Oscuro", icon: Moon, description: "Monocromático oscuro" },
    { value: "normal", label: "Normal", icon: Sun, description: "Versión principal a color" },
    { value: "alternativo", label: "Alternativo", icon: Eclipse, description: "Variante negativa clara" },
  ] as const;

  return (
    <section className="grid gap-8 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-background shadow-xs overflow-hidden">
      <div className="space-y-2">
        <h2 className="text-h3 font-bold flex items-center gap-2 text-neutral-900 dark:text-neutral-50 font-heading">
          <ImageIcon className="size-5 text-primary" />
          Recursos de Marca & Logotipos
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Repositorio interactivo de recursos gráficos vectoriales oficiales del sistema. Selecciona la variante de color deseada directamente en cada tarjeta para previsualizar, copiar su ruta o descargar el SVG correspondiente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CORE_ASSETS.map((asset) => {
          const activeVariant = variants[asset.id] || "normal";
          const currentFilename = asset.files[activeVariant];
          const path = `/${currentFilename}`;
          const isCopied = copiedId === asset.id;

          return (
            <Card 
              key={asset.id} 
              className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 bg-neutral-50/50 dark:bg-neutral-900/50"
            >
              {/* Asset Preview Container */}
              <div 
                className={cn(
                  "relative h-48 w-full flex items-center justify-center p-8 transition-all duration-300 overflow-hidden border-b border-neutral-200 dark:border-neutral-800",
                  activeVariant === "alternativo" 
                    ? "bg-neutral-950" 
                    : "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:16px_16px] bg-neutral-100/50 dark:bg-neutral-900/50"
                )}
              >
                {/* Logo Image */}
                <div className="relative flex items-center justify-center w-full h-full hover:scale-105 transition-transform duration-300 mt-4">
                  <img
                    src={encodeURI(path)}
                    alt={`${asset.name} - ${activeVariant}`}
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Top Segmented Controller for Version Selection */}
                <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-background/90 dark:bg-neutral-900/90 backdrop-blur-xs border border-neutral-200 dark:border-neutral-800 rounded-lg p-0.5 shadow-xs z-10">
                  {toggles.map((t) => {
                    const Icon = t.icon;
                    const isActive = activeVariant === t.value;
                    return (
                      <button
                        key={t.value}
                        onClick={() => setVariant(asset.id, t.value)}
                        title={`${t.label} — ${t.description}`}
                        className={cn(
                          "flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase transition-all duration-200",
                          isActive
                            ? "text-primary bg-primary/10 dark:bg-primary/20 shadow-2xs scale-102"
                            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                        )}
                      >
                        <Icon className="size-3.5" />
                        <span className="hidden sm:inline">{t.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Badge tag */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                    {asset.type}
                  </span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border",
                    activeVariant === "oscuro" && "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20",
                    activeVariant === "normal" && "bg-amber-500/10 text-amber-500 border-amber-500/20",
                    activeVariant === "alternativo" && "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  )}>
                    {activeVariant}
                  </span>
                </div>
              </div>

              {/* Description & Action Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h4 className="text-body-sm font-semibold text-neutral-900 dark:text-neutral-50 font-heading">
                    {asset.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed min-h-[40px]">
                    {asset.description}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  {/* Code Reference Indicator */}
                  <div className="flex-1 flex items-center justify-between bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-mono overflow-hidden">
                    <span className="truncate pr-2 select-all">{path}</span>
                    <button
                      onClick={() => handleCopy(asset.id, path)}
                      className="shrink-0 p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                      title="Copiar ruta del asset"
                    >
                      {isCopied ? (
                        <Check className="size-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Direct Download Button */}
                  <Button
                    variant="primary"
                    size="sm"
                    asChild
                    className="w-auto shrink-0 px-4 font-semibold text-white hover:text-white dark:text-white dark:hover:text-white"
                  >
                    <a
                      href={path}
                      download={currentFilename}
                    >
                      <Download className="size-3.5" />
                      <span>SVG</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
