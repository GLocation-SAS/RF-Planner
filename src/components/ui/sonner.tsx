"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  CircleXIcon,
  Loader2Icon,
} from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      icons={{
        success: (
          <div className="flex items-center justify-center size-10 rounded-full bg-success-50 border border-success-200 shrink-0">
            <CircleCheckIcon className="size-5 text-success-600" />
          </div>
        ),
        info: (
          <div className="flex items-center justify-center size-10 rounded-full bg-info-50 border border-info-200 shrink-0">
            <InfoIcon className="size-5 text-info-600" />
          </div>
        ),
        warning: (
          <div className="flex items-center justify-center size-10 rounded-full bg-warning-50 border border-warning-200 shrink-0">
            <TriangleAlertIcon className="size-5 text-warning-600" />
          </div>
        ),
        error: (
          <div className="flex items-center justify-center size-10 rounded-full bg-danger-50 border border-danger-200 shrink-0">
            <CircleXIcon className="size-5 text-danger-600" />
          </div>
        ),
        loading: (
          <div className="flex items-center justify-center size-10 rounded-full bg-primary-50 border border-primary-200 shrink-0">
            <Loader2Icon className="size-5 animate-spin text-primary-600" />
          </div>
        ),
      }}
      style={
        {
          /* Default toast */
          "--normal-bg": "white",
          "--normal-border": "var(--color-slate-200)",
          "--normal-text": "var(--color-slate-900)",

          /* Success */
          "--success-bg": "white",
          "--success-border": "var(--color-slate-200)",
          "--success-text": "var(--color-slate-900)",

          /* Info */
          "--info-bg": "white",
          "--info-border": "var(--color-slate-200)",
          "--info-text": "var(--color-slate-900)",

          /* Warning */
          "--warning-bg": "white",
          "--warning-border": "var(--color-slate-200)",
          "--warning-text": "var(--color-slate-900)",

          /* Error */
          "--error-bg": "white",
          "--error-border": "var(--color-slate-200)",
          "--error-text": "var(--color-slate-900)",

          "--border-radius": "1rem",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: `
            group toast
            rounded-2xl
            text-foreground
            shadow-[0_4px_24px_rgba(0,0,0,0.06)]
            transition-all duration-300
            !gap-6
            !p-4 !pl-5 !pr-10
            !items-center
            !bg-white
            !border !border-slate-200/80
            relative overflow-hidden
          `,

          title: `
            text-sm
            font-bold
            tracking-tight
            text-slate-900
          `,

          description: `
            text-sm
            !text-slate-500
          `,

          actionButton: `
            rounded-xl
            bg-primary
            text-primary-foreground

            hover:bg-primary/90

            transition-all
          `,

          cancelButton: `
            rounded-xl
            bg-muted/50
            text-foreground

            hover:bg-muted

            transition-all
          `,

          closeButton: `
            !text-slate-400
            hover:!text-slate-600
            hover:!bg-slate-100
            !border-0
            transition-all
          `,

          success: `
            !bg-gradient-to-r !from-success-50/80 !via-white !to-white
          `,

          info: `
            !bg-gradient-to-r !from-info-50/80 !via-white !to-white
          `,

          warning: `
            !bg-gradient-to-r !from-warning-50/80 !via-white !to-white
          `,

          error: `
            !bg-gradient-to-r !from-danger-50/80 !via-white !to-white
          `,
        },
      }}
      closeButton
      {...props}
    />
  )
}

export { Toaster }