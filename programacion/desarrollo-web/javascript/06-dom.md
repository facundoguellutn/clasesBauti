# Manipulación del DOM con JavaScript

El DOM (Document Object Model) es una interfaz de programación para documentos HTML y XML. Representa la página de tal manera que los programas pueden cambiar la estructura, estilo y contenido del documento. JavaScript se utiliza para interactuar con el DOM, permitiendo crear páginas web dinámicas e interactivas.

## ¿Qué es el DOM?

Cuando un navegador carga una página HTML, crea una representación en forma de árbol de todos los elementos de la página. Esta representación es el DOM. Cada nodo en el árbol es un objeto que representa una parte del documento (un elemento, un atributo, un texto, etc.).

Piensa en el DOM como un mapa de tu página web, donde JavaScript puede ir a cualquier "lugar" (elemento) para leer información, modificarla o incluso añadir y eliminar "lugares" nuevos.

## Selección de Elementos del DOM

Para manipular elementos, primero necesitas seleccionarlos. JavaScript proporciona varios métodos para esto:

### 1. `document.getElementById()`

Selecciona un elemento por su atributo `id`. Devuelve un único elemento o `null` si no lo encuentra.

```javascript
const titulo = document.getElementById('miTitulo');
console.log(titulo.textContent); // Accede al contenido de texto del elemento
```

### 2. `document.getElementsByClassName()`

Selecciona todos los elementos que tienen una clase específica. Devuelve una `HTMLCollection` (similar a un array, pero no es un array real).

```javascript
const elementosDestacados = document.getElementsByClassName('destacado');
for (let i = 0; i < elementosDestacados.length; i++) {
    console.log(elementosDestacados[i].textContent);
}
// También puedes convertir la HTMLCollection a un Array para usar métodos de Array:
// Array.from(elementosDestacados).forEach(el => console.log(el.textContent));
```

### 3. `document.getElementsByTagName()`

Selecciona todos los elementos con una etiqueta HTML específica. Devuelve una `HTMLCollection`.

```javascript
const parrafos = document.getElementsByTagName('p');
console.console.log(`Número de párrafos: ${parrafos.length}`);
```

### 4. `document.querySelector()`

Selecciona el *primer* elemento que coincide con un selector CSS especificado. Es muy potente porque puedes usar cualquier selector CSS (clases, IDs, etiquetas, atributos, combinadores).

```javascript
const primerParrafo = document.querySelector('p'); // Primer párrafo
const elementoPorClase = document.querySelector('.mi-clase'); // Primer elemento con clase 'mi-clase'
const elementoPorId = document.querySelector('#miId'); // Elemento con id 'miId'
const enlaceInterno = document.querySelector('a[href^="#"]'); // Primer enlace interno
```

### 5. `document.querySelectorAll()`

Selecciona *todos* los elementos que coinciden con un selector CSS especificado. Devuelve una `NodeList` (similar a un array y compatible con `forEach`).

```javascript
const todosLosEnlaces = document.querySelectorAll('a');
todosLosEnlaces.forEach(enlace => {
    console.log(enlace.href);
});

const itemsDeLista = document.querySelectorAll('ul li');
itemsDeLista.forEach((item, index) => {
    item.textContent = `Item ${index + 1}: ${item.textContent}`;
});
```

## Modificación de Elementos del DOM

Una vez que tienes un elemento seleccionado, puedes modificar sus propiedades.

### 1. Cambiar Contenido

-   `textContent`: Obtiene o establece el contenido de texto de un nodo y sus descendientes. Es seguro contra inyección HTML.
-   `innerHTML`: Obtiene o establece el contenido HTML de un elemento. **Ten cuidado con la seguridad (Cross-Site Scripting - XSS)** si el contenido proviene de fuentes no confiables.

```javascript
const titulo = document.getElementById('miTitulo');
titulo.textContent = 'Nuevo Título de la Página'; // Cambia solo texto
titulo.innerHTML = '<h2>Un subtítulo <span style="color: blue;">azul</span></h2>'; // Cambia el HTML interno
```

### 2. Cambiar Atributos

Utiliza `element.setAttribute('nombre-atributo', 'valor')` y `element.getAttribute('nombre-atributo')`.

```javascript
const imagen = document.getElementById('miImagen');
imagen.setAttribute('src', 'nueva-imagen.jpg');
imagen.setAttribute('alt', 'Una nueva descripción');

console.log(imagen.getAttribute('src'));
```

También puedes acceder directamente a algunos atributos como propiedades del objeto (ej. `imagen.src`, `imagen.id`, `imagen.className`).

### 3. Cambiar Estilos (CSS)

Accede a la propiedad `style` del elemento y luego a las propiedades CSS en formato `camelCase`.

```javascript
const boton = document.querySelector('#miBoton');
boton.style.backgroundColor = 'purple';
boton.style.color = 'white';
boton.style.padding = '10px 20px';
```

Para añadir o quitar clases CSS (preferible para estilos complejos):

```javascript
boton.classList.add('clase-activa');
boton.classList.remove('clase-desactivada');
boton.classList.toggle('resaltado'); // Añade si no existe, quita si existe
```

## Creación y Eliminación de Elementos

### 1. Crear Elementos

`document.createElement('nombre-etiqueta')` crea un nuevo nodo de elemento.

```javascript
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo creado con JavaScript.';
nuevoParrafo.classList.add('dinamico');
```

### 2. Añadir Elementos

-   `parentNode.appendChild(childElement)`: Añade un nodo como el último hijo de un nodo padre.
-   `parentNode.insertBefore(newElement, referenceElement)`: Inserta un nodo antes de un nodo de referencia.

```javascript
const divContenedor = document.getElementById('contenedor');
divContenedor.appendChild(nuevoParrafo); // Añade al final del div

const primerHijo = divContenedor.firstElementChild;
const otroParrafo = document.createElement('p');
otroParrafo.textContent = 'Este párrafo va antes del primero.';
divContenedor.insertBefore(otroParrafo, primerHijo); // Inserta antes del primer hijo
```

### 3. Eliminar Elementos

`parentNode.removeChild(childElement)` elimina un nodo hijo.

```javascript
const elementoAEliminar = document.getElementById('elemento-viejo');
if (elementoAEliminar && elementoAEliminar.parentNode) {
    elementoAEliminar.parentNode.removeChild(elementoAEliminar);
}

// O, si sabes que el elemento existe y tiene un padre:
// elementoAEliminar.remove(); // Método más moderno y sencillo (no soportado en IE)
```

La manipulación del DOM es la clave para la interactividad en el lado del cliente. Al combinar estas técnicas con eventos, puedes construir interfaces de usuario ricas y dinámicas. Con práctica, te sentirás cómodo creando y modificando cualquier parte de una página web directamente desde JavaScript.