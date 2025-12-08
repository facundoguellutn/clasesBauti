# Selectores CSS

Los selectores CSS son patrones que se utilizan para seleccionar los elementos HTML a los que se les aplicarán los estilos. Son fundamentales para la eficiencia y organización de tus hojas de estilo.

## Tipos de Selectores Básicos

### 1. Selector de Tipo (Elemento)

Selecciona todos los elementos de un tipo HTML específico.

```css
p {
    color: blue; /* Aplica color azul a todos los párrafos */
}

h1 {
    font-size: 3em; /* Establece el tamaño de fuente para todos los h1 */
}
```

### 2. Selector de ID

Selecciona un único elemento HTML con un `id` específico. Los IDs deben ser únicos en una página. Se denota con un `#`.

```html
<p id="parrafo-principal">Este es el párrafo principal.</p>
```

```css
#parrafo-principal {
    background-color: lightgray;
    padding: 10px;
}
```

### 3. Selector de Clase

Selecciona todos los elementos HTML que tienen un atributo `class` específico. Las clases pueden ser reutilizadas en múltiples elementos. Se denota con un `.`.

```html
<p class="resaltado">Este párrafo está resaltado.</p>
<span class="resaltado">Este texto también está resaltado.</span>
```

```css
.resaltado {
    color: red;
    font-weight: bold;
}
```

### 4. Selector Universal (`*`)

Selecciona todos los elementos HTML en la página. Útil para aplicar estilos base o reiniciar propiedades.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Un reset común */
}
```

## Combinadores

Los combinadores explican la relación entre los selectores.

### 1. Combinador Descendente (Espacio)

Selecciona los elementos que son descendientes (hijos, nietos, etc.) de otro elemento.

```html
<div class="contenedor">
    <p>Este párrafo está dentro del div.</p>
    <span>
        <p>Este párrafo también está dentro del div.</p>
    </span>
</div>
<p>Este párrafo no está dentro del div.</p>
```

```css
.contenedor p {
    color: green; /* Aplica color verde solo a los párrafos dentro de .contenedor */
}
```

### 2. Combinador de Hijo Directo (`>`)

Selecciona los elementos que son hijos directos de otro elemento.

```html
<ul class="menu">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li class="sub-menu">
        <a href="#">Sub-menú</a>
        <ul>
            <li>Sub-elemento 1</li>
        </ul>
    </li>
</ul>
```

```css
.menu > li {
    font-weight: bold; /* Solo los 'li' que son hijos directos de .menu */
}

.menu li ul li {
    font-style: italic; /* Todos los 'li' dentro de un 'ul' dentro de un 'li' dentro de .menu */
}
```

### 3. Combinador de Hermano Adyacente (`+`)

Selecciona un elemento que es inmediatamente precedido por un elemento específico y son hermanos (comparten el mismo padre).

```html
<h1>Título</h1>
<p>Primer párrafo</p>
<p>Segundo párrafo (este será afectado)</p>
<div>Otro div</div>
<p>Tercer párrafo</p>
```

```css
h1 + p {
    margin-top: 50px; /* Aplica margen superior al párrafo inmediatamente después de un h1 */
}
```

### 4. Combinador de Hermano General (`~`)

Selecciona todos los elementos hermanos que son precedidos por un elemento específico.

```html
<h1>Título</h1>
<p>Primer párrafo (hermano)</p>
<div>Otro div</div>
<p>Segundo párrafo (hermano, afectado)</p>
<span>Un span</span>
<p>Tercer párrafo (hermano, afectado)</p>
```

```css
h1 ~ p {
    background-color: yellow; /* Aplica fondo amarillo a todos los párrafos que siguen a un h1 */
}
```

## Pseudoclases y Pseudo-elementos

### Pseudoclases

Seleccionan elementos basándose en un estado o característica específica. Se denotan con `:`.

-   `:hover`: Cuando el ratón está sobre el elemento.
-   `:active`: Cuando el elemento está siendo activado (clic, por ejemplo).
-   `:focus`: Cuando el elemento tiene el foco (en inputs, enlaces).
-   `:first-child`, `:last-child`: Seleccionan el primer o último hijo de un padre.
-   `:nth-child(n)`: Selecciona el n-ésimo hijo.
-   `:link`, `:visited`: Para enlaces no visitados y visitados.

```css
a:hover {
    color: orange;
}

input:focus {
    border-color: blue;
}

li:first-child {
    list-style-type: none; /* Elimina el marcador del primer elemento de la lista */
}
```

### Pseudo-elementos

Seleccionan una parte específica de un elemento. Se denotan con `::`.

-   `::before`: Inserta contenido antes del contenido de un elemento.
-   `::after`: Inserta contenido después del contenido de un elemento.
-   `::first-line`: Selecciona la primera línea de un bloque de texto.
-   `::first-letter`: Selecciona la primera letra de un bloque de texto.

```css
p::first-line {
    font-weight: bold;
}

h2::before {
    content: "🚀 "; /* Añade un emoji antes de cada h2 */
}
```

Dominar los selectores es crucial para escribir CSS eficiente, específico y fácil de mantener. Te permiten aplicar estilos con precisión sin tener que añadir clases o IDs innecesarios a tu HTML.