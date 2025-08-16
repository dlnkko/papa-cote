# Papa Cote - Calculadora de Venta 2.5

Una web app mínima para calcular ganancias en ventas inmobiliarias, considerando impuestos y corretaje.

## Características

- **Input numérico**: Precio de venta (default: 150,000)
- **Constantes fijas**: Precio compra (136,000), Alcabala (4,080), Costo total (140,080)
- **Cálculos automáticos**: Gano, Tax 5%, Corretaje 2.5%, Gano real
- **Actualización en tiempo real**: Los cálculos se actualizan mientras escribes
- **Formato de moneda**: Separadores de miles en formato peruano (es-PE)
- **Responsive**: Diseño mobile-friendly con Tailwind CSS

## Fórmulas

- `gano = precioVenta - costoTotal`
- `tax5 = max(gano, 0) * 0.05` (solo si gano > 0)
- `corretaje = precioVenta * 0.025`
- `ganoReal = gano - tax5 - corretaje`

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest
- **Arquitectura**: React Server Components + Client Components

## Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
# Modo normal
npm run dev

# Modo turbo (más rápido)
npm run dev:turbo
```

### Build y Producción
```bash
npm run build
npm start
```

### Testing
```bash
# Ejecutar tests una vez
npm test

# Ejecutar tests en modo watch
npm run test:watch
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout de la app
│   └── globals.css       # Estilos globales
├── components/
│   └── CalculadoraVenta.tsx  # Componente principal
├── lib/
│   ├── utils.ts          # Utilidades (formatMoney)
│   └── calculations.ts   # Lógica de cálculos
└── __tests__/
    └── calc.test.ts      # Tests de las fórmulas
```

## Ejemplo de Uso

1. Abre la aplicación en tu navegador
2. Verás el input "Precio de venta" con valor por defecto 150,000
3. Los cálculos se muestran automáticamente:
   - **Gano**: 9,920
   - **Tax 5%**: 496
   - **Corretaje**: 3,750
   - **Gano real**: 5,674 (resaltado en amarillo)
4. Modifica el precio de venta y observa cómo se actualizan todos los valores en tiempo real

## Validaciones

- No se permiten valores negativos en el input
- Si el input está vacío, se toma como 0
- El Tax 5% solo se aplica cuando hay ganancia
- Si el gano real es negativo, se muestra como "Pérdida real" en rojo

## Licencia

Proyecto privado para uso interno.
