# 05 - Escribir Código en Visual Studio Code

## Resaltado de sintaxis

Una de las características más útiles de VS Code es el **resaltado de sintaxis**. Esto significa que VS Code colorea diferentes partes de tu código para que sea más fácil de leer y entender.

### Ejemplo sin resaltado:
```
function saludar(nombre) { return "Hola " + nombre; }
```

### Ejemplo con resaltado:
```javascript
function saludar(nombre) {
    return "Hola " + nombre;
}
```

VS Code automáticamente:
- Colorea las palabras clave (como `function`, `return`)
- Colorea los strings (texto entre comillas)
- Colorea los números
- Colorea los comentarios

## Autocompletado inteligente

VS Code te ayuda a escribir código más rápido sugiriendo palabras mientras escribes.

### Cómo funciona:

1. Empieza a escribir una palabra
2. VS Code muestra sugerencias en un menú desplegable
3. Usa las flechas ↑↓ para navegar
4. Presiona `Enter` o `Tab` para aceptar la sugerencia

**Ejemplo:**
- Escribe `cons` y VS Code sugerirá `console`
- Escribe `fun` y VS Code sugerirá `function`

## IntelliSense

IntelliSense es el sistema de autocompletado avanzado de VS Code. No solo sugiere palabras, sino que también:

- Muestra información sobre funciones (qué parámetros necesitan)
- Muestra documentación mientras escribes
- Sugiere métodos y propiedades disponibles

**Ejemplo:**
Si escribes `console.`, VS Code mostrará todas las opciones disponibles:
- `console.log()`
- `console.error()`
- `console.warn()`
- etc.

## Formateo automático

VS Code puede formatear (organizar) tu código automáticamente.

### Formatear un archivo:

1. Abre un archivo con código
2. Presiona `Shift + Alt + F` (Windows/Linux) o `Shift + Option + F` (Mac)
3. VS Code organizará automáticamente:
   - Indentación
   - Espacios
   - Saltos de línea

### Formatear al guardar:

Puedes configurar VS Code para formatear automáticamente cada vez que guardas:
1. Ve a **File** → **Preferences** → **Settings** (o `Ctrl + ,`)
2. Busca "format on save"
3. Marca la casilla "Editor: Format On Save"

## Comentarios

Los comentarios son notas en tu código que no se ejecutan. Son muy útiles para explicar qué hace tu código.

### JavaScript/HTML:
```javascript
// Este es un comentario de una línea

/* Este es un comentario
   de múltiples líneas */
```

### Python:
```python
# Este es un comentario de una línea

"""
Este es un comentario
de múltiples líneas
"""
```

### Atajos para comentarios:

- **Comentar/descomentar línea**: `Ctrl + /` (Windows/Linux) o `Cmd + /` (Mac)
- Selecciona varias líneas y presiona el atajo para comentarlas todas

## Números de línea y navegación

### Ver números de línea:

Los números de línea aparecen a la izquierda del editor. Son útiles para:
- Encontrar errores (los mensajes de error mencionan números de línea)
- Referenciar partes específicas del código

### Ir a una línea específica:

1. Presiona `Ctrl + G` (Windows/Linux) o `Cmd + G` (Mac)
2. Escribe el número de línea
3. Presiona Enter

## Selección múltiple

Puedes editar múltiples lugares a la vez:

### Método 1: Selección múltiple con Ctrl/Cmd

1. Selecciona una palabra
2. Presiona `Ctrl + D` (Windows/Linux) o `Cmd + D` (Mac) para seleccionar la siguiente ocurrencia
3. Repite para seleccionar más
4. Escribe para cambiar todas a la vez

### Método 2: Cursor múltiple

1. Presiona `Alt + Click` (Windows/Linux) o `Option + Click` (Mac) en diferentes lugares
2. Cada clic agrega un cursor
3. Escribe y todos los cursores escribirán al mismo tiempo

## Ejemplo práctico: Escribir código JavaScript

Vamos a crear un archivo JavaScript simple:

1. Crea un nuevo archivo (`Ctrl + N`)
2. Guarda como `saludo.js` (importante: la extensión `.js` le dice a VS Code que es JavaScript)
3. Escribe este código:

```javascript
// Función para saludar
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Usar la función
let mensaje = saludar("Mundo");
console.log(mensaje);
```

Observa cómo VS Code:
- Colorea `function`, `return`, `let`, `console` de manera diferente
- Sugiere `console` cuando escribes `cons`
- Muestra información cuando pasas el mouse sobre `saludar`

## Ejemplo práctico: Escribir código Python

1. Crea un nuevo archivo
2. Guarda como `calculadora.py`
3. Escribe:

```python
# Calculadora simple
def sumar(a, b):
    """Suma dos números"""
    return a + b

# Usar la función
resultado = sumar(5, 3)
print(f"El resultado es: {resultado}")
```

## Errores y advertencias

VS Code detecta errores mientras escribes:

- **Línea roja ondulada**: Error (el código no funcionará)
- **Línea amarilla ondulada**: Advertencia (podría haber un problema)

**Ejemplo de error:**
```javascript
let nombre = "Juan"
console.log(nombre  // Falta el paréntesis de cierre
```

VS Code mostrará una línea roja indicando el error.

## Tips para escribir código eficientemente

✅ **Usa el autocompletado**: Acepta sugerencias con Tab o Enter
✅ **Aprende los atajos**: Son más rápidos que el mouse
✅ **Formatea tu código**: Mantén el código organizado
✅ **Usa comentarios**: Explica código complejo
✅ **Guarda frecuentemente**: `Ctrl + S` o `Cmd + S`

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo ejecutar código desde VS Code
- Cómo ver la salida de tu programa
- Diferentes formas de ejecutar código

---

**Próximo tema:** [06 - Ejecutar Código](06-ejecutar-codigo.md)

