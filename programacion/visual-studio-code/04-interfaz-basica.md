# 04 - Interfaz Básica de Visual Studio Code

## Partes principales de VS Code

Cuando abres VS Code, verás varias áreas. Vamos a conocer cada una:

```
┌─────────────────────────────────────────────────────────┐
│  Archivo  Editar  Ver  Ir  Terminal  Ayuda  [Menús]    │ ← Barra de menú
├─────┬───────────────────────────────────────┬───────────┤
│     │                                       │           │
│  📁 │                                       │  🔍      │
│  🔍 │                                       │  ⚙️      │ ← Barra lateral
│  ⚙️ │        ÁREA DE EDICIÓN                │           │   derecha
│  🐛 │        (Aquí escribes código)         │           │
│     │                                       │           │
│     │                                       │           │
│     │                                       │           │
├─────┴───────────────────────────────────────┴───────────┤
│  Ln 1, Col 1    UTF-8    Espacios: 4    [Estado]       │ ← Barra de estado
└─────────────────────────────────────────────────────────┘
```

## 1. Barra de menú (arriba)

La barra superior contiene menús desplegables:

- **File (Archivo)**: Crear, abrir, guardar archivos
- **Edit (Editar)**: Copiar, pegar, buscar, reemplazar
- **View (Ver)**: Mostrar/ocultar diferentes paneles
- **Go (Ir)**: Navegar por el código
- **Run (Ejecutar)**: Ejecutar código
- **Terminal**: Abrir terminal integrado
- **Help (Ayuda)**: Documentación y ayuda

## 2. Barra lateral izquierda (Activity Bar)

La barra vertical con iconos en el lado izquierdo:

### 📁 Explorador (Explorer)
- Muestra los archivos y carpetas de tu proyecto
- **Atajo**: `Ctrl + Shift + E` (Windows/Linux) o `Cmd + Shift + E` (Mac)
- **Para qué sirve**: Navegar entre archivos de tu proyecto

### 🔍 Buscar (Search)
- Busca texto en todos los archivos del proyecto
- **Atajo**: `Ctrl + Shift + F` (Windows/Linux) o `Cmd + Shift + F` (Mac)
- **Para qué sirve**: Encontrar palabras o frases en múltiples archivos

### 🌿 Control de código fuente (Source Control)
- Integración con Git (control de versiones)
- **Atajo**: `Ctrl + Shift + G` (Windows/Linux) o `Cmd + Shift + G` (Mac)
- **Para qué sirve**: Ver cambios en tus archivos, hacer commits

### 🐛 Depurar (Debug)
- Herramientas para depurar código
- **Atajo**: `Ctrl + Shift + D` (Windows/Linux) o `Cmd + Shift + D` (Mac)
- **Para qué sirve**: Encontrar y corregir errores en tu código

### 📦 Extensiones (Extensions)
- Instalar y gestionar extensiones
- **Atajo**: `Ctrl + Shift + X` (Windows/Linux) o `Cmd + Shift + X` (Mac)
- **Para qué sirve**: Agregar funcionalidades a VS Code

## 3. Área de edición (centro)

Esta es la parte más importante: donde escribes tu código.

- **Pestañas**: Cada archivo abierto aparece como una pestaña arriba
- **Números de línea**: A la izquierda, muestra el número de cada línea
- **Resaltado de sintaxis**: El código se colorea según el lenguaje
- **Autocompletado**: VS Code sugiere código mientras escribes

## 4. Panel inferior

Puedes abrir diferentes paneles en la parte inferior:

### Terminal integrado
- **Atajo**: `Ctrl + Ñ` o `` Ctrl + ` `` (backtick)
- **Para qué sirve**: Ejecutar comandos sin salir de VS Code

### Problemas (Problems)
- Muestra errores y advertencias en tu código
- **Atajo**: `Ctrl + Shift + M` (Windows/Linux) o `Cmd + Shift + M` (Mac)

### Salida (Output)
- Muestra mensajes de salida de extensiones y herramientas

### Depuración (Debug Console)
- Muestra información cuando estás depurando código

## 5. Barra de estado (abajo)

La barra inferior muestra información útil:

- **Número de línea y columna**: Dónde está tu cursor (ej: "Ln 5, Col 12")
- **Tipo de archivo**: El lenguaje detectado (ej: "JavaScript", "Python")
- **Codificación**: UTF-8, etc.
- **Espacios/Tabs**: Si usas espacios o tabs
- **Notificaciones**: Iconos de notificaciones

## Mostrar/ocultar paneles

### Ocultar la barra lateral izquierda
- **Atajo**: `Ctrl + B` (Windows/Linux) o `Cmd + B` (Mac)
- O haz clic en el icono de la barra lateral

### Mostrar/ocultar panel inferior
- **Atajo**: `Ctrl + J` (Windows/Linux) o `Cmd + J` (Mac)
- O ve a **View** → **Appearance** → **Toggle Panel**

### Vista de solo editor
- **Atajo**: `Ctrl + K` luego `Z` (Windows/Linux) o `Cmd + K` luego `Z` (Mac)
- Oculta todo excepto el editor (modo zen)

## Personalizar la vista

Puedes reorganizar la interfaz:

1. Ve a **View** → **Appearance**
2. Aquí puedes:
   - Mostrar/ocultar barra de menú
   - Mostrar/ocultar barra de estado
   - Cambiar el diseño

## Ejemplo práctico: Explorar la interfaz

1. Abre VS Code
2. Haz clic en el icono 📁 (Explorador) en la barra lateral
3. Si no hay carpeta abierta, haz clic en "Open Folder" (Abrir carpeta)
4. Selecciona una carpeta de tu computadora
5. Observa cómo aparecen los archivos en el explorador
6. Haz clic en un archivo para abrirlo
7. Observa cómo cambia el área de edición

## Tips útiles

✅ **Usa atajos de teclado**: Son más rápidos que hacer clic
✅ **Oculta lo que no uses**: Más espacio para escribir código
✅ **Aprende los iconos**: Cada icono tiene un propósito
✅ **Experimenta**: No tengas miedo de hacer clic y explorar

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo escribir código eficientemente
- El resaltado de sintaxis
- El autocompletado

---

**Próximo tema:** [05 - Escribir Código](05-escribir-codigo.md)

