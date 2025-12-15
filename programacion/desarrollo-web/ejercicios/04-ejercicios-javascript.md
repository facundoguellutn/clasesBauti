# Ejercicios de JavaScript

Estos ejercicios están diseñados para practicar JavaScript de forma progresiva, desde conceptos básicos hasta manipulación del DOM. Intenta resolverlos y luego comprueba tus respuestas en el archivo de soluciones.

**ID de Ejercicios:** JS-01 a JS-20

---

## Bloque 1: Fundamentos (JS-01 a JS-05)

### JS-01: Variables y Tipos de Datos

Crea un script que:
- Declare variables usando `let` y `const`:
  - Tu nombre (string)
  - Tu edad (number)
  - Si eres estudiante (boolean)
  - Un array con tus 3 hobbies favoritos
  - Un objeto con información sobre ti (nombre, ciudad, país)
- Muestra todos estos valores en la consola usando `console.log()`
- Usa template literals para crear un mensaje que combine estas variables

**Objetivo**: Familiarizarte con variables y tipos de datos básicos.

---

### JS-02: Operadores y Expresiones

Crea un script que:
- Declare dos números
- Realice y muestre en consola:
  - Suma, resta, multiplicación, división
  - Módulo (resto de la división)
  - Comparaciones (mayor que, menor que, igual)
  - Operadores lógicos (AND, OR, NOT)
- Crea expresiones que combinen múltiples operadores
- Muestra los resultados con mensajes descriptivos

**Objetivo**: Dominar operadores aritméticos, de comparación y lógicos.

---

### JS-03: Condicionales Básicas

Crea un script que:
- Pida la edad del usuario (puedes usar una variable)
- Determine y muestre:
  - Si es menor de edad (< 18)
  - Si es adulto (18-64)
  - Si es adulto mayor (65+)
- Agrega lógica para verificar si puede votar (18+) y conducir (16+)
- Usa `if`, `else if` y `else`

**Objetivo**: Aprender a tomar decisiones con condicionales.

---

### JS-04: Switch Statement

Crea un script que:
- Tenga una variable con el día de la semana (1-7)
- Use `switch` para mostrar:
  - "Lunes" si es 1
  - "Martes" si es 2
  - etc.
  - "Día inválido" si no es 1-7
- Agrega lógica para determinar si es día laboral o fin de semana

**Objetivo**: Usar switch para múltiples condiciones.

---

### JS-05: Bucles For

Crea scripts que usen bucles `for`:
- Imprime los números del 1 al 10
- Imprime los números pares del 2 al 20
- Calcula la suma de los números del 1 al 100
- Crea una tabla de multiplicar (del 1 al 10) para un número dado
- Itera sobre un array de nombres y saluda a cada uno

**Objetivo**: Dominar bucles for para repetir código.

---

## Bloque 2: Funciones y Arrays (JS-06 a JS-10)

### JS-06: Funciones Básicas

Crea funciones que:
- `saludar(nombre)`: Recibe un nombre y devuelve "Hola, [nombre]"
- `sumar(a, b)`: Suma dos números y devuelve el resultado
- `esPar(numero)`: Verifica si un número es par (devuelve true/false)
- `calcularAreaRectangulo(ancho, alto)`: Calcula el área de un rectángulo
- Prueba todas las funciones y muestra los resultados

**Objetivo**: Crear y usar funciones básicas.

---

### JS-07: Funciones Avanzadas

Crea funciones más complejas:
- `calcularPromedio(numeros)`: Recibe un array de números y devuelve el promedio
- `encontrarMaximo(numeros)`: Encuentra el número más grande en un array
- `contarCaracteres(texto)`: Cuenta cuántos caracteres tiene un texto
- `convertirCelsiusAFahrenheit(celsius)`: Convierte temperatura
- Usa arrow functions para al menos una de ellas

**Objetivo**: Crear funciones más complejas con parámetros y return.

---

### JS-08: Trabajar con Arrays

Crea scripts que manipulen arrays:
- Crea un array con 5 frutas
- Agrega una fruta al final usando `push()`
- Elimina la última fruta usando `pop()`
- Encuentra el índice de una fruta específica
- Crea un nuevo array con solo las frutas que tienen más de 5 letras
- Ordena el array alfabéticamente
- Muestra el array completo y su longitud

**Objetivo**: Dominar métodos básicos de arrays.

---

### JS-09: Métodos de Array Avanzados

Usa métodos modernos de arrays:
- `map()`: Transforma un array de números multiplicándolos por 2
- `filter()`: Filtra números mayores que 10
- `find()`: Encuentra el primer número mayor que 5
- `reduce()`: Suma todos los números de un array
- `forEach()`: Itera sobre un array de objetos y muestra cada propiedad
- Combina métodos: filtra, luego transforma, luego suma

**Objetivo**: Usar métodos funcionales de arrays.

---

### JS-10: Objetos

Crea y manipula objetos:
- Crea un objeto `persona` con: nombre, edad, ciudad, email
- Agrega una propiedad `profesion`
- Crea un método `presentarse()` que muestre información de la persona
- Crea un array de objetos (al menos 3 personas)
- Itera sobre el array y muestra la información de cada persona
- Encuentra una persona específica por nombre

**Objetivo**: Trabajar con objetos y sus propiedades.

---

## Bloque 3: DOM Básico (JS-11 a JS-15)

### JS-11: Seleccionar Elementos

