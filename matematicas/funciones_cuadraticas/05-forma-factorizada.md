# 05 - La Forma Factorizada y las Raíces

Además de la forma general y la canónica, existe una tercera forma muy útil para entender una función cuadrática: la **forma factorizada**. Esta forma está directamente relacionada con las **raíces** de la función.

## ¿Qué son las Raíces o Ceros de una Función?

Las **raíces** (también llamadas **ceros** o **soluciones**) de una función son los valores de $x$ para los cuales la función vale cero, es decir, $f(x) = 0$.

Gráficamente, las raíces son los puntos donde la parábola **corta o toca el eje X**.

Una función cuadrática puede tener:
*   **Dos raíces reales distintas:** La parábola corta el eje X en dos puntos.
*   **Una raíz real doble:** La parábola toca el eje X en un solo punto (su vértice).
*   **Ninguna raíz real:** La parábola nunca corta el eje X (está completamente por encima o por debajo).

## Definición de la Forma Factorizada

La forma factorizada de una función cuadrática se escribe como:

$f(x) = a(x - r_1)(x - r_2)$

Donde:
*   `a` es el coeficiente principal de siempre.
*   $r_1$ y $r_2$ son las **raíces** de la función.

**¡Cuidado con los signos!** Al igual que con la `h` de la forma canónica, las raíces aparecen con el signo opuesto.
*   Si una raíz es $x=3$, el factor es $(x - 3)$.
*   Si una raíz es $x=-5$, el factor es $(x - (-5))$, es decir, $(x + 5)$.

**Ejemplo:**
Dada la función $f(x) = 2(x - 1)(x - 3)$:
*   $a = 2$ (la parábola abre hacia arriba).
*   Las raíces son $x=1$ y $x=3$.
*   Esto significa que la parábola corta el eje X en los puntos **(1, 0)** y **(3, 0)**.

## Relación con el Gráfico

La forma factorizada es muy potente porque nos da los puntos de corte con el eje X de manera explícita.

### Simetría y Vértice

El vértice de la parábola se encuentra siempre en el punto medio de las raíces, debido a la simetría. La coordenada $x$ del vértice ($h$) se puede calcular como:

$h = \frac{r_1 + r_2}{2}$

Una vez que tienes $h$, puedes encontrar la coordenada $y$ del vértice ($k$) calculando $f(h)$.

**Ejemplo:**
Para $f(x) = 2(x - 1)(x - 3)$:
1.  Las raíces son $r_1 = 1$ y $r_2 = 3$.
2.  La coordenada $x$ del vértice es $h = \frac{1 + 3}{2} = 2$.
3.  La coordenada $y$ del vértice es $k = f(2) = 2(2 - 1)(2 - 3) = 2(1)(-1) = -2$.
4.  El vértice es **(2, -2)**.

## Casos Especiales

### Una Sola Raíz (Raíz Doble)

Si la función tiene una sola raíz real, significa que $r_1 = r_2$. En este caso, la forma factorizada es:
$f(x) = a(x - r)^2$
Esto es, en realidad, la **forma canónica** con $k=0$. El vértice está justo sobre el eje X, en el punto $(r, 0)$.

**Ejemplo:** $f(x) = 3(x - 4)^2$. La única raíz es $x=4$ y el vértice es $(4, 0)$.

### Sin Raíces Reales

Si la función no tiene raíces reales (la parábola no corta el eje X), **no se puede escribir en forma factorizada** usando números reales. En este caso, solo podemos usar la forma general o la canónica.

Esto ocurre cuando el **discriminante** es negativo, como veremos en el próximo tema.

---
**Próximo tema:** [06 - El Discriminante](06-discriminante.md)
