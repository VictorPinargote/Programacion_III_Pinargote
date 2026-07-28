// src/components/ButtonExamples.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ButtonExamples() {
  const [loading, setLoading] = useState(false);

  function handleLoadingClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold">Button</h2>

      {/* Ejemplo 1: variantes */}
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Ejemplo 2: tamaños y estado disabled/loading */}
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Pequeño</Button>
        <Button size="default">Normal</Button>
        <Button size="lg">Grande</Button>
        <Button disabled>Deshabilitado</Button>
        <Button onClick={handleLoadingClick} disabled={loading}>
          {loading ? "Cargando..." : "Simular carga"}
        </Button>
      </div>
    </div>
  );
}
