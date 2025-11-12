# 09 - Método del Vértice: Encontrando el Punto Clave

El vértice es el punto más importante de una parábola: es su punto máximo o mínimo y el centro de su simetría. Saber calcularlo es fundamental. Hay dos métodos principales para encontrarlo.

## Método 1: Usando la Fórmula del Vértice (desde la Forma General)

Este es el método más directo si tienes la función en su forma general $f(x) = ax^2 + bx + c$.

El vértice tiene coordenadas $(h, k)$.

### Algoritmo Detallado

1.  **Identificar los coeficientes:**
    Encuentra los valores de $a$, $b$ y $c$ en tu función.

2.  **Calcular la coordenada `h` (eje de simetría):**
    Usa la fórmula:
    $h = \frac{-b}{2a}$
    *Mini-justificación:* Esta fórmula se deriva del hecho de que el vértice siempre se encuentra en el punto medio de dos puntos con la misma altura, y se puede deducir de la fórmula general de las raíces.

3.  **Calcular la coordenada `k` (altura del vértice):**
    Sustituye el valor de $h$ que acabas de encontrar en la función original.
    $k = f(h) = a(h)^2 + b(h) + c$
    *Mini-justificación:* `k` es, por definición, el valor que toma la función en el punto `h`.

4.  **Escribir las coordenadas del vértice:**
    El vértice es el punto $(h, k)$.

### Ejemplo General Simbólico

Para $f(x) = ax^2 + bx + c$:
1.  Coordenada $x$: $h = \frac{-b}{2a}$
2.  Coordenada $y$: $k = f(\frac{-b}{2a})$

### Ejemplo Numérico 1: $f(x) = x^2 - 4x + 7$

1.  **Coeficientes:** $a=1$, $b=-4$, $c=7$.
2.  **Calcular `h`:**
    $h = \frac{-(-4)}{2(1)} = \frac{4}{2} = 2$.
    El eje de simetría es $x=2$.
3.  **Calcular `k`:**
    $k = f(2) = (2)^2 - 4(2) + 7 = 4 - 8 + 7 = 3$.
4.  **Vértice:** El vértice está en **(2, 3)**.

### Ejemplo Numérico 2: $f(x) = -2x^2 - 12x - 10$

1.  **Coeficientes:** $a=-2$, $b=-12$, $c=-10$.
2.  **Calcular `h`:**
    $h = \frac{-(-12)}{2(-2)} = \frac{12}{-4} = -3$.
    El eje de simetría es $x=-3$.
3.  **Calcular `k`:**
    $k = f(-3) = -2(-3)^2 - 12(-3) - 10$
    $k = -2(9) + 36 - 10 = -18 + 36 - 10 = 8$.
4.  **Vértice:** El vértice está en **(-3, 8)**.

## Método 2: Leyendo desde la Forma Canónica

Este método es trivial si la función ya está en forma canónica $f(x) = a(x - h)^2 + k$.

*   **Procedimiento:** Simplemente lee los valores de `h` y `k` directamente de la fórmula.
    *   Recuerda que `h` tiene el signo opuesto al que aparece en el paréntesis.
    *   `k` tiene el mismo signo.

**Ejemplo:** Para $f(x) = 3(x + 5)^2 - 8$:
*   $h = -5$ (porque es $x - (-5)$)
*   $k = -8$
*   El vértice es **(-5, -8)**.

Si tienes la función en forma general, puedes usar el método de **completar el cuadrado** (explicado en el archivo `04-forma-canonica.md`) para convertirla a forma canónica y luego leer el vértice.

---
**Próximo tema:** [10 - Factorización Paso a Paso](10-factorizacion-paso-a-paso.md)
