# 12 - Graficar una Parábola a Mano

Saber graficar una parábola sin una calculadora es una habilidad clave. Te fuerza a entender cómo se conectan todas las piezas de una función cuadrática. Un buen gráfico no necesita docenas de puntos, solo los **rasgos clave**.

## Procedimiento Sistemático para Graficar

Sigue estos pasos para obtener un bosquejo preciso y rápido de $f(x) = ax^2 + bx + c$.

### Paso 1: Analizar la Concavidad

*   Mira el signo del coeficiente `a`.
    *   Si $a > 0$, la parábola abre **hacia arriba**.
    *   Si $a < 0$, la parábola abre **hacia abajo**.
*   Esto te da la forma general de la gráfica antes de empezar.

### Paso 2: Encontrar el Vértice $(h, k)$

El vértice es el punto más importante.
*   Calcula la coordenada $x$ del vértice: $h = \frac{-b}{2a}$.
*   Calcula la coordenada $y$ del vértice: $k = f(h)$.
*   Dibuja el vértice en tu plano cartesiano.
*   Dibuja el **eje de simetría**, que es la línea vertical $x=h$.

### Paso 3: Encontrar la Intersección con el Eje Y

*   Calcula $f(0)$. En la forma general, es simplemente el punto $(0, c)$.
*   Dibuja este punto en el gráfico.
*   **Usa la simetría:** Refleja este punto a través del eje de simetría para obtener un **tercer punto gratis**.
    *   Si el punto $(0, c)$ está a $h$ unidades a la izquierda del eje de simetría, su simétrico estará en $(2h, c)$, a $h$ unidades a la derecha.

### Paso 4: Encontrar las Intersecciones con el Eje X (Raíces)

*   Resuelve la ecuación $ax^2 + bx + c = 0$.
    *   Usa la **fórmula general** o intenta **factorizar**.
*   **Analiza el discriminante ($\Delta = b^2 - 4ac$) primero:**
    *   Si $\Delta > 0$, tendrás dos puntos de corte. Calcúlalos y dibújalos.
    *   Si $\Delta = 0$, la parábola toca el eje X en el vértice (que ya tienes).
    *   Si $\Delta < 0$, la parábola no corta el eje X. No necesitas buscar más puntos aquí.

### Paso 5: Construir una Tabla de Valores (Opcional, si necesitas más precisión)

Si quieres un dibujo más preciso, puedes calcular un par de puntos adicionales.
*   Elige valores de $x$ que sean **simétricos** respecto al vértice.
*   Por ejemplo, si el vértice está en $x=2$, calcula $f(3)$ y $f(1)$. Deberían dar el mismo valor de $y$.
*   Crea una pequeña tabla:

| x | y = f(x) |
| :---: | :---: |
| h-1 | f(h-1) |
| **h** | **k** |
| h+1 | f(h+1) |

### Paso 6: Unir los Puntos

*   Une los puntos que has encontrado (vértice, cortes con los ejes y puntos adicionales) con una curva suave en forma de "U".
*   Asegúrate de que la curva sea simétrica respecto al eje que dibujaste.
*   No uses una regla para unir los puntos; debe ser una curva.

## Ejemplo Completo: Graficar $f(x) = x^2 - 2x - 3$

1.  **Concavidad:** $a=1 > 0$, así que abre **hacia arriba**.

2.  **Vértice:**
    *   $h = \frac{-(-2)}{2(1)} = \frac{2}{2} = 1$.
    *   $k = f(1) = (1)^2 - 2(1) - 3 = 1 - 2 - 3 = -4$.
    *   Vértice: **(1, -4)**. Eje de simetría: $x=1$.

3.  **Corte con Eje Y:**
    *   $f(0) = -3$. Punto: **(0, -3)**.
    *   Punto simétrico: está a 1 unidad a la izquierda del eje ($x=1$). Su simétrico estará 1 unidad a la derecha, en $x=2$. La altura es la misma. Punto simétrico: **(2, -3)**.

4.  **Cortes con Eje X (Raíces):**
    *   $x^2 - 2x - 3 = 0$.
    *   Factorizando: $(x-3)(x+1) = 0$.
    *   Raíces: $x=3$ y $x=-1$.
    *   Puntos: **(3, 0)** y **(-1, 0)**.

5.  **Unir los puntos:**
    *   Ya tenemos 5 puntos clave: (1, -4), (0, -3), (2, -3), (3, 0), (-1, 0).
    *   Dibújalos y únelos con una curva suave y simétrica.

![Gráfico a mano](https://i.imgur.com/A2x0g7S.png)

---
**Próximo tema:** [13 - Casos Particulares](13-casos-particulares.md)
