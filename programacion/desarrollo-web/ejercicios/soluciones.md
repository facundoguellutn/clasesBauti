# Soluciones de Ejercicios

Este archivo contiene soluciones de ejemplo para algunos ejercicios representativos de cada categoría. Las soluciones están comentadas y explicadas para facilitar el aprendizaje.

**Nota**: Estas son soluciones de ejemplo. Hay múltiples formas correctas de resolver cada ejercicio. Usa estas soluciones como referencia y guía.

---

## Soluciones HTML

### HTML-01: Mi Primera Página Web

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Bienvenido a mi página web!</h1>
    <p>Hola, soy [Tu Nombre] y esta es mi primera página web creada con HTML.</p>
</body>
</html>
```

**Explicación**: 
- `<!DOCTYPE html>` declara que es HTML5
- `lang="es"` especifica el idioma
- Meta charset permite caracteres especiales
- Meta viewport es esencial para diseño responsivo
- El título aparece en la pestaña del navegador

---

### HTML-09: Formulario Básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>
<body>
    <h1>Formulario de Contacto</h1>
    
    <form action="#" method="POST">
        <fieldset>
            <legend>Información de Contacto</legend>
            
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            
            <br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <br><br>
            
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono">
            
            <br><br>
            
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" cols="30" required></textarea>
            
            <br><br>
            
            <button type="submit">Enviar</button>
        </fieldset>
    </form>
</body>
</html>
```

**Explicación**:
- `fieldset` y `legend` agrupan campos relacionados
- Cada input tiene un `label` asociado con `for` e `id`
- `required` hace los campos obligatorios
- `type="email"` valida formato de email
- `method="POST"` es apropiado para envío de datos

---

## Soluciones CSS

### CSS-01: Selectores Básicos

```css
/* Selector de elemento */
p {
    color: blue;
    font-size: 16px;
}

/* Selector de elemento */
h1 {
    color: red;
    text-align: center;
}

/* Selector de clase */
.destacado {
    background-color: yellow;
}

/* Selector de ID */
#principal {
    border: 2px solid black;
}
```

**HTML de prueba**:
```html
<h1>Título Principal</h1>
<p>Este es un párrafo normal.</p>
<p class="destacado">Este párrafo está destacado.</p>
<div id="principal">Contenido principal</div>
```

---

### CSS-05: Flexbox Básico

```css
.contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    border: 1px solid #ccc;
}

.item {
    flex: 1;
    padding: 20px;
    background-color: lightblue;
    margin: 5px;
    text-align: center;
}
```

**HTML**:
```html
<div class="contenedor">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

**Explicación**:
- `display: flex` convierte el contenedor en flex
- `justify-content: space-between` distribuye espacio entre items
- `align-items: center` centra verticalmente
- `flex: 1` hace que todos los items tengan el mismo ancho

---

## Soluciones JavaScript

### JS-01: Variables y Tipos de Datos

```javascript
// Variables con let y const
let nombre = "Juan";
const edad = 25;
const esEstudiante = true;

// Array
const hobbies = ["Leer", "Programar", "Cocinar"];

// Objeto
const informacion = {
    nombre: "Juan",
    ciudad: "Madrid",
    pais: "España"
};

// Mostrar en consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Hobbies:", hobbies);
console.log("Información:", informacion);

// Template literal
const mensaje = `Hola, soy ${nombre}, tengo ${edad} años, y mis hobbies son ${hobbies.join(", ")}.`;
console.log(mensaje);
```

**Explicación**:
- `let` para variables que pueden cambiar
- `const` para constantes
- Arrays con corchetes `[]`
- Objetos con llaves `{}`
- Template literals con backticks `` ` ``

---

