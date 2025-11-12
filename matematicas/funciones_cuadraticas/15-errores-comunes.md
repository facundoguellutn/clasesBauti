# 15 - Errores Comunes y Cómo Evitarlos

Al trabajar con funciones cuadráticas, es fácil cometer pequeños errores que pueden llevar a respuestas incorrectas. Conocerlos de antemano te ayudará a estar alerta y a verificar tu trabajo.

## Errores Algebraicos y de Signo

Estos son los más frecuentes.

### 1. Error con el signo de `b` en la fórmula del vértice y la general.
*   **Error Típico:** Olvidar que las fórmulas $h = \frac{-b}{2a}$ y $x = \frac{-b \pm \dots}{2a}$ empiezan con `-b`. Si `b` ya es negativo, `-b` será positivo.
*   **Ejemplo:** Para $f(x) = x^2 - 6x + 1$, $b=-6$.
    *   **Incorrecto:** $h = \frac{-6}{2(1)} = -3$.
    *   **Correcto:** $h = \frac{-(-6)}{2(1)} = \frac{6}{2} = 3$.
*   **Cómo evitarlo:** Siempre sustituye los coeficientes entre paréntesis: $h = \frac{-(-6)}{2(1)}$.

### 2. Error al elevar al cuadrado un número negativo.
*   **Error Típico:** Calcular mal $b^2$ cuando $b$ es negativo.
*   **Ejemplo:** Para $b=-5$, $b^2$ es $(-5)^2 = 25$.
    *   **Incorrecto:** $-5^2 = -25$. (Esto es el negativo de 5 al cuadrado).
*   **Cómo evitarlo:** Usa paréntesis en la calculadora y en tu mente: $b^2 = (-5) \times (-5) = 25$.

### 3. Error de signo en la forma canónica y factorizada.
*   **Error Típico:** Leer mal `h` y las raíces `r`.
*   **Forma Canónica $a(x-h)^2+k$:** Si ves $(x+3)^2$, significa $h=-3$.
*   **Forma Factorizada $a(x-r_1)(x-r_2)$:** Si ves $(x+3)$, la raíz es $x=-3$.
*   **Cómo evitarlo:** Recuerda la regla: "el signo opuesto al que ves dentro del paréntesis".

## Errores Conceptuales

### 4. Confundir las coordenadas del vértice con las raíces.
*   **Error Típico:** Pensar que el vértice da información sobre los cortes con el eje X.
*   **Aclaración:**
    *   El **vértice $(h, k)$** es el punto máximo o mínimo.
    *   Las **raíces** son los puntos donde $y=0$ (cortes con el eje X).
*   **Excepción:** Solo coinciden si el vértice está sobre el eje X (es decir, $k=0$), lo que corresponde a una raíz doble.

### 5. Creer que toda función cuadrática tiene dos raíces reales.
*   **Error Típico:** Asumir que siempre se puede factorizar o que la fórmula general siempre dará dos soluciones reales.
*   **Cómo evitarlo:** ¡Usa el **discriminante**! $\Delta = b^2 - 4ac$.
    *   Si $\Delta < 0$, no pierdas tiempo buscando raíces reales. La parábola no corta el eje X.

### 6. Interpretar mal las preguntas de los problemas de aplicación.
*   **Error Típico:** En un problema de altura-tiempo, dar la altura máxima cuando se pide el tiempo para alcanzarla.
*   **Cómo evitarlo:** Lee la pregunta cuidadosamente y asocia lo que se pide con el elemento correcto de la parábola:
    *   "Cuándo", "en qué momento" $ightarrow$ Pide un valor de **tiempo (x)**.
    *   "Cuál es la altura/área/ingreso máximo" $ightarrow$ Pide un valor de **altura/resultado (y)**.
    *   "Punto máximo/mínimo" $ightarrow$ Pide el **vértice (x, y)**.
    *   "Cuándo llega al suelo/inicio" $ightarrow$ Pide una **raíz (x)**.

## Checklist de Verificación Rápida

Después de resolver un problema, hazte estas preguntas para detectar errores:

1.  **¿Sustituí bien las raíces?**
    *   Toma las raíces que encontraste y ponlas de nuevo en la ecuación original. ¿El resultado es (aproximadamente) cero?

2.  **¿El signo de `a` coincide con la forma de mi gráfico?**
    *   Si $a>0$, tu parábola debe abrir hacia arriba. Si $a<0$, hacia abajo.

3.  **¿El vértice que calculé tiene sentido en el gráfico?**
    *   ¿Está realmente en el punto más alto/bajo de la curva que dibujaste?
    *   ¿Está en el punto medio de las raíces (si existen)?

4.  **¿El corte con el eje Y es correcto?**
    *   ¿El punto $(0, c)$ está bien ubicado en tu gráfico?

5.  **¿Mis respuestas al problema de aplicación son lógicas?**
    *   ¿Tiene sentido un tiempo negativo? ¿Un área negativa? Usa el sentido común para descartar soluciones matemáticamente correctas pero físicamente imposibles.

---
**Próximo tema:** [16 - Resumen y Chuleta de Fórmulas](16-resumen-y-chuleta.md)
