import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        error: "",
        success: "",
        warning: "",
        info: "",
        ghost: "bg-muted hover:text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline bg-transparent px-0!",
      },
      appearance: {
        default: "",
        outline: "bg-transparent border",
      },
    },
    compoundVariants: [
      // Primary
      { variant: "primary", appearance: "default", className: "bg-primary text-white border-transparent" },
      { variant: "primary", appearance: "outline", className: "text-primary-400 border-primary-400" },
      // Secondary
      { variant: "secondary", appearance: "default", className: "bg-secondary text-white border-transparent" },
      { variant: "secondary", appearance: "outline", className: "text-secondary border-secondary" },
      // Error
      { variant: "error", appearance: "default", className: "bg-danger text-white border-transparent" },
      { variant: "error", appearance: "outline", className: "text-danger border-danger" },
      // Success
      { variant: "success", appearance: "default", className: "bg-success text-white border-transparent" },
      { variant: "success", appearance: "outline", className: "text-success border-success" },
      // Warning
      { variant: "warning", appearance: "default", className: "bg-warning text-white border-transparent" },
      { variant: "warning", appearance: "outline", className: "text-warning border-warning" },
      // Info
      { variant: "info", appearance: "default", className: "bg-info text-white border-transparent" },
      { variant: "info", appearance: "outline", className: "text-info border-info" },
    ],
    defaultVariants: {
      variant: "primary",
      appearance: "default",
    },
  }
)

function Badge({
  className,
  variant = "primary",
  appearance = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-appearance={appearance}
      className={cn(badgeVariants({ variant, appearance }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
