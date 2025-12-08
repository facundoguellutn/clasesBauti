# Diseño Responsivo con CSS

El diseño responsivo (Responsive Web Design) es un enfoque para el diseño web que tiene como objetivo crear sitios web que proporcionen una experiencia de visualización óptima en una amplia gama de dispositivos, desde monitores de escritorio hasta teléfonos móviles y tabletas. Un sitio web responsivo se adapta automáticamente al tamaño de la pantalla del usuario.

## Principios Clave del Diseño Responsivo

El concepto fue introducido por Ethan Marcotte en 2010 y se basa en tres pilares principales:

1.  **Diseño Fluido Basado en Cuadrículas (Fluid Grids):** Utilizar unidades relativas (porcentajes, `em`, `rem`, `vw`, `vh`) en lugar de unidades fijas (píxeles) para los anchos y altos de los elementos. Esto permite que el diseño se "estire" o "encoja" según el tamaño de la pantalla.
2.  **Imágenes Flexibles (Flexible Images):** Asegurar que las imágenes y otros medios se escalen proporcionalmente para adaptarse a sus contenedores, sin desbordar el diseño.
3.  **Media Queries:** Reglas CSS que permiten aplicar estilos diferentes basándose en las características del dispositivo del usuario (como el ancho de la pantalla, la altura, la orientación, la resolución, etc.).

## 1. Meta Viewport

El primer paso y el más crucial para cualquier diseño responsivo es incluir la etiqueta `viewport` en la sección `<head>` de tu documento HTML.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

-   `width=device-width`: Establece el ancho del viewport al ancho del dispositivo.
-   `initial-scale=1.0`: Establece el nivel de zoom inicial cuando la página se carga por primera vez.

Sin esta etiqueta, los navegadores de dispositivos móviles a menudo renderizarán la página en un "viewport de escritorio" (más ancho) y luego la reducirán, lo que resulta en texto pequeño y una mala experiencia de usuario.

## 2. Unidades Relativas y Fluidas

En lugar de usar `px` para `width`, `height`, `font-size`, `margin`, `padding`, etc., es preferible usar:

-   **Porcentajes (`%`):** Relativos al tamaño del elemento padre.
-   **`em`:** Relativo al `font-size` del elemento padre.
-   **`rem`:** Relativo al `font-size` del elemento raíz (`<html>`).
-   **`vw` (viewport width):** 1% del ancho del viewport.
-   **`vh` (viewport height):** 1% de la altura del viewport.

**Ejemplo:**

```css
.contenedor {
    width: 90%; /* Ocupa el 90% del ancho del padre */
    max-width: 1200px; /* Pero no más de 1200px */
    margin: 0 auto; /* Centra el contenedor */
    padding: 2vw; /* Padding relativo al ancho del viewport */
}

h1 {
    font-size: 3rem; /* 3 veces el tamaño de fuente raíz */
}

img {
    max-width: 100%; /* La imagen nunca será más ancha que su contenedor */
    height: auto; /* Mantiene la proporción de aspecto */
}
```

## 3. Media Queries

Las Media Queries son la herramienta más potente de CSS para aplicar estilos condicionalmente. Permiten aplicar bloques de CSS solo cuando ciertas condiciones se cumplen.

### Sintaxis Básica

```css
@media screen and (max-width: 768px) {
    /* Estilos que se aplicarán cuando el ancho de la pantalla sea de 768px o menos */
    body {
        font-size: 14px;
    }
    .columna-lateral {
        display: none; /* Oculta la columna lateral en pantallas pequeñas */
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Estilos para tabletas y pantallas medianas */
    .navegacion {
        flex-direction: column;
    }
}

@media print {
    /* Estilos específicos para impresión */
    body {
        background-color: white;
        color: black;
    }
}
```

### Características de Medios Comunes

-   `width`, `height`: Ancho y alto del viewport.
    -   `min-width`, `max-width`: Útiles para "Mobile First" y "Desktop First".
-   `orientation`: `portrait` (vertical) o `landscape` (horizontal).
-   `aspect-ratio`: Relación de aspecto del viewport.
-   `resolution`: Resolución de la pantalla.

### Estrategias de Diseño con Media Queries

#### Mobile First (Recomendado)

Empieza diseñando para pantallas pequeñas (móviles) y luego usa Media Queries para añadir estilos que mejoren la experiencia en pantallas más grandes. Esto asegura un rendimiento rápido en dispositivos móviles y una base sólida de accesibilidad.

```css
/* Estilos por defecto para móviles (base) */
body {
    font-size: 16px;
    padding: 10px;
}

.menu {
    flex-direction: column;
}

/* Media Query para tabletas y ordenadores (cuando la pantalla es más ancha) */
@media screen and (min-width: 768px) {
    body {
        font-size: 18px;
        padding: 20px;
    }
    .menu {
        flex-direction: row;
        justify-content: space-around;
    }
}

/* Media Query para pantallas grandes de escritorio */
@media screen and (min-width: 1200px) {
    body {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

#### Desktop First

Empieza diseñando para pantallas grandes (escritorio) y luego usa Media Queries para ajustar y simplificar el diseño en pantallas más pequeñas. Esta estrategia puede ser más compleja de mantener y puede resultar en sitios más pesados para dispositivos móviles.

```css
/* Estilos por defecto para escritorio (base) */
body {
    font-size: 18px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Media Query para pantallas más pequeñas (tabletas y móviles) */
@media screen and (max-width: 768px) {
    body {
        font-size: 16px;
        margin: 0 10px;
    }
}
```

El diseño responsivo es una habilidad fundamental en el desarrollo web moderno. Al combinar un viewport adecuado, unidades fluidas y Media Queries, puedes crear experiencias de usuario que se vean y funcionen bien en cualquier dispositivo. Flexbox y CSS Grid son complementos poderosos para crear layouts responsivos dentro de este marco.