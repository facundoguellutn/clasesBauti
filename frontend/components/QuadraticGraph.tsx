'use client';

import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Dot,
} from 'recharts';
import {
  generateQuadraticPoints,
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
  const [minX, maxX] = xMin === undefined || xMax === undefined
    ? getRecommendedXRange(a, b, c)
    : [xMin, xMax];

  const data = useMemo(
    () => generateQuadraticPoints(a, b, c, minX, maxX, 0.2),
    [a, b, c, minX, maxX]
  );

  const vertex = useMemo(() => getVertex(a, b, c), [a, b, c]);
  const roots = useMemo(() => getRoots(a, b, c), [a, b, c]);

  return (
    <div className="w-full space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <div className="w-full bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis
              dataKey="x"
              type="number"
              label={{ value: 'x', position: 'insideBottomRight', offset: -5 }}
              stroke="rgba(148, 163, 184, 0.5)"
            />
            <YAxis
              label={{ value: 'y', angle: -90, position: 'insideLeft' }}
              stroke="rgba(148, 163, 184, 0.5)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '8px',
                color: '#e2e8f0',
              }}
              formatter={(value) => (
                typeof value === 'number' ? value.toFixed(2) : value
              )}
            />

            {/* Reference line for axis of symmetry */}
            {showAxisOfSymmetry && (
              <ReferenceLine
                x={vertex.x}
                stroke="rgba(168, 85, 247, 0.3)"
                strokeDasharray="5 5"
                label={{
                  value: `x = ${vertex.x.toFixed(2)}`,
                  position: 'top',
                  fill: 'rgba(168, 85, 247, 0.7)',
                  fontSize: 12,
                }}
              />
            )}

            {/* Reference line for Y axis */}
            <ReferenceLine
              y={0}
              stroke="rgba(148, 163, 184, 0.3)"
            />

            {/* Main parabola */}
            <Line
              type="monotone"
              dataKey="y"
              stroke="rgb(59, 130, 246)"
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              name={`f(x) = ${a}x² + ${b}x + ${c}`}
            />

            {/* Vertex point */}
            {showVertex && (
              <Dot
                x={vertex.x}
                y={vertex.y}
                fill="rgb(239, 68, 68)"
                r={6}
              />
            )}

            {/* Root points */}
            {showRoots && roots.length > 0 && (
              roots.map((root, index) => (
                <Dot
                  key={`root-${index}`}
                  x={root}
                  y={0}
                  fill="rgb(34, 197, 94)"
                  r={5}
                />
              ))
            )}
          </LineChart>
        </ResponsiveContainer>
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
