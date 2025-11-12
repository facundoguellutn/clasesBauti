# 08 - Intersecciones e Igualdades

Una parte fundamental del análisis de funciones cuadráticas es encontrar los puntos donde su gráfica se cruza con los ejes del plano cartesiano o con otras funciones.

## Intersección con los Ejes

### 1. Intersección con el Eje Y

Este es el punto más fácil de calcular. La gráfica corta el eje Y cuando la coordenada **x es 0**.

*   **Procedimiento:** Calcula $f(0)$.
*   **En la forma general ($ax^2+bx+c$):** El valor es simplemente $c$. El punto es $(0, c)$.
*   **En otras formas:** Sustituye $x=0$ y calcula el valor.

**Ejemplo:** Para $f(x) = (x-3)^2 - 4$:
$f(0) = (0-3)^2 - 4 = (-3)^2 - 4 = 9 - 4 = 5$.
El punto de corte con el eje Y es **(0, 5)**.

### 2. Intersección con el Eje X (Raíces)

La gráfica corta el eje X cuando la coordenada **y es 0**, es decir, $f(x) = 0$. Estos puntos son las **raíces** de la función.

*   **Procedimiento:** Iguala la función a cero y resuelve la ecuación cuadrática.
    $ax^2 + bx + c = 0$

*   **Métodos de resolución:**
    1.  **Fórmula General:** La más segura. $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.
    2.  **Factorización:** Si es posible, es más rápida. Si $f(x) = a(x-r_1)(x-r_2)$, las raíces son $r_1$ y $r_2$.
    3.  **Despeje (si $b=0$):** Si la ecuación es $ax^2+c=0$, puedes despejar $x$ directamente.

**Ejemplo:** Encontrar las intersecciones con el eje X de $f(x) = x^2 - 2x - 3$.
Igualamos a cero: $x^2 - 2x - 3 = 0$.
Podemos factorizarla como $(x-3)(x+1) = 0$.
Las soluciones son $x=3$ y $x=-1$.
Los puntos de corte con el eje X son **(3, 0)** y **(-1, 0)**.

## Intersección entre una Parábola y otra Función

Para encontrar los puntos donde dos funciones, $f(x)$ y $g(x)$, se cruzan, debemos buscar los valores de $x$ donde ambas funciones tienen el mismo valor, es decir, $f(x) = g(x)$.

### 1. Intersección entre una Parábola y una Recta

Sea $f(x) = ax^2 + bx + c$ (la parábola) y $g(x) = mx + n$ (la recta).

*   **Procedimiento:**
    1.  Iguala las dos funciones: $ax^2 + bx + c = mx + n$.
    2.  Reordena la ecuación para llevarla a la forma de una ecuación cuadrática igualada a cero:
        $ax^2 + (b-m)x + (c-n) = 0$.
    3.  Resuelve esta nueva ecuación cuadrática para $x$. Las soluciones te darán las coordenadas $x$ de los puntos de intersección.
    4.  Sustituye cada valor de $x$ encontrado en *cualquiera* de las funciones originales ($f$ o $g$) para encontrar la coordenada $y$ correspondiente.

*   **Posibles resultados:**
    *   **Dos soluciones:** La recta y la parábola se cortan en **dos puntos**.
    *   **Una solución:** La recta es **tangente** a la parábola (la toca en un solo punto).
    *   **Ninguna solución real:** La recta y la parábola **no se cortan**.

**Ejemplo:** Encuentra la intersección entre $f(x) = x^2$ y $g(x) = x + 2$.
1.  Igualamos: $x^2 = x + 2$.
2.  Reordenamos: $x^2 - x - 2 = 0$.
3.  Factorizamos: $(x-2)(x+1) = 0$. Las soluciones son $x=2$ y $x=-1$.
4.  Calculamos las coordenadas $y$:
    *   Si $x=2$, $y = 2^2 = 4$. Punto: **(2, 4)**.
    *   Si $x=-1$, $y = (-1)^2 = 1$. Punto: **(-1, 1)**.

### 2. Intersección entre dos Parábolas

El procedimiento es idéntico. Dadas $f(x) = a_1x^2 + b_1x + c_1$ y $g(x) = a_2x^2 + b_2x + c_2$.

1.  Iguala las funciones: $a_1x^2 + b_1x + c_1 = a_2x^2 + b_2x + c_2$.
2.  Reordena para obtener una ecuación cuadrática:
    $(a_1 - a_2)x^2 + (b_1 - b_2)x + (c_1 - c_2) = 0$.
3.  Resuelve para $x$ y luego encuentra las coordenadas $y$.

---
**Próximo tema:** [09 - Método del Vértice](09-metodo-del-vertice.md)