### JS-11: Seleccionar Elementos

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Seleccionar Elementos</title>
</head>
<body>
    <h1 id="titulo">Título Principal</h1>
    <p class="parrafo">Párrafo 1</p>
    <p class="parrafo">Párrafo 2</p>
    <div class="contenedor">
        <p>Párrafo dentro del contenedor</p>
    </div>
    
    <script>
        // Por ID
        const titulo = document.getElementById('titulo');
        console.log('Título:', titulo.textContent);
        
        // Por clase (devuelve HTMLCollection)
        const parrafos = document.getElementsByClassName('parrafo');
        console.log('Número de párrafos:', parrafos.length);
        
        // QuerySelector (primer elemento)
        const primerParrafo = document.querySelector('.parrafo');
        console.log('Primer párrafo:', primerParrafo.textContent);
        
        // QuerySelectorAll (todos los elementos)
        const todosParrafos = document.querySelectorAll('.parrafo');
        todosParrafos.forEach((parrafo, index) => {
            console.log(`Párrafo ${index + 1}:`, parrafo.textContent);
        });
        
        // Selector descendente
        const parrafoEnContenedor = document.querySelector('.contenedor p');
        console.log('Párrafo en contenedor:', parrafoEnContenedor.textContent);
    </script>
</body>
</html>
```

---

## Soluciones HTML + CSS

### HTMLCSS-01: Tarjeta de Perfil Simple

**HTML**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Perfil</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="tarjeta">
        <img src="perfil.jpg" alt="Foto de perfil" class="foto-perfil">
        <h2 class="nombre">Juan Pérez</h2>
        <p class="titulo">Desarrollador Web</p>
        <p class="descripcion">Apasionado por crear experiencias web increíbles.</p>
    </div>
</body>
</html>
```

**CSS**:
```css
.tarjeta {
    width: 300px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: white;
    margin: 50px auto;
}

.foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.nombre {
    margin: 10px 0;
    color: #333;
}

.titulo {
    color: #666;
    font-style: italic;
    margin: 5px 0;
}

.descripcion {
    color: #888;
    line-height: 1.6;
}
```

---

## Soluciones de Integración

### INT-01: Contador Interactivo

**HTML**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor">
        <h1>Contador</h1>
        <div class="display" id="contador">0</div>
        <div class="botones">
            <button id="decrementar">-</button>
            <button id="resetear">Reset</button>
            <button id="incrementar">+</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**CSS**:
```css
.contenedor {
    text-align: center;
    padding: 50px;
    font-family: Arial, sans-serif;
}

.display {
    font-size: 48px;
    font-weight: bold;
    margin: 30px 0;
    color: #333;
}

.botones {
    display: flex;
    gap: 10px;
    justify-content: center;
}

button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#incrementar {
    background-color: #4CAF50;
    color: white;
}

#incrementar:hover {
    background-color: #45a049;
}

#decrementar {
    background-color: #f44336;
    color: white;
}

#decrementar:hover {
    background-color: #da190b;
}

#resetear {
    background-color: #2196F3;
    color: white;
}

#resetear:hover {
    background-color: #0b7dda;
}
```

**JavaScript**:
```javascript
// Obtener elementos del DOM
const display = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnResetear = document.getElementById('resetear');

// Estado inicial (cargar desde localStorage si existe)
let contador = parseInt(localStorage.getItem('contador')) || 0;
actualizarDisplay();

// Función para actualizar el display
function actualizarDisplay() {
    display.textContent = contador;
    localStorage.setItem('contador', contador);
}

// Event listeners
btnIncrementar.addEventListener('click', () => {
    contador++;
    actualizarDisplay();
});

btnDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        actualizarDisplay();
    }
});

btnResetear.addEventListener('click', () => {
    contador = 0;
    actualizarDisplay();
});
```

**Explicación**:
- HTML semántico con IDs para selección
- CSS con diseño moderno y efectos hover
- JavaScript maneja el estado y actualiza el DOM
- localStorage persiste el valor entre recargas
- Validación para no permitir números negativos

---

### INT-03: Lista de Tareas (To-Do List)

