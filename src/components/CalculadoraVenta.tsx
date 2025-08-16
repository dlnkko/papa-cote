'use client';

import { useState, useEffect } from 'react';
import { formatMoney } from '@/lib/utils';
import { 
  PRECIO_COMPRA, 
  ALCABALA, 
  COSTO_TOTAL, 
  calcularTodo 
} from '@/lib/calculations';

export default function CalculadoraVenta() {
  const [precioVenta, setPrecioVenta] = useState<number>(150000);
  const [calculos, setCalculos] = useState(() => calcularTodo(150000));

  useEffect(() => {
    setCalculos(calcularTodo(precioVenta));
  }, [precioVenta]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setPrecioVenta(0);
    } else {
      const numValue = Math.max(0, parseInt(value) || 0);
      setPrecioVenta(numValue);
    }
  };

  const isGanoRealNegativo = calculos.ganoReal < 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Web App Papa Cote
          </h1>
          
          {/* Input Precio de Venta */}
          <div className="mb-6">
            <label htmlFor="precioVenta" className="block text-sm font-medium text-gray-700 mb-2">
              Precio de venta
            </label>
            <input
              id="precioVenta"
              type="number"
              min="0"
              value={precioVenta || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="150000"
            />
          </div>

          {/* Resumen de cálculos */}
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Precio compra:</span>
              <span className="font-medium">{formatMoney(PRECIO_COMPRA)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Alcabala:</span>
              <span className="font-medium">{formatMoney(ALCABALA)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Costo total:</span>
              <span className="font-medium">{formatMoney(COSTO_TOTAL)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Gano:</span>
              <span className="font-medium">{formatMoney(calculos.gano)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Tax 5%:</span>
              <span className="font-medium">{formatMoney(calculos.tax5)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Corretaje (2.5%):</span>
              <span className="font-medium">{formatMoney(calculos.corretaje)}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 bg-yellow-50 rounded-lg px-3">
              <span className="text-gray-800 font-medium">
                {isGanoRealNegativo ? 'Pérdida real:' : 'Gano real:'}
              </span>
              <span className={`font-bold text-lg ${
                isGanoRealNegativo ? 'text-red-600' : 'text-green-600'
              }`}>
                {formatMoney(Math.abs(calculos.ganoReal))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
