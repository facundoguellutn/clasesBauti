# Flexbox (CSS Flexible Box Layout)

Flexbox es un modelo de diseño unidimensional que permite organizar elementos en una sola dirección (fila o columna). Es ideal para distribuir espacio entre los elementos de una interfaz y alinear contenido de manera eficiente.

## Conceptos Clave

Flexbox introduce un "contenedor flex" y "elementos flex".

-   **Contenedor Flex (Flex Container):** El elemento padre que contiene los elementos flex. Se convierte en un contenedor flex al aplicar `display: flex;` o `display: inline-flex;`.
-   **Elementos Flex (Flex Items):** Los hijos directos del contenedor flex. Son los elementos que se organizarán y alinearán.
-   **Eje Principal (Main Axis):** El eje a lo largo del cual se disponen los elementos flex. Su dirección está definida por `flex-direction`.
-   **Eje Transversal (Cross Axis):** El eje perpendicular al eje principal.

## Propiedades del Contenedor Flex

Estas propiedades se aplican al elemento padre que tiene `display: flex;`.

### `display: flex | inline-flex;`

Convierte un elemento en un contenedor flex.
-   `flex`: Un contenedor flex a nivel de bloque.
-   `inline-flex`: Un contenedor flex a nivel de línea.

### `flex-direction: row | row-reverse | column | column-reverse;`

Establece la dirección del eje principal, que define la dirección en que los elementos flex se colocan en el contenedor flex.
-   `row` (default): Izquierda a derecha.
-   `row-reverse`: Derecha a izquierda.
-   `column`: Arriba a abajo.
-   `column-reverse`: Abajo a arriba.

### `flex-wrap: nowrap | wrap | wrap-reverse;`

Controla si los elementos flex deben ajustarse a la siguiente línea o permanecer en una sola línea.
-   `nowrap` (default): Todos los elementos flex estarán en una sola línea.
-   `wrap`: Los elementos flex se ajustarán a múltiples líneas de arriba a abajo.
-   `wrap-reverse`: Los elementos flex se ajustarán a múltiples líneas de abajo a arriba.

### `flex-flow` (Atajo para `flex-direction` y `flex-wrap`)

```css
.container {
    flex-flow: row wrap; /* Equivalente a flex-direction: row; y flex-wrap: wrap; */
}
```

### `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;`

Alinea los elementos flex a lo largo del eje principal.
-   `flex-start` (default): Los elementos se agrupan al inicio del eje principal.
-   `flex-end`: Los elementos se agrupan al final del eje principal.
-   `center`: Los elementos se centran a lo largo del eje principal.
-   `space-between`: El primer elemento al inicio, el último al final, y el espacio restante se distribuye uniformemente entre ellos.
-   `space-around`: Distribuye el espacio uniformemente alrededor de los elementos, dejando medio espacio en los extremos.
-   `space-evenly`: Distribuye el espacio uniformemente entre los elementos y los extremos.

### `align-items: flex-start | flex-end | center | baseline | stretch;`

Alinea los elementos flex a lo largo del eje transversal *cuando están en una sola línea*.
-   `flex-start`: Los elementos se agrupan al inicio del eje transversal.
-   `flex-end`: Los elementos se agrupan al final del eje transversal.
-   `center`: Los elementos se centran a lo largo del eje transversal.
-   `baseline`: Los elementos se alinean por sus líneas base.
-   `stretch` (default): Los elementos se estiran para llenar el contenedor flex (asumiendo que no tienen un alto explícito).

### `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

Alinea las líneas de elementos flex dentro de un contenedor flex cuando hay varias líneas (cuando `flex-wrap` es `wrap` o `wrap-reverse`). **No tiene efecto en contenedores con una sola línea de elementos.**
-   Los valores son similares a `justify-content`.

## Propiedades de los Elementos Flex

Estas propiedades se aplican a los hijos directos de un contenedor flex.

### `order: <integer>;`

Especifica el orden de los elementos flex dentro del contenedor. El valor por defecto es `0`. Los elementos con valores más bajos aparecen primero.

```css
.item-1 { order: 2; }
.item-2 { order: 1; } /* Este aparecerá antes que item-1 */
```

### `flex-grow: <number>;`

Define la capacidad de un elemento flex para crecer si es necesario. Acepta un valor sin unidades que sirve como proporción. Por defecto es `0` (no crecerá).

```css
.item-a { flex-grow: 1; }
.item-b { flex-grow: 2; } /* Crecerá el doble que item-a */
```

### `flex-shrink: <number>;`

Define la capacidad de un elemento flex para encogerse si es necesario. Por defecto es `1` (se encogerá si es necesario). Un valor de `0` significa que no se encogerá.

### `flex-basis: <length> | auto;`

Define el tamaño por defecto de un elemento antes de que se distribuya el espacio restante. Puede ser un valor de longitud (`px`, `%`, `em`, etc.) o `auto`. Por defecto es `auto`.

### `flex` (Atajo para `flex-grow`, `flex-shrink` y `flex-basis`)

La forma más común es `flex: <grow> <shrink> <basis>;`.

```css
.item {
    flex: 1 1 auto; /* Crecer, encoger y con tamaño base automático */
    flex: 1; /* Atajo común: flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}
```

### `align-self: auto | flex-start | flex-end | center | baseline | stretch;`

Permite anular la alineación por defecto (o la especificada por `align-items` del contenedor) para un elemento flex individual a lo largo del eje transversal.

```css
.item-especial {
    align-self: center; /* Este elemento se centrará verticalmente, independientemente del align-items del padre */
}
```

## Ejemplo Práctico

```html
<div class="contenedor-flex">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

```css
.contenedor-flex {
    display: flex;
    justify-content: space-around; /* Distribuye espacio alrededor de los ítems */
    align-items: center; /* Centra los ítems verticalmente */
    height: 150px; /* Para que se vea el efecto de align-items */
    border: 1px solid black;
}

.item {
    background-color: lightblue;
    padding: 20px;
    margin: 5px;
    font-size: 1.5em;
}
```

Flexbox es una herramienta extremadamente poderosa para crear layouts flexibles y responsivos de una manera mucho más sencilla que con los métodos tradicionales (como floats). Es esencial para el diseño web moderno.