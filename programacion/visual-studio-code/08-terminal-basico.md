# 08 - Terminal Básico en Visual Studio Code

## ¿Qué es el terminal?

El **terminal** (también llamado "línea de comandos" o "consola") es una forma de comunicarte con tu computadora escribiendo comandos de texto en lugar de hacer clic con el mouse.

## ¿Por qué usar el terminal?

- **Más rápido**: Algunas tareas son más rápidas con comandos
- **Más poderoso**: Puedes hacer cosas que no puedes hacer con la interfaz gráfica
- **Necesario para programar**: Muchas herramientas de programación se usan desde el terminal
- **Ejecutar código**: Necesitas el terminal para ejecutar muchos programas

## Abrir el terminal en VS Code

### Método 1: Atajo de teclado

- **Windows/Linux**: `Ctrl + Ñ` o `` Ctrl + ` `` (backtick)
- **Mac**: `Ctrl + Ñ` o `` Cmd + ` ``

### Método 2: Menú

1. Ve a **Terminal** → **New Terminal** (Nuevo terminal)
2. O ve a **View** → **Terminal**

### Método 3: Panel inferior

El terminal aparece en el panel inferior de VS Code. Si no lo ves, usa uno de los métodos anteriores.

## Comandos básicos del terminal

### Navegar entre carpetas

#### Ver dónde estás:
```bash
pwd
```
Muestra la ruta de la carpeta actual (Present Working Directory)

#### Ver archivos y carpetas:
```bash
# Windows
dir

# Mac/Linux
ls
```
Lista los archivos y carpetas en la carpeta actual

#### Cambiar de carpeta:
```bash
# Windows/Mac/Linux
cd nombre-de-carpeta
```
Entra a una carpeta

```bash
# Volver a la carpeta anterior
cd ..

# Ir a la carpeta home
cd ~

# Ir a una ruta específica
cd C:\Users\TuNombre\Documents  # Windows
cd /Users/TuNombre/Documents    # Mac
cd /home/tunombre/Documents     # Linux
```

### Trabajar con archivos

#### Crear una carpeta:
```bash
# Windows/Mac/Linux
mkdir nombre-carpeta
```

#### Crear un archivo:
```bash
# Windows
type nul > archivo.txt

# Mac/Linux
touch archivo.txt
```

#### Eliminar un archivo:
```bash
# Windows
del archivo.txt

# Mac/Linux
rm archivo.txt
```

#### Eliminar una carpeta:
```bash
# Windows
rmdir nombre-carpeta

# Mac/Linux
rm -r nombre-carpeta
```

### Ejecutar programas

#### Ejecutar Python:
```bash
python archivo.py
# o
python3 archivo.py  # Mac/Linux
```

#### Ejecutar Node.js:
```bash
node archivo.js
```

#### Ejecutar otros programas:
```bash
nombre-del-programa
```

## Terminal integrado vs terminal externo

### Terminal integrado (VS Code):
- ✅ Se abre dentro de VS Code
- ✅ Más conveniente
- ✅ Puedes tener múltiples terminales
- ✅ Se integra con el editor

### Terminal externo:
- Se abre fuera de VS Code
- Útil para tareas que no están relacionadas con VS Code

## Múltiples terminales

Puedes tener varios terminales abiertos al mismo tiempo:

### Crear un nuevo terminal:
1. Haz clic en el botón **+** en la parte superior del panel de terminal
2. O presiona `Ctrl + Shift + Ñ` (Windows/Linux) o `Cmd + Shift + Ñ` (Mac)

### Cambiar entre terminales:
- Haz clic en las pestañas de terminal en la parte superior
- O usa `Ctrl + PageUp/PageDown` (Windows/Linux) o `Cmd + Option + ←/→` (Mac)

### Dividir terminal:
1. Haz clic derecho en una pestaña de terminal
2. Selecciona "Split Terminal" (Dividir terminal)
3. Ahora tienes dos terminales lado a lado

## Personalizar el terminal

### Cambiar el tipo de terminal:

1. Haz clic en el menú desplegable en la parte superior del terminal (dice "powershell", "bash", etc.)
2. Selecciona el tipo que prefieras:
   - **Windows**: PowerShell, Command Prompt, Git Bash
   - **Mac/Linux**: bash, zsh, etc.

### Cambiar el tamaño de fuente:

1. Ve a **File** → **Preferences** → **Settings** (`Ctrl + ,`)
2. Busca "terminal font size"
3. Ajusta el tamaño

## Ejemplo práctico: Navegar y ejecutar código

Vamos a practicar con el terminal:

1. **Abre el terminal** en VS Code (`Ctrl + Ñ`)

2. **Ver dónde estás**:
   ```bash
   pwd  # Mac/Linux
   cd   # Windows (muestra la ruta)
   ```

3. **Ver archivos**:
   ```bash
   dir   # Windows
   ls    # Mac/Linux
   ```

4. **Crear una carpeta de práctica**:
   ```bash
   mkdir practica-terminal
   ```

5. **Entrar a la carpeta**:
   ```bash
   cd practica-terminal
   ```

6. **Crear un archivo Python**:
   ```bash
   # Windows
   type nul > hola.py
   
   # Mac/Linux
   touch hola.py
   ```

7. **Abrir el archivo en VS Code** (desde el explorador) y escribir:
   ```python
   print("Hola desde el terminal!")
   ```

8. **Ejecutar el archivo**:
   ```bash
   python hola.py
   # o
   python3 hola.py  # Mac/Linux
   ```

9. **Verás la salida**: `Hola desde el terminal!`

## Comandos útiles adicionales

### Limpiar la pantalla:
```bash
# Windows
cls

# Mac/Linux
clear
```

### Ver historial de comandos:
- Presiona la flecha ↑ para ver comandos anteriores
- Presiona la flecha ↓ para avanzar

### Autocompletar:
- Presiona `Tab` para autocompletar nombres de archivos y carpetas

### Cancelar un comando:
- Presiona `Ctrl + C` para detener un comando en ejecución

## Tips útiles

✅ **Usa el terminal integrado**: Es más conveniente que abrir uno externo
✅ **Aprende los comandos básicos**: Te harán la vida más fácil
✅ **Usa Tab para autocompletar**: Ahorra tiempo
✅ **Usa las flechas para historial**: No necesitas escribir todo de nuevo
✅ **No tengas miedo**: El terminal es tu amigo, no tu enemigo

## Errores comunes

### "No se reconoce como comando"
- El comando no existe o está mal escrito
- Verifica la ortografía
- Asegúrate de estar en el sistema operativo correcto

### "No se puede encontrar la ruta"
- La carpeta o archivo no existe
- Verifica que estés en la carpeta correcta
- Usa `ls` o `dir` para ver qué hay disponible

### "Permiso denegado"
- No tienes permisos para ejecutar el comando
- En Mac/Linux, a veces necesitas `sudo` (con cuidado)

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Atajos de teclado esenciales
- Cómo ser más rápido usando atajos
- Los atajos más útiles para principiantes

---

**Próximo tema:** [09 - Atajos Básicos](09-atajos-basicos.md)

