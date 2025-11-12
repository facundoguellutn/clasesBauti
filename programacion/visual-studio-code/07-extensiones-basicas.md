# 07 - Extensiones Básicas para Visual Studio Code

## ¿Qué son las extensiones?

Las **extensiones** son complementos que agregan funcionalidades adicionales a VS Code. Son como "aplicaciones" que puedes instalar dentro de VS Code para hacerlo más poderoso.

## ¿Por qué usar extensiones?

- **Mejoran tu productividad**: Agregan herramientas útiles
- **Soporte para más lenguajes**: Agregan resaltado de sintaxis y autocompletado
- **Integración con herramientas**: Conectan VS Code con otras herramientas
- **Personalización**: Hacen VS Code más útil para tu trabajo específico

## Cómo instalar extensiones

### Método 1: Desde el panel de extensiones

1. Haz clic en el icono de extensiones (📦) en la barra lateral izquierda
   - **Atajo**: `Ctrl + Shift + X` (Windows/Linux) o `Cmd + Shift + X` (Mac)
2. En el cuadro de búsqueda, escribe el nombre de la extensión
3. Haz clic en "Install" (Instalar) en la extensión que quieras
4. Espera a que se instale
5. Algunas extensiones requieren reiniciar VS Code

### Método 2: Desde el marketplace web

1. Ve a https://marketplace.visualstudio.com/vscode
2. Busca la extensión que quieras
3. Haz clic en "Install" (Instalar)
4. Se abrirá VS Code y se instalará automáticamente

## Extensiones esenciales para principiantes

### 1. Python (Microsoft)

**Para qué sirve**: Soporte completo para Python
- Resaltado de sintaxis
- Autocompletado inteligente
- Depuración
- Linting (detección de errores)

**Cómo instalarla**:
1. Busca "Python" en extensiones
2. Instala la extensión oficial de Microsoft (tiene el logo de Microsoft)

### 2. JavaScript (ES6) Code Snippets

**Para qué sirve**: Snippets (fragmentos) de código JavaScript
- Escribe `for` y presiona Tab para generar un bucle for
- Escribe `clg` y presiona Tab para generar `console.log()`

**Cómo instalarla**:
1. Busca "JavaScript (ES6) code snippets"
2. Instala la extensión de charalampos karypidis

### 3. Live Server

**Para qué sirve**: Abre páginas HTML en el navegador con actualización automática
- Haz clic derecho en un archivo HTML
- Selecciona "Open with Live Server"
- El navegador se abre y se actualiza automáticamente cuando guardas cambios

**Cómo instalarla**:
1. Busca "Live Server"
2. Instala la extensión de Ritwick Dey

### 4. Code Runner

**Para qué sirve**: Ejecuta código con un solo clic
- Botón ▶️ para ejecutar código
- Soporta muchos lenguajes

**Cómo instalarla**:
1. Busca "Code Runner"
2. Instala la extensión de Jun Han

### 5. Prettier - Code formatter

**Para qué sirve**: Formatea (organiza) tu código automáticamente
- Hace que tu código se vea consistente
- Formatea al guardar (si lo configuras)

**Cómo instalarla**:
1. Busca "Prettier - Code formatter"
2. Instala la extensión oficial de Prettier

### 6. GitLens

**Para qué sirve**: Mejora la integración con Git
- Muestra quién escribió cada línea de código
- Historial de cambios
- Comparación de archivos

**Cómo instalarla**:
1. Busca "GitLens"
2. Instala la extensión de GitKraken

## Extensiones por lenguaje

### Para desarrollo web:

- **HTML CSS Support**: Autocompletado para CSS en archivos HTML
- **Auto Rename Tag**: Renombra automáticamente etiquetas HTML de apertura y cierre
- **Color Highlight**: Resalta colores en CSS

### Para Python:

- **Python**: Ya mencionada arriba (esencial)
- **Pylint**: Detección de errores y estilo de código
- **Python Docstring Generator**: Genera documentación automáticamente

### Para JavaScript:

- **ESLint**: Encuentra y corrige errores en JavaScript
- **JavaScript (ES6) code snippets**: Ya mencionada arriba
- **npm Intellisense**: Autocompletado para módulos npm

## Cómo gestionar extensiones

### Ver extensiones instaladas:

1. Haz clic en el icono de extensiones (📦)
2. En la parte superior, verás "INSTALLED" (Instaladas)
3. Aquí verás todas las extensiones que tienes instaladas

### Deshabilitar una extensión:

1. Ve a extensiones instaladas
2. Encuentra la extensión
3. Haz clic en el engranaje ⚙️
4. Selecciona "Disable" (Deshabilitar)

### Desinstalar una extensión:

1. Ve a extensiones instaladas
2. Encuentra la extensión
3. Haz clic en "Uninstall" (Desinstalar)

### Actualizar extensiones:

1. VS Code actualiza extensiones automáticamente
2. Verás un número en el icono de extensiones si hay actualizaciones
3. Haz clic en "Update All" (Actualizar todo) o actualiza individualmente

## Configurar extensiones

Algunas extensiones tienen configuraciones que puedes ajustar:

1. Ve a **File** → **Preferences** → **Settings** (`Ctrl + ,`)
2. Busca el nombre de la extensión
3. Ajusta las opciones según tus preferencias

**Ejemplo: Configurar Prettier para formatear al guardar**:
1. Busca "format on save" en Settings
2. Marca la casilla
3. Busca "default formatter"
4. Selecciona "Prettier"

## Recomendaciones por tipo de proyecto

### Si estás aprendiendo programación:

✅ Python (Microsoft)
✅ Code Runner
✅ Prettier

### Si estás haciendo desarrollo web:

✅ Live Server
✅ HTML CSS Support
✅ Auto Rename Tag
✅ Prettier

### Si estás trabajando con JavaScript:

✅ ESLint
✅ JavaScript (ES6) code snippets
✅ npm Intellisense

## Tips útiles

✅ **No instales demasiadas extensiones**: Pueden hacer VS Code más lento
✅ **Lee las descripciones**: Asegúrate de que la extensión haga lo que necesitas
✅ **Revisa las calificaciones**: Las extensiones con más estrellas suelen ser mejores
✅ **Actualiza regularmente**: Las actualizaciones traen mejoras y correcciones
✅ **Desinstala lo que no uses**: Mantén VS Code limpio

## Ejemplo práctico: Instalar Python extension

1. Haz clic en el icono de extensiones (📦)
2. Busca "Python"
3. Encuentra la extensión oficial de Microsoft (tiene muchas descargas)
4. Haz clic en "Install" (Instalar)
5. Espera a que se instale
6. Crea un archivo `test.py`
7. Observa cómo VS Code ahora reconoce Python y ofrece autocompletado

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo usar el terminal integrado
- Comandos básicos del terminal
- Para qué sirve el terminal

---

**Próximo tema:** [08 - Terminal Básico](08-terminal-basico.md)

