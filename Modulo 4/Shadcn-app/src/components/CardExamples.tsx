// src/components/CardExamples.tsx

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CardExamples() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold">Card</h2>

      {/* Ejemplo 1: card informativa */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Plan Pro</CardTitle>
          <CardDescription>Para equipos que necesitan más.</CardDescription>
          <CardAction>
            <Button size="sm" variant="outline">
              Elegir
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$19/mes</p>
          <p className="text-muted-foreground text-sm">
            Incluye soporte prioritario.
          </p>
        </CardContent>
      </Card>

      {/* Ejemplo 2: card con formulario */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Iniciar sesión</CardTitle>
          <CardDescription>Ingresa tu correo para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={!email.includes("@")}>
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
