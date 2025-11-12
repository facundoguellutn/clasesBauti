# 18 - Preguntas Frecuentes (FAQ)

Aquí se responden algunas de las dudas más comunes que surgen al estudiar funciones cuadráticas.

### 1. ¿Cómo sé si conviene factorizar o usar la fórmula general?

Esta es una decisión estratégica.

*   **Intenta factorizar primero si:**
    *   Los coeficientes $a, b, c$ son números enteros y pequeños.
    *   El caso es simple ($a=1$ o $c=0$ o $b=0$).
    *   Puedes "ver" rápidamente los números que funcionan (para $x^2+bx+c$, dos números que multiplican `c` y suman `b`).

*   **Usa la fórmula general siempre que:**
    *   La factorización no sea obvia después de unos segundos.
    *   Los coeficientes sean grandes, fraccionarios o irracionales.
    *   Quieras estar 100% seguro de no cometer un error al tantear.
    *   El problema te pida explícitamente que la uses.

**Conclusión:** La fórmula general **siempre funciona**. La factorización es un **atajo** útil en ciertas situaciones. Si dudas, usa la fórmula general.

### 2. ¿Qué pasa si `a` es negativo? ¿Cambia algo?

Sí, y es muy importante.

*   **Gráficamente:** La parábola se abre **hacia abajo**. El vértice es un **máximo**, no un mínimo.
*   **Algebraicamente:** Todas las fórmulas funcionan igual, pero debes tener mucho cuidado con los signos.
    *   **Vértice ($h = -b/2a$):** El denominador $2a$ será negativo.
    *   **Discriminante ($\Delta = b^2 - 4ac$):** El término `-4ac` a menudo se vuelve positivo si `c` también es positivo, lo que puede ser contraintuitivo.

**Consejo:** Al resolver la ecuación $ax^2+bx+c=0$ con `a` negativo, a algunos estudiantes les resulta más fácil multiplicar toda la ecuación por -1 para hacer `a` positivo. Por ejemplo, resolver $-x^2+3x-2=0$ es lo mismo que resolver $x^2-3x+2=0$. ¡Pero ten cuidado! Esto solo se puede hacer con la **ecuación** (cuando está igualada a 0), no con la **función** $f(x)$, ya que cambiarías el gráfico (lo voltearías).

### 3. ¿Cómo estimo el vértice rápidamente sin hacer todos los cálculos?

*   **Si tienes las raíces ($r_1, r_2$):** El vértice está justo en el medio. Calcula el promedio: $h = (r_1 + r_2) / 2$.
*   **Si tienes el corte con el eje Y ($(0, c)$) y su punto simétrico ($(2h, c)$):** El vértice está a la misma distancia horizontal de ambos.
*   **Intuición con `b` y `a`:** Recuerda la regla de signos:
    *   Si `a` y `b` tienen el mismo signo, el vértice está a la izquierda del eje Y ($h<0$).
    *   Si `a` y `b` tienen signos opuestos, el vértice está a la derecha del eje Y ($h>0$).

### 4. ¿Por qué a veces no hay raíces reales? ¿Qué significa?

*   **Significado Algebraico:** Ocurre cuando el discriminante $\Delta = b^2 - 4ac$ es negativo. Esto significa que para resolver la fórmula general, tendrías que calcular la raíz cuadrada de un número negativo, lo cual no es posible en los números reales.
*   **Significado Gráfico:** La parábola **no cruza el eje X**. Está "flotando" completamente por encima o por debajo de él.
    *   Si $a>0$, su punto más bajo (el vértice) está por encima de $y=0$.
    *   Si $a<0$, su punto más alto (el vértice) está por debajo de $y=0$.
*   **En la vida real:** Esto puede significar que una situación nunca ocurre. Por ejemplo, si una función modela las ganancias de un negocio y no tiene raíces reales (y $a<0$), podría significar que el negocio *siempre* da pérdidas.

### 5. ¿La forma canónica y la factorizada son siempre mejores que la general?

No necesariamente. Cada forma tiene su utilidad.

*   **Forma General ($ax^2+bx+c$):**
    *   **Mejor para:** Ver el corte con el eje Y de un vistazo (es `c`). Es la forma en que se plantean la mayoría de los problemas.
*   **Forma Canónica ($a(x-h)^2+k$):**
    *   **Mejor para:** Ver el vértice y el eje de simetría de un vistazo. Ideal para problemas de optimización (máximos y mínimos).
*   **Forma Factorizada ($a(x-r_1)(x-r_2)$):**
    *   **Mejor para:** Ver las raíces (cortes con el eje X) de un vistazo.

El verdadero dominio del tema viene de la habilidad de pasar de una forma a otra según lo que necesites resolver.

---
**¡Curso completado!** Ahora es el momento de poner todo en práctica con los [Ejercicios](ejercicios/01-ejercicios-basicos.md).
