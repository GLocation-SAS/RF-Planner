"use client";
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const folderVariants = cva(
    "relative p-4 flex flex-col items-center justify-center",
    {
        variants: {
            variant: {
                primary: "[--folder-base-color:var(--primary)]",
                secondary: "[--folder-base-color:var(--secondary)]",
                warning: "[--folder-base-color:var(--warning)]",
                info: "[--folder-base-color:var(--info)]",
                danger: "[--folder-base-color:var(--danger)]",
                error: "[--folder-base-color:var(--danger)]",
                success: "[--folder-base-color:var(--success)]",
                neutral: "[--folder-base-color:var(--muted-foreground)]",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export interface FolderProps extends VariantProps<typeof folderVariants> {
    title?: string;
    subtitle?: string;
    footerText?: string;
    color?: string; // Optional hex or css var override
    href?: string;
    className?: string;
}

const Folder = ({
    title = "Designs",
    subtitle = "318 images",
    footerText = "Last added time Oct 13, 2025",
    variant = "primary",
    color,
    href = "/dashboard/assets",
    className
}: FolderProps) => {
    const router = useRouter();

    return (
        <div
            className={cn(folderVariants({ variant }), className)}
            style={color ? { '--folder-base-color': color } as React.CSSProperties : {}}
        >
            <div
                onClick={() => router.push(href)}
                className="relative cursor-pointer w-72 h-48 group perspective-1000"
            >
                {/* PARTE TRASERA */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden transition-colors duration-300 bg-[var(--folder-base-color)] shadow-inner">
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* ARCHIVO ÚNICO */}
                <div 
                    className="absolute inset-x-6 top-4 bottom-10 bg-white rounded-xl shadow-sm transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-10 group-hover:scale-[1.02] z-0"
                />

                {/* TAPA FRONTAL */}
                <div
                    className="absolute inset-0 rounded-2xl p-6 flex flex-col text-white border border-white/20 transition-all duration-500 ease-out origin-bottom transform-gpu group-hover:-rotate-x-25 group-hover:translate-y-2 shadow-2xl bg-gradient-to-br from-[var(--folder-base-color)]/95 via-[var(--folder-base-color)]/80 to-[var(--folder-base-color)]/90 backdrop-blur-md"
                    style={{
                        clipPath: 'polygon(0% 20%, 45% 20%, 52% 32%, 100% 32%, 100% 100%, 0% 100%)'
                    }}
                >
                    <div className="flex justify-between items-start mt-12">
                        <div className="space-y-0">
                            <h3 className="text-2xl font-bold tracking-tight font-heading leading-tight">{title}</h3>
                            <p className="text-sm opacity-80 font-medium">{subtitle}</p>
                        </div>
                        <div className="size-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors mt-1">
                            <MoreHorizontal className="size-4" />
                        </div>
                    </div>

                    <div className="mt-auto">
                        <p className="text-[10px] opacity-70 font-medium tracking-tight">
                            {footerText}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }

                /* Fallback para navegadores que no soportan transform-gpu de tailwind correctamente con variables */
                .group-hover\:-rotate-x-25:hover {
                    transform: rotateX(-25deg) translateY(8px);
                }
            `}</style>
        </div>
    );
};

export default Folder;
