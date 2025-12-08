# Bucles (Loops) en JavaScript

Los bucles son estructuras de control que permiten ejecutar un bloque de código repetidamente, mientras se cumpla una condición específica. Son fundamentales para iterar sobre colecciones de datos, realizar tareas repetitivas y automatizar procesos.

## 1. Bucle `for`

El bucle `for` es el más común y versátil, ideal cuando sabes cuántas veces quieres que se repita el código.

```javascript
for (inicializacion; condicion; expresion_final) {
    // Código a ejecutar en cada iteración
}
```

-   **Inicialización:** Se ejecuta una vez al principio del bucle (ej. `let i = 0;`).
-   **Condición:** Se evalúa antes de cada iteración. Si es `true`, el bloque de código se ejecuta; si es `false`, el bucle termina.
-   **Expresión final:** Se ejecuta al final de cada iteración (ej. `i++`).

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
// Salida:
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4

let frutas = ["Manzana", "Banana", "Cereza"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Me gusta la ${frutas[i]}`);
}
// Salida:
// Me gusta la Manzana
// Me gusta la Banana
// Me gusta la Cereza
```

## 2. Bucle `while`

El bucle `while` se utiliza cuando no sabes de antemano cuántas veces se ejecutará el bucle, pero quieres que se repita mientras una condición sea verdadera.

```javascript
while (condicion) {
    // Código a ejecutar
}
```

```javascript
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++; // ¡Importante actualizar la condición para evitar bucles infinitos!
}
// Salida:
// Contador: 0
// Contador: 1
// Contador: 2
```

## 3. Bucle `do...while`

Similar al bucle `while`, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la condición se evalúa después de la primera ejecución.

```javascript
do {
    // Código a ejecutar
} while (condicion);
```

```javascript
let i = 0;
do {
    console.log("Valor de i: " + i);
    i++;
} while (i < 0); // La condición es falsa, pero se ejecuta una vez.
// Salida:
// Valor de i: 0
```

## 4. Bucles para Iterar sobre Colecciones (ES6+)

### `for...of`

Itera sobre los valores de objetos iterables (como Arrays, Strings, Mapas, Sets, etc.).

```javascript
let colores = ["rojo", "verde", "azul"];
for (const color of colores) {
    console.log(color);
}
// Salida:
// rojo
// verde
// azul

let texto = "Hola";
for (const caracter of texto) {
    console.log(caracter);
}
// Salida:
// H
// o
// l
// a
```

### `for...in`

Itera sobre las propiedades enumerables de un objeto. No es recomendable para arrays debido al orden y a la posibilidad de iterar propiedades no deseadas.

```javascript
const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
// Salida:
// nombre: Ana
// edad: 30
// ciudad: Madrid
```

### `forEach` (Método de Array)

Un método de array que ejecuta una función una vez por cada elemento del array.

```javascript
let numeros = [10, 20, 30];
numeros.forEach(function(numero, indice, array) {
    console.log(`El elemento ${indice} es ${numero}`);
});
// Salida:
// El elemento 0 es 10
// El elemento 1 es 20
// El elemento 2 es 30
```

## Control de Bucles

### `break`

Termina la ejecución del bucle actual y pasa el control a la sentencia siguiente al bucle.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Detiene el bucle cuando i es 5
    }
    console.log(i);
}
// Salida: 0, 1, 2, 3, 4
```

### `continue`

Salta la iteración actual del bucle y continúa con la siguiente iteración.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Salta la iteración cuando i es 2
    }
    console.log(i);
}
// Salida: 0, 1, 3, 4
```

Los bucles son herramientas indispensables para procesar grandes cantidades de datos y realizar tareas repetitivas en programación. Elegir el bucle adecuado depende de la lógica y la estructura de los datos con los que estés trabajando.