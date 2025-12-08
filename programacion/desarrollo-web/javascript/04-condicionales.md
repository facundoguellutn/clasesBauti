# Estructuras Condicionales en JavaScript

Las estructuras condicionales permiten ejecutar diferentes bloques de código basándose en si una condición es verdadera o falsa. Son fundamentales para controlar el flujo de un programa.

## 1. `if`, `else if`, `else`

La estructura `if` es la más básica y común para la toma de decisiones.

```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad.");
} else {
    console.log("Es menor de edad.");
}

let puntuacion = 75;

if (puntuacion >= 90) {
    console.log("Excelente");
} else if (puntuacion >= 70) {
    console.log("Bueno");
} else if (puntuacion >= 50) {
    console.log("Regular");
} else {
    console.log("Necesita mejorar");
}
```

### Operadores de Comparación Comunes:

-   `==` (igualdad débil, compara valores tras coerción de tipo)
-   `===` (igualdad estricta, compara valores y tipos)
-   `!=` (desigualdad débil)
-   `!==` (desigualdad estricta)
-   `<` (menor que)
-   `<=` (menor o igual que)
-   `>` (mayor que)
-   `>=` (mayor o igual que)

### Operadores Lógicos Comunes:

-   `&&` (AND lógico): Verdadero si ambas condiciones son verdaderas.
-   `||` (OR lógico): Verdadero si al menos una condición es verdadera.
-   `!` (NOT lógico): Invierte el valor booleano.

```javascript
let tieneCarnet = true;
let tieneDinero = false;

if (tieneCarnet && tieneDinero) {
    console.log("Puede conducir y comprar gasolina.");
} else if (tieneCarnet || tieneDinero) {
    console.log("Puede hacer una de las dos cosas.");
} else {
    console.log("No puede hacer ninguna.");
}
```

## 2. Operador Ternario (Conditional Ternary Operator)

Es una forma concisa de escribir una estructura `if-else` simple, ideal para asignaciones condicionales.

```javascript
// Sintaxis: condicion ? expresionSiVerdadero : expresionSiFalso;

let esMiembro = true;
let precio = esMiembro ? 10 : 20;
console.log(`El precio es: $${precio}`); // Salida: El precio es: $10

let estado = (edad >= 18) ? "Mayor" : "Menor";
console.log(estado); // Salida: Mayor
```

## 3. `switch`

La declaración `switch` se utiliza para realizar diferentes acciones basadas en diferentes condiciones. Es útil cuando tienes múltiples caminos de ejecución basados en el valor de una única expresión.

```javascript
let diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
    case "Lunes":
        console.log("Hoy es el inicio de la semana laboral.");
        break; // Importante para salir del switch
    case "Viernes":
        console.log("Hoy es el último día de la semana laboral.");
        break;
    case "Sábado":
    case "Domingo": // Múltiples casos para el mismo bloque de código
        console.log("Es fin de semana, ¡a disfrutar!");
        break;
    default:
        console.log("No es un día reconocido.");
}
```

-   **`break`:** Es crucial usar `break` al final de cada `case` para evitar el "fall-through" (ejecución de los casos siguientes).
-   **`default`:** Define el código que se ejecutará si ninguno de los `case` coincide.

## Valores `truthy` y `falsy`

En JavaScript, ciertos valores se consideran "falsy" (evalúan a `false` en un contexto booleano) y otros "truthy" (evalúan a `true`).

### Valores `falsy`:
-   `false`
-   `0` (el número cero)
-   `""` (cadena vacía)
-   `null`
-   `undefined`
-   `NaN` (Not-a-Number)

### Todos los demás valores son `truthy`.

```javascript
let miVariable = "Hola";

if (miVariable) { // "Hola" es truthy, la condición es verdadera
    console.log("La variable tiene un valor truthy.");
}

let otroValor = 0;

if (otroValor) { // 0 es falsy, la condición es falsa
    console.log("Esto no se ejecutará.");
} else {
    console.log("La variable tiene un valor falsy."); // Salida: La variable tiene un valor falsy.
}
```

Entender y utilizar correctamente las estructuras condicionales es esencial para escribir lógica de programa que reaccione de manera inteligente a diferentes situaciones y entradas de datos. Son los bloques de construcción para crear aplicaciones dinámicas y adaptables.