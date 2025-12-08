# Introducción a HTML

HTML (HyperText Markup Language) es el lenguaje de marcado estándar para la creación de páginas web. Es la columna vertebral de cualquier sitio web, definiendo la estructura y el contenido de la misma.

## ¿Qué es HTML?

HTML no es un lenguaje de programación, sino un **lenguaje de marcado** que utiliza etiquetas (tags) para estructurar el contenido de una página web. Estas etiquetas le dicen al navegador cómo interpretar y mostrar el contenido.

### ¿Por qué es importante HTML?

- **Fundamento de la web**: Todas las páginas web están construidas con HTML. Sin HTML, no existirían los sitios web tal como los conocemos.
- **Estructura semántica**: HTML organiza el contenido de manera lógica, lo que ayuda a los navegadores, motores de búsqueda y tecnologías de asistencia a entender tu página.
- **Accesibilidad**: Un HTML bien estructurado hace que tu sitio sea accesible para personas con discapacidades que usan lectores de pantalla.
- **SEO (Optimización para motores de búsqueda)**: Los motores de búsqueda como Google usan la estructura HTML para entender y clasificar tu contenido.

### ¿Cómo funciona HTML?

HTML funciona mediante un sistema de **etiquetas** (tags) que envuelven el contenido. La mayoría de las etiquetas tienen una etiqueta de apertura (`<tag>`) y una de cierre (`</tag>`), aunque algunas son auto-cerradas.

```html
<!-- Etiqueta con apertura y cierre -->
<p>Este es un párrafo</p>

<!-- Etiqueta auto-cerrada -->
<img src="imagen.jpg" alt="Descripción">
```

## Estructura básica de un documento HTML

Todo documento HTML básico sigue una estructura fundamental que el navegador necesita para interpretar correctamente el contenido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de mi página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer párrafo en HTML.</p>
</body>
</html>
```

### Explicación detallada de cada elemento:

#### `<!DOCTYPE html>`

**¿Qué hace?** Declara al navegador que este es un documento HTML5. Es la primera línea que debe aparecer en cualquier documento HTML.

**¿Por qué es importante?** Sin esta declaración, algunos navegadores pueden entrar en "modo de compatibilidad" y renderizar tu página de manera diferente, causando problemas de visualización.

**Historia breve**: En versiones anteriores de HTML, la declaración era más compleja (por ejemplo, `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"`). HTML5 simplificó esto a solo `<!DOCTYPE html>`.

#### `<html lang="es">`

**¿Qué hace?** Es el elemento raíz (root) de toda la página. Todo el contenido HTML debe estar dentro de este elemento.

**Atributo `lang`**: Especifica el idioma principal del documento. Esto es importante para:
- Lectores de pantalla (pronuncian correctamente el texto)
- Motores de búsqueda (saben qué idioma indexar)
- Traducción automática de navegadores
- Validación de accesibilidad

**Ejemplos de valores**: `lang="es"` (español), `lang="en"` (inglés), `lang="fr"` (francés), etc.

#### `<head>`

**¿Qué hace?** Contiene metadatos (información sobre la página) que no se muestran directamente al usuario, pero son esenciales para el funcionamiento y la configuración de la página.

**¿Qué va dentro del `<head>`?**
- Título de la página
- Enlaces a archivos CSS (estilos)
- Enlaces a archivos JavaScript
- Metadatos (descripción, autor, palabras clave)
- Configuraciones de codificación de caracteres
- Configuraciones para dispositivos móviles

**Importante**: El contenido del `<head>` no es visible en la página, pero afecta cómo se ve y se comporta.

#### `<meta charset="UTF-8">`

**¿Qué hace?** Especifica la codificación de caracteres que usa el documento.

**¿Por qué UTF-8?** UTF-8 es un estándar que puede representar prácticamente todos los caracteres de todos los idiomas del mundo, incluyendo:
- Letras con tildes: á, é, í, ó, ú
- Caracteres especiales: ñ, ç, ü
- Símbolos: ©, ®, €, £
- Emojis: 😀, 🎉, ❤️
- Caracteres de otros idiomas: 中文, العربية, русский

**Sin UTF-8**: Si no especificas UTF-8 o usas una codificación antigua, caracteres especiales pueden aparecer como símbolos extraños (como `` o `Ã±`).

**Buenas prácticas**: Siempre coloca esta etiqueta dentro de las primeras 1024 bytes del documento (idealmente, justo después de `<head>`).

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

**¿Qué hace?** Configura cómo se muestra la página en dispositivos móviles (tablets, smartphones).

**¿Por qué es necesario?** Sin esta etiqueta, los navegadores móviles pueden mostrar la página como si fuera para escritorio, haciendo que el texto sea muy pequeño y requiera hacer zoom.

**Explicación de los valores**:
- `width=device-width`: Hace que el ancho de la página coincida con el ancho de la pantalla del dispositivo
- `initial-scale=1.0`: Establece el nivel de zoom inicial al 100% (sin zoom)

**Casos de uso**: Esencial para diseño responsivo (páginas que se adaptan a diferentes tamaños de pantalla).

#### `<title>Título de mi página</title>`

