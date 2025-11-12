# 06 - El Discriminante: Clasificando las Soluciones

Para encontrar las raíces de una función cuadrática, a menudo usamos la fórmula general (que veremos en detalle más adelante). Sin embargo, una pequeña parte de esa fórmula, llamada el **discriminante**, nos puede decir *cuántas* y *qué tipo* de raíces tiene la función sin necesidad de calcularlas por completo.

## Definición del Discriminante

Para una función cuadrática en forma general $f(x) = ax^2 + bx + c$, el discriminante se representa con la letra griega delta ($\Delta$) y se calcula como:

$\Delta = b^2 - 4ac$

El valor del discriminante nos permite "discriminar" entre tres casos posibles para las raíces de la función.

## Interpretación del Discriminante

### Caso 1: $\Delta > 0$ (Discriminante Positivo)

Si el discriminante es mayor que cero, la función tiene:
*   **Dos raíces reales y distintas.**
*   **Gráficamente:** La parábola corta el eje X en **dos puntos diferentes**.

**Ejemplo:** $f(x) = x^2 - 5x + 6$
*   $a=1$, $b=-5$, $c=6$
*   $\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1$
*   Como $\Delta = 1 > 0$, la función tiene dos raíces reales distintas (que son $x=2$ y $x=3$).

![Discriminante Positivo](https://i.imgur.com/fN4i2jC.png)

### Caso 2: $\Delta = 0$ (Discriminante Cero)

Si el discriminante es igual a cero, la función tiene:
*   **Una raíz real doble (o dos raíces reales iguales).**
*   **Gráficamente:** La parábola **toca** el eje X en un solo punto, que es su **vértice**.

**Ejemplo:** $f(x) = x^2 - 4x + 4$
*   $a=1$, $b=-4$, $c=4$
*   $\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0$
*   Como $\Delta = 0$, la función tiene una única raíz doble (que es $x=2$).

![Discriminante Cero](https://i.imgur.com/yG3a3fD.png)

### Caso 3: $\Delta < 0$ (Discriminante Negativo)

Si el discriminante es menor que cero, la función tiene:
*   **Ninguna raíz real.** Las dos raíces son **números complejos conjugados**.
*   **Gráficamente:** La parábola **nunca** corta ni toca el eje X. Está completamente por encima (si $a>0$) o completamente por debajo (si $a<0$).

**Ejemplo:** $f(x) = x^2 + 2x + 5$
*   $a=1$, $b=2$, $c=5$
*   $\Delta = (2)^2 - 4(1)(5) = 4 - 20 = -16$
*   Como $\Delta = -16 < 0$, la función no tiene raíces reales.

![Discriminante Negativo](https://i.imgur.com/bVvP7nB.png)

## Resumen y Utilidad

El discriminante es una herramienta de diagnóstico rápido. Antes de embarcarte en cálculos largos para encontrar las raíces, calcula $\Delta = b^2 - 4ac$. En segundos, sabrás a qué tipo de solución te enfrentas.

| Valor de $\Delta$ | Tipo de Raíces | Interpretación Gráfica |
| :--- | :--- | :--- |
| $\Delta > 0$ | Dos raíces reales distintas | Corta el eje X en 2 puntos |
| $\Delta = 0$ | Una raíz real doble | Toca el eje X en 1 punto (el vértice) |
| $\Delta < 0$ | Dos raíces complejas (no reales) | No corta ni toca el eje X |

---
**Próximo tema:** [07 - Transformaciones Gráficas](07-transformaciones-graficas.md)
