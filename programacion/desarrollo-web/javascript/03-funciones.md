# Funciones en JavaScript

Las funciones son bloques de código reutilizables que realizan una tarea específica. Son una parte fundamental de la programación en JavaScript, permitiendo organizar el código, hacerlo más modular y evitar la repetición.

## Declaración y Llamada de Funciones

### 1. Declaración de Función (Function Declaration)

Es la forma más común de definir una función.

```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Llamar a la función
saludar("Juan"); // Salida: Hola, Juan!
saludar("María"); // Salida: Hola, María!
```

-   **Hoisting:** Las declaraciones de función son "hoisted", lo que significa que pueden ser llamadas antes de ser definidas en el código.

### 2. Expresión de Función (Function Expression)

Una función puede ser creada y asignada a una variable.

```javascript
const sumar = function(a, b) {
    return a + b;
};

// Llamar a la función
let resultado = sumar(5, 3);
console.log(resultado); // Salida: 8
```

-   **No Hoisting:** Las expresiones de función no son hoisted en su totalidad, lo que significa que no puedes llamar a `sumar` antes de la línea donde se define.

### 3. Funciones Flecha (Arrow Functions - ES6)

Una sintaxis más concisa para escribir expresiones de función, especialmente útil para funciones anónimas y callbacks.

```javascript
const multiplicar = (a, b) => {
    return a * b;
};

// Si la función tiene una sola expresión, puedes omitir las llaves y `return`
const duplicar = numero => numero * 2; // Paréntesis del argumento también son opcionales si hay solo uno

console.log(multiplicar(4, 2)); // Salida: 8
console.log(duplicar(7));      // Salida: 14
```

-   **Contexto `this`:** Las funciones flecha no tienen su propio `this`; heredan el `this` de su contexto envolvente. Esto es una diferencia clave con las funciones tradicionales.

## Parámetros y Argumentos

-   **Parámetros:** Los nombres que se listan en la definición de la función (`nombre`, `a`, `b` en los ejemplos anteriores).
-   **Argumentos:** Los valores reales que se pasan a la función cuando se llama (`"Juan"`, `5`, `3`).

### Parámetros por Defecto (Default Parameters - ES6)

Puedes asignar un valor por defecto a los parámetros de una función.

```javascript
function saludarPersonalizado(nombre = "Invitado", mensaje = "Bienvenido") {
    console.log(`${mensaje}, ${nombre}!`);
}

saludarPersonalizado("Ana");         // Salida: Bienvenido, Ana!
saludarPersonalizado();              // Salida: Bienvenido, Invitado!
saludarPersonalizado("Pedro", "Hola"); // Salida: Hola, Pedro!
```

## Valor de Retorno (Return Value)

Las funciones pueden devolver un valor utilizando la palabra clave `return`. Si una función no tiene una declaración `return` explícita, o si tiene un `return` sin un valor, devolverá `undefined`.

```javascript
function crearMensaje(usuario) {
    if (usuario) {
        return `Hola, ${usuario}.`;
    } else {
        return "Hola, usuario desconocido.";
    }
}

let mensaje1 = crearMensaje("Luis");
console.log(mensaje1); // Salida: Hola, Luis.

let mensaje2 = crearMensaje();
console.log(mensaje2); // Salida: Hola, usuario desconocido.
```

## Funciones como Ciudadanos de Primera Clase (First-Class Citizens)

En JavaScript, las funciones son "ciudadanos de primera clase", lo que significa que pueden:
-   Ser asignadas a variables.
-   Ser pasadas como argumentos a otras funciones (callbacks).
-   Ser devueltas como resultado de otras funciones.

```javascript
// Función que recibe otra función como argumento (callback)
function ejecutarOperacion(operacion, num1, num2) {
    return operacion(num1, num2);
}

const resta = (a, b) => a - b;

let resultadoResta = ejecutarOperacion(resta, 10, 4);
console.log(resultadoResta); // Salida: 6
```

## Ámbito (Scope) de las Funciones

El ámbito determina la accesibilidad de las variables.

-   **Ámbito Global:** Variables declaradas fuera de cualquier función. Son accesibles desde cualquier parte del código.
-   **Ámbito de Función (Function Scope):** Variables declaradas con `var` dentro de una función. Solo son accesibles dentro de esa función.
-   **Ámbito de Bloque (Block Scope):** Variables declaradas con `let` o `const` dentro de cualquier bloque `{}` (como un `if` o `for`). Solo son accesibles dentro de ese bloque.

Las funciones son los bloques de construcción fundamentales de JavaScript. Dominarlas te permitirá escribir código más limpio, modular y eficiente. Con ellas, puedes encapsular lógica, manejar eventos y crear aplicaciones web dinámicas y reactivas.