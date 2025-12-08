# CSS Grid (CSS Grid Layout)

CSS Grid Layout es un sistema de diseño bidimensional que permite organizar elementos en filas y columnas. A diferencia de Flexbox (unidimensional), Grid es ideal para el diseño de toda una página o secciones complejas, donde necesitas controlar la ubicación de los elementos en ambas dimensiones simultáneamente.

## Conceptos Clave

Al igual que Flexbox, Grid se basa en un "contenedor de cuadrícula" y "elementos de cuadrícula".

-   **Contenedor de Cuadrícula (Grid Container):** El elemento padre que se convierte en una cuadrícula al aplicar `display: grid;` o `display: inline-grid;`.
-   **Elementos de Cuadrícula (Grid Items):** Los hijos directos del contenedor de cuadrícula. Son los elementos que se ubicarán dentro de la cuadrícula.
-   **Líneas de Cuadrícula (Grid Lines):** Las líneas horizontales y verticales que forman la estructura de la cuadrícula.
-   **Pistas de Cuadrícula (Grid Tracks):** Los espacios entre dos líneas de cuadrícula (filas o columnas).
-   **Celdas de Cuadrícula (Grid Cells):** La intersección de una fila y una columna.
-   **Áreas de Cuadrícula (Grid Areas):** Un espacio rectangular definido por líneas de cuadrícula, que puede abarcar múltiples celdas.

## Propiedades del Contenedor de Cuadrícula

Estas propiedades se aplican al elemento padre que tiene `display: grid;`.

### `display: grid | inline-grid;`

Convierte un elemento en un contenedor de cuadrícula.
-   `grid`: Un contenedor de cuadrícula a nivel de bloque.
-   `inline-grid`: Un contenedor de cuadrícula a nivel de línea.

### `grid-template-columns` y `grid-template-rows`

Definen el número y el tamaño de las columnas y filas de la cuadrícula.

-   **Valores de longitud:** `px`, `em`, `rem`, `%`.
-   **`fr` (unidad fraccional):** Representa una fracción del espacio disponible en el contenedor de cuadrícula. Es muy útil para diseños fluidos.
-   **`auto`:** Toma automáticamente el tamaño necesario para su contenido, o distribuye el espacio restante.
-   **`min-content`:** El tamaño más pequeño posible del contenido sin desbordamiento.
-   **`max-content`:** El tamaño intrínseco preferido del contenido.
-   **`repeat(n, valor)`:** Una función para crear rápidamente columnas o filas repetidas.

```css
.container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr; /* Columna de 100px, otra que ocupa 1/3 del espacio restante, otra que ocupa 2/3 */
    grid-template-rows: auto 200px; /* Primera fila auto-ajustable, segunda de 200px */
    grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
}
```

### `grid-template-areas`

