'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QuadraticGraph } from './QuadraticGraph';
import { getDiscriminant, getRoots, isValidQuadratic } from '@/lib/utils/quadratic';

interface DiscriminantCalculatorProps {
  showDescription?: boolean;
}

export function DiscriminantCalculator({ showDescription = true }: DiscriminantCalculatorProps) {
  const [a, setA] = useState('1');
  const [b, setB] = useState('0');
  const [c, setC] = useState('0');
  const [showSteps, setShowSteps] = useState(false);

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const cNum = parseFloat(c) || 0;
  const isValid = isValidQuadratic(aNum, bNum, cNum);

  let discriminant: number | null = null;
  let steps: string[] = [];
  let interpretation: {
    type: 'two-roots' | 'one-root' | 'no-roots';
    message: string;
    color: string;
    explanation: string;
  } | null = null;

  if (isValid) {
    discriminant = getDiscriminant(aNum, bNum, cNum);
    const bSquared = bNum * bNum;
    const fourAC = 4 * aNum * cNum;

    steps = [
      `Paso 1: Identificar los coeficientes`,
      `   a = ${aNum}, b = ${bNum}, c = ${cNum}`,
      ``,
      `Paso 2: Calcular b²`,
      `   b² = (${bNum})² = ${bSquared}`,
      ``,
      `Paso 3: Calcular 4ac`,
      `   4ac = 4 × ${aNum} × ${cNum}`,
      `   4ac = ${fourAC}`,
      ``,
      `Paso 4: Calcular el discriminante`,
      `   Δ = b² - 4ac`,
      `   Δ = ${bSquared} - ${fourAC}`,
      `   Δ = ${discriminant}`,
      ``,
      `Paso 5: Interpretar el resultado`,
    ];

    if (discriminant > 0) {
      interpretation = {
        type: 'two-roots',
        message: 'Dos raíces reales distintas',
        color: 'bg-green-600',
        explanation: `Como Δ > 0, la parábola corta el eje X en dos puntos diferentes.`,
      };
      steps.push(`   Como Δ = ${discriminant} > 0, hay DOS raíces reales distintas.`);
    } else if (discriminant === 0) {
      interpretation = {
        type: 'one-root',
        message: 'Una raíz real doble',
        color: 'bg-yellow-600',
        explanation: `Como Δ = 0, la parábola toca el eje X en un solo punto (el vértice).`,
      };
      steps.push(`   Como Δ = ${discriminant} = 0, hay UNA raíz real doble.`);
    } else {
      interpretation = {
        type: 'no-roots',
        message: 'Sin raíces reales',
        color: 'bg-red-600',
        explanation: `Como Δ < 0, la parábola no corta el eje X. Las raíces son números complejos.`,
      };
      steps.push(`   Como Δ = ${discriminant} < 0, NO hay raíces reales.`);
    }
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

  const roots = isValid ? getRoots(aNum, bNum, cNum) : [];

  return (
    <div className="space-y-6">
      {showDescription && (
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              Calculadora de Discriminante
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              El discriminante (Δ = b² - 4ac) determina cuántas raíces reales tiene una función
              cuadrática. Calcula el discriminante y aprende a interpretarlo.
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

          {isValid && discriminant !== null && interpretation && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
                <p className="text-lg font-mono text-center">
                  f(x) = {formatFunction()}
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setShowSteps(!showSteps)} variant="outline">
                  {showSteps ? 'Ocultar' : 'Mostrar'} Cálculo Paso a Paso
                </Button>
              </div>

              {showSteps && (
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle className="text-blue-900 dark:text-blue-100 text-lg">
                      Cálculo del Discriminante
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

              <Card className={`${interpretation.color} text-white`}>
                <CardHeader>
                  <CardTitle className="text-white">Resultado: Δ = {discriminant.toFixed(2)}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge className="bg-white text-slate-900 text-lg px-4 py-2">
                      {interpretation.message}
                    </Badge>
                  </div>
                  <p className="text-white/90">{interpretation.explanation}</p>
                  {roots.length > 0 && (
                    <div className="bg-white/20 p-3 rounded-lg">
                      <p className="text-sm font-semibold mb-1">Raíces:</p>
                      <p className="font-mono text-lg">
                        {roots.map((r) => r.toFixed(4)).join(', ')}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-slate-50 dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-lg">Tabla de Interpretación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3 p-2 rounded">
                      <Badge className={discriminant > 0 ? 'bg-green-600' : 'bg-slate-300'}>
                        Δ &gt; 0
                      </Badge>
                      <span>Dos raíces reales distintas</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded">
                      <Badge className={discriminant === 0 ? 'bg-yellow-600' : 'bg-slate-300'}>
                        Δ = 0
                      </Badge>
                      <span>Una raíz real doble (el vértice toca el eje X)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded">
                      <Badge className={discriminant < 0 ? 'bg-red-600' : 'bg-slate-300'}>
                        Δ &lt; 0
                      </Badge>
                      <span>Sin raíces reales (raíces complejas)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {isValid && (
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

