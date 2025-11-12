# 14 - AplicACIONES Y MODELADO CON FUNCIONES CUADRÁTICAS

Las funciones cuadráticas no son solo un ejercicio académico; aparecen constantemente en el mundo real. Modelar situaciones con parábolas nos permite resolver problemas de optimización (encontrar máximos y mínimos), predecir trayectorias y mucho más.

El proceso general es:
**Planteo → Modelo → Solución → Interpretación**

## 1. Trayectorias y Proyectiles (Altura-Tiempo)

Esta es la aplicación más clásica. Cuando un objeto es lanzado al aire (sin contar la resistencia del aire), su altura en función del tiempo sigue una trayectoria parabólica.

La función general suele ser:
$h(t) = - \frac{1}{2}gt^2 + v_0t + h_0$

*   $h(t)$: altura en el instante $t$.
*   $g$: aceleración de la gravedad (aprox. 9.8 m/s² o 32 ft/s²). El signo es negativo porque la gravedad tira hacia abajo.
*   $v_0$: velocidad inicial (hacia arriba).
*   $h_0$: altura inicial.

Fíjate que es una función cuadrática $at^2+bt+c$ donde $a = -g/2$, $b=v_0$ y $c=h_0$.

### Preguntas Típicas y Cómo Resolverlas

*   **¿Cuál es la altura máxima que alcanza el objeto?**
    *   **Modelo:** La altura máxima es la coordenada `k` (o `y`) del **vértice**.
    *   **Solución:** Calcula el tiempo en que se alcanza: $t = -b/(2a)$. Luego, calcula la altura en ese tiempo, $h(t)$.

*   **¿Cuánto tiempo tarda en alcanzar la altura máxima?**
    *   **Modelo:** Es el tiempo correspondiente al vértice.
    *   **Solución:** Calcula la coordenada `h` (o `t`) del vértice: $t = -b/(2a)$.

*   **¿Cuánto tiempo tarda el objeto en caer al suelo?**
    *   **Modelo:** El objeto está en el suelo cuando su altura es cero, $h(t)=0$. Buscamos una **raíz**.
    *   **Solución:** Resuelve la ecuación cuadrática. Normalmente, una solución será negativa (el tiempo antes del lanzamiento, que se descarta) y la otra positiva (la que buscamos).

### Ejemplo

Se lanza una pelota hacia arriba desde el suelo ($h_0=0$) con una velocidad inicial de 20 m/s. Usa $g \approx 10$ m/s². El modelo es $h(t) = -5t^2 + 20t$.

*   **Altura máxima:**
    1.  Tiempo del vértice: $t = \frac{-20}{2(-5)} = \frac{-20}{-10} = 2$ segundos.
    2.  Altura máxima: $h(2) = -5(2)^2 + 20(2) = -20 + 40 = 20$ metros.

*   **Tiempo en el aire:**
    1.  Resolver $h(t) = 0 \implies -5t^2 + 20t = 0$.
    2.  Factorizar: $5t(-t + 4) = 0$.
    3.  Soluciones: $t=0$ (inicio) y $t=4$ segundos (caída). Tarda 4 segundos en caer.

## 2. Optimización de Áreas

Otro problema común es encontrar las dimensiones de un terreno, corral, etc., que maximicen el área, dado un perímetro fijo.

### Ejemplo

Un granjero tiene 40 metros de valla para construir un corral rectangular. Quiere que el área sea la máxima posible.

1.  **Planteo:**
    *   Perímetro: $2L + 2W = 40$, donde $L$ es el largo y $W$ es el ancho.
    *   Área: $A = L \cdot W$. Queremos maximizar $A$.

2.  **Modelo:**
    *   El área tiene dos variables, $L$ y $W$. Necesitamos una sola.
    *   Del perímetro, podemos despejar una: $2L = 40 - 2W \implies L = 20 - W$.
    *   Sustituimos $L$ en la fórmula del área:
        $A(W) = (20 - W) \cdot W = 20W - W^2$.
    *   Esta es una función cuadrática: $A(W) = -W^2 + 20W$.

3.  **Solución:**
    *   El área máxima es el **vértice** de la parábola $A(W)$.
    *   La parábola abre hacia abajo ($a=-1$), así que el vértice es un máximo.
    *   Coordenada `W` del vértice: $W = \frac{-20}{2(-1)} = 10$ metros.
    *   Si el ancho $W=10$, el largo es $L = 20 - 10 = 10$ metros.
    *   El área máxima es $A = 10 \cdot 10 = 100$ m².

4.  **Interpretación:** Para maximizar el área con un perímetro fijo, el rectángulo debe ser un **cuadrado**.

## 3. Modelos de Ingresos

En negocios, el ingreso a menudo se modela con funciones cuadráticas. Si el precio de un producto es muy alto, se venden pocas unidades. Si es muy bajo, se venden muchas pero se gana poco por unidad.

### Ejemplo

Una empresa vende un producto. A un precio de $p$ dólares, vende $q = 500 - 10p$ unidades.

1.  **Modelo de Ingreso:**
    *   Ingreso (I) = Precio ($p$) $\times$ Cantidad ($q$).
    *   $I(p) = p \cdot (500 - 10p) = 500p - 10p^2$.
    *   Es una función cuadrática que abre hacia abajo ($a=-10$).

2.  **¿Qué precio maximiza el ingreso?**
    *   Buscamos el vértice de $I(p)$.
    *   Coordenada `p` del vértice: $p = \frac{-500}{2(-10)} = \frac{-500}{-20} = 25$.

3.  **Interpretación:**
    *   El precio que maximiza el ingreso es de **$25**.
    *   A ese precio, se venderían $q = 500 - 10(25) = 250$ unidades.
    *   El ingreso máximo sería $I = 25 \cdot 250 = $6250.

---
**Próximo tema:** [15 - Errores Comunes y Cómo Evitarlos](15-errores-comunes.md)
