# Ejercicios HTML + CSS

Estos ejercicios integran HTML y CSS para crear componentes y páginas completas. Practica combinando estructura semántica con estilos modernos.

**ID de Ejercicios:** HTMLCSS-01 a HTMLCSS-15

---

## Bloque 1: Componentes Básicos (HTMLCSS-01 a HTMLCSS-05)

### HTMLCSS-01: Tarjeta de Perfil Simple

Crea una tarjeta de perfil con:
- **HTML**: Estructura semántica con imagen, nombre, título y descripción
- **CSS**: 
  - Borde redondeado
  - Sombra de caja
  - Espaciado interno (padding)
  - Centrado del contenido
  - Imagen de perfil circular

**Objetivo**: Combinar HTML semántico con estilos básicos de CSS.

---

### HTMLCSS-02: Botones Estilizados

Crea diferentes tipos de botones:
- **HTML**: Usa `<button>` o `<a>` con clases diferentes
- **CSS**: Crea estilos para:
  - Botón primario (azul, destacado)
  - Botón secundario (gris, menos destacado)
  - Botón de éxito (verde)
  - Botón de peligro (rojo)
  - Efecto hover en todos los botones
  - Transiciones suaves

**Objetivo**: Crear componentes reutilizables con CSS.

---

### HTMLCSS-03: Formulario Estilizado

Crea un formulario de contacto completamente estilizado:
- **HTML**: Formulario con campos (nombre, email, mensaje) y labels
- **CSS**:
  - Estilos para inputs y textarea
  - Estados focus con borde de color
  - Estilos para el botón de envío
  - Layout organizado y espaciado
  - Diseño responsive básico

**Objetivo**: Estilizar formularios para mejor UX.

---

### HTMLCSS-04: Navegación Horizontal

Crea un menú de navegación:
- **HTML**: Lista de enlaces dentro de `<nav>`
- **CSS**:
  - Usa Flexbox para layout horizontal
  - Elimina los estilos de lista por defecto
  - Estilos para enlaces (sin subrayado, padding)
  - Efecto hover
  - Diseño responsive: se convierte en menú vertical en móvil

**Objetivo**: Crear navegación moderna y responsive.

---

### HTMLCSS-05: Galería de Imágenes

Crea una galería de imágenes:
- **HTML**: Contenedor con múltiples imágenes usando `<figure>` y `<figcaption>`
- **CSS**:
  - Grid o Flexbox para layout
  - Imágenes responsivas (max-width: 100%)
  - Espaciado entre imágenes
  - Efecto hover (zoom o cambio de opacidad)
  - Diseño responsive: 1 columna en móvil, 2 en tablet, 3 en desktop

**Objetivo**: Crear layouts con imágenes usando Grid/Flexbox.

---

## Bloque 2: Layouts y Componentes (HTMLCSS-06 a HTMLCSS-10)

### HTMLCSS-06: Layout con Flexbox

Crea una página con layout usando Flexbox:
- **HTML**: Estructura semántica (header, nav, main, aside, footer)
- **CSS**:
  - Header y footer con altura fija
  - Main y aside lado a lado usando Flexbox
  - Main ocupa más espacio que aside
  - Diseño responsive: aside se mueve abajo en móvil

**Objetivo**: Crear layouts de página con Flexbox.

---

### HTMLCSS-07: Layout con CSS Grid

Crea el mismo layout pero usando CSS Grid:
- **HTML**: Misma estructura semántica
- **CSS**:
  - Define áreas con `grid-template-areas`
  - Header y footer ocupan todo el ancho
  - Main y aside en columnas
  - Altura de viewport completa
  - Responsive: cambia el grid en móvil

**Objetivo**: Comparar Flexbox vs Grid para layouts.

---

### HTMLCSS-08: Tarjetas de Producto

Crea tarjetas de producto para un catálogo:
- **HTML**: 
  - Estructura con imagen, título, descripción, precio
  - Usa `<article>` para cada producto
- **CSS**:
  - Grid para mostrar múltiples tarjetas
  - Estilos consistentes para todas las tarjetas
  - Botón "Agregar al carrito" estilizado
  - Efecto hover que eleva la tarjeta (box-shadow)
  - Responsive: 1 columna móvil, 2 tablet, 3 desktop

**Objetivo**: Crear componentes de producto reutilizables.

---

### HTMLCSS-09: Acordeón (Solo CSS)

