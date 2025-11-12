# 14 - Preguntas Frecuentes (FAQ)

## Preguntas Generales

### ¿VS Code es gratis?

**Sí**, Visual Studio Code es completamente gratuito y de código abierto. No hay versión de pago.

### ¿Necesito internet para usar VS Code?

**No**, una vez instalado, VS Code funciona sin internet. Solo necesitas internet para:
- Instalar VS Code
- Instalar extensiones
- Actualizar VS Code

### ¿VS Code es lo mismo que Visual Studio?

**No**, son diferentes:
- **Visual Studio Code (VS Code)**: Editor de código ligero y gratuito
- **Visual Studio**: IDE completo y más pesado, principalmente para Windows

### ¿Puedo usar VS Code en Mac/Linux?

**Sí**, VS Code funciona en:
- Windows
- macOS
- Linux

## Instalación

### ¿Cómo desinstalo VS Code?

**Windows**:
1. Ve a Configuración → Aplicaciones
2. Busca "Visual Studio Code"
3. Haz clic en "Desinstalar"

**Mac**:
1. Abre la carpeta Applications
2. Arrastra VS Code a la papelera

**Linux**:
```bash
sudo apt remove code  # Ubuntu/Debian
```

### ¿Puedo tener múltiples versiones de VS Code?

**Sí**, pero no es recomendado. Mejor mantén una versión actualizada.

### VS Code no se abre, ¿qué hago?

1. Reinicia tu computadora
2. Reinstala VS Code
3. Verifica que tu sistema operativo sea compatible
4. Busca el error específico en internet

## Uso Básico

### ¿Cómo abro múltiples archivos a la vez?

Cada archivo se abre en una pestaña. Puedes:
- Hacer clic en archivos en el explorador
- Usar `Ctrl + P` para abrir archivos rápidamente
- Arrastrar archivos a VS Code

### ¿Cómo cierro todas las pestañas excepto una?

1. Haz clic derecho en la pestaña que quieres mantener
2. Selecciona "Close Others" (Cerrar otras)

### ¿Dónde se guardan mis archivos?

Los archivos se guardan donde tú elijas cuando guardas (`Ctrl + S`). VS Code no guarda automáticamente en una ubicación específica.

### ¿Cómo veo qué archivos tengo abiertos?

Las pestañas en la parte superior muestran los archivos abiertos. También puedes verlos en el menú "File" → "Open Recent".

## Código y Programación

### ¿VS Code ejecuta código automáticamente?

**No**, necesitas ejecutarlo manualmente:
- Desde el terminal: `python archivo.py` o `node archivo.js`
- Con Code Runner (extensión): Botón ▶️
- Con el botón Run (algunos lenguajes)

### ¿Por qué mi código no se colorea?

Posibles razones:
1. El archivo no tiene extensión (ej: `.js`, `.py`)
2. VS Code no reconoce el lenguaje
3. Necesitas instalar una extensión para ese lenguaje

**Solución**: Asegúrate de que el archivo tenga la extensión correcta.

### ¿Cómo cambio el lenguaje de un archivo?

1. Haz clic en el nombre del lenguaje en la barra de estado (abajo a la derecha)
2. O presiona `Ctrl + K` luego `M`
3. Selecciona el lenguaje

### ¿Qué es IntelliSense?

**IntelliSense** es el sistema de autocompletado inteligente de VS Code. Te sugiere código mientras escribes y muestra información sobre funciones.

## Extensiones

### ¿Cuántas extensiones debo instalar?

**No hay un número mágico**, pero:
- Instala solo lo que necesitas
- Demasiadas extensiones pueden hacer VS Code más lento
- Empieza con las esenciales y agrega más según necesites

### ¿Las extensiones son seguras?

**Generalmente sí**, pero:
- Instala extensiones del marketplace oficial
- Revisa las calificaciones y reseñas
- Evita extensiones con pocas descargas o malas reseñas

### ¿Cómo desinstalo una extensión?

1. Ve al panel de extensiones (`Ctrl + Shift + X`)
2. Busca la extensión instalada
3. Haz clic en "Uninstall" (Desinstalar)

