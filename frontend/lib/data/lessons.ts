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
    description: 'Expresar la función en términos de sus raíces.',
    content: 'La forma factorizada muestra directamente las raíces.',
    order: 5,
    sections: [
      {
        id: 'qf-05-1',
        title: 'Forma Factorizada',
        type: 'formula',
        content: 'f(x) = a(x - r₁)(x - r₂)\n\nDonde r₁ y r₂ son las raíces',
      },
      {
        id: 'qf-05-2',
        title: 'Ejemplo',
        type: 'example',
        content: 'f(x) = (x - 2)(x + 3)\n\nRaíces: x = 2 y x = -3',
      },
      {
        id: 'qf-05-3',
        title: 'Visualización',
        type: 'visualization',
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
    ],
    keyPoints: [
      'Las raíces son donde f(x) = 0',
      'En forma factorizada, las raíces son evidentes',
      'Puede haber 0, 1 o 2 raíces reales',
    ],
  },
  {
    id: 'qf-06',
    topicId: 'funciones-cuadraticas',
    slug: 'discriminante',
    title: '06 - Discriminante: Clasificación de Soluciones',
    description: 'Determinando si hay 0, 1 o 2 soluciones reales.',
    content: 'El discriminante nos dice cuántas raíces tiene la función.',
    order: 6,
    sections: [
      {
        id: 'qf-06-1',
        title: 'Fórmula del discriminante',
        type: 'formula',
        content: 'Δ = b² - 4ac',
      },
      {
        id: 'qf-06-2',
        title: 'Interpretación',
        type: 'text',
        content: '• Si Δ > 0: dos raíces reales distintas\n• Si Δ = 0: una raíz real doble\n• Si Δ < 0: sin raíces reales',
      },
      {
        id: 'qf-06-3',
        title: 'Dos raíces (Δ > 0)',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -5,
          c: 6,
          title: 'f(x) = x² - 5x + 6 (Δ = 1)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-06-4',
        title: 'Una raíz doble (Δ = 0)',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -4,
          c: 4,
          title: 'f(x) = x² - 4x + 4 (Δ = 0)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-06-5',
        title: 'Sin raíces reales (Δ < 0)',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 1,
          title: 'f(x) = x² + 1 (Δ = -4)',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
    ],
    keyPoints: [
      'Δ = b² - 4ac',
      'Δ > 0: dos raíces distintas',
      'Δ = 0: una raíz doble',
      'Δ < 0: sin raíces reales',
    ],
  },
  {
    id: 'qf-07',
    topicId: 'funciones-cuadraticas',
    slug: 'transformaciones-graficas',
    title: '07 - Transformaciones Gráficas',
    description: 'Cómo se desplazan y transforman las parábolas.',
    content: 'Entenderemos cómo los parámetros transforman la parábola básica.',
    order: 7,
    sections: [
      {
        id: 'qf-07-1',
        title: 'Parábola básica',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 0,
          title: 'f(x) = x² (referencia)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-07-2',
        title: 'Desplazamiento horizontal',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -4,
          c: 0,
          title: 'f(x) = (x - 2)² (desplazada 2 a la derecha)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-07-3',
        title: 'Desplazamiento vertical',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 3,
          title: 'f(x) = x² + 3 (desplazada 3 hacia arriba)',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-07-4',
        title: 'Reflexión',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: -1,
          b: 0,
          c: 0,
          title: 'f(x) = -x² (reflexión sobre eje X)',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
    ],
    keyPoints: [
      'Desplazamientos horizontales con (x - h)',
      'Desplazamientos verticales sumando k',
      'Reflexiones multiplicando a por -1',
      'Cambios de amplitud con |a|',
    ],
  },
  {
    id: 'qf-08',
    topicId: 'funciones-cuadraticas',
    slug: 'intersecciones-igualdades',
    title: '08 - Intersecciones e Igualdades',
    description: 'Encontrando puntos de intersección entre funciones.',
    content: 'Aprenderemos a resolver problemas de intersección.',
    order: 8,
    sections: [
      {
        id: 'qf-08-1',
        title: 'Intersección con eje Y',
        type: 'text',
        content: 'Ocurre cuando x = 0\nPunto: (0, c)',
      },
      {
        id: 'qf-08-2',
        title: 'Intersección con eje X',
        type: 'text',
        content: 'Ocurre cuando f(x) = 0\nResolvemos la ecuación cuadrática',
      },
      {
        id: 'qf-08-3',
        title: 'Ejemplo visual',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -3,
          c: 2,
          title: 'f(x) = x² - 3x + 2',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
    ],
    keyPoints: [
      'Intersección Y siempre en (0, c)',
      'Intersecciones X se encuentran resolviendo f(x) = 0',
      'Pueden existir 0, 1 o 2 intersecciones con X',
    ],
  },
  {
    id: 'qf-09',
    topicId: 'funciones-cuadraticas',
    slug: 'metodo-vertice',
    title: '09 - Método del Vértice',
    description: 'Cómo calcular el vértice de una parábola.',
    content: 'Aprenderemos a encontrar el vértice usando fórmulas.',
    order: 9,
    sections: [
      {
        id: 'qf-09-1',
        title: 'Fórmula del vértice',
        type: 'formula',
        content: 'h = -b/(2a)\nk = f(h) = a(h)² + b(h) + c',
      },
      {
        id: 'qf-09-2',
        title: 'Ejemplo',
        type: 'example',
        content: 'Para f(x) = 2x² - 8x + 3:\nh = -(-8)/(2·2) = 2\nk = 2(2)² - 8(2) + 3 = -5\nVértice: (2, -5)',
      },
      {
        id: 'qf-09-3',
        title: 'Visualización',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 2,
          b: -8,
          c: 3,
          title: 'f(x) = 2x² - 8x + 3',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
    ],
    keyPoints: [
      'h = -b/(2a) da la coordenada x del vértice',
      'Sustituir h en f(x) para obtener k',
      'El vértice es el punto extremo de la parábola',
    ],
  },
  {
    id: 'qf-10',
    topicId: 'funciones-cuadraticas',
    slug: 'factorizacion-paso-paso',
    title: '10 - Factorización Paso a Paso',
    description: 'Estrategias para factorizar funciones cuadráticas.',
    content: 'Aprenderemos diferentes métodos de factorización.',
    order: 10,
    sections: [
      {
        id: 'qf-10-1',
        title: 'Método 1: Factor común',
        type: 'example',
        content: 'x² + 4x = x(x + 4)',
      },
      {
        id: 'qf-10-2',
        title: 'Método 2: Trinomio perfecto',
        type: 'example',
        content: 'x² + 6x + 9 = (x + 3)²',
      },
      {
        id: 'qf-10-3',
        title: 'Método 3: Buscando dos números',
        type: 'example',
        content: 'x² + 5x + 6 = (x + 2)(x + 3)\nBuscamos: 2 × 3 = 6 y 2 + 3 = 5',
      },
      {
        id: 'qf-10-4',
        title: 'Método 4: Usando la fórmula cuadrática',
        type: 'text',
        content: 'Cuando otros métodos no funcionan, usamos la fórmula general para encontrar raíces y construir la forma factorizada',
      },
    ],
    keyPoints: [
      'Buscar factor común primero',
      'Identificar trinomios perfectos',
      'Usar la fórmula cuadrática si es necesario',
    ],
  },
  {
    id: 'qf-11',
    topicId: 'funciones-cuadraticas',
    slug: 'formula-general',
    title: '11 - Resolución con Fórmula General',
    description: 'La fórmula cuadrática para resolver ecuaciones.',
    content: 'Aprenderemos la fórmula que siempre funciona.',
    order: 11,
    sections: [
      {
        id: 'qf-11-1',
        title: 'Fórmula Cuadrática',
        type: 'formula',
        content: 'x = (-b ± √(b² - 4ac)) / (2a)',
      },
      {
        id: 'qf-11-2',
        title: 'Pasos',
        type: 'text',
        content: '1. Identifica a, b, c\n2. Calcula el discriminante Δ = b² - 4ac\n3. Si Δ ≥ 0, aplica la fórmula\n4. Obtén las raíces',
      },
      {
        id: 'qf-11-3',
        title: 'Ejemplo',
        type: 'example',
        content: 'x² - 5x + 6 = 0\na=1, b=-5, c=6\nΔ = 25 - 24 = 1\nx = (5 ± 1) / 2\nx = 3 o x = 2',
      },
    ],
    keyPoints: [
      'La fórmula funciona para cualquier ecuación cuadrática',
      'Requiere que Δ ≥ 0 para raíces reales',
      'Es la herramienta más universal',
    ],
  },
  {
    id: 'qf-12',
    topicId: 'funciones-cuadraticas',
    slug: 'graficar-mano',
    title: '12 - Graficar a Mano',
    description: 'Pasos para dibujar una parábola sin calculadora.',
    content: 'Aprenderemos a graficar manualmente.',
    order: 12,
    sections: [
      {
        id: 'qf-12-1',
        title: 'Pasos para graficar',
        type: 'text',
        content: '1. Encuentra el vértice\n2. Marca el eje de simetría\n3. Encuentra las raíces\n4. Marca la intersección con Y\n5. Dibuja puntos simétricos\n6. Conecta los puntos suavemente',
      },
      {
        id: 'qf-12-2',
        title: 'Ejemplo paso a paso',
        type: 'example',
        content: 'f(x) = x² - 4x + 3\n\n1. Vértice: h = 2, k = -1 → (2, -1)\n2. Eje: x = 2\n3. Raíces: x = 1, x = 3\n4. Intersección Y: (0, 3)',
      },
      {
        id: 'qf-12-3',
        title: 'Visualización del resultado',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -4,
          c: 3,
          title: 'f(x) = x² - 4x + 3',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
    ],
    keyPoints: [
      'Empieza siempre con el vértice',
      'Usa la simetría para ganar precisión',
      'Marca puntos clave antes de dibujar',
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
        title: 'Parábola sin raíces reales',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: 0,
          c: 2,
          title: 'f(x) = x² + 2 (no toca eje X)',
          showVertex: true,
          showRoots: false,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-2',
        title: 'Parábola con raíz doble',
        type: 'visualization',
        data: {
          type: 'quadratic-graph',
          a: 1,
          b: -2,
          c: 1,
          title: 'f(x) = x² - 2x + 1 = (x - 1)²',
          showVertex: true,
          showRoots: true,
          showAxisOfSymmetry: true,
        },
      },
      {
        id: 'qf-13-3',
        title: 'Parábola que pasa por origen',
        type: 'visualization',
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
    description: 'Problemas del mundo real con funciones cuadráticas.',
    content: 'Veremos cómo las funciones cuadráticas modelan situaciones reales.',
    order: 14,
    sections: [
      {
        id: 'qf-14-1',
        title: 'Movimiento de proyectiles',
        type: 'text',
        content: 'La altura de un objeto lanzado sigue una parábola:\nh(t) = -5t² + v₀t + h₀\n\nDonde v₀ es la velocidad inicial y h₀ es la altura inicial.',
      },
      {
        id: 'qf-14-2',
        title: 'Ejemplo: Lanzamiento',
        type: 'example',
        content: 'Un objeto se lanza desde 2m con velocidad 20 m/s:\nh(t) = -5t² + 20t + 2\n\n• Altura máxima: en el vértice t = 2s, h = 22m\n• Llega al suelo: resolviendo h(t) = 0',
      },
      {
        id: 'qf-14-3',
        title: 'Otros modelos cuadráticos',
        type: 'text',
        content: '• Ganancias de empresa: f(x) = -ax² + bx + c\n• Área de figuras: A = lado²\n• Aceleración: d = ½at²',
      },
    ],
    keyPoints: [
      'Las parábolas modelan movimiento bajo gravedad',
      'El vértice representa el punto máximo o mínimo',
      'Las raíces representan tiempos o posiciones críticas',
    ],
  },
  {
    id: 'qf-15',
    topicId: 'funciones-cuadraticas',
    slug: 'errores-comunes',
    title: '15 - Errores Comunes',
    description: 'Qué NO hacer cuando trabajas con cuadráticas.',
    content: 'Aprenderemos a evitar las tramapas más comunes.',
    order: 15,
    sections: [
      {
        id: 'qf-15-1',
        title: 'Error 1: Olvidar a ≠ 0',
        type: 'text',
        content: 'Si a = 0, la función NO es cuadrática. Es lineal.\nf(x) = 0·x² + 5x + 3 = 5x + 3 (¡lineal!)',
      },
      {
        id: 'qf-15-2',
        title: 'Error 2: Signos en la fórmula',
        type: 'text',
        content: 'En la forma canónica f(x) = a(x - h)² + k:\n• Si h = 3, escribimos (x - 3), no (x + 3)\n• Si k = -5, escribimos + (-5), no - 5',
      },
      {
        id: 'qf-15-3',
        title: 'Error 3: Discriminante negativo',
        type: 'text',
        content: 'Si Δ < 0, NO hay raíces reales. La parábola no toca el eje X.\nNo es un error, es información importante.',
      },
      {
        id: 'qf-15-4',
        title: 'Error 4: Olvidar el ±',
        type: 'text',
        content: 'En la fórmula cuadrática:\nx = (-b ± √Δ) / (2a)\n\nEso da DOS soluciones (si Δ > 0)',
      },
    ],
    keyPoints: [
      'a DEBE ser diferente de 0',
      'Cuidado con los signos en la forma canónica',
      'Δ negativo significa sin raíces reales',
      'La fórmula general siempre da ±',
    ],
  },
  {
    id: 'qf-16',
    topicId: 'funciones-cuadraticas',
    slug: 'resumen-chuleta',
    title: '16 - Resumen y Chuleta',
    description: 'Guía rápida de referencia para funciones cuadráticas.',
    content: 'Un resumen de los conceptos más importantes.',
    order: 16,
    sections: [
      {
        id: 'qf-16-1',
        title: 'Formas principales',
        type: 'formula',
        content: 'General: f(x) = ax² + bx + c\nCanónica: f(x) = a(x - h)² + k\nFactorizada: f(x) = a(x - r₁)(x - r₂)',
      },
      {
        id: 'qf-16-2',
        title: 'Fórmulas clave',
        type: 'formula',
        content: 'Vértice h: h = -b/(2a)\nDiscriminante: Δ = b² - 4ac\nFórmula cuadrática: x = (-b ± √Δ)/(2a)',
      },
      {
        id: 'qf-16-3',
        title: 'Características',
        type: 'text',
        content: '• Intersección Y: (0, c)\n• Eje simetría: x = h\n• Abre arriba si a > 0, abajo si a < 0\n• Vértice es punto extremo',
      },
    ],
    keyPoints: [
      'Tres formas equivalentes del mismo concepto',
      'Cada forma revela información diferente',
      'Las fórmulas son herramientas clave',
    ],
  },
  {
    id: 'qf-17',
    topicId: 'funciones-cuadraticas',
    slug: 'glosario',
    title: '17 - Glosario',
    description: 'Definiciones de términos importantes.',
    content: 'Referencia rápida de conceptos clave.',
    order: 17,
    sections: [
      {
        id: 'qf-17-1',
        title: 'Términos principales',
        type: 'text',
        content: '• Parábola: gráfica de una función cuadrática\n• Vértice: punto extremo de la parábola\n• Raíz: valor de x donde f(x) = 0\n• Discriminante: b² - 4ac, determina número de raíces\n• Eje de simetría: línea vertical que divide la parábola',
      },
      {
        id: 'qf-17-2',
        title: 'Términos de ecuaciones',
        type: 'text',
        content: '• Coeficiente: número que multiplica una variable\n• Término: parte de una expresión separada por + o -\n• Término independiente: número sin variable\n• Forma general: ax² + bx + c\n• Canónica: a(x - h)² + k',
      },
    ],
    keyPoints: [
      'Domina el vocabulario para entender mejor',
      'Cada término tiene un significado específico',
      'La precisión en lenguaje mejora la comprensión',
    ],
  },
  {
    id: 'qf-18',
    topicId: 'funciones-cuadraticas',
    slug: 'faq',
    title: '18 - Preguntas Frecuentes',
    description: 'Respuestas a preguntas comunes sobre cuadráticas.',
    content: 'Aclaramos dudas frecuentes de estudiantes.',
    order: 18,
    sections: [
      {
        id: 'qf-18-1',
        title: '¿Por qué el vértice es importante?',
        type: 'text',
        content: 'El vértice es el punto más alto o más bajo. En aplicaciones reales, representa el máximo/mínimo de cantidad (ganancia, altura, etc.)',
      },
      {
        id: 'qf-18-2',
        title: '¿Cuándo no hay raíces reales?',
        type: 'text',
        content: 'Cuando Δ < 0. Esto significa la parábola nunca toca el eje X. Las raíces existen pero son complejas.',
      },
      {
        id: 'qf-18-3',
        title: '¿Cuál forma debo usar?',
        type: 'text',
        content: 'Depende del problema:\n• General (ax² + bx + c): Cuando tienes esta forma\n• Canónica (a(x-h)²+k): Cuando necesitas vértice\n• Factorizada (a(x-r₁)(x-r₂)): Cuando necesitas raíces',
      },
      {
        id: 'qf-18-4',
        title: '¿Es difícil este tema?',
        type: 'text',
        content: 'No es difícil, solo tiene muchos casos. La clave es practicar ejercicios y entender qué representa cada parte. ¡Tú puedes!',
      },
    ],
    keyPoints: [
      'El vértice es crucial en aplicaciones',
      'Raíces complejas existen cuando Δ < 0',
      'Cada forma es útil en diferentes situaciones',
      'La práctica es fundamental',
    ],
  },
];

export const getQuadraticLessonById = (id: string) => {
  return quadraticLessons.find(lesson => lesson.id === id);
};

export const getQuadraticLessonBySlug = (slug: string) => {
  return quadraticLessons.find(lesson => lesson.slug === slug);
};