Crea un HTML de prueba y un script que:
- Seleccione elementos usando:
  - `getElementById()`
  - `getElementsByClassName()`
  - `querySelector()`
  - `querySelectorAll()`
- Muestra en consola información sobre cada elemento seleccionado
- Itera sobre múltiples elementos y cambia su contenido

**Objetivo**: Aprender a seleccionar elementos del DOM.

---

### JS-12: Modificar Contenido

Crea un script que:
- Cambie el texto de un elemento usando `textContent`
- Cambie el HTML de un elemento usando `innerHTML`
- Modifique atributos usando `setAttribute()`
- Cambie estilos usando `style`
- Agrega y quita clases usando `classList`

**Objetivo**: Modificar elementos del DOM.

---

### JS-13: Crear y Eliminar Elementos

Crea un script que:
- Cree nuevos elementos usando `createElement()`
- Agregue elementos al DOM usando `appendChild()`
- Inserte elementos en posiciones específicas
- Elimine elementos usando `remove()`
- Crea una lista dinámica donde puedes agregar y eliminar items

**Objetivo**: Manipular la estructura del DOM dinámicamente.

---

### JS-14: Eventos Básicos

Crea una página con:
- Un botón que al hacer clic muestre un alert
- Un botón que cambie el color de fondo de la página
- Un input que muestre su valor en tiempo real mientras escribes
- Un botón que agregue un nuevo elemento a una lista cada vez que se hace clic
- Usa `addEventListener()` para todos los eventos

**Objetivo**: Responder a eventos del usuario.

---

### JS-15: Formularios y Eventos

Crea un formulario y un script que:
- Valide que los campos no estén vacíos antes de enviar
- Muestre un mensaje de error si falta algún campo
- Prevenga el envío del formulario si hay errores usando `preventDefault()`
- Muestre los datos del formulario en consola cuando sea válido
- Limpie el formulario después de enviarlo exitosamente

**Objetivo**: Manejar eventos de formularios y validación básica.

---

## Bloque 4: Proyectos Prácticos (JS-16 a JS-20)

### JS-16: Calculadora Simple

Crea una calculadora básica:
- HTML con botones para números (0-9) y operaciones (+, -, *, /, =)
- JavaScript que:
  - Capture los clics en los botones
  - Muestre los números y operaciones en un display
  - Realice el cálculo cuando se presiona "="
  - Maneje errores (división por cero, etc.)

**Objetivo**: Crear una aplicación interactiva básica.

---

### JS-17: Lista de Tareas (To-Do) Básica

Crea una lista de tareas:
- Input para agregar nuevas tareas
- Botón para agregar tarea
- Lista que muestra todas las tareas
- Cada tarea debe tener un botón para eliminarla
- Las tareas se guardan en un array
- Al agregar o eliminar, se actualiza el DOM

**Objetivo**: Crear una aplicación con CRUD básico (Create, Read, Delete).

---

### JS-18: Contador con Botones

Crea un contador:
- Muestra un número (empezando en 0)
- Botón para incrementar (+1)
- Botón para decrementar (-1)
- Botón para resetear (volver a 0)
- El número no puede ser negativo
- Muestra el número en un elemento grande y visible

**Objetivo**: Manejar estado y actualizar la UI.

---

### JS-19: Validación de Formulario Avanzada

Crea un formulario de registro con validación:
- Campo nombre: mínimo 3 caracteres
- Campo email: formato válido de email
- Campo contraseña: mínimo 8 caracteres, debe contener número
- Campo confirmar contraseña: debe coincidir con contraseña
- Muestra mensajes de error en tiempo real
- Solo permite enviar si todos los campos son válidos

**Objetivo**: Validación de formularios en tiempo real.

---

### JS-20: Proyecto Final - Aplicación Interactiva

Crea una aplicación más compleja (elige una):
- **Galería de imágenes**: Click en miniatura muestra imagen grande, botones anterior/siguiente
- **Quiz interactivo**: Preguntas con opciones múltiples, muestra puntuación al final
- **Reloj digital**: Muestra hora actual, actualiza cada segundo
- **Generador de contraseñas**: Input para longitud, genera contraseña aleatoria
- **Convertidor de unidades**: Convierte entre diferentes unidades (temperatura, longitud, etc.)

**Objetivo**: Integrar todos los conceptos aprendidos en un proyecto completo.

---

## Consejos para Resolver los Ejercicios

1. **Usa la consola**: `console.log()` es tu mejor amigo para depurar
2. **Lee los errores**: Los mensajes de error te dicen qué está mal
3. **Divide el problema**: Resuelve paso a paso, no todo de una vez
4. **Comenta tu código**: Explica la lógica compleja
5. **Prueba casos extremos**: ¿Qué pasa si el usuario ingresa datos inválidos?
6. **Usa funciones**: Divide tu código en funciones reutilizables
7. **Nombres descriptivos**: `calcularTotal` es mejor que `calc`
8. **Valida inputs**: Siempre verifica que los datos sean válidos

---

**Ejercicios anteriores**: 
- [Ejercicios HTML](01-ejercicios-html.md)
- [Ejercicios CSS](02-ejercicios-css.md)
- [Ejercicios HTML + CSS](03-ejercicios-html-css.md)

**Siguientes ejercicios**: [Ejercicios de Integración](05-ejercicios-integracion.md)

**Ver soluciones**: [Soluciones](soluciones.md)



