"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <div className={cn(
      "relative overflow-hidden rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1121] shadow-2xl transition-all duration-300 min-w-[320px] p-2",
      className
    )}>
      {/* Top glow effect - subtle and elegant */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-primary blur-[1px] rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-primary/20 blur-[10px] rounded-full" />

      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "group/calendar p-2 [--cell-radius:9999px] [--cell-size:2.5rem]",
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`
        )}
        captionLayout={captionLayout}
        locale={locale}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString(locale?.code, { month: "short" }),
          formatCaption: (date) => {
            const month = date.toLocaleString(locale?.code || 'en-US', { month: 'short' });
            const year = date.getFullYear();
            return `${month} ${year}`;
          },
          ...formatters,
        }}
        classNames={{
          root: cn("w-fit mx-auto", defaultClassNames.root),
          months: cn(
            "relative flex flex-col gap-6 md:flex-row",
            defaultClassNames.months
          ),
          month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
          nav: cn(
            "absolute inset-x-0 top-0 flex w-full items-center justify-between pt-2 px-2 z-20",
            defaultClassNames.nav
          ),
          button_previous: cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-0 select-none aria-disabled:opacity-20 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/10 text-slate-700 dark:text-white transition-colors",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 p-0 select-none aria-disabled:opacity-20 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/10 text-slate-700 dark:text-white transition-colors",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "flex h-12 w-full items-center justify-center pt-2 mb-4",
            defaultClassNames.month_caption
          ),
          caption_label: cn(
            "text-lg font-heading font-bold text-slate-800 dark:text-white tracking-wide select-none",
            defaultClassNames.caption_label
          ),
          month_grid: "w-full border-collapse",
          weekdays: cn("flex mb-2", defaultClassNames.weekdays),
          weekday: cn(
            "flex-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest select-none text-center",
            defaultClassNames.weekday
          ),
          week: cn("mt-1 flex w-full", defaultClassNames.week),
          day: cn(
            "group/day relative h-10 w-10 p-0 text-center select-none text-sm font-medium text-slate-700 dark:text-slate-200",
            defaultClassNames.day
          ),
          today: cn(
            "text-primary dark:text-white font-bold after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:size-1 after:rounded-full after:bg-primary dark:after:bg-white",
            defaultClassNames.today
          ),
          outside: cn(
            "text-slate-300 dark:text-slate-600 aria-selected:text-slate-400 dark:aria-selected:text-slate-500",
            defaultClassNames.outside
          ),
          disabled: cn(
            "text-slate-300 dark:text-slate-600 opacity-50",
            defaultClassNames.disabled
          ),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon className={cn("size-4 text-slate-600 dark:text-white/70", className)} {...props} />
              )
            }

            if (orientation === "right") {
              return (
                <ChevronRightIcon className={cn("size-4 text-slate-600 dark:text-white/70", className)} {...props} />
              )
            }

            return (
              <ChevronDownIcon className={cn("size-4 text-slate-600 dark:text-white/70", className)} {...props} />
            )
          },
          DayButton: ({ ...props }) => (
            <CalendarDayButton locale={locale} {...props} />
          ),
          ...components,
        }}
        {...props}
      />
    </div>
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const isSelected = modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={isSelected}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex size-10 items-center justify-center rounded-full border-0 leading-none font-medium transition-all duration-300",
        "hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white",
        isSelected && [
          "bg-primary text-white shadow-[0_0_20px_var(--primary)]",
          "after:absolute after:inset-0 after:rounded-full after:bg-primary/40 after:blur-md after:-z-10",
          "font-bold"
        ],
        modifiers.range_start && "rounded-full bg-primary text-white",
        modifiers.range_end && "rounded-full bg-primary text-white",
        modifiers.range_middle && "rounded-none bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white",
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
