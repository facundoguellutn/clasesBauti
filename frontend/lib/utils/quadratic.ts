import { GraphPoint, QuadraticFunctionData } from '@/lib/types';

/**
 * Calcula el valor de una función cuadrática para un valor de x
 */
export function evaluateQuadratic(a: number, b: number, c: number, x: number): number {
  return a * x * x + b * x + c;
}

/**
 * Obtiene el vértice de una parábola
 */
export function getVertex(a: number, b: number, c: number): { x: number; y: number } {
  const h = -b / (2 * a);
  const k = evaluateQuadratic(a, b, c, h);
  return { x: h, y: k };
}

/**
 * Calcula el discriminante
 */
export function getDiscriminant(a: number, b: number, c: number): number {
  return b * b - 4 * a * c;
}

/**
 * Obtiene las raíces de una función cuadrática
 */
export function getRoots(a: number, b: number, c: number): number[] {
  const discriminant = getDiscriminant(a, b, c);

  if (discriminant < 0) {
    return []; // Sin raíces reales
  } else if (discriminant === 0) {
    return [-b / (2 * a)]; // Una raíz doble
  } else {
    const sqrt = Math.sqrt(discriminant);
    const x1 = (-b + sqrt) / (2 * a);
    const x2 = (-b - sqrt) / (2 * a);
    return [x2, x1].sort((a, b) => a - b); // Ordenadas
  }
}

/**
 * Genera puntos para graficar una función cuadrática
 */
export function generateQuadraticPoints(
  a: number,
  b: number,
  c: number,
  xMin: number = -10,
  xMax: number = 10,
  step: number = 0.1
): GraphPoint[] {
  const points: GraphPoint[] = [];

  for (let x = xMin; x <= xMax; x += step) {
    const y = evaluateQuadratic(a, b, c, x);
    points.push({ x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 });
  }

  return points;
}

/**
 * Obtiene información completa sobre una función cuadrática
 */
export function analyzeQuadratic(a: number, b: number, c: number): QuadraticFunctionData {
  const vertex = getVertex(a, b, c);
  const roots = getRoots(a, b, c);
  const discriminant = getDiscriminant(a, b, c);

  return {
    a,
    b,
    c,
    vertex,
    roots: roots.length > 0 ? roots : undefined,
    axis: vertex.x,
    yIntercept: c,
  };
}

/**
 * Valida si los coeficientes forman una función cuadrática válida
 */
export function isValidQuadratic(a: number, b: number, c: number): boolean {
  return a !== 0 && isFinite(a) && isFinite(b) && isFinite(c);
}

/**
 * Obtiene el rango de x recomendado basado en el vértice
 */
export function getRecommendedXRange(a: number, b: number, c: number): [number, number] {
  const vertex = getVertex(a, b, c);
  const margin = Math.abs(a) < 1 ? 15 : Math.abs(a) < 2 ? 10 : 5;

  return [vertex.x - margin, vertex.x + margin];
}

/**
 * Obtiene el rango de y recomendado basado en el vértice y coeficiente a
 */
export function getRecommendedYRange(a: number, b: number, c: number): [number, number] {
  const vertex = getVertex(a, b, c);
  const margin = Math.abs(a) < 1 ? 15 : Math.abs(a) < 2 ? 10 : 5;

  if (a > 0) {
    // Abre hacia arriba
    return [vertex.y - 2, vertex.y + margin];
  } else {
    // Abre hacia abajo
    return [vertex.y - margin, vertex.y + 2];
  }
}

/**
 * Formatea la información de una función cuadrática
 */
export function formatQuadraticInfo(a: number, b: number, c: number): string {
  const analysis = analyzeQuadratic(a, b, c);
  let info = `f(x) = ${a}x² + ${b}x + ${c}\n`;
  info += `Vértice: (${analysis.vertex.x.toFixed(2)}, ${analysis.vertex.y.toFixed(2)})\n`;
  info += `Eje de simetría: x = ${analysis.axis?.toFixed(2)}\n`;
  info += `Intersección Y: (0, ${analysis.yIntercept})\n`;

  if (analysis.roots && analysis.roots.length > 0) {
    info += `Raíces: ${analysis.roots.map((r) => r.toFixed(2)).join(', ')}\n`;
  } else {
    info += `Raíces: Sin raíces reales\n`;
  }

  return info;
}
