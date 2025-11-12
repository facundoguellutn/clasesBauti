'use client';

import React, { useMemo, useEffect, useRef } from 'react';
import functionPlot from 'function-plot';
import {
  getVertex,
  getRoots,
  getRecommendedXRange,
  getRecommendedYRange,
} from '@/lib/utils/quadratic';

interface QuadraticGraphProps {
  a: number;
  b: number;
  c: number;
  title?: string;
  showVertex?: boolean;
  showRoots?: boolean;
  showAxisOfSymmetry?: boolean;
  height?: number;
  xMin?: number;
  xMax?: number;
}

export function QuadraticGraph({
  a,
  b,
  c,
  title = 'Función Cuadrática',
  showVertex = true,
  showRoots = true,
  showAxisOfSymmetry = true,
  height = 400,
  xMin,
  xMax,
}: QuadraticGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [minX, maxX] = useMemo(() => 
    xMin === undefined || xMax === undefined
      ? getRecommendedXRange(a, b, c)
      : [xMin, xMax],
    [a, b, c, xMin, xMax]
  );

  const vertex = useMemo(() => getVertex(a, b, c), [a, b, c]);
  const roots = useMemo(() => getRoots(a, b, c), [a, b, c]);
  const [minY, maxY] = useMemo(() => getRecommendedYRange(a, b, c), [a, b, c]);

  // Construir la expresión de la función cuadrática
  const functionExpression = useMemo(() => {
    const parts: string[] = [];
    if (a !== 0) {
      if (a === 1) parts.push('x^2');
      else if (a === -1) parts.push('-x^2');
      else parts.push(`${a}*x^2`);
    }
    if (b !== 0) {
      if (b > 0 && parts.length > 0) parts.push('+');
      if (b === 1) parts.push('x');
      else if (b === -1) parts.push('-x');
      else parts.push(`${b}*x`);
    }
    if (c !== 0) {
      if (c > 0 && parts.length > 0) parts.push('+');
      parts.push(String(c));
    }
    return parts.length > 0 ? parts.join('') : '0';
  }, [a, b, c]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpiar el contenedor antes de renderizar
    containerRef.current.innerHTML = '';

    const data: any[] = [
      {
        fn: functionExpression,
        graphType: 'polyline',
        color: 'rgb(59, 130, 246)',
        attr: {
          'stroke-width': 2,
        },
      },
    ];

    // Agregar línea del eje de simetría si está habilitado
    if (showAxisOfSymmetry) {
      data.push({
        fn: `x = ${vertex.x}`,
        graphType: 'polyline',
        color: 'rgba(168, 85, 247, 0.5)',
        attr: {
          'stroke-dasharray': '5,5',
          'stroke-width': 1.5,
        },
      });
    }

    // Agregar punto del vértice si está habilitado
    if (showVertex) {
      data.push({
        points: [[vertex.x, vertex.y]],
        fnType: 'points',
        graphType: 'scatter',
        color: 'rgb(239, 68, 68)',
        attr: {
          r: 6,
        },
      });
    }

    // Agregar puntos de las raíces si están habilitados
    if (showRoots && roots.length > 0) {
      const rootPoints = roots.map(root => [root, 0]);
      data.push({
        points: rootPoints,
        fnType: 'points',
        graphType: 'scatter',
        color: 'rgb(34, 197, 94)',
        attr: {
          r: 5,
        },
      });
    }

    try {
      functionPlot({
        target: containerRef.current,
        width: containerRef.current.offsetWidth || 800,
        height: height,
        xAxis: {
          label: 'x',
          domain: [minX, maxX],
        },
        yAxis: {
          label: 'y',
          domain: [minY, maxY],
        },
        grid: true,
        data: data,
        tip: {
          xLine: true,
          yLine: true,
          renderer: (x: number, y: number) => {
            return `(${x.toFixed(2)}, ${y.toFixed(2)})`;
          },
        },
      });
    } catch (error) {
      console.error('Error al renderizar el gráfico:', error);
    }
  }, [a, b, c, functionExpression, minX, maxX, minY, maxY, vertex, roots, showVertex, showRoots, showAxisOfSymmetry, height]);

  return (
    <div className="w-full space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <div className="w-full bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <div 
          ref={containerRef} 
          style={{ width: '100%', height: `${height}px` }}
          className="function-plot-container"
        />
      </div>

      {/* Info Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        {showVertex && (
          <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg border border-red-200 dark:border-red-900">
            <p className="font-semibold text-red-900 dark:text-red-200">Vértice</p>
            <p className="text-red-800 dark:text-red-300">
              ({vertex.x.toFixed(2)}, {vertex.y.toFixed(2)})
            </p>
          </div>
        )}

        {showRoots && roots.length > 0 && (
          <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg border border-green-200 dark:border-green-900">
            <p className="font-semibold text-green-900 dark:text-green-200">Raíces</p>
            <p className="text-green-800 dark:text-green-300">
              {roots.map((r) => r.toFixed(2)).join(', ')}
            </p>
          </div>
        )}

        {showRoots && roots.length === 0 && (
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-900">
            <p className="font-semibold text-blue-900 dark:text-blue-200">Raíces</p>
            <p className="text-blue-800 dark:text-blue-300">Sin raíces reales</p>
          </div>
        )}

        {showAxisOfSymmetry && (
          <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg border border-purple-200 dark:border-purple-900">
            <p className="font-semibold text-purple-900 dark:text-purple-200">Eje de Simetría</p>
            <p className="text-purple-800 dark:text-purple-300">
              x = {vertex.x.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
