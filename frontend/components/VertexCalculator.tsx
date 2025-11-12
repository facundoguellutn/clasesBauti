'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QuadraticGraph } from './QuadraticGraph';
import { getVertex, evaluateQuadratic, isValidQuadratic } from '@/lib/utils/quadratic';

interface VertexCalculatorProps {
  showDescription?: boolean;
}

export function VertexCalculator({ showDescription = true }: VertexCalculatorProps) {
  const [a, setA] = useState('1');
  const [b, setB] = useState('0');
  const [c, setC] = useState('0');
  const [showSteps, setShowSteps] = useState(false);

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const cNum = parseFloat(c) || 0;
  const isValid = isValidQuadratic(aNum, bNum, cNum);

  let vertex: { x: number; y: number } | null = null;
  let steps: string[] = [];

  if (isValid) {
    vertex = getVertex(aNum, bNum, cNum);
    const h = vertex.x;
    const k = vertex.y;

    steps = [
      `Paso 1: Identificar los coeficientes`,
      `   a = ${aNum}, b = ${bNum}, c = ${cNum}`,
      ``,
      `Paso 2: Calcular la coordenada x del vértice (h)`,
      `   h = -b / (2a)`,
      `   h = -(${bNum}) / (2 × ${aNum})`,
      `   h = ${-bNum} / ${2 * aNum}`,
      `   h = ${h.toFixed(4)}`,
      ``,
      `Paso 3: Calcular la coordenada y del vértice (k)`,
      `   k = f(h) = a(h)² + b(h) + c`,
      `   k = ${aNum}(${h.toFixed(4)})² + ${bNum}(${h.toFixed(4)}) + ${cNum}`,
      `   k = ${aNum}(${(h * h).toFixed(4)}) + ${(bNum * h).toFixed(4)} + ${cNum}`,
      `   k = ${(aNum * h * h).toFixed(4)} + ${(bNum * h).toFixed(4)} + ${cNum}`,
      `   k = ${k.toFixed(4)}`,
      ``,
      `Paso 4: Escribir el vértice`,
      `   Vértice: (${h.toFixed(2)}, ${k.toFixed(2)})`,
    ];
  }

  const formatFunction = () => {
    const parts: string[] = [];
    if (aNum !== 0) {
      if (aNum === 1) parts.push('x²');
      else if (aNum === -1) parts.push('-x²');
      else parts.push(`${aNum}x²`);
    }
    if (bNum !== 0) {
      if (bNum > 0 && parts.length > 0) parts.push('+');
      if (bNum === 1) parts.push('x');
      else if (bNum === -1) parts.push('-x');
      else parts.push(`${bNum}x`);
    }
    if (cNum !== 0) {
      if (cNum > 0 && parts.length > 0) parts.push('+');
      parts.push(String(cNum));
    }
    return parts.length > 0 ? parts.join(' ') : '0';
  };

  return (
    <div className="space-y-6">
      {showDescription && (
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              Calculadora de Vértice
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              Ingresa los coeficientes de tu función cuadrática y obtén el vértice con una
              explicación paso a paso detallada.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Ingresa los Coeficientes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="a" className="text-sm font-medium">
                Coeficiente <span className="font-mono">a</span>
              </label>
              <Input
                id="a"
                type="number"
                step="any"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="1"
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="b" className="text-sm font-medium">
                Coeficiente <span className="font-mono">b</span>
              </label>
              <Input
                id="b"
                type="number"
                step="any"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="0"
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="c" className="text-sm font-medium">
                Coeficiente <span className="font-mono">c</span>
              </label>
              <Input
                id="c"
                type="number"
                step="any"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="0"
                className="font-mono"
              />
            </div>
          </div>

          {!isValid && (
            <Alert className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
              <AlertDescription className="text-red-800 dark:text-red-200">
                ⚠️ El coeficiente <span className="font-mono font-bold">a</span> debe ser
                diferente de 0 para que sea una función cuadrática.
              </AlertDescription>
            </Alert>
          )}

          {isValid && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
                <p className="text-lg font-mono text-center">
                  f(x) = {formatFunction()}
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setShowSteps(!showSteps)} variant="outline">
                  {showSteps ? 'Ocultar' : 'Mostrar'} Pasos Detallados
                </Button>
              </div>

              {showSteps && (
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle className="text-blue-900 dark:text-blue-100 text-lg">
                      Procedimiento Paso a Paso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 font-mono text-sm text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
                      {steps.map((step, index) => (
                        <p key={index} className={step.trim() === '' ? 'h-2' : ''}>
                          {step}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                <CardHeader>
                  <CardTitle className="text-green-900 dark:text-green-100">
                    Resultado: Vértice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-mono font-bold text-green-800 dark:text-green-200">
                      ({vertex!.x.toFixed(2)}, {vertex!.y.toFixed(2)})
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Badge className="bg-green-600">
                        h = {vertex!.x.toFixed(4)}
                      </Badge>
                      <Badge className="bg-green-600">
                        k = {vertex!.y.toFixed(4)}
                      </Badge>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Eje de simetría: x = {vertex!.x.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {isValid && vertex && (
        <QuadraticGraph
          a={aNum}
          b={bNum}
          c={cNum}
          title={`f(x) = ${formatFunction()}`}
          showVertex={true}
          showRoots={true}
          showAxisOfSymmetry={true}
        />
      )}
    </div>
  );
}

