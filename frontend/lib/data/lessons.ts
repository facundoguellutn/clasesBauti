import { Lesson } from '@/lib/types';

export const quadraticLessons: Lesson[] = [
  {
    id: 'qf-01',
    topicId: 'funciones-cuadraticas',
    slug: 'introduccion',
    title: '01 - Introducción a las Funciones Cuadráticas',
    description: '¿Qué es una función y qué la hace cuadrática? Fundamentos esenciales para entender las funciones cuadráticas.',
    content: 'Aprenderemos qué son las funciones, cómo funcionan, y la característica especial que define a las funciones cuadráticas. Esta lección establece las bases para todo el tema.',
    order: 1,
    sections: [
      {
        id: 'qf-01-1',
        title: '¿Qué es una función?',
        type: 'definition',
        content: `Una función es una relación matemática que asigna exactamente una salida a cada entrada. Es como una máquina que transforma números.

CARACTERÍSTICAS PRINCIPALES:
• Cada entrada (valor de x) produce exactamente una salida (valor de f(x))
• No puede haber dos salidas diferentes para la misma entrada
• Se denota como f(x), donde:
  - f es el nombre de la función
  - x es la variable de entrada (variable independiente)
  - f(x) es el valor de salida (variable dependiente)

NOTACIÓN:
• f(x) = y significa "f de x es igual a y"
• El dominio es el conjunto de todos los valores de entrada posibles
• El rango (o codominio) es el conjunto de todos los valores de salida posibles`,
      },
      {
        id: 'qf-01-2',
        title: 'Ejemplo introductorio: Función Lineal',
        type: 'example',
        content: `Para entender mejor qué es una función, veamos un ejemplo simple de función lineal:

EJEMPLO: f(x) = x + 5

PASO 1: Entender la regla
Esta función dice: "toma cualquier número x, súmale 5, y ese es el resultado"

PASO 2: Calcular algunos valores
• Si x = 3, entonces f(3) = 3 + 5 = 8
• Si x = -2, entonces f(-2) = -2 + 5 = 3
• Si x = 0, entonces f(0) = 0 + 5 = 5
• Si x = 10, entonces f(10) = 10 + 5 = 15

PASO 3: Observar el patrón
Cada vez que aumentamos x en 1, f(x) aumenta en 1. Esto es característico de las funciones lineales.

IMPORTANTE: En una función, cada entrada tiene exactamente una salida. No puede haber ambigüedad.`,
      },
      {
        id: 'qf-01-3',
        title: '¿Qué hace que una función sea cuadrática?',
        type: 'formula',
        content: `Una función se llama CUADRÁTICA cuando la variable x tiene un exponente máximo de 2.

FORMA GENERAL:
f(x) = ax² + bx + c

DONDE:
• a, b y c son números reales llamados COEFICIENTES
• x es la variable
• La condición INDISPENSABLE es que a ≠ 0

¿POR QUÉ a ≠ 0?
Si a fuera 0, el término ax² desaparecería y tendríamos:
f(x) = 0·x² + bx + c = bx + c

Esto sería una función LINEAL, no cuadrática. Por eso a DEBE ser diferente de cero.`,
      },
      {
        id: 'qf-01-4',
        title: 'Ejemplos de Funciones Cuadráticas',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 2x² + 3x - 5
• a = 2 (positivo, diferente de cero) ✓
• b = 3
• c = -5
Esta ES una función cuadrática.

EJEMPLO 2: g(x) = -x² + 9
• a = -1 (negativo, pero diferente de cero) ✓
• b = 0 (está permitido que b sea cero)
• c = 9
Esta ES una función cuadrática.

EJEMPLO 3: h(x) = x² - 4x
• a = 1 (cuando no hay número, el coeficiente es 1) ✓
• b = -4
• c = 0 (está permitido que c sea cero)
Esta ES una función cuadrática.

EJEMPLO 4: j(x) = 5x²
• a = 5 ✓
• b = 0
• c = 0
Esta ES una función cuadrática (caso especial donde solo hay el término cuadrático).`,
      },
      {
        id: 'qf-01-5',
        title: 'Ejemplos de Funciones que NO son Cuadráticas',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 5x + 1
• No hay término con x²
• El exponente máximo es 1
• Esto es una función LINEAL, no cuadrática

EJEMPLO 2: f(x) = x³ - 2x²
• El exponente máximo es 3
• Esto es una función CÚBICA, no cuadrática

EJEMPLO 3: f(x) = √x + 3
• La variable está dentro de una raíz
• No es un polinomio
• No es cuadrática

EJEMPLO 4: f(x) = 0x² + 5x + 3 = 5x + 3
• Aunque parece tener x², el coeficiente a = 0
• Por lo tanto, NO es cuadrática (es lineal)

EJEMPLO 5: f(x) = 1/x + 2
• La variable está en el denominador
• No es un polinomio
• No es cuadrática`,
      },
      {
        id: 'qf-01-6',
        title: 'Identificando Coeficientes: Ejercicios Prácticos',
        type: 'example',
        content: `EJERCICIO 1: Identifica los coeficientes en f(x) = 3x² - 7x + 2
SOLUCIÓN:
• a = 3 (coeficiente de x²)
• b = -7 (coeficiente de x, incluyendo el signo)
• c = 2 (término constante)

EJERCICIO 2: Identifica los coeficientes en g(x) = -2x² + 5
SOLUCIÓN:
• a = -2
• b = 0 (no hay término con x)
• c = 5

EJERCICIO 3: Identifica los coeficientes en h(x) = x² - 4x
SOLUCIÓN:
• a = 1 (cuando no hay número visible, el coeficiente es 1)
• b = -4
• c = 0 (no hay término constante)

EJERCICIO 4: ¿Es cuadrática la función f(x) = 4x² - 3x + 1?
SOLUCIÓN:
Sí, porque:
• Tiene un término con x²
• El coeficiente a = 4 ≠ 0
• El exponente máximo es 2`,
      },
      {
        id: 'qf-01-7',
        title: 'Evaluando Funciones Cuadráticas',
        type: 'example',
        content: `Aprender a evaluar funciones cuadráticas es fundamental. Veamos ejemplos paso a paso:

EJEMPLO 1: Si f(x) = 2x² + 3x - 5, encuentra f(2)

PASO 1: Sustituir x por 2 en la función
f(2) = 2(2)² + 3(2) - 5

PASO 2: Resolver las operaciones en orden
f(2) = 2(4) + 3(2) - 5
f(2) = 8 + 6 - 5
f(2) = 9

RESPUESTA: f(2) = 9

EJEMPLO 2: Si g(x) = -x² + 4, encuentra g(-3)

PASO 1: Sustituir x por -3
g(-3) = -(-3)² + 4

PASO 2: Cuidado con los signos: (-3)² = 9
g(-3) = -(9) + 4
g(-3) = -9 + 4
g(-3) = -5

RESPUESTA: g(-3) = -5

EJEMPLO 3: Si h(x) = x² - 4x, encuentra h(0) y h(4)

Para h(0):
h(0) = (0)² - 4(0) = 0 - 0 = 0

Para h(4):
h(4) = (4)² - 4(4) = 16 - 16 = 0

INTERESANTE: Tanto h(0) como h(4) dan 0. Esto significa que 0 y 4 son las raíces de la función.`,
      },
      {
        id: 'qf-01-8',
        title: 'Tabla de Valores: Visualizando la Función',
        type: 'example',
        content: `Crear una tabla de valores nos ayuda a entender cómo se comporta una función cuadrática.

EJEMPLO: f(x) = x² - 4x + 3

Construyamos una tabla con algunos valores:

x    | f(x) = x² - 4x + 3 | Cálculo paso a paso
-----|-------------------|-------------------
-1   | 8                 | (-1)² - 4(-1) + 3 = 1 + 4 + 3 = 8
0    | 3                 | (0)² - 4(0) + 3 = 0 + 0 + 3 = 3
1    | 0                 | (1)² - 4(1) + 3 = 1 - 4 + 3 = 0
2    | -1                | (2)² - 4(2) + 3 = 4 - 8 + 3 = -1
3    | 0                 | (3)² - 4(3) + 3 = 9 - 12 + 3 = 0
4    | 3                 | (4)² - 4(4) + 3 = 16 - 16 + 3 = 3
5    | 8                 | (5)² - 4(5) + 3 = 25 - 20 + 3 = 8

OBSERVACIONES:
• f(1) = 0 y f(3) = 0: estos son los puntos donde la función cruza el eje X (raíces)
• El valor más pequeño es f(2) = -1: este es el vértice (punto mínimo)
• La función es simétrica alrededor de x = 2`,
      },
      {
        id: 'qf-01-9',
        title: 'Explorador Interactivo de Funciones',
        type: 'interactive',
        content: '',
        data: {
          type: 'coefficient-explorer',
          initialA: 1,
          initialB: 0,
          initialC: 0,
          showDescription: true,
        },
      },
      {
        id: 'qf-01-10',
        title: 'Aplicaciones en la Vida Real',
        type: 'text',
        content: `Las funciones cuadráticas aparecen en muchas situaciones del mundo real:

1. MOVIMIENTO DE PROYECTILES
Cuando lanzas un objeto, su altura sigue una trayectoria parabólica (cuadrática).
Ejemplo: h(t) = -5t² + 20t + 2 (altura en metros, tiempo en segundos)

2. ÁREAS Y GEOMETRÍA
El área de un cuadrado es A = lado², que es una función cuadrática.
Si el lado cambia, el área cambia cuadráticamente.

3. GANANCIAS Y PÉRDIDAS
En economía, muchas funciones de ganancia son cuadráticas.
Ejemplo: G(x) = -2x² + 100x - 500 (ganancia en función de unidades vendidas)

4. OPTIMIZACIÓN
Las funciones cuadráticas tienen un punto máximo o mínimo (el vértice), lo que es útil para optimizar procesos.

5. DISEÑO Y ARQUITECTURA
Los arcos parabólicos en arquitectura siguen formas cuadráticas.`,
      },
      {
        id: 'qf-01-11',
        title: 'Errores Comunes a Evitar',
        type: 'warning',
        content: `⚠️ ERROR 1: Olvidar que a ≠ 0
Si a = 0, la función NO es cuadrática. Es lineal.

⚠️ ERROR 2: Confundir el signo de los coeficientes
En f(x) = -3x² + 5x - 2:
• a = -3 (incluye el signo negativo)
• b = 5 (positivo)
• c = -2 (negativo)

⚠️ ERROR 3: No reconocer coeficientes implícitos
En f(x) = x², el coeficiente a = 1 (no es 0)
En f(x) = -x², el coeficiente a = -1

⚠️ ERROR 4: Confundir exponentes
x² es cuadrático, pero x³ es cúbico (no cuadrático)

⚠️ ERROR 5: Evaluar incorrectamente
Al evaluar f(-2) en f(x) = x²:
Correcto: f(-2) = (-2)² = 4
Incorrecto: f(-2) = -2² = -4 (esto sería -(2²))`,
      },
      {
        id: 'qf-01-12',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ Una función asigna exactamente una salida a cada entrada
✓ Una función cuadrática tiene la forma f(x) = ax² + bx + c
✓ El coeficiente a DEBE ser diferente de cero (a ≠ 0)
✓ Los coeficientes b y c pueden ser cero
✓ El exponente máximo de x es 2
✓ Sabemos identificar si una función es cuadrática o no
✓ Podemos evaluar funciones cuadráticas sustituyendo valores
✓ Las funciones cuadráticas tienen aplicaciones en la vida real

PRÓXIMOS PASOS:
En la siguiente lección veremos cómo se ven gráficamente las funciones cuadráticas: las parábolas.`,
      },
    ],
    keyPoints: [
      'Una función es una relación que asigna exactamente una salida a cada entrada',
      'Una función cuadrática tiene la forma f(x) = ax² + bx + c donde a ≠ 0',
      'El coeficiente a es el más importante: determina si es cuadrática y controla la forma',
      'Los coeficientes b y c pueden ser cero, pero a nunca puede ser cero',
      'El exponente máximo de x en una función cuadrática es 2',
      'Saber identificar y evaluar funciones cuadráticas es fundamental',
      'Las funciones cuadráticas modelan muchos fenómenos del mundo real',
    ],
  },
  {
    id: 'qf-02',
    topicId: 'funciones-cuadraticas',
    slug: 'intucion-grafica',
    title: '02 - Intuición Gráfica: La Parábola',
    description: 'La forma de la parábola y sus elementos visuales clave. Aprende a reconocer y entender las características gráficas de las funciones cuadráticas.',
    content: 'Entenderemos cómo se ven las funciones cuadráticas graficadas. La gráfica de toda función cuadrática es una curva en forma de "U" llamada parábola. Exploraremos sus características visuales fundamentales.',
    order: 2,
    sections: [
      {
        id: 'qf-02-1',
        title: 'Introducción: ¿Qué es una Parábola?',
        type: 'definition',
        content: `La gráfica de TODA función cuadrática es una curva llamada PARÁBOLA.

CARACTERÍSTICAS PRINCIPALES:
• Es una curva simétrica (tiene un eje de simetría vertical)
• Tiene forma de "U" o "U invertida"
• Es una curva suave y continua
• Se extiende infinitamente en ambas direcciones

DEFINICIÓN GEOMÉTRICA:
Una parábola es el conjunto de puntos que están a la misma distancia de:
• Un punto fijo llamado FOCO
• Una línea recta llamada DIRECTRIZ

Para este curso, nos enfocaremos en las propiedades visuales más importantes que nos ayudan a entender y trabajar con funciones cuadráticas.`,
      },
      {
        id: 'qf-02-2',
        title: 'La Parábola Básica: f(x) = x²',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 0,
          title: 'f(x) = x² - La parábola básica',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-02-3',
        title: 'Análisis de f(x) = x²',
        type: 'text',
        content: `La función más simple es f(x) = x². Analicémosla paso a paso:

CARACTERÍSTICAS:
• Vértice: (0, 0) - el punto más bajo
• Eje de simetría: x = 0 (el eje Y)
• Abre hacia ARRIBA (porque a = 1 > 0)
• Pasa por el origen (0, 0)
• Es simétrica respecto al eje Y

TABLA DE VALORES:
x    | f(x) = x²
-----|----------
-3   | 9
-2   | 4
-1   | 1
0    | 0  ← Vértice (mínimo)
1    | 1
2    | 4
3    | 9

OBSERVACIONES:
• Los valores negativos de x dan el mismo resultado que los positivos
• Esto demuestra la simetría
• El vértice es el punto más bajo (mínimo)`,
      },
      {
        id: 'qf-02-4',
        title: 'Concavidad: ¿Hacia Arriba o Hacia Abajo?',
        type: 'text',
        content: `La CONCAVIDAD nos dice la orientación de la "U". Esto lo determina el signo del coeficiente a.

REGLA FUNDAMENTAL:
• Si a > 0 → La parábola abre HACIA ARRIBA (forma de U)
• Si a < 0 → La parábola abre HACIA ABAJO (forma de U invertida)

¿POR QUÉ?
Cuando a es positivo, el término ax² siempre es positivo (o cero), haciendo que la función crezca hacia arriba.
Cuando a es negativo, el término ax² siempre es negativo (o cero), haciendo que la función crezca hacia abajo.`,
      },
      {
        id: 'qf-02-5',
        title: 'Parábola que Abre Hacia Arriba (a > 0)',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 2,
          b: 0,
          c: 0,
          title: 'f(x) = 2x² (a > 0, abre hacia arriba)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-02-6',
        title: 'Ejemplo: Parábola que Abre Hacia Arriba',
        type: 'example',
        content: `EJEMPLO: f(x) = 2x² - 3x + 1

ANÁLISIS:
• a = 2 (positivo) → Abre HACIA ARRIBA ✓
• Se parece a una "U sonriente"
• El punto más BAJO de la curva es el VÉRTICE
• El vértice representa un MÍNIMO
• La función tiene un valor mínimo pero no tiene máximo (crece infinitamente)

CARACTERÍSTICAS:
• Forma: U
• Vértice: punto más bajo
• Comportamiento: crece hacia ambos lados del vértice
• Aplicación: útil para encontrar valores mínimos (costos, distancias, etc.)`,
      },
      {
        id: 'qf-02-7',
        title: 'Parábola que Abre Hacia Abajo (a < 0)',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: -1,
          b: 0,
          c: 4,
          title: 'f(x) = -x² + 4 (a < 0, abre hacia abajo)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-02-8',
        title: 'Ejemplo: Parábola que Abre Hacia Abajo',
        type: 'example',
        content: `EJEMPLO: f(x) = -x² + 4x - 2

ANÁLISIS:
• a = -1 (negativo) → Abre HACIA ABAJO ✓
• Se parece a una "U triste" o una montaña
• El punto más ALTO de la curva es el VÉRTICE
• El vértice representa un MÁXIMO
• La función tiene un valor máximo pero no tiene mínimo (decrece infinitamente)

CARACTERÍSTICAS:
• Forma: U invertida (∩)
• Vértice: punto más alto
• Comportamiento: decrece hacia ambos lados del vértice
• Aplicación: útil para encontrar valores máximos (ganancias, alturas, etc.)

EJERCICIO: ¿La parábola de f(x) = 9 - x² abre hacia arriba o hacia abajo?
SOLUCIÓN: Reescribimos: f(x) = -x² + 9
El término con x² es -x², por lo que a = -1 (negativo)
Por lo tanto, abre HACIA ABAJO.`,
      },
      {
        id: 'qf-02-9',
        title: 'El Vértice: El Punto Clave',
        type: 'text',
        content: `El VÉRTICE es el punto MÁS IMPORTANTE de la parábola.

DEFINICIÓN:
El vértice es el punto donde la curva cambia de dirección.

PROPIEDADES:
• Si la parábola abre hacia arriba: el vértice es el punto MÁS BAJO (mínimo)
• Si la parábola abre hacia abajo: el vértice es el punto MÁS ALTO (máximo)
• El vértice siempre está en el eje de simetría
• Tiene coordenadas (h, k)
  - h: coordenada x del vértice
  - k: coordenada y del vértice (valor máximo o mínimo)

IMPORTANCIA:
• En aplicaciones prácticas, el vértice representa el valor óptimo
• Para maximizar ganancias: buscamos el vértice cuando a < 0
• Para minimizar costos: buscamos el vértice cuando a > 0`,
      },
      {
        id: 'qf-02-10',
        title: 'El Eje de Simetría',
        type: 'text',
        content: `El EJE DE SIMETRÍA es una línea vertical imaginaria que divide la parábola en dos mitades idénticas.

CARACTERÍSTICAS:
• Es una línea VERTICAL (paralela al eje Y)
• Pasa SIEMPRE por el VÉRTICE
• La ecuación es x = h (donde h es la coordenada x del vértice)
• Si doblas el papel por esta línea, ambas mitades coinciden perfectamente

PROPIEDAD ÚTIL:
Si conoces un punto de la parábola, puedes encontrar su punto simétrico:
• Si (p, q) está en la parábola
• Y el eje de simetría es x = h
• Entonces el punto simétrico es (2h - p, q)

EJEMPLO:
Si el vértice está en (3, 5), el eje de simetría es x = 3
Si (1, 2) está en la parábola, el punto simétrico es (5, 2)`,
      },
      {
        id: 'qf-02-11',
        title: 'Visualización del Eje de Simetría',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -6,
          c: 8,
          title: 'f(x) = x² - 6x + 8 (eje de simetría en x = 3)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-02-12',
        title: 'Comparación Visual: Arriba vs Abajo',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: 0, c: 0, label: 'Abre Arriba: f(x) = x²' },
            { a: -1, b: 0, c: 0, label: 'Abre Abajo: f(x) = -x²' },
            { a: 2, b: 0, c: 0, label: 'Estrecha Arriba: f(x) = 2x²' },
            { a: -2, b: 0, c: 0, label: 'Estrecha Abajo: f(x) = -2x²' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-02-13',
        title: 'Explorador Interactivo: Concavidad',
        type: 'interactive',
        content: '',
        data: {
          type: 'coefficient-explorer',
          initialA: 1,
          initialB: 0,
          initialC: 0,
          showDescription: false,
        },
      },
      {
        id: 'qf-02-14',
        title: 'Ejercicios de Identificación',
        type: 'example',
        content: `EJERCICIO 1: ¿Hacia dónde abre f(x) = 3x² - 5x + 2?
SOLUCIÓN:
• a = 3 (positivo)
• Por lo tanto, abre HACIA ARRIBA

EJERCICIO 2: ¿Hacia dónde abre g(x) = -2x² + 7x - 1?
SOLUCIÓN:
• a = -2 (negativo)
• Por lo tanto, abre HACIA ABAJO

EJERCICIO 3: ¿Hacia dónde abre h(x) = 5 - x²?
SOLUCIÓN:
Reescribimos: h(x) = -x² + 5
• a = -1 (negativo)
• Por lo tanto, abre HACIA ABAJO

EJERCICIO 4: ¿Hacia dónde abre j(x) = (x - 2)²?
SOLUCIÓN:
Desarrollamos: j(x) = x² - 4x + 4
• a = 1 (positivo)
• Por lo tanto, abre HACIA ARRIBA`,
      },
      {
        id: 'qf-02-15',
        title: 'Intuición Visual: Analogías',
        type: 'text',
        content: `Para recordar mejor, usa estas analogías:

PARÁBOLA QUE ABRE HACIA ARRIBA (a > 0):
• Como un tazón o cuenco
• Como una sonrisa :)
• Como un valle
• El vértice es el fondo (mínimo)

PARÁBOLA QUE ABRE HACIA ABAJO (a < 0):
• Como una montaña
• Como una ceja fruncida :(
• Como un arco
• El vértice es la cima (máximo)

EJE DE SIMETRÍA:
• Como un espejo que divide la parábola
• Como la línea central de un corazón
• Como el pliegue de un papel doblado`,
      },
      {
        id: 'qf-02-16',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ La gráfica de toda función cuadrática es una parábola
✓ Si a > 0: la parábola abre hacia arriba (forma U, vértice es mínimo)
✓ Si a < 0: la parábola abre hacia abajo (forma ∩, vértice es máximo)
✓ El vértice es el punto más importante (máximo o mínimo)
✓ El eje de simetría es una línea vertical que pasa por el vértice
✓ La parábola es simétrica respecto a su eje
✓ Podemos identificar la concavidad mirando el signo de a

PRÓXIMOS PASOS:
En la siguiente lección exploraremos en detalle cómo cada coeficiente (a, b, c) afecta la forma y posición de la parábola.`,
      },
    ],
    keyPoints: [
      'La gráfica de toda función cuadrática es una parábola (curva simétrica en forma de U)',
      'El signo de a determina la concavidad: a > 0 abre hacia arriba, a < 0 abre hacia abajo',
      'El vértice es el punto extremo: mínimo si abre arriba, máximo si abre abajo',
      'Existe un eje de simetría vertical que pasa siempre por el vértice',
      'La parábola es simétrica: si (p, q) está en la curva, su punto simétrico también',
      'El vértice representa el valor óptimo en aplicaciones prácticas',
      'Reconocer la concavidad es fundamental para entender el comportamiento de la función',
    ],
  },
  {
    id: 'qf-03',
    topicId: 'funciones-cuadraticas',
    slug: 'forma-general',
    title: '03 - Forma General: Coeficientes a, b y c',
    description: 'Entendiendo el papel de cada coeficiente. Aprende cómo a, b y c afectan la forma y posición de la parábola.',
    content: 'Exploraremos en detalle cómo cada coeficiente afecta la parábola. La forma general f(x) = ax² + bx + c nos da información valiosa sobre la gráfica sin necesidad de hacer cálculos complejos.',
    order: 3,
    sections: [
      {
        id: 'qf-03-1',
        title: 'Introducción: La Forma General',
        type: 'formula',
        content: `La forma general es la manera más común de ver una función cuadrática:

f(x) = ax² + bx + c

DONDE:
• a, b y c son números reales llamados COEFICIENTES
• x es la variable independiente
• La condición indispensable: a ≠ 0

IMPORTANCIA:
Analizar los coeficientes a, b y c nos da pistas importantes sobre la gráfica de la parábola sin necesidad de hacer cálculos complejos. Cada coeficiente tiene un efecto específico y reconocible.`,
      },
      {
        id: 'qf-03-2',
        title: 'El Coeficiente a: El Más Importante',
        type: 'text',
        content: `El coeficiente a es el MÁS IMPORTANTE porque controla dos aspectos fundamentales:

1. CONCAVIDAD (signo de a):
   • Si a > 0: la parábola abre HACIA ARRIBA
   • Si a < 0: la parábola abre HACIA ABAJO

2. AMPLITUD (valor absoluto de a):
   • Si |a| > 1: la parábola es MÁS ESTRECHA (crece o decrece más rápido)
   • Si 0 < |a| < 1: la parábola es MÁS ANCHA (crece o decrece más lento)
   • Si |a| = 1: amplitud estándar

REGLA CRÍTICA:
a NUNCA puede ser 0. Si a = 0, la función NO es cuadrática (sería lineal).`,
      },
      {
        id: 'qf-03-3',
        title: 'Visualización: Efecto del Coeficiente a',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 0.5, b: 0, c: 0, label: 'Ancha: f(x) = 0.5x²' },
            { a: 1, b: 0, c: 0, label: 'Normal: f(x) = x²' },
            { a: 2, b: 0, c: 0, label: 'Estrecha: f(x) = 2x²' },
            { a: 3, b: 0, c: 0, label: 'Muy Estrecha: f(x) = 3x²' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-03-4',
        title: 'Ejemplos Detallados: Coeficiente a',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 2x²
• a = 2 (positivo, |a| = 2 > 1)
• Concavidad: Abre HACIA ARRIBA (a > 0)
• Amplitud: ESTRECHA (|a| > 1, crece rápido)

EJEMPLO 2: f(x) = 0.5x²
• a = 0.5 (positivo, |a| = 0.5 < 1)
• Concavidad: Abre HACIA ARRIBA (a > 0)
• Amplitud: ANCHA (|a| < 1, crece lento)

EJEMPLO 3: f(x) = -3x²
• a = -3 (negativo, |a| = 3 > 1)
• Concavidad: Abre HACIA ABAJO (a < 0)
• Amplitud: ESTRECHA (|a| > 1, decrece rápido)

EJEMPLO 4: f(x) = -0.25x²
• a = -0.25 (negativo, |a| = 0.25 < 1)
• Concavidad: Abre HACIA ABAJO (a < 0)
• Amplitud: MUY ANCHA (|a| < 1, decrece lento)`,
      },
      {
        id: 'qf-03-5',
        title: 'El Coeficiente c: La Intersección con el Eje Y',
        type: 'text',
        content: `El coeficiente c es el MÁS FÁCIL de interpretar:

REGLA SIMPLE:
c es el punto donde la parábola corta el eje vertical (eje Y).

¿POR QUÉ?
La intersección con el eje Y se calcula cuando x = 0:
f(0) = a(0)² + b(0) + c = c

Por lo tanto, el punto de corte es (0, c).

CASOS ESPECIALES:
• Si c = 0: la parábola pasa por el origen (0, 0)
• Si c > 0: la parábola corta el eje Y por encima del origen
• Si c < 0: la parábola corta el eje Y por debajo del origen`,
      },
      {
        id: 'qf-03-6',
        title: 'Visualización: Efecto del Coeficiente c',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: 0, c: -2, label: 'c = -2: f(x) = x² - 2' },
            { a: 1, b: 0, c: 0, label: 'c = 0: f(x) = x²' },
            { a: 1, b: 0, c: 2, label: 'c = 2: f(x) = x² + 2' },
            { a: 1, b: 0, c: 4, label: 'c = 4: f(x) = x² + 4' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-03-7',
        title: 'Ejemplos: Coeficiente c',
        type: 'example',
        content: `EJEMPLO 1: f(x) = x² - 5x + 6
• c = 6
• Intersección con Y: (0, 6)
• La parábola corta el eje Y en el punto (0, 6)

EJEMPLO 2: g(x) = -x² + 3x
• c = 0
• Intersección con Y: (0, 0)
• La parábola pasa por el origen

EJEMPLO 3: h(x) = 2x² + 4x - 3
• c = -3
• Intersección con Y: (0, -3)
• La parábola corta el eje Y por debajo del origen

EJERCICIO: ¿Dónde corta el eje Y la función f(x) = 3x² - 7x + 2?
SOLUCIÓN: c = 2, por lo tanto corta en (0, 2)`,
      },
      {
        id: 'qf-03-8',
        title: 'El Coeficiente b: Posición del Vértice',
        type: 'text',
        content: `El coeficiente b es el MENOS INTUITIVO, ya que su efecto depende del signo de a.

EFECTO PRINCIPAL:
b influye en la POSICIÓN HORIZONTAL DEL VÉRTICE.

FÓRMULA DEL VÉRTICE:
La coordenada x del vértice se calcula con:
x_v = -b / (2a)

CASOS ESPECIALES:
• Si b = 0: el vértice está justo sobre el eje Y (x_v = 0)
  La parábola es perfectamente simétrica respecto al eje Y

• Si a y b tienen el MISMO SIGNO (ambos positivos o ambos negativos):
  El vértice estará a la IZQUIERDA del eje Y (x_v es negativo)

• Si a y b tienen DISTINTO SIGNO:
  El vértice estará a la DERECHA del eje Y (x_v es positivo)`,
      },
      {
        id: 'qf-03-9',
        title: 'Visualización: Efecto del Coeficiente b',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: -4, c: 0, label: 'b = -4: f(x) = x² - 4x' },
            { a: 1, b: -2, c: 0, label: 'b = -2: f(x) = x² - 2x' },
            { a: 1, b: 0, c: 0, label: 'b = 0: f(x) = x²' },
            { a: 1, b: 2, c: 0, label: 'b = 2: f(x) = x² + 2x' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-03-10',
        title: 'Ejemplos: Coeficiente b',
        type: 'example',
        content: `EJEMPLO 1: f(x) = x² - 4x + 3
• a = 1, b = -4
• a y b tienen distinto signo (a positivo, b negativo)
• x_v = -(-4) / (2×1) = 4/2 = 2
• El vértice está a la DERECHA del eje Y (x = 2)

EJEMPLO 2: g(x) = 2x² + 6x - 1
• a = 2, b = 6
• a y b tienen el mismo signo (ambos positivos)
• x_v = -6 / (2×2) = -6/4 = -1.5
• El vértice está a la IZQUIERDA del eje Y (x = -1.5)

EJEMPLO 3: h(x) = -x² + 4x
• a = -1, b = 4
• a y b tienen distinto signo (a negativo, b positivo)
• x_v = -4 / (2×(-1)) = -4/-2 = 2
• El vértice está a la DERECHA del eje Y (x = 2)

EJEMPLO 4: j(x) = 3x²
• a = 3, b = 0
• b = 0
• x_v = -0 / (2×3) = 0
• El vértice está SOBRE el eje Y (x = 0)`,
      },
      {
        id: 'qf-03-11',
        title: 'Tabla Resumen: Efecto de los Coeficientes',
        type: 'text',
        content: `RESUMEN VISUAL DEL EFECTO DE LOS COEFICIENTES:

┌─────────────┬──────────────────────────┬────────────────────┐
│ Coeficiente │ Pregunta que Responde    │ Efecto Visual      │
├─────────────┼──────────────────────────┼────────────────────┤
│ a (signo)   │ ¿Abre hacia arriba o     │ Orientación de la  │
│             │ hacia abajo?             │ "U"                │
├─────────────┼──────────────────────────┼────────────────────┤
│ a (valor)   │ ¿Es ancha o estrecha?    │ Amplitud de la     │
│             │                          │ parábola           │
├─────────────┼──────────────────────────┼────────────────────┤
│ b           │ ¿El vértice está a la    │ Desplazamiento     │
│             │ izquierda o derecha?     │ horizontal         │
├─────────────┼──────────────────────────┼────────────────────┤
│ c           │ ¿Dónde corta el eje Y?   │ Punto de corte     │
│             │                          │ vertical           │
└─────────────┴──────────────────────────┴────────────────────┘

REGLA DE ORO:
• a: controla la FORMA (concavidad y amplitud)
• b: controla la POSICIÓN HORIZONTAL
• c: controla la POSICIÓN VERTICAL (intersección Y)`,
      },
      {
        id: 'qf-03-12',
        title: 'Explorador Interactivo de Coeficientes',
        type: 'interactive',
        content: '',
        data: {
          type: 'coefficient-explorer',
          initialA: 1,
          initialB: 0,
          initialC: 0,
          showDescription: true,
        },
      },
      {
        id: 'qf-03-13',
        title: 'Ejercicios Prácticos: Identificar Efectos',
        type: 'example',
        content: `EJERCICIO 1: Analiza f(x) = 3x² - 6x + 2
SOLUCIÓN:
• a = 3 > 0 → Abre HACIA ARRIBA, ESTRECHA (|a| = 3 > 1)
• b = -6 → a y b tienen distinto signo → vértice a la DERECHA
• c = 2 → Intersección Y en (0, 2)

EJERCICIO 2: Analiza g(x) = -0.5x² + 4x - 1
SOLUCIÓN:
• a = -0.5 < 0 → Abre HACIA ABAJO, ANCHA (|a| = 0.5 < 1)
• b = 4 → a y b tienen distinto signo → vértice a la DERECHA
• c = -1 → Intersección Y en (0, -1)

EJERCICIO 3: Analiza h(x) = x² + 5
SOLUCIÓN:
• a = 1 > 0 → Abre HACIA ARRIBA, NORMAL (|a| = 1)
• b = 0 → Vértice SOBRE el eje Y (x = 0)
• c = 5 → Intersección Y en (0, 5)`,
      },
      {
        id: 'qf-03-14',
        title: 'Casos Especiales Importantes',
        type: 'text',
        content: `CASO 1: b = 0 y c = 0
f(x) = ax²
• Vértice en el origen (0, 0)
• Pasa por el origen
• Simétrica respecto al eje Y
• Ejemplo: f(x) = 2x²

CASO 2: b = 0
f(x) = ax² + c
• Vértice sobre el eje Y (x = 0)
• Simétrica respecto al eje Y
• Intersección Y en (0, c)
• Ejemplo: f(x) = -x² + 4

CASO 3: c = 0
f(x) = ax² + bx
• Pasa por el origen (0, 0)
• Una raíz siempre es x = 0
• Factor común: f(x) = x(ax + b)
• Ejemplo: f(x) = x² - 4x = x(x - 4)`,
      },
      {
        id: 'qf-03-15',
        title: 'Tip: Análisis Rápido',
        type: 'tip',
        content: `💡 TIP: Análisis Rápido de una Función Cuadrática

Para analizar rápidamente f(x) = ax² + bx + c:

1. MIRA a:
   ✓ ¿Es positivo o negativo? → Concavidad
   ✓ ¿Es mayor o menor que 1? → Amplitud

2. MIRA c:
   ✓ ¿Dónde corta el eje Y? → (0, c)

3. CALCULA el vértice:
   ✓ x_v = -b/(2a) → Posición horizontal
   ✓ y_v = f(x_v) → Valor máximo o mínimo

4. VERIFICA b:
   ✓ Si b = 0 → Simétrica respecto al eje Y
   ✓ Si a y b mismo signo → Vértice a la izquierda
   ✓ Si a y b distinto signo → Vértice a la derecha`,
      },
      {
        id: 'qf-03-16',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ El coeficiente a controla la concavidad (signo) y amplitud (valor absoluto)
✓ El coeficiente c es la intersección con el eje Y: punto (0, c)
✓ El coeficiente b afecta la posición horizontal del vértice
✓ Si b = 0, la parábola es simétrica respecto al eje Y
✓ Cada coeficiente tiene un efecto visual específico y reconocible
✓ Podemos predecir características de la parábola solo mirando los coeficientes
✓ La fórmula x_v = -b/(2a) nos da la posición horizontal del vértice

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos la forma canónica, que nos permite ver directamente el vértice de la parábola.`,
      },
    ],
    keyPoints: [
      'El coeficiente a es el más importante: controla concavidad (signo) y amplitud (valor absoluto)',
      'El coeficiente c es el más fácil: es directamente la intersección con el eje Y en (0, c)',
      'El coeficiente b afecta la posición horizontal del vértice según la fórmula x_v = -b/(2a)',
      'Si b = 0, la parábola es simétrica respecto al eje Y y el vértice está en x = 0',
      'Si |a| > 1, la parábola es más estrecha; si 0 < |a| < 1, es más ancha',
      'El signo de a y b juntos determina si el vértice está a la izquierda o derecha del eje Y',
      'Analizar los coeficientes nos permite predecir características de la parábola sin graficar',
    ],
  },
  {
    id: 'qf-04',
    topicId: 'funciones-cuadraticas',
    slug: 'forma-canonica',
    title: '04 - Forma Canónica: El Vértice',
    description: 'Expresar la función donde el vértice es evidente. Aprende a identificar y convertir a forma canónica.',
    content: 'La forma canónica muestra directamente el vértice. Si bien la forma general es útil, existe otra forma de escribir funciones cuadráticas que nos da información clave de un solo vistazo: la forma canónica.',
    order: 4,
    sections: [
      {
        id: 'qf-04-1',
        title: 'Introducción: ¿Qué es la Forma Canónica?',
        type: 'definition',
        content: `La forma canónica (también llamada forma de vértice) es una manera especial de escribir funciones cuadráticas que revela inmediatamente la posición del vértice.

VENTAJAS:
• El vértice es visible directamente
• Facilita entender transformaciones gráficas
• Útil para resolver problemas de optimización
• Muestra claramente desplazamientos horizontales y verticales

CUÁNDO USARLA:
• Cuando necesitas encontrar el vértice rápidamente
• Para entender cómo se transforma una parábola
• En problemas de máximos y mínimos`,
      },
      {
        id: 'qf-04-2',
        title: 'Definición de la Forma Canónica',
        type: 'formula',
        content: `La forma canónica de una función cuadrática es:

f(x) = a(x - h)² + k

DONDE:
• a es el mismo coeficiente de la forma general (controla la concavidad y amplitud)
• (h, k) son las coordenadas del VÉRTICE de la parábola
  - h: coordenada x del vértice
  - k: coordenada y del vértice

IMPORTANTE:
Esta forma es extremadamente útil porque nos dice DIRECTAMENTE dónde está el vértice sin necesidad de cálculos adicionales.`,
      },
      {
        id: 'qf-04-3',
        title: 'Interpretación de h y k',
        type: 'text',
        content: `INTERPRETACIÓN DE h:
h es la coordenada HORIZONTAL del vértice.

⚠️ ¡CUIDADO CON EL SIGNO DE h!
En la fórmula, el término es (x - h). Esto significa:
• Si ves (x - 3)², entonces h = 3. El vértice está en x = 3.
• Si ves (x + 5)², esto es lo mismo que (x - (-5))², así que h = -5.
  El vértice está en x = -5.

REGLA: h tiene el signo OPUESTO al que aparece en el paréntesis.

INTERPRETACIÓN DE k:
k es la coordenada VERTICAL del vértice.

El valor de k es DIRECTO:
• Si ves +2 al final, entonces k = 2
• Si ves -7 al final, entonces k = -7
• Si no hay término constante, entonces k = 0`,
      },
      {
        id: 'qf-04-4',
        title: 'Ejemplo 1: Identificar el Vértice',
        type: 'example',
        content: `EJEMPLO: f(x) = 2(x - 4)² + 5

PASO 1: Identificar a
a = 2 (la parábola abre hacia arriba y es estrecha)

PASO 2: Identificar h
El término es (x - 4)²
Por lo tanto, h = 4

PASO 3: Identificar k
El término constante es +5
Por lo tanto, k = 5

PASO 4: Escribir el vértice
Vértice: (h, k) = (4, 5)

RESPUESTA: El vértice está en el punto (4, 5)`,
      },
      {
        id: 'qf-04-5',
        title: 'Ejemplo 2: Vértice con h Negativo',
        type: 'example',
        content: `EJEMPLO: g(x) = 3(x + 5)² - 8

PASO 1: Identificar a
a = 3

PASO 2: Identificar h (¡cuidado con el signo!)
El término es (x + 5)²
Esto es (x - (-5))²
Por lo tanto, h = -5

PASO 3: Identificar k
El término constante es -8
Por lo tanto, k = -8

PASO 4: Escribir el vértice
Vértice: (h, k) = (-5, -8)

RESPUESTA: El vértice está en el punto (-5, -8)`,
      },
      {
        id: 'qf-04-6',
        title: 'Ejemplo 3: Múltiples Casos',
        type: 'example',
        content: `EJEMPLO A: h(x) = (x - 3)² - 1
• a = 1 (implícito)
• h = 3
• k = -1
• Vértice: (3, -1)

EJEMPLO B: j(x) = -2(x + 2)² + 7
• a = -2
• h = -2 (porque (x + 2) = (x - (-2)))
• k = 7
• Vértice: (-2, 7)

EJEMPLO C: k(x) = 4(x - 0)² + 3 = 4x² + 3
• a = 4
• h = 0
• k = 3
• Vértice: (0, 3)`,
      },
      {
        id: 'qf-04-7',
        title: 'Visualización: Forma Canónica',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -6,
          c: 8,
          title: 'f(x) = (x - 3)² - 1 (vértice en (3, -1))',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-04-8',
        title: 'De la Forma General a la Forma Canónica: Completar el Cuadrado',
        type: 'text',
        content: `A menudo, tendrás la función en forma general (ax² + bx + c) y necesitarás pasarla a forma canónica para encontrar el vértice.

EL MÉTODO: Completar el Cuadrado

Este método transforma ax² + bx + c en a(x - h)² + k, revelando el vértice.

¿POR QUÉ SE LLAMA "COMPLETAR EL CUADRADO"?
Porque convertimos el trinomio ax² + bx + c en un cuadrado perfecto más un término constante.

PROCESO GENERAL:
1. Separar el término constante
2. Completar el trinomio cuadrado perfecto
3. Factorizar y simplificar`,
      },
      {
        id: 'qf-04-9',
        title: 'Método Paso a Paso: Cuando a = 1',
        type: 'example',
        content: `EJEMPLO: Convertir f(x) = x² + 6x + 5 a forma canónica

PASO 1: Separar el término constante
f(x) = (x² + 6x) + 5
Agrupamos los términos que contienen x y dejamos c separado.

PASO 2: Calcular el término para completar el cuadrado
Tomamos el coeficiente de x (b = 6), lo dividimos por 2 y lo elevamos al cuadrado:
(b/2)² = (6/2)² = 3² = 9

PASO 3: Sumar y restar este término
Para no alterar la función, sumamos y restamos el mismo valor:
f(x) = (x² + 6x + 9 - 9) + 5

PASO 4: Factorizar el trinomio cuadrado perfecto
El trinomio (x² + 6x + 9) es el cuadrado perfecto de (x + 3):
f(x) = (x + 3)² - 9 + 5

PASO 5: Simplificar
f(x) = (x + 3)² - 4

RESULTADO: La forma canónica es f(x) = (x + 3)² - 4
Vértice: (-3, -4)`,
      },
      {
        id: 'qf-04-10',
        title: 'Método Paso a Paso: Cuando a ≠ 1',
        type: 'example',
        content: `EJEMPLO: Convertir f(x) = 2x² - 4x + 5 a forma canónica

PASO 1: Factorizar a de los términos con x
f(x) = 2(x² - 2x) + 5
Sacamos 2 como factor común de los términos con x² y x.

PASO 2: Completar el cuadrado dentro del paréntesis
El coeficiente de x dentro del paréntesis es -2.
Calculamos: (-2/2)² = (-1)² = 1
f(x) = 2(x² - 2x + 1 - 1) + 5

PASO 3: Factorizar el trinomio cuadrado perfecto
El trinomio (x² - 2x + 1) es el cuadrado de (x - 1):
f(x) = 2((x - 1)² - 1) + 5

PASO 4: Distribuir a y simplificar
f(x) = 2(x - 1)² - 2(1) + 5
f(x) = 2(x - 1)² - 2 + 5
f(x) = 2(x - 1)² + 3

RESULTADO: La forma canónica es f(x) = 2(x - 1)² + 3
Vértice: (1, 3)

⚠️ IMPORTANTE: Cuando distribuyes a, recuerda multiplicar por a el término que restas.`,
      },
      {
        id: 'qf-04-11',
        title: 'Visualizador Interactivo: Completar el Cuadrado',
        type: 'interactive',
        content: '',
        data: {
          type: 'completing-square',
          showDescription: true,
        },
      },
      {
        id: 'qf-04-12',
        title: 'Más Ejemplos: Completar el Cuadrado',
        type: 'example',
        content: `EJEMPLO 1: f(x) = x² - 8x + 12

PASO 1: f(x) = (x² - 8x) + 12
PASO 2: (-8/2)² = (-4)² = 16
PASO 3: f(x) = (x² - 8x + 16 - 16) + 12
PASO 4: f(x) = (x - 4)² - 16 + 12
PASO 5: f(x) = (x - 4)² - 4

Vértice: (4, -4)

EJEMPLO 2: g(x) = 3x² + 12x - 5

PASO 1: g(x) = 3(x² + 4x) - 5
PASO 2: (4/2)² = 2² = 4
PASO 3: g(x) = 3(x² + 4x + 4 - 4) - 5
PASO 4: g(x) = 3((x + 2)² - 4) - 5
PASO 5: g(x) = 3(x + 2)² - 12 - 5
PASO 6: g(x) = 3(x + 2)² - 17

Vértice: (-2, -17)`,
      },
      {
        id: 'qf-04-13',
        title: 'Errores Comunes al Completar el Cuadrado',
        type: 'warning',
        content: `⚠️ ERROR 1: Olvidar multiplicar por a al distribuir
Incorrecto: 2((x - 1)² - 1) + 5 = 2(x - 1)² - 1 + 5
Correcto: 2((x - 1)² - 1) + 5 = 2(x - 1)² - 2(1) + 5

⚠️ ERROR 2: Confundir el signo de h
Si tienes (x + 5)², NO es h = 5
Correcto: (x + 5)² = (x - (-5))², entonces h = -5

⚠️ ERROR 3: No dividir por 2 antes de elevar al cuadrado
Incorrecto: (6)² = 36
Correcto: (6/2)² = 3² = 9

⚠️ ERROR 4: Olvidar sumar y restar el mismo valor
Debes sumar Y restar para no cambiar la función

⚠️ ERROR 5: No simplificar al final
Siempre combina los términos constantes`,
      },
      {
        id: 'qf-04-14',
        title: 'Aplicaciones de la Forma Canónica',
        type: 'text',
        content: `La forma canónica es especialmente útil en:

1. PROBLEMAS DE OPTIMIZACIÓN
   El vértice representa el valor máximo o mínimo.
   Ejemplo: Maximizar ganancias, minimizar costos

2. TRANSFORMACIONES GRÁFICAS
   Facilita entender desplazamientos:
   • (x - h) desplaza horizontalmente
   • +k desplaza verticalmente

3. RESOLVER ECUACIONES
   A veces es más fácil resolver desde la forma canónica

4. ANÁLISIS RÁPIDO
   Puedes ver inmediatamente:
   • Dónde está el vértice
   • Hacia dónde abre la parábola
   • El eje de simetría (x = h)`,
      },
      {
        id: 'qf-04-15',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ La forma canónica es f(x) = a(x - h)² + k
✓ El vértice (h, k) es inmediatamente visible
✓ h tiene el signo opuesto al que aparece en el paréntesis
✓ k es el término constante (con su signo)
✓ El método de completar el cuadrado convierte forma general a canónica
✓ Cuando a ≠ 1, debemos factorizar a primero
✓ La forma canónica es útil para optimización y transformaciones

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos la forma factorizada, que muestra directamente las raíces de la función.`,
      },
    ],
    keyPoints: [
      'La forma canónica es f(x) = a(x - h)² + k donde (h, k) es el vértice',
      'El vértice es inmediatamente visible en la forma canónica sin cálculos adicionales',
      'h tiene el signo opuesto al que aparece en el paréntesis: (x + 5)² significa h = -5',
      'k es directamente el término constante con su signo',
      'El método de completar el cuadrado convierte forma general a canónica',
      'Cuando a ≠ 1, se debe factorizar a antes de completar el cuadrado',
      'La forma canónica es especialmente útil para problemas de optimización y transformaciones',
    ],
  },
  {
    id: 'qf-05',
    topicId: 'funciones-cuadraticas',
    slug: 'forma-factorizada',
    title: '05 - Forma Factorizada: Las Raíces',
    description: 'Expresar la función en términos de sus raíces. Aprende a identificar y usar la forma factorizada.',
    content: 'La forma factorizada muestra directamente las raíces. Además de la forma general y la canónica, existe una tercera forma muy útil para entender una función cuadrática: la forma factorizada.',
    order: 5,
    sections: [
      {
        id: 'qf-05-1',
        title: 'Introducción: ¿Qué son las Raíces?',
        type: 'definition',
        content: `Las RAÍCES (también llamadas CEROS o SOLUCIONES) de una función son los valores de x para los cuales la función vale cero.

DEFINICIÓN:
f(x) = 0 cuando x es una raíz

GRÁFICAMENTE:
Las raíces son los puntos donde la parábola CORTA o TOCA el eje X.

TIPOS DE RAÍCES:
Una función cuadrática puede tener:
• Dos raíces reales distintas: La parábola corta el eje X en dos puntos
• Una raíz real doble: La parábola toca el eje X en un solo punto (su vértice)
• Ninguna raíz real: La parábola nunca corta el eje X`,
      },
      {
        id: 'qf-05-2',
        title: 'Definición de la Forma Factorizada',
        type: 'formula',
        content: `La forma factorizada de una función cuadrática se escribe como:

f(x) = a(x - r₁)(x - r₂)

DONDE:
• a es el coeficiente principal (el mismo de siempre)
• r₁ y r₂ son las RAÍCES de la función

⚠️ ¡CUIDADO CON LOS SIGNOS!
Al igual que con h en la forma canónica, las raíces aparecen con el signo OPUESTO:
• Si una raíz es x = 3, el factor es (x - 3)
• Si una raíz es x = -5, el factor es (x - (-5)) = (x + 5)`,
      },
      {
        id: 'qf-05-3',
        title: 'Ejemplo 1: Identificar Raíces',
        type: 'example',
        content: `EJEMPLO: f(x) = 2(x - 1)(x - 3)

PASO 1: Identificar a
a = 2 (la parábola abre hacia arriba)

PASO 2: Identificar las raíces
• Factor 1: (x - 1) → raíz r₁ = 1
• Factor 2: (x - 3) → raíz r₂ = 3

PASO 3: Interpretar
Las raíces son x = 1 y x = 3
Esto significa que la parábola corta el eje X en los puntos (1, 0) y (3, 0)

VERIFICACIÓN:
f(1) = 2(1 - 1)(1 - 3) = 2(0)(-2) = 0 ✓
f(3) = 2(3 - 1)(3 - 3) = 2(2)(0) = 0 ✓`,
      },
      {
        id: 'qf-05-4',
        title: 'Ejemplo 2: Raíces con Signos Negativos',
        type: 'example',
        content: `EJEMPLO: g(x) = (x - 2)(x + 3)

PASO 1: Identificar a
a = 1 (implícito)

PASO 2: Identificar las raíces
• Factor 1: (x - 2) → raíz r₁ = 2
• Factor 2: (x + 3) = (x - (-3)) → raíz r₂ = -3

PASO 3: Interpretar
Las raíces son x = 2 y x = -3
La parábola corta el eje X en (2, 0) y (-3, 0)

DESARROLLANDO:
g(x) = (x - 2)(x + 3)
g(x) = x² + 3x - 2x - 6
g(x) = x² + x - 6`,
      },
      {
        id: 'qf-05-5',
        title: 'Visualización: Forma Factorizada',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 1,
          c: -6,
          title: 'f(x) = x² + x - 6 = (x + 3)(x - 2)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-05-6',
        title: 'Relación con el Gráfico',
        type: 'text',
        content: `La forma factorizada es muy potente porque nos da los puntos de corte con el eje X de manera explícita.

VENTAJAS:
• Vemos inmediatamente dónde la parábola corta el eje X
• Facilita graficar la función
• Útil para resolver ecuaciones cuadráticas
• Muestra la relación entre raíces y factores

SIMETRÍA Y VÉRTICE:
El vértice de la parábola se encuentra siempre en el punto medio de las raíces, debido a la simetría.

FÓRMULA:
h = (r₁ + r₂) / 2

Una vez que tienes h, puedes encontrar k calculando f(h).`,
      },
      {
        id: 'qf-05-7',
        title: 'Ejemplo: Encontrar el Vértice desde las Raíces',
        type: 'example',
        content: `EJEMPLO: Para f(x) = 2(x - 1)(x - 3), encuentra el vértice

PASO 1: Identificar las raíces
r₁ = 1, r₂ = 3

PASO 2: Calcular h (coordenada x del vértice)
h = (r₁ + r₂) / 2
h = (1 + 3) / 2
h = 4 / 2
h = 2

PASO 3: Calcular k (coordenada y del vértice)
k = f(h) = f(2)
k = 2(2 - 1)(2 - 3)
k = 2(1)(-1)
k = -2

PASO 4: Escribir el vértice
Vértice: (2, -2)

VERIFICACIÓN:
El vértice está en el punto medio de las raíces, lo cual tiene sentido por la simetría.`,
      },
      {
        id: 'qf-05-8',
        title: 'Caso Especial: Una Sola Raíz (Raíz Doble)',
        type: 'text',
        content: `Si la función tiene una sola raíz real, significa que r₁ = r₂. En este caso, la forma factorizada es:

f(x) = a(x - r)²

CARACTERÍSTICAS:
• Esto es, en realidad, la forma canónica con k = 0
• El vértice está justo sobre el eje X, en el punto (r, 0)
• La parábola TOCA el eje X pero no lo cruza
• Se llama "raíz doble" porque el factor (x - r) aparece dos veces

EJEMPLO:
f(x) = 3(x - 4)²
• La única raíz es x = 4
• El vértice es (4, 0)
• La parábola toca el eje X en x = 4`,
      },
      {
        id: 'qf-05-9',
        title: 'Visualización: Raíz Doble',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -4,
          c: 4,
          title: 'f(x) = x² - 4x + 4 = (x - 2)² (raíz doble en x = 2)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-05-10',
        title: 'Caso Especial: Sin Raíces Reales',
        type: 'warning',
        content: `⚠️ IMPORTANTE: Si la función no tiene raíces reales (la parábola no corta el eje X), NO se puede escribir en forma factorizada usando números reales.

CUÁNDO OCURRE:
Esto ocurre cuando el DISCRIMINANTE es negativo (Δ < 0).

EN ESTE CASO:
• Solo podemos usar la forma general o la canónica
• Las raíces existen pero son números complejos (imaginarios)
• La parábola está completamente por encima o por debajo del eje X

EJEMPLO:
f(x) = x² + 1
• No tiene raíces reales
• No se puede factorizar con números reales
• La parábola nunca toca el eje X`,
      },
      {
        id: 'qf-05-11',
        title: 'De Forma Factorizada a Forma General',
        type: 'example',
        content: `EJEMPLO: Desarrollar f(x) = 2(x - 1)(x - 3)

PASO 1: Multiplicar los factores
f(x) = 2[(x - 1)(x - 3)]

PASO 2: Multiplicar (x - 1)(x - 3)
(x - 1)(x - 3) = x² - 3x - x + 3
(x - 1)(x - 3) = x² - 4x + 3

PASO 3: Multiplicar por a
f(x) = 2(x² - 4x + 3)
f(x) = 2x² - 8x + 6

RESULTADO: La forma general es f(x) = 2x² - 8x + 6

VERIFICACIÓN:
Podemos verificar que las raíces son correctas:
f(1) = 2(1)² - 8(1) + 6 = 2 - 8 + 6 = 0 ✓
f(3) = 2(3)² - 8(3) + 6 = 18 - 24 + 6 = 0 ✓`,
      },
      {
        id: 'qf-05-12',
        title: 'Más Ejemplos',
        type: 'example',
        content: `EJEMPLO 1: h(x) = (x + 2)(x - 5)
• Raíces: x = -2 y x = 5
• Forma general: h(x) = x² - 3x - 10

EJEMPLO 2: j(x) = -3(x - 1)(x + 4)
• a = -3 (abre hacia abajo)
• Raíces: x = 1 y x = -4
• Forma general: j(x) = -3x² - 9x + 12

EJEMPLO 3: k(x) = 4(x - 2)²
• Raíz doble: x = 2
• Vértice: (2, 0)
• Forma general: k(x) = 4x² - 16x + 16`,
      },
      {
        id: 'qf-05-13',
        title: 'Aplicaciones de la Forma Factorizada',
        type: 'text',
        content: `La forma factorizada es especialmente útil para:

1. RESOLVER ECUACIONES
   Si f(x) = a(x - r₁)(x - r₂) = 0
   Entonces x = r₁ o x = r₂

2. GRAFICAR RÁPIDAMENTE
   Conoces inmediatamente los puntos de corte con el eje X

3. ENCONTRAR EL VÉRTICE
   h = (r₁ + r₂) / 2

4. ENTENDER EL COMPORTAMIENTO
   Ves claramente cómo la función cruza el eje X

5. FACTORIZAR EXPRESIONES
   Es la base para factorizar polinomios cuadráticos`,
      },
      {
        id: 'qf-05-14',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ La forma factorizada es f(x) = a(x - r₁)(x - r₂)
✓ Las raíces son los valores de x donde f(x) = 0
✓ Las raíces aparecen con signo opuesto en los factores
✓ El vértice está en el punto medio de las raíces: h = (r₁ + r₂)/2
✓ Una raíz doble significa que r₁ = r₂: f(x) = a(x - r)²
✓ Si no hay raíces reales, no se puede factorizar con números reales
✓ La forma factorizada facilita graficar y resolver ecuaciones

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos sobre el discriminante, que nos dice cuántas raíces tiene una función cuadrática.`,
      },
    ],
    keyPoints: [
      'La forma factorizada es f(x) = a(x - r₁)(x - r₂) donde r₁ y r₂ son las raíces',
      'Las raíces son los valores de x donde f(x) = 0, gráficamente donde la parábola corta el eje X',
      'Las raíces aparecen con signo opuesto en los factores: raíz x = 3 → factor (x - 3)',
      'El vértice está en el punto medio de las raíces: h = (r₁ + r₂)/2',
      'Una raíz doble significa r₁ = r₂ y la forma es f(x) = a(x - r)²',
      'Si no hay raíces reales (Δ < 0), no se puede factorizar con números reales',
      'La forma factorizada es útil para resolver ecuaciones y graficar rápidamente',
    ],
  },
  {
    id: 'qf-06',
    topicId: 'funciones-cuadraticas',
    slug: 'discriminante',
    title: '06 - Discriminante: Clasificación de Soluciones',
    description: 'Determinando si hay 0, 1 o 2 soluciones reales. Aprende a usar el discriminante para clasificar las raíces.',
    content: 'El discriminante nos dice cuántas raíces tiene la función. Para encontrar las raíces de una función cuadrática, a menudo usamos la fórmula general. Sin embargo, una pequeña parte de esa fórmula, llamada el discriminante, nos puede decir cuántas y qué tipo de raíces tiene la función sin necesidad de calcularlas por completo.',
    order: 6,
    sections: [
      {
        id: 'qf-06-1',
        title: 'Introducción: ¿Qué es el Discriminante?',
        type: 'definition',
        content: `El DISCRIMINANTE es una herramienta de diagnóstico rápido que nos permite "discriminar" entre diferentes tipos de raíces sin calcularlas completamente.

UTILIDAD:
Antes de embarcarte en cálculos largos para encontrar las raíces, calcula el discriminante. En segundos, sabrás a qué tipo de solución te enfrentas.

DE DÓNDE VIENE:
El discriminante aparece dentro de la fórmula cuadrática (que veremos más adelante). Es la expresión que está dentro de la raíz cuadrada.`,
      },
      {
        id: 'qf-06-2',
        title: 'Definición del Discriminante',
        type: 'formula',
        content: `Para una función cuadrática en forma general f(x) = ax² + bx + c, el discriminante se representa con la letra griega delta (Δ) y se calcula como:

Δ = b² - 4ac

COMPONENTES:
• b²: el cuadrado del coeficiente b
• 4ac: cuatro veces el producto de a y c
• La diferencia entre estos dos términos

IMPORTANTE:
El discriminante es un NÚMERO REAL que puede ser positivo, cero o negativo.`,
      },
      {
        id: 'qf-06-3',
        title: 'Caso 1: Δ > 0 (Discriminante Positivo)',
        type: 'text',
        content: `Si el discriminante es MAYOR que cero, la función tiene:

DOS RAÍCES REALES Y DISTINTAS

GRÁFICAMENTE:
La parábola corta el eje X en DOS PUNTOS DIFERENTES.

CARACTERÍSTICAS:
• Las dos raíces son números reales diferentes
• La parábola cruza el eje X (no solo lo toca)
• Se puede escribir en forma factorizada: f(x) = a(x - r₁)(x - r₂)`,
      },
      {
        id: 'qf-06-4',
        title: 'Ejemplo: Δ > 0',
        type: 'example',
        content: `EJEMPLO: f(x) = x² - 5x + 6

PASO 1: Identificar los coeficientes
a = 1, b = -5, c = 6

PASO 2: Calcular el discriminante
Δ = b² - 4ac
Δ = (-5)² - 4(1)(6)
Δ = 25 - 24
Δ = 1

PASO 3: Interpretar
Como Δ = 1 > 0, la función tiene DOS RAÍCES REALES DISTINTAS

PASO 4: Verificar (opcional)
Las raíces son x = 2 y x = 3 (distintas) ✓

GRÁFICAMENTE:
La parábola corta el eje X en los puntos (2, 0) y (3, 0)`,
      },
      {
        id: 'qf-06-5',
        title: 'Visualización: Dos Raíces (Δ > 0)',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -5,
          c: 6,
          title: 'f(x) = x² - 5x + 6 (Δ = 1 > 0, dos raíces distintas)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-06-6',
        title: 'Caso 2: Δ = 0 (Discriminante Cero)',
        type: 'text',
        content: `Si el discriminante es IGUAL a cero, la función tiene:

UNA RAÍZ REAL DOBLE (o dos raíces reales iguales)

GRÁFICAMENTE:
La parábola TOCA el eje X en un solo punto, que es su VÉRTICE.

CARACTERÍSTICAS:
• Las dos raíces son iguales: r₁ = r₂
• La parábola no cruza el eje X, solo lo toca
• Se puede escribir como: f(x) = a(x - r)²
• El vértice está exactamente sobre el eje X`,
      },
      {
        id: 'qf-06-7',
        title: 'Ejemplo: Δ = 0',
        type: 'example',
        content: `EJEMPLO: f(x) = x² - 4x + 4

PASO 1: Identificar los coeficientes
a = 1, b = -4, c = 4

PASO 2: Calcular el discriminante
Δ = b² - 4ac
Δ = (-4)² - 4(1)(4)
Δ = 16 - 16
Δ = 0

PASO 3: Interpretar
Como Δ = 0, la función tiene UNA RAÍZ REAL DOBLE

PASO 4: Verificar (opcional)
La única raíz es x = 2 (doble) ✓

GRÁFICAMENTE:
La parábola toca el eje X en el punto (2, 0), que es también el vértice`,
      },
      {
        id: 'qf-06-8',
        title: 'Visualización: Raíz Doble (Δ = 0)',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -4,
          c: 4,
          title: 'f(x) = x² - 4x + 4 (Δ = 0, raíz doble en x = 2)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-06-9',
        title: 'Caso 3: Δ < 0 (Discriminante Negativo)',
        type: 'text',
        content: `Si el discriminante es MENOR que cero, la función tiene:

NINGUNA RAÍZ REAL (dos raíces complejas conjugadas)

GRÁFICAMENTE:
La parábola NUNCA corta ni toca el eje X. Está completamente por encima (si a > 0) o completamente por debajo (si a < 0).

CARACTERÍSTICAS:
• Las dos raíces son números complejos (imaginarios)
• No se puede escribir en forma factorizada usando números reales
• La parábola no tiene intersección con el eje X
• Solo podemos usar la forma general o canónica`,
      },
      {
        id: 'qf-06-10',
        title: 'Ejemplo: Δ < 0',
        type: 'example',
        content: `EJEMPLO: f(x) = x² + 2x + 5

PASO 1: Identificar los coeficientes
a = 1, b = 2, c = 5

PASO 2: Calcular el discriminante
Δ = b² - 4ac
Δ = (2)² - 4(1)(5)
Δ = 4 - 20
Δ = -16

PASO 3: Interpretar
Como Δ = -16 < 0, la función NO TIENE RAÍCES REALES

PASO 4: Explicación
Las raíces existen pero son números complejos:
x = (-2 ± √(-16)) / 2 = (-2 ± 4i) / 2 = -1 ± 2i

GRÁFICAMENTE:
La parábola nunca toca el eje X. Está completamente por encima del eje X (porque a = 1 > 0)`,
      },
      {
        id: 'qf-06-11',
        title: 'Visualización: Sin Raíces Reales (Δ < 0)',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 1,
          title: 'f(x) = x² + 1 (Δ = -4 < 0, sin raíces reales)',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-06-12',
        title: 'Tabla Resumen: Interpretación del Discriminante',
        type: 'text',
        content: `RESUMEN COMPLETO:

┌─────────────┬──────────────────────────┬────────────────────────────┐
│ Valor de Δ  │ Tipo de Raíces          │ Interpretación Gráfica     │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ Δ > 0       │ Dos raíces reales       │ Corta el eje X en 2 puntos │
│             │ distintas               │                            │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ Δ = 0       │ Una raíz real doble     │ Toca el eje X en 1 punto   │
│             │ (r₁ = r₂)               │ (el vértice)               │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ Δ < 0       │ Dos raíces complejas    │ No corta ni toca el eje X  │
│             │ (no reales)             │                            │
└─────────────┴──────────────────────────┴────────────────────────────┘

REGLA DE ORO:
El discriminante es tu herramienta de diagnóstico. Calcúlalo primero antes de intentar encontrar las raíces.`,
      },
      {
        id: 'qf-06-13',
        title: 'Calculadora Interactiva del Discriminante',
        type: 'interactive',
        content: '',
        data: {
          type: 'discriminant-calculator',
          showDescription: true,
        },
      },
      {
        id: 'qf-06-14',
        title: 'Comparación Visual de los Tres Casos',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: -5, c: 6, label: 'Δ > 0: Dos raíces (x² - 5x + 6)' },
            { a: 1, b: -4, c: 4, label: 'Δ = 0: Raíz doble (x² - 4x + 4)' },
            { a: 1, b: 0, c: 1, label: 'Δ < 0: Sin raíces (x² + 1)' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-06-15',
        title: 'Ejercicios Prácticos',
        type: 'example',
        content: `EJERCICIO 1: Calcula el discriminante de f(x) = 2x² - 7x + 3
SOLUCIÓN:
a = 2, b = -7, c = 3
Δ = (-7)² - 4(2)(3) = 49 - 24 = 25
Como Δ = 25 > 0, hay DOS RAÍCES REALES DISTINTAS

EJERCICIO 2: Calcula el discriminante de g(x) = x² - 6x + 9
SOLUCIÓN:
a = 1, b = -6, c = 9
Δ = (-6)² - 4(1)(9) = 36 - 36 = 0
Como Δ = 0, hay UNA RAÍZ REAL DOBLE

EJERCICIO 3: Calcula el discriminante de h(x) = 3x² + 2x + 5
SOLUCIÓN:
a = 3, b = 2, c = 5
Δ = (2)² - 4(3)(5) = 4 - 60 = -56
Como Δ = -56 < 0, NO HAY RAÍCES REALES`,
      },
      {
        id: 'qf-06-16',
        title: 'Aplicaciones del Discriminante',
        type: 'text',
        content: `El discriminante es útil en muchas situaciones:

1. DIAGNÓSTICO RÁPIDO
   Antes de calcular raíces, saber cuántas hay

2. OPTIMIZACIÓN
   Determinar si una función tiene máximo o mínimo real

3. ANÁLISIS DE PROBLEMAS
   Saber si un problema tiene solución real

4. FACTORIZACIÓN
   Saber si se puede factorizar con números reales

5. GEOMETRÍA
   Determinar si una parábola intersecta una línea`,
      },
      {
        id: 'qf-06-17',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ El discriminante es Δ = b² - 4ac
✓ Si Δ > 0: dos raíces reales distintas (parábola corta eje X en 2 puntos)
✓ Si Δ = 0: una raíz real doble (parábola toca eje X en el vértice)
✓ Si Δ < 0: sin raíces reales (parábola no toca el eje X)
✓ El discriminante es una herramienta de diagnóstico rápido
✓ Nos permite saber el tipo de raíces sin calcularlas completamente
✓ Es especialmente útil antes de intentar factorizar o resolver

PRÓXIMOS PASOS:
En la siguiente lección veremos cómo se transforman las parábolas mediante desplazamientos y cambios de escala.`,
      },
    ],
    keyPoints: [
      'El discriminante es Δ = b² - 4ac y clasifica el tipo de raíces',
      'Si Δ > 0: dos raíces reales distintas (parábola corta el eje X en dos puntos)',
      'Si Δ = 0: una raíz real doble (parábola toca el eje X en el vértice)',
      'Si Δ < 0: sin raíces reales (parábola no toca el eje X, raíces complejas)',
      'El discriminante es una herramienta de diagnóstico rápido antes de calcular raíces',
      'Nos permite saber si podemos factorizar con números reales',
      'Es especialmente útil para determinar si un problema tiene solución real',
    ],
  },
  {
    id: 'qf-07',
    topicId: 'funciones-cuadraticas',
    slug: 'transformaciones-graficas',
    title: '07 - Transformaciones Gráficas',
    description: 'Cómo se desplazan y transforman las parábolas. Aprende a entender las parábolas como transformaciones de la parábola básica.',
    content: 'Una de las formas más intuitivas de entender las funciones cuadráticas es verlas como transformaciones de la parábola más simple: f(x) = x². Toda parábola es simplemente una versión desplazada, estirada o reflejada de esta parábola básica.',
    order: 7,
    sections: [
      {
        id: 'qf-07-1',
        title: 'Introducción: La Parábola Madre',
        type: 'definition',
        content: `La PARÁBOLA MADRE es la función más simple: f(x) = x²

CARACTERÍSTICAS:
• Abre hacia arriba (a = 1)
• Tiene su vértice en el origen (0, 0)
• Pasa por los puntos (1, 1) y (-1, 1)
• Es simétrica respecto al eje Y
• Es nuestra REFERENCIA para todas las transformaciones

IMPORTANCIA:
Toda parábola, sin importar cuán compleja parezca, es simplemente una versión transformada de esta parábola básica.`,
      },
      {
        id: 'qf-07-2',
        title: 'Visualización: La Parábola Madre',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 0,
          title: 'f(x) = x² - La parábola madre (referencia)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-07-3',
        title: 'Las 3 Transformaciones Básicas',
        type: 'text',
        content: `Analicemos cómo los parámetros a, h y k en la forma canónica f(x) = a(x - h)² + k modifican la parábola madre:

1. TRASLACIÓN VERTICAL (controlada por k)
   Mueve la parábola hacia arriba o hacia abajo

2. TRASLACIÓN HORIZONTAL (controlada por h)
   Mueve la parábola hacia la izquierda o la derecha

3. ESTIRAMIENTO Y REFLEJO (controlado por a)
   Estira, comprime o refleja la parábola

Cada transformación es independiente y se puede aplicar en cualquier orden.`,
      },
      {
        id: 'qf-07-4',
        title: 'Transformación 1: Traslación Vertical (k)',
        type: 'text',
        content: `El parámetro k mueve la parábola hacia arriba o hacia abajo.

REGLA:
• Si k > 0: la parábola se desplaza k unidades HACIA ARRIBA
• Si k < 0: la parábola se desplaza |k| unidades HACIA ABAJO

EFECTO EN EL VÉRTICE:
El vértice se mueve de (0, 0) a (0, k)

EJEMPLOS:
• f(x) = x² + 3: la parábola madre sube 3 unidades. Vértice en (0, 3)
• f(x) = x² - 4: la parábola madre baja 4 unidades. Vértice en (0, -4)
• f(x) = x²: la parábola madre no se mueve. Vértice en (0, 0)`,
      },
      {
        id: 'qf-07-5',
        title: 'Visualización: Traslación Vertical',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: 0, c: -2, label: 'k = -2: f(x) = x² - 2' },
            { a: 1, b: 0, c: 0, label: 'k = 0: f(x) = x² (madre)' },
            { a: 1, b: 0, c: 2, label: 'k = 2: f(x) = x² + 2' },
            { a: 1, b: 0, c: 4, label: 'k = 4: f(x) = x² + 4' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-07-6',
        title: 'Transformación 2: Traslación Horizontal (h)',
        type: 'text',
        content: `El parámetro h mueve la parábola hacia la izquierda o la derecha.

⚠️ ¡CUIDADO CON EL SIGNO!
El efecto es OPUESTO al signo que ves en la fórmula.

REGLA:
• Si h es positivo (ves x - h): la parábola se desplaza h unidades HACIA LA DERECHA
• Si h es negativo (ves x + h): la parábola se desplaza |h| unidades HACIA LA IZQUIERDA

EFECTO EN EL VÉRTICE:
El vértice se mueve de (0, 0) a (h, 0)

EJEMPLOS:
• f(x) = (x - 2)²: la parábola madre se mueve 2 unidades a la DERECHA. Vértice en (2, 0)
• f(x) = (x + 1)²: la parábola madre se mueve 1 unidad a la IZQUIERDA. Vértice en (-1, 0)
• f(x) = x²: la parábola madre no se mueve. Vértice en (0, 0)`,
      },
      {
        id: 'qf-07-7',
        title: 'Visualización: Traslación Horizontal',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: 1, b: 4, c: 4, label: 'h = -2: f(x) = (x + 2)²' },
            { a: 1, b: -2, c: 1, label: 'h = 1: f(x) = (x - 1)²' },
            { a: 1, b: 0, c: 0, label: 'h = 0: f(x) = x² (madre)' },
            { a: 1, b: -4, c: 4, label: 'h = 2: f(x) = (x - 2)²' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-07-8',
        title: 'Transformación 3: Estiramiento y Reflejo (a)',
        type: 'text',
        content: `El parámetro a hace DOS cosas simultáneamente:

1. REFLEJO (signo de a):
   • Si a es NEGATIVO: la parábola se REFLEJA verticalmente (se voltea hacia abajo)
   • Si a es POSITIVO: la parábola mantiene su orientación original

2. ESTIRAMIENTO O COMPRESIÓN (valor absoluto de a):
   • Si |a| > 1: la parábola se ESTIRA verticalmente (se hace más ESTRECHA)
   • Si 0 < |a| < 1: la parábola se COMPRIME verticalmente (se hace más ANCHA)
   • Si |a| = 1: la parábola mantiene su amplitud original

EJEMPLOS:
• f(x) = -x²: la parábola madre se REFLEJA hacia abajo
• f(x) = 2x²: la parábola madre se ESTIRA (más estrecha)
• f(x) = 0.5x²: la parábola madre se COMPRIME (más ancha)`,
      },
      {
        id: 'qf-07-9',
        title: 'Visualización: Estiramiento y Reflejo',
        type: 'comparison',
        content: '',
        data: {
          type: 'graph-comparator',
          functions: [
            { a: -2, b: 0, c: 0, label: 'a = -2: Reflejada y estirada' },
            { a: -1, b: 0, c: 0, label: 'a = -1: Reflejada' },
            { a: 1, b: 0, c: 0, label: 'a = 1: Original (madre)' },
            { a: 2, b: 0, c: 0, label: 'a = 2: Estirada' },
          ],
          showDescription: true,
        },
      },
      {
        id: 'qf-07-10',
        title: 'Procedimiento en 5 Pasos para Graficar por Transformaciones',
        type: 'text',
        content: `Para graficar cualquier función f(x) = a(x - h)² + k sin calcular muchos puntos:

PASO 1: Identifica la parábola madre
Empieza con el dibujo mental de y = x²

PASO 2: Aplica el estiramiento/compresión y el reflejo (a)
• Si |a| > 1: estira verticalmente (más estrecha)
• Si 0 < |a| < 1: comprime verticalmente (más ancha)
• Si a < 0: refleja verticalmente (voltea hacia abajo)

PASO 3: Desplaza horizontalmente (h)
• Si h > 0: mueve h unidades a la DERECHA
• Si h < 0: mueve |h| unidades a la IZQUIERDA

PASO 4: Desplaza verticalmente (k)
• Si k > 0: mueve k unidades HACIA ARRIBA
• Si k < 0: mueve |k| unidades HACIA ABAJO

PASO 5: Dibuja el resultado final
La nueva posición del vértice es (h, k)`,
      },
      {
        id: 'qf-07-11',
        title: 'Ejemplo Completo: Transformaciones Combinadas',
        type: 'example',
        content: `EJEMPLO: Graficar f(x) = -2(x - 3)² + 1

PASO 1: Parábola madre
Empezamos con y = x²

PASO 2: Analizar a = -2
• Signo negativo: REFLEJAR la parábola (voltear hacia abajo)
• |a| = 2 > 1: ESTIRAR verticalmente (hacer más estrecha)
Resultado: Parábola reflejada y estirada

PASO 3: Analizar h = 3
• h = 3 > 0: Desplazar 3 unidades a la DERECHA
Resultado: Parábola desplazada a la derecha

PASO 4: Analizar k = 1
• k = 1 > 0: Desplazar 1 unidad HACIA ARRIBA
Resultado: Parábola desplazada hacia arriba

PASO 5: Resultado final
• El vértice, que estaba en (0, 0), ahora está en (3, 1)
• La parábola abre HACIA ABAJO (porque a < 0)
• Es más ESTRECHA que la original (porque |a| = 2 > 1)`,
      },
      {
        id: 'qf-07-12',
        title: 'Visualización: Ejemplo Completo',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: -2,
          b: 12,
          c: -17,
          title: 'f(x) = -2(x - 3)² + 1',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-07-13',
        title: 'Más Ejemplos de Transformaciones',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 3(x + 2)² - 5
• a = 3: Estirada (más estrecha), no reflejada
• h = -2: Desplazada 2 unidades a la IZQUIERDA
• k = -5: Desplazada 5 unidades HACIA ABAJO
• Vértice: (-2, -5)

EJEMPLO 2: g(x) = -0.5(x - 1)² + 4
• a = -0.5: Comprimida (más ancha) y REFLEJADA
• h = 1: Desplazada 1 unidad a la DERECHA
• k = 4: Desplazada 4 unidades HACIA ARRIBA
• Vértice: (1, 4)

EJEMPLO 3: h(x) = (x + 3)²
• a = 1: Sin cambio de amplitud, no reflejada
• h = -3: Desplazada 3 unidades a la IZQUIERDA
• k = 0: Sin desplazamiento vertical
• Vértice: (-3, 0)`,
      },
      {
        id: 'qf-07-14',
        title: 'Explorador Interactivo de Transformaciones',
        type: 'interactive',
        content: '',
        data: {
          type: 'coefficient-explorer',
          initialA: 1,
          initialB: 0,
          initialC: 0,
          showDescription: false,
        },
      },
      {
        id: 'qf-07-15',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ Toda parábola es una transformación de f(x) = x² (parábola madre)
✓ La forma canónica f(x) = a(x - h)² + k muestra claramente las transformaciones
✓ k controla el desplazamiento vertical (arriba si k > 0, abajo si k < 0)
✓ h controla el desplazamiento horizontal (derecha si h > 0, izquierda si h < 0)
✓ a controla el reflejo (signo) y el estiramiento/compresión (valor absoluto)
✓ Podemos graficar cualquier parábola aplicando transformaciones paso a paso
✓ El vértice final está siempre en (h, k)

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos a encontrar los puntos de intersección de las parábolas con los ejes y con otras funciones.`,
      },
    ],
    keyPoints: [
      'Toda parábola es una transformación de la parábola madre f(x) = x²',
      'La forma canónica f(x) = a(x - h)² + k muestra claramente las transformaciones',
      'k controla el desplazamiento vertical: k > 0 sube, k < 0 baja',
      'h controla el desplazamiento horizontal: h > 0 derecha, h < 0 izquierda (signo opuesto)',
      'a controla el reflejo (signo negativo voltea) y el estiramiento (|a| > 1 estrecha, |a| < 1 ancha)',
      'Podemos graficar cualquier parábola aplicando transformaciones en orden',
      'El vértice final siempre está en (h, k) después de todas las transformaciones',
    ],
  },
  {
    id: 'qf-08',
    topicId: 'funciones-cuadraticas',
    slug: 'intersecciones-igualdades',
    title: '08 - Intersecciones e Igualdades',
    description: 'Encontrando puntos de intersección entre funciones. Aprende a calcular intersecciones con ejes y entre funciones.',
    content: 'Una parte fundamental del análisis de funciones cuadráticas es encontrar los puntos donde su gráfica se cruza con los ejes del plano cartesiano o con otras funciones. Aprenderemos a resolver estos problemas paso a paso.',
    order: 8,
    sections: [
      {
        id: 'qf-08-1',
        title: 'Introducción: ¿Qué son las Intersecciones?',
        type: 'definition',
        content: `Las INTERSECCIONES son los puntos donde la gráfica de una función cruza los ejes del plano cartesiano o se encuentra con otras funciones.

TIPOS DE INTERSECCIONES:
1. Intersección con el eje Y: donde la gráfica cruza el eje vertical
2. Intersección con el eje X: donde la gráfica cruza el eje horizontal (son las raíces)
3. Intersección entre funciones: donde dos funciones se cruzan

IMPORTANCIA:
Las intersecciones nos dan información valiosa sobre el comportamiento de la función y son puntos clave para graficar.`,
      },
      {
        id: 'qf-08-2',
        title: 'Intersección con el Eje Y',
        type: 'text',
        content: `Este es el punto MÁS FÁCIL de calcular.

DEFINICIÓN:
La gráfica corta el eje Y cuando la coordenada x es 0.

PROCEDIMIENTO:
Calcula f(0)

EN LA FORMA GENERAL (ax² + bx + c):
El valor es simplemente c, porque:
f(0) = a(0)² + b(0) + c = c

RESULTADO:
El punto de intersección es (0, c)

IMPORTANTE:
Toda función cuadrática tiene EXACTAMENTE UNA intersección con el eje Y.`,
      },
      {
        id: 'qf-08-3',
        title: 'Ejemplos: Intersección con el Eje Y',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 2x² - 5x + 3
f(0) = 2(0)² - 5(0) + 3 = 3
Intersección con Y: (0, 3)

EJEMPLO 2: g(x) = (x - 3)² - 4
g(0) = (0 - 3)² - 4 = (-3)² - 4 = 9 - 4 = 5
Intersección con Y: (0, 5)

EJEMPLO 3: h(x) = -x² + 2x
h(0) = -(0)² + 2(0) = 0
Intersección con Y: (0, 0) - La parábola pasa por el origen

EJEMPLO 4: j(x) = 3x² - 7x - 2
j(0) = 3(0)² - 7(0) - 2 = -2
Intersección con Y: (0, -2)`,
      },
      {
        id: 'qf-08-4',
        title: 'Intersección con el Eje X (Raíces)',
        type: 'text',
        content: `La gráfica corta el eje X cuando la coordenada y es 0, es decir, cuando f(x) = 0.

DEFINICIÓN:
Estos puntos son las RAÍCES de la función.

PROCEDIMIENTO:
Iguala la función a cero y resuelve la ecuación cuadrática:
ax² + bx + c = 0

MÉTODOS DE RESOLUCIÓN:
1. Fórmula General: La más segura
   x = (-b ± √(b² - 4ac)) / (2a)

2. Factorización: Si es posible, es más rápida
   Si f(x) = a(x - r₁)(x - r₂), las raíces son r₁ y r₂

3. Despeje directo: Si b = 0
   Si la ecuación es ax² + c = 0, puedes despejar x directamente

POSIBLES RESULTADOS:
• Dos intersecciones: La parábola corta el eje X en dos puntos
• Una intersección: La parábola toca el eje X en un punto (raíz doble)
• Ninguna intersección: La parábola no corta el eje X`,
      },
      {
        id: 'qf-08-5',
        title: 'Ejemplo 1: Intersecciones con el Eje X',
        type: 'example',
        content: `EJEMPLO: Encontrar las intersecciones con el eje X de f(x) = x² - 2x - 3

PASO 1: Igualar a cero
x² - 2x - 3 = 0

PASO 2: Resolver (usando factorización)
Buscamos dos números que multiplicados den -3 y sumados den -2
Los números son -3 y 1
(x - 3)(x + 1) = 0

PASO 3: Encontrar las soluciones
x - 3 = 0 → x = 3
x + 1 = 0 → x = -1

PASO 4: Escribir los puntos de intersección
Los puntos de corte con el eje X son (3, 0) y (-1, 0)

VERIFICACIÓN:
f(3) = (3)² - 2(3) - 3 = 9 - 6 - 3 = 0 ✓
f(-1) = (-1)² - 2(-1) - 3 = 1 + 2 - 3 = 0 ✓`,
      },
      {
        id: 'qf-08-6',
        title: 'Ejemplo 2: Raíz Doble',
        type: 'example',
        content: `EJEMPLO: Encontrar las intersecciones con el eje X de g(x) = x² - 4x + 4

PASO 1: Igualar a cero
x² - 4x + 4 = 0

PASO 2: Factorizar (es un trinomio cuadrado perfecto)
(x - 2)² = 0

PASO 3: Encontrar la solución
x - 2 = 0 → x = 2

PASO 4: Interpretar
Hay UNA SOLA intersección: (2, 0)
Esto es una raíz doble. La parábola TOCA el eje X en el vértice.

VERIFICACIÓN:
g(2) = (2)² - 4(2) + 4 = 4 - 8 + 4 = 0 ✓`,
      },
      {
        id: 'qf-08-7',
        title: 'Visualización: Intersecciones',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -3,
          c: 2,
          title: 'f(x) = x² - 3x + 2 (intersecciones en (0,2), (1,0) y (2,0))',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-08-8',
        title: 'Intersección entre una Parábola y una Recta',
        type: 'text',
        content: `Para encontrar los puntos donde dos funciones se cruzan, buscamos los valores de x donde ambas funciones tienen el mismo valor.

PROCEDIMIENTO:
Dadas f(x) = ax² + bx + c (parábola) y g(x) = mx + n (recta):

PASO 1: Igualar las dos funciones
f(x) = g(x)
ax² + bx + c = mx + n

PASO 2: Reordenar para igualar a cero
ax² + bx + c - mx - n = 0
ax² + (b - m)x + (c - n) = 0

PASO 3: Resolver esta nueva ecuación cuadrática para x

PASO 4: Sustituir cada valor de x encontrado en cualquiera de las funciones originales para encontrar la coordenada y

POSIBLES RESULTADOS:
• Dos soluciones: La recta y la parábola se cortan en dos puntos
• Una solución: La recta es tangente a la parábola (la toca en un solo punto)
• Ninguna solución real: La recta y la parábola no se cortan`,
      },
      {
        id: 'qf-08-9',
        title: 'Ejemplo: Intersección Parábola-Recta',
        type: 'example',
        content: `EJEMPLO: Encuentra la intersección entre f(x) = x² y g(x) = x + 2

PASO 1: Igualar las funciones
x² = x + 2

PASO 2: Reordenar para igualar a cero
x² - x - 2 = 0

PASO 3: Resolver la ecuación cuadrática
Factorizamos: (x - 2)(x + 1) = 0
Soluciones: x = 2 o x = -1

PASO 4: Calcular las coordenadas y
Para x = 2:
y = f(2) = (2)² = 4
Punto: (2, 4)

Para x = -1:
y = f(-1) = (-1)² = 1
Punto: (-1, 1)

RESULTADO:
La parábola y la recta se cortan en los puntos (2, 4) y (-1, 1)

VERIFICACIÓN:
g(2) = 2 + 2 = 4 ✓
g(-1) = -1 + 2 = 1 ✓`,
      },
      {
        id: 'qf-08-10',
        title: 'Intersección entre Dos Parábolas',
        type: 'text',
        content: `El procedimiento es idéntico al caso anterior.

PROCEDIMIENTO:
Dadas f(x) = a₁x² + b₁x + c₁ y g(x) = a₂x² + b₂x + c₂:

PASO 1: Igualar las funciones
a₁x² + b₁x + c₁ = a₂x² + b₂x + c₂

PASO 2: Reordenar para igualar a cero
a₁x² + b₁x + c₁ - a₂x² - b₂x - c₂ = 0
(a₁ - a₂)x² + (b₁ - b₂)x + (c₁ - c₂) = 0

PASO 3: Resolver esta ecuación cuadrática para x

PASO 4: Sustituir cada valor de x en cualquiera de las funciones para encontrar y

NOTA:
Si a₁ = a₂, la ecuación se vuelve lineal (no cuadrática).`,
      },
      {
        id: 'qf-08-11',
        title: 'Ejemplo: Intersección entre Dos Parábolas',
        type: 'example',
        content: `EJEMPLO: Encuentra la intersección entre f(x) = x² - 2x + 1 y g(x) = -x² + 4x - 3

PASO 1: Igualar las funciones
x² - 2x + 1 = -x² + 4x - 3

PASO 2: Reordenar para igualar a cero
x² - 2x + 1 + x² - 4x + 3 = 0
2x² - 6x + 4 = 0

PASO 3: Simplificar (dividir por 2)
x² - 3x + 2 = 0

PASO 4: Resolver
Factorizamos: (x - 1)(x - 2) = 0
Soluciones: x = 1 o x = 2

PASO 5: Calcular las coordenadas y
Para x = 1:
y = f(1) = (1)² - 2(1) + 1 = 1 - 2 + 1 = 0
Punto: (1, 0)

Para x = 2:
y = f(2) = (2)² - 2(2) + 1 = 4 - 4 + 1 = 1
Punto: (2, 1)

RESULTADO:
Las dos parábolas se cortan en (1, 0) y (2, 1)`,
      },
      {
        id: 'qf-08-12',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ La intersección con el eje Y es (0, c) - siempre hay exactamente una
✓ Las intersecciones con el eje X son las raíces - puede haber 0, 1 o 2
✓ Para encontrar intersecciones con el eje X, resolvemos f(x) = 0
✓ Para encontrar intersecciones entre funciones, igualamos f(x) = g(x)
✓ Las intersecciones nos dan información valiosa para graficar
✓ Podemos usar factorización, fórmula general o despeje directo según el caso

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos el método del vértice para calcular el punto más importante de la parábola.`,
      },
    ],
    keyPoints: [
      'La intersección con el eje Y es siempre (0, c) y hay exactamente una',
      'Las intersecciones con el eje X son las raíces: puede haber 0, 1 o 2',
      'Para encontrar intersecciones con el eje X, resolvemos f(x) = 0',
      'Para encontrar intersecciones entre funciones, igualamos f(x) = g(x) y resolvemos',
      'Las intersecciones entre una parábola y una recta pueden ser 0, 1 o 2 puntos',
      'Las intersecciones entre dos parábolas también pueden ser 0, 1 o 2 puntos',
      'Las intersecciones son puntos clave para graficar y entender el comportamiento',
    ],
  },
  {
    id: 'qf-09',
    topicId: 'funciones-cuadraticas',
    slug: 'metodo-vertice',
    title: '09 - Método del Vértice',
    description: 'Cómo calcular el vértice de una parábola. Aprende a encontrar el punto más importante de la parábola.',
    content: 'El vértice es el punto más importante de una parábola: es su punto máximo o mínimo y el centro de su simetría. Saber calcularlo es fundamental. Hay dos métodos principales para encontrarlo.',
    order: 9,
    sections: [
      {
        id: 'qf-09-1',
        title: 'Introducción: ¿Por qué es Importante el Vértice?',
        type: 'definition',
        content: `El VÉRTICE es el punto MÁS IMPORTANTE de una parábola.

CARACTERÍSTICAS:
• Es el punto donde la curva cambia de dirección
• Si la parábola abre hacia arriba: el vértice es el punto MÁS BAJO (mínimo)
• Si la parábola abre hacia abajo: el vértice es el punto MÁS ALTO (máximo)
• Siempre está en el eje de simetría
• Tiene coordenadas (h, k)

IMPORTANCIA:
• En aplicaciones prácticas, el vértice representa el valor óptimo
• Para maximizar ganancias: buscamos el vértice cuando a < 0
• Para minimizar costos: buscamos el vértice cuando a > 0
• Es esencial para graficar la parábola`,
      },
      {
        id: 'qf-09-2',
        title: 'Método 1: Usando la Fórmula del Vértice (Forma General)',
        type: 'text',
        content: `Este es el método más directo si tienes la función en su forma general f(x) = ax² + bx + c.

ALGORITMO DETALLADO:

PASO 1: Identificar los coeficientes
Encuentra los valores de a, b y c en tu función.

PASO 2: Calcular la coordenada h (eje de simetría)
Usa la fórmula:
h = -b / (2a)

JUSTIFICACIÓN:
Esta fórmula se deriva del hecho de que el vértice siempre se encuentra en el punto medio de dos puntos con la misma altura, y se puede deducir de la fórmula general de las raíces.

PASO 3: Calcular la coordenada k (altura del vértice)
Sustituye el valor de h que acabas de encontrar en la función original:
k = f(h) = a(h)² + b(h) + c

JUSTIFICACIÓN:
k es, por definición, el valor que toma la función en el punto h.

PASO 4: Escribir las coordenadas del vértice
El vértice es el punto (h, k)`,
      },
      {
        id: 'qf-09-3',
        title: 'Fórmula del Vértice',
        type: 'formula',
        content: `Para una función cuadrática en forma general f(x) = ax² + bx + c:

COORDENADA X DEL VÉRTICE:
h = -b / (2a)

COORDENADA Y DEL VÉRTICE:
k = f(h) = a(h)² + b(h) + c

VÉRTICE:
(h, k)

EJEMPLO GENERAL SIMBÓLICO:
Para f(x) = ax² + bx + c:
1. Coordenada x: h = -b / (2a)
2. Coordenada y: k = f(-b / (2a))`,
      },
      {
        id: 'qf-09-4',
        title: 'Ejemplo 1: Cálculo del Vértice',
        type: 'example',
        content: `EJEMPLO: Encontrar el vértice de f(x) = x² - 4x + 7

PASO 1: Identificar los coeficientes
a = 1, b = -4, c = 7

PASO 2: Calcular h
h = -b / (2a)
h = -(-4) / (2 × 1)
h = 4 / 2
h = 2

El eje de simetría es x = 2

PASO 3: Calcular k
k = f(h) = f(2)
k = (2)² - 4(2) + 7
k = 4 - 8 + 7
k = 3

PASO 4: Escribir el vértice
Vértice: (2, 3)

VERIFICACIÓN:
El vértice está en el eje de simetría x = 2, y es el punto más bajo porque a = 1 > 0`,
      },
      {
        id: 'qf-09-5',
        title: 'Ejemplo 2: Vértice con Coeficientes Negativos',
        type: 'example',
        content: `EJEMPLO: Encontrar el vértice de f(x) = -2x² - 12x - 10

PASO 1: Identificar los coeficientes
a = -2, b = -12, c = -10

PASO 2: Calcular h
h = -b / (2a)
h = -(-12) / (2 × (-2))
h = 12 / (-4)
h = -3

El eje de simetría es x = -3

PASO 3: Calcular k
k = f(h) = f(-3)
k = -2(-3)² - 12(-3) - 10
k = -2(9) + 36 - 10
k = -18 + 36 - 10
k = 8

PASO 4: Escribir el vértice
Vértice: (-3, 8)

INTERPRETACIÓN:
Como a = -2 < 0, la parábola abre hacia abajo, por lo que el vértice es un MÁXIMO.`,
      },
      {
        id: 'qf-09-6',
        title: 'Ejemplo 3: Más Práctica',
        type: 'example',
        content: `EJEMPLO: Encontrar el vértice de g(x) = 2x² - 8x + 3

PASO 1: Coeficientes
a = 2, b = -8, c = 3

PASO 2: Calcular h
h = -(-8) / (2 × 2)
h = 8 / 4
h = 2

PASO 3: Calcular k
k = f(2) = 2(2)² - 8(2) + 3
k = 2(4) - 16 + 3
k = 8 - 16 + 3
k = -5

PASO 4: Vértice
Vértice: (2, -5)`,
      },
      {
        id: 'qf-09-7',
        title: 'Visualización: Ejemplo del Vértice',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 2,
          b: -8,
          c: 3,
          title: 'f(x) = 2x² - 8x + 3 (vértice en (2, -5))',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-09-8',
        title: 'Método 2: Leyendo desde la Forma Canónica',
        type: 'text',
        content: `Este método es TRIVIAL si la función ya está en forma canónica f(x) = a(x - h)² + k.

PROCEDIMIENTO:
Simplemente lee los valores de h y k directamente de la fórmula.

⚠️ RECUERDA:
• h tiene el signo OPUESTO al que aparece en el paréntesis
• k tiene el mismo signo

EJEMPLO:
Para f(x) = 3(x + 5)² - 8:
• h = -5 (porque es x - (-5))
• k = -8
• El vértice es (-5, -8)

CONVERSIÓN:
Si tienes la función en forma general, puedes usar el método de completar el cuadrado (visto en la lección 04) para convertirla a forma canónica y luego leer el vértice.`,
      },
      {
        id: 'qf-09-9',
        title: 'Ejemplos: Forma Canónica',
        type: 'example',
        content: `EJEMPLO 1: f(x) = 2(x - 4)² + 5
• h = 4 (directo del paréntesis)
• k = 5 (directo del término constante)
• Vértice: (4, 5)

EJEMPLO 2: g(x) = -3(x + 2)² - 7
• h = -2 (porque (x + 2) = (x - (-2)))
• k = -7
• Vértice: (-2, -7)

EJEMPLO 3: h(x) = (x - 1)²
• h = 1
• k = 0 (no hay término constante)
• Vértice: (1, 0)`,
      },
      {
        id: 'qf-09-10',
        title: 'Calculadora Interactiva del Vértice',
        type: 'interactive',
        content: '',
        data: {
          type: 'vertex-calculator',
          showDescription: true,
        },
      },
      {
        id: 'qf-09-11',
        title: 'Aplicaciones del Vértice',
        type: 'text',
        content: `El vértice tiene muchas aplicaciones prácticas:

1. OPTIMIZACIÓN
   • Maximizar ganancias: buscar vértice cuando a < 0
   • Minimizar costos: buscar vértice cuando a > 0

2. MOVIMIENTO DE PROYECTILES
   • El vértice representa la altura máxima alcanzada
   • La coordenada x del vértice es el tiempo en que se alcanza

3. DISEÑO Y ARQUITECTURA
   • El vértice determina el punto más alto o más bajo de un arco

4. GRAFICAR
   • El vértice es un punto clave para dibujar la parábola

5. ANÁLISIS DE DATOS
   • Identificar valores máximos o mínimos en modelos cuadráticos`,
      },
      {
        id: 'qf-09-12',
        title: 'Errores Comunes al Calcular el Vértice',
        type: 'warning',
        content: `⚠️ ERROR 1: Olvidar el signo negativo en la fórmula
Incorrecto: h = b / (2a)
Correcto: h = -b / (2a)

⚠️ ERROR 2: Confundir h y k en la forma canónica
Si tienes (x + 5)², NO es h = 5
Correcto: h = -5 (porque (x + 5) = (x - (-5)))

⚠️ ERROR 3: No calcular k correctamente
Debes sustituir h en la función original, no solo usar una fórmula

⚠️ ERROR 4: Olvidar verificar el resultado
Siempre verifica que el vértice esté en el eje de simetría

⚠️ ERROR 5: Confundir máximo y mínimo
• Si a > 0: el vértice es un MÍNIMO
• Si a < 0: el vértice es un MÁXIMO`,
      },
      {
        id: 'qf-09-13',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ El vértice es el punto más importante de la parábola (máximo o mínimo)
✓ Método 1: Desde forma general: h = -b/(2a), luego k = f(h)
✓ Método 2: Desde forma canónica: leer h y k directamente
✓ El vértice siempre está en el eje de simetría x = h
✓ Si a > 0: el vértice es un mínimo
✓ Si a < 0: el vértice es un máximo
✓ El vértice es esencial para optimización y graficar

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos diferentes métodos para factorizar funciones cuadráticas paso a paso.`,
      },
    ],
    keyPoints: [
      'El vértice es el punto más importante: máximo si a < 0, mínimo si a > 0',
      'Método 1 (forma general): h = -b/(2a), luego k = f(h)',
      'Método 2 (forma canónica): leer h y k directamente de f(x) = a(x - h)² + k',
      'El vértice siempre está en el eje de simetría x = h',
      'h tiene el signo opuesto al que aparece en el paréntesis de la forma canónica',
      'El vértice es esencial para problemas de optimización (máximos y mínimos)',
      'Siempre verificar que el vértice calculado esté en el eje de simetría',
    ],
  },
  {
    id: 'qf-10',
    topicId: 'funciones-cuadraticas',
    slug: 'factorizacion-paso-paso',
    title: '10 - Factorización Paso a Paso',
    description: 'Estrategias para factorizar funciones cuadráticas. Aprende diferentes métodos de factorización con ejemplos detallados.',
    content: 'Factorizar una expresión cuadrática significa reescribirla como un producto de dos factores lineales. Es decir, pasar de ax² + bx + c a a(x - r₁)(x - r₂). Este método es muy útil para encontrar las raíces de una función.',
    order: 10,
    sections: [
      {
        id: 'qf-10-1',
        title: 'Introducción: ¿Qué es Factorizar?',
        type: 'definition',
        content: `FACTORIZAR una expresión cuadrática significa reescribirla como un producto de dos factores lineales.

OBJETIVO:
Pasar de ax² + bx + c a a(x - r₁)(x - r₂)

UTILIDAD:
• Encontrar las raíces de la función fácilmente
• Simplificar expresiones
• Resolver ecuaciones cuadráticas
• Entender el comportamiento de la función

IMPORTANTE:
No todas las funciones cuadráticas se pueden factorizar fácilmente con números enteros. En esos casos, usamos otros métodos.`,
      },
      {
        id: 'qf-10-2',
        title: 'Estrategia 1: Cuando a = 1 (Trinomios x² + bx + c)',
        type: 'text',
        content: `Este es el caso MÁS SENCILLO. Buscamos dos números que cumplan dos condiciones:

CONDICIONES:
1. Multiplicados den el término c
2. Sumados den el término b

PROCEDIMIENTO:
1. Identificar b y c en la expresión x² + bx + c
2. Buscar dos números m y n tales que:
   • m × n = c
   • m + n = b
3. Escribir los factores: La factorización será (x + m)(x + n)`,
      },
      {
        id: 'qf-10-3',
        title: 'Ejemplo 1: Factorización Simple',
        type: 'example',
        content: `EJEMPLO: Factorizar x² + 7x + 10

PASO 1: Identificar b y c
b = 7, c = 10

PASO 2: Buscar dos números que multiplicados den 10 y sumados den 7
Pares de factores de 10:
• (1, 10): 1 + 10 = 11 ✗
• (2, 5): 2 + 5 = 7 ✓
• (-1, -10): -1 + (-10) = -11 ✗
• (-2, -5): -2 + (-5) = -7 ✗

El par que suma 7 es 2 y 5

PASO 3: Escribir la factorización
x² + 7x + 10 = (x + 2)(x + 5)

VERIFICACIÓN:
(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10 ✓

RAÍCES:
Las raíces son x = -2 y x = -5`,
      },
      {
        id: 'qf-10-4',
        title: 'Ejemplo 2: Con Signos Negativos',
        type: 'example',
        content: `EJEMPLO: Factorizar x² - x - 12

PASO 1: Identificar b y c
b = -1, c = -12

PASO 2: Buscar dos números que multiplicados den -12 y sumados den -1
Pares de factores de -12:
• (1, -12): 1 + (-12) = -11 ✗
• (-1, 12): -1 + 12 = 11 ✗
• (2, -6): 2 + (-6) = -4 ✗
• (-2, 6): -2 + 6 = 4 ✗
• (3, -4): 3 + (-4) = -1 ✓
• (-3, 4): -3 + 4 = 1 ✗

El par que suma -1 es 3 y -4

PASO 3: Escribir la factorización
x² - x - 12 = (x + 3)(x - 4)

VERIFICACIÓN:
(x + 3)(x - 4) = x² - 4x + 3x - 12 = x² - x - 12 ✓

RAÍCES:
Las raíces son x = -3 y x = 4`,
      },
      {
        id: 'qf-10-5',
        title: 'Estrategia 2: Cuando a ≠ 1 (Método AC o Agrupación)',
        type: 'text',
        content: `Este método, también conocido como "método AC", es más estructurado.

PROCEDIMIENTO:
Para factorizar ax² + bx + c:

PASO 1: Calcular el producto ac
Multiplica los coeficientes a y c

PASO 2: Buscar dos números m y n tales que:
• m × n = ac
• m + n = b

PASO 3: Reescribir el término bx
Sustituye bx por mx + nx
ax² + mx + nx + c

PASO 4: Factorizar por agrupación
• Saca el factor común de los dos primeros términos
• Saca el factor común de los dos últimos términos
• Los dos paréntesis resultantes deben ser idénticos

PASO 5: Escribir la factorización final
Agrupa los factores comunes`,
      },
      {
        id: 'qf-10-6',
        title: 'Ejemplo: Método AC',
        type: 'example',
        content: `EJEMPLO: Factorizar 2x² + 7x + 3

PASO 1: Calcular ac
a = 2, c = 3
ac = 2 × 3 = 6

PASO 2: Buscar dos números que multiplicados den 6 y sumados den 7
Pares de factores de 6:
• (1, 6): 1 + 6 = 7 ✓
• (2, 3): 2 + 3 = 5 ✗

Los números son 1 y 6

PASO 3: Reescribir 7x como 1x + 6x
2x² + 7x + 3 = 2x² + 1x + 6x + 3

PASO 4: Factorizar por agrupación
De (2x² + x), el factor común es x:
x(2x + 1)

De (6x + 3), el factor común es 3:
3(2x + 1)

La expresión queda: x(2x + 1) + 3(2x + 1)

PASO 5: El paréntesis (2x + 1) es el factor común
2x² + 7x + 3 = (x + 3)(2x + 1)

VERIFICACIÓN:
(x + 3)(2x + 1) = 2x² + x + 6x + 3 = 2x² + 7x + 3 ✓`,
      },
      {
        id: 'qf-10-7',
        title: 'Caso Especial: Trinomio Cuadrado Perfecto (TCP)',
        type: 'text',
        content: `Un trinomio es un TCP si se puede factorizar como (px + q)² o (px - q)².

DETECCIÓN:
Ocurre si b² = 4ac (es decir, el discriminante Δ = 0)

CARACTERÍSTICAS:
• Tiene una raíz doble
• Se factoriza como un binomio al cuadrado
• El vértice está sobre el eje X

EJEMPLO:
9x² - 12x + 4
• a = 9, b = -12, c = 4
• Δ = (-12)² - 4(9)(4) = 144 - 144 = 0 ✓ Es un TCP
• La raíz del primer término es √(9x²) = 3x
• La raíz del tercer término es √4 = 2
• El signo del medio es negativo
• La factorización es (3x - 2)²`,
      },
      {
        id: 'qf-10-8',
        title: 'Caso Especial: Diferencia de Cuadrados',
        type: 'text',
        content: `Este caso ocurre cuando b = 0 y c es negativo. La forma es a²x² - c².

FÓRMULA:
(ax - c)(ax + c)

EJEMPLO:
4x² - 25
• Esto es (2x)² - 5²
• La factorización es (2x - 5)(2x + 5)

VERIFICACIÓN:
(2x - 5)(2x + 5) = 4x² + 10x - 10x - 25 = 4x² - 25 ✓`,
      },
      {
        id: 'qf-10-9',
        title: 'Método 4: Usando la Fórmula Cuadrática',
        type: 'text',
        content: `Cuando otros métodos no funcionan, usamos la fórmula general para encontrar raíces y construir la forma factorizada.

PROCEDIMIENTO:
1. Usa la fórmula cuadrática para encontrar las raíces r₁ y r₂
2. Si las raíces son reales, la factorización es:
   f(x) = a(x - r₁)(x - r₂)

EJEMPLO:
Si las raíces de 2x² - 5x + 1 son r₁ y r₂, entonces:
2x² - 5x + 1 = 2(x - r₁)(x - r₂)

NOTA:
Este método siempre funciona si hay raíces reales, pero puede dar resultados con números irracionales.`,
      },
      {
        id: 'qf-10-10',
        title: 'Resumen: Orden de Intento',
        type: 'tip',
        content: `💡 TIP: Orden Recomendado para Intentar Factorizar

1. PRIMERO: Buscar factor común
   Si todos los términos tienen un factor común, sácalo primero
   Ejemplo: 3x² + 6x = 3x(x + 2)

2. SEGUNDO: Verificar si es un trinomio cuadrado perfecto
   Si b² = 4ac, es un TCP
   Ejemplo: x² + 6x + 9 = (x + 3)²

3. TERCERO: Si a = 1, usar el método simple
   Buscar dos números que multipliquen c y sumen b

4. CUARTO: Si a ≠ 1, usar el método AC
   Buscar dos números que multipliquen ac y sumen b

5. QUINTO: Si nada funciona, usar la fórmula cuadrática
   Encontrar raíces y construir la forma factorizada`,
      },
      {
        id: 'qf-10-11',
        title: 'Más Ejemplos Prácticos',
        type: 'example',
        content: `EJEMPLO 1: Factorizar x² + 8x + 15
Solución: (x + 3)(x + 5)
Verificación: 3 × 5 = 15, 3 + 5 = 8 ✓

EJEMPLO 2: Factorizar x² - 9x + 20
Solución: (x - 4)(x - 5)
Verificación: (-4) × (-5) = 20, (-4) + (-5) = -9 ✓

EJEMPLO 3: Factorizar 3x² + 11x + 6
Solución: (3x + 2)(x + 3)
Verificación: ac = 18, buscamos números que multipliquen 18 y sumen 11
Los números son 2 y 9, reescribimos: 3x² + 2x + 9x + 6
Factorizamos: x(3x + 2) + 3(3x + 2) = (x + 3)(3x + 2) ✓`,
      },
      {
        id: 'qf-10-12',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ Factorizar significa reescribir como producto de factores lineales
✓ Cuando a = 1: buscar dos números que multipliquen c y sumen b
✓ Cuando a ≠ 1: usar el método AC (buscar números que multipliquen ac y sumen b)
✓ Los trinomios cuadrados perfectos se factorizan como (px ± q)²
✓ La diferencia de cuadrados se factoriza como (ax - c)(ax + c)
✓ Si otros métodos fallan, usar la fórmula cuadrática
✓ Siempre verificar la factorización multiplicando los factores

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos la fórmula general (fórmula cuadrática) que siempre funciona para resolver ecuaciones cuadráticas.`,
      },
    ],
    keyPoints: [
      'Factorizar significa reescribir ax² + bx + c como a(x - r₁)(x - r₂)',
      'Cuando a = 1: buscar dos números que multipliquen c y sumen b',
      'Cuando a ≠ 1: usar método AC - buscar números que multipliquen ac y sumen b',
      'Los trinomios cuadrados perfectos se factorizan como (px ± q)²',
      'La diferencia de cuadrados se factoriza como (ax - c)(ax + c)',
      'Si otros métodos fallan, usar la fórmula cuadrática para encontrar raíces',
      'Siempre verificar la factorización multiplicando los factores',
    ],
  },
  {
    id: 'qf-11',
    topicId: 'funciones-cuadraticas',
    slug: 'formula-general',
    title: '11 - Resolución con Fórmula General',
    description: 'La fórmula cuadrática para resolver ecuaciones. Aprende la fórmula que siempre funciona.',
    content: 'Cuando la factorización no es sencilla o es imposible, existe un método infalible para encontrar las raíces de cualquier ecuación cuadrática: la fórmula general (también conocida como fórmula cuadrática o de Bhaskara).',
    order: 11,
    sections: [
      {
        id: 'qf-11-1',
        title: 'Introducción: La Fórmula que Siempre Funciona',
        type: 'definition',
        content: `La FÓRMULA GENERAL (también llamada fórmula cuadrática o fórmula de Bhaskara) es un método INFALIBLE para resolver ecuaciones cuadráticas.

VENTAJAS:
• Funciona para CUALQUIER ecuación cuadrática
• No requiere factorización
• Siempre da la respuesta (si hay raíces reales)
• Es el método más universal

CUÁNDO USARLA:
• Cuando la factorización es difícil o imposible
• Cuando necesitas una solución exacta
• Como método de verificación
• Cuando trabajas con coeficientes que no son enteros`,
      },
      {
        id: 'qf-11-2',
        title: 'La Fórmula General',
        type: 'formula',
        content: `Para una ecuación cuadrática ax² + bx + c = 0, las soluciones para x vienen dadas por:

x = (-b ± √(b² - 4ac)) / (2a)

COMPONENTES:
• -b: Es el opuesto del coeficiente b
• ±: Este símbolo indica que hay DOS posibles soluciones
  - Una usando el signo +: x₁ = (-b + √(b² - 4ac)) / (2a)
  - Otra usando el signo -: x₂ = (-b - √(b² - 4ac)) / (2a)
• √(b² - 4ac): La expresión dentro de la raíz es el DISCRIMINANTE (Δ)
• 2a: El denominador es dos veces el coeficiente a

IMPORTANTE:
Esta fórmula funciona SIEMPRE, pero requiere que Δ ≥ 0 para obtener raíces reales.`,
      },
      {
        id: 'qf-11-3',
        title: 'Interpretación del Símbolo ±',
        type: 'text',
        content: `El símbolo ± (más-menos) es CRUCIAL en la fórmula.

SIGNIFICADO:
Indica que hay DOS posibles soluciones:
• x₁ = (-b + √Δ) / (2a) - usando el signo +
• x₂ = (-b - √Δ) / (2a) - usando el signo -

CASOS:
• Si Δ > 0: Obtienes dos raíces reales DISTINTAS
• Si Δ = 0: Obtienes una raíz real DOBLE (ambas soluciones son iguales)
• Si Δ < 0: No hay raíces reales (las raíces son números complejos)

EJEMPLO:
Si √Δ = 5, entonces:
x₁ = (-b + 5) / (2a)
x₂ = (-b - 5) / (2a)`,
      },
      {
        id: 'qf-11-4',
        title: 'Uso Correcto: Procedimiento Paso a Paso',
        type: 'text',
        content: `Veamos cómo aplicar la fórmula correctamente con un ejemplo detallado.

PROCEDIMIENTO:
1. Identificar los coeficientes a, b y c
2. Calcular el discriminante Δ = b² - 4ac
3. Verificar que Δ ≥ 0 (si no, no hay raíces reales)
4. Calcular √Δ
5. Aplicar la fórmula con ambos signos
6. Simplificar las soluciones
7. Verificar los resultados`,
      },
      {
        id: 'qf-11-5',
        title: 'Ejemplo Completo: Aplicación de la Fórmula',
        type: 'example',
        content: `EJEMPLO: Resolver 2x² + 5x - 3 = 0

PASO 1: Identificar los coeficientes
a = 2, b = 5, c = -3
⚠️ ¡No olvides el signo de c!

PASO 2: Calcular el discriminante
Δ = b² - 4ac
Δ = (5)² - 4(2)(-3)
Δ = 25 - (-24)
Δ = 25 + 24
Δ = 49

PASO 3: Verificar
Como Δ = 49 > 0, hay DOS raíces reales distintas

PASO 4: Calcular √Δ
√49 = 7

PASO 5: Aplicar la fórmula
x = (-b ± √Δ) / (2a)
x = (-5 ± 7) / (2 × 2)
x = (-5 ± 7) / 4

PASO 6: Separar las dos soluciones
Solución 1 (usando +):
x₁ = (-5 + 7) / 4 = 2 / 4 = 1/2

Solución 2 (usando -):
x₂ = (-5 - 7) / 4 = -12 / 4 = -3

PASO 7: Verificar
Para x₁ = 1/2:
2(1/2)² + 5(1/2) - 3 = 2(1/4) + 5/2 - 3 = 1/2 + 5/2 - 3 = 6/2 - 3 = 3 - 3 = 0 ✓

Para x₂ = -3:
2(-3)² + 5(-3) - 3 = 2(9) - 15 - 3 = 18 - 15 - 3 = 0 ✓

RESPUESTA: Las raíces son x = 1/2 y x = -3`,
      },
      {
        id: 'qf-11-6',
        title: 'Resolvedor Interactivo Paso a Paso',
        type: 'interactive',
        content: '',
        data: {
          type: 'step-by-step-solver',
          showDescription: true,
        },
      },
      {
        id: 'qf-11-7',
        title: 'Más Ejemplos',
        type: 'example',
        content: `EJEMPLO 1: Resolver x² - 6x + 9 = 0
a = 1, b = -6, c = 9
Δ = (-6)² - 4(1)(9) = 36 - 36 = 0
x = (6 ± 0) / 2 = 6 / 2 = 3
Raíz doble: x = 3

EJEMPLO 2: Resolver 3x² - 7x + 2 = 0
a = 3, b = -7, c = 2
Δ = (-7)² - 4(3)(2) = 49 - 24 = 25
x = (7 ± 5) / 6
x₁ = (7 + 5) / 6 = 12 / 6 = 2
x₂ = (7 - 5) / 6 = 2 / 6 = 1/3
Raíces: x = 2 y x = 1/3

EJEMPLO 3: Resolver x² + 4x + 5 = 0
a = 1, b = 4, c = 5
Δ = (4)² - 4(1)(5) = 16 - 20 = -4
Como Δ < 0, NO hay raíces reales`,
      },
      {
        id: 'qf-11-8',
        title: 'Deducción Breve de la Fórmula (Opcional)',
        type: 'text',
        content: `La fórmula general no es mágica. Se deduce aplicando el método de completar el cuadrado a la ecuación genérica ax² + bx + c = 0.

PROCESO:
1. ax² + bx = -c
2. x² + (b/a)x = -c/a (dividiendo por a)
3. x² + (b/a)x + (b/(2a))² = -c/a + (b/(2a))² (completando el cuadrado)
4. (x + b/(2a))² = (b² - 4ac)/(4a²)
5. x + b/(2a) = ±√((b² - 4ac)/(4a²)) = ±√(b² - 4ac)/(2a)
6. x = -b/(2a) ± √(b² - 4ac)/(2a) = (-b ± √(b² - 4ac))/(2a)

Esta deducción muestra que la fórmula es simplemente completar el cuadrado aplicado de forma general.`,
      },
      {
        id: 'qf-11-9',
        title: 'Errores Comunes al Usar la Fórmula',
        type: 'warning',
        content: `⚠️ ERROR 1: Olvidar el signo negativo de b
Incorrecto: x = (b ± √Δ) / (2a)
Correcto: x = (-b ± √Δ) / (2a)

⚠️ ERROR 2: Olvidar el ±
Debes calcular AMBAS soluciones: una con + y otra con -

⚠️ ERROR 3: Confundir el signo de c
Si la ecuación es 2x² + 5x - 3 = 0, entonces c = -3 (no 3)

⚠️ ERROR 4: No simplificar la raíz
Si Δ = 16, entonces √16 = 4 (no dejes √16)

⚠️ ERROR 5: No verificar los resultados
Siempre sustituye las soluciones en la ecuación original para verificar`,
      },
      {
        id: 'qf-11-10',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ La fórmula general es x = (-b ± √(b² - 4ac)) / (2a)
✓ Funciona para CUALQUIER ecuación cuadrática
✓ El símbolo ± indica que hay dos soluciones
✓ Requiere que Δ ≥ 0 para raíces reales
✓ Si Δ = 0, hay una raíz doble
✓ Si Δ < 0, no hay raíces reales
✓ Siempre verificar los resultados sustituyendo en la ecuación original

PRÓXIMOS PASOS:
En la siguiente lección aprenderemos a graficar parábolas a mano usando un procedimiento sistemático.`,
      },
    ],
    keyPoints: [
      'La fórmula general es x = (-b ± √(b² - 4ac)) / (2a) y funciona para cualquier ecuación cuadrática',
      'El símbolo ± indica dos soluciones: una con + y otra con -',
      'Requiere que Δ ≥ 0 para obtener raíces reales',
      'Si Δ = 0, hay una raíz doble (ambas soluciones son iguales)',
      'Si Δ < 0, no hay raíces reales (las raíces son números complejos)',
      'Siempre verificar los resultados sustituyendo en la ecuación original',
      'Es el método más universal y siempre funciona cuando hay raíces reales',
    ],
  },
  {
    id: 'qf-12',
    topicId: 'funciones-cuadraticas',
    slug: 'graficar-mano',
    title: '12 - Graficar a Mano',
    description: 'Pasos para dibujar una parábola sin calculadora. Aprende un procedimiento sistemático para graficar.',
    content: 'Saber graficar una parábola sin una calculadora es una habilidad clave. Te fuerza a entender cómo se conectan todas las piezas de una función cuadrática. Un buen gráfico no necesita docenas de puntos, solo los rasgos clave.',
    order: 12,
    sections: [
      {
        id: 'qf-12-1',
        title: 'Introducción: ¿Por qué Graficar a Mano?',
        type: 'text',
        content: `Graficar a mano es una habilidad fundamental que te ayuda a:

BENEFICIOS:
• Entender cómo se conectan todos los conceptos
• Desarrollar intuición sobre las funciones cuadráticas
• Resolver problemas sin calculadora
• Verificar respuestas rápidamente
• Comunicar ideas matemáticas visualmente

FILOSOFÍA:
Un buen gráfico no necesita docenas de puntos. Solo necesitas los RASGOS CLAVE de la parábola.`,
      },
      {
        id: 'qf-12-2',
        title: 'Procedimiento Sistemático: 6 Pasos',
        type: 'text',
        content: `Sigue estos pasos para obtener un bosquejo preciso y rápido de f(x) = ax² + bx + c:

PASO 1: Analizar la Concavidad
Mira el signo del coeficiente a para saber hacia dónde abre

PASO 2: Encontrar el Vértice (h, k)
El punto más importante de la parábola

PASO 3: Encontrar la Intersección con el Eje Y
El punto (0, c)

PASO 4: Encontrar las Intersecciones con el Eje X (Raíces)
Resolviendo f(x) = 0

PASO 5: Construir una Tabla de Valores (Opcional)
Para mayor precisión, calcular puntos adicionales

PASO 6: Unir los Puntos
Dibujar la curva suave y simétrica`,
      },
      {
        id: 'qf-12-3',
        title: 'Paso 1: Analizar la Concavidad',
        type: 'text',
        content: `Mira el signo del coeficiente a.

REGLA:
• Si a > 0: la parábola abre HACIA ARRIBA (forma U)
• Si a < 0: la parábola abre HACIA ABAJO (forma ∩)

IMPORTANCIA:
Esto te da la forma general de la gráfica antes de empezar a dibujar. Sabrás si el vértice es un máximo o un mínimo.`,
      },
      {
        id: 'qf-12-4',
        title: 'Paso 2: Encontrar el Vértice',
        type: 'text',
        content: `El vértice es el punto MÁS IMPORTANTE.

PROCEDIMIENTO:
1. Calcula la coordenada x del vértice: h = -b / (2a)
2. Calcula la coordenada y del vértice: k = f(h)
3. Dibuja el vértice en tu plano cartesiano
4. Dibuja el EJE DE SIMETRÍA, que es la línea vertical x = h

IMPORTANCIA:
El vértice es tu punto de referencia. Todo lo demás se organiza alrededor de él.`,
      },
      {
        id: 'qf-12-5',
        title: 'Paso 3: Intersección con el Eje Y',
        type: 'text',
        content: `Este es el punto más fácil de encontrar.

PROCEDIMIENTO:
1. Calcula f(0). En la forma general, es simplemente el punto (0, c)
2. Dibuja este punto en el gráfico

TRUCO: Usa la Simetría
Refleja este punto a través del eje de simetría para obtener un TERCER PUNTO GRATIS.

CÓMO:
Si el punto (0, c) está a h unidades a la izquierda del eje de simetría, su simétrico estará en (2h, c), a h unidades a la derecha.

EJEMPLO:
Si el eje de simetría es x = 2 y la intersección Y es (0, 3), entonces el punto simétrico es (4, 3)`,
      },
      {
        id: 'qf-12-6',
        title: 'Paso 4: Intersecciones con el Eje X (Raíces)',
        type: 'text',
        content: `Resuelve la ecuación f(x) = 0.

PROCEDIMIENTO:
1. Resuelve ax² + bx + c = 0
   • Usa la fórmula general o intenta factorizar
2. Analiza el discriminante (Δ = b² - 4ac) primero:
   • Si Δ > 0: tendrás dos puntos de corte. Calcúlalos y dibújalos
   • Si Δ = 0: la parábola toca el eje X en el vértice (que ya tienes)
   • Si Δ < 0: la parábola no corta el eje X. No necesitas buscar más puntos aquí

IMPORTANCIA:
Las raíces te dan puntos clave donde la parábola cruza el eje X.`,
      },
      {
        id: 'qf-12-7',
        title: 'Paso 5: Tabla de Valores (Opcional)',
        type: 'text',
        content: `Si quieres un dibujo más preciso, puedes calcular un par de puntos adicionales.

ESTRATEGIA:
Elige valores de x que sean SIMÉTRICOS respecto al vértice.

EJEMPLO:
Si el vértice está en x = 2, calcula f(3) y f(1). Deberían dar el mismo valor de y (por la simetría).

TABLA SUGERIDA:
x    | y = f(x)
-----|----------
h-2  | f(h-2)
h-1  | f(h-1)
h    | k (vértice)
h+1  | f(h+1)
h+2  | f(h+2)

NOTA:
No necesitas muchos puntos. Con 5-7 puntos bien elegidos puedes dibujar una parábola precisa.`,
      },
      {
        id: 'qf-12-8',
        title: 'Paso 6: Unir los Puntos',
        type: 'text',
        content: `Une los puntos que has encontrado con una curva suave.

INSTRUCCIONES:
• Une los puntos con una curva suave en forma de "U" (o ∩)
• Asegúrate de que la curva sea SIMÉTRICA respecto al eje que dibujaste
• No uses una regla para unir los puntos; debe ser una CURVA
• La curva debe pasar por todos los puntos clave que marcaste
• Verifica que la forma coincida con la concavidad que identificaste en el paso 1`,
      },
      {
        id: 'qf-12-9',
        title: 'Ejemplo Completo: Graficar f(x) = x² - 2x - 3',
        type: 'example',
        content: `EJEMPLO: Graficar f(x) = x² - 2x - 3

PASO 1: Analizar la concavidad
a = 1 > 0, así que abre HACIA ARRIBA ✓

PASO 2: Encontrar el vértice
h = -(-2) / (2 × 1) = 2 / 2 = 1
k = f(1) = (1)² - 2(1) - 3 = 1 - 2 - 3 = -4
Vértice: (1, -4)
Eje de simetría: x = 1

PASO 3: Corte con el Eje Y
f(0) = (0)² - 2(0) - 3 = -3
Punto: (0, -3)
Punto simétrico: está a 1 unidad a la izquierda del eje (x = 1). Su simétrico estará 1 unidad a la derecha, en x = 2. La altura es la misma.
Punto simétrico: (2, -3)

PASO 4: Cortes con el Eje X (Raíces)
x² - 2x - 3 = 0
Factorizando: (x - 3)(x + 1) = 0
Raíces: x = 3 y x = -1
Puntos: (3, 0) y (-1, 0)

PASO 5: Tabla de valores (opcional)
x    | f(x)
-----|-----
-1   | 0   (raíz)
0    | -3  (intersección Y)
1    | -4  (vértice)
2    | -3  (simétrico de (0, -3))
3    | 0   (raíz)

PASO 6: Unir los puntos
Ya tenemos 5 puntos clave: (1, -4), (0, -3), (2, -3), (3, 0), (-1, 0)
Dibújalos y únelos con una curva suave y simétrica que abra hacia arriba.`,
      },
      {
        id: 'qf-12-10',
        title: 'Visualización: Ejemplo Completo',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -2,
          c: -3,
          title: 'f(x) = x² - 2x - 3',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-12-11',
        title: 'Ejemplo 2: Parábola sin Raíces Reales',
        type: 'example',
        content: `EJEMPLO: Graficar g(x) = x² - 4x + 5

PASO 1: Concavidad
a = 1 > 0, abre HACIA ARRIBA

PASO 2: Vértice
h = -(-4) / (2 × 1) = 4 / 2 = 2
k = f(2) = (2)² - 4(2) + 5 = 4 - 8 + 5 = 1
Vértice: (2, 1)
Eje: x = 2

PASO 3: Intersección Y
g(0) = 5
Punto: (0, 5)
Punto simétrico: (4, 5)

PASO 4: Raíces
Δ = (-4)² - 4(1)(5) = 16 - 20 = -4 < 0
NO hay raíces reales. La parábola no corta el eje X.

PASO 5: Puntos adicionales
x    | g(x)
-----|-----
0    | 5
1    | 2
2    | 1 (vértice)
3    | 2
4    | 5

PASO 6: Dibujar
La parábola abre hacia arriba, tiene vértice en (2, 1), y nunca toca el eje X.`,
      },
      {
        id: 'qf-12-12',
        title: 'Ejemplo 3: Parábola con Raíz Doble',
        type: 'example',
        content: `EJEMPLO: Graficar h(x) = x² - 4x + 4

PASO 1: Concavidad
a = 1 > 0, abre HACIA ARRIBA

PASO 2: Vértice
h = -(-4) / (2 × 1) = 2
k = f(2) = (2)² - 4(2) + 4 = 4 - 8 + 4 = 0
Vértice: (2, 0)
Eje: x = 2

PASO 3: Intersección Y
h(0) = 4
Punto: (0, 4)
Punto simétrico: (4, 4)

PASO 4: Raíces
x² - 4x + 4 = 0
(x - 2)² = 0
Raíz doble: x = 2
El vértice está sobre el eje X en (2, 0)

PASO 5: Dibujar
La parábola toca el eje X en el vértice (2, 0) pero no lo cruza.`,
      },
      {
        id: 'qf-12-13',
        title: 'Tips para un Gráfico Preciso',
        type: 'tip',
        content: `💡 TIPS PARA GRAFICAR MEJOR:

1. SIEMPRE empieza con el vértice
   Es tu punto de referencia más importante

2. USA la simetría
   Si encuentras un punto, su simétrico está al otro lado del eje

3. MARCA el eje de simetría
   Te ayuda a mantener la simetría del dibujo

4. NO necesitas muchos puntos
   Con 5-7 puntos bien elegidos es suficiente

5. VERIFICA la concavidad
   Asegúrate de que la curva abra en la dirección correcta

6. DIBUJA suavemente
   Las parábolas son curvas suaves, no líneas rectas

7. REVISA puntos clave
   Verifica que la curva pase por el vértice, raíces e intersección Y`,
      },
      {
        id: 'qf-12-14',
        title: 'Resumen de la Lección',
        type: 'text',
        content: `CONCEPTOS CLAVE APRENDIDOS:

✓ Un buen gráfico solo necesita los rasgos clave, no docenas de puntos
✓ Procedimiento sistemático: concavidad → vértice → intersecciones → puntos adicionales → unir
✓ El vértice es el punto más importante y debe dibujarse primero
✓ Usar la simetría te da puntos gratis (reflejar puntos a través del eje)
✓ Las raíces son puntos clave donde la parábola cruza el eje X
✓ La intersección Y es fácil de encontrar: (0, c)
✓ Con 5-7 puntos bien elegidos puedes dibujar una parábola precisa

PRÓXIMOS PASOS:
En la siguiente lección exploraremos casos particulares interesantes de funciones cuadráticas.`,
      },
    ],
    keyPoints: [
      'Un buen gráfico solo necesita los rasgos clave: vértice, raíces, intersección Y',
      'Procedimiento sistemático: analizar concavidad → encontrar vértice → intersecciones → puntos adicionales → unir',
      'El vértice es el punto más importante y debe dibujarse primero',
      'Usar la simetría te da puntos gratis: reflejar puntos a través del eje de simetría',
      'Las raíces son puntos clave donde la parábola cruza el eje X',
      'La intersección Y es fácil: (0, c)',
      'Con 5-7 puntos bien elegidos puedes dibujar una parábola precisa',
    ],
  },
  {
    id: 'qf-13',
    topicId: 'funciones-cuadraticas',
    slug: 'casos-particulares',
    title: '13 - Casos Particulares',
    description: 'Situaciones especiales en funciones cuadráticas.',
    content: 'Exploraremos casos específicos interessantes.',
    order: 13,
    sections: [
      {
        id: 'qf-13-1',
        title: 'Introducción: Casos Especiales',
        type: 'text',
        content: `Aunque la mayoría de las funciones cuadráticas son "estándar", es importante saber cómo manejar casos menos comunes. Estos casos especiales te ayudarán a solidificar tu comprensión de los conceptos fundamentales.`,
      },
      {
        id: 'qf-13-2',
        title: 'Caso 1: ¿Qué pasa si a = 0?',
        type: 'text',
        content: `Si el coeficiente a es cero, la expresión deja de ser cuadrática.

FORMA:
f(x) = (0)x² + bx + c = bx + c

RESULTADO:
La función se convierte en una FUNCIÓN LINEAL.

GRÁFICO:
Su gráfica no es una parábola, sino una LÍNEA RECTA.

IMPORTANTE:
La presencia del término x² (con a ≠ 0) es lo que define a una función cuadrática.`,
      },
      {
        id: 'qf-13-3',
        title: 'Caso 2: Coeficiente b = 0 (Función Cuadrática Pura)',
        type: 'text',
        content: `FORMA: f(x) = ax² + c

CARACTERÍSTICAS:
• El vértice siempre está en el eje Y, en el punto (0, c)
• La parábola es perfectamente simétrica respecto al eje Y
• Para encontrar raíces, es más fácil despejar x que usar la fórmula general:
  ax² + c = 0 → x² = -c/a → x = ±√(-c/a)

EJEMPLO: f(x) = 2x² - 8
• Vértice: (0, -8)
• Raíces: 2x² - 8 = 0 → x² = 4 → x = ±2`,
      },
      {
        id: 'qf-13-4',
        title: 'Visualización: Función Cuadrática Pura',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 2,
          b: 0,
          c: -8,
          title: 'f(x) = 2x² - 8 (b = 0, simétrica respecto al eje Y)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-5',
        title: 'Caso 3: Coeficiente c = 0 (Pasa por el Origen)',
        type: 'text',
        content: `FORMA: f(x) = ax² + bx

CARACTERÍSTICAS:
• La parábola siempre pasa por el origen (0, 0)
• Una de las raíces siempre es x = 0
• Para encontrar la otra raíz, es más fácil factorizar:
  ax² + bx = 0 → x(ax + b) = 0
  Las raíces son x₁ = 0 y x₂ = -b/a

EJEMPLO: f(x) = 3x² - 6x
• Raíces: x(3x - 6) = 0 → x = 0 o x = 2`,
      },
      {
        id: 'qf-13-6',
        title: 'Visualización: Parábola que Pasa por el Origen',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -3,
          c: 0,
          title: 'f(x) = x² - 3x = x(x - 3)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-7',
        title: 'Caso 4: Sin Raíces Reales (Δ < 0)',
        type: 'text',
        content: `OCURRE CUANDO: El discriminante es negativo (Δ < 0)

SIGNIFICADO: La función no tiene raíces reales

GRÁFICO:
• La parábola NUNCA corta el eje X
• Si a > 0: la parábola está enteramente POR ENCIMA del eje X
• Si a < 0: la parábola está enteramente POR DEBAJO del eje X

VÉRTICE:
En estos casos, el vértice es crucial. Si la parábola abre hacia arriba, la coordenada k del vértice es el valor mínimo absoluto. Si abre hacia abajo, es el máximo absoluto.

EJEMPLO: f(x) = x² + 2x + 5
• Δ = 2² - 4(1)(5) = 4 - 20 = -16 < 0
• No hay raíces reales
• Vértice: h = -2/(2×1) = -1, k = f(-1) = 4
• Vértice en (-1, 4). Como a > 0, la función nunca llegará a y = 0`,
      },
      {
        id: 'qf-13-8',
        title: 'Visualización: Parábola sin Raíces Reales',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 2,
          title: 'f(x) = x² + 2 (no toca eje X, Δ < 0)',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-9',
        title: 'Caso 5: Raíz Doble (Δ = 0)',
        type: 'text',
        content: `OCURRE CUANDO: El discriminante es cero (Δ = 0)

CARACTERÍSTICAS:
• Hay una raíz real doble (r₁ = r₂)
• La parábola TOCA el eje X en el vértice
• Se puede factorizar como un trinomio cuadrado perfecto: a(x - r)²

EJEMPLO: f(x) = x² - 2x + 1
• Δ = (-2)² - 4(1)(1) = 4 - 4 = 0
• Raíz doble: x = 1
• Factorización: (x - 1)²
• El vértice está en (1, 0), sobre el eje X`,
      },
      {
        id: 'qf-13-10',
        title: 'Visualización: Parábola con Raíz Doble',
        type: 'visualization',
        content: '',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -2,
          c: 1,
          title: 'f(x) = x² - 2x + 1 = (x - 1)² (raíz doble)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-11',
        title: 'Caso 6: Coeficientes Fraccionarios o Irracionales',
        type: 'text',
        content: `No te asustes si los coeficientes a, b, c no son números enteros. Todos los métodos y fórmulas funcionan exactamente igual.

EJEMPLO: f(x) = (1/2)x² - √3x - 4
• Concavidad: a = 1/2 > 0, abre hacia arriba (parábola ancha)
• Corte con eje Y: (0, -4)
• Vértice: h = -(-√3)/(2×(1/2)) = √3
• Todos los métodos funcionan igual, solo los cálculos son más tediosos`,
      },
      {
        id: 'qf-13-12',
        title: 'Resumen de Casos Particulares',
        type: 'text',
        content: `CASOS ESPECIALES:

1. a = 0: No es cuadrática, es lineal
2. b = 0: Función pura, simétrica respecto al eje Y, vértice en (0, c)
3. c = 0: Pasa por el origen, una raíz es x = 0
4. Δ < 0: Sin raíces reales, parábola no toca el eje X
5. Δ = 0: Raíz doble, vértice sobre el eje X
6. Coeficientes fraccionarios/irracionales: Métodos funcionan igual

IMPORTANTE:
Conocer estos casos te ayuda a reconocer patrones y resolver problemas más rápido.`,
      },
    ],
    keyPoints: [
      'Sin raíces: parábola nunca toca eje X',
      'Raíz doble: vértice toca eje X',
      'Por origen: c = 0',
    ],
  },
  {
    id: 'qf-14',
    topicId: 'funciones-cuadraticas',
    slug: 'aplicaciones-modelado',
    title: '14 - Aplicaciones y Modelado',
    description: 'Problemas del mundo real con funciones cuadráticas. Aprende a modelar situaciones reales.',
    content: 'Las funciones cuadráticas no son solo un ejercicio académico; aparecen constantemente en el mundo real. Modelar situaciones con parábolas nos permite resolver problemas de optimización, predecir trayectorias y mucho más.',
    order: 14,
    sections: [
      {
        id: 'qf-14-1',
        title: 'Introducción: Modelado con Funciones Cuadráticas',
        type: 'text',
        content: `Las funciones cuadráticas aparecen constantemente en el mundo real. El proceso general de modelado es:

PLANTEO → MODELO → SOLUCIÓN → INTERPRETACIÓN

APLICACIONES COMUNES:
• Trayectorias de proyectiles (altura-tiempo)
• Optimización de áreas y perímetros
• Modelos de ingresos y ganancias
• Movimiento con aceleración constante
• Diseño arquitectónico`,
      },
      {
        id: 'qf-14-2',
        title: 'Aplicación 1: Trayectorias y Proyectiles',
        type: 'text',
        content: `Cuando un objeto es lanzado al aire (sin resistencia del aire), su altura en función del tiempo sigue una trayectoria parabólica.

FUNCIÓN GENERAL:
h(t) = -½gt² + v₀t + h₀

VARIABLES:
• h(t): altura en el instante t
• g: aceleración de la gravedad (aprox. 9.8 m/s² o 32 ft/s²)
• v₀: velocidad inicial (hacia arriba)
• h₀: altura inicial

NOTA: El signo de g es negativo porque la gravedad tira hacia abajo.

ES UNA FUNCIÓN CUADRÁTICA:
h(t) = at² + bt + c donde a = -g/2, b = v₀, c = h₀`,
      },
      {
        id: 'qf-14-3',
        title: 'Preguntas Típicas en Problemas de Proyectiles',
        type: 'text',
        content: `¿CUÁL ES LA ALTURA MÁXIMA?
Modelo: La altura máxima es la coordenada k del vértice
Solución: Calcula t = -b/(2a), luego h(t)

¿CUÁNTO TIEMPO TARDA EN ALCANZAR LA ALTURA MÁXIMA?
Modelo: Es el tiempo correspondiente al vértice
Solución: Calcula t = -b/(2a)

¿CUÁNTO TIEMPO TARDA EN CAER AL SUELO?
Modelo: El objeto está en el suelo cuando h(t) = 0. Buscamos una raíz
Solución: Resuelve la ecuación cuadrática. Normalmente una solución será negativa (se descarta) y la otra positiva`,
      },
      {
        id: 'qf-14-4',
        title: 'Ejemplo Completo: Lanzamiento de Proyectil',
        type: 'example',
        content: `EJEMPLO: Se lanza una pelota hacia arriba desde el suelo (h₀ = 0) con una velocidad inicial de 20 m/s. Usa g ≈ 10 m/s².

MODELO:
h(t) = -5t² + 20t

ALTURA MÁXIMA:
1. Tiempo del vértice: t = -20/(2×(-5)) = -20/(-10) = 2 segundos
2. Altura máxima: h(2) = -5(2)² + 20(2) = -20 + 40 = 20 metros

TIEMPO EN EL AIRE:
1. Resolver h(t) = 0 → -5t² + 20t = 0
2. Factorizar: 5t(-t + 4) = 0
3. Soluciones: t = 0 (inicio) y t = 4 segundos (caída)
4. Tarda 4 segundos en caer`,
      },
      {
        id: 'qf-14-5',
        title: 'Aplicación 2: Optimización de Áreas',
        type: 'text',
        content: `Problema común: encontrar las dimensiones de un terreno, corral, etc., que maximicen el área, dado un perímetro fijo.

PROCEDIMIENTO:
1. Planteo: Establece las relaciones entre variables
2. Modelo: Expresa el área como función de una variable
3. Solución: Encuentra el vértice (máximo)
4. Interpretación: Verifica que la solución tenga sentido`,
      },
      {
        id: 'qf-14-6',
        title: 'Ejemplo: Optimización de Área',
        type: 'example',
        content: `EJEMPLO: Un granjero tiene 40 metros de valla para construir un corral rectangular. Quiere maximizar el área.

PLANTEO:
• Perímetro: 2L + 2W = 40, donde L es largo y W es ancho
• Área: A = L × W. Queremos maximizar A

MODELO:
• Del perímetro: 2L = 40 - 2W → L = 20 - W
• Sustituimos en área: A(W) = (20 - W) × W = 20W - W²
• Esta es una función cuadrática: A(W) = -W² + 20W

SOLUCIÓN:
• El área máxima es el vértice de la parábola
• La parábola abre hacia abajo (a = -1), así que el vértice es un máximo
• Coordenada W del vértice: W = -20/(2×(-1)) = 10 metros
• Si W = 10, entonces L = 20 - 10 = 10 metros
• El área máxima es A = 10 × 10 = 100 m²

INTERPRETACIÓN:
Para maximizar el área con un perímetro fijo, el rectángulo debe ser un CUADRADO.`,
      },
      {
        id: 'qf-14-7',
        title: 'Aplicación 3: Modelos de Ingresos',
        type: 'text',
        content: `En negocios, el ingreso a menudo se modela con funciones cuadráticas. Si el precio es muy alto, se venden pocas unidades. Si es muy bajo, se venden muchas pero se gana poco por unidad.

MODELO DE INGRESO:
I(p) = Precio (p) × Cantidad (q)

Típicamente: q = m - np (donde m y n son constantes)
Entonces: I(p) = p × (m - np) = mp - np²

Esta es una función cuadrática que abre hacia abajo (a = -n < 0), así que tiene un máximo.`,
      },
      {
        id: 'qf-14-8',
        title: 'Ejemplo: Modelo de Ingresos',
        type: 'example',
        content: `EJEMPLO: Una empresa vende un producto. A un precio de $p dólares, vende q = 500 - 10p unidades.

MODELO DE INGRESO:
I(p) = p × (500 - 10p) = 500p - 10p²

¿QUÉ PRECIO MAXIMIZA EL INGRESO?
• Buscamos el vértice de I(p)
• Coordenada p del vértice: p = -500/(2×(-10)) = 25

INTERPRETACIÓN:
• El precio que maximiza el ingreso es de $25
• A ese precio, se venderían q = 500 - 10(25) = 250 unidades
• El ingreso máximo sería I = 25 × 250 = $6,250`,
      },
      {
        id: 'qf-14-9',
        title: 'Resumen de Aplicaciones',
        type: 'text',
        content: `APLICACIONES PRINCIPALES:

1. TRAYECTORIAS DE PROYECTILES
   • Altura máxima: vértice
   • Tiempo en el aire: raíces

2. OPTIMIZACIÓN DE ÁREAS
   • Área máxima: vértice
   • Relación perímetro-área

3. MODELOS DE INGRESOS
   • Ingreso máximo: vértice
   • Relación precio-cantidad

4. MOVIMIENTO CON ACELERACIÓN
   • Distancia: d = ½at² + v₀t + d₀

5. DISEÑO Y ARQUITECTURA
   • Arcos parabólicos
   • Optimización de estructuras`,
      },
    ],
    keyPoints: [
      'Las funciones cuadráticas modelan situaciones reales: proyectiles, áreas, ingresos',
      'El vértice representa el punto máximo o mínimo en problemas de optimización',
      'Las raíces representan tiempos o posiciones críticas (cuándo llega al suelo, etc.)',
      'El proceso de modelado: planteo → modelo → solución → interpretación',
      'En problemas de proyectiles, la altura máxima es el vértice',
      'En optimización de áreas, el área máxima se encuentra en el vértice',
      'En modelos de ingresos, el ingreso máximo se encuentra en el vértice',
    ],
  },
  {
    id: 'qf-15',
    topicId: 'funciones-cuadraticas',
    slug: 'errores-comunes',
    title: '15 - Errores Comunes',
    description: 'Qué NO hacer cuando trabajas con cuadráticas. Aprende a evitar las trampas más comunes.',
    content: 'Al trabajar con funciones cuadráticas, es fácil cometer pequeños errores que pueden llevar a respuestas incorrectas. Conocerlos de antemano te ayudará a estar alerta y a verificar tu trabajo.',
    order: 15,
    sections: [
      {
        id: 'qf-15-1',
        title: 'Introducción: Errores Comunes',
        type: 'text',
        content: `Los errores más comunes al trabajar con funciones cuadráticas se pueden clasificar en dos categorías:

1. ERRORES ALGEBRAICOS Y DE SIGNO
   Errores en cálculos y manipulación de signos

2. ERRORES CONCEPTUALES
   Malentendidos sobre los conceptos fundamentales

Conocer estos errores te ayudará a:
• Detectar problemas en tus cálculos
• Verificar tus respuestas
• Evitar confusiones comunes
• Resolver problemas con mayor confianza`,
      },
      {
        id: 'qf-15-2',
        title: 'Error 1: Olvidar que a ≠ 0',
        type: 'warning',
        content: `⚠️ ERROR: Asumir que cualquier función con x² es cuadrática

PROBLEMA:
Si a = 0, la función NO es cuadrática. Es lineal.

EJEMPLO:
f(x) = 0·x² + 5x + 3 = 5x + 3
Esto es una FUNCIÓN LINEAL, no cuadrática.

POR QUÉ ES IMPORTANTE:
• La presencia del término x² (con a ≠ 0) es lo que define a una función cuadrática
• Si a = 0, no puedes usar las fórmulas del vértice ni del discriminante
• La gráfica no será una parábola, sino una línea recta

CÓMO EVITARLO:
Siempre verifica que a ≠ 0 antes de aplicar fórmulas cuadráticas.`,
      },
      {
        id: 'qf-15-3',
        title: 'Error 2: Signo de b en la Fórmula del Vértice',
        type: 'warning',
        content: `⚠️ ERROR: Olvidar el signo negativo en h = -b/(2a)

PROBLEMA:
Las fórmulas h = -b/(2a) y x = (-b ± √Δ)/(2a) empiezan con -b. Si b ya es negativo, -b será positivo.

EJEMPLO INCORRECTO:
Para f(x) = x² - 6x + 1, donde b = -6:
h = -6/(2×1) = -3 ✗

EJEMPLO CORRECTO:
Para f(x) = x² - 6x + 1, donde b = -6:
h = -(-6)/(2×1) = 6/2 = 3 ✓

CÓMO EVITARLO:
Siempre sustituye los coeficientes entre paréntesis: h = -(-6)/(2×1)`,
      },
      {
        id: 'qf-15-4',
        title: 'Error 3: Elevar al Cuadrado un Número Negativo',
        type: 'warning',
        content: `⚠️ ERROR: Calcular mal b² cuando b es negativo

PROBLEMA:
Al calcular el discriminante Δ = b² - 4ac, si b es negativo, debes elevar el número negativo al cuadrado.

EJEMPLO INCORRECTO:
Para b = -5:
b² = -5² = -25 ✗ (Esto es el negativo de 5 al cuadrado)

EJEMPLO CORRECTO:
Para b = -5:
b² = (-5)² = (-5) × (-5) = 25 ✓

CÓMO EVITARLO:
Usa paréntesis en la calculadora y en tu mente: b² = (-5) × (-5) = 25`,
      },
      {
        id: 'qf-15-5',
        title: 'Error 4: Signos en la Forma Canónica y Factorizada',
        type: 'warning',
        content: `⚠️ ERROR: Leer mal h y las raíces r en las formas canónica y factorizada

PROBLEMA:
En la forma canónica a(x - h)² + k y factorizada a(x - r₁)(x - r₂), los signos pueden ser confusos.

FORMA CANÓNICA:
• Si ves (x + 3)², significa h = -3 (porque (x + 3) = (x - (-3)))
• Si ves (x - 3)², significa h = 3

FORMA FACTORIZADA:
• Si ves (x + 3), la raíz es x = -3
• Si ves (x - 3), la raíz es x = 3

REGLA DE ORO:
"El signo opuesto al que ves dentro del paréntesis"

CÓMO EVITARLO:
Recuerda siempre: el signo dentro del paréntesis es el OPUESTO al valor de h o r.`,
      },
      {
        id: 'qf-15-6',
        title: 'Error 5: Confundir Vértice con Raíces',
        type: 'warning',
        content: `⚠️ ERROR: Pensar que el vértice da información sobre los cortes con el eje X

PROBLEMA:
El vértice (h, k) y las raíces son conceptos diferentes.

ACLARACIÓN:
• El VÉRTICE (h, k) es el punto máximo o mínimo
• Las RAÍCES son los puntos donde y = 0 (cortes con el eje X)

EXCEPCIÓN:
Solo coinciden si el vértice está sobre el eje X (k = 0), lo que corresponde a una raíz doble.

EJEMPLO:
f(x) = x² - 4x + 3
• Vértice: (2, -1) - punto mínimo
• Raíces: x = 1 y x = 3 - cortes con eje X

CÓMO EVITARLO:
Recuerda que el vértice es (h, k) y las raíces son los valores de x donde f(x) = 0.`,
      },
      {
        id: 'qf-15-7',
        title: 'Error 6: Asumir que Siempre Hay Dos Raíces Reales',
        type: 'warning',
        content: `⚠️ ERROR: Asumir que siempre se puede factorizar o que la fórmula general siempre dará dos soluciones reales

PROBLEMA:
No todas las funciones cuadráticas tienen dos raíces reales.

CÓMO EVITARLO:
¡Usa el DISCRIMINANTE! Δ = b² - 4ac
• Si Δ > 0: dos raíces reales distintas
• Si Δ = 0: una raíz real doble
• Si Δ < 0: NO hay raíces reales (raíces complejas)

EJEMPLO:
f(x) = x² + 2x + 5
Δ = 2² - 4(1)(5) = 4 - 20 = -16 < 0
No hay raíces reales. La parábola no corta el eje X.

CÓMO EVITARLO:
Siempre calcula el discriminante primero para saber qué esperar.`,
      },
      {
        id: 'qf-15-8',
        title: 'Error 7: Olvidar el Símbolo ±',
        type: 'warning',
        content: `⚠️ ERROR: Olvidar que la fórmula cuadrática tiene dos soluciones

PROBLEMA:
En la fórmula x = (-b ± √Δ)/(2a), el símbolo ± indica DOS soluciones.

EJEMPLO:
Si √Δ = 5, entonces:
x₁ = (-b + 5)/(2a) - usando el signo +
x₂ = (-b - 5)/(2a) - usando el signo -

CÓMO EVITARLO:
Siempre calcula AMBAS soluciones: una con + y otra con -`,
      },
      {
        id: 'qf-15-9',
        title: 'Error 8: Interpretar Mal las Preguntas de Aplicación',
        type: 'warning',
        content: `⚠️ ERROR: En problemas de aplicación, confundir qué se está pidiendo

PROBLEMA:
En un problema de altura-tiempo, dar la altura máxima cuando se pide el tiempo para alcanzarla.

CÓMO EVITARLO:
Lee la pregunta cuidadosamente y asocia lo que se pide con el elemento correcto:
• "Cuándo", "en qué momento" → Pide un valor de TIEMPO (x)
• "Cuál es la altura/área/ingreso máximo" → Pide un valor de ALTURA/RESULTADO (y)
• "Punto máximo/mínimo" → Pide el VÉRTICE (x, y)
• "Cuándo llega al suelo/inicio" → Pide una RAÍZ (x)

EJEMPLO:
"¿Cuándo alcanza la altura máxima?" → Pide t (coordenada x del vértice)
"¿Cuál es la altura máxima?" → Pide h(t) (coordenada y del vértice)`,
      },
      {
        id: 'qf-15-10',
        title: 'Checklist de Verificación Rápida',
        type: 'tip',
        content: `💡 CHECKLIST: Después de resolver un problema, hazte estas preguntas:

1. ¿Sustituí bien las raíces?
   Toma las raíces que encontraste y ponlas de nuevo en la ecuación original. ¿El resultado es (aproximadamente) cero?

2. ¿El signo de a coincide con la forma de mi gráfico?
   Si a > 0, tu parábola debe abrir hacia arriba. Si a < 0, hacia abajo.

3. ¿El vértice que calculé tiene sentido en el gráfico?
   ¿Está realmente en el punto más alto/bajo de la curva que dibujaste?
   ¿Está en el punto medio de las raíces (si existen)?

4. ¿El corte con el eje Y es correcto?
   ¿El punto (0, c) está bien ubicado en tu gráfico?

5. ¿Mis respuestas al problema de aplicación son lógicas?
   ¿Tiene sentido un tiempo negativo? ¿Un área negativa?
   Usa el sentido común para descartar soluciones matemáticamente correctas pero físicamente imposibles.`,
      },
      {
        id: 'qf-15-11',
        title: 'Resumen de Errores Comunes',
        type: 'text',
        content: `ERRORES MÁS FRECUENTES:

1. Olvidar que a ≠ 0 (si a = 0, no es cuadrática)
2. Olvidar el signo negativo en h = -b/(2a)
3. Calcular mal b² cuando b es negativo
4. Confundir signos en forma canónica/factorizada
5. Confundir vértice con raíces
6. Asumir que siempre hay dos raíces reales
7. Olvidar el símbolo ± en la fórmula cuadrática
8. Interpretar mal las preguntas de aplicación

RECUERDA:
• Siempre verifica tus cálculos
• Usa el discriminante para saber qué esperar
• Lee cuidadosamente las preguntas
• Verifica que tus respuestas tengan sentido`,
      },
    ],
    keyPoints: [
      'a DEBE ser diferente de 0 para que sea una función cuadrática',
      'Cuidado con el signo negativo en h = -b/(2a) - siempre usa -b, no b',
      'Al calcular b², usa paréntesis: (-5)² = 25, no -5² = -25',
      'En forma canónica/factorizada, el signo dentro del paréntesis es opuesto al valor de h o r',
      'El vértice y las raíces son conceptos diferentes (excepto en raíz doble)',
      'No todas las funciones cuadráticas tienen raíces reales - usa el discriminante',
      'La fórmula cuadrática siempre tiene dos soluciones (con ±)',
      'En problemas de aplicación, identifica si piden tiempo (x) o valor (y)',
    ],
  },
  {
    id: 'qf-16',
    topicId: 'funciones-cuadraticas',
    slug: 'resumen-chuleta',
    title: '16 - Resumen y Chuleta',
    description: 'Guía rápida de referencia para funciones cuadráticas. Todas las fórmulas y conceptos clave en un solo lugar.',
    content: 'Esta es una hoja de consulta rápida para tener a mano las fórmulas y conceptos más importantes de las funciones cuadráticas. Úsala como referencia rápida cuando resuelvas problemas.',
    order: 16,
    sections: [
      {
        id: 'qf-16-1',
        title: 'Las Tres Formas de la Función Cuadrática',
        type: 'formula',
        content: `FORMAS PRINCIPALES:

┌─────────────┬──────────────────────────┬────────────────────────────┐
│ Forma       │ Fórmula                  │ Información Directa        │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ General     │ f(x) = ax² + bx + c      │ • Concavidad: signo de a   │
│             │                          │ • Corte con eje Y: (0, c)  │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ Canónica    │ f(x) = a(x - h)² + k     │ • Vértice: (h, k)          │
│             │                          │ • Eje de simetría: x = h   │
├─────────────┼──────────────────────────┼────────────────────────────┤
│ Factorizada │ f(x) = a(x - r₁)(x - r₂) │ • Raíces: (r₁, 0) y (r₂, 0)│
└─────────────┴──────────────────────────┴────────────────────────────┘

IMPORTANTE:
Las tres formas son EQUIVALENTES. Cada una revela información diferente.`,
      },
      {
        id: 'qf-16-2',
        title: 'Fórmulas Clave',
        type: 'formula',
        content: `FÓRMULAS ESENCIALES:

1. VÉRTICE (desde la Forma General)
   Coordenadas (h, k):
   • h = -b / (2a)
   • k = f(h) (evaluar la función en h)

2. RAÍCES (Fórmula General)
   Soluciones de ax² + bx + c = 0:
   • x = (-b ± √(b² - 4ac)) / (2a)

3. DISCRIMINANTE
   Clasifica el tipo de raíces:
   • Δ = b² - 4ac

4. INTERPRETACIÓN DEL DISCRIMINANTE:
   • Δ > 0: 2 raíces reales distintas
   • Δ = 0: 1 raíz real doble
   • Δ < 0: 2 raíces complejas (no reales)`,
      },
      {
        id: 'qf-16-3',
        title: 'Tabla: Interpretación del Discriminante',
        type: 'text',
        content: `┌─────────────┬──────────────────────┬────────────────────────┐
│ Valor de Δ  │ Tipo de Raíces      │ Gráfico                │
├─────────────┼──────────────────────┼────────────────────────┤
│ Δ > 0       │ 2 raíces reales     │ Corta el eje X en      │
│             │ distintas            │ 2 puntos               │
├─────────────┼──────────────────────┼────────────────────────┤
│ Δ = 0       │ 1 raíz real doble   │ Toca el eje X en       │
│             │                      │ el vértice             │
├─────────────┼──────────────────────┼────────────────────────┤
│ Δ < 0       │ 2 raíces complejas  │ No toca el eje X       │
│             │ (no reales)          │                        │
└─────────────┴──────────────────────┴────────────────────────┘`,
      },
      {
        id: 'qf-16-4',
        title: 'Traducción entre Formas',
        type: 'text',
        content: `CÓMO CONVERTIR ENTRE FORMAS:

GENERAL → CANÓNICA:
1. Usa la fórmula del vértice para hallar (h, k)
2. Sustituye en f(x) = a(x - h)² + k
   O bien, completa el cuadrado

GENERAL → FACTORIZADA:
1. Usa la fórmula general para hallar las raíces r₁, r₂
2. Sustituye en f(x) = a(x - r₁)(x - r₂)
   O bien, factoriza directamente

CANÓNICA/FACTORIZADA → GENERAL:
1. Desarrolla los cuadrados y/o los productos
2. Agrupa los términos semejantes`,
      },
      {
        id: 'qf-16-5',
        title: 'Criterios Rápidos para Graficar',
        type: 'text',
        content: `PROCEDIMIENTO RÁPIDO PARA GRAFICAR:

1. ¿Abre arriba o abajo?
   → Mira el signo de a
   • a > 0: abre hacia arriba (U)
   • a < 0: abre hacia abajo (∩)

2. ¿Dónde está el vértice?
   → Usa h = -b/(2a) y k = f(h)
   → Vértice: (h, k)

3. ¿Dónde corta el eje Y?
   → Punto (0, c)

4. ¿Corta el eje X?
   → Calcula Δ = b² - 4ac
   • Si Δ ≥ 0, calcula las raíces
   • Si Δ < 0, no corta el eje X`,
      },
      {
        id: 'qf-16-6',
        title: 'Tabla: Preguntas y Respuestas',
        type: 'text',
        content: `GUÍA RÁPIDA: ¿QUÉ CALCULAR?

┌─────────────────────────────────────┬──────────────────────────┐
│ Si te preguntan por...              │ Debes calcular...        │
├─────────────────────────────────────┼──────────────────────────┤
│ Altura/valor máximo o mínimo        │ La coordenada k del      │
│                                     │ vértice                  │
├─────────────────────────────────────┼──────────────────────────┤
│ El momento/lugar donde ocurre el    │ La coordenada h del      │
│ máximo/mínimo                       │ vértice                  │
├─────────────────────────────────────┼──────────────────────────┤
│ Puntos de corte con el eje X        │ Las raíces (f(x) = 0)    │
├─────────────────────────────────────┼──────────────────────────┤
│ Punto de corte con el eje Y         │ El valor c (f(0))        │
├─────────────────────────────────────┼──────────────────────────┤
│ El número y tipo de soluciones      │ El discriminante (Δ)     │
├─────────────────────────────────────┼──────────────────────────┤
│ El eje de simetría                  │ La línea vertical x = h  │
└─────────────────────────────────────┴──────────────────────────┘`,
      },
      {
        id: 'qf-16-7',
        title: 'Características Clave',
        type: 'text',
        content: `CARACTERÍSTICAS PRINCIPALES:

• Intersección Y: Siempre en (0, c)
• Eje de simetría: Línea vertical x = h
• Concavidad: 
  - Abre arriba si a > 0 (forma U)
  - Abre abajo si a < 0 (forma ∩)
• Vértice: Punto extremo (máximo o mínimo)
• Raíces: Pueden ser 0, 1 o 2 raíces reales
• Dominio: Todos los números reales (ℝ)
• Rango: 
  - Si a > 0: [k, ∞)
  - Si a < 0: (-∞, k]`,
      },
      {
        id: 'qf-16-8',
        title: 'Resumen Visual',
        type: 'text',
        content: `RECUERDA:

✓ Tres formas equivalentes: General, Canónica, Factorizada
✓ Cada forma revela información diferente
✓ El vértice es el punto más importante
✓ El discriminante te dice cuántas raíces hay
✓ La fórmula cuadrática siempre funciona
✓ Usa la forma más conveniente según el problema`,
      },
    ],
    keyPoints: [
      'Tres formas equivalentes: General (ax²+bx+c), Canónica (a(x-h)²+k), Factorizada (a(x-r₁)(x-r₂))',
      'Fórmulas clave: h = -b/(2a), Δ = b²-4ac, x = (-b ± √Δ)/(2a)',
      'El discriminante clasifica raíces: Δ>0 (2 distintas), Δ=0 (1 doble), Δ<0 (complejas)',
      'Intersección Y: (0, c), Eje de simetría: x = h',
      'Concavidad: a>0 (arriba), a<0 (abajo)',
      'Cada forma es útil en diferentes situaciones',
      'Usa esta chuleta como referencia rápida al resolver problemas',
    ],
  },
  {
    id: 'qf-17',
    topicId: 'funciones-cuadraticas',
    slug: 'glosario',
    title: '17 - Glosario',
    description: 'Definiciones de términos importantes. Referencia completa de vocabulario.',
    content: 'Aquí tienes una lista de definiciones simples para los términos más comunes que encontrarás al estudiar funciones cuadráticas. Domina el vocabulario para entender mejor los conceptos.',
    order: 17,
    sections: [
      {
        id: 'qf-17-1',
        title: 'A - Amplitud, Asíntota',
        type: 'text',
        content: `AMPLITUD:
Se refiere a qué tan "ancha" o "estrecha" es una parábola. Está controlada por el valor absoluto del coeficiente a.
• |a| > 1: parábola estrecha
• |a| < 1: parábola ancha

ASÍNTOTA:
Una línea a la que una curva se acerca indefinidamente. Las parábolas NO tienen asíntotas.`,
      },
      {
        id: 'qf-17-2',
        title: 'C - Coeficientes, Completar el Cuadrado, Concavidad',
        type: 'text',
        content: `COEFICIENTES:
Los números a, b y c en la forma general f(x) = ax² + bx + c.
• a: coeficiente cuadrático (debe ser ≠ 0)
• b: coeficiente lineal
• c: término independiente

COMPLETAR EL CUADRADO:
Técnica algebraica para convertir una función de su forma general a su forma canónica.

CONCAVIDAD:
La dirección hacia la que se abre la parábola.
• Cóncava (hacia arriba): Si a > 0. La forma es de una "U"
• Convexa (hacia abajo): Si a < 0. La forma es de una "∩"`,
      },
      {
        id: 'qf-17-3',
        title: 'D - Discriminante, Dominio',
        type: 'text',
        content: `DISCRIMINANTE (Δ):
El valor Δ = b² - 4ac. Determina el número y tipo de raíces de la función.
• Δ > 0: dos raíces reales distintas
• Δ = 0: una raíz real doble
• Δ < 0: dos raíces complejas (no reales)

DOMINIO:
El conjunto de todos los valores de entrada (valores de x) para los cuales la función está definida. Para cualquier función cuadrática, el dominio es siempre todos los números reales (ℝ).`,
      },
      {
        id: 'qf-17-4',
        title: 'E - Ecuación Cuadrática, Eje de Simetría',
        type: 'text',
        content: `ECUACIÓN CUADRÁTICA:
Una ecuación de la forma ax² + bx + c = 0.

EJE DE SIMETRÍA:
La línea vertical que divide la parábola en dos mitades idénticas. Su ecuación es x = h, donde h es la coordenada x del vértice.`,
      },
      {
        id: 'qf-17-5',
        title: 'F - Factorización, Formas',
        type: 'text',
        content: `FACTORIZACIÓN:
El proceso de reescribir un polinomio como el producto de sus factores. Por ejemplo, x² - 4 se factoriza como (x - 2)(x + 2).

FORMAS DE LA FUNCIÓN CUADRÁTICA:

FORMA GENERAL (o polinómica):
f(x) = ax² + bx + c
Muestra el corte con el eje Y directamente (0, c).

FORMA CANÓNICA (o de vértice):
f(x) = a(x - h)² + k
Muestra explícitamente el vértice (h, k) y el eje de simetría x = h.

FORMA FACTORIZADA:
f(x) = a(x - r₁)(x - r₂)
Muestra explícitamente las raíces r₁ y r₂.

FUNCIÓN:
Una regla que asigna a cada elemento de entrada (del dominio) exactamente un elemento de salida (del codominio).`,
      },
      {
        id: 'qf-17-6',
        title: 'I - Intersección',
        type: 'text',
        content: `INTERSECCIÓN:
Punto donde dos o más curvas se encuentran.

TIPOS:
• Intersección con el eje Y: Punto (0, c) donde la parábola corta el eje vertical
• Intersección con el eje X: Puntos (r₁, 0) y (r₂, 0) donde la parábola corta el eje horizontal (son las raíces)`,
      },
      {
        id: 'qf-17-7',
        title: 'M - Máximo, Mínimo',
        type: 'text',
        content: `MÁXIMO:
El punto más alto de una parábola que abre hacia abajo (a < 0). Corresponde al vértice.

MÍNIMO:
El punto más bajo de una parábola que abre hacia arriba (a > 0). Corresponde al vértice.`,
      },
      {
        id: 'qf-17-8',
        title: 'P - Parábola',
        type: 'text',
        content: `PARÁBOLA:
La curva en forma de "U" (o "∩") que representa gráficamente una función cuadrática. Es la gráfica de f(x) = ax² + bx + c.`,
      },
      {
        id: 'qf-17-9',
        title: 'R - Raíz, Rango',
        type: 'text',
        content: `RAÍZ (o cero o solución):
Un valor de x para el cual la función es igual a cero (f(x) = 0). Gráficamente, es el punto donde la parábola corta el eje X.

TIPOS:
• Raíz simple: Cada raíz aparece una vez
• Raíz doble: La misma raíz aparece dos veces (Δ = 0)

RANGO (o Codominio o Imagen):
El conjunto de todos los posibles valores de salida (valores de y) de una función.
• Si a > 0: el rango es [k, ∞)
• Si a < 0: el rango es (-∞, k]
donde k es la coordenada y del vértice.`,
      },
      {
        id: 'qf-17-10',
        title: 'T - Términos',
        type: 'text',
        content: `TÉRMINO:
Parte de una expresión separada por + o -.

TIPOS:
• Término cuadrático: ax²
• Término lineal: bx
• Término independiente: c (número sin variable)

COEFICIENTE:
Número que multiplica una variable. En ax² + bx + c:
• a es el coeficiente de x²
• b es el coeficiente de x
• c es el término independiente`,
      },
      {
        id: 'qf-17-11',
        title: 'V - Vértice',
        type: 'text',
        content: `VÉRTICE:
El punto donde la parábola cambia de dirección. Es el punto más alto (máximo) o más bajo (mínimo) de la curva. Sus coordenadas son (h, k).

CARACTERÍSTICAS:
• Siempre está en el eje de simetría
• Es el punto extremo de la función
• En aplicaciones, representa valores máximos o mínimos
• Se calcula con h = -b/(2a) y k = f(h)`,
      },
      {
        id: 'qf-17-12',
        title: 'Resumen del Glosario',
        type: 'text',
        content: `CONCEPTOS CLAVE:

✓ Parábola: gráfica de una función cuadrática
✓ Vértice: punto extremo (máximo o mínimo)
✓ Raíz: valor de x donde f(x) = 0
✓ Discriminante: b² - 4ac, determina número de raíces
✓ Eje de simetría: línea vertical x = h
✓ Tres formas: General, Canónica, Factorizada
✓ Concavidad: dirección de apertura (arriba o abajo)

DOMINAR EL VOCABULARIO:
Cada término tiene un significado específico. La precisión en el lenguaje mejora la comprensión y la comunicación matemática.`,
      },
    ],
    keyPoints: [
      'Parábola: gráfica de una función cuadrática en forma de U o ∩',
      'Vértice: punto extremo (máximo o mínimo) de la parábola',
      'Raíz: valor de x donde f(x) = 0 (corte con eje X)',
      'Discriminante: b² - 4ac, determina el número y tipo de raíces',
      'Eje de simetría: línea vertical x = h que divide la parábola en dos mitades iguales',
      'Tres formas: General (ax²+bx+c), Canónica (a(x-h)²+k), Factorizada (a(x-r₁)(x-r₂))',
      'Concavidad: dirección de apertura (arriba si a>0, abajo si a<0)',
      'Dominar el vocabulario mejora la comprensión y comunicación matemática',
    ],
  },
  {
    id: 'qf-18',
    topicId: 'funciones-cuadraticas',
    slug: 'faq',
    title: '18 - Preguntas Frecuentes',
    description: 'Respuestas a preguntas comunes sobre cuadráticas. Aclaramos dudas frecuentes.',
    content: 'Aquí se responden algunas de las dudas más comunes que surgen al estudiar funciones cuadráticas. Estas respuestas te ayudarán a aclarar conceptos y resolver problemas con mayor confianza.',
    order: 18,
    sections: [
      {
        id: 'qf-18-1',
        title: 'Pregunta 1: ¿Cómo sé si conviene factorizar o usar la fórmula general?',
        type: 'text',
        content: `Esta es una decisión estratégica importante.

INTENTA FACTORIZAR PRIMERO SI:
• Los coeficientes a, b, c son números enteros y pequeños
• El caso es simple (a = 1, o c = 0, o b = 0)
• Puedes "ver" rápidamente los números que funcionan (para x² + bx + c, dos números que multiplican c y suman b)

USA LA FÓRMULA GENERAL SIEMPRE QUE:
• La factorización no sea obvia después de unos segundos
• Los coeficientes sean grandes, fraccionarios o irracionales
• Quieras estar 100% seguro de no cometer un error al tantear
• El problema te pida explícitamente que la uses

CONCLUSIÓN:
La fórmula general SIEMPRE FUNCIONA. La factorización es un ATAJO útil en ciertas situaciones. Si dudas, usa la fórmula general.`,
      },
      {
        id: 'qf-18-2',
        title: 'Pregunta 2: ¿Qué pasa si a es negativo? ¿Cambia algo?',
        type: 'text',
        content: `Sí, y es muy importante.

GRÁFICAMENTE:
• La parábola se abre HACIA ABAJO
• El vértice es un MÁXIMO, no un mínimo

ALGEBRAICAMENTE:
Todas las fórmulas funcionan igual, pero debes tener mucho cuidado con los signos:
• Vértice (h = -b/2a): El denominador 2a será negativo
• Discriminante (Δ = b² - 4ac): El término -4ac a menudo se vuelve positivo si c también es positivo, lo que puede ser contraintuitivo

CONSEJO:
Al resolver la ecuación ax² + bx + c = 0 con a negativo, a algunos estudiantes les resulta más fácil multiplicar toda la ecuación por -1 para hacer a positivo. Por ejemplo, resolver -x² + 3x - 2 = 0 es lo mismo que resolver x² - 3x + 2 = 0.

⚠️ PERO TEN CUIDADO: Esto solo se puede hacer con la ECUACIÓN (cuando está igualada a 0), no con la FUNCIÓN f(x), ya que cambiarías el gráfico (lo voltearías).`,
      },
      {
        id: 'qf-18-3',
        title: 'Pregunta 3: ¿Cómo estimo el vértice rápidamente sin hacer todos los cálculos?',
        type: 'text',
        content: `TRUCOS RÁPIDOS:

1. SI TIENES LAS RAÍCES (r₁, r₂):
   El vértice está justo en el medio. Calcula el promedio:
   h = (r₁ + r₂) / 2

2. SI TIENES EL CORTE CON EL EJE Y (0, c) Y SU PUNTO SIMÉTRICO (2h, c):
   El vértice está a la misma distancia horizontal de ambos.

3. INTUICIÓN CON b Y a:
   Recuerda la regla de signos:
   • Si a y b tienen el mismo signo, el vértice está a la izquierda del eje Y (h < 0)
   • Si a y b tienen signos opuestos, el vértice está a la derecha del eje Y (h > 0)`,
      },
      {
        id: 'qf-18-4',
        title: 'Pregunta 4: ¿Por qué a veces no hay raíces reales? ¿Qué significa?',
        type: 'text',
        content: `SIGNIFICADO ALGEBRAICO:
Ocurre cuando el discriminante Δ = b² - 4ac es negativo. Esto significa que para resolver la fórmula general, tendrías que calcular la raíz cuadrada de un número negativo, lo cual no es posible en los números reales.

SIGNIFICADO GRÁFICO:
La parábola NO cruza el eje X. Está "flotando" completamente por encima o por debajo de él.
• Si a > 0: su punto más bajo (el vértice) está por encima de y = 0
• Si a < 0: su punto más alto (el vértice) está por debajo de y = 0

EN LA VIDA REAL:
Esto puede significar que una situación nunca ocurre. Por ejemplo, si una función modela las ganancias de un negocio y no tiene raíces reales (y a < 0), podría significar que el negocio SIEMPRE da pérdidas.`,
      },
      {
        id: 'qf-18-5',
        title: 'Pregunta 5: ¿La forma canónica y la factorizada son siempre mejores que la general?',
        type: 'text',
        content: `No necesariamente. Cada forma tiene su utilidad.

FORMA GENERAL (ax² + bx + c):
• MEJOR PARA: Ver el corte con el eje Y de un vistazo (es c)
• Es la forma en que se plantean la mayoría de los problemas

FORMA CANÓNICA (a(x - h)² + k):
• MEJOR PARA: Ver el vértice y el eje de simetría de un vistazo
• Ideal para problemas de optimización (máximos y mínimos)

FORMA FACTORIZADA (a(x - r₁)(x - r₂)):
• MEJOR PARA: Ver las raíces (cortes con el eje X) de un vistazo

EL VERDADERO DOMINIO:
Viene de la habilidad de pasar de una forma a otra según lo que necesites resolver.`,
      },
      {
        id: 'qf-18-6',
        title: 'Pregunta 6: ¿Por qué el vértice es importante?',
        type: 'text',
        content: `El vértice es el punto MÁS IMPORTANTE de una parábola porque:

1. ES EL PUNTO EXTREMO:
   • Si a > 0: es el punto MÍNIMO (más bajo)
   • Si a < 0: es el punto MÁXIMO (más alto)

2. EN APLICACIONES REALES:
   • Representa el máximo/mínimo de cantidad (ganancia, altura, área, etc.)
   • Es crucial en problemas de optimización

3. PARA GRAFICAR:
   • Es el punto de referencia más importante
   • Todo lo demás se organiza alrededor de él

4. EJE DE SIMETRÍA:
   • El vértice siempre está en el eje de simetría
   • Conoces el vértice, conoces el eje de simetría`,
      },
      {
        id: 'qf-18-7',
        title: 'Pregunta 7: ¿Cuándo no hay raíces reales?',
        type: 'text',
        content: `Cuando el DISCRIMINANTE es negativo (Δ < 0).

SIGNIFICADO:
• La parábola NUNCA toca el eje X
• Las raíces existen pero son NÚMEROS COMPLEJOS (no reales)
• No se pueden representar en la recta real

GRÁFICAMENTE:
• Si a > 0: la parábola está completamente por encima del eje X
• Si a < 0: la parábola está completamente por debajo del eje X

EJEMPLO:
f(x) = x² + 2x + 5
Δ = 2² - 4(1)(5) = 4 - 20 = -16 < 0
No hay raíces reales. La parábola nunca toca el eje X.`,
      },
      {
        id: 'qf-18-8',
        title: 'Pregunta 8: ¿Cuál forma debo usar?',
        type: 'text',
        content: `Depende del problema que estés resolviendo:

USA LA FORMA GENERAL (ax² + bx + c) CUANDO:
• Tienes la función en esta forma
• Necesitas ver el corte con el eje Y rápidamente
• Es la forma más común en problemas

USA LA FORMA CANÓNICA (a(x - h)² + k) CUANDO:
• Necesitas el vértice rápidamente
• Trabajas con problemas de optimización (máximos/mínimos)
• Necesitas el eje de simetría

USA LA FORMA FACTORIZADA (a(x - r₁)(x - r₂)) CUANDO:
• Necesitas las raíces rápidamente
• Quieres ver los cortes con el eje X
• Estás resolviendo ecuaciones

RECUERDA:
Puedes convertir entre formas según lo que necesites.`,
      },
      {
        id: 'qf-18-9',
        title: 'Pregunta 9: ¿Es difícil este tema?',
        type: 'text',
        content: `No es difícil, solo tiene muchos casos y conceptos que aprender.

LA CLAVE ES:
• Practicar ejercicios regularmente
• Entender qué representa cada parte (a, b, c, h, k, r₁, r₂)
• Familiarizarte con las fórmulas
• Ver muchos ejemplos

CONSEJOS:
• Empieza con casos simples (a = 1)
• Practica graficar a mano
• Resuelve problemas de aplicación
• Usa la chuleta de fórmulas como referencia

¡TÚ PUEDES!
Con práctica y paciencia, dominarás las funciones cuadráticas.`,
      },
      {
        id: 'qf-18-10',
        title: 'Pregunta 10: ¿Qué hago si me confundo con los signos?',
        type: 'tip',
        content: `💡 CONSEJOS PARA EVITAR CONFUSIÓN CON SIGNOS:

1. USA PARÉNTESIS:
   Siempre sustituye valores entre paréntesis: h = -(-6)/(2×1)

2. VERIFICA CON EJEMPLOS:
   Prueba con funciones simples primero

3. RECUERDA REGLAS CLAVE:
   • En forma canónica: (x + 3) significa h = -3
   • En fórmula del vértice: siempre usa -b, no b
   • Al elevar al cuadrado: (-5)² = 25, no -25

4. VERIFICA TUS RESULTADOS:
   Sustituye tus respuestas en la ecuación original

5. USA EL SENTIDO COMÚN:
   Si algo no tiene sentido, revisa los signos`,
      },
      {
        id: 'qf-18-11',
        title: 'Resumen de FAQ',
        type: 'text',
        content: `PREGUNTAS MÁS FRECUENTES:

✓ Factorizar vs. Fórmula General: La fórmula siempre funciona, la factorización es un atajo
✓ a negativo: La parábola abre hacia abajo, el vértice es un máximo
✓ Estimar vértice: Usa el promedio de raíces o la regla de signos
✓ Sin raíces reales: Ocurre cuando Δ < 0, las raíces son complejas
✓ Qué forma usar: Depende del problema (General, Canónica, Factorizada)
✓ Importancia del vértice: Es el punto extremo, crucial en aplicaciones
✓ Dificultad: No es difícil, solo requiere práctica

RECUERDA:
Si tienes más dudas, revisa las lecciones anteriores o practica con ejercicios.`,
      },
    ],
    keyPoints: [
      'Factorizar vs. Fórmula General: La fórmula siempre funciona, la factorización es un atajo útil',
      'Si a es negativo: la parábola abre hacia abajo y el vértice es un máximo',
      'Puedes estimar el vértice usando el promedio de raíces o la regla de signos',
      'No hay raíces reales cuando Δ < 0 (las raíces son complejas)',
      'Cada forma (General, Canónica, Factorizada) es útil en diferentes situaciones',
      'El vértice es crucial porque es el punto extremo y esencial en aplicaciones',
      'El tema no es difícil, solo requiere práctica y entender qué representa cada parte',
      'Usa paréntesis y verifica resultados para evitar errores con signos',
    ],
  },
];

