# Ejercicios de CSS

Estos ejercicios están diseñados para practicar CSS de forma progresiva, desde selectores básicos hasta diseño responsivo. Intenta resolverlos y luego comprueba tus respuestas en el archivo de soluciones.

**ID de Ejercicios:** CSS-01 a CSS-15

---

## Bloque 1: Selectores y Propiedades Básicas (CSS-01 a CSS-04)

### CSS-01: Selectores Básicos

Crea un archivo CSS que estilice los siguientes elementos:
- Todos los párrafos (`p`) con color azul y tamaño de fuente 16px
- Todos los encabezados h1 con color rojo y centrados
- Todos los elementos con clase `.destacado` con fondo amarillo
- El elemento con id `#principal` con borde de 2px sólido negro

Crea un HTML de prueba con estos elementos para ver los resultados.

**Objetivo**: Dominar selectores básicos (elemento, clase, ID).

---

### CSS-02: Colores y Tipografía

Crea estilos CSS que incluyan:
- Diferentes formas de especificar colores:
  - Un elemento con color por nombre (`blue`)
  - Un elemento con color hexadecimal (`#ff5733`)
  - Un elemento con color RGB (`rgb(255, 87, 51)`)
  - Un elemento con color RGBA con transparencia
- Propiedades de tipografía:
  - `font-family` con fuente sans-serif
  - `font-size` en diferentes unidades (px, em, rem)
  - `font-weight` (normal, bold)
  - `text-align` (left, center, right)
  - `line-height` para espaciado entre líneas

**Objetivo**: Aprender a trabajar con colores y tipografía en CSS.

---

### CSS-03: Modelo de Caja

Crea un archivo CSS que demuestre el modelo de caja:
- Crea 3 cajas (divs) con diferentes configuraciones:
  - Caja 1: margin de 20px, padding de 15px, borde de 1px sólido
  - Caja 2: margin diferente en cada lado (top, right, bottom, left)
  - Caja 3: padding usando la sintaxis abreviada (top/bottom left/right)
- Aplica `box-sizing: border-box` a todas las cajas
- Agrega diferentes colores de fondo a cada caja para visualizar mejor

**Objetivo**: Entender margin, padding, border y box-sizing.

---

### CSS-04: Selectores Avanzados

Crea estilos usando selectores avanzados:
- Selector descendente: estiliza todos los `<p>` dentro de `.contenedor`
- Selector de hijo directo (`>`): estiliza solo los `<li>` que son hijos directos de `<ul>`
- Selector de hermano adyacente (`+`): estiliza el párrafo que viene inmediatamente después de un h2
- Pseudoclase `:hover`: cambia el color de los enlaces al pasar el mouse
- Pseudoclase `:first-child`: estiliza el primer elemento de una lista
- Pseudoelemento `::before`: agrega un símbolo antes de cada h2

**Objetivo**: Dominar selectores avanzados y pseudoclases.

---

## Bloque 2: Layout y Posicionamiento (CSS-05 a CSS-08)

### CSS-05: Flexbox Básico

Crea un layout usando Flexbox:
- Un contenedor flex con 3 elementos hijos
- Los elementos deben estar centrados verticalmente
- Distribuye el espacio entre los elementos usando `justify-content`
- Prueba diferentes valores: `space-between`, `space-around`, `space-evenly`
- Haz que los elementos tengan el mismo ancho usando `flex: 1`

**Objetivo**: Aprender los fundamentos de Flexbox.

---

### CSS-06: Flexbox Avanzado

Crea un menú de navegación usando Flexbox:
- Los elementos deben estar en una fila horizontal
- El logo debe estar al inicio
- Los enlaces de navegación deben estar al final
- El menú debe ser responsive: en pantallas pequeñas, los elementos deben apilarse verticalmente
- Usa `flex-wrap` para permitir que los elementos se ajusten

**Objetivo**: Aplicar Flexbox a casos reales como navegación.

---

### CSS-07: CSS Grid Básico

Crea un layout de cuadrícula usando CSS Grid:
- Un contenedor grid con 3 columnas de igual tamaño usando `fr`
- 3 filas: una de altura automática, otra de 200px, otra de altura automática
- Coloca 6 elementos en la cuadrícula
- Agrega `gap` de 20px entre las celdas

**Objetivo**: Aprender los fundamentos de CSS Grid.

---

### CSS-08: CSS Grid Avanzado

Crea un layout de página completo usando Grid:
- Define áreas nombradas: header, nav, main, aside, footer
- Header y footer deben ocupar todo el ancho
- Nav y aside deben estar en los lados
- Main debe ocupar el espacio central
- Usa `grid-template-areas` para definir el layout
- Haz que el layout tenga altura de viewport (`100vh`)

**Objetivo**: Crear layouts complejos con CSS Grid.