**¿Qué hace?** Define el título de la página que aparece en:
- La pestaña del navegador
- Los resultados de búsqueda (SEO)
- Los marcadores/favoritos cuando se guarda la página
- El historial del navegador

**Buenas prácticas**:
- Mantén el título entre 50-60 caracteres (los motores de búsqueda cortan títulos más largos)
- Sé descriptivo y específico: "Contacto - Mi Empresa" es mejor que "Página 2"
- Incluye palabras clave relevantes para SEO
- Cada página debe tener un título único

**Ejemplos**:
```html
<!-- ✅ Bueno -->
<title>Recetas de Cocina - Platos Principales</title>

<!-- ❌ Malo -->
<title>Página</title>
```

#### `<body>`

**¿Qué hace?** Contiene todo el contenido visible de la página web. Aquí es donde colocas:
- Textos, encabezados, párrafos
- Imágenes
- Enlaces
- Formularios
- Botones
- Cualquier elemento que el usuario pueda ver o interactuar

**Estructura típica del body**:
```html
<body>
    <header>
        <!-- Encabezado de la página -->
    </header>
    <main>
        <!-- Contenido principal -->
    </main>
    <footer>
        <!-- Pie de página -->
    </footer>
</body>
```

#### Elementos básicos del contenido

**`<h1>¡Hola, mundo!</h1>`** - Encabezado de nivel 1 (el más importante)
- Usa `<h1>` solo una vez por página (para el título principal)
- Los navegadores lo muestran en texto grande y en negrita
- Importante para SEO: los motores de búsqueda dan más peso al contenido en `<h1>`

**`<p>Este es mi primer párrafo en HTML.</p>`** - Párrafo de texto
- Usa `<p>` para bloques de texto normales
- Los navegadores agregan espacio automáticamente antes y después de cada párrafo

## Ejemplo completo y comentado

Aquí tienes un ejemplo más completo con comentarios explicativos:

```html
<!DOCTYPE html>
<!-- Declaración del tipo de documento: HTML5 -->
<html lang="es">
<!-- Elemento raíz, idioma español -->

<head>
    <!-- Sección de metadatos (no visible) -->
    
    <!-- Codificación de caracteres: permite tildes, ñ, emojis, etc. -->
    <meta charset="UTF-8">
    
    <!-- Configuración para dispositivos móviles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Título que aparece en la pestaña del navegador -->
    <title>Mi Primera Página Web</title>
</head>

<body>
    <!-- Contenido visible de la página -->
    
    <!-- Encabezado principal (solo uno por página) -->
    <h1>Bienvenido a mi sitio web</h1>
    
    <!-- Párrafo de texto -->
    <p>Esta es mi primera página web creada con HTML.</p>
    
    <!-- Otro párrafo -->
    <p>Estoy aprendiendo desarrollo web paso a paso.</p>
</body>
</html>
```

## Pasos para crear tu primera página

1. **Abre un editor de texto** (VS Code, Notepad++, Sublime Text, o incluso el Bloc de notas)
2. **Crea un archivo nuevo** y guárdalo con extensión `.html` (por ejemplo: `mi-pagina.html`)
3. **Copia la estructura básica** de arriba
4. **Guarda el archivo**
5. **Abre el archivo** haciendo doble clic (se abrirá en tu navegador predeterminado)

**Consejo**: Usa un editor de código como VS Code que te ayuda con:
- Resaltado de sintaxis (colores)
- Autocompletado de código
- Detección de errores
- Vista previa en tiempo real

## Buenas prácticas desde el inicio

✅ **Siempre incluye** `<!DOCTYPE html>` como primera línea
✅ **Siempre especifica** `lang` en la etiqueta `<html>`
✅ **Siempre incluye** `<meta charset="UTF-8">` en el `<head>`
✅ **Siempre incluye** la etiqueta viewport para móviles
✅ **Siempre agrega** un `<title>` descriptivo
✅ **Usa indentación** (tabulaciones o espacios) para hacer el código más legible
✅ **Comenta tu código** cuando sea necesario para explicar secciones complejas

## Errores comunes de principiantes

❌ **Olvidar cerrar etiquetas**: `<p>Texto` sin el `</p>` de cierre
❌ **Anidar etiquetas incorrectamente**: `<p><h1>Título</p></h1>` (debe ser `<p><h1>Título</h1></p>`)
❌ **Usar mayúsculas en etiquetas**: `<BODY>` en lugar de `<body>` (HTML5 es case-insensitive, pero la convención es minúsculas)
❌ **Olvidar comillas en atributos**: `<img src=imagen.jpg>` en lugar de `<img src="imagen.jpg">`
❌ **No usar UTF-8**: Los caracteres especiales no se muestran correctamente

## Próximos pasos

Ahora que entiendes la estructura básica de HTML, estás listo para aprender:
- Etiquetas básicas (encabezados, párrafos, enlaces, imágenes)
- Listas y tablas
- Formularios
- HTML semántico (etiquetas que dan significado al contenido)

Con esta base sólida, puedes empezar a construir cualquier página web. ¡La práctica es la clave para dominar HTML!