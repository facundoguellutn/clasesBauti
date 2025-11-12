# 11 - Resolución con la Fórmula General

Cuando la factorización no es sencilla o es imposible, existe un método infalible para encontrar las raíces de cualquier ecuación cuadrática $ax^2 + bx + c = 0$: la **fórmula general** (también conocida como fórmula cuadrática o de Bhaskara).

## La Fórmula General

Para una ecuación cuadrática $ax^2 + bx + c = 0$, las soluciones para $x$ vienen dadas por:

$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### Interpretación de la Fórmula

*   **$-b$**: Es el opuesto del coeficiente $b$.
*   **$\pm$**: Este símbolo indica que hay dos posibles soluciones: una usando el signo `+` y otra usando el signo `-`.
    *   $x_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}$
    *   $x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$
*   **$\sqrt{b^2 - 4ac}$**: La expresión dentro de la raíz es el **discriminante ($\Delta$)**.
    *   Si $\Delta > 0$, la raíz es un número real y obtendrás dos soluciones distintas.
    *   Si $\Delta = 0$, la raíz es 0 y obtendrás una única solución doble ($x = -b/2a$).
    *   Si $\Delta < 0$, la raíz es un número imaginario y no habrá soluciones reales.

## Uso Correcto de la Fórmula: Paso a Paso

Veamos cómo aplicarla con un ejemplo: $2x^2 + 5x - 3 = 0$.

1.  **Identificar los coeficientes `a`, `b` y `c`:**
    *   $a = 2$
    *   $b = 5$
    *   $c = -3$ (¡no olvides el signo!)

2.  **Sustituir los valores en la fórmula:**
    $x = \frac{-(5) \pm \sqrt{(5)^2 - 4(2)(-3)}}{2(2)}$

3.  **Simplificar la expresión paso a paso:**
    *   **Dentro de la raíz (discriminante):**
        $(5)^2 - 4(2)(-3) = 25 - (-24) = 25 + 24 = 49$.
    *   **Reescribir la fórmula con el discriminante simplificado:**
        $x = \frac{-5 \pm \sqrt{49}}{4}$

4.  **Calcular la raíz cuadrada:**
    $\sqrt{49} = 7$.
    $x = \frac{-5 \pm 7}{4}$

5.  **Separar las dos soluciones:**
    *   **Solución 1 (con `+`):**
        $x_1 = \frac{-5 + 7}{4} = \frac{2}{4} = \frac{1}{2}$
    *   **Solución 2 (con `-`):**
        $x_2 = \frac{-5 - 7}{4} = \frac{-12}{4} = -3$

Las raíces de la función son $x = 1/2$ y $x = -3$.

## Chequeos y Verificación

Una vez que encuentres las raíces, es una buena práctica verificarlas.

*   **Sustituir en la ecuación original:** Reemplaza $x$ en $ax^2 + bx + c$ con cada una de las raíces que encontraste. El resultado debería ser 0.
    *   **Verificando $x_1 = 1/2$:**
        $2(1/2)^2 + 5(1/2) - 3 = 2(1/4) + 5/2 - 3 = 1/2 + 5/2 - 3 = 6/2 - 3 = 3 - 3 = 0$. **Correcto.**
    *   **Verificando $x_2 = -3$:**
        $2(-3)^2 + 5(-3) - 3 = 2(9) - 15 - 3 = 18 - 15 - 3 = 0$. **Correcto.**

## Deducción Breve de la Fórmula (Opcional)

La fórmula general no es mágica. Se deduce aplicando el método de **completar el cuadrado** a la ecuación genérica $ax^2 + bx + c = 0$.

1.  $ax^2 + bx = -c$
2.  $x^2 + \frac{b}{a}x = -\frac{c}{a}$ (dividiendo por $a$)
3.  $x^2 + \frac{b}{a}x + (\frac{b}{2a})^2 = -\frac{c}{a} + (\frac{b}{2a})^2$ (completando el cuadrado)
4.  $(x + \frac{b}{2a})^2 = \frac{b^2 - 4ac}{4a^2}$
5.  $x + \frac{b}{2a} = \pm \sqrt{\frac{b^2 - 4ac}{4a^2}} = \frac{\pm \sqrt{b^2 - 4ac}}{2a}$
6.  $x = -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

---
**Próximo tema:** [12 - Graficar a Mano](12-graficar-a-mano.md)
