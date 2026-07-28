// src/components/DialogExamples.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function DialogExamples() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold">Dialog</h2>

      <div className="flex flex-wrap gap-4">
        {/* Ejemplo 1: diálogo de confirmación */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Eliminar cuenta</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Estás seguro?</DialogTitle>
              <DialogDescription>
                Esta acción no se puede deshacer. Se eliminará tu cuenta permanentemente.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive">Sí, eliminar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Ejemplo 2: diálogo con formulario dentro */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Nuevo contacto</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar contacto</DialogTitle>
              <DialogDescription>Completa los datos y guarda.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3">
              <Input placeholder="Nombre" />
              <Input type="email" placeholder="Correo" />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Guardar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
