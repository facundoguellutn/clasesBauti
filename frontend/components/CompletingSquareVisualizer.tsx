'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { QuadraticGraph } from './QuadraticGraph';
import { getVertex, isValidQuadratic } from '@/lib/utils/quadratic';

interface CompletingSquareVisualizerProps {
  showDescription?: boolean;
}

export function CompletingSquareVisualizer({
  showDescription = true,
}: CompletingSquareVisualizerProps) {
  const [a, setA] = useState('1');
  const [b, setB] = useState('6');
  const [c, setC] = useState('5');
  const [currentStep, setCurrentStep] = useState(0);

  const aNum = parseFloat(a) || 0;
  const bNum = parseFloat(b) || 0;
  const cNum = parseFloat(c) || 0;
  const isValid = isValidQuadratic(aNum, bNum, cNum);

  let steps: Array<{
    title: string;
    description: string;
    expression: string;
    explanation: string;
  }> = [];

  if (isValid) {
    const vertex = getVertex(aNum, bNum, cNum);
    const h = vertex.x;
    const k = vertex.y;

    if (aNum === 1) {
      // Caso simple: a = 1
      const halfB = bNum / 2;
      const halfBSquared = halfB * halfB;
      const constant = cNum - halfBSquared;

      steps = [
        {
          title: 'Paso 1: Identificar la forma general',
          description: 'Empezamos con la función en forma general',
          expression: `f(x) = x² + ${bNum}x + ${cNum}`,
          explanation: `Identificamos: a = 1, b = ${bNum}, c = ${cNum}`,
        },
        {
          title: 'Paso 2: Separar el término constante',
          description: 'Separamos los términos con x del término constante',
          expression: `f(x) = (x² + ${bNum}x) + ${cNum}`,
          explanation: `Agrupamos los términos que contienen x y dejamos c separado.`,
        },
        {
          title: 'Paso 3: Calcular el término para completar el cuadrado',
          description: 'Calculamos (b/2)² para completar el trinomio cuadrado perfecto',
          expression: `(b/2)² = (${bNum}/2)² = ${halfB}² = ${halfBSquared}`,
          explanation: `Tomamos el coeficiente de x (${bNum}), lo dividimos por 2 (${halfB}) y lo elevamos al cuadrado (${halfBSquared}).`,
        },
        {
          title: 'Paso 4: Sumar y restar el término calculado',
          description: 'Sumamos y restamos el mismo valor para no alterar la función',
          expression: `f(x) = (x² + ${bNum}x + ${halfBSquared} - ${halfBSquared}) + ${cNum}`,
          explanation: `Sumamos ${halfBSquared} y lo restamos inmediatamente. Esto no cambia el valor de la función.`,
        },
        {
          title: 'Paso 5: Factorizar el trinomio cuadrado perfecto',
          description: 'El trinomio (x² + bx + (b/2)²) es un cuadrado perfecto',
          expression: `f(x) = (x + ${halfB})² - ${halfBSquared} + ${cNum}`,
          explanation: `El trinomio x² + ${bNum}x + ${halfBSquared} es el cuadrado de (x + ${halfB}).`,
        },
        {
          title: 'Paso 6: Simplificar',
          description: 'Combinamos los términos constantes',
          expression: `f(x) = (x + ${halfB})² + ${constant}`,
          explanation: `Simplificamos: -${halfBSquared} + ${cNum} = ${constant}`,
        },
        {
          title: 'Paso 7: Identificar el vértice',
          description: 'De la forma canónica podemos leer directamente el vértice',
          expression: `f(x) = (x - (${-halfB}))² + ${constant}`,
          explanation: `El vértice es (h, k) = (${-halfB}, ${constant}). Nota: h tiene signo opuesto al del paréntesis.`,
        },
      ];
    } else {
      // Caso general: a ≠ 1
      const halfBOverA = bNum / (2 * aNum);
      const halfBOverASquared = halfBOverA * halfBOverA;
      const constant = cNum - aNum * halfBOverASquared;

      steps = [
        {
          title: 'Paso 1: Identificar la forma general',
          description: 'Empezamos con la función en forma general',
          expression: `f(x) = ${aNum}x² + ${bNum}x + ${cNum}`,
          explanation: `Identificamos: a = ${aNum}, b = ${bNum}, c = ${cNum}`,
        },
        {
          title: 'Paso 2: Factorizar a de los términos con x',
          description: 'Sacamos a como factor común de los términos que contienen x',
          expression: `f(x) = ${aNum}(x² + ${bNum / aNum}x) + ${cNum}`,
          explanation: `Factorizamos ${aNum} de los términos con x² y x.`,
        },
        {
          title: 'Paso 3: Calcular el término para completar el cuadrado',
          description: 'Calculamos (b/(2a))² para completar el trinomio',
          expression: `(b/(2a))² = (${bNum}/(2×${aNum}))² = ${halfBOverA}² = ${halfBOverASquared.toFixed(4)}`,
          explanation: `Dividimos el coeficiente de x dentro del paréntesis (${bNum / aNum}) por 2 y lo elevamos al cuadrado.`,
        },
        {
          title: 'Paso 4: Sumar y restar el término calculado',
          description: 'Sumamos y restamos el mismo valor dentro del paréntesis',
          expression: `f(x) = ${aNum}(x² + ${bNum / aNum}x + ${halfBOverASquared.toFixed(4)} - ${halfBOverASquared.toFixed(4)}) + ${cNum}`,
          explanation: `Sumamos y restamos ${halfBOverASquared.toFixed(4)} dentro del paréntesis.`,
        },
        {
          title: 'Paso 5: Factorizar el trinomio cuadrado perfecto',
          description: 'El trinomio es un cuadrado perfecto',
          expression: `f(x) = ${aNum}[(x + ${halfBOverA.toFixed(4)})² - ${halfBOverASquared.toFixed(4)}] + ${cNum}`,
          explanation: `El trinomio es el cuadrado de (x + ${halfBOverA.toFixed(4)}).`,
        },
        {
          title: 'Paso 6: Distribuir a y simplificar',
          description: 'Multiplicamos a por cada término y simplificamos',
          expression: `f(x) = ${aNum}(x + ${halfBOverA.toFixed(4)})² - ${(aNum * halfBOverASquared).toFixed(4)} + ${cNum}`,
          explanation: `Distribuimos ${aNum} y luego simplificamos los términos constantes.`,
        },
        {
          title: 'Paso 7: Forma canónica final',
          description: 'Obtenemos la forma canónica',
          expression: `f(x) = ${aNum}(x - (${-halfBOverA.toFixed(4)}))² + ${constant.toFixed(4)}`,
          explanation: `El vértice es (h, k) = (${h.toFixed(4)}, ${k.toFixed(4)}).`,
        },
      ];
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
              Visualizador: Completar el Cuadrado
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              Aprende el método de completar el cuadrado paso a paso. Este método transforma una
              función cuadrática de forma general a forma canónica, revelando el vértice.
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
                onChange={(e) => {
                  setA(e.target.value);
                  setCurrentStep(0);
                }}
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
                onChange={(e) => {
                  setB(e.target.value);
                  setCurrentStep(0);
                }}
                placeholder="6"
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
                onChange={(e) => {
                  setC(e.target.value);
                  setCurrentStep(0);
                }}
                placeholder="5"
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

          {isValid && steps.length > 0 && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border">
                <p className="text-lg font-mono text-center">
                  f(x) = {formatFunction()}
                </p>
              </div>

              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    variant="outline"
                    disabled={currentStep === 0}
                  >
                    ← Anterior
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    variant="outline"
                    disabled={currentStep === steps.length - 1}
                  >
                    Siguiente →
                  </Button>
                </div>
                <Badge variant="outline">
                  Paso {currentStep + 1} de {steps.length}
                </Badge>
              </div>

              <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900">
                <CardHeader>
                  <CardTitle className="text-purple-900 dark:text-purple-100">
                    {steps[currentStep].title}
                  </CardTitle>
                  <CardDescription className="text-purple-800 dark:text-purple-200">
                    {steps[currentStep].description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-purple-200 dark:border-purple-900">
                    <p className="text-xl font-mono text-center text-purple-900 dark:text-purple-100">
                      {steps[currentStep].expression}
                    </p>
                  </div>
                  <p className="text-purple-800 dark:text-purple-200">
                    {steps[currentStep].explanation}
                  </p>
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button onClick={() => setCurrentStep(0)} variant="outline" size="sm">
                  Reiniciar
                </Button>
                <Button
                  onClick={() => setCurrentStep(steps.length - 1)}
                  variant="outline"
                  size="sm"
                >
                  Ver Resultado Final
                </Button>
              </div>
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

