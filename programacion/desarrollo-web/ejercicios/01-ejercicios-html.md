# Ejercicios de HTML

Estos ejercicios están diseñados para practicar HTML de forma progresiva, desde lo más básico hasta conceptos más avanzados. Intenta resolverlos y luego comprueba tus respuestas en el archivo de soluciones.

**ID de Ejercicios:** HTML-01 a HTML-15

---

## Bloque 1: Estructura Básica (HTML-01 a HTML-03)

### HTML-01: Mi Primera Página Web

Crea un archivo HTML básico con la siguiente estructura:
- DOCTYPE HTML5
- Elemento `<html>` con atributo `lang="es"`
- Sección `<head>` con:
  - Meta charset UTF-8
  - Meta viewport para dispositivos móviles
  - Título: "Mi Primera Página"
- Sección `<body>` con:
  - Un encabezado `<h1>` que diga "¡Bienvenido a mi página web!"
  - Un párrafo `<p>` con una breve presentación tuya

**Objetivo**: Familiarizarte con la estructura básica de un documento HTML.

---

### HTML-02: Encabezados y Párrafos

Crea una página HTML que contenga:
- Un título principal `<h1>`: "Aprendiendo HTML"
- Un subtítulo `<h2>`: "Etiquetas Básicas"
- Tres párrafos `<p>` explicando qué es HTML, CSS y JavaScript (uno para cada uno)
- Un subtítulo `<h2>`: "Próximos Pasos"
- Un párrafo con tus objetivos de aprendizaje

**Objetivo**: Practicar la jerarquía de encabezados y la estructura de párrafos.

---

### HTML-03: Enlaces e Imágenes

Crea una página HTML que incluya:
- Un encabezado `<h1>`: "Mis Recursos Favoritos"
- Una lista de al menos 3 enlaces externos a sitios web que te gusten (usando `<a href="">`)
- Cada enlace debe abrirse en una nueva pestaña (`target="_blank"`)
- Agrega un atributo `rel="noopener noreferrer"` a cada enlace por seguridad
- Incluye al menos 2 imágenes usando `<img>` con:
  - Atributo `src` (puedes usar URLs de imágenes de internet o rutas locales)
  - Atributo `alt` descriptivo para cada imagen
  - Atributo `width` para controlar el tamaño

**Objetivo**: Aprender a crear enlaces y agregar imágenes con buenas prácticas.

---

## Bloque 2: Listas y Texto (HTML-04 a HTML-06)

### HTML-04: Listas Desordenadas

Crea una página HTML con:
- Un título `<h1>`: "Lista de Compras"
- Una lista desordenada `<ul>` con al menos 5 items de compra
- Cada item debe usar `<li>`
- Agrega un segundo título `<h2>`: "Pasos para Preparar la Cena"
- Una lista ordenada `<ol>` con al menos 4 pasos

**Objetivo**: Dominar las listas ordenadas y desordenadas.

---

### HTML-05: Formato de Texto

Crea una página HTML que demuestre diferentes formatos de texto:
- Un párrafo con texto en **negrita** usando `<strong>`
- Un párrafo con texto en *cursiva* usando `<em>`
- Un párrafo que combine ambos formatos
- Un texto con `<mark>` para resaltar
- Un texto con `<small>` para información secundaria
- Una cita corta usando `<q>`
- Una cita larga usando `<blockquote>` con un `<cite>`

**Objetivo**: Aprender a dar formato semántico al texto.

---

### HTML-06: Lista de Descripción

Crea una página HTML con un glosario de términos web usando `<dl>`:
- Define al menos 5 términos relacionados con desarrollo web
- Usa `<dt>` para cada término
- Usa `<dd>` para cada descripción
- Ejemplos de términos: HTML, CSS, JavaScript, DOM, API

**Objetivo**: Aprender a usar listas de descripción para glosarios.

---

## Bloque 3: Tablas (HTML-07 a HTML-08)

### HTML-07: Tabla Básica

Crea una página HTML con una tabla que muestre información de productos:
- Usa `<table>`, `<thead>`, `<tbody>`
- Encabezados: "Producto", "Precio", "Stock"
- Al menos 4 filas de datos
- Usa `<th>` para encabezados y `<td>` para datos
- Agrega un `<caption>` a la tabla

**Objetivo**: Crear tablas estructuradas correctamente.

---

### HTML-08: Tabla Avanzada

Crea una tabla más compleja que incluya:
- Una celda que ocupe múltiples columnas usando `colspan`
- Una celda que ocupe múltiples filas usando `rowspan`
- Un `<tfoot>` con información de resumen (por ejemplo, totales)
- Al menos 5 filas de datos

**Ejemplo**: Tabla de horario de clases o tabla de ventas con totales.

