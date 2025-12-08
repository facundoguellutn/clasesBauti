# HTML Semántico

El HTML semántico es el uso de etiquetas HTML que transmiten el **significado o propósito** del contenido que encierran, en lugar de simplemente su apariencia visual. Al utilizar elementos semánticos, no solo ayudas a los navegadores a entender mejor tu contenido, sino también a los motores de búsqueda (SEO) y a las tecnologías de asistencia (accesibilidad).

## ¿Qué es la Semántica?

La **semántica** se refiere al significado de las palabras y cómo se usan. En HTML, las etiquetas semánticas comunican el **propósito** del contenido, no solo cómo se ve.

### Ejemplo: Semántico vs No Semántico

```html
<!-- ❌ No semántico: usa divs genéricos -->
<div class="header">
    <div class="nav">...</div>
</div>
<div class="main-content">...</div>
<div class="footer">...</div>

<!-- ✅ Semántico: usa etiquetas con significado -->
<header>
    <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

Ambos pueden verse igual visualmente, pero el código semántico es más claro y tiene beneficios adicionales.

## ¿Por qué es importante el HTML Semántico?

### 1. Accesibilidad

Facilita que las **tecnologías de asistencia** (lectores de pantalla) interpreten correctamente el contenido, mejorando la experiencia para personas con discapacidades.

**Ejemplo**: Un lector de pantalla puede navegar directamente a `<main>` para leer el contenido principal, o a `<nav>` para ver las opciones de navegación.

```html
<!-- Con HTML semántico, un lector de pantalla puede decir: -->
<!-- "Navegación principal", "Contenido principal", "Pie de página" -->
```

### 2. SEO (Search Engine Optimization)

Los **motores de búsqueda** dan más peso al contenido dentro de etiquetas semánticas relevantes, lo que puede mejorar el ranking de tu página.

**Ejemplo**: Google entiende que el contenido en `<article>` es un artículo independiente, y el contenido en `<header>` es información introductoria.

### 3. Mantenibilidad

El código es más **fácil de leer, entender y mantener** para otros desarrolladores y para ti mismo en el futuro.

**Ejemplo**: Ver `<header>` inmediatamente te dice que es el encabezado, en lugar de tener que leer clases CSS como `div.header` o `div.top-section`.

### 4. Coherencia

Promueve una **estructura de documento más lógica y consistente**, facilitando el trabajo en equipo y la estandarización.

### 5. Mejor Rendimiento

Los navegadores pueden **optimizar el renderizado** basándose en la estructura semántica.

### 6. Futuro-Proof

El código semántico es más **resiliente a cambios** en diseño. Si cambias los estilos CSS, la estructura semántica sigue siendo válida.

## Elementos Semánticos Comunes

### `<header>`

Representa un grupo de contenido **introductorio o de navegación**. Puede contener el título de una sección, un logo, un menú de navegación, información del autor, etc.

**Características**:
- Puede aparecer múltiples veces en una página (uno por sección)
- No debe contener `<footer>` o `<main>`
- Típicamente contiene el logo y navegación principal

```html
<!-- Header principal de la página -->
<header>
    <img src="logo.png" alt="Logo de mi sitio">
    <nav>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca">Acerca de</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
    </nav>
</header>

<!-- Header de un artículo -->
<article>
    <header>
        <h2>Título del Artículo</h2>
        <p>Por <strong>Juan Pérez</strong> - <time datetime="2024-01-15">15 de enero, 2024</time></p>
    </header>
    <p>Contenido del artículo...</p>
</article>
```

**Cuándo usar**:
- Encabezado principal de la página
- Encabezado de artículos o secciones
- Información introductoria de cualquier sección

### `<nav>`

Representa una sección de un documento que contiene **enlaces de navegación**. Es ideal para menús principales, tablas de contenido, índices, breadcrumbs.

**Características**:
- Puede aparecer múltiples veces (navegación principal, navegación secundaria, breadcrumbs)
- No todos los grupos de enlaces son navegación (los enlaces en un footer no necesitan estar en `<nav>`)

```html
<!-- Navegación principal -->
<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</nav>

<!-- Breadcrumbs (migas de pan) -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li>Laptops</li>
    </ol>
