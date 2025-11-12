# 13 - Casos Particulares y Situaciones Especiales

Aunque la mayoría de las funciones cuadráticas que encontrarás son "estándar", es importante saber cómo manejar casos menos comunes. Estos te ayudarán a solidificar tu comprensión de los conceptos fundamentales.

## 1. ¿Qué pasa si $a=0$?

Si el coeficiente $a$ es cero, la expresión deja de ser cuadrática.
*   **Forma:** $f(x) = (0)x^2 + bx + c = bx + c$.
*   **Resultado:** La función se convierte en una **función lineal**.
*   **Gráfico:** Su gráfica no es una parábola, sino una **línea recta**.

Este es un punto conceptual clave: la presencia del término $x^2$ (con $a \neq 0$) es lo que define a una función cuadrática.

## 2. Coeficientes Faltantes ($b=0$ o $c=0$)

### Caso $b=0$: Función Cuadrática Pura

*   **Forma:** $f(x) = ax^2 + c$.
*   **Vértice:** La fórmula del vértice, $h = -b/(2a)$, se simplifica a $h = -0/(2a) = 0$.
    *   El vértice siempre estará en el eje Y, en el punto **(0, c)**.
*   **Simetría:** La parábola es perfectamente simétrica respecto al eje Y.
*   **Resolución:** Para encontrar las raíces ($ax^2 + c = 0$), es mucho más fácil despejar $x$ que usar la fórmula general:
    $x^2 = -c/a \implies x = \pm\sqrt{-c/a}$.

**Ejemplo:** $f(x) = 2x^2 - 8$.
*   Vértice: (0, -8).
*   Raíces: $2x^2 - 8 = 0 \implies x^2 = 4 \implies x = \pm 2$.

### Caso $c=0$: Pasa por el Origen

*   **Forma:** $f(x) = ax^2 + bx$.
*   **Intersección con el eje Y:** El punto de corte es $(0, c)$, que en este caso es **(0, 0)**. La parábola siempre pasa por el origen.
*   **Raíces:** Una de las raíces siempre es $x=0$. Para encontrar la otra, es más fácil factorizar que usar la fórmula general:
    $ax^2 + bx = 0 \implies x(ax + b) = 0$.
    Las raíces son $x_1 = 0$ y $x_2 = -b/a$.

**Ejemplo:** $f(x) = 3x^2 - 6x$.
*   Raíces: $x(3x - 6) = 0 \implies x=0$ o $3x-6=0 \implies x=2$.

## 3. Raíces Complejas

*   **Ocurre cuando:** El discriminante es negativo ($\Delta < 0$).
*   **Significado:** La función no tiene raíces reales.
*   **Gráfico:** La parábola **nunca corta el eje X**.
    *   Si $a>0$, la parábola está enteramente **por encima** del eje X.
    *   Si $a<0$, la parábola está enteramente **por debajo** del eje X.
*   **Vértice:** En estos casos, el vértice es crucial. Si la parábola abre hacia arriba, la coordenada $k$ del vértice es el valor mínimo absoluto de la función. Si abre hacia abajo, es el máximo absoluto.

**Ejemplo:** $f(x) = x^2 + 2x + 5$.
*   $\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$. No hay raíces reales.
*   Vértice: $h = -2/(2 \cdot 1) = -1$. $k = (-1)^2 + 2(-1) + 5 = 1 - 2 + 5 = 4$. Vértice en (-1, 4).
*   Como $a>0$ y el punto más bajo es (-1, 4), la función nunca llegará a $y=0$.

## 4. Coeficientes Fraccionarios o Irracionales

No te asustes si los coeficientes $a, b, c$ no son números enteros. Todos los métodos y fórmulas funcionan exactamente igual.

**Ejemplo:** $f(x) = \frac{1}{2}x^2 - \sqrt{3}x - 4$.
*   **Concavidad:** $a = 1/2 > 0$, abre hacia arriba. Es una parábola ancha.
*   **Corte con eje Y:** $(0, -4)$.
*   **Vértice:**
    *   $h = \frac{-(-\sqrt{3})}{2(1/2)} = \sqrt{3}$.
    *   $k = f(\sqrt{3}) = \frac{1}{2}(\sqrt{3})^2 - \sqrt{3}(\sqrt{3}) - 4 = \frac{3}{2} - 3 - 4 = 1.5 - 7 = -5.5$.
    *   Vértice: $(\sqrt{3}, -5.5)$.
*   **Raíces:** Usa la fórmula general. Será más tedioso, pero el procedimiento es el mismo.

## 5. Escala del Gráfico

A veces, los valores del vértice o de los coeficientes son muy grandes o muy pequeños. Esto puede hacer que el gráfico sea difícil de dibujar en una escala estándar (de 1 en 1).

*   **Solución:** **Ajusta la escala de tus ejes.** No hay ninguna regla que obligue a que los ejes X e Y tengan la misma escala.
    *   Si el vértice es (1, 200), tu eje Y puede ir de 50 en 50.
    *   Si las raíces son 0.1 y 0.2, tu eje X puede ir de 0.05 en 0.05.
*   Lo importante es que los **rasgos clave** (vértice, raíces, etc.) sean visibles y estén correctamente posicionados *relativamente* entre sí.

---
**Próximo tema:** [14 - Aplicaciones y Modelado](14-aplicaciones-modelado.md)
