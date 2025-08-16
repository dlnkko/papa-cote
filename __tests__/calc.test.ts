import { 
  PRECIO_COMPRA, 
  ALCABALA, 
  COSTO_TOTAL, 
  calcularGano, 
  calcularTax5, 
  calcularCorretaje, 
  calcularGanoReal,
  calcularTodo 
} from '../src/lib/calculations';

describe('Cálculos de Venta', () => {
  test('constantes fijas son correctas', () => {
    expect(PRECIO_COMPRA).toBe(136000);
    expect(ALCABALA).toBe(4080);
    expect(COSTO_TOTAL).toBe(140080);
  });

  test('calcularGano funciona correctamente', () => {
    expect(calcularGano(150000)).toBe(9920);
    expect(calcularGano(140080)).toBe(0);
    expect(calcularGano(130000)).toBe(-10080);
  });

  test('calcularTax5 solo cobra si gano > 0', () => {
    expect(calcularTax5(9920)).toBe(496);
    expect(calcularTax5(0)).toBe(0);
    expect(calcularTax5(-1000)).toBe(0);
  });

  test('calcularCorretaje es 2.5% del precio de venta', () => {
    expect(calcularCorretaje(150000)).toBe(3750);
    expect(calcularCorretaje(100000)).toBe(2500);
  });

  test('calcularGanoReal calcula correctamente', () => {
    const gano = 9920;
    const tax5 = 496;
    const corretaje = 3750;
    expect(calcularGanoReal(gano, tax5, corretaje)).toBe(5674);
  });

  test('calcularTodo devuelve todos los valores correctos para 150000', () => {
    const resultado = calcularTodo(150000);
    expect(resultado.gano).toBe(9920);
    expect(resultado.tax5).toBe(496);
    expect(resultado.corretaje).toBe(3750);
    expect(resultado.ganoReal).toBe(5674);
  });
});
