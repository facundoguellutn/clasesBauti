# Eventos en JavaScript

Los eventos son la forma en que JavaScript detecta y responde a las interacciones del usuario o a cambios en el navegador. Cuando ocurre algo en una página web (un clic, una tecla presionada, la carga de la página, un elemento que se desplaza), se dispara un "evento". JavaScript permite "escuchar" estos eventos y ejecutar código en respuesta a ellos.

## Conceptos Básicos de Eventos

-   **Evento:** Una acción o suceso que ocurre en el documento HTML.
-   **Manejador de Eventos (Event Handler):** Una función JavaScript que se ejecuta cuando ocurre un evento específico.
-   **Escucha de Eventos (Event Listener):** Un mecanismo para registrar un manejador de eventos a un elemento HTML.

## Tipos Comunes de Eventos

Hay cientos de tipos de eventos, pero algunos de los más comunes incluyen:

### Eventos de Ratón:
-   `click`: El usuario hace clic en un elemento.
-   `dblclick`: El usuario hace doble clic.
-   `mouseover`: El puntero del ratón se mueve sobre un elemento.
-   `mouseout`: El puntero del ratón se mueve fuera de un elemento.
-   `mousedown`: El botón del ratón se presiona sobre un elemento.
-   `mouseup`: El botón del ratón se suelta sobre un elemento.
-   `mousemove`: El puntero del ratón se mueve mientras está sobre un elemento.

### Eventos de Teclado:
-   `keydown`: Una tecla es presionada.
-   `keyup`: Una tecla es soltada.
-   `keypress`: Una tecla que produce un carácter es presionada y soltada.

### Eventos de Formulario:
-   `submit`: Un formulario es enviado.
-   `change`: El valor de un elemento de formulario (input, select, textarea) cambia y el elemento pierde el foco.
-   `focus`: Un elemento recibe el foco.
-   `blur`: Un elemento pierde el foco.
-   `input`: El valor de un input cambia (se dispara inmediatamente al escribir).

### Eventos de Documento/Ventana:
-   `DOMContentLoaded`: El documento HTML ha sido completamente cargado y parseado.
-   `load`: La página completa (incluyendo imágenes, hojas de estilo, etc.) ha sido cargada.
-   `resize`: La ventana del navegador cambia de tamaño.
-   `scroll`: El usuario se desplaza por el documento.

## Cómo Manejar Eventos

Hay varias maneras de asignar manejadores de eventos.

### 1. Propiedades de Eventos HTML (Inline)

No recomendado para la mayoría de los casos, ya que mezcla JavaScript con HTML.

```html
<button onclick="alert('¡Clic en línea!');">Haz clic</button>
```

### 2. Propiedades de Eventos del DOM

Asigna una función directamente a una propiedad del objeto DOM. Solo puedes asignar un manejador por evento.

```html
<button id="miBoton">Haz clic</button>
<script>
    const boton = document.getElementById('miBoton');
    boton.onclick = function() {
        alert('¡Clic desde propiedad del DOM!');
    };
    // Si asignas otro, el anterior se sobrescribe
    boton.onclick = function() {
        console.log('Este es el segundo manejador.');
    };
</script>
```

### 3. `addEventListener()` (Recomendado)

Es el método preferido para manejar eventos. Permite asignar múltiples manejadores de eventos al mismo elemento y evento.

```html
<button id="otroBoton">Haz clic</button>
<script>
    const otroBoton = document.getElementById('otroBoton');

    // Primer manejador
    otroBoton.addEventListener('click', function() {
        console.log('Primer manejador ejecutado.');
    });

    // Segundo manejador para el mismo evento
    otroBoton.addEventListener('click', () => {
        alert('Segundo manejador ejecutado!');
    });

    // También puedes pasar una función con nombre
    function mostrarMensaje() {
        console.log('Función con nombre ejecutada.');
    }
    otroBoton.addEventListener('click', mostrarMensaje);
</script>
```

`addEventListener()` toma tres argumentos:
1.  **Tipo de evento** (cadena, ej. `'click'`, `'mouseover'`).
2.  **Función manejadora** (la función que se ejecutará).
3.  **Opcional: Objeto de opciones** (ej. `{ once: true }` para que se ejecute una sola vez, `{ capture: true }` para la fase de captura).

### `removeEventListener()`

Permite eliminar un manejador de eventos que se añadió con `addEventListener()`. Es importante que la función manejadora sea la misma (no una función anónima distinta).

```javascript
// ... (código anterior)

// Para eliminar 'mostrarMensaje':
otroBoton.removeEventListener('click', mostrarMensaje);
// Ahora, al hacer clic, solo se ejecutarán los dos primeros manejadores.
```

## El Objeto `Event`

Cuando un evento se dispara, el manejador de eventos recibe un objeto `Event` como argumento. Este objeto contiene información útil sobre el evento.

```html
<input type="text" id="miInput">
<p id="tecladoInfo"></p>
<script>
    const miInput = document.getElementById('miInput');
    const tecladoInfo = document.getElementById('tecladoInfo');

    miInput.addEventListener('keydown', (event) => {
        console.log('Tecla presionada:', event.key);
        console.log('Código de tecla:', event.code);
        console.log('Shift presionado:', event.shiftKey);
        tecladoInfo.textContent = `Presionaste: ${event.key} (Shift: ${event.shiftKey})`;
        // event.preventDefault(); // Evita la acción por defecto del evento (ej. no permite escribir en el input)
    });
</script>
```

Propiedades comunes del objeto `Event`:
-   `target`: El elemento HTML donde ocurrió el evento.
-   `type`: El tipo de evento (ej. 'click', 'keydown').
-   `preventDefault()`: Una función para detener la acción por defecto del evento (ej. que un enlace no navegue, que un formulario no se envíe).
-   `stopPropagation()`: Detiene la propagación del evento a elementos padre o hijos (ver *Burbujeo y Captura*).

## Propagación de Eventos: Burbujeo y Captura

Cuando un evento ocurre en un elemento, este no solo se dispara en ese elemento, sino que también "burbujea" (o "se captura") a través de sus elementos padre e hijos.

-   **Fase de Captura:** El evento se propaga desde el `window` hacia abajo hasta el elemento objetivo.
-   **Fase Objetivo:** El evento llega al elemento donde ocurrió.
-   **Fase de Burbujeo:** El evento se propaga desde el elemento objetivo hacia arriba hasta el `window`.

Por defecto, `addEventListener()` maneja eventos en la fase de burbujeo. Para la fase de captura, necesitas pasar `{ capture: true }` como tercer argumento.

El manejo de eventos es la base de la interactividad en el desarrollo web. Dominar esta habilidad te permitirá dar vida a tus páginas HTML, respondiendo a las acciones de los usuarios y creando experiencias dinámicas. Con `addEventListener()`, tienes una herramienta poderosa y flexible para controlar el comportamiento de tu aplicación web.