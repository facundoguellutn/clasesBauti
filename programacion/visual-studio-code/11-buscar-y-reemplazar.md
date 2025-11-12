# 11 - Buscar y Reemplazar en Visual Studio Code

## ¿Por qué buscar y reemplazar?

Cuando trabajas con código, a menudo necesitas:
- **Encontrar** una palabra o frase en tu código
- **Reemplazar** algo en múltiples lugares
- **Buscar** en muchos archivos a la vez

VS Code tiene herramientas poderosas para hacer esto fácilmente.

## Buscar en un archivo

### Abrir la búsqueda:

1. **Atajo**: `Ctrl + F` (Windows/Linux) o `Cmd + F` (Mac)
2. O ve a **Edit** → **Find** (Buscar)

### Usar la búsqueda:

1. Se abre un cuadro de búsqueda en la parte superior del editor
2. Escribe lo que quieres buscar
3. VS Code resaltará todas las coincidencias
4. Usa las flechas ↑↓ para navegar entre resultados
5. O haz clic en los números para saltar a cada resultado

### Opciones de búsqueda:

En el cuadro de búsqueda verás iconos:

- **🔤 Match Case** (Coincidir mayúsculas/minúsculas): Busca exactamente como escribiste
- **🔗 Match Whole Word** (Coincidir palabra completa): Solo encuentra la palabra completa, no partes
- **🔀 Use Regular Expression** (Usar expresión regular): Búsqueda avanzada con patrones
- **📝 Replace** (Reemplazar): Cambia a modo reemplazar

## Reemplazar en un archivo

### Abrir reemplazar:

1. **Atajo**: `Ctrl + H` (Windows/Linux) o `Cmd + Option + F` (Mac)
2. O presiona `Ctrl + F` y luego haz clic en el icono de reemplazar
3. O ve a **Edit** → **Replace** (Reemplazar)

### Usar reemplazar:

1. Escribe lo que quieres buscar en el primer cuadro
2. Escribe el reemplazo en el segundo cuadro
3. Opciones:
   - **Replace** (Reemplazar): Reemplaza la coincidencia actual
   - **Replace All** (Reemplazar todo): Reemplaza todas las coincidencias
   - **Previous/Next**: Navega entre coincidencias

**⚠️ Cuidado con "Replace All"**: Asegúrate de que es lo que quieres antes de usarlo

## Buscar en todos los archivos

### Abrir búsqueda global:

1. **Atajo**: `Ctrl + Shift + F` (Windows/Linux) o `Cmd + Shift + F` (Mac)
2. O ve a **Edit** → **Find in Files** (Buscar en archivos)

### Usar búsqueda global:

1. Se abre el panel de búsqueda en la barra lateral izquierda
2. Escribe lo que quieres buscar
3. VS Code buscará en todos los archivos del proyecto
4. Verás los resultados organizados por archivo
5. Haz clic en un resultado para abrir ese archivo

### Filtrar la búsqueda:

En el panel de búsqueda puedes:

- **Incluir archivos**: Escribe patrones como `*.js` para buscar solo en archivos JavaScript
- **Excluir archivos**: Escribe en "files to exclude" para ignorar ciertos archivos
- **Buscar solo en carpetas específicas**: Usa el icono de carpeta para seleccionar

## Reemplazar en todos los archivos

### Abrir reemplazo global:

1. **Atajo**: `Ctrl + Shift + H` (Windows/Linux) o `Cmd + Shift + H` (Mac)
2. O en el panel de búsqueda, haz clic en el icono de reemplazar

### Usar reemplazo global:

1. Escribe lo que quieres buscar
2. Escribe el reemplazo
3. Revisa los resultados antes de reemplazar
4. Usa "Replace All" con mucho cuidado

**⚠️ Advertencia importante**: Reemplazar en todos los archivos puede cambiar muchas cosas. Siempre:
- Revisa los resultados primero
- Considera hacer un backup
- Usa control de versiones (Git) para poder deshacer

## Búsqueda con expresiones regulares

Las **expresiones regulares** (regex) son patrones avanzados para buscar texto.

### Activar expresiones regulares:

1. Abre la búsqueda (`Ctrl + F`)
2. Haz clic en el icono `.*` (Use Regular Expression)

### Ejemplos útiles de regex:

#### Buscar números:
```
\d+
```
Encuentra cualquier número

#### Buscar palabras que empiezan con mayúscula:
```
[A-Z]\w+
```

#### Buscar líneas vacías:
```
^\s*$
```

#### Buscar y reemplazar con captura:
**Buscar**: `function (\w+)`  
**Reemplazar**: `const $1 = function`

Esto cambia `function saludar` a `const saludar = function`

## Ejemplos prácticos

### Ejemplo 1: Cambiar el nombre de una variable

Imagina que quieres cambiar todas las ocurrencias de `nombreUsuario` a `usuario`:

1. Presiona `Ctrl + Shift + F` (búsqueda global)
2. Escribe `nombreUsuario`
3. Activa "Match Whole Word" para no cambiar partes de otras palabras
4. Revisa los resultados
5. Cambia a modo reemplazar (`Ctrl + Shift + H`)
6. Escribe `usuario` en el campo de reemplazo
7. Haz clic en "Replace All"

### Ejemplo 2: Encontrar todos los console.log

Para encontrar todos los `console.log` en tu proyecto:

1. Presiona `Ctrl + Shift + F`
2. Escribe `console\.log`
3. Activa "Use Regular Expression" (el punto necesita escaparse con `\`)
4. Verás todos los lugares donde usas `console.log`

### Ejemplo 3: Eliminar líneas de comentario

Para eliminar todas las líneas que son solo comentarios:

1. Presiona `Ctrl + Shift + F`
2. Activa "Use Regular Expression"
3. Busca: `^\s*//.*$`
4. Esto encuentra líneas que solo tienen comentarios
5. Reemplaza con nada (deja el campo vacío) para eliminarlas

## Búsqueda avanzada: Incluir/Excluir archivos

### Buscar solo en archivos JavaScript:

En el panel de búsqueda global:
- En "files to include", escribe: `*.js`

### Excluir archivos de node_modules:

En "files to exclude", escribe: `node_modules`

### Buscar en múltiples tipos de archivos:

En "files to include", escribe: `*.{js,html,css}`

## Atajos útiles para búsqueda

- `Ctrl + F` / `Cmd + F`: Buscar en archivo actual
- `Ctrl + H` / `Cmd + Option + F`: Reemplazar en archivo actual
- `Ctrl + Shift + F` / `Cmd + Shift + F`: Buscar en todos los archivos
- `Ctrl + Shift + H` / `Cmd + Shift + H`: Reemplazar en todos los archivos
- `F3` / `Cmd + G`: Ir a la siguiente coincidencia
- `Shift + F3` / `Cmd + Shift + G`: Ir a la coincidencia anterior
- `Esc`: Cerrar el panel de búsqueda

## Tips útiles

✅ **Usa "Match Whole Word"**: Evita reemplazar partes de palabras
✅ **Revisa antes de reemplazar todo**: Siempre revisa los resultados
✅ **Usa expresiones regulares con cuidado**: Son poderosas pero pueden ser complicadas
✅ **Guarda antes de reemplazar**: Por si necesitas deshacer
✅ **Usa Git**: Si algo sale mal, puedes revertir los cambios
✅ **Prueba en un archivo primero**: Antes de reemplazar en todo el proyecto

## Errores comunes

### Reemplazó más de lo que quería

**Solución**: Usa "Match Whole Word" o expresiones regulares más específicas

### No encuentra algo que sé que existe

**Solución**: 
- Verifica la ortografía
- Desactiva "Match Case" si está activado
- Verifica que estás buscando en los archivos correctos

### Reemplazo no funcionó como esperaba

**Solución**: 
- Revisa si usaste expresiones regulares correctamente
- Prueba primero en un archivo pequeño
- Usa `Ctrl + Z` para deshacer

## ¿Qué sigue?

En la siguiente lección aprenderás:
- Cómo personalizar VS Code
- Cambiar temas y colores
- Ajustar configuraciones básicas

---

**Próximo tema:** [12 - Configuración Básica](12-configuracion-basica.md)