</nav>
```

**Cuándo usar**:
- Menús de navegación principales
- Menús de navegación secundarios
- Tablas de contenido
- Breadcrumbs
- Paginación

**Cuándo NO usar**:
- Enlaces en un footer (a menos que sea un menú de navegación)
- Enlaces sociales (a menos que sea parte de la navegación principal)

### `<main>`

Representa el **contenido principal o dominante** del `<body>` de un documento. Debe ser único en el documento y su contenido debe ser directamente relacionado o expandir el tema central del documento.

**Características**:
- **Solo uno por página** (a menos que uses `hidden` en otros)
- No debe estar dentro de `<article>`, `<aside>`, `<footer>`, `<header>`, o `<nav>`
- Debe contener el contenido principal único de la página

```html
<body>
    <header>...</header>
    <nav>...</nav>
    
    <main>
        <h1>Título Principal de la Página</h1>
        <p>Este es el contenido principal...</p>
        <!-- Todo el contenido principal aquí -->
    </main>
    
    <aside>...</aside>
    <footer>...</footer>
</body>
```

**Cuándo usar**:
- Contenido principal único de la página
- El contenido que responde directamente a la pregunta del usuario

**Qué NO incluir en `<main>`**:
- Navegación (va en `<nav>`)
- Información del sitio (va en `<header>` o `<footer>`)
- Contenido relacionado (va en `<aside>`)

### `<article>`

Representa una **composición autocontenida** en un documento, página, aplicación o sitio. Está pensado para ser distribuible o reutilizable de forma independiente.

**Características**:
- Debe tener sentido por sí solo
- Puede tener su propio `<header>`, `<footer>`, `<section>`
- Ideal para contenido que podría ser sindicado (RSS)

**Ejemplos de uso**:
- Entrada de blog
- Artículo de revista o periódico
- Comentario en un foro
- Widget interactivo independiente
- Post en redes sociales

```html
<!-- Artículo de blog -->
<article>
    <header>
        <h2>10 Consejos para Aprender HTML</h2>
        <p>Por <strong>María García</strong> - <time datetime="2024-01-20">20 de enero, 2024</time></p>
    </header>
    
    <section>
        <h3>Introducción</h3>
        <p>HTML es el fundamento de la web...</p>
    </section>
    
    <section>
        <h3>Consejos</h3>
        <ol>
            <li>Practica regularmente</li>
            <li>Construye proyectos reales</li>
            <!-- ... -->
        </ol>
    </section>
    
    <footer>
        <p>Categorías: <a href="/categoria/html">HTML</a>, <a href="/categoria/web">Web</a></p>
    </footer>
</article>

<!-- Múltiples artículos (como en un blog) -->
<main>
    <h1>Últimos Artículos</h1>
    
    <article>
        <h2>Artículo 1</h2>
        <p>Contenido...</p>
    </article>
    
    <article>
        <h2>Artículo 2</h2>
        <p>Contenido...</p>
    </article>
</main>
```

**Cuándo usar**:
- Contenido que puede ser distribuido independientemente
- Entradas de blog, artículos, posts
- Comentarios que pueden ser citados

### `<section>`

Representa una **sección genérica de contenido autónoma** de un documento, típicamente con un encabezado. Agrupa contenido temáticamente relacionado.

**Características**:
- Debe tener un encabezado (h1-h6)
- Agrupa contenido relacionado temáticamente
- Más genérico que `<article>`

**Diferencia entre `<section>` y `<article>`**:
- `<article>`: Contenido independiente y reutilizable
- `<section>`: Agrupación temática de contenido

```html
<!-- Secciones en una página "Sobre Nosotros" -->
<main>
    <h1>Sobre Nosotros</h1>
    
    <section>
        <h2>Nuestra Historia</h2>
        <p>Fundada en 2020...</p>
    </section>
    
    <section>
        <h2>Nuestro Equipo</h2>
        <p>Somos un equipo de...</p>
    </section>
    
    <section>
        <h2>Nuestra Misión</h2>
        <p>Nuestra misión es...</p>
    </section>
</main>

<!-- Secciones dentro de un artículo -->
<article>
    <h1>Guía Completa de HTML</h1>
    
    <section>
        <h2>Introducción</h2>
        <p>HTML es...</p>
    </section>
    
    <section>
        <h2>Etiquetas Básicas</h2>
        <p>Las etiquetas básicas son...</p>
    </section>
