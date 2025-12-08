# Introducción a CSS

CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo que se utiliza para describir la **presentación** de un documento escrito en HTML (o XML). CSS describe cómo deben ser mostrados los elementos HTML en la pantalla, en papel, en la voz o en otros medios.

## ¿Qué es CSS?

Mientras que HTML se encarga de la **estructura** y el **contenido** de una página web, CSS se encarga del **diseño** y la **presentación**. Permite controlar el color del texto, el tipo y tamaño de las fuentes, el espaciado entre elementos, cómo se posicionan los elementos, imágenes de fondo, animaciones, y mucho más.

### La Separación de Responsabilidades

**HTML** = **Qué** hay en la página (estructura y contenido)
**CSS** = **Cómo** se ve (apariencia y diseño)
**JavaScript** = **Qué** hace (comportamiento e interactividad)

Esta separación es fundamental porque:
- **Mantenibilidad**: Puedes cambiar el diseño sin tocar el HTML
- **Reutilización**: Un archivo CSS puede estilizar múltiples páginas
- **Rendimiento**: Los navegadores pueden cachear CSS por separado
- **Accesibilidad**: El contenido HTML permanece semántico y accesible

## Beneficios de usar CSS

### 1. Separación de Contenido y Presentación

Mantiene el HTML limpio y enfocado en la estructura, mientras que el CSS se encarga del estilo. Esto facilita el mantenimiento y permite que diseñadores y desarrolladores trabajen de forma independiente.

**Ejemplo**:
```html
<!-- HTML limpio y semántico -->
<article>
    <h2>Título del Artículo</h2>
    <p>Contenido del artículo...</p>
</article>
```

```css
/* CSS separado - fácil de modificar */
article {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
}
```

### 2. Control Global

Puedes definir estilos para todo un sitio web desde un solo archivo CSS, lo que permite cambios rápidos y consistentes en todo el proyecto.

**Ejemplo**: Cambiar el color de todos los botones en todo el sitio modificando una sola regla CSS.

### 3. Mayor Control sobre el Diseño

Ofrece un control mucho más preciso sobre la apariencia de los elementos que los atributos de estilo HTML antiguos (que ya no se recomiendan).

**Comparación**:
```html
<!-- ❌ Antiguo (no recomendado) -->
<p style="color: blue; font-size: 18px; margin: 10px;">Texto</p>

<!-- ✅ Moderno (recomendado) -->
<p class="destacado">Texto</p>
```

```css
.destacado {
    color: blue;
    font-size: 18px;
    margin: 10px;
}
```

### 4. Menor Tamaño de Archivo

Al reutilizar estilos y separarlos del HTML, los archivos HTML pueden ser más pequeños, lo que acelera la carga de la página. Además, los navegadores pueden cachear el CSS, mejorando el rendimiento en visitas posteriores.

### 5. Diseño Responsivo

CSS permite crear diseños que se adaptan a diferentes tamaños de pantalla (móvil, tablet, desktop) usando media queries y unidades flexibles.

### 6. Animaciones y Transiciones

CSS permite crear animaciones y transiciones suaves sin necesidad de JavaScript, mejorando la experiencia del usuario.

## Sintaxis básica de CSS

Una regla CSS consiste en un *selector* y un bloque de *declaración*.

```css
selector {
    propiedad: valor;
    propiedad-otra: valor-otra;
}
```

-   **Selector:** Apunta al elemento HTML que deseas estilizar. Puede ser un tipo de elemento (como `p` o `h1`), una clase (`.mi-clase`), un ID (`#mi-id`), o combinaciones de ellos.
-   **Bloque de declaración:** Contiene una o más declaraciones separadas por punto y coma.
-   **Declaración:** Consiste en una *propiedad* CSS, seguida de dos puntos y su *valor*, terminando con un punto y coma.
    -   **Propiedad:** El aspecto del elemento que deseas cambiar (ej. `color`, `font-size`, `margin`).
    -   **Valor:** El ajuste que quieres aplicar a la propiedad (ej. `blue`, `16px`, `20px`).

**Ejemplo:**

```css
h1 {
    color: blue; /* Establece el color del texto de los h1 en azul */
    font-size: 32px; /* Establece el tamaño de la fuente en 32 píxeles */
}

p {
    font-family: Arial, sans-serif; /* Define la fuente */
    line-height: 1.5; /* Establece el espaciado entre líneas */
}

.destacado {
    background-color: yellow; /* Fondo amarillo para elementos con la clase "destacado" */
}

#logo {
    width: 100px; /* Ancho de 100px para el elemento con id "logo" */
}
```

## Cómo incluir CSS en HTML

Hay tres maneras principales de incluir CSS en un documento HTML:

### 1. CSS Externo (Recomendado)

El método más común y preferido. Los estilos se definen en un archivo `.css` separado y se enlazan desde el documento HTML.

**`styles.css`:**