**Objetivo**: Dominar atributos avanzados de tablas.

---

## Bloque 4: Formularios (HTML-09 a HTML-11)

### HTML-09: Formulario Básico

Crea un formulario de contacto con:
- Etiqueta `<form>` con `action="#"` y `method="POST"`
- Campo de texto para nombre (con `<label>` y `required`)
- Campo de email (con `<label>` y `required`)
- Campo de teléfono (con `<label>`)
- Área de texto para mensaje (con `<label>` y `required`)
- Botón de envío usando `<button type="submit">`
- Agrupa los campos relacionados con `<fieldset>` y `<legend>`

**Objetivo**: Crear formularios básicos con buena estructura.

---

### HTML-10: Formulario con Diferentes Inputs

Crea un formulario de registro que incluya:
- Campo de texto para usuario
- Campo de contraseña
- Campo de número para edad (con `min` y `max`)
- Campo de fecha para fecha de nacimiento
- Radio buttons para género (al menos 3 opciones)
- Checkboxes para intereses (al menos 4 opciones)
- Select dropdown para país
- Checkbox para aceptar términos (con `required`)
- Botones de envío y reset

**Objetivo**: Dominar diferentes tipos de inputs en formularios.

---

### HTML-11: Formulario de Búsqueda

Crea un formulario de búsqueda con:
- Campo de búsqueda (`type="search"`)
- Botón de búsqueda
- Usa `method="GET"` (apropiado para búsquedas)
- Agrega un `placeholder` descriptivo
- Incluye un `<label>` accesible

**Objetivo**: Crear formularios específicos para búsquedas.

---

## Bloque 5: HTML Semántico (HTML-12 a HTML-15)

### HTML-12: Estructura Semántica Básica

Crea una página HTML usando elementos semánticos:
- `<header>` con un título y navegación
- `<nav>` con una lista de enlaces
- `<main>` con el contenido principal
- `<article>` con un artículo
- `<section>` dentro del artículo
- `<aside>` con contenido relacionado
- `<footer>` con información de pie de página

**Objetivo**: Aplicar HTML5 semántico a una página completa.

---

### HTML-13: Artículo de Blog

Crea la estructura HTML de un artículo de blog usando semántica:
- `<header>` del artículo con título y metadatos (autor, fecha usando `<time>`)
- `<main>` con el contenido del artículo
- Múltiples `<section>` para diferentes partes del artículo
- `<figure>` con una imagen y `<figcaption>`
- `<aside>` con información relacionada
- `<footer>` del artículo con categorías y enlaces relacionados

**Objetivo**: Estructurar contenido de blog con HTML semántico.

---

### HTML-14: Página Completa con Semántica

Crea una página web completa (por ejemplo, "Sobre Nosotros") usando:
- `<header>` con logo y navegación principal
- `<nav>` con menú de navegación
- `<main>` con varias secciones:
  - `<section>` para "Nuestra Historia"
  - `<section>` para "Nuestro Equipo"
  - `<section>` para "Nuestra Misión"
- `<aside>` con información adicional
- `<footer>` con información de contacto usando `<address>`
- Usa `<article>` si es apropiado

**Objetivo**: Crear una página completa usando solo elementos semánticos.

---

### HTML-15: Proyecto Final - Página Personal

Crea una página web personal completa que incluya:
- Estructura semántica completa (header, nav, main, footer)
- Sección "Sobre Mí" con tu información
- Sección "Habilidades" con una lista
- Sección "Proyectos" con al menos 3 proyectos (puedes usar artículos)
- Sección "Contacto" con un formulario
- Enlaces a redes sociales
- Imágenes relevantes con `<figure>` y `<figcaption>`
- Uso apropiado de encabezados (h1, h2, h3)
- Listas donde sea apropiado
- Enlaces internos usando anclas (`#seccion`)

**Objetivo**: Integrar todos los conceptos aprendidos en un proyecto completo.

---

## Consejos para Resolver los Ejercicios

1. **Empieza simple**: Comienza con la estructura básica y luego agrega elementos
2. **Valida tu HTML**: Usa el [Validador W3C](https://validator.w3.org/) para verificar tu código
3. **Usa indentación**: Mantén tu código organizado y legible
4. **Comenta cuando sea necesario**: Agrega comentarios HTML (`<!-- comentario -->`) para explicar secciones complejas
5. **Prueba en el navegador**: Abre tus archivos HTML en diferentes navegadores para verificar que funcionan
6. **Sigue las buenas prácticas**: Usa elementos semánticos, incluye atributos `alt` en imágenes, usa `<label>` en formularios

---

**Siguientes ejercicios**: [Ejercicios CSS](02-ejercicios-css.md)

**Ver soluciones**: [Soluciones](soluciones.md)



