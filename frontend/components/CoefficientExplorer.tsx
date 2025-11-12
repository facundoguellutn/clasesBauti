'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QuadraticGraph } from './QuadraticGraph';
import { getVertex, getRoots, getDiscriminant } from '@/lib/utils/quadratic';

interface CoefficientExplorerProps {
  initialA?: number;
  initialB?: number;
  initialC?: number;
  showDescription?: boolean;
}

export function CoefficientExplorer({
  initialA = 1,
  initialB = 0,
  initialC = 0,
  showDescription = true,
}: CoefficientExplorerProps) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [c, setC] = useState(initialC);

  const vertex = getVertex(a, b, c);
  const roots = getRoots(a, b, c);
  const discriminant = getDiscriminant(a, b, c);

  const formatFunction = () => {
    const parts: string[] = [];
    if (a !== 0) {
      if (a === 1) parts.push('x²');
      else if (a === -1) parts.push('-x²');
      else parts.push(`${a}x²`);
    }
    if (b !== 0) {
      if (b > 0 && parts.length > 0) parts.push('+');
      if (b === 1) parts.push('x');
      else if (b === -1) parts.push('-x');
      else parts.push(`${b}x`);
    }
    if (c !== 0) {
      if (c > 0 && parts.length > 0) parts.push('+');
      parts.push(String(c));
    }
    return parts.length > 0 ? parts.join(' ') : '0';
  };

  const getConcavity = () => {
    if (a > 0) return { text: 'Hacia arriba', color: 'bg-green-600' };
    if (a < 0) return { text: 'Hacia abajo', color: 'bg-red-600' };
    return { text: 'No es cuadrática', color: 'bg-gray-600' };
  };

  const getAmplitude = () => {
    const absA = Math.abs(a);
    if (absA > 2) return 'Muy estrecha';
    if (absA > 1) return 'Estrecha';
    if (absA > 0.5) return 'Normal';
    return 'Ancha';
  };

  const concavity = getConcavity();

  return (
    <div className="space-y-6">
      {showDescription && (
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              Explorador de Coeficientes
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              Ajusta los sliders para ver cómo cada coeficiente afecta la forma y posición de la parábola.
              Observa cómo cambian el vértice, las raíces y la concavidad en tiempo real.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-mono">f(x) = {formatFunction()}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Slider para a */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Coeficiente <span className="font-mono text-lg">a</span> (Concavidad y Amplitud)
              </label>
              <Badge className={concavity.color}>{a.toFixed(2)}</Badge>
            </div>
            <Slider
              value={[a]}
              onValueChange={([value]) => setA(value)}
              min={-3}
              max={3}
              step={0.1}
            />
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p>
                <strong>Concavidad:</strong> {concavity.text}
                {a !== 0 && (
                  <>
                    {' '}
                    {a > 0 ? '(mínimo en el vértice)' : '(máximo en el vértice)'}
                  </>
                )}
              </p>
              <p>
                <strong>Amplitud:</strong> {getAmplitude()} (|a| = {Math.abs(a).toFixed(2)})
              </p>
              {a === 0 && (
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  ⚠️ Si a = 0, la función NO es cuadrática (sería lineal)
                </p>
              )}
            </div>
          </div>

          {/* Slider para b */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Coeficiente <span className="font-mono text-lg">b</span> (Posición Horizontal)
              </label>
              <Badge variant="outline">{b.toFixed(2)}</Badge>
            </div>
            <Slider
              value={[b]}
              onValueChange={([value]) => setB(value)}
              min={-10}
              max={10}
              step={0.1}
            />
            <div className="text-xs text-slate-600 dark:text-slate-400">
              <p>
                <strong>Efecto:</strong> Desplaza el vértice horizontalmente. El vértice está en x ={' '}
                {vertex.x.toFixed(2)}
              </p>
              {b === 0 && (
                <p className="text-blue-600 dark:text-blue-400">
                  ✓ Cuando b = 0, el vértice está sobre el eje Y (x = 0)
                </p>
              )}
            </div>
          </div>

          {/* Slider para c */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Coeficiente <span className="font-mono text-lg">c</span> (Intersección con Y)
              </label>
              <Badge variant="outline">{c.toFixed(2)}</Badge>
            </div>
            <Slider
              value={[c]}
              onValueChange={([value]) => setC(value)}
              min={-10}
              max={10}
              step={0.1}
            />
            <div className="text-xs text-slate-600 dark:text-slate-400">
              <p>
                <strong>Intersección con Y:</strong> La parábola corta el eje Y en el punto (0,{' '}
                {c.toFixed(2)})
              </p>
              {c === 0 && (
                <p className="text-blue-600 dark:text-blue-400">
                  ✓ Cuando c = 0, la parábola pasa por el origen (0, 0)
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráfica */}
      <QuadraticGraph
        a={a}
        b={b}
        c={c}
        title={`f(x) = ${formatFunction()}`}
        showVertex={true}
        showRoots={true}
        showAxisOfSymmetry={true}
      />

      {/* Información detallada */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-purple-900 dark:text-purple-100">
              Vértice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-mono text-purple-800 dark:text-purple-200">
              ({vertex.x.toFixed(2)}, {vertex.y.toFixed(2)})
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-900 dark:text-green-100">Raíces</CardTitle>
          </CardHeader>
          <CardContent>
            {roots.length > 0 ? (
              <p className="text-lg font-mono text-green-800 dark:text-green-200">
                {roots.map((r) => r.toFixed(2)).join(', ')}
              </p>
            ) : (
              <p className="text-sm text-green-800 dark:text-green-200">Sin raíces reales</p>
            )}
          </CardContent>
        </Card>

        <Card className="bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-orange-900 dark:text-orange-100">
              Discriminante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-mono text-orange-800 dark:text-orange-200">
              Δ = {discriminant.toFixed(2)}
            </p>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
              {discriminant > 0
                ? '2 raíces distintas'
                : discriminant === 0
                  ? '1 raíz doble'
                  : 'Sin raíces reales'}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-900 dark:text-blue-100">
              Eje de Simetría
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-mono text-blue-800 dark:text-blue-200">
              x = {vertex.x.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

