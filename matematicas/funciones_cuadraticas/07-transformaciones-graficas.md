# 07 - Transformaciones Gráficas

Una de las formas más intuitivas de entender las funciones cuadráticas es verlas como transformaciones de la parábola más simple de todas: $f(x) = x^2$.

Toda parábola, sin importar cuán compleja parezca, es simplemente una versión desplazada, estirada o reflejada de esta parábola básica. La **forma canónica** $f(x) = a(x - h)^2 + k$ es perfecta para analizar estas transformaciones.

## La Parábola Madre: $f(x) = x^2$

Esta es nuestra referencia. Es una parábola que:
*   Abre hacia arriba ($a=1$).
*   Tiene su vértice en el origen **(0, 0)**.
*   Pasa por los puntos (1, 1) y (-1, 1).

![Parábola Madre](https://i.imgur.com/u0a52iL.png)

## Las 3 Transformaciones Básicas

Analicemos cómo los parámetros `a`, `h` y `k` modifican la parábola madre.

### 1. Traslación Vertical (controlada por `k`)

El parámetro `k` mueve la parábola hacia arriba o hacia abajo.

*   Si $k > 0$, la parábola se desplaza **`k` unidades hacia arriba**.
*   Si $k < 0$, la parábola se desplaza **`|k|` unidades hacia abajo**.

**Ejemplo:**
*   $f(x) = x^2 + 3$: la parábola madre sube 3 unidades. Vértice en (0, 3).
*   $f(x) = x^2 - 4$: la parábola madre baja 4 unidades. Vértice en (0, -4).

### 2. Traslación Horizontal (controlada por `h`)

El parámetro `h` mueve la parábola hacia la izquierda o la derecha. Recuerda que el efecto es opuesto al signo que ves.

*   Si `h` es positivo (ves $x - h$), la parábola se desplaza **`h` unidades hacia la derecha**.
*   Si `h` es negativo (ves $x + h$), la parábola se desplaza **`h` unidades hacia la izquierda**.

**Ejemplo:**
*   $f(x) = (x - 2)^2$: la parábola madre se mueve 2 unidades a la derecha. Vértice en (2, 0).
*   $f(x) = (x + 1)^2$: la parábola madre se mueve 1 unidad a la izquierda. Vértice en (-1, 0).

### 3. Estiramiento y Reflejo (controlado por `a`)

El parámetro `a` hace dos cosas:

*   **Reflejo (signo de `a`):**
    *   Si `a` es negativo, la parábola se **refleja verticalmente** (se voltea hacia abajo).

*   **Estiramiento o Compresión (valor absoluto de `a`):**
    *   Si $|a| > 1$, la parábola se **estira verticalmente** (se hace más estrecha).
    *   Si $0 < |a| < 1$, la parábola se **comprime verticalmente** (se hace más ancha).

**Ejemplo:**
*   $f(x) = -x^2$: la parábola madre se refleja hacia abajo.
*   $f(x) = 2x^2$: la parábola madre se estira al doble de su altura (más estrecha).
*   $f(x) = 0.5x^2$: la parábola madre se comprime a la mitad de su altura (más ancha).

## Procedimiento en 5 Pasos para Graficar por Transformaciones

Para graficar cualquier función $f(x) = a(x - h)^2 + k$ sin calcular muchos puntos:

1.  **Identifica la parábola madre:** Empieza con el dibujo de $y = x^2$.
2.  **Aplica el estiramiento/compresión y el reflejo (`a`):** Estira o comprime la parábola según el valor de `a`. Si `a` es negativo, voltéala.
3.  **Desplaza horizontalmente (`h`):** Mueve la parábola resultante `h` unidades a la derecha o izquierda.
4.  **Desplaza verticalmente (`k`):** Mueve la parábola resultante `k` unidades hacia arriba o abajo.
5.  **Dibuja el resultado final:** La nueva posición del vértice es `(h, k)`.

**Ejemplo Completo:** Graficar $f(x) = -2(x - 3)^2 + 1$.

1.  **Parábola madre:** $y = x^2$.
2.  **`a = -2`:** Refleja la parábola (hacia abajo) y estírala verticalmente (más estrecha).
3.  **`h = 3`:** Desplázala 3 unidades a la derecha.
4.  **`k = 1`:** Súbela 1 unidad.
5.  **Resultado:** El vértice, que estaba en (0,0), ahora está en **(3, 1)**. La parábola abre hacia abajo y es más estrecha que la original.

![Transformaciones](https://i.imgur.com/YkIuC8B.gif)

---
**Próximo tema:** [08 - Intersecciones e Igualdades](08-intersecciones-e-igualdades.md)
