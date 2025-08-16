// Constantes fijas
export const PRECIO_COMPRA = 136000;
export const ALCABALA = 4080;
export const COSTO_TOTAL = PRECIO_COMPRA + ALCABALA; // 140080

// Fórmulas de cálculo
export function calcularGano(precioVenta: number): number {
  return precioVenta - COSTO_TOTAL;
}

export function calcularTax5(gano: number): number {
  return Math.max(gano, 0) * 0.05;
}

export function calcularCorretaje(precioVenta: number): number {
  return precioVenta * 0.025;
}

export function calcularGanoReal(gano: number, tax5: number, corretaje: number): number {
  return gano - tax5 - corretaje;
}

// Función principal que calcula todos los valores
export function calcularTodo(precioVenta: number) {
  const gano = calcularGano(precioVenta);
  const tax5 = calcularTax5(gano);
  const corretaje = calcularCorretaje(precioVenta);
  const ganoReal = calcularGanoReal(gano, tax5, corretaje);

  return {
    gano,
    tax5,
    corretaje,
    ganoReal,
  };
}
