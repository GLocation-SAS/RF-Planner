"use client";
import React from 'react';
import { MoreHorizontal, Layers, Orbit, Rocket, Folder as FolderIcon, Share, Star, Bookmark } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// --- CUTOUT FOLDER VARIANTS ---
const cutoutFolderVariants = cva(
    "relative w-[340px] h-[280px] rounded-[32px] overflow-hidden shadow-sm border border-border group cursor-pointer transition-all duration-300 hover:shadow-md",
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

// --- FEATURED FOLDER VARIANTS ---
const featuredFolderVariants = cva(
    "relative w-[280px] h-[300px] rounded-[32px] p-6 flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-[#EAE4FF]",
                secondary: "bg-secondary-50",
                info: "bg-[#E6F4FF]",
                warning: "bg-[#FFEBE4]",
                success: "bg-success-50",
                danger: "bg-danger-50",
                error: "bg-danger-50",
                neutral: "bg-muted",
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
);

export interface FolderProps {
    design?: "cutout" | "featured" | "glass";
    variant?: "primary" | "secondary" | "warning" | "info" | "danger" | "error" | "success" | "neutral";
    title?: string;
    timeAgo?: string;
    status?: string;
    coverImage?: string;
    color?: string;
    href?: string;
    avatars?: string[];
    icons?: React.ReactNode[];
    className?: string;
    progress?: number;
}

const CloverShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full", className)} fill="currentColor">
        <rect x="30" y="0" width="40" height="100" rx="20" />
        <rect x="0" y="30" width="100" height="40" rx="20" />
    </svg>
);

const BurstShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full", className)} fill="currentColor">
        <g transform="translate(50 50)">
            <rect x="-12" y="-45" width="24" height="90" rx="12" transform="rotate(0)" />
            <rect x="-12" y="-45" width="24" height="90" rx="12" transform="rotate(45)" />
            <rect x="-12" y="-45" width="24" height="90" rx="12" transform="rotate(90)" />
            <rect x="-12" y="-45" width="24" height="90" rx="12" transform="rotate(135)" />
        </g>
    </svg>
);

const BlobShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full", className)} fill="currentColor">
        <circle cx="35" cy="40" r="35" />
        <circle cx="75" cy="40" r="25" />
        <circle cx="50" cy="75" r="25" />
        <circle cx="80" cy="70" r="20" />
    </svg>
);

const CircleShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={cn("w-full h-full", className)} fill="currentColor">
        <circle cx="50" cy="50" r="40" />
    </svg>
);

const featuredColors = {
    primary: {
        text: "text-slate-900",
        iconBg: "bg-[#D6CFFF]",
        icon: "text-slate-900",
        progressActive: "bg-[#5A3988]", 
        progressInactive: "bg-[#D6CFFF]",
        shapeFill: "text-[#D6CFFF]",
        avatarBorder: "border-[#EAE4FF]"
    },
    info: {
        text: "text-slate-900",
        iconBg: "bg-[#CDE8FF]",
        icon: "text-slate-900",
        progressActive: "bg-[#2D8CFF]",
        progressInactive: "bg-[#CDE8FF]",
        shapeFill: "text-[#CDE8FF]",
        avatarBorder: "border-[#E6F4FF]"
    },
    warning: {
        text: "text-slate-900",
        iconBg: "bg-[#FFD9CC]",
        icon: "text-slate-900",
        progressActive: "bg-[#FF5C28]",
        progressInactive: "bg-[#FFD9CC]",
        shapeFill: "text-[#FFD9CC]",
        avatarBorder: "border-[#FFEBE4]"
    },
    success: {
        text: "text-slate-900",
        iconBg: "bg-success-200",
        icon: "text-slate-900",
        progressActive: "bg-success-600",
        progressInactive: "bg-success-200",
        shapeFill: "text-success-200",
        avatarBorder: "border-success-50"
    },
    neutral: {
        text: "text-slate-900",
        iconBg: "bg-slate-200",
        icon: "text-slate-900",
        progressActive: "bg-slate-600",
        progressInactive: "bg-slate-200",
        shapeFill: "text-slate-200",
        avatarBorder: "border-muted"
    }
};