---

## Bloque 3: Diseño Visual (CSS-09 a CSS-11)

### CSS-09: Fondos y Bordes

Crea estilos que demuestren:
- Diferentes tipos de fondos:
  - Color de fondo sólido
  - Imagen de fondo con `background-image`
  - Control de posición de imagen de fondo
  - `background-size` (cover, contain)
- Diferentes tipos de bordes:
  - Borde sólido, punteado, doble
  - Bordes redondeados con `border-radius`
  - Borde solo en algunos lados
- Sombra de caja con `box-shadow`

**Objetivo**: Dominar fondos, bordes y sombras.

---

### CSS-10: Transiciones y Animaciones

Crea efectos visuales usando:
- Transiciones (`transition`) en:
  - Cambio de color al hacer hover
  - Cambio de tamaño suave
  - Cambio de opacidad
- Animaciones (`@keyframes`) para:
  - Un elemento que se mueve de izquierda a derecha
  - Un elemento que rota continuamente
  - Un elemento que pulsa (cambia de tamaño)

**Objetivo**: Aprender a crear transiciones y animaciones suaves.

---

### CSS-11: Pseudoelementos y Contenido Generado

Crea estilos usando pseudoelementos:
- `::before` y `::after` para agregar contenido decorativo
- Usa `content` para agregar texto o símbolos
- Crea un efecto de cita con `::before` que muestre comillas
- Usa `::first-letter` para estilizar la primera letra de un párrafo
- Usa `::first-line` para estilizar la primera línea

**Objetivo**: Dominar pseudoelementos para diseño avanzado.

---

## Bloque 4: Diseño Responsivo (CSS-12 a CSS-15)

### CSS-12: Unidades Responsivas

Crea un diseño usando unidades responsivas:
- Usa `rem` para tamaños de fuente (más escalable que px)
- Usa `%` para anchos de contenedores
- Usa `vw` y `vh` para elementos que deben ocupar parte del viewport
- Crea un contenedor con `max-width` para limitar el ancho en pantallas grandes
- Usa `min-width` y `max-width` para hacer elementos responsivos

**Objetivo**: Entender y usar unidades CSS responsivas.

---

### CSS-13: Media Queries Básicas

Crea un diseño responsive usando media queries:
- Estilos base para móvil (mobile-first)
- Media query para tabletas (min-width: 768px) que cambie:
  - El tamaño de fuente
  - El layout de navegación
  - El espaciado
- Media query para desktop (min-width: 1024px) que:
  - Aumente el ancho máximo del contenedor
  - Cambie a un layout de múltiples columnas

**Objetivo**: Aprender a usar media queries para diseño responsivo.

---

### CSS-14: Diseño Mobile-First

Crea un layout completo siguiendo el enfoque mobile-first:
- Diseña primero para móvil (una columna)
- Usa media queries para agregar estilos en pantallas más grandes:
  - Tablet: 2 columnas
  - Desktop: 3 columnas
- Haz que las imágenes sean responsivas (`max-width: 100%`)
- Oculta ciertos elementos en móvil y muéstralos en desktop (o viceversa)

**Objetivo**: Aplicar la estrategia mobile-first.

---

### CSS-15: Proyecto Final - Tarjeta Responsive

Crea una tarjeta de perfil completamente responsive:
- En móvil: la tarjeta ocupa todo el ancho, imagen arriba, texto abajo
- En tablet: la tarjeta tiene 2 columnas (imagen a la izquierda, texto a la derecha)
- En desktop: múltiples tarjetas en un grid de 3 columnas
- Incluye:
  - Imagen de perfil redondeada
  - Información del usuario
  - Botones de acción
  - Efectos hover
  - Transiciones suaves
- Usa Flexbox o Grid según sea apropiado

**Objetivo**: Integrar todos los conceptos CSS en un proyecto completo y responsive.

---

## Consejos para Resolver los Ejercicios

1. **Usa el inspector del navegador**: Presiona F12 para ver cómo se aplican los estilos
2. **Prueba en diferentes navegadores**: Chrome, Firefox, Safari
3. **Valida tu CSS**: Usa herramientas como [CSS Validator](https://jigsaw.w3.org/css-validator/)
4. **Organiza tu CSS**: Agrupa estilos relacionados (reset, layout, componentes)
5. **Comenta tu código**: Agrega comentarios para explicar secciones complejas
6. **Experimenta**: Prueba diferentes valores para ver cómo afectan el diseño
7. **Mobile-first**: Siempre diseña primero para móvil y luego expande

---

**Ejercicios anteriores**: [Ejercicios HTML](01-ejercicios-html.md)

**Siguientes ejercicios**: [Ejercicios HTML + CSS](03-ejercicios-html-css.md)

**Ver soluciones**: [Soluciones](soluciones.md)

