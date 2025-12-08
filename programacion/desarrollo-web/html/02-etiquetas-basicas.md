# Etiquetas Básicas de HTML

En HTML, las etiquetas son los componentes principales que estructuran el contenido de una página web. La mayoría de las etiquetas tienen una etiqueta de apertura (`<tag>`) y una etiqueta de cierre (`</tag>`), y el contenido se coloca entre ellas. Algunas etiquetas son "auto-cerradas" o "vacías" y no requieren una etiqueta de cierre.

## Tipos de Etiquetas

### Etiquetas con Apertura y Cierre

La mayoría de las etiquetas HTML tienen una etiqueta de apertura y una de cierre:

```html
<p>Este es el contenido</p>
<!--   ↑ apertura    ↑ cierre -->
```

### Etiquetas Auto-cerradas (Vacías)

Algunas etiquetas no tienen contenido y se cierran a sí mismas:

```html
<img src="imagen.jpg" alt="Descripción">
<br>
<hr>
<input type="text" name="usuario">
```

**Nota**: En HTML5, puedes escribir estas etiquetas sin la barra diagonal final (`<br>` o `<br/>`), ambas formas son válidas.

## Etiquetas de Encabezado (Headings)

Se utilizan para definir títulos y subtítulos. Hay seis niveles de encabezado, desde `<h1>` (el más importante) hasta `<h6>` (el menos importante).

```html
<h1>Encabezado Nivel 1</h1>
<h2>Encabezado Nivel 2</h2>
<h3>Encabezado Nivel 3</h3>
<h4>Encabezado Nivel 4</h4>
<h5>Encabezado Nivel 5</h5>
<h6>Encabezado Nivel 6</h6>
```

### ¿Cuándo usar cada nivel?

- **`<h1>`**: Título principal de la página (solo uno por página). Ejemplo: "Bienvenido a Mi Sitio Web"
- **`<h2>`**: Secciones principales. Ejemplo: "Sobre Nosotros", "Nuestros Servicios"
- **`<h3>`**: Subsecciones. Ejemplo: "Servicio 1", "Servicio 2"
- **`<h4>` a `<h6>`**: Subdivisiones más específicas (raramente necesarios)

### Buenas prácticas

✅ **Estructura jerárquica correcta**: No saltes niveles (no uses `<h1>` seguido de `<h3>` sin `<h2>`)
✅ **Un solo `<h1>` por página**: Para SEO y accesibilidad
✅ **Usa encabezados para estructura, no para tamaño**: Si solo quieres texto grande, usa CSS

```html
<!-- ✅ Correcto: estructura jerárquica -->
<h1>Título Principal</h1>
  <h2>Sección 1</h2>
    <h3>Subsección 1.1</h3>
    <h3>Subsección 1.2</h3>
  <h2>Sección 2</h2>

<!-- ❌ Incorrecto: saltar niveles -->
<h1>Título Principal</h1>
  <h3>Subsección</h3> <!-- Falta h2 -->
```

### Importancia para SEO

Los motores de búsqueda dan más peso al contenido en `<h1>` y `<h2>`. Usa palabras clave relevantes en tus encabezados, pero siempre de forma natural.

## Párrafos

La etiqueta `<p>` se utiliza para definir un párrafo de texto. Los navegadores agregan automáticamente espacio antes y después de cada párrafo.

```html
<p>Este es un párrafo de ejemplo.</p>
<p>Aquí hay otro párrafo con más texto.</p>
```

### Características

- Los párrafos son elementos de **bloque**: ocupan todo el ancho disponible y crean una nueva línea
- El espacio entre párrafos se puede controlar con CSS
- No uses `<p>` para crear espacios (usa CSS para eso)

### Ejemplo práctico

```html
<article>
  <h2>Receta de Torta de Chocolate</h2>
  <p>Esta receta es perfecta para ocasiones especiales. Es fácil de hacer y siempre queda deliciosa.</p>
  <p>Necesitarás ingredientes frescos y de buena calidad para obtener los mejores resultados.</p>
</article>
```

## Enlaces (Links)