export const vscodeLessons: Lesson[] = [
  {
    id: 'vscode-01',
    topicId: 'visual-studio-code',
    slug: 'introduccion',
    title: '01 - Introducción a Visual Studio Code',
    description: '¿Qué es Visual Studio Code? ¿Para qué sirve? ¿Por qué usarlo? Conoce esta poderosa herramienta de programación.',
    content: 'Visual Studio Code es un editor de código gratuito y de código abierto desarrollado por Microsoft. Es una herramienta que te permite escribir, editar y gestionar código de programación de manera fácil y eficiente.',
    order: 1,
    sections: [
      {
        id: 'vscode-01-1',
        title: '¿Qué es Visual Studio Code?',
        type: 'definition',
        content: 'Visual Studio Code (también conocido como VS Code) es un editor de código gratuito y de código abierto desarrollado por Microsoft. Es una herramienta que te permite escribir, editar y gestionar código de programación de manera fácil y eficiente. En términos simples: Imagina que un procesador de texto (como Word) es para escribir documentos, VS Code es para escribir código de programación. Pero VS Code es mucho más inteligente: entiende el código que escribes, te ayuda a encontrar errores, y tiene muchas herramientas útiles integradas.',
      },
      {
        id: 'vscode-01-2',
        title: '¿Para qué sirve VS Code?',
        type: 'text',
        content: 'VS Code sirve para: 1. Escribir código en cualquier lenguaje de programación (JavaScript, Python, HTML, CSS, Java, C++, y muchos más) 2. Organizar proyectos de programación con múltiples archivos 3. Ejecutar código directamente desde el editor 4. Encontrar y corregir errores en tu código 5. Trabajar con control de versiones (como Git) 6. Personalizar tu entorno de trabajo según tus preferencias',
      },
      {
        id: 'vscode-01-3',
        title: '¿Por qué usar VS Code?',
        type: 'text',
        content: 'Ventajas principales: ✅ Gratis: No cuesta nada descargarlo y usarlo ✅ Ligero: Funciona rápido incluso en computadoras no muy potentes ✅ Multiplataforma: Funciona en Windows, Mac y Linux ✅ Extensible: Puedes agregar extensiones para agregar funcionalidades ✅ Popular: Es uno de los editores más usados por programadores ✅ Fácil de usar: Tiene una interfaz intuitiva y clara',
      },
    ],
    keyPoints: [
      'VS Code es un editor de código gratuito y de código abierto',
      'Sirve para escribir, editar y gestionar código de programación',
      'Funciona en Windows, Mac y Linux',
      'Es extensible mediante extensiones',
      'Es uno de los editores más populares entre programadores',
    ],
  },
  {
    id: 'vscode-02',
    topicId: 'visual-studio-code',
    slug: 'instalacion',
    title: '02 - Instalación de Visual Studio Code',
    description: 'Aprende a instalar VS Code paso a paso en Windows, Mac y Linux.',
    content: 'Instalar VS Code es muy sencillo. Solo necesitas descargarlo del sitio oficial e instalarlo en tu computadora. El proceso varía ligeramente según tu sistema operativo.',
    order: 2,
    sections: [
      {
        id: 'vscode-02-1',
        title: 'Descargar VS Code',
        type: 'text',
        content: 'Paso 1: Descargar VS Code. Opción 1: Desde el sitio oficial (Recomendado) - Ve a https://code.visualstudio.com/ y descarga. Opción 2: Descarga directa según tu sistema operativo.',
      },
      {
        id: 'vscode-02-2',
        title: 'Instalar en Windows',
        type: 'text',
        content: '1. Busca el archivo descargado (generalmente en "Descargas") 2. Haz doble clic en el archivo .exe 3. Marca la casilla "Add to PATH" (importante) 4. Sigue el asistente de instalación 5. Haz clic en "Finish" cuando termine',
      },
      {
        id: 'vscode-02-3',
        title: 'Instalar en Mac',
        type: 'text',
        content: '1. Busca el archivo descargado (.zip o .dmg) 2. Si es .zip, descomprímelo 3. Si es .dmg, ábrelo 4. Arrastra VS Code a la carpeta Applications 5. Abre Applications y ejecuta VS Code',
      },
      {
        id: 'vscode-02-4',
        title: 'Instalar en Linux',
        type: 'text',
        content: 'Puedes usar el instalador .deb o el repositorio oficial. Método recomendado: usar el repositorio oficial para recibir actualizaciones automáticas.',
      },
    ],
    keyPoints: [
      'Descarga VS Code desde code.visualstudio.com',
      'En Windows, marca "Add to PATH" durante la instalación',
      'En Mac, arrastra VS Code a Applications',
      'En Linux, puedes usar el instalador .deb o el repositorio oficial',
      'Verifica la instalación abriendo VS Code después de instalar',
    ],
  },
  {
    id: 'vscode-03',
    topicId: 'visual-studio-code',
    slug: 'primeros-pasos',
    title: '03 - Primeros Pasos en Visual Studio Code',
    description: 'Aprende a abrir VS Code, crear tu primer archivo y guardarlo.',
    content: 'Ahora que tienes VS Code instalado, es momento de dar tus primeros pasos: abrir el programa, crear un archivo, escribir algo y guardarlo.',
    order: 3,
    sections: [
      {
        id: 'vscode-03-1',
        title: 'Abrir Visual Studio Code',
        type: 'text',
        content: 'Método 1: Desde el menú de inicio/aplicaciones. Método 2: Desde la terminal escribiendo "code". Método 3: Abrir una carpeta directamente haciendo clic derecho y seleccionando "Open with Code".',
      },
      {
        id: 'vscode-03-2',
        title: 'Crear tu primer archivo',
        type: 'example',
        content: 'Paso 1: Crear un archivo nuevo con Ctrl + N (Windows/Linux) o Cmd + N (Mac). Paso 2: Escribir algo en el área de edición. Paso 3: Guardar el archivo con Ctrl + S (Windows/Linux) o Cmd + S (Mac). Elige una ubicación y un nombre para el archivo.',
      },
    ],
    keyPoints: [
      'Puedes abrir VS Code desde el menú, terminal o arrastrando una carpeta',
      'Crea archivos nuevos con Ctrl + N (Windows/Linux) o Cmd + N (Mac)',
      'Guarda archivos con Ctrl + S (Windows/Linux) o Cmd + S (Mac)',
      'Cada archivo abierto aparece como una pestaña',
      'Guarda frecuentemente para no perder tu trabajo',
    ],
  },
  {
    id: 'vscode-04',
    topicId: 'visual-studio-code',
    slug: 'interfaz-basica',
    title: '04 - Interfaz Básica de Visual Studio Code',
    description: 'Conoce las partes principales de VS Code: explorador, editor, terminal y más.',
    content: 'VS Code tiene una interfaz organizada en varias áreas. Conocer cada parte te ayudará a navegar y usar VS Code eficientemente.',
    order: 4,
    sections: [
      {
        id: 'vscode-04-1',
        title: 'Partes principales de VS Code',
        type: 'text',
        content: '1. Barra de menú (arriba): Contiene menús desplegables. 2. Barra lateral izquierda: Iconos para diferentes funciones (Explorador, Buscar, Git, Depurar, Extensiones). 3. Área de edición (centro): Donde escribes tu código. 4. Panel inferior: Terminal, problemas, salida. 5. Barra de estado (abajo): Información útil como número de línea, tipo de archivo, etc.',
      },
      {
        id: 'vscode-04-2',
        title: 'Mostrar/ocultar paneles',
        type: 'tip',
        content: 'Ocultar barra lateral: Ctrl + B (Windows/Linux) o Cmd + B (Mac). Mostrar/ocultar panel inferior: Ctrl + J (Windows/Linux) o Cmd + J (Mac). Vista de solo editor (Zen Mode): Ctrl + K luego Z (Windows/Linux) o Cmd + K luego Z (Mac).',
      },
    ],
    keyPoints: [
      'La barra lateral izquierda contiene iconos para diferentes funciones',
      'El área central es donde escribes tu código',
      'El panel inferior muestra terminal, problemas y salida',
      'Puedes mostrar/ocultar paneles con atajos de teclado',
      'Cada parte de la interfaz tiene un propósito específico',
    ],
  },
  {
    id: 'vscode-05',
    topicId: 'visual-studio-code',
    slug: 'escribir-codigo',
    title: '05 - Escribir Código en Visual Studio Code',
    description: 'Aprende sobre resaltado de sintaxis, autocompletado, formateo y más características útiles.',
    content: 'VS Code hace que escribir código sea más fácil con características como resaltado de sintaxis, autocompletado inteligente y formateo automático.',
    order: 5,
    sections: [
      {
        id: 'vscode-05-1',
        title: 'Resaltado de sintaxis',
        type: 'text',
        content: 'El resaltado de sintaxis colorea diferentes partes de tu código para que sea más fácil de leer. VS Code automáticamente colorea palabras clave, strings, números y comentarios.',
      },
      {
        id: 'vscode-05-2',
        title: 'Autocompletado inteligente (IntelliSense)',
        type: 'text',
        content: 'VS Code te ayuda a escribir código más rápido sugiriendo palabras mientras escribes. IntelliSense no solo sugiere palabras, sino que también muestra información sobre funciones y documentación.',
      },
      {
        id: 'vscode-05-3',
        title: 'Formateo automático',
        type: 'tip',
        content: 'Formatear un archivo: Shift + Alt + F (Windows/Linux) o Shift + Option + F (Mac). Para formatear al guardar, ve a Settings y activa "Editor: Format On Save".',
      },
      {
        id: 'vscode-05-4',
        title: 'Comentarios',
        type: 'text',
        content: 'Los comentarios son notas en tu código que no se ejecutan. Atajo para comentar/descomentar: Ctrl + / (Windows/Linux) o Cmd + / (Mac).',
      },
    ],
    keyPoints: [
      'El resaltado de sintaxis colorea el código automáticamente',
      'IntelliSense sugiere código mientras escribes',
      'Puedes formatear código con Shift + Alt + F',
      'Los comentarios ayudan a explicar tu código',
      'Usa Ctrl + / para comentar/descomentar líneas',
    ],
  },
  {
    id: 'vscode-06',
    topicId: 'visual-studio-code',
    slug: 'ejecutar-codigo',
    title: '06 - Ejecutar Código en Visual Studio Code',
    description: 'Aprende a ejecutar código desde VS Code usando el terminal integrado y extensiones.',
    content: 'Ejecutar código significa hacer que la computadora lea y ejecute las instrucciones que escribiste. VS Code ofrece varias formas de ejecutar código.',
    order: 6,
    sections: [
      {
        id: 'vscode-06-1',
        title: 'Terminal integrado',
        type: 'text',
        content: 'El terminal integrado es la forma más común de ejecutar código. Abre el terminal con Ctrl + Ñ o Ctrl + ` (backtick). Ejecuta JavaScript con: node archivo.js. Ejecuta Python con: python archivo.py (o python3 en Mac/Linux).',
      },
      {
        id: 'vscode-06-2',
        title: 'Code Runner (Extensión)',
        type: 'text',
        content: 'Code Runner es una extensión que permite ejecutar código con un solo clic. Instálala desde el panel de extensiones. Luego usa el botón ▶️ "Run Code" o presiona Ctrl + Alt + N (Windows/Linux) o Ctrl + Option + N (Mac).',
      },
    ],
    keyPoints: [
      'El terminal integrado es la forma más común de ejecutar código',
      'Abre el terminal con Ctrl + Ñ o Ctrl + `',
      'Ejecuta JavaScript con: node archivo.js',
      'Ejecuta Python con: python archivo.py',
      'Code Runner permite ejecutar código con un solo clic',
    ],
  },
  {
    id: 'vscode-07',
    topicId: 'visual-studio-code',
    slug: 'extensiones-basicas',
    title: '07 - Extensiones Básicas para Visual Studio Code',
    description: 'Aprende qué son las extensiones, cómo instalarlas y cuáles son esenciales para empezar.',
    content: 'Las extensiones son complementos que agregan funcionalidades adicionales a VS Code. Son como "aplicaciones" que puedes instalar dentro de VS Code.',
    order: 7,
    sections: [
      {
        id: 'vscode-07-1',
        title: '¿Qué son las extensiones?',
        type: 'definition',
        content: 'Las extensiones son complementos que agregan funcionalidades adicionales a VS Code. Mejoran tu productividad, agregan soporte para más lenguajes, integran herramientas y personalizan VS Code para tu trabajo específico.',
      },
      {
        id: 'vscode-07-2',
        title: 'Cómo instalar extensiones',
        type: 'text',
        content: 'Método 1: Desde el panel de extensiones (Ctrl + Shift + X). Método 2: Desde el marketplace web (marketplace.visualstudio.com). Busca la extensión, haz clic en Install y espera a que se instale.',
      },
      {
        id: 'vscode-07-3',
        title: 'Extensiones esenciales',
        type: 'text',
        content: '1. Python (Microsoft) - Soporte completo para Python. 2. JavaScript (ES6) Code Snippets - Snippets de código JavaScript. 3. Live Server - Abre páginas HTML en el navegador con actualización automática. 4. Code Runner - Ejecuta código con un solo clic. 5. Prettier - Code formatter - Formatea código automáticamente. 6. GitLens - Mejora la integración con Git.',
      },
    ],
    keyPoints: [
      'Las extensiones agregan funcionalidades a VS Code',
      'Instala extensiones desde el panel de extensiones (Ctrl + Shift + X)',
      'Python extension es esencial para programar en Python',
      'Live Server es útil para desarrollo web',
      'Code Runner facilita ejecutar código rápidamente',
      'No instales demasiadas extensiones, solo las que necesites',
    ],
  },
  {
    id: 'vscode-08',
    topicId: 'visual-studio-code',
    slug: 'terminal-basico',
    title: '08 - Terminal Básico en Visual Studio Code',
    description: 'Aprende a usar el terminal integrado y comandos básicos para ejecutar código y gestionar archivos.',
    content: 'El terminal es una forma de comunicarte con tu computadora escribiendo comandos de texto. Es esencial para programar.',
    order: 8,
    sections: [
      {
        id: 'vscode-08-1',
        title: '¿Qué es el terminal?',
        type: 'definition',
        content: 'El terminal (también llamado "línea de comandos" o "consola") es una forma de comunicarte con tu computadora escribiendo comandos de texto. Es más rápido, más poderoso, necesario para programar y esencial para ejecutar código.',
      },
      {
        id: 'vscode-08-2',
        title: 'Comandos básicos',
        type: 'text',
        content: 'Navegar: pwd (ver dónde estás), ls (Mac/Linux) o dir (Windows) para ver archivos, cd nombre-carpeta para entrar a una carpeta, cd .. para volver. Ejecutar: python archivo.py para Python, node archivo.js para JavaScript. Otros: clear (Mac/Linux) o cls (Windows) para limpiar, Ctrl + C para cancelar.',
      },
    ],
    keyPoints: [
      'El terminal permite ejecutar comandos de texto',
      'Abre el terminal con Ctrl + Ñ o Ctrl + `',
      'Usa cd para cambiar de carpeta',
      'Usa ls (Mac/Linux) o dir (Windows) para ver archivos',
      'Ejecuta código con python o node seguido del nombre del archivo',
    ],
  },
  {
    id: 'vscode-09',
    topicId: 'visual-studio-code',
    slug: 'atajos-basicos',
    title: '09 - Atajos Básicos de Teclado',
    description: 'Aprende los atajos de teclado más importantes para ser más productivo en VS Code.',
    content: 'Los atajos de teclado son combinaciones de teclas que realizan acciones rápidamente. Aprenderlos te hará mucho más productivo.',
    order: 9,
    sections: [
      {
        id: 'vscode-09-1',
        title: 'Atajos esenciales',
        type: 'text',
        content: 'Guardar: Ctrl + S (Windows/Linux) o Cmd + S (Mac). Abrir archivo: Ctrl + O. Nuevo archivo: Ctrl + N. Buscar: Ctrl + F. Ir a archivo: Ctrl + P. Terminal: Ctrl + Ñ o Ctrl + `. Comentar: Ctrl + /. Mostrar/ocultar barra lateral: Ctrl + B.',
      },
      {
        id: 'vscode-09-2',
        title: 'Los 10 atajos más importantes',
        type: 'tip',
        content: '1. Ctrl + S - Guardar 2. Ctrl + F - Buscar 3. Ctrl + P - Ir a archivo 4. Ctrl + / - Comentar 5. Ctrl + B - Mostrar/ocultar barra lateral 6. Ctrl + Ñ - Terminal 7. Ctrl + Z - Deshacer 8. Ctrl + Shift + P - Paleta de comandos 9. F12 - Ir a definición 10. Ctrl + , - Configuración',
      },
    ],
    keyPoints: [
      'Los atajos de teclado te hacen más productivo',
      'Ctrl + S (Cmd + S en Mac) guarda el archivo',
      'Ctrl + F (Cmd + F en Mac) busca en el archivo',
      'Ctrl + P (Cmd + P en Mac) abre archivos rápidamente',
      'Aprende los atajos gradualmente, no todos a la vez',
    ],
  },
  {
    id: 'vscode-10',
    topicId: 'visual-studio-code',
    slug: 'trabajar-con-carpetas',
    title: '10 - Trabajar con Carpetas en Visual Studio Code',
    description: 'Aprende a abrir carpetas, organizar proyectos y trabajar con múltiples archivos.',
    content: 'Cuando programas, normalmente trabajas con múltiples archivos organizados en carpetas. VS Code está diseñado para trabajar con proyectos completos.',
    order: 10,
    sections: [
      {
        id: 'vscode-10-1',
        title: 'Abrir una carpeta',
        type: 'text',
        content: 'Método 1: File → Open Folder (Ctrl + K luego Ctrl + O). Método 2: Arrastrar y soltar la carpeta a VS Code. Método 3: Desde la terminal, navega a la carpeta y escribe "code ."',
      },
      {
        id: 'vscode-10-2',
        title: 'Crear archivos y carpetas',
        type: 'text',
        content: 'Crear archivo: Clic derecho en el explorador → New File. Crear carpeta: Clic derecho en el explorador → New Folder. Escribe el nombre y presiona Enter.',
      },
    ],
    keyPoints: [
      'Abre carpetas con File → Open Folder o arrastrando la carpeta',
      'El explorador muestra todos los archivos del proyecto',
      'Crea archivos y carpetas haciendo clic derecho en el explorador',
      'Trabajar con carpetas te permite organizar mejor tus proyectos',
      'Puedes tener múltiples archivos abiertos en pestañas',
    ],
  },
  {
    id: 'vscode-11',
    topicId: 'visual-studio-code',
    slug: 'buscar-y-reemplazar',
    title: '11 - Buscar y Reemplazar en Visual Studio Code',
    description: 'Aprende a buscar texto en archivos y reemplazarlo eficientemente.',
    content: 'VS Code tiene herramientas poderosas para buscar y reemplazar texto en uno o múltiples archivos.',
    order: 11,
    sections: [
      {
        id: 'vscode-11-1',
        title: 'Buscar en un archivo',
        type: 'text',
        content: 'Abrir búsqueda: Ctrl + F (Windows/Linux) o Cmd + F (Mac). Opciones: Match Case (coincidir mayúsculas/minúsculas), Match Whole Word (palabra completa), Use Regular Expression (búsqueda avanzada).',
      },
      {
        id: 'vscode-11-2',
        title: 'Reemplazar',
        type: 'text',
        content: 'Abrir reemplazar: Ctrl + H (Windows/Linux) o Cmd + Option + F (Mac). Buscar en todos los archivos: Ctrl + Shift + F. Ten cuidado con "Replace All", revisa los resultados primero.',
      },
    ],
    keyPoints: [
      'Busca en un archivo con Ctrl + F (Cmd + F en Mac)',
      'Reemplaza con Ctrl + H (Cmd + Option + F en Mac)',
      'Busca en todos los archivos con Ctrl + Shift + F',
      'Usa "Match Whole Word" para evitar reemplazar partes de palabras',
      'Ten cuidado con "Replace All", revisa los resultados primero',
    ],
  },
  {
    id: 'vscode-12',
    topicId: 'visual-studio-code',
    slug: 'configuracion-basica',
    title: '12 - Configuración Básica de Visual Studio Code',
    description: 'Aprende a personalizar VS Code: temas, fuentes, tamaños y configuraciones básicas.',
    content: 'Personalizar VS Code te permite hacerlo más cómodo y productivo. Puedes ajustar el tamaño de fuente, colores, temas y más.',
    order: 12,
    sections: [
      {
        id: 'vscode-12-1',
        title: 'Abrir la configuración',
        type: 'text',
        content: 'Método 1: Ctrl + , (Windows/Linux) o Cmd + , (Mac). Método 2: File → Preferences → Settings. Método 3: Paleta de comandos (Ctrl + Shift + P) → "Preferences: Open Settings"',
      },
      {
        id: 'vscode-12-2',
        title: 'Configuraciones importantes',
        type: 'text',
        content: 'Tamaño de fuente: Busca "font size" y cambia "Editor: Font Size". Tema: Ctrl + K luego Ctrl + T. Formatear al guardar: Busca "format on save" y marca la casilla. Auto-guardado: Busca "auto save" y selecciona "afterDelay" con 1000ms.',
      },
    ],
    keyPoints: [
      'Abre la configuración con Ctrl + , (Cmd + , en Mac)',
      'Puedes cambiar el tamaño de fuente, tema y más',
      'Activa "format on save" para formatear código automáticamente',
      'Configura auto-guardado para no perder tu trabajo',
      'Experimenta con diferentes configuraciones hasta encontrar lo que te gusta',
    ],
  },
  {
    id: 'vscode-13',
    topicId: 'visual-studio-code',
    slug: 'resumen',
    title: '13 - Resumen del Curso de Visual Studio Code',
    description: 'Resumen de todo lo aprendido y próximos pasos recomendados.',
    content: 'Has completado el curso básico de Visual Studio Code. Ahora tienes las herramientas y conocimientos necesarios para empezar a programar eficientemente.',
    order: 13,
    sections: [
      {
        id: 'vscode-13-1',
        title: 'Lo que has aprendido',
        type: 'text',
        content: 'Has aprendido: Qué es VS Code, cómo instalarlo, crear y guardar archivos, la interfaz básica, escribir código, ejecutar código, instalar extensiones, usar el terminal, atajos de teclado, trabajar con carpetas, buscar y reemplazar, y personalizar VS Code.',
      },
      {
        id: 'vscode-13-2',
        title: 'Próximos pasos',
        type: 'text',
        content: '1. Practica lo aprendido creando proyectos pequeños. 2. Aprende un lenguaje de programación (Python, JavaScript, HTML/CSS). 3. Explora más funcionalidades (Git, debugging, snippets). 4. Únete a la comunidad (documentación oficial, foros, YouTube).',
      },
    ],
    keyPoints: [
      'Has aprendido los fundamentos de VS Code',
      'Practica regularmente para mejorar',
      'Aprende un lenguaje de programación ahora que sabes usar VS Code',
      'Explora más funcionalidades avanzadas',
      'Únete a la comunidad para seguir aprendiendo',
    ],
  },
  {
    id: 'vscode-14',
    topicId: 'visual-studio-code',
    slug: 'faq',
    title: '14 - Preguntas Frecuentes (FAQ)',
    description: 'Respuestas a las preguntas más comunes sobre Visual Studio Code.',
    content: 'Esta sección responde las preguntas más frecuentes que tienen los principiantes sobre VS Code.',
    order: 14,
    sections: [
      {
        id: 'vscode-14-1',
        title: 'Preguntas generales',
        type: 'text',
        content: '¿VS Code es gratis? Sí, completamente gratuito y de código abierto. ¿Necesito internet? No, una vez instalado funciona sin internet. Solo necesitas internet para instalar VS Code, extensiones y actualizaciones. ¿VS Code es lo mismo que Visual Studio? No, son diferentes. VS Code es un editor ligero y gratuito. Visual Studio es un IDE completo y más pesado.',
      },
      {
        id: 'vscode-14-2',
        title: 'Problemas comunes',
        type: 'text',
        content: 'VS Code no se abre: Reinicia tu computadora o reinstala VS Code. Mi código no se colorea: Asegúrate de que el archivo tenga extensión (.js, .py). El terminal no funciona: Verifica que tengas un terminal instalado y reinicia VS Code.',
      },
    ],
    keyPoints: [
      'VS Code es completamente gratuito',
      'Funciona sin internet una vez instalado',
      'Si tienes problemas, reinicia VS Code o tu computadora',
      'Asegúrate de que los archivos tengan la extensión correcta',
      'Busca ayuda en la documentación oficial o comunidades',
    ],
  },
];

export const getQuadraticLessonById = (id: string) => {
  return quadraticLessons.find(lesson => lesson.id === id);
};

export const getQuadraticLessonBySlug = (slug: string) => {
  return quadraticLessons.find(lesson => lesson.slug === slug);
};

export const getVSCodeLessonById = (id: string) => {
  return vscodeLessons.find(lesson => lesson.id === id);
};

export const getVSCodeLessonBySlug = (slug: string) => {
  return vscodeLessons.find(lesson => lesson.slug === slug);
};
