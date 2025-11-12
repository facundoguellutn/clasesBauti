# 10 - Factorización Paso a Paso

Factorizar una expresión cuadrática significa reescribirla como un producto de dos factores lineales. Es decir, pasar de $ax^2 + bx + c$ a $a(x - r_1)(x - r_2)$.

Este método es muy útil para encontrar las raíces de una función, pero no siempre es fácil o posible de aplicar.

## Estrategia 1: Cuando $a=1$ (Trinomios de la forma $x^2 + bx + c$)

Este es el caso más sencillo. Buscamos dos números que cumplan dos condiciones:
1.  **Multiplicados** den el término `c`.
2.  **Sumados** den el término `b`.

### Procedimiento

1.  **Identificar `b` y `c`:** En la expresión $x^2 + bx + c$.
2.  **Buscar dos números `m` y `n`** tales que:
    *   $m \cdot n = c$
    *   $m + n = b$
3.  **Escribir los factores:** La factorización será $(x + m)(x + n)$.

### Ejemplo 1: $x^2 + 7x + 10$

1.  $b=7$, $c=10$.
2.  Buscamos dos números que multiplicados den 10 y sumados den 7.
    *   Pares de factores de 10: (1, 10), (2, 5), (-1, -10), (-2, -5).
    *   El par que suma 7 es **2 y 5**.
3.  La factorización es **(x + 2)(x + 5)**.
    *   Las raíces son $x=-2$ y $x=-5$.

### Ejemplo 2: $x^2 - x - 12$

1.  $b=-1$, $c=-12$.
2.  Buscamos dos números que multiplicados den -12 y sumados den -1.
    *   Pares de factores de -12: (1, -12), (-1, 12), (2, -6), (-2, 6), (3, -4), (-3, 4).
    *   El par que suma -1 es **3 y -4**.
3.  La factorización es **(x + 3)(x - 4)**.
    *   Las raíces son $x=-3$ y $x=4$.

## Estrategia 2: Cuando $a \neq 1$ (Método de Agrupación)

Este método, también conocido como "método AC", es más estructurado.

### Procedimiento

Para factorizar $ax^2 + bx + c$:

1.  **Calcular el producto `ac`:** Multiplica los coeficientes $a$ y $c$.
2.  **Buscar dos números `m` y `n`** tales que:
    *   $m \cdot n = ac$
    *   $m + n = b$
3.  **Reescribir el término `bx`:** Sustituye $bx$ por $mx + nx$.
    $ax^2 + mx + nx + c$
4.  **Factorizar por agrupación:**
    *   Saca el factor común de los dos primeros términos.
    *   Saca el factor común de los dos últimos términos.
    *   Los dos paréntesis resultantes deben ser idénticos.
5.  **Escribir la factorización final:** Agrupa los factores comunes.

### Ejemplo: $2x^2 + 7x + 3$

1.  $a=2$, $b=7$, $c=3$. El producto $ac = 2 \cdot 3 = 6$.
2.  Buscamos dos números que multiplicados den 6 y sumados den 7. Los números son **1 y 6**.
3.  Reescribimos $7x$ como $1x + 6x$:
    $2x^2 + 1x + 6x + 3$
4.  Factorizamos por agrupación:
    *   De $(2x^2 + x)$, el factor común es $x$:  $x(2x + 1)$.
    *   De $(6x + 3)$, el factor común es $3$:  $3(2x + 1)$.
    *   La expresión queda: $x(2x + 1) + 3(2x + 1)$.
5.  El paréntesis $(2x+1)$ es el factor común. La factorización final es **(x + 3)(2x + 1)**.

## Casos Especiales

### Trinomio Cuadrado Perfecto (TCP)

Un trinomio es un TCP si se puede factorizar como $(px + q)^2$ o $(px - q)^2$.
*   **Detección:** Ocurre si $b^2 = 4ac$ (es decir, el discriminante $\Delta=0$).
*   **Ejemplo:** $9x^2 - 12x + 4$.
    *   $a=9$, $b=-12$, $c=4$.
    *   $\Delta = (-12)^2 - 4(9)(4) = 144 - 144 = 0$. Es un TCP.
    *   La raíz del primer término es $\sqrt{9x^2} = 3x$.
    *   La raíz del tercer término es $\sqrt{4} = 2$.
    *   El signo del medio es negativo.
    *   La factorización es **(3x - 2)^2**.

### Diferencia de Cuadrados

Este caso ocurre cuando $b=0$ y $c$ es negativo. La forma es $a^2x^2 - c^2$.
*   **Fórmula:** $(ax - c)(ax + c)$.
*   **Ejemplo:** $4x^2 - 25$.
    *   Esto es $(2x)^2 - 5^2$.
    *   La factorización es **(2x - 5)(2x + 5)**.

---
**Próximo tema:** [11 - Resolución con Fórmula General](11-resolucion-con-formula-general.md)
