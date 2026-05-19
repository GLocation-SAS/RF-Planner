"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, AlertTriangle, X, CheckCircle2, Info, Clock, AlertCircle } from "lucide-react";
import * as React from "react";

export function DialogShowcase() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  return (
    <section className="grid gap-8 p-8 rounded-xl border border-border bg-background shadow-xs overflow-hidden">
      <div className="space-y-2">
        <h2 className="text-h3 font-bold flex items-center gap-2">
          <MessageSquare className="size-5 text-primary" />
          Componentes de Superposición: Dialog (Matcha Style)
        </h2>
        <p className="text-sm text-muted-foreground">
          Ventanas modales limpias y modernas con resplandor semántico superior y botones tipo píldora.
        </p>
      </div>

      <div className="space-y-8">
        {/* COMPOSICIÓN SEMÁNTICA */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-widest">
              Estados Críticos (Semántica)
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 items-center p-8 bg-slate-50 dark:bg-slate-950/20 rounded-2xl border border-slate-100 dark:border-slate-800">
            {/* Success */}
            <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
              <Button variant="success" className="rounded-full" onClick={() => setOpenSuccess(true)}>
                <CheckCircle2 className="size-4 mr-2" />
                Completado
              </Button>
              <DialogContent variant="success" showCloseButton={false}>
                <DialogHeader>
                  <div className="size-14 rounded-full bg-success-50 dark:bg-success-950/30 border border-success-200 dark:border-success-800/80 shadow-sm flex items-center justify-center mb-2 z-10 relative text-success-600 dark:text-success-400">
                    <CheckCircle2 className="size-6 stroke-[2px]" />
                  </div>
                  <DialogTitle>¡Transacción completada!</DialogTitle>
                  <DialogDescription>
                    <span className="flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                        <span className="size-4 rounded-full bg-success flex items-center justify-center text-[8px] text-white font-bold">T</span> 
                        USDT a 
                        <span className="size-4 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-bold">M</span> 
                        MATIC
                    </span>
                    <span className="block mt-2 text-xs text-slate-500 dark:text-slate-400">Intercambiado vía <strong className="font-semibold text-slate-700 dark:text-slate-300">0x Protocol</strong> y <strong className="font-semibold text-slate-700 dark:text-slate-300">1 más</strong></span>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="neutral" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenSuccess(false)}>Ver Detalles</Button>
                  <Button variant="success" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenSuccess(false)}>Nueva Operación</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Info / Pending */}
            <Dialog open={openInfo} onOpenChange={setOpenInfo}>
              <Button variant="info" className="rounded-full" onClick={() => setOpenInfo(true)}>
                <Clock className="size-4 mr-2" />
                Pendiente
              </Button>
              <DialogContent variant="info" showCloseButton={false}>
                <DialogHeader>
                  <div className="size-14 rounded-full bg-info-50 dark:bg-info-950/30 border border-info-200 dark:border-info-800/80 shadow-sm flex items-center justify-center mb-2 z-10 relative text-info-600 dark:text-info-400">
                    <Clock className="size-6 stroke-[2px]" />
                  </div>
                  <DialogTitle>Transacción pendiente...</DialogTitle>
                  <DialogDescription>
                    La transacción está tomando más de lo esperado.<br />Por favor, espera.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="neutral" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenInfo(false)}>Ver Detalles</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Error */}
            <Dialog open={openError} onOpenChange={setOpenError}>
              <Button variant="danger" className="rounded-full" onClick={() => setOpenError(true)}>
                <X className="size-4 mr-2" />
                Error
              </Button>
              <DialogContent variant="danger" showCloseButton={false}>
                <DialogHeader>
                  <div className="size-14 rounded-full bg-danger-50 dark:bg-danger-950/30 border border-danger-200 dark:border-danger-800/80 shadow-sm flex items-center justify-center mb-2 z-10 relative text-danger-600 dark:text-danger-400">
                    <X className="size-6 stroke-[2px]" />
                  </div>
                  <DialogTitle>Acceso Denegado</DialogTitle>
                  <DialogDescription>
                    No tienes los permisos necesarios para modificar este recurso en el sector actual.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="neutral" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenError(false)}>Atrás</Button>
                  <Button variant="danger" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenError(false)}>Reintentar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Warning */}
            <Dialog open={openWarning} onOpenChange={setOpenWarning}>
              <Button variant="warning" className="rounded-full" onClick={() => setOpenWarning(true)}>
                <AlertCircle className="size-4 mr-2" />
                Advertencia
              </Button>
              <DialogContent variant="warning" showCloseButton={false}>
                <DialogHeader>
                  <div className="size-14 rounded-full bg-warning-50 dark:bg-warning-950/30 border border-warning-200 dark:border-warning-800/80 shadow-sm flex items-center justify-center mb-2 z-10 relative text-warning-600 dark:text-warning-400">
                    <AlertCircle className="size-6 stroke-[2px]" />
                  </div>
                  <DialogTitle>Alto impacto en el precio</DialogTitle>
                  <DialogDescription>
                    Esta orden moverá el precio un <span className="text-danger font-bold">3.45%</span> desde el mercado actual. ¿Seguro que quieres proceder?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="neutral" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenWarning(false)}>Usar Orden Limitada</Button>
                  <Button variant="warning" className="sm:flex-1 sm:max-w-none whitespace-nowrap" onClick={() => setOpenWarning(false)}>Continuar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </div>

      </div>
    </section>
  );
}
