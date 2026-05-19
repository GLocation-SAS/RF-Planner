import * as React from "react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type CardSize = "default" | "sm"
type CardVariant = "default" | "featured"

/**
 * `featured` — Colorful horizontal card with a decorative icon in the corner.
 * Inspired by the course/category card pattern (pastel bg + badge + large icon).
 *
 * `default` — Standard glassmorphism card with inner glow blobs.
 */
type CardGlow = "none" | "primary-info" | "success-warning" | "danger-secondary"

interface CardProps extends React.ComponentProps<"div"> {
  size?: CardSize
  variant?: CardVariant
  glow?: CardGlow
  innerClassName?: string
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ className, innerClassName, size = "default", variant = "default", glow = "none", children, ...props }: CardProps) {
  const isDefault = variant === "default"

  return (
    <div
      data-slot="card"
      data-size={size}
      data-variant={variant}
      data-glow={glow}
      className={cn(
        "group/card relative flex flex-col overflow-hidden transition-all duration-300",
        // --- Default variant (Glassmorphic) ---
        isDefault && [
          "rounded-[32px] border-[1.5px] border-border/50 bg-surface/40 dark:bg-surface/20 backdrop-blur-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]",
          "hover:shadow-2xl hover:-translate-y-1"
        ],
        // --- Featured variant (colorful + decorative icon) ---
        variant === "featured" && [
          "rounded-[24px] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        ],
        className
      )}
      {...props}
    >
      {/* ═══ INNER BLOBS (for glassmorphic effect) ═══ */}
      {isDefault && glow !== "none" && (
        <>
          <div className={cn(
            "absolute -top-12 -left-12 w-[140px] h-[140px] rounded-[100%] blur-[50px] opacity-30 z-0 mix-blend-multiply dark:mix-blend-screen transition-all duration-500 group-hover/card:scale-110",
            glow === "primary-info" && "bg-info-300 dark:bg-info-700",
            glow === "success-warning" && "bg-success-300 dark:bg-success-700",
            glow === "danger-secondary" && "bg-danger-300 dark:bg-danger-700"
          )} />
          <div className={cn(
            "absolute -bottom-10 -right-10 w-[160px] h-[160px] rounded-[100%] blur-[50px] opacity-20 z-0 mix-blend-multiply dark:mix-blend-screen transition-all duration-500 group-hover/card:scale-110",
            glow === "primary-info" && "bg-primary-300 dark:bg-primary-700",
            glow === "success-warning" && "bg-warning-300 dark:bg-warning-700",
            glow === "danger-secondary" && "bg-secondary-300 dark:bg-secondary-700"
          )} />
        </>
      )}

      {/* Content above blobs */}
      <div className={cn(
        "relative z-10 flex flex-col w-full h-full",
        // --- Default Layout ---
        isDefault && [
          "items-start text-left gap-4 p-8",
          "group-data-[size=sm]/card:gap-3 group-data-[size=sm]/card:p-6"
        ],
        // --- Featured Layout ---
        variant === "featured" && [
          "items-start text-left gap-3 p-8"
        ],
        innerClassName
      )}>
        {children}
      </div>
    </div>
  )
}

// ─── CardHeader ───────────────────────────────────────────────────────────────

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-2 w-full",
        className
      )}
      {...props}
    />
  )
}

// ─── CardTitle ────────────────────────────────────────────────────────────────

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-lg font-bold tracking-tight text-foreground",
        "group-data-[size=sm]/card:text-base",
        // Featured: slightly smaller title, allow wrapping
        "group-data-[variant=featured]/card:text-base group-data-[variant=featured]/card:leading-snug",
        className
      )}
      {...props}
    />
  )
}

// ─── CardDescription ──────────────────────────────────────────────────────────

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm leading-relaxed text-muted-foreground font-medium",
        className
      )}
      {...props}
    />
  )
}

// ─── CardIcon ─────────────────────────────────────────────────────────────────

function CardIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn(
        "flex items-center justify-center size-12 rounded-xl mb-2",
        "bg-surface border border-border/50 shadow-sm",
        "[&_svg]:size-6 [&_svg]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

// ─── CardDecorativeIcon (bottom-right decorative icon for featured variant) ───

function CardDecorativeIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-decorative-icon"
      className={cn(
        "absolute -bottom-10 -right-10 -z-10 pointer-events-none select-none transition-transform duration-500 group-hover/card:scale-110",
        "opacity-15",
        className
      )}
      {...props}
    />
  )
}

// ─── CardContent ──────────────────────────────────────────────────────────────

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("w-full mt-2", className)}
      {...props}
    />
  )
}

// ─── CardFooter ───────────────────────────────────────────────────────────────

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center pt-6 mt-auto",
        className
      )}
      {...props}
    />
  )
}

// ─── CardBadge ────────────────────────────────────────────────────────────────

function CardBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badge"
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        "bg-white/60 text-slate-800 backdrop-blur-md shadow-sm border border-white/70",
        className
      )}
      {...props}
    />
  )
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardIcon,
  CardDecorativeIcon,
  CardBadge,
}