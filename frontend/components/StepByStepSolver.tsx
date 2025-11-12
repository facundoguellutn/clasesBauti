'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QuadraticGraph } from './QuadraticGraph';
import {
  getDiscriminant,
  getRoots,
  isValidQuadratic,
  evaluateQuadratic,
} from '@/lib/utils/quadratic';

interface StepByStepSolverProps {
  showDescription?: boolean;
}

export function StepByStepSolver({ showDescription = true }: StepByStepSolverProps) {
  const [a, setA] = useState('1');
  const [b, setB] = useState('0');
  const [c, setC] = useState('0');
  const [showSteps, setShowSteps] = useState(false);

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const cNum = parseFloat(c) || 0;
  const isValid = isValidQuadratic(aNum, bNum, cNum);

  let steps: string[] = [];
  let roots: number[] = [];
  let discriminant: number | null = null;

  if (isValid) {
    discriminant = getDiscriminant(aNum, bNum, cNum);
    roots = getRoots(aNum, bNum, cNum);

    const sqrtDelta = discriminant >= 0 ? Math.sqrt(discriminant) : null;
    const twoA = 2 * aNum;
    const negB = -bNum;

    steps = [
      `Paso 1: Identificar los coeficientes`,
      `   a = ${aNum}`,
      `   b = ${bNum}`,
      `   c = ${cNum}`,
      ``,
      `Paso 2: Calcular el discriminante (Δ)`,
      `   Δ = b² - 4ac`,
      `   Δ = (${bNum})² - 4(${aNum})(${cNum})`,
      `   Δ = ${bNum * bNum} - ${4 * aNum * cNum}`,
      `   Δ = ${discriminant}`,
      ``,
    ];

    if (discriminant > 0) {
      steps.push(
        `Paso 3: Interpretar el discriminante`,
        `   Como Δ = ${discriminant} > 0, hay DOS raíces reales distintas.`,
        ``,
        `Paso 4: Calcular la raíz cuadrada del discriminante`,
        `   √Δ = √${discriminant} = ${sqrtDelta!.toFixed(4)}`,
        ``,
        `Paso 5: Aplicar la fórmula cuadrática`,
        `   x = (-b ± √Δ) / (2a)`,
        `   x = (-(${bNum}) ± ${sqrtDelta!.toFixed(4)}) / (2 × ${aNum})`,
        `   x = (${negB} ± ${sqrtDelta!.toFixed(4)}) / ${twoA}`,
        ``,
        `Paso 6: Calcular las dos soluciones`,
        `   Solución 1 (usando +):`,
        `   x₁ = (${negB} + ${sqrtDelta!.toFixed(4)}) / ${twoA}`,
        `   x₁ = ${(negB + sqrtDelta!).toFixed(4)} / ${twoA}`,
        `   x₁ = ${roots[0].toFixed(4)}`,
        ``,
        `   Solución 2 (usando -):`,
        `   x₂ = (${negB} - ${sqrtDelta!.toFixed(4)}) / ${twoA}`,
        `   x₂ = ${(negB - sqrtDelta!).toFixed(4)} / ${twoA}`,
        `   x₂ = ${roots[1].toFixed(4)}`,
        ``,
        `Paso 7: Verificar las soluciones`,
        `   Verificando x₁ = ${roots[0].toFixed(4)}:`,
        `   f(${roots[0].toFixed(4)}) = ${aNum}(${roots[0].toFixed(4)})² + ${bNum}(${roots[0].toFixed(4)}) + ${cNum}`,
        `   f(${roots[0].toFixed(4)}) = ${evaluateQuadratic(aNum, bNum, cNum, roots[0]).toFixed(4)} ≈ 0 ✓`,
        ``,
        `   Verificando x₂ = ${roots[1].toFixed(4)}:`,
        `   f(${roots[1].toFixed(4)}) = ${aNum}(${roots[1].toFixed(4)})² + ${bNum}(${roots[1].toFixed(4)}) + ${cNum}`,
        `   f(${roots[1].toFixed(4)}) = ${evaluateQuadratic(aNum, bNum, cNum, roots[1]).toFixed(4)} ≈ 0 ✓`,
      );
    } else if (discriminant === 0) {
      const root = roots[0];
      steps.push(
        `Paso 3: Interpretar el discriminante`,
        `   Como Δ = 0, hay UNA raíz real doble.`,
        ``,
        `Paso 4: Aplicar la fórmula cuadrática`,
        `   x = -b / (2a)`,
        `   x = -(${bNum}) / (2 × ${aNum})`,
        `   x = ${negB} / ${twoA}`,
        `   x = ${root.toFixed(4)}`,
        ``,
        `Paso 5: Verificar la solución`,
        `   f(${root.toFixed(4)}) = ${aNum}(${root.toFixed(4)})² + ${bNum}(${root.toFixed(4)}) + ${cNum}`,
        `   f(${root.toFixed(4)}) = ${evaluateQuadratic(aNum, bNum, cNum, root).toFixed(4)} ≈ 0 ✓`,
        ``,
        `Nota: Esta es una raíz doble, lo que significa que el vértice toca el eje X.`,
      );
    } else {
      steps.push(
        `Paso 3: Interpretar el discriminante`,
        `   Como Δ = ${discriminant} < 0, NO hay raíces reales.`,
        ``,
        `Paso 4: Explicación`,
        `   La raíz cuadrada de un número negativo no es un número real.`,
        `   Las raíces existen pero son números complejos (imaginarios).`,
        ``,
        `   Las raíces complejas serían:`,
        `   x = (${negB} ± i√${Math.abs(discriminant)}) / ${twoA}`,
        ``,
        `   Donde i = √(-1) es la unidad imaginaria.`,
      );
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

  return (
    <div className="space-y-6">
      {showDescription && (
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              Resolvedor Paso a Paso: Fórmula Cuadrática
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              Resuelve ecuaciones cuadráticas usando la fórmula general (fórmula de Bhaskara) con
              una explicación detallada de cada paso.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Ingresa los Coeficientes</CardTitle>
          <CardDescription>
            Para resolver la ecuación: ax² + bx + c = 0
          </CardDescription>
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
                diferente de 0 para que sea una ecuación cuadrática.
              </AlertDescription>
            </Alert>
          )}

          {isValid && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
                <p className="text-lg font-mono text-center">
                  {formatFunction()} = 0
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setShowSteps(!showSteps)} variant="outline">
                  {showSteps ? 'Ocultar' : 'Mostrar'} Solución Paso a Paso
                </Button>
              </div>

              {showSteps && (
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle className="text-blue-900 dark:text-blue-100 text-lg">
                      Solución Detallada
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

              {discriminant !== null && (
                <Card
                  className={
                    discriminant > 0
                      ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900'
                      : discriminant === 0
                        ? 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900'
                        : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900'
                  }
                >
                  <CardHeader>
                    <CardTitle
                      className={
                        discriminant > 0
                          ? 'text-green-900 dark:text-green-100'
                          : discriminant === 0
                            ? 'text-yellow-900 dark:text-yellow-100'
                            : 'text-red-900 dark:text-red-100'
                      }
                    >
                      Resultado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p
                          className={
                            discriminant > 0
                              ? 'text-green-800 dark:text-green-200'
                              : discriminant === 0
                                ? 'text-yellow-800 dark:text-yellow-200'
                                : 'text-red-800 dark:text-red-200'
                          }
                        >
                          <strong>Discriminante:</strong> Δ = {discriminant.toFixed(2)}
                        </p>
                      </div>
                      {roots.length > 0 ? (
                        <div>
                          <p
                            className={
                              discriminant > 0
                                ? 'text-green-800 dark:text-green-200'
                                : 'text-yellow-800 dark:text-yellow-200'
                            }
                          >
                            <strong>Raíces:</strong>
                          </p>
                          <div className="mt-2 space-y-1">
                            {roots.map((root, index) => (
                              <p
                                key={index}
                                className={`text-2xl font-mono font-bold ${
                                  discriminant > 0
                                    ? 'text-green-900 dark:text-green-100'
                                    : 'text-yellow-900 dark:text-yellow-100'
                                }`}
                              >
                                x{index === 0 ? '₁' : '₂'} = {root.toFixed(4)}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-red-800 dark:text-red-200">
                          <strong>No hay raíces reales.</strong> Las raíces son números complejos.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
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

