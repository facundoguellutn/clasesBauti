# 10 - Trabajar con Carpetas en Visual Studio Code

## ¿Por qué trabajar con carpetas?

Cuando programas, normalmente trabajas con **múltiples archivos** organizados en **carpetas**. VS Code está diseñado para trabajar con proyectos completos, no solo archivos individuales.

### Ventajas de abrir una carpeta:

- ✅ Ver todos tus archivos organizados
- ✅ Navegar fácilmente entre archivos
- ✅ Buscar en todos los archivos del proyecto
- ✅ Usar control de versiones (Git) más fácilmente
- ✅ Configurar el proyecto una sola vez

## Abrir una carpeta

### Método 1: Desde el menú

1. Ve a **File** → **Open Folder...** (Abrir carpeta)
   - **Atajo**: `Ctrl + K` luego `Ctrl + O` (Windows/Linux) o `Cmd + K` luego `Cmd + O` (Mac)
2. Navega hasta la carpeta que quieres abrir
3. Selecciona la carpeta y haz clic en "Select Folder" (Seleccionar carpeta)

### Método 2: Arrastrar y soltar

1. Abre el explorador de archivos de tu sistema operativo
2. Encuentra la carpeta que quieres abrir
3. Arrastra la carpeta y suéltala en la ventana de VS Code

### Método 3: Desde la terminal

1. Abre la terminal integrada (`Ctrl + Ñ`)
2. Navega a la carpeta que quieres abrir:
   ```bash
   cd ruta/a/tu/carpeta
   ```
3. Escribe: `code .`
4. El punto (`.`) significa "la carpeta actual"

## El explorador de archivos

Cuando abres una carpeta, verás el **Explorador** en la barra lateral izquierda (icono 📁).

### Partes del explorador:

- **Nombre de la carpeta**: Aparece en la parte superior
- **Archivos y subcarpetas**: Listados jerárquicamente
- **Iconos**: Diferentes iconos para diferentes tipos de archivos

### Navegar en el explorador:

- **Expandir carpeta**: Haz clic en la flecha ▶️ o haz doble clic en la carpeta
- **Contraer carpeta**: Haz clic en la flecha ▼
- **Abrir archivo**: Haz clic en el nombre del archivo
- **Seleccionar archivo**: Haz clic una vez
- **Abrir en nueva pestaña**: Haz doble clic

## Crear archivos y carpetas

### Crear un archivo nuevo:

1. Haz clic derecho en el explorador donde quieres crear el archivo
2. Selecciona **"New File"** (Nuevo archivo)
3. Escribe el nombre del archivo (incluyendo la extensión, ej: `archivo.js`)
4. Presiona Enter

**Atajo rápido**: Haz clic en el icono 📄 que aparece al pasar el mouse sobre una carpeta

### Crear una carpeta nueva:

1. Haz clic derecho en el explorador donde quieres crear la carpeta
2. Selecciona **"New Folder"** (Nueva carpeta)
3. Escribe el nombre de la carpeta
4. Presiona Enter

**Atajo rápido**: Haz clic en el icono 📁 que aparece al pasar el mouse sobre una carpeta

## Organizar archivos

### Mover archivos:

1. Arrastra el archivo desde el explorador
2. Suéltalo en la carpeta de destino

### Renombrar archivos/carpetas:

1. Haz clic derecho en el archivo o carpeta
2. Selecciona **"Rename"** (Renombrar)
   - **Atajo**: `F2`
3. Escribe el nuevo nombre
4. Presiona Enter

### Eliminar archivos/carpetas:

1. Haz clic derecho en el archivo o carpeta
2. Selecciona **"Delete"** (Eliminar)
3. Confirma la eliminación

**⚠️ Cuidado**: Esta acción no se puede deshacer fácilmente

## Estructura de un proyecto típico

Un proyecto de programación normalmente se organiza así:

```
mi-proyecto/
├── index.html          # Archivo principal HTML
├── styles/
│   └── main.css        # Estilos CSS
├── scripts/
│   └── app.js          # Código JavaScript
├── images/
│   └── logo.png        # Imágenes
└── README.md           # Documentación
```

### Ejemplo: Crear estructura de proyecto web

1. Abre una carpeta nueva en VS Code
2. Crea `index.html` en la raíz
3. Crea una carpeta `styles` y dentro crea `main.css`
4. Crea una carpeta `scripts` y dentro crea `app.js`
5. Crea una carpeta `images` para las imágenes

## Archivos ocultos

Algunos archivos y carpetas están ocultos por defecto (como `.git`, `.vscode`, etc.).

### Mostrar archivos ocultos:

1. Ve a **File** → **Preferences** → **Settings** (`Ctrl + ,`)
2. Busca "files.exclude"
3. Puedes ajustar qué archivos se ocultan

## Archivos importantes del proyecto

### README.md
- Archivo de documentación
- Explica qué es el proyecto y cómo usarlo
- Se muestra en GitHub y otros lugares

### .gitignore
- Lista archivos que Git debe ignorar
- Útil para control de versiones

### package.json (JavaScript/Node.js)
- Información del proyecto
- Lista dependencias (librerías que usa el proyecto)

### requirements.txt (Python)
- Lista las librerías de Python que necesita el proyecto

## Buscar en el proyecto

### Buscar en todos los archivos:

1. Presiona `Ctrl + Shift + F` (Windows/Linux) o `Cmd + Shift + F` (Mac)
2. Escribe lo que quieres buscar
3. VS Code mostrará todos los resultados en todos los archivos

### Reemplazar en todos los archivos:

1. Presiona `Ctrl + Shift + H` (Windows/Linux) o `Cmd + Shift + H` (Mac)
2. Escribe lo que quieres buscar y reemplazar
3. Escribe el reemplazo
4. Haz clic en "Replace All" (Reemplazar todo) con cuidado

## Ejemplo práctico: Crear un proyecto web simple

Vamos a crear un proyecto web completo:

1. **Crea una carpeta** llamada `mi-primera-web`

2. **Abre la carpeta en VS Code**:
   - File → Open Folder → Selecciona `mi-primera-web`

3. **Crea la estructura**:
   ```
   mi-primera-web/
   ├── index.html
   ├── css/
   │   └── estilo.css
   └── js/
       └── script.js
   ```

4. **Escribe en `index.html`**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Mi Primera Web</title>
       <link rel="stylesheet" href="css/estilo.css">
   </head>
   <body>
       <h1>¡Hola Mundo!</h1>
       <script src="js/script.js"></script>
   </body>
   </html>
   ```

5. **Escribe en `css/estilo.css`**:
   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f0f0f0;
   }
   h1 {
       color: blue;
   }
   ```

6. **Escribe en `js/script.js`**:
   ```javascript
   console.log("¡Mi primera web funciona!");
   ```

7. **Abre `index.html` en el navegador** para ver el resultado

## Tips útiles

✅ **Organiza desde el inicio**: Crea una buena estructura desde el principio
✅ **Usa nombres descriptivos**: Nombra archivos y carpetas de forma clara
✅ **Mantén la estructura simple**: No crees demasiadas carpetas anidadas
✅ **Usa el explorador**: Es más fácil que abrir archivos uno por uno
✅ **Busca en el proyecto**: Usa `Ctrl + Shift + F` para encontrar cosas rápidamente

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo buscar texto en archivos
- Cómo reemplazar texto
- Búsquedas avanzadas con expresiones regulares

---

**Próximo tema:** [11 - Buscar y Reemplazar](11-buscar-y-reemplazar.md)