La etiqueta `<a>` (anchor) se utiliza para crear enlaces a otras páginas web, a otras secciones dentro de la misma página, o a archivos descargables. El atributo `href` es esencial, ya que especifica la URL de destino.

### Tipos de Enlaces

#### 1. Enlaces Externos

Enlazan a otras páginas web:

```html
<a href="https://www.google.com">Ir a Google</a>
<a href="https://www.github.com" target="_blank">Abrir GitHub en nueva pestaña</a>
```

**Atributo `target="_blank"`**: Abre el enlace en una nueva pestaña del navegador.

#### 2. Enlaces Internos

Enlazan a otras páginas de tu sitio:

```html
<a href="sobre-nosotros.html">Sobre Nosotros</a>
<a href="contacto.html">Contacto</a>
```

#### 3. Enlaces a Secciones (Anclas)

Enlazan a secciones dentro de la misma página:

```html
<!-- Primero, define el ancla con un id -->
<section id="seccion-contacto">
  <h2>Contacto</h2>
  <!-- contenido -->
</section>

<!-- Luego, crea el enlace -->
<a href="#seccion-contacto">Ir a Contacto</a>
```

#### 4. Enlaces a Email y Teléfono

```html
<a href="mailto:contacto@ejemplo.com">Enviar email</a>
<a href="tel:+34123456789">Llamar ahora</a>
```

#### 5. Enlaces de Descarga

```html
<a href="documento.pdf" download>Descargar PDF</a>
```

### Atributos Importantes

- **`href`**: La URL de destino (obligatorio)
- **`target`**: Dónde abrir el enlace (`_blank` = nueva pestaña, `_self` = misma pestaña)
- **`title`**: Texto que aparece al pasar el mouse (tooltip)
- **`rel`**: Relación del enlace (útil para SEO y seguridad)

```html
<a href="https://ejemplo.com" 
   target="_blank" 
   rel="noopener noreferrer"
   title="Visita nuestro sitio web">
  Visitar Sitio
</a>
```

**Nota sobre `rel="noopener noreferrer"`**: Siempre úsalo con `target="_blank"` por seguridad.

### Casos de Uso Reales

```html
<!-- Navegación -->
<nav>
  <a href="/">Inicio</a>
  <a href="/productos">Productos</a>
  <a href="/contacto">Contacto</a>
</nav>

<!-- Enlaces en contenido -->
<p>Visita nuestro <a href="https://blog.ejemplo.com">blog</a> para más información.</p>

<!-- Botones como enlaces -->
<a href="/registro" class="boton">Registrarse</a>
```

## Imágenes

La etiqueta `<img>` se utiliza para incrustar imágenes en una página web. Es una etiqueta auto-cerrada.

### Sintaxis Básica

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

### Atributos Esenciales

#### `src` (source - fuente)

Especifica la ruta a la imagen. Puede ser:
- **Ruta relativa**: `src="imagenes/foto.jpg"` (desde la carpeta actual)
- **Ruta absoluta**: `src="/imagenes/foto.jpg"` (desde la raíz del sitio)
- **URL completa**: `src="https://ejemplo.com/imagen.jpg"` (imagen externa)

```html
<!-- Imagen en la misma carpeta -->
<img src="logo.png" alt="Logo">

<!-- Imagen en subcarpeta -->
<img src="imagenes/foto.jpg" alt="Foto">

<!-- Imagen externa -->
<img src="https://via.placeholder.com/300" alt="Placeholder">
```

#### `alt` (texto alternativo)

**Es obligatorio** y describe la imagen. Es importante para:
- **Accesibilidad**: Los lectores de pantalla leen este texto
- **SEO**: Los motores de búsqueda lo usan para entender la imagen
- **Fallback**: Si la imagen no carga, se muestra este texto

```html
<!-- ✅ Bueno: descriptivo -->
<img src="gato.jpg" alt="Gato siamés durmiendo en una cesta">

<!-- ❌ Malo: genérico o vacío -->
<img src="gato.jpg" alt="imagen">
<img src="gato.jpg" alt="">
```

