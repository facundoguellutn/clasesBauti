# 02 - Instalación de Visual Studio Code

## Antes de comenzar

Para instalar Visual Studio Code necesitas:
- Una computadora con Windows, Mac o Linux
- Conexión a internet
- Permisos de administrador (en algunos casos)

## Paso 1: Descargar VS Code

### Opción 1: Desde el sitio oficial (Recomendado)

1. Abre tu navegador web
2. Ve a la página oficial: **https://code.visualstudio.com/**
3. Verás un botón grande que dice **"Download for [tu sistema operativo]"**
   - Si estás en Windows, dirá "Download for Windows"
   - Si estás en Mac, dirá "Download for Mac"
   - Si estás en Linux, dirá "Download for Linux"
4. Haz clic en ese botón para descargar

### Opción 2: Descarga directa

- **Windows**: https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user
- **Mac**: https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal
- **Linux**: https://code.visualstudio.com/sha/download?build=stable&os=linux-x64

## Paso 2: Instalar VS Code

### En Windows:

1. Busca el archivo descargado (generalmente en la carpeta "Descargas")
2. El archivo se llamará algo como `VSCodeUserSetup-x64-xxx.exe`
3. Haz doble clic en el archivo
4. Se abrirá un asistente de instalación
5. **Importante**: Marca la casilla "Add to PATH" (Agregar a PATH) - esto te permitirá abrir VS Code desde cualquier lugar
6. Haz clic en "Next" (Siguiente) y luego en "Install" (Instalar)
7. Espera a que termine la instalación
8. Haz clic en "Finish" (Finalizar)

### En Mac:

1. Busca el archivo descargado (generalmente en la carpeta "Descargas")
2. El archivo será un archivo `.zip` o `.dmg`
3. Si es `.zip`, descomprímelo haciendo doble clic
4. Si es `.dmg`, ábrelo haciendo doble clic
5. Arrastra el ícono de "Visual Studio Code" a la carpeta "Applications" (Aplicaciones)
6. Abre "Applications" y busca Visual Studio Code
7. La primera vez que lo abras, Mac te pedirá confirmación - haz clic en "Abrir"

### En Linux (Ubuntu/Debian):

1. Abre una terminal
2. Actualiza los paquetes:
   ```bash
   sudo apt update
   ```
3. Instala VS Code usando uno de estos métodos:

   **Método 1: Usando el instalador .deb**
   ```bash
   sudo dpkg -i code_xxx.deb
   sudo apt-get install -f
   ```

   **Método 2: Usando el repositorio oficial**
   ```bash
   wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
   sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
   sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
   sudo apt update
   sudo apt install code
   ```

## Paso 3: Verificar la instalación

1. Busca "Visual Studio Code" en el menú de inicio (Windows) o en Aplicaciones (Mac/Linux)
2. Haz clic para abrirlo
3. Si se abre una ventana con el logo de VS Code, ¡felicidades! La instalación fue exitosa

## Primera vez que abres VS Code

La primera vez que abras VS Code verás:
- Una pantalla de bienvenida
- Opciones para personalizar
- Enlaces a documentación

Por ahora, puedes cerrar esta pantalla haciendo clic en la "X" o simplemente crear un nuevo archivo.

## Solución de problemas comunes

### "No puedo encontrar VS Code después de instalarlo"
- **Windows**: Busca "Code" en el menú de inicio
- **Mac**: Busca en la carpeta "Applications"
- **Linux**: Ejecuta `code` en la terminal

### "VS Code no se abre"
- Asegúrate de haber completado toda la instalación
- Intenta reiniciar tu computadora
- Descarga e instala nuevamente

### "No tengo permisos para instalar"
- En Windows: Haz clic derecho en el instalador y selecciona "Ejecutar como administrador"
- En Mac/Linux: Usa `sudo` antes del comando de instalación

## ¿Qué sigue?

Ahora que tienes VS Code instalado, en la siguiente lección aprenderás:
- Cómo abrir VS Code
- Cómo crear tu primer archivo
- Cómo guardar archivos

---

**Próximo tema:** [03 - Primeros Pasos](03-primeros-pasos.md)

