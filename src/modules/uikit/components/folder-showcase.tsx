"use client";

import React from 'react';
import Folder from '@/components/ui/folder';

export function FolderShowcase() {
    return (
        <section className="space-y-10">
            <div className="flex flex-col gap-1">
                <h3 className="text-h3 font-heading font-bold text-foreground">Folders & Cards</h3>
                <p className="text-body-sm text-muted-foreground">
                    Carpetas y tarjetas de proyectos con variantes visuales y decorativas.
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-lg font-bold">Featured Design (Decorative)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 rounded-xl bg-surface border border-border shadow-sm overflow-hidden">
                    <div className="flex flex-col items-center gap-4">
                        <Folder
                            design="featured"
                            variant="primary"
                            title="Mobile Design"
                            progress={1}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Folder
                            design="featured"
                            variant="info"
                            title="UX Design Foundations"
                            progress={1}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Folder
                            design="featured"
                            variant="warning"
                            title="UI Components"
                            progress={1}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-lg font-bold">Cutout Design</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 rounded-xl bg-surface border border-border shadow-sm overflow-hidden">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-caption font-bold uppercase tracking-widest text-primary">Primary</span>
                        <Folder
                            design="cutout"
                            variant="primary"
                            title="Email Responder"
                            timeAgo="1 day ago"
                            status="Active"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="text-caption font-bold uppercase tracking-widest text-secondary">Secondary</span>
                        <Folder
                            design="cutout"
                            variant="secondary"
                            title="Analytics Dashboard"
                            timeAgo="2 hours ago"
                            status="Draft"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span className="text-caption font-bold uppercase tracking-widest text-warning">Warning</span>
                        <Folder
                            design="cutout"
                            variant="warning"
                            title="Legacy Systems"
                            timeAgo="1 week ago"
                            status="Needs Update"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
