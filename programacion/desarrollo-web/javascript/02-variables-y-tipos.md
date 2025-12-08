# Variables y Tipos de Datos en JavaScript

Las variables son contenedores para almacenar datos. En JavaScript, puedes declarar variables utilizando las palabras clave `var`, `let` y `const`. Cada una tiene sus propias características en cuanto a ámbito y reasignación.

## Declaración de Variables

### `var` (Antiguo, no recomendado para código moderno)

-   Tiene ámbito de función (function scope).
-   Puede ser redeclarada y reasignada.
-   Sufre de *hoisting*.

```javascript
var miVariableAntigua = "Hola";
miVariableAntigua = "Adiós"; // Reasignación
var miVariableAntigua = "Nuevo saludo"; // Redeclaración (posible fuente de errores)

function ejemploVar() {
    var x = 10;
    if (true) {
        var x = 20; // Esto redeclara la misma variable x
        console.log(x); // 20
    }
    console.log(x); // 20 (ámbito de función)
}
ejemploVar();
```

### `let` (Recomendado para variables que pueden cambiar)

-   Tiene ámbito de bloque (block scope).
-   Puede ser reasignada, pero no redeclarada en el mismo ámbito.
-   Sufre de *hoisting*, pero a una "zona temporal muerta".

```javascript
let miNumero = 5;
miNumero = 10; // Reasignación
// let miNumero = 15; // Error: Identifier 'miNumero' has already been declared

function ejemploLet() {
    let y = 10;
    if (true) {
        let y = 20; // Esto declara una nueva variable y dentro del bloque if
        console.log(y); // 20
    }
    console.log(y); // 10 (ámbito de bloque)
}
ejemploLet();
```

### `const` (Recomendado para constantes y variables que no deben cambiar)

-   Tiene ámbito de bloque (block scope).
-   No puede ser reasignada ni redeclarada después de su inicialización.
-   Sufre de *hoisting*, pero a una "zona temporal muerta".
-   **Importante:** Para objetos y arrays, `const` solo garantiza que la referencia al objeto/array no cambiará, no el contenido del objeto/array en sí.

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable.

const miObjeto = { nombre: "Juan" };
miObjeto.nombre = "Pedro"; // Esto es permitido
// miObjeto = { nombre: "Ana" }; // Error: Assignment to constant variable.

const miArray = [1, 2, 3];
miArray.push(4); // Esto es permitido
// miArray = [5, 6]; // Error: Assignment to constant variable.
```

## Tipos de Datos en JavaScript

JavaScript tiene varios tipos de datos. Se dividen en dos categorías principales: Primitivos y No Primitivos (u Objetos).

### Tipos de Datos Primitivos

Son datos inmutables y no tienen métodos.

1.  **`String` (Cadena de texto):** Representa secuencias de caracteres.
    ```javascript
    let nombre = "Alice";
    let saludo = 'Hola, ' + nombre + '!';
    let plantilla = `El nombre es ${nombre}.`; // Template literals (ES6)
    ```

2.  **`Number` (Número):** Representa números enteros y de punto flotante.
    ```javascript
    let edad = 30;
    let precio = 99.99;
    let infinito = Infinity;
    let noEsNumero = NaN; // Not-a-Number
    ```

3.  **`Boolean` (Booleano):** Representa un valor lógico: `true` o `false`.
    ```javascript
    let esActivo = true;
    let tienePermiso = false;
    ```

4.  **`Undefined` (Indefinido):** Indica que una variable ha sido declarada pero no se le ha asignado un valor.
    ```javascript
    let miVariable;
    console.log(miVariable); // undefined
    ```

5.  **`Null` (Nulo):** Indica la ausencia intencionada de cualquier valor u objeto.
    ```javascript
    let datos = null;
    ```

6.  **`Symbol` (Símbolo - ES6):** Un valor único e inmutable que puede ser utilizado como identificador de propiedades de objetos.
    ```javascript
    const id = Symbol('id');
    const otroId = Symbol('id');
    console.log(id === otroId); // false
    ```

7.  **`BigInt` (ES2020):** Permite representar números enteros arbitrariamente grandes.
    ```javascript
    const numeroGrande = 9007199254740991n; // Añadir 'n' al final
    ```

### Tipos de Datos No Primitivos (Objetos)

Son datos mutables y pueden tener propiedades y métodos.

1.  **`Object` (Objeto):** Una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor.
    ```javascript
    let persona = {
        nombre: "Carlos",
        apellido: "García",
        edad: 25,
        saludar: function() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    };
    console.log(persona.nombre); // "Carlos"
    persona.saludar(); // "Hola, soy Carlos"
    ```

2.  **`Array` (Arreglo/Matriz):** Un tipo especial de objeto para almacenar colecciones ordenadas de valores.
    ```javascript
    let frutas = ["Manzana", "Banana", "Cereza"];
    console.log(frutas[0]); // "Manzana"
    frutas.push("Durazno");
    ```

3.  **`Function` (Función):** Un tipo de objeto que puede ser invocado.
    ```javascript
    function sumar(a, b) {
        return a + b;
    }
    let resultado = sumar(5, 3); // 8
    ```

### Comprobación de Tipos

Puedes usar el operador `typeof` para verificar el tipo de una variable (con algunas peculiaridades, como `typeof null` que devuelve `"object"`).

```javascript
console.log(typeof "Hola");       // "string"
console.log(typeof 123);          // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (es una peculiaridad histórica de JS)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```

Entender las variables y los tipos de datos es fundamental para escribir cualquier programa en JavaScript. Es el primer paso para manipular y dar lógica a tu código.