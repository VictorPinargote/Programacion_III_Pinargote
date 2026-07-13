// src/components/InputExamples.tsx

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function InputExamples() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold">Input</h2>

      {/* Ejemplo 1: input controlado con búsqueda en vivo */}
      <div className="w-80">
        <Input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Escribiste: <span className="font-medium">{search || "(nada todavía)"}</span>
        </p>
      </div>

      {/* Ejemplo 2: input deshabilitado y tipo password */}
      <div className="flex flex-col gap-3 w-80">
        <Input type="password" placeholder="Contraseña" />
        <Input type="text" value="No editable" disabled />
      </div>
    </div>
  );
}
