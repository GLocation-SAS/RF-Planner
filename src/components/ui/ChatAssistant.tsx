"use client";

import React, { useState } from 'react';
import { X, Send, Sparkles, Bot, Mic } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 font-sans">
            {/* --- BOTÓN FLOTANTE --- */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-110 active:scale-95 hover:shadow-primary/30"
            >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:blur-lg transition-all"></div>
                {isOpen ? <X size={24} className="relative z-10" /> : <Bot size={24} className="relative z-10" />}
            </button>

            {/* --- VENTANA DE CHAT --- */}
            {isOpen && (
                <div className="absolute top-1/2 -translate-y-1/2 right-20 flex h-[580px] w-[380px] flex-col overflow-hidden rounded-[2.5rem] border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/95 dark:bg-neutral-900/95 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-5 duration-300">

                    {/* ORBE AI SUAVE DE FONDO */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-25 dark:opacity-15">
                        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary/30 blur-[80px] animate-pulse duration-[6000ms]"></div>
                    </div>

                    {/* Encabezado */}
                    <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/30">
                        <div className="flex items-center gap-2.5">
                            <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary border border-primary/20">
                                <Sparkles className="size-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Pregúntale a la IA</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">En línea</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full size-8 p-0 opacity-50 hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all"
                        >
                            <X size={16} />
                        </Button>
                    </div>

                    {/* Área de Mensajes */}
                    <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-5">
                        {/* Mensaje del Bot */}
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-xs">
                                <Bot size={16} />
                            </div>
                            <div className="max-w-[78%] rounded-2xl rounded-tl-none bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200/30 dark:border-neutral-800/40 p-3.5 text-sm text-neutral-800 dark:text-neutral-200 shadow-xs leading-relaxed">
                                Hola, ¿en qué te puedo ayudar hoy?
                            </div>
                        </div>

                        {/* Mensaje del Usuario */}
                        <div className="flex justify-end">
                            <div className="max-w-[78%] rounded-2xl rounded-tr-none bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 p-3.5 text-sm shadow-sm border border-neutral-800 dark:border-neutral-200 leading-relaxed font-medium">
                                ¿Cómo puedo mejorar mi concentración mientras trabajo?
                            </div>
                        </div>

                        {/* Segundo Mensaje Bot */}
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-xs">
                                <Bot size={16} />
                            </div>
                            <div className="max-w-[78%] rounded-2xl rounded-tl-none bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200/30 dark:border-neutral-800/40 p-3.5 text-sm text-neutral-800 dark:text-neutral-200 shadow-xs leading-relaxed">
                                Mantenerse hidratado y escuchar música relajante también puede ayudar. ¿Quieres que te elabore un plan de concentración?
                            </div>
                        </div>
                    </div>

                    {/* Barra de Entrada (Estilo Pill Premium) */}
                    <div className="relative z-10 p-5 pt-2">
                        <div className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 p-1.5 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300">
                            
                            {/* Plus button */}
                            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors">
                                <span className="text-xl font-light leading-none">+</span>
                            </button>

                            {/* Search label/button inside pill */}
                            <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 text-[11px] font-semibold text-secondary dark:text-secondary-300 hover:bg-secondary/20 dark:hover:bg-secondary/35 transition-colors shrink-0 border border-secondary/10">
                                <Sparkles className="size-3 text-secondary" />
                                <span>Search</span>
                            </button>

                            {/* Main input text field */}
                            <input 
                                type="text"
                                placeholder="Escribe un mensaje..."
                                className="flex-1 bg-transparent border-0 px-2 py-1 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-0 min-w-0"
                            />

                            {/* Mic button */}
                            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors">
                                <Mic className="size-4" />
                            </button>

                            {/* Send arrow button */}
                            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all shadow-sm">
                                <Send className="size-3.5 rotate-45 -translate-x-[1px] translate-y-[0.5px]" fill="currentColor" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatAssistant;