# 16 - Resumen y Chuleta de Fórmulas

Esta es una hoja de consulta rápida para tener a mano las fórmulas y conceptos más importantes de las funciones cuadráticas.

## Las Tres Formas de la Función Cuadrática

| Forma | Fórmula | Información Directa |
| :--- | :--- | :--- |
| **General** | $f(x) = ax^2 + bx + c$ | - **Concavidad:** signo de `a`.<br>- **Corte con eje Y:** punto (0, c). |
| **Canónica** | $f(x) = a(x - h)^2 + k$ | - **Vértice:** punto (h, k).<br>- **Eje de simetría:** línea $x=h$. |
| **Factorizada** | $f(x) = a(x - r_1)(x - r_2)$ | - **Raíces (cortes eje X):** puntos $(r_1, 0)$ y $(r_2, 0)$. |

---

## Fórmulas Clave

### 1. Vértice (desde la Forma General)
Coordenadas $(h, k)$:
*   $h = \frac{-b}{2a}$
*   $k = f(h)$ (evaluar la función en `h`)

### 2. Raíces (Fórmula General)
Soluciones de $ax^2 + bx + c = 0$:
*   $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### 3. Discriminante
Clasifica el tipo de raíces:
*   $\Delta = b^2 - 4ac$

| Valor de $\Delta$ | Tipo de Raíces | Gráfico |
| :--- | :--- | :--- |
| $\Delta > 0$ | 2 raíces reales distintas | Corta el eje X en 2 puntos |
| $\Delta = 0$ | 1 raíz real doble | Toca el eje X en el vértice |
| $\Delta < 0$ | 2 raíces complejas (no reales) | No toca el eje X |

---

## Traducción entre Formas

*   **General $\rightarrow$ Canónica:**
    1.  Usa la fórmula del vértice para hallar $(h, k)$.
    2.  Sustituye en $f(x) = a(x-h)^2 + k$.
    *O bien, completa el cuadrado.*

*   **General $\rightarrow$ Factorizada:**
    1.  Usa la fórmula general para hallar las raíces $r_1, r_2$.
    2.  Sustituye en $f(x) = a(x-r_1)(x-r_2)$.
    *O bien, factoriza directamente.*

*   **Canónica/Factorizada $\rightarrow$ General:**
    1.  Desarrolla los cuadrados y/o los productos.
    2.  Agrupa los términos semejantes.

---

## Criterios Rápidos para Graficar

1.  **¿Abre arriba o abajo?** $\rightarrow$ Signo de `a`.
2.  **¿Dónde está el vértice?** $\rightarrow$ Usa $h = -b/(2a)$ y $k=f(h)$.
3.  **¿Dónde corta el eje Y?** $\rightarrow$ Punto $(0, c)$.
4.  **¿Corta el eje X?** $\rightarrow$ Calcula $\Delta = b^2 - 4ac$.
    *   Si $\Delta \ge 0$, calcula las raíces.

---

## Mini-Tabla de Preguntas y Respuestas

| Si te preguntan por... | Debes calcular... |
| :--- | :--- |
| **Altura/valor máximo o mínimo** | La coordenada **k** del vértice. |
| **El momento/lugar donde ocurre el máximo/mínimo** | La coordenada **h** del vértice. |
| **Puntos de corte/intersección con el eje X** | Las **raíces** ($f(x)=0$). |
| **Punto de corte/intersección con el eje Y** | El valor de **c** ($f(0)$). |
| **El número y tipo de soluciones** | El **discriminante** ($\Delta$). |
| **El eje de simetría** | La línea vertical $x=h$. |

---
**Próximo tema:** [17 - Glosario de Términos](17-glosario.md)
