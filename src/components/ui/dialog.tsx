"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

const dialogVariants = cva(
  "fixed top-1/2 left-1/2 z-50 flex flex-col w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 pt-10 duration-200 outline-none shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
      size: {
        sm: "sm:max-w-sm",
        default: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-slate-950/20 dark:bg-slate-950/60 backdrop-blur-sm duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  variant,
  size,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogVariants> & {
    showCloseButton?: boolean
  }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(dialogVariants({ variant, size }), className)}
        {...props}
      >
        {/* Top Gradient Blur (Matcha style) */}
        <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden rounded-t-3xl z-0 pointer-events-none">
            <div className={cn(
                "absolute -top-16 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full blur-[40px] opacity-70",
                variant === "success" && "bg-gradient-to-r from-success-300 to-success-100 dark:from-success-500/20 dark:to-success-700/5",
                variant === "danger" && "bg-gradient-to-r from-danger-300 to-pink-200 dark:from-danger-500/20 dark:to-pink-700/5",
                variant === "warning" && "bg-gradient-to-r from-warning-300 to-warning-100 dark:from-warning-500/20 dark:to-warning-700/5",
                variant === "info" && "bg-gradient-to-r from-info-300 to-purple-200 dark:from-info-500/20 dark:to-purple-700/5",
                (variant === "default" || !variant) && "bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700/20 dark:to-slate-800/5"
            )} />
        </div>

        <div className="relative z-10 flex flex-col gap-6 w-full">
          {children}
        </div>

        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            asChild
            className="absolute top-4 right-4 z-20"
          >
            <Button
              variant="ghost"
              className="rounded-full size-8 p-0 opacity-50 hover:opacity-100 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all"
              size="icon"
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col items-center gap-3 text-center w-full", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 w-full mt-2",
        className
      )}
      {...props}
    >
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="neutral" className="sm:flex-1 sm:max-w-none whitespace-nowrap">Atrás</Button>
        </DialogPrimitive.Close>
      )}
      {children}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
