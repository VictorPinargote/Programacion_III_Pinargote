# Guía: React + TypeScript + Vite + shadcn/ui

Guía paso a paso de cómo se armó este proyecto: un React + TypeScript desde
cero con Vite, shadcn/ui instalado y configurado, y 4 componentes
(`Button`, `Card`, `Input`, `Dialog`) con 2 ejemplos de uso cada uno en
`src/App.tsx`.

## 1. Crear el proyecto React + TypeScript con Vite

```bash
npm create vite@latest Shadcn-app -- --template react-ts
cd Shadcn-app
npm install
```

Esto genera la estructura base (`src/App.tsx`, `vite.config.ts`,
`tsconfig.json`, etc.) con React 19 + TypeScript.

## 2. Instalar Tailwind CSS (requisito de shadcn/ui)

shadcn/ui necesita Tailwind CSS ya configurado antes de instalarse.

```bash
npm install tailwindcss @tailwindcss/vite
```

En `vite.config.ts`, agregar el plugin de Tailwind y el alias `@` que usa
shadcn para importar sus componentes:

```ts
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

En `src/index.css`, reemplazar todo el contenido por:

```css
@import "tailwindcss";
```

## 3. Configurar el path alias `@/*` en TypeScript

shadcn/ui importa sus propios componentes con rutas tipo `@/components/ui/button`,
así que TypeScript necesita saber a qué carpeta apunta ese alias.

En `tsconfig.app.json`, dentro de `compilerOptions`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

(No usar `baseUrl` — con TypeScript 6.0.3 (la versión instalada en este
proyecto) `npm run build` tira el error `TS5101: Option 'baseUrl' is
deprecated` y falla. Alcanza con `paths` solo, no hace falta `baseUrl`.
Si en otra máquina con una versión más vieja de TypeScript sí lo pide,
se puede agregar sin problema.)

## 4. Inicializar shadcn/ui

```bash
npx shadcn@latest init -t vite -b radix -p nova -y
```

- `-t vite` → le dice que el framework es Vite (no Next.js).
- `-b radix` → usa Radix UI como base de los componentes (el estándar de shadcn).
- `-p nova` → preset de estilo por defecto (tipografía Geist + iconos Lucide).
- `-y` → responde que sí a las confirmaciones.

Esto crea `components.json` (la configuración de shadcn), `src/lib/utils.ts`
(el helper `cn()` para combinar clases), y reescribe `src/index.css` con las
variables de tema (colores en `oklch`, modo claro/oscuro con la clase `.dark`).

## 5. Agregar los componentes

```bash
npx shadcn@latest add button card input dialog -y
```

Cada componente se copia como código fuente editable a
`src/components/ui/`:

```
src/components/ui/
├── button.tsx
├── card.tsx
├── input.tsx
└── dialog.tsx
```

(A diferencia de una librería normal de npm, shadcn no se instala como
dependencia binaria — el código del componente queda en tu proyecto para
que lo puedas modificar.)

## 6. Usar los componentes (2 ejemplos por cada uno)

Siguiendo la buena práctica de un componente por archivo, cada grupo de
ejemplos vive en su propio archivo dentro de `src/components/` (no en
`src/components/ui/`, esa carpeta es solo para los componentes de shadcn),
y `App.tsx` únicamente los importa y los renderiza:

```
src/
├── components/
│   ├── ui/                  ← componentes de shadcn (no se editan a mano)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── input.tsx
│   ├── ButtonExamples.tsx
│   ├── CardExamples.tsx
│   ├── InputExamples.tsx
│   └── DialogExamples.tsx
├── App.tsx
├── index.css
└── main.tsx
```

Resumen de qué muestra cada uno:

### Button
- **Ejemplo 1**: las 6 variantes (`default`, `secondary`, `destructive`, `outline`, `ghost`, `link`).
- **Ejemplo 2**: tamaños (`sm`, `default`, `lg`), estado `disabled`, y un botón con estado de carga simulado con `useState`.

### Card
- **Ejemplo 1**: card informativa simple (`CardHeader` + `CardTitle` + `CardDescription` + `CardAction` + `CardContent`).
- **Ejemplo 2**: card con un formulario adentro (`Input` controlado + `CardFooter` con botón que se habilita solo si el email es válido).

### Input
- **Ejemplo 1**: input controlado con `useState`, mostrando en vivo lo que se escribe (patrón típico de búsqueda).
- **Ejemplo 2**: input tipo `password` y un input `disabled`.

### Dialog
- **Ejemplo 1**: diálogo de confirmación (`DialogTrigger` + `DialogContent` + `DialogFooter` con botones Cancelar/Confirmar usando `DialogClose`).
- **Ejemplo 2**: diálogo con un formulario adentro (dos `Input` dentro de `DialogContent`).

## 7. Correr el proyecto

```bash
npm run dev
```

## 8. Verificar que compile (antes de entregar)

```bash
npm run build
```

Si termina con `✓ built in ...ms` sin errores en rojo, está listo.
