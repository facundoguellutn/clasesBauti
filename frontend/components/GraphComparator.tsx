'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuadraticGraph } from './QuadraticGraph';

interface GraphComparatorProps {
  functions: Array<{
    a: number;
    b: number;
    c: number;
    label: string;
    color?: string;
  }>;
  showDescription?: boolean;
}

export function GraphComparator({ functions, showDescription = true }: GraphComparatorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const formatFunction = (a: number, b: number, c: number) => {
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

  return (
    <div className="space-y-6">
      {showDescription && (
        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              Comparador de Gráficas
            </CardTitle>
            <CardDescription className="text-blue-800 dark:text-blue-200">
              Compara múltiples funciones cuadráticas lado a lado para entender cómo los
              coeficientes afectan la forma de las parábolas.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <Tabs value={selectedIndex.toString()} onValueChange={(v) => setSelectedIndex(parseInt(v))}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {functions.map((func, index) => (
            <TabsTrigger key={index} value={index.toString()}>
              {func.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {functions.map((func, index) => (
          <TabsContent key={index} value={index.toString()} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{func.label}</CardTitle>
                <CardDescription className="font-mono text-lg">
                  f(x) = {formatFunction(func.a, func.b, func.c)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QuadraticGraph
                  a={func.a}
                  b={func.b}
                  c={func.c}
                  title={`${func.label}: f(x) = ${formatFunction(func.a, func.b, func.c)}`}
                  showVertex={true}
                  showRoots={true}
                  showAxisOfSymmetry={true}
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Comparación lado a lado en grid */}
      <Card>
        <CardHeader>
          <CardTitle>Vista Comparativa</CardTitle>
          <CardDescription>
            Todas las funciones en una sola vista para comparar fácilmente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {functions.map((func, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{func.label}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                  f(x) = {formatFunction(func.a, func.b, func.c)}
                </p>
                <QuadraticGraph
                  a={func.a}
                  b={func.b}
                  c={func.c}
                  title=""
                  showVertex={true}
                  showRoots={true}
                  showAxisOfSymmetry={false}
                  height={250}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