### Otros Atributos Útiles

```html
<img src="foto.jpg" 
     alt="Descripción"
     width="300"           <!-- Ancho en píxeles -->
     height="200"          <!-- Alto en píxeles -->
     title="Título al pasar el mouse"
     loading="lazy">        <!-- Carga diferida (mejora rendimiento) -->
```

**Nota**: Aunque puedes usar `width` y `height` en HTML, es mejor práctica controlar el tamaño con CSS.

### Formatos de Imagen Comunes

- **JPEG/JPG**: Fotos con muchos colores (fotografías)
- **PNG**: Imágenes con transparencia o pocos colores (logos, iconos)
- **GIF**: Imágenes animadas simples
- **WebP**: Formato moderno, mejor compresión (soporte limitado en navegadores antiguos)
- **SVG**: Gráficos vectoriales (escalables sin pérdida de calidad)

### Ejemplos Prácticos

```html
<!-- Logo del sitio -->
<header>
  <img src="logo.png" alt="Logo de Mi Empresa" width="150">
</header>

<!-- Foto en artículo -->
<article>
  <h2>Mi Viaje a París</h2>
  <img src="paris.jpg" alt="Torre Eiffel al atardecer" width="800">
  <p>Esta es una foto que tomé durante mi viaje.</p>
</article>

<!-- Galería de imágenes -->
<div class="galeria">
  <img src="foto1.jpg" alt="Paisaje montañoso">
  <img src="foto2.jpg" alt="Playa al amanecer">
  <img src="foto3.jpg" alt="Ciudad de noche">
</div>
```

## Saltos de Línea y Reglas Horizontales

### `<br>` - Salto de Línea

Introduce un salto de línea simple dentro de un bloque de texto. Es una etiqueta auto-cerrada.

```html
<p>Esta es la primera línea.<br>Esta es la segunda línea.</p>
```

**Cuándo usar `<br>`**:
- Direcciones
- Poesía o versos
- Información de contacto en una línea

**Cuándo NO usar `<br>`**:
- Para crear espacio entre párrafos (usa `<p>` separados)
- Para crear diseño (usa CSS)

```html
<!-- ✅ Correcto: dirección -->
<p>
  Calle Principal 123<br>
  Ciudad, País 12345
</p>

<!-- ❌ Incorrecto: usar br para espaciado -->
<p>Párrafo 1</p>
<br><br><br>  <!-- No hagas esto -->
<p>Párrafo 2</p>
```

### `<hr>` - Regla Horizontal

Representa una ruptura temática entre párrafos de nivel de sección. Crea una línea horizontal.

```html
<section>
  <h2>Primera Sección</h2>
  <p>Contenido de la primera sección.</p>
</section>

<hr>

<section>
  <h2>Segunda Sección</h2>
  <p>Contenido de la segunda sección.</p>
</section>
```

**Cuándo usar `<hr>`**:
- Separar secciones temáticamente diferentes
- Dividir contenido largo en partes visuales

**Nota**: El estilo visual de `<hr>` se puede personalizar completamente con CSS.

## Texto en Negrita y Cursiva

### `<strong>` - Énfasis Fuerte

Se utiliza para dar énfasis fuerte al texto (generalmente se renderiza en negrita). Indica que el texto es **importante**.

```html
<p>Este texto es <strong>muy importante</strong>.</p>
<p><strong>Advertencia:</strong> No tocar.</p>
```

**Diferencia con `<b>`**: 
- `<strong>` tiene significado semántico (importante para accesibilidad y SEO)
- `<b>` solo es visual (no tiene significado semántico)
- **Recomendación**: Usa `<strong>` en lugar de `<b>`

### `<em>` - Énfasis

Se utiliza para dar énfasis al texto (generalmente se renderiza en cursiva). Indica que el texto debe leerse con *énfasis*.

```html
<p>Esta palabra está en <em>cursiva</em>.</p>
<p>Realmente <em>necesito</em> que vengas.</p>
```

