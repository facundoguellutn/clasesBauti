# Introducción a JavaScript

JavaScript es un lenguaje de programación de alto nivel, interpretado y multiparadigma (soporta programación orientada a objetos, imperativa y funcional). Es conocido principalmente como el lenguaje de programación de la web, permitiendo crear interactividad dinámica en las páginas web que el HTML y CSS por sí solos no pueden lograr.

## ¿Qué es JavaScript?

-   **Lenguaje de Scripting:** Es un lenguaje diseñado para ser incrustado en otros entornos (en el navegador, por ejemplo).
-   **Interpretado:** No necesita ser compilado antes de ejecutarse; el código se ejecuta línea por línea por un intérprete.
-   **Multipardigma:** Permite diferentes estilos de programación.
-   **Dinámico:** El tipo de una variable se determina en tiempo de ejecución.
-   **Tipado débil:** Permite la conversión implícita de tipos.
-   **Ejecutado en el cliente (mayormente):** Se ejecuta en el navegador del usuario, lo que reduce la carga del servidor.
-   **Asíncrono:** Permite ejecutar tareas en segundo plano sin bloquear el hilo principal.

## ¿Qué puede hacer JavaScript?

JavaScript puede:
-   Manipular HTML y CSS (cambiar contenido, estilos, atributos).
-   Reaccionar a eventos del usuario (clics, pulsaciones de teclas, movimientos del ratón).
-   Validar datos de formularios antes de enviarlos al servidor.
-   Crear y manejar cookies.
-   Cargar datos de forma asíncrona (AJAX, Fetch API).
-   Reproducir animaciones.
-   ¡Y mucho más! Con tecnologías como Node.js, JavaScript también puede ejecutarse en el servidor.

## Cómo incluir JavaScript en HTML

Hay tres maneras principales de incluir JavaScript en un documento HTML:

### 1. JavaScript Externo (Recomendado)

Es la forma preferida y más organizada. El código JavaScript se escribe en un archivo `.js` separado y se enlaza desde el documento HTML.

**`script.js`:**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡La página ha cargado completamente!');
    const boton = document.getElementById('miBoton');
    if (boton) {
        boton.addEventListener('click', () => {
            alert('¡Hola desde JavaScript externo!');
        });
    }
});
```

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página con JS</title>
</head>
<body>
    <h1>¡Mi Página Interactiva!</h1>
    <button id="miBoton">Haz clic</button>

    <!-- Enlaza el archivo JavaScript externo -->
    <!-- Se recomienda colocar la etiqueta <script> al final del <body>
         para asegurar que el HTML ya esté cargado antes de que JS intente manipularlo. -->
    <script src="script.js"></script>
</body>
</html>
```

El atributo `defer` en la etiqueta `script` es muy útil. Si se añade (`<script src="script.js" defer></script>`), el script se descargará en paralelo mientras el HTML se sigue analizando y se ejecutará una vez que el HTML haya sido completamente parseado. Esto es similar a colocar el script al final del `<body>`.

### 2. JavaScript Interno (Etiqueta `<script>`)

El código JavaScript se coloca directamente dentro de la etiqueta `<script>` en el documento HTML. Útil para scripts pequeños y específicos de una sola página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página con JS</title>
</head>
<body>
    <h1>¡Hola de nuevo!</h1>
    <button id="otroBoton">Haz clic aquí</button>

    <script>
        // Código JavaScript interno
        document.getElementById('otroBoton').addEventListener('click', function() {
            alert('¡Hola desde JavaScript interno!');
        });
        console.log('Script interno ejecutado.');
    </script>
</body>
</html>
```

### 3. JavaScript en Línea (Inline JavaScript)

El código JavaScript se coloca directamente dentro de un atributo HTML (por ejemplo, `onclick`). **No es una práctica recomendada** debido a que mezcla la lógica con la estructura y dificulta el mantenimiento.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página con JS</title>
</head>
<body>
    <h1>Página con JavaScript en línea</h1>
    <button onclick="alert('¡Hola desde JavaScript en línea!');">Haz clic</button>
</body>
</html>
```

Siempre que sea posible, prefiere el JavaScript externo para mantener tu código organizado, legible y fácil de mantener.

Con esta introducción, estamos listos para explorar las capacidades de JavaScript para hacer nuestras páginas web dinámicas e interactivas.