</article>
```

**Cuándo usar**:
- Capítulos de un documento
- Pestañas de contenido
- Agrupaciones temáticas
- Secciones de una página con encabezado

**Cuándo NO usar**:
- Para crear columnas (usa CSS Grid o Flexbox)
- Como contenedor genérico (usa `<div>`)

### `<aside>`

Representa una sección de una página que consiste en contenido que está **tangencialmente relacionado** con el contenido del resto de la página. A menudo se presenta como barras laterales o bloques de información relacionada.

**Características**:
- Contenido relacionado pero no esencial
- Puede estar dentro o fuera de `<article>`
- Típicamente se muestra como sidebar

```html
<!-- Aside fuera de article (barra lateral) -->
<main>
    <article>
        <h2>Título del Artículo</h2>
        <p>Contenido principal...</p>
    </article>
    
    <aside>
        <h3>Artículos Relacionados</h3>
        <ul>
            <li><a href="/articulo1">Artículo 1</a></li>
            <li><a href="/articulo2">Artículo 2</a></li>
        </ul>
        
        <h3>Publicidad</h3>
        <p>Anuncio aquí...</p>
    </aside>
</main>

<!-- Aside dentro de article (cita, nota) -->
<article>
    <h2>Título del Artículo</h2>
    <p>Contenido principal del artículo...</p>
    
    <aside>
        <p><strong>Nota:</strong> Este artículo fue actualizado en 2024.</p>
    </aside>
    
    <p>Más contenido...</p>
</article>
```

**Cuándo usar**:
- Barras laterales con contenido relacionado
- Publicidad
- Biografías del autor
- Información relacionada pero no esencial
- Citas o notas dentro de artículos

### `<footer>`

Representa un **pie de página** para su sección de contenido más cercana o elemento raíz de sección. Un pie de página generalmente contiene información sobre el autor, enlaces relacionados, datos de derechos de autor, etc.

**Características**:
- Puede aparecer múltiples veces (footer de página, footer de artículo)
- No debe contener `<main>` o `<header>`

```html
<!-- Footer de la página -->
<footer>
    <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
    <address>
        <p>Contacto: <a href="mailto:info@miempresa.com">info@miempresa.com</a></p>
        <p>Dirección: Calle Principal 123, Madrid</p>
    </address>
    <nav>
        <ul>
            <li><a href="/privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos">Términos de Uso</a></li>
        </ul>
    </nav>
</footer>

<!-- Footer de un artículo -->
<article>
    <h2>Título del Artículo</h2>
    <p>Contenido...</p>
    <footer>
        <p>Publicado el <time datetime="2024-01-15">15 de enero, 2024</time></p>
        <p>Autor: <a href="/autor/juan">Juan Pérez</a></p>
    </footer>
</article>
```

**Cuándo usar**:
- Pie de página principal del sitio
- Información del autor en artículos
- Enlaces relacionados
- Información de copyright
- Información de contacto

### `<figure>` y `<figcaption>`

Se utilizan para agrupar **contenido multimedia** (imágenes, vídeos, audios) o bloques de código, junto con su leyenda.

**Características**:
- `<figure>`: Contenedor para el contenido multimedia
- `<figcaption>`: Leyenda o descripción (opcional, pero recomendado)

```html
<!-- Imagen con leyenda -->
<figure>
    <img src="paisaje.jpg" alt="Paisaje montañoso">
    <figcaption>Paisaje montañoso al amanecer en los Alpes.</figcaption>
</figure>

<!-- Código con descripción -->
<figure>
    <pre><code>
function saludar() {
    console.log("Hola");
}
    </code></pre>
    <figcaption>Ejemplo de función en JavaScript</figcaption>
</figure>

<!-- Múltiples imágenes relacionadas -->
<figure>
    <img src="foto1.jpg" alt="Vista frontal">
    <img src="foto2.jpg" alt="Vista lateral">
    <figcaption>Diferentes ángulos del producto</figcaption>
</figure>
```

**Cuándo usar**:
- Imágenes que necesitan una leyenda
- Código que necesita explicación
- Diagramas o gráficos
- Cualquier contenido multimedia con contexto

### Otros Elementos Semánticos

#### `<time>`

Representa una fecha, hora o duración. Mejora la accesibilidad y permite a los navegadores ofrecer funcionalidades adicionales.

```html
<p>Publicado el <time datetime="2024-01-15">15 de enero, 2024</time></p>
<p>El evento comienza a las <time datetime="2024-02-20T19:00">7:00 PM</time></p>
```

#### `<address>`

Representa información de contacto. Típicamente se usa en `<footer>`.

```html
<address>
    <p>Escrito por <a href="mailto:autor@ejemplo.com">Juan Pérez</a></p>
    <p>Visítanos en: Calle Principal 123, Madrid</p>
</address>
```

#### `<mark>`

Resalta texto que es relevante en el contexto actual (como resultados de búsqueda).

```html
<p>Encontraste <mark>HTML</mark> en 5 resultados.</p>
```

#### `<small>`

Representa texto secundario o legal (copyright, términos legales).

```html
<footer>
    <p><small>&copy; 2024 Mi Empresa. Todos los derechos reservados.</small></p>