const FeaturedFolder = ({
    title = "Mobile Design",
    variant = "primary",
    avatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    ],
    href = "#",
    className,
    progress = 1
}: FolderProps) => {
    const router = useRouter();
    const colors = featuredColors[variant as keyof typeof featuredColors] || featuredColors.primary;

    const renderIcon = () => {
        if (variant === 'primary') return <Layers className={cn("size-6", colors.icon)} strokeWidth={2.5} />;
        if (variant === 'info') return <Orbit className={cn("size-6", colors.icon)} strokeWidth={2.5} />;
        if (variant === 'warning') return <Rocket className={cn("size-6", colors.icon)} strokeWidth={2.5} />;
        return <FolderIcon className={cn("size-6", colors.icon)} strokeWidth={2.5} />;
    };

    return (
        <div 
            onClick={() => router.push(href)}
            className={cn(featuredFolderVariants({ variant }), className)}
        >
            {/* Decorative Top Right Shape */}
            <div className="absolute -top-16 -right-16 w-56 h-56 z-0 transform rotate-12">
               {variant === 'primary' && <CloverShape className={colors.shapeFill} />}
               {variant === 'info' && <BurstShape className={colors.shapeFill} />}
               {variant === 'warning' && <BlobShape className={colors.shapeFill} />}
               {!['primary', 'info', 'warning'].includes(variant) && <CircleShape className={colors.shapeFill} />}
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Top Icon */}
                <div className={cn("size-12 rounded-full flex items-center justify-center mb-6", colors.iconBg)}>
                    {renderIcon()}
                </div>

                {/* Title */}
                <h3 className={cn("text-[22px] font-bold font-heading mb-8 pr-4 leading-tight", colors.text)}>
                    {title}
                </h3>

                <div className="mt-auto">
                    {/* Progress Section */}
                    <p className="text-xs font-bold capitalize text-slate-800 mb-3">
                        Progress
                    </p>
                    <div className="flex gap-1.5 mb-8">
                        {[1, 2, 3, 4].map(step => (
                            <div 
                                key={step} 
                                className={cn(
                                    "h-1.5 flex-1 rounded-full", 
                                    step <= progress ? colors.progressActive : colors.progressInactive
                                )} 
                            />
                        ))}
                    </div>

                    {/* Avatars */}
                    <div className="flex -space-x-2">
                        {avatars.map((avatar, i) => (
                            <img 
                                key={i} 
                                src={avatar} 
                                alt="Avatar" 
                                className={cn("size-8 rounded-full border-2 object-cover shadow-sm", colors.avatarBorder)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GlassFolder = ({
    title = "Product Analytics",
    timeAgo = "Last edited 2h ago",
    status = "Active",
    variant = "info",
    avatars = ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"],
    href = "#",
    className,
}: FolderProps) => {
    const router = useRouter();
    
    // Inner glow blob colors
    const blobColors = {
        primary: "bg-primary-400",
        secondary: "bg-secondary-400",
        info: "bg-info-400",
        warning: "bg-warning-400",
        success: "bg-success-400",
        danger: "bg-danger-400",
        error: "bg-danger-400",
        neutral: "bg-slate-400",
    };
    const blobColor = blobColors[variant as keyof typeof blobColors] || blobColors.primary;

    return (
        <div 
            onClick={() => router.push(href)}
            className={cn(
                "relative w-[280px] h-[340px] rounded-[36px] p-7 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-[1.5px] border-white/60 bg-white/40 backdrop-blur-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                className
            )}
        >
            {/* The Inner Blur Blob */}
            <div className={cn("absolute -bottom-12 left-1/2 -translate-x-1/2 w-[140%] h-48 rounded-[100%] blur-[48px] opacity-40 z-0 mix-blend-multiply", blobColor)} />
            
            {/* Top Right Icon */}
            <div className="absolute top-6 right-6 z-10 text-slate-800 hover:text-black transition-colors">
                <Share className="size-[22px]" strokeWidth={2} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Avatar / Icon */}
                <div className="mb-5">
                    <img src={avatars[0]} alt="Avatar" className="size-16 rounded-full object-cover border-2 border-white shadow-sm" />
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold font-heading text-slate-900 tracking-tight mb-1.5">
                    {title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-5">
                    {timeAgo}
                </p>

                {/* Badges */}
                <div className="flex gap-2 mb-7">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/60 border border-white/70 text-xs font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-md">
                        {status}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/60 border border-white/70 text-xs font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-md">
                        Design
                    </span>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between items-center mb-8 px-2">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-extrabold text-slate-900 text-sm">
                            <Star className="size-3.5 fill-current" /> 4.9
                        </div>
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Rating</span>
                    </div>
                    <div className="h-8 w-px bg-slate-300/60" />
                    <div className="flex flex-col items-center">
                        <span className="font-extrabold text-slate-900 text-sm">24</span>
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Files</span>
                    </div>
                    <div className="h-8 w-px bg-slate-300/60" />
                    <div className="flex flex-col items-center">
                        <span className="font-extrabold text-slate-900 text-sm">1.2G</span>
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Size</span>
                    </div>
                </div>

                {/* Bottom Action Row */}
                <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-white/70 hover:bg-white/90 border border-white backdrop-blur-md rounded-[20px] py-3 text-sm font-bold text-slate-800 transition-all shadow-sm">
                        Get in touch
                    </button>
                    <button className="size-12 shrink-0 bg-white/70 hover:bg-white/90 border border-white backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-sm transition-all">
                        <Bookmark className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

const CutoutFolder = ({
    title = "Email Responder",
    timeAgo = "1 day ago",
    status = "Active",
    coverImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    variant = "primary",
    color,
    href = "#",
    avatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
    ],
    icons,
    className
}: FolderProps) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(href)}
            className={cn(cutoutFolderVariants({ variant }), className)}
            style={color ? { '--folder-base-color': color } as React.CSSProperties : {}}
        >
            {/* Cover Image / Background */}
            {coverImage ? (
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${coverImage})` }}
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--folder-base-color)] via-[var(--folder-base-color)] to-black/20 transition-transform duration-700 group-hover:scale-105" />
            )}

            {/* Top Action Button */}
            <div className="absolute right-4 top-[98px] z-20">
                <button 
                    onClick={(e) => { e.stopPropagation(); /* handle menu */ }}
                    className="size-11 bg-white rounded-full flex items-center justify-center shadow-md text-slate-700 hover:bg-slate-50 transition-colors"
                >
                    <MoreHorizontal className="size-5" />
                </button>
            </div>

            {/* White content shape container */}
            <div className="absolute bottom-0 left-0 right-0 h-[160px] z-10 pointer-events-none">
                {/* Base white bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[110px] bg-white" />
                
                {/* Upper left extension */}
                <div className="absolute bottom-[110px] left-0 right-[88px] h-[50px] bg-white rounded-tr-[28px]" />
                
                {/* Inner curve (SVG) */}
                <svg 
                    className="absolute bottom-[110px] right-[56px]" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0L0 32H32C14.3269 32 0 17.6731 0 0Z" fill="white"/>
                </svg>
                
                {/* Content */}
                <div className="absolute inset-0 px-6 pb-6 pt-5 flex flex-col justify-between pointer-events-auto">
                    <div className="pr-16">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-1">
                            <span>{timeAgo}</span>
                            <span className="size-1 rounded-full bg-slate-300" />
                            <span>{status}</span>
                        </div>
                        <h3 className="text-[22px] font-mono font-bold text-slate-800 tracking-tight truncate">
                            {title}
                        </h3>
                    </div>
                    
                    <div>
                        <div className="h-px w-full bg-slate-100 mb-4" />
                        <div className="flex items-center justify-between">
                            {/* Avatars */}
                            <div className="flex -space-x-2">
                                {avatars.map((avatar, i) => (
                                    <img 
                                        key={i} 
                                        src={avatar} 
                                        alt="Avatar" 
                                        className="size-8 rounded-full border-2 border-white object-cover shadow-sm" 
                                    />
                                ))}
                            </div>
                            
                            {/* App Icons */}
                            <div className="flex -space-x-1">
                                {icons ? icons : (
                                    <>
                                        <div className="size-8 rounded-[10px] border-2 border-white bg-[#1A73E8] flex items-center justify-center shadow-sm">
                                            <span className="text-white text-[10px] font-bold">M</span>
                                        </div>
                                        <div className="size-8 rounded-[10px] border-2 border-white bg-slate-900 flex items-center justify-center shadow-sm">
                                            <span className="text-white text-[10px] font-bold">N</span>
                                        </div>
                                        <div className="size-8 rounded-[10px] border-2 border-white bg-[#E44332] flex items-center justify-center shadow-sm">
                                            <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Folder = (props: FolderProps) => {
    if (props.design === "featured") {
        return <FeaturedFolder {...props} />;
    }
    if (props.design === "glass") {
        return <GlassFolder {...props} />;
    }
    return <CutoutFolder {...props} />;
};

export default Folder;