```css
body {
    font-family: sans-serif;
    margin: 20px;
}

h1 {
    color: #333;
}
```

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página</title>
    <link rel="stylesheet" href="styles.css"> <!-- Enlace al archivo CSS externo -->
</head>
<body>
    <h1>Bienvenido</h1>
    <p>Este es un párrafo con estilos.</p>
</body>
</html>
```

### 2. CSS Interno (Etiqueta `<style>`)

Los estilos se colocan directamente dentro de la etiqueta `<style>` en la sección `<head>` del documento HTML. Útil para estilos específicos de una sola página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página</title>
    <style>
        body {
            background-color: lightblue;
        }

        h1 {
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Estilos Internos</h1>
    <p>Este párrafo tiene el fondo de la página azul claro.</p>
</body>
</html>
```

### 3. CSS en línea (Inline CSS)

Los estilos se aplican directamente a un elemento HTML utilizando el atributo `style`. No es recomendado para la mayoría de los casos debido a la mezcla de contenido y presentación y la dificultad de mantenimiento.

```html
<h1 style="color: purple; font-size: 24px;">Título con estilo en línea</h1>
<p style="background-color: lightgray;">Párrafo con estilo en línea.</p>
```

Empezar con CSS externo es la mejor práctica para la mayoría de los proyectos, ya que promueve la organización y la reusabilidad del código.

## Cascada y Especificidad

Dos conceptos fundamentales en CSS son la **cascada** y la **especificidad**. Entender estos conceptos es crucial para saber qué estilos se aplicarán cuando hay conflictos.

### La Cascada (Cascade)

La "cascada" en CSS se refiere al orden en que se aplican los estilos cuando hay múltiples reglas que afectan al mismo elemento. Los estilos se aplican en este orden:

1. **Importancia**: `!important` (evítalo cuando sea posible)
2. **Especificidad**: Selectores más específicos tienen prioridad
3. **Orden**: Si todo lo demás es igual, el último estilo declarado gana

```css
/* Regla 1 */
p {
    color: blue;
}

/* Regla 2 - Se aplica porque viene después */
p {
    color: red; /* Este color se aplicará */
}
```

### Especificidad

La especificidad determina qué regla CSS se aplica cuando hay conflictos. Se calcula así:

1. **Inline styles** (`style="..."`): 1000 puntos
2. **IDs** (`#mi-id`): 100 puntos
3. **Clases, atributos, pseudoclases** (`.clase`, `:hover`): 10 puntos
4. **Elementos y pseudoelementos** (`p`, `::before`): 1 punto

```css
/* Especificidad: 1 punto (1 elemento) */
p {
    color: blue;
}

/* Especificidad: 10 puntos (1 clase) */
.texto {
    color: red; /* Este gana */
}

/* Especificidad: 100 puntos (1 ID) */
#parrafo {
    color: green; /* Este gana sobre los anteriores */
}
```

**Regla general**: Usa la menor especificidad posible. Evita IDs en CSS cuando sea posible, prefiere clases.

### Ejemplo de Cascada y Especificidad

```html
<p class="texto" id="parrafo" style="color: purple;">Texto de ejemplo</p>
```

```css
/* Especificidad: 1 - No se aplica */
p {
    color: blue;
}

/* Especificidad: 10 - No se aplica */
.texto {
    color: red;
}

/* Especificidad: 100 - No se aplica */
#parrafo {
    color: green;
}
```

**Resultado**: El texto será **púrpura** porque el estilo inline tiene la mayor especificidad (1000 puntos).

## Buenas Prácticas desde el Inicio

✅ **Usa CSS externo** para la mayoría de los proyectos
✅ **Organiza tu CSS** en secciones lógicas (reset, variables, componentes, utilidades)
✅ **Usa nombres descriptivos** para clases (`.boton-primario` en lugar de `.btn1`)
✅ **Evita especificidad innecesaria** (prefiere clases sobre IDs)
✅ **Evita `!important`** a menos que sea absolutamente necesario
✅ **Comenta tu código** para secciones complejas
✅ **Usa un preprocesador** (SASS, LESS) cuando el proyecto crezca

## Errores Comunes de Principiantes

❌ **Usar inline styles** en lugar de CSS externo
❌ **Usar IDs en CSS** (mejor usar clases)
❌ **Abusar de `!important`** para "arreglar" problemas de especificidad
❌ **No organizar el CSS** (todo mezclado sin estructura)
❌ **Nombres de clases poco descriptivos** (`.c1`, `.div1`)
❌ **No entender la cascada** (confusión sobre qué estilos se aplican)

## Próximos Pasos

Ahora que entiendes los fundamentos de CSS, estás listo para aprender:
- **Selectores**: Cómo seleccionar elementos específicos
- **Modelo de caja**: Cómo funcionan margin, padding, border
- **Flexbox y Grid**: Sistemas modernos de layout
- **Diseño responsivo**: Adaptar tu diseño a diferentes pantallas

Con esto en mente, el siguiente paso es entender cómo seleccionar y aplicar estilos a los elementos HTML de manera efectiva usando selectores.