</footer>
```

## Estructura Completa de una Página Semántica

Aquí tienes un ejemplo completo de una página web usando HTML semántico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Blog - HTML Semántico</title>
</head>
<body>
    <!-- Encabezado principal -->
    <header>
        <h1>Mi Blog Personal</h1>
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/articulos">Artículos</a></li>
                <li><a href="/sobre-mi">Sobre Mí</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal -->
    <main>
        <!-- Artículo principal -->
        <article>
            <header>
                <h2>Aprendiendo HTML Semántico</h2>
                <p>Por <strong>Juan Pérez</strong> - 
                   <time datetime="2024-01-15">15 de enero, 2024</time>
                </p>
            </header>

            <section>
                <h3>¿Qué es HTML Semántico?</h3>
                <p>HTML semántico es el uso de etiquetas que transmiten significado...</p>
                
                <figure>
                    <img src="html-semantico.jpg" alt="Estructura HTML semántica">
                    <figcaption>Ejemplo de estructura HTML semántica</figcaption>
                </figure>
            </section>

            <section>
                <h3>Beneficios</h3>
                <ul>
                    <li>Mejor accesibilidad</li>
                    <li>Mejor SEO</li>
                    <li>Código más mantenible</li>
                </ul>
            </section>

            <aside>
                <h4>Artículos Relacionados</h4>
                <ul>
                    <li><a href="/css-basico">CSS Básico</a></li>
                    <li><a href="/javascript-intro">Introducción a JavaScript</a></li>
                </ul>
            </aside>

            <footer>
                <p>Categorías: <a href="/categoria/html">HTML</a>, 
                   <a href="/categoria/web">Desarrollo Web</a></p>
                <address>
                    <p>¿Preguntas? <a href="mailto:juan@ejemplo.com">Escríbeme</a></p>
                </address>
            </footer>
        </article>

        <!-- Barra lateral -->
        <aside>
            <section>
                <h3>Sobre el Autor</h3>
                <p>Juan Pérez es desarrollador web con 5 años de experiencia...</p>
            </section>

            <section>
                <h3>Newsletter</h3>
                <form>
                    <input type="email" placeholder="Tu email">
                    <button type="submit">Suscribirse</button>
                </form>
            </section>
        </aside>
    </main>

    <!-- Pie de página -->
    <footer>
        <p><small>&copy; 2024 Mi Blog. Todos los derechos reservados.</small></p>
        <nav>
            <ul>
                <li><a href="/privacidad">Privacidad</a></li>
                <li><a href="/terminos">Términos</a></li>
            </ul>
        </nav>
        <address>
            <p>Contacto: <a href="mailto:info@miblog.com">info@miblog.com</a></p>
        </address>
    </footer>
</body>
</html>
```

## Buenas Prácticas

✅ **Usa un solo `<main>`** por página
✅ **Agrupa contenido relacionado** con `<section>`
✅ **Usa `<article>`** para contenido independiente
✅ **Incluye encabezados** en cada `<section>`
✅ **Usa `<nav>`** solo para navegación importante
✅ **Estructura lógica**: header → main → footer
✅ **Anida correctamente**: no pongas `<main>` dentro de `<header>`

## Errores Comunes

❌ **Usar `<section>` para diseño**: Usa CSS Grid/Flexbox para layouts
❌ **Múltiples `<main>`**: Solo debe haber uno por página
❌ **Confundir `<article>` y `<section>`**: Article es independiente, section es temático
❌ **Olvidar encabezados**: Cada section debe tener un h1-h6
❌ **Usar divs en lugar de elementos semánticos**: Cuando hay un elemento semántico apropiado, úsalo

## Comparación: Antes y Después

```html
<!-- ❌ Antes: No semántico -->
<div class="header">
    <div class="logo">...</div>
    <div class="nav">...</div>
</div>
<div class="content">
    <div class="article">...</div>
</div>
<div class="sidebar">...</div>
<div class="footer">...</div>

<!-- ✅ Después: Semántico -->
<header>
    <img src="logo.png" alt="Logo">
    <nav>...</nav>
</header>
<main>
    <article>...</article>
    <aside>...</aside>
</main>
<footer>...</footer>
```

Al adoptar el HTML semántico, no solo creas sitios web que se ven bien, sino que también son más **robustos, accesibles, optimizados para SEO y preparados para el futuro** de la web. Es una inversión que vale la pena desde el primer día.