import { Exercise } from '@/lib/types';

export const quadraticExercises: Exercise[] = [
  {
    id: 'ex-qf-01',
    topicId: 'funciones-cuadraticas',
    slug: 'identificar-coeficientes-1',
    title: 'Identificar Coeficientes (EB01)',
    description: 'Identifica los coeficientes a, b y c de una función cuadrática.',
    statement: 'Para la función f(x) = 2x² + 5x - 3, identifica los valores de a, b y c, y determina si la parábola abre hacia arriba o hacia abajo.',
    difficulty: 'basic',
    order: 1,
    type: 'fill-blank',
    hints: [
      'La forma general es f(x) = ax² + bx + c',
      'Observa los coeficientes de cada término',
      'Si a > 0, la parábola abre hacia arriba; si a < 0, hacia abajo',
    ],
    solution: {
      answer: 'a = 2, b = 5, c = -3, abre hacia arriba',
      explanation: 'En la función f(x) = 2x² + 5x - 3, el coeficiente del término x² es 2 (este es a), el coeficiente del término x es 5 (este es b), y el término constante es -3 (este es c). Como a = 2 > 0, la parábola abre hacia arriba.',
      steps: [
        'Identificar el término x²: el coeficiente es 2, entonces a = 2',
        'Identificar el término x: el coeficiente es 5, entonces b = 5',
        'Identificar el término constante: es -3, entonces c = -3',
        'Como a = 2 > 0, la parábola abre hacia arriba',
      ],
    },
  },
  {
    id: 'ex-qf-02',
    topicId: 'funciones-cuadraticas',
    slug: 'identificar-coeficientes-2',
    title: 'Identificar Coeficientes (EB02)',
    description: 'Identifica los coeficientes a, b y c de una función cuadrática.',
    statement: 'Para la función f(x) = -x² + 4x, identifica los valores de a, b y c, y determina si la parábola abre hacia arriba o hacia abajo.',
    difficulty: 'basic',
    order: 2,
    type: 'fill-blank',
    hints: [
      'Observa que no hay término constante',
      'Un coeficiente implícito de 1 (o -1) es igual a 1 (o -1)',
    ],
    solution: {
      answer: 'a = -1, b = 4, c = 0, abre hacia abajo',
      explanation: 'En f(x) = -x² + 4x, el coeficiente de x² es -1 (este es a), el coeficiente de x es 4 (este es b), y no hay término constante, así que c = 0. Como a = -1 < 0, la parábola abre hacia abajo.',
      steps: [
        'El coeficiente de x² es -1, entonces a = -1',
        'El coeficiente de x es 4, entonces b = 4',
        'No hay término constante, entonces c = 0',
        'Como a = -1 < 0, la parábola abre hacia abajo',
      ],
    },
  },
  {
    id: 'ex-qf-03',
    topicId: 'funciones-cuadraticas',
    slug: 'encontrar-vertice-1',
    title: 'Encontrar el Vértice (EB06)',
    description: 'Calcula las coordenadas del vértice de una parábola.',
    statement: 'Encuentra el vértice de la función f(x) = x² - 6x + 8.',
    difficulty: 'basic',
    order: 3,
    type: 'calculation',
    hints: [
      'Usa la fórmula para la coordenada x del vértice: x = -b/(2a)',
      'Una vez que tengas x, sustituye en f(x) para obtener y',
      'El vértice es el punto (x, y)',
    ],
    solution: {
      answer: 'V(3, -1)',
      explanation: 'Para f(x) = x² - 6x + 8, con a=1, b=-6, c=8: La coordenada x del vértice es x = -(-6)/(2·1) = 6/2 = 3. Sustituyendo: f(3) = 3² - 6(3) + 8 = 9 - 18 + 8 = -1. Por lo tanto, el vértice está en (3, -1).',
      steps: [
        'Identificar a = 1, b = -6, c = 8',
        'Calcular x del vértice: x = -b/(2a) = -(-6)/(2·1) = 3',
        'Calcular y: f(3) = 3² - 6(3) + 8 = 9 - 18 + 8 = -1',
        'El vértice es V(3, -1)',
      ],
    },
  },
  {
    id: 'ex-qf-04',
    topicId: 'funciones-cuadraticas',
    slug: 'encontrar-raices-1',
    title: 'Encontrar Raíces (EB11)',
    description: 'Encuentra los puntos donde la parábola cruza el eje X.',
    statement: 'Encuentra las raíces de f(x) = x² - 4x + 3. También identifica el punto de intersección con el eje Y.',
    difficulty: 'intermediate',
    order: 4,
    type: 'calculation',
    hints: [
      'Para raíces, resuelve f(x) = 0',
      'Intenta factorizar x² - 4x + 3',
      'Para intersección con Y, calcula f(0)',
    ],
    solution: {
      answer: 'Raíces: x = 1 y x = 3; Intersección con Y: (0, 3)',
      explanation: 'Para f(x) = x² - 4x + 3: Resolvemos x² - 4x + 3 = 0. Factorizando: (x - 1)(x - 3) = 0, entonces x = 1 o x = 3. Para la intersección con Y: f(0) = 0² - 4(0) + 3 = 3, así que el punto es (0, 3).',
      steps: [
        'Factorizar: x² - 4x + 3 = (x - 1)(x - 3)',
        'Igualar a cero: (x - 1)(x - 3) = 0',
        'Las raíces son x = 1 y x = 3',
        'Para intersección Y: f(0) = 3, así que el punto es (0, 3)',
      ],
    },
  },
  {
    id: 'ex-qf-05',
    topicId: 'funciones-cuadraticas',
    slug: 'discriminante-1',
    title: 'Discriminante (EB15)',
    description: 'Usa el discriminante para clasificar las soluciones.',
    statement: 'Calcula el discriminante para f(x) = x² + 4x + 4 y determina cuántas raíces reales tiene.',
    difficulty: 'intermediate',
    order: 5,
    type: 'calculation',
    hints: [
      'El discriminante es Δ = b² - 4ac',
      'Si Δ > 0 hay 2 raíces, si Δ = 0 hay 1 raíz, si Δ < 0 no hay raíces reales',
    ],
    solution: {
      answer: 'Δ = 0; Una raíz real doble: x = -2',
      explanation: 'Para f(x) = x² + 4x + 4, con a=1, b=4, c=4: Δ = 4² - 4(1)(4) = 16 - 16 = 0. Como Δ = 0, hay exactamente una raíz real (doble). Resolviendo: x = -4/(2·1) = -2.',
      steps: [
        'Identificar a = 1, b = 4, c = 4',
        'Calcular discriminante: Δ = b² - 4ac = 16 - 16 = 0',
        'Como Δ = 0, hay una raíz doble',
        'La raíz es x = -4/2 = -2',
        'Verificación: f(x) = (x + 2)², confirma raíz doble en x = -2',
      ],
    },
  },
  {
    id: 'ex-qf-06',
    topicId: 'funciones-cuadraticas',
    slug: 'forma-canonica-conversion',
    title: 'Convertir a Forma Canónica (EB17)',
    description: 'Convierte una función de forma general a forma canónica.',
    statement: 'Convierte f(x) = x² - 10x + 20 a la forma canónica f(x) = a(x - h)² + k.',
    difficulty: 'advanced',
    order: 6,
    type: 'calculation',
    hints: [
      'Completa el cuadrado',
      'Recuerda que (x - h)² = x² - 2hx + h²',
      'La forma final debe mostrar el vértice (h, k) claramente',
    ],
    solution: {
      answer: 'f(x) = (x - 5)² - 5',
      explanation: 'Para f(x) = x² - 10x + 20, completamos el cuadrado: f(x) = x² - 10x + 25 - 25 + 20 = (x - 5)² - 5. En la forma canónica, el vértice es V(5, -5).',
      steps: [
        'Tomar x² - 10x',
        'Completar el cuadrado: (10/2)² = 25',
        'f(x) = (x² - 10x + 25) - 25 + 20',
        'f(x) = (x - 5)² - 5',
        'Vértice: V(5, -5)',
      ],
    },
  },
  {
    id: 'ex-qf-07',
    topicId: 'funciones-cuadraticas',
    slug: 'forma-factorizada-conversion',
    title: 'Convertir a Forma Factorizada (EB16)',
    description: 'Expresa una función en forma factorizada.',
    statement: 'Convierte f(x) = x² + 8x + 15 a la forma factorizada f(x) = a(x - r₁)(x - r₂).',
    difficulty: 'intermediate',
    order: 7,
    type: 'calculation',
    hints: [
      'Necesitas encontrar dos números que multipliquen a 15 y sumen a 8',
      'Los números son 3 y 5',
      'x² + 8x + 15 = (x + 3)(x + 5)',
    ],
    solution: {
      answer: 'f(x) = (x + 3)(x + 5)',
      explanation: 'Para f(x) = x² + 8x + 15: Buscamos dos números que multipliquen a 15 y sumen a 8. Esos números son 3 y 5. Por lo tanto: f(x) = (x + 3)(x + 5). Las raíces son x = -3 y x = -5.',
      steps: [
        'Necesitamos factorizar x² + 8x + 15',
        'Buscamos: (x + ?)(x + ?)',
        'Los números deben multiplicar a 15 y sumar a 8',
        'Esos números son 3 y 5',
        'f(x) = (x + 3)(x + 5)',
        'Raíces: x = -3 y x = -5',
      ],
    },
  },
  {
    id: 'ex-qf-08',
    topicId: 'funciones-cuadraticas',
    slug: 'interseccion-funcion-y-recta',
    title: 'Intersección Parábola-Recta',
    description: 'Encuentra puntos de intersección entre una parábola y una recta.',
    statement: 'Encuentra los puntos de intersección entre f(x) = x² y g(x) = 2x + 3.',
    difficulty: 'intermediate',
    order: 8,
    type: 'calculation',
    hints: [
      'Iguala f(x) = g(x)',
      'Esto te da x² = 2x + 3',
      'Reordena a forma estándar y resuelve',
    ],
    solution: {
      answer: 'Puntos de intersección: (3, 9) y (-1, 1)',
      explanation: 'Igualamos: x² = 2x + 3. Reordenamos: x² - 2x - 3 = 0. Factorizamos: (x - 3)(x + 1) = 0. Las soluciones son x = 3 y x = -1. Sustituyendo en g(x): g(3) = 9 y g(-1) = 1. Los puntos son (3, 9) y (-1, 1).',
      steps: [
        'Igualar: x² = 2x + 3',
        'Reordenar: x² - 2x - 3 = 0',
        'Factorizar: (x - 3)(x + 1) = 0',
        'Soluciones: x = 3 y x = -1',
        'Para x = 3: y = 2(3) + 3 = 9, punto (3, 9)',
        'Para x = -1: y = 2(-1) + 3 = 1, punto (-1, 1)',
      ],
    },
  },
];

export const getExerciseById = (id: string) => {
  return quadraticExercises.find(ex => ex.id === id);
};

export const getExerciseBySlug = (slug: string) => {
  return quadraticExercises.find(ex => ex.slug === slug);
};

export const getExercisesByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced') => {
  return quadraticExercises.filter(ex => ex.difficulty === difficulty);
};
