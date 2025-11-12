# 12 - Configuración Básica de Visual Studio Code

## ¿Por qué configurar VS Code?

Personalizar VS Code te permite:
- **Hacerlo más cómodo**: Ajustar el tamaño de fuente, colores, etc.
- **Mejorar tu productividad**: Configurar atajos y comportamientos
- **Adaptarlo a tu estilo**: Cada programador tiene preferencias diferentes

## Abrir la configuración

### Método 1: Atajo de teclado

- **Windows/Linux**: `Ctrl + ,`
- **Mac**: `Cmd + ,`

### Método 2: Menú

1. Ve a **File** → **Preferences** → **Settings** (Configuración)

### Método 3: Paleta de comandos

1. Presiona `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac)
2. Escribe "Preferences: Open Settings"
3. Presiona Enter

## Tipos de configuración

VS Code tiene dos tipos de configuración:

### Configuración de usuario (User Settings)
- Se aplica a todos tus proyectos
- Personal para ti

### Configuración de workspace (Workspace Settings)
- Se aplica solo al proyecto actual
- Útil para configuraciones específicas del proyecto

## Configuraciones básicas importantes

### 1. Tamaño de fuente

**Cómo cambiarlo**:
1. Abre Settings (`Ctrl + ,`)
2. Busca "font size"
3. Cambia "Editor: Font Size" (tamaño de fuente del editor)
4. El valor por defecto es 14, puedes cambiarlo a 12, 16, 18, etc.

**También puedes**:
- Usar `Ctrl + +` para aumentar el zoom
- Usar `Ctrl + -` para disminuir el zoom
- Usar `Ctrl + 0` para resetear el zoom

### 2. Tipo de fuente

**Cómo cambiarlo**:
1. Busca "font family" en Settings
2. Cambia "Editor: Font Family"
3. Algunas fuentes populares para programar:
   - `Consolas` (Windows)
   - `Monaco` (Mac)
   - `'Courier New', monospace`
   - `'Fira Code', 'Courier New', monospace` (si tienes Fira Code instalada)

### 3. Tema de color

**Cómo cambiarlo**:
1. Presiona `Ctrl + K` luego `Ctrl + T` (o `Cmd + K` luego `Cmd + T` en Mac)
2. O ve a **File** → **Preferences** → **Color Theme**
3. Selecciona un tema:
   - **Dark+** (por defecto, oscuro)
   - **Light+** (claro)
   - **Monokai** (oscuro, popular)
   - **Solarized Dark/Light**
   - Y muchos más...

### 4. Formatear al guardar

**Cómo activarlo**:
1. Busca "format on save" en Settings
2. Marca la casilla "Editor: Format On Save"
3. Ahora cada vez que guardes, VS Code formateará tu código automáticamente

### 5. Espacios vs Tabs

**Cómo configurarlo**:
1. Busca "insert spaces" en Settings
2. "Editor: Insert Spaces" - marca si quieres espacios, desmarca si quieres tabs
3. "Editor: Tab Size" - cuántos espacios por tab (normalmente 2 o 4)

**Recomendación**: Usa espacios, tamaño 2 o 4 (depende del lenguaje)

### 6. Mostrar números de línea

**Cómo activarlo**:
1. Busca "line numbers" en Settings
2. "Editor: Line Numbers" - selecciona "on" para siempre mostrar, "off" para ocultar, o "relative" para números relativos

### 7. Word wrap (ajuste de línea)

**Cómo activarlo**:
1. Busca "word wrap" en Settings
2. "Editor: Word Wrap" - selecciona "on" para que las líneas largas se ajusten automáticamente

### 8. Minimap

El minimap es el pequeño mapa del código a la derecha del editor.

**Cómo configurarlo**:
1. Busca "minimap" en Settings
2. "Editor: Minimap Enabled" - marca/desmarca para mostrar/ocultar
3. "Editor: Minimap Size" - pequeño, mediano, grande

### 9. Auto-guardado

**Cómo activarlo**:
1. Busca "auto save" en Settings
2. "Files: Auto Save" - selecciona:
   - **off**: No guarda automáticamente
   - **afterDelay**: Guarda después de un tiempo sin escribir
   - **onFocusChange**: Guarda cuando cambias de archivo
   - **onWindowChange**: Guarda cuando cambias de ventana

**Recomendación**: "afterDelay" con 1000ms (1 segundo)

### 10. Eliminar espacios en blanco al final

**Cómo activarlo**:
1. Busca "trim trailing whitespace" en Settings
2. "Files: Trim Trailing Whitespace" - marca para eliminar espacios al final de las líneas al guardar

## Configuración del terminal

### Tamaño de fuente del terminal:

1. Busca "terminal font size" en Settings
2. Cambia "Terminal: Integrated Font Size"

### Tipo de terminal por defecto:

1. Busca "terminal integrated default profile" en Settings
2. Selecciona tu terminal preferido (PowerShell, bash, etc.)

## Configuración de extensiones

Algunas extensiones tienen sus propias configuraciones:

1. Abre Settings
2. Busca el nombre de la extensión
3. Ajusta las opciones disponibles

**Ejemplo: Configurar Prettier**:
1. Busca "prettier" en Settings
2. Puedes configurar:
   - Tamaño de indentación
   - Usar comillas simples o dobles
   - Punto y coma al final o no
   - etc.

## Configuración mediante JSON

También puedes editar la configuración directamente en JSON:

1. Presiona `Ctrl + Shift + P` (o `Cmd + Shift + P`)
2. Escribe "Preferences: Open User Settings (JSON)"
3. Edita el archivo JSON directamente

**Ejemplo de configuración JSON**:
```json
{
    "editor.fontSize": 16,
    "editor.fontFamily": "Consolas, 'Courier New', monospace",
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.wordWrap": "on",
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    "workbench.colorTheme": "Monokai"
}
```

## Configuraciones recomendadas para principiantes

Aquí hay una configuración básica recomendada:

```json
{
    // Editor
    "editor.fontSize": 14,
    "editor.lineNumbers": "on",
    "editor.wordWrap": "on",
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    
    // Archivos
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    "files.trimTrailingWhitespace": true,
    
    // Terminal
    "terminal.integrated.fontSize": 14
}
```

## Resetear configuración

Si cambias algo y quieres volver a los valores por defecto:

1. Abre Settings
2. Busca la configuración que quieres resetear
3. Haz clic derecho en el valor
4. Selecciona "Reset Setting"

## Sincronizar configuración

Puedes sincronizar tu configuración entre diferentes computadoras:

1. Instala la extensión "Settings Sync"
2. Inicia sesión con GitHub o Microsoft
3. Tu configuración se guardará en la nube
4. En otra computadora, instala Settings Sync e inicia sesión para sincronizar

## Tips útiles

✅ **Empieza con lo básico**: No necesitas configurar todo de una vez
✅ **Experimenta**: Prueba diferentes configuraciones y ve qué te gusta
✅ **Usa la búsqueda**: Settings tiene un buscador, úsalo para encontrar cosas rápidamente
✅ **Guarda tus preferencias**: Si encuentras una configuración que te gusta, anótala
✅ **No tengas miedo**: Puedes resetear cualquier configuración

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Un resumen de todo lo aprendido
- Recursos para seguir aprendiendo
- Próximos pasos recomendados

---

**Próximo tema:** [13 - Resumen](13-resumen.md)