**Diferencia con `<i>`**:
- `<em>` tiene significado semántico (énfasis en la pronunciación)
- `<i>` solo es visual (no tiene significado semántico)
- **Recomendación**: Usa `<em>` en lugar de `<i>`

### Combinando Etiquetas

Puedes anidar estas etiquetas:

```html
<p>Este texto es <strong><em>muy importante y con énfasis</em></strong>.</p>
```

### Otras Etiquetas de Texto

```html
<!-- Texto tachado -->
<p>Precio: <del>100€</del> 80€</p>

<!-- Texto marcado/resaltado -->
<p>Este es un <mark>texto resaltado</mark>.</p>

<!-- Texto pequeño (notas legales, copyright) -->
<p><small>© 2024 Mi Empresa. Todos los derechos reservados.</small></p>

<!-- Texto subíndice y superíndice -->
<p>H<sub>2</sub>O (agua)</p>
<p>E = mc<sup>2</sup> (fórmula de Einstein)</p>

<!-- Cita corta -->
<p>Como dijo <q>El conocimiento es poder</q>.</p>

<!-- Cita larga -->
<blockquote>
  <p>Esta es una cita larga de un autor famoso.</p>
  <cite>— Nombre del Autor</cite>
</blockquote>
```

## Etiquetas de Contenedor

### `<div>` - Contenedor Genérico

Es un contenedor genérico sin significado semántico. Se usa principalmente para agrupar elementos y aplicar estilos con CSS.

```html
<div class="contenedor">
  <h2>Título</h2>
  <p>Contenido</p>
</div>
```

### `<span>` - Contenedor en Línea

Similar a `<div>`, pero es un elemento **en línea** (no crea una nueva línea).

```html
<p>Este texto tiene una <span class="destacado">palabra destacada</span>.</p>
```

**Diferencia clave**:
- `<div>`: Elemento de bloque (ocupa todo el ancho, nueva línea)
- `<span>`: Elemento en línea (solo ocupa el espacio necesario)

## Ejemplo Completo

Aquí tienes un ejemplo que combina varias etiquetas básicas:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Blog Personal</title>
</head>
<body>
    <header>
        <h1>Mi Blog Personal</h1>
        <nav>
            <a href="/">Inicio</a> |
            <a href="/sobre-mi">Sobre Mí</a> |
            <a href="/contacto">Contacto</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Mi Primer Día Aprendiendo HTML</h2>
            <img src="aprendiendo.jpg" alt="Persona aprendiendo programación" width="600">
            
            <p>Hoy comencé mi viaje en el desarrollo web. HTML es <strong>muy importante</strong> porque es la base de todas las páginas web.</p>
            
            <p>Algunos recursos que me ayudaron:</p>
            <ul>
                <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
                <li><a href="https://www.w3schools.com">W3Schools</a></li>
            </ul>

            <hr>

            <p><em>Publicado el 15 de enero de 2024</em></p>
        </article>
    </main>

    <footer>
        <p><small>© 2024 Mi Blog. Todos los derechos reservados.</small></p>
    </footer>
</body>
</html>
```

## Buenas Prácticas

✅ **Usa etiquetas semánticas** cuando sea posible (`<strong>` en lugar de `<b>`)
✅ **Siempre incluye `alt`** en imágenes
✅ **Mantén la jerarquía** de encabezados (h1 → h2 → h3)
✅ **Usa `<p>` para párrafos**, no `<br>` para espaciado
✅ **Estructura tu contenido** de forma lógica
✅ **Valida tu HTML** usando herramientas como [W3C Validator](https://validator.w3.org/)

## Errores Comunes

❌ Usar `<h1>` solo para hacer texto grande (usa CSS)
❌ Olvidar el atributo `alt` en imágenes
❌ Usar muchos `<br>` para crear diseño (usa CSS)
❌ Anidar etiquetas incorrectamente: `<p><div>Texto</div></p>` (div no puede ir dentro de p)
❌ Usar `<b>` y `<i>` en lugar de `<strong>` y `<em>`

Estas etiquetas básicas forman el fundamento para estructurar el contenido de manera efectiva en HTML. Con ellas puedes crear páginas web completas y bien estructuradas.