Define áreas con nombres dentro de la cuadrícula, lo que facilita el posicionamiento de los elementos.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
}
```
Los nombres de las áreas se asignan a los elementos de cuadrícula usando la propiedad `grid-area` (ver más adelante).

### `gap`, `row-gap`, `column-gap`

Establecen el tamaño del espacio (gutters) entre las filas y columnas de la cuadrícula.
-   `gap`: Atajo para `row-gap` y `column-gap`.

```css
.container {
    gap: 20px; /* 20px de espacio entre filas y columnas */
    row-gap: 10px; /* 10px entre filas */
    column-gap: 30px; /* 30px entre columnas */
}
```

### `justify-items`, `align-items`, `place-items`

Alinean el *contenido* de las celdas de cuadrícula a lo largo del eje de la *fila* (`justify-items`) y del eje de la *columna* (`align-items`).
-   `justify-items`: Alinea elementos a lo largo del eje de fila (horizontal).
-   `align-items`: Alinea elementos a lo largo del eje de columna (vertical).
-   `place-items`: Atajo para `align-items` y `justify-items`.

Valores comunes: `start`, `end`, `center`, `stretch` (default).

```css
.container {
    justify-items: center; /* Centra horizontalmente el contenido de cada celda */
    align-items: center; /* Centra verticalmente el contenido de cada celda */
    place-items: center; /* Centra ambos */
}
```

### `justify-content`, `align-content`, `place-content`

Alinean la *cuadrícula completa* dentro del contenedor de cuadrícula si el tamaño total de la cuadrícula es menor que el tamaño del contenedor.
-   `justify-content`: Alinea la cuadrícula a lo largo del eje de fila (horizontal).
-   `align-content`: Alinea la cuadrícula a lo largo del eje de columna (vertical).
-   `place-content`: Atajo para `align-content` y `justify-content`.

Valores comunes: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.

```css
.container {
    justify-content: center; /* Centra la cuadrícula horizontalmente */
    align-content: center; /* Centra la cuadrícula verticalmente */
}
```

## Propiedades de los Elementos de Cuadrícula

Estas propiedades se aplican a los hijos directos de un contenedor de cuadrícula.

### `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`

Definen la posición de un elemento de cuadrícula especificando las líneas de cuadrícula en las que comienza y termina.

```css
.item-1 {
    grid-column-start: 1; /* Comienza en la línea 1 de columna */
    grid-column-end: 3;   /* Termina antes de la línea 3 de columna (ocupa 2 columnas) */
    grid-row-start: 1;
    grid-row-end: 2;
}
```

### `grid-column`, `grid-row` (Atajos)

Atajos para las propiedades `start` y `end`. También se puede usar `span` para indicar cuántas pistas abarcar.

```css
.item-1 {
    grid-column: 1 / 3;     /* Ocupa desde la línea 1 hasta antes de la línea 3 */
    grid-row: 1 / span 2; /* Comienza en la línea 1 y abarca 2 filas */
}
```

### `grid-area`

Asigna un nombre a un elemento de cuadrícula o especifica su posición usando líneas de cuadrícula (`grid-row-start / grid-column-start / grid-row-end / grid-column-end`).
Si se usaron `grid-template-areas`, esta propiedad es clave.

```css
.header {
    grid-area: header; /* Se posiciona en el área "header" definida por grid-template-areas */
}

/* O sin usar nombres de área: */
.item-2 {
    grid-area: 2 / 2 / 3 / 4; /* row-start / column-start / row-end / column-end */
}
```

### `justify-self`, `align-self`, `place-self`

Permiten alinear un *elemento de cuadrícula individual* dentro de su celda, anulando el `justify-items` o `align-items` del contenedor.

```css
.item-especial {
    justify-self: end;   /* Alinea el contenido de este ítem al final de su celda horizontalmente */
    align-self: start;   /* Alinea el contenido de este ítem al inicio de su celda verticalmente */
}
```

## Ejemplo Práctico de Diseño de Página con Grid

```html
<div class="page-layout">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <aside>Sidebar</aside>
    <footer>Footer</footer>
</div>
```

```css
.page-layout {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr; /* Col. nav, col. main, col. aside */
    grid-template-rows: auto 1fr auto; /* Fila header, fila contenido, fila footer */
    grid-template-areas:
        "header header header"
        "nav    main   aside"
        "footer footer footer";
    gap: 10px;
    height: 100vh; /* Para ver el efecto completo */
}

header { grid-area: header; background-color: lightcoral; }
nav    { grid-area: nav;    background-color: lightgreen; }
main   { grid-area: main;   background-color: lightblue; }
aside  { grid-area: aside;  background-color: lightyellow; }
footer { grid-area: footer; background-color: lightgray; }

/* Estilos básicos para visualizar */
.page-layout > * {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid #333;
}
```

CSS Grid es una herramienta extremadamente poderosa para crear diseños de página complejos y robustos de forma eficiente y semántica. Permite una gran flexibilidad y control sobre la disposición de los elementos en dos dimensiones.