**HTML**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor">
        <h1>Mi Lista de Tareas</h1>
        <div class="agregar-tarea">
            <input type="text" id="nuevaTarea" placeholder="Nueva tarea...">
            <button id="agregarBtn">Agregar</button>
        </div>
        <div class="filtros">
            <button class="filtro activo" data-filtro="todas">Todas</button>
            <button class="filtro" data-filtro="activas">Activas</button>
            <button class="filtro" data-filtro="completadas">Completadas</button>
        </div>
        <ul id="listaTareas"></ul>
        <p id="contador">Tareas pendientes: <span id="numero">0</span></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**CSS**:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

.contenedor {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

.agregar-tarea {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#nuevaTarea {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

#agregarBtn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#agregarBtn:hover {
    background-color: #45a049;
}

.filtros {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filtro {
    padding: 5px 15px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 5px;
    cursor: pointer;
}

.filtro.activo {
    background-color: #2196F3;
    color: white;
}

#listaTareas {
    list-style: none;
}

.tarea {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
}

.tarea.completada {
    opacity: 0.6;
    text-decoration: line-through;
}

.tarea input[type="checkbox"] {
    margin-right: 10px;
}

.tarea .texto {
    flex: 1;
}

.tarea .eliminar {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

#contador {
    margin-top: 20px;
    text-align: center;
    color: #666;
}
```

**JavaScript**:
```javascript
// Estado
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
let filtroActual = 'todas';

// Elementos del DOM
const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const contador = document.getElementById('numero');
const filtros = document.querySelectorAll('.filtro');

// Cargar tareas al iniciar
renderizarTareas();

// Agregar tarea
btnAgregar.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});

// Filtros
filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('activo'));
        filtro.classList.add('activo');
        filtroActual = filtro.dataset.filtro;
        renderizarTareas();
    });
});

function agregarTarea() {
    const texto = inputTarea.value.trim();
    if (texto === '') return;
    
    tareas.push({
        id: Date.now(),
        texto: texto,
        completada: false
    });
    
    inputTarea.value = '';
    guardarTareas();
    renderizarTareas();
}

function toggleCompletada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        guardarTareas();
        renderizarTareas();
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas();
    renderizarTareas();
}

function renderizarTareas() {
    // Filtrar según filtro actual
    let tareasFiltradas = tareas;
    if (filtroActual === 'activas') {
        tareasFiltradas = tareas.filter(t => !t.completada);
    } else if (filtroActual === 'completadas') {
        tareasFiltradas = tareas.filter(t => t.completada);
    }
    
    // Limpiar lista
    listaTareas.innerHTML = '';
    
    // Renderizar tareas
    tareasFiltradas.forEach(tarea => {
        const li = document.createElement('li');
        li.className = `tarea ${tarea.completada ? 'completada' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} 
                   onchange="toggleCompletada(${tarea.id})">
            <span class="texto">${tarea.texto}</span>
            <button class="eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        `;
        
        listaTareas.appendChild(li);
    });
    
    // Actualizar contador
    const pendientes = tareas.filter(t => !t.completada).length;
    contador.textContent = pendientes;
}

function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
```

---

## Notas Finales

Estas soluciones son ejemplos representativos. Recuerda:

1. **Hay múltiples formas correctas** de resolver cada ejercicio
2. **Experimenta** con diferentes enfoques
3. **Mejora las soluciones** agregando más funcionalidades
4. **Comenta tu código** para entender mejor lo que haces
5. **Valida tu código** usando herramientas online
6. **Prueba en diferentes navegadores** para asegurar compatibilidad

---

**Ejercicios**:
- [Ejercicios HTML](01-ejercicios-html.md)
- [Ejercicios CSS](02-ejercicios-css.md)
- [Ejercicios HTML + CSS](03-ejercicios-html-css.md)
- [Ejercicios JavaScript](04-ejercicios-javascript.md)
- [Ejercicios de Integración](05-ejercicios-integracion.md)

¡Sigue practicando y construyendo proyectos propios!



