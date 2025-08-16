/**
 * Formatea un número como moneda peruana sin símbolo de moneda
 * @param amount - Cantidad a formatear
 * @returns String formateado con separadores de miles (ej: 150,000)
 */
export function formatMoney(amount: number): string {
  return new Intl.NumberFormat('es-PE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