Crea un acordeón usando solo HTML y CSS (sin JavaScript):
- **HTML**: Usa `<details>` y `<summary>` para cada sección
- **CSS**:
  - Estiliza los elementos details y summary
  - Agrega iconos usando pseudoelementos
  - Transiciones suaves al abrir/cerrar
  - Estilos para el contenido expandido

**Objetivo**: Usar elementos HTML semánticos con CSS avanzado.

---

### HTMLCSS-10: Tabla Estilizada

Crea una tabla de datos estilizada:
- **HTML**: Tabla con thead, tbody, tfoot
- **CSS**:
  - Estilos para encabezados (fondo de color, texto en negrita)
  - Filas alternadas de color (zebra striping)
  - Efecto hover en filas
  - Bordes y espaciado apropiados
  - Diseño responsive: en móvil, convierte la tabla en tarjetas

**Objetivo**: Hacer tablas visualmente atractivas y accesibles.

---

## Bloque 3: Componentes Avanzados (HTMLCSS-11 a HTMLCSS-15)

### HTMLCSS-11: Hero Section

Crea una sección hero (banner principal):
- **HTML**: Sección con título, subtítulo, descripción y botón CTA
- **CSS**:
  - Imagen de fondo con overlay
  - Contenido centrado vertical y horizontalmente
  - Tipografía grande y destacada
  - Botón CTA destacado
  - Altura de viewport completa o parcial

**Objetivo**: Crear secciones de impacto visual.

---

### HTMLCSS-12: Footer Completo

Crea un footer completo para un sitio web:
- **HTML**: 
  - Múltiples columnas con enlaces
  - Información de contacto
  - Redes sociales
  - Copyright
- **CSS**:
  - Layout con Grid o Flexbox
  - Estilos para enlaces
  - Iconos de redes sociales (puedes usar texto o imágenes)
  - Fondo oscuro con texto claro
  - Responsive: columnas se apilan en móvil

**Objetivo**: Diseñar footers profesionales.

---

### HTMLCSS-13: Página de Blog

Crea una página de blog completa:
- **HTML**:
  - Header con navegación
  - Main con artículos
  - Sidebar con información adicional
  - Footer
- **CSS**:
  - Layout de 2 columnas (main + sidebar)
  - Estilos para artículos (títulos, fechas, contenido)
  - Sidebar con widgets
  - Responsive: sidebar se mueve abajo en móvil

**Objetivo**: Crear layouts de blog completos.

---

### HTMLCSS-14: Landing Page Simple

Crea una landing page completa:
- **HTML**: Estructura semántica completa
- Secciones: Hero, Características, Testimonios, CTA, Footer
- **CSS**:
  - Diseño atractivo y moderno
  - Uso de Grid y Flexbox donde sea apropiado
  - Colores y tipografía consistentes
  - Espaciado adecuado
  - Completamente responsive

**Objetivo**: Integrar múltiples componentes en una página completa.

---

### HTMLCSS-15: Proyecto Final - Portafolio Personal

Crea un portafolio personal completo:
- **HTML**: Estructura semántica completa
- Secciones: Header/Nav, Hero, Sobre Mí, Proyectos, Habilidades, Contacto, Footer
- **CSS**:
  - Diseño profesional y moderno
  - Paleta de colores consistente
  - Tipografía bien elegida
  - Animaciones sutiles
  - Efectos hover
  - Completamente responsive
  - Uso de Grid y Flexbox
  - Transiciones suaves

**Objetivo**: Proyecto completo que demuestre dominio de HTML y CSS.

---

## Consejos para Resolver los Ejercicios

1. **Planifica primero**: Dibuja un boceto antes de codificar
2. **HTML primero**: Crea la estructura HTML antes de agregar CSS
3. **Mobile-first**: Diseña primero para móvil, luego expande
4. **Reutiliza estilos**: Crea clases reutilizables para componentes similares
5. **Usa variables CSS**: Para colores y valores que se repiten
6. **Prueba en diferentes dispositivos**: Usa las herramientas de desarrollador del navegador
7. **Mantén consistencia**: Usa la misma paleta de colores y tipografía en todo el proyecto
8. **Valida tu código**: Asegúrate de que HTML y CSS sean válidos

---

**Ejercicios anteriores**: 
- [Ejercicios HTML](01-ejercicios-html.md)
- [Ejercicios CSS](02-ejercicios-css.md)

**Siguientes ejercicios**: [Ejercicios JavaScript](04-ejercicios-javascript.md)

**Ver soluciones**: [Soluciones](soluciones.md)