### ¿Las extensiones se actualizan solas?

**Sí**, VS Code actualiza extensiones automáticamente. Verás una notificación si hay actualizaciones pendientes.

## Terminal

### ¿Puedo usar PowerShell en Windows?

**Sí**, VS Code te permite elegir el terminal:
1. Abre el terminal
2. Haz clic en el menú desplegable (arriba del terminal)
3. Selecciona PowerShell, Command Prompt, Git Bash, etc.

### ¿Cómo cambio el terminal por defecto?

1. Ve a Settings (`Ctrl + ,`)
2. Busca "terminal integrated default profile"
3. Selecciona tu terminal preferido

### El terminal no funciona, ¿qué hago?

1. Verifica que tengas un terminal instalado (PowerShell, bash, etc.)
2. Reinicia VS Code
3. Verifica la configuración del terminal en Settings

## Configuración

### ¿Dónde se guarda mi configuración?

**Windows**: `%APPDATA%\Code\User\settings.json`  
**Mac**: `~/Library/Application Support/Code/User/settings.json`  
**Linux**: `~/.config/Code/User/settings.json`

### ¿Puedo exportar mi configuración?

**Sí**, puedes:
1. Copiar el archivo `settings.json`
2. O usar la extensión "Settings Sync" para sincronizar en la nube

### ¿Cómo reseteo VS Code a la configuración por defecto?

1. Cierra VS Code
2. Elimina la carpeta de configuración (ver arriba)
3. Abre VS Code nuevamente

**⚠️ Esto eliminará todas tus configuraciones personalizadas**

## Problemas Comunes

### VS Code va lento, ¿qué hago?

1. Desinstala extensiones que no uses
2. Cierra archivos que no necesites
3. Reinicia VS Code
4. Verifica que tengas suficiente memoria RAM

### No puedo guardar archivos, dice "permiso denegado"

**Solución**:
- Verifica que tengas permisos de escritura en esa carpeta
- Intenta guardar en otra ubicación
- En Linux/Mac, verifica los permisos del archivo

### Los atajos de teclado no funcionan

**Posibles causas**:
1. Conflicto con otro programa
2. Estás en el modo incorrecto (insertar vs sobrescribir)
3. El atajo está deshabilitado

**Solución**: Verifica en Settings → Keyboard Shortcuts

### No encuentro un archivo que sé que existe

1. Verifica que estés en la carpeta correcta
2. Usa `Ctrl + P` para buscar el archivo por nombre
3. Verifica que los archivos ocultos estén visibles (si aplica)

## Git y Control de Versiones

### ¿VS Code incluye Git?

**Sí**, VS Code tiene soporte básico para Git integrado. Para funcionalidades avanzadas, instala GitLens.

### ¿Necesito instalar Git por separado?

**Sí**, necesitas instalar Git en tu computadora:
- Descarga de: https://git-scm.com/
- VS Code usará Git una vez instalado

## Rendimiento

### ¿VS Code consume mucha memoria?

**Depende**:
- VS Code base es ligero
- Las extensiones pueden aumentar el uso de memoria
- Archivos muy grandes pueden hacerlo más lento

### ¿Puedo usar VS Code en una computadora antigua?

**Sí**, VS Code es relativamente ligero, pero:
- Puede ser más lento en computadoras muy antiguas
- Considera desactivar extensiones pesadas
- Usa temas simples (no temas con animaciones)

## Ayuda Adicional

### ¿Dónde busco ayuda?

1. **Documentación oficial**: https://code.visualstudio.com/docs
2. **Stack Overflow**: Etiqueta `visual-studio-code`
3. **GitHub Issues**: https://github.com/microsoft/vscode/issues
4. **Comunidad**: Reddit r/vscode

### ¿Cómo reporto un error?

1. Ve a **Help** → **Report Issue**
2. O ve a: https://github.com/microsoft/vscode/issues
3. Describe el problema claramente
4. Incluye pasos para reproducir el error

---

**¿No encontraste tu pregunta?** Busca en la documentación oficial o pregunta en la comunidad. ¡Buena suerte programando! 🚀

