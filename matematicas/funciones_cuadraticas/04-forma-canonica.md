# 04 - La Forma Canónica (o Forma de Vértice)

Si bien la forma general es útil, existe otra forma de escribir funciones cuadráticas que nos da información clave de un solo vistazo: la **forma canónica**.

## Definición de la Forma Canónica

La forma canónica de una función cuadrática es:

$f(x) = a(x - h)^2 + k$

Donde:
*   `a` es el mismo coeficiente de la forma general (controla la concavidad y amplitud).
*   `(h, k)` son las coordenadas del **vértice** de la parábola.

### Interpretación de `h` y `k`

Esta forma es extremadamente útil porque nos dice directamente dónde está el vértice:
*   `h` es la coordenada **horizontal** del vértice.
*   `k` es la coordenada **vertical** del vértice.

**¡Cuidado con el signo de `h`!**
En la fórmula, el término es $(x - h)$. Esto significa que:
*   Si ves $(x - 3)^2$, entonces $h = 3$. El vértice está en $x=3$.
*   Si ves $(x + 5)^2$, esto es lo mismo que $(x - (-5))^2$, así que $h = -5$. El vértice está en $x=-5$.

El valor de `k` es directo: si ves $+2$ al final, $k=2$. Si ves $-7$, $k=-7$.

**Ejemplo:**
Dada la función $f(x) = 2(x - 4)^2 + 5$:
*   $a = 2$ (la parábola abre hacia arriba y es estrecha).
*   $h = 4$.
*   $k = 5$.
*   Por lo tanto, el vértice está en el punto **(4, 5)**.

## De la Forma General a la Forma Canónica: Completar el Cuadrado

A menudo, tendrás la función en forma general ($ax^2 + bx + c$) y necesitarás pasarla a forma canónica para encontrar el vértice. El método para hacerlo se llama **"completar el cuadrado"**.

### Pasos para Completar el Cuadrado

Veámoslo con un ejemplo: $f(x) = x^2 + 6x + 5$.

1.  **Separar el término `c`:**
    $f(x) = (x^2 + 6x) + 5$

2.  **Calcular el término para completar el trinomio cuadrado perfecto:**
    Toma el coeficiente de $x$ (que es $b=6$), divídelo por 2 y elévalo al cuadrado.
    $(\frac{6}{2})^2 = 3^2 = 9$

3.  **Sumar y restar este término dentro del paréntesis:**
    Para no alterar la función, debemos sumar y restar el mismo valor.
    $f(x) = (x^2 + 6x + 9 - 9) + 5$

4.  **Factorizar el trinomio cuadrado perfecto y simplificar:**
    El trinomio $(x^2 + 6x + 9)$ es el cuadrado perfecto de $(x+3)$.
    $f(x) = (x + 3)^2 - 9 + 5$
    $f(x) = (x + 3)^2 - 4$

¡Listo! La forma canónica es $f(x) = (x + 3)^2 - 4$.
De aquí podemos leer directamente que el vértice es **(-3, -4)**.

### ¿Y si `a` no es 1?

Si $a \neq 1$, hay un paso extra al principio. Ejemplo: $f(x) = 2x^2 - 4x + 5$.

1.  **Sacar `a` como factor común de los términos con `x`:**
    $f(x) = 2(x^2 - 2x) + 5$

2.  **Completar el cuadrado dentro del paréntesis:**
    El coeficiente de $x$ es -2. $(\frac{-2}{2})^2 = (-1)^2 = 1$.
    $f(x) = 2(x^2 - 2x + 1 - 1) + 5$

3.  **Sacar el término que resta fuera del paréntesis (¡multiplicado por `a`!):**
    $f(x) = 2((x - 1)^2 - 1) + 5$
    $f(x) = 2(x - 1)^2 - 2(1) + 5$
    $f(x) = 2(x - 1)^2 + 3$

La forma canónica es $f(x) = 2(x - 1)^2 + 3$. El vértice es **(1, 3)**.

---
**Próximo tema:** [05 - La Forma Factorizada y las Raíces](05-forma-factorizada.md)
