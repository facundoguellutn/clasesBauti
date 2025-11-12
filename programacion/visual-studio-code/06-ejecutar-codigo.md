# 06 - Ejecutar Código en Visual Studio Code

## ¿Qué significa "ejecutar código"?

Ejecutar código significa hacer que la computadora lea y ejecute las instrucciones que escribiste. Es como darle "play" a tu programa para ver qué hace.

## Diferentes formas de ejecutar código

Dependiendo del lenguaje de programación, hay diferentes formas de ejecutar código en VS Code.

## Método 1: Terminal integrado

El terminal integrado es la forma más común de ejecutar código.

### Abrir el terminal:

1. **Atajo**: `Ctrl + Ñ` o `` Ctrl + ` `` (backtick, la tecla arriba del Tab)
2. O ve a **Terminal** → **New Terminal** (Nuevo terminal)
3. O ve a **View** → **Terminal**

### Ejecutar código JavaScript (Node.js):

1. Asegúrate de tener Node.js instalado (descárgalo de nodejs.org)
2. Crea un archivo `hola.js`:
   ```javascript
   console.log("¡Hola desde VS Code!");
   ```
3. Abre el terminal (`Ctrl + Ñ`)
4. Escribe: `node hola.js`
5. Presiona Enter
6. Verás la salida: `¡Hola desde VS Code!`

### Ejecutar código Python:

1. Asegúrate de tener Python instalado
2. Crea un archivo `hola.py`:
   ```python
   print("¡Hola desde VS Code!")
   ```
3. Abre el terminal
4. Escribe: `python hola.py` (o `python3 hola.py` en Mac/Linux)
5. Presiona Enter
6. Verás la salida

### Ejecutar código HTML:

1. Crea un archivo `index.html`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Mi página</title>
   </head>
   <body>
       <h1>¡Hola!</h1>
   </body>
   </html>
   ```
2. Haz clic derecho en el archivo en el explorador
3. Selecciona "Open with Live Server" (si tienes la extensión) o "Reveal in File Explorer"
4. Abre el archivo con tu navegador

## Método 2: Botón "Run" (Ejecutar)

Algunos lenguajes tienen un botón de ejecutar integrado.

### Para Python:

1. Abre un archivo `.py`
2. Verás un botón ▶️ en la esquina superior derecha
3. Haz clic en el botón
4. O presiona `Ctrl + F5` (Windows/Linux) o `Cmd + F5` (Mac)

### Para JavaScript:

1. Abre un archivo `.js`
2. Haz clic derecho en el código
3. Selecciona "Run Code" (si tienes la extensión Code Runner instalada)

## Método 3: Code Runner (Extensión)

Code Runner es una extensión que permite ejecutar código con un solo clic.

### Instalar Code Runner:

1. Haz clic en el icono de extensiones (📦) en la barra lateral
2. Busca "Code Runner"
3. Haz clic en "Install" (Instalar)
4. Una vez instalado, verás un botón ▶️ arriba a la derecha del editor

### Usar Code Runner:

1. Abre cualquier archivo de código
2. Haz clic en el botón ▶️ "Run Code"
3. O presiona `Ctrl + Alt + N` (Windows/Linux) o `Ctrl + Option + N` (Mac)
4. La salida aparecerá en el panel "OUTPUT" (Salida)

## Ver la salida

### Terminal:

La salida aparece directamente en el terminal integrado.

### Panel OUTPUT:

Si usas Code Runner, la salida aparece en el panel "OUTPUT" en la parte inferior.

Para ver el panel OUTPUT:
1. Ve a **View** → **Output**
2. O presiona `Ctrl + Shift + U` (Windows/Linux) o `Cmd + Shift + U` (Mac)

## Ejemplo práctico: Calculadora simple

Vamos a crear y ejecutar una calculadora simple en Python:

1. Crea un archivo `calculadora.py`:
   ```python
   def sumar(a, b):
       return a + b

   def restar(a, b):
       return a - b

   # Usar las funciones
   numero1 = 10
   numero2 = 5

   print(f"{numero1} + {numero2} = {sumar(numero1, numero2)}")
   print(f"{numero1} - {numero2} = {restar(numero1, numero2)}")
   ```

2. Abre el terminal (`Ctrl + Ñ`)
3. Navega a la carpeta donde está el archivo (si es necesario):
   ```bash
   cd ruta/a/tu/carpeta
   ```
4. Ejecuta: `python calculadora.py`
5. Verás:
   ```
   10 + 5 = 15
   10 - 5 = 5
   ```

## Ejemplo práctico: Programa interactivo

Vamos a crear un programa que pide información al usuario:

1. Crea `saludo.py`:
   ```python
   nombre = input("¿Cuál es tu nombre? ")
   print(f"¡Hola, {nombre}! Bienvenido a VS Code.")
   ```

2. Ejecuta en el terminal: `python saludo.py`
3. El programa esperará que escribas tu nombre
4. Escribe tu nombre y presiona Enter
5. Verás el saludo personalizado

## Depuración (Debugging)

La depuración te permite ejecutar tu código paso a paso para encontrar errores.

### Iniciar depuración:

1. Coloca un "breakpoint" (punto de interrupción) haciendo clic a la izquierda del número de línea (aparece un punto rojo)
2. Presiona `F5` o haz clic en el icono de depurar (🐛) en la barra lateral
3. Selecciona el entorno (Python, Node.js, etc.)
4. Tu código se ejecutará hasta el breakpoint y se detendrá
5. Puedes ver los valores de las variables
6. Usa `F10` para avanzar línea por línea

## Solución de problemas comunes

### "No se reconoce como comando interno o externo"

**Problema**: El lenguaje no está instalado o no está en el PATH.

**Solución**:
- Instala el lenguaje (Python, Node.js, etc.)
- Reinicia VS Code después de instalar
- Verifica la instalación escribiendo `python --version` o `node --version` en el terminal

### "El archivo no se encuentra"

**Problema**: Estás ejecutando el comando desde una carpeta diferente.

**Solución**:
- Asegúrate de estar en la carpeta correcta
- Usa `cd` para cambiar de carpeta
- O usa la ruta completa: `python C:\ruta\completa\archivo.py`

### "Permiso denegado"

**Problema**: No tienes permisos para ejecutar el archivo.

**Solución**:
- En Linux/Mac, usa `chmod +x archivo.py` para dar permisos
- O ejecuta con `python archivo.py` en lugar de `./archivo.py`

## Tips útiles

✅ **Usa el terminal integrado**: Es más conveniente que abrir un terminal separado
✅ **Aprende los atajos**: `Ctrl + Ñ` para terminal, `F5` para depurar
✅ **Instala Code Runner**: Facilita ejecutar código rápidamente
✅ **Revisa la salida**: Siempre revisa el panel OUTPUT o terminal para ver resultados
✅ **Lee los mensajes de error**: Te dicen qué está mal

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo instalar extensiones útiles
- Qué extensiones son esenciales para empezar
- Cómo gestionar extensiones

---

**Próximo tema:** [07 - Extensiones Básicas](07-extensiones-basicas.md)

