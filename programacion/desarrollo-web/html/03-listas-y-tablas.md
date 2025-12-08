# Listas y Tablas en HTML

HTML proporciona elementos para organizar la información de manera estructurada, como listas y tablas. Estas estructuras son fundamentales para presentar datos de forma clara y accesible.

## Listas

Las listas son una forma excelente de organizar información relacionada. HTML ofrece tres tipos principales de listas, cada una con su propósito específico.

### ¿Cuándo usar listas?

- **Listas de navegación**: Menús, enlaces relacionados
- **Listas de características**: Ventajas, beneficios, características de un producto
- **Instrucciones paso a paso**: Recetas, tutoriales, procesos
- **Glosarios y definiciones**: Términos y sus significados
- **Listas de elementos relacionados**: Productos, servicios, opciones

### Listas Desordenadas (`<ul>`)

Se utilizan para elementos que **no tienen un orden específico** o cuando el orden no es importante. Por defecto, se muestran con viñetas (bullets).

```html
<ul>
    <li>Café</li>
    <li>Té</li>
    <li>Leche</li>
</ul>
```

**Cuándo usar `<ul>`**:
- Lista de características de un producto
- Ingredientes de una receta (el orden no importa)
- Enlaces de navegación
- Lista de opciones donde el orden no es relevante

**Ejemplos prácticos**:

```html
<!-- Lista de características -->
<h3>Características del Producto</h3>
<ul>
    <li>Diseño moderno</li>
    <li>Alta calidad</li>
    <li>Garantía de 2 años</li>
    <li>Envío gratuito</li>
</ul>

<!-- Lista de navegación -->
<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</nav>
```

### Listas Ordenadas (`<ol>`)

Se utilizan para elementos que **sí tienen un orden específico** o cuando el orden es importante. Por defecto, se muestran con números.

```html
<ol>
    <li>Paso 1: Encender el ordenador</li>
    <li>Paso 2: Abrir el navegador</li>
    <li>Paso 3: Visitar mi sitio web</li>
</ol>
```

**Cuándo usar `<ol>`**:
- Instrucciones paso a paso
- Recetas de cocina (pasos en orden)
- Rankings o clasificaciones
- Procesos secuenciales
- Cualquier lista donde el orden importa

**Atributos útiles**:

```html
<!-- Lista que comienza en 5 -->
<ol start="5">
    <li>Quinto elemento</li>
    <li>Sexto elemento</li>
</ol>

<!-- Lista en orden inverso -->
<ol reversed>
    <li>Tercer lugar</li>
    <li>Segundo lugar</li>
    <li>Primer lugar</li>
</ol>

<!-- Lista con números romanos -->
<ol type="I">
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>
```

**Tipos de numeración** (`type`):
- `type="1"`: Números (1, 2, 3...) - **por defecto**
- `type="A"`: Letras mayúsculas (A, B, C...)
- `type="a"`: Letras minúsculas (a, b, c...)
- `type="I"`: Números romanos mayúsculas (I, II, III...)
- `type="i"`: Números romanos minúsculas (i, ii, iii...)

**Ejemplos prácticos**:

```html
<!-- Receta de cocina -->
<h2>Receta de Torta de Chocolate</h2>
<ol>
    <li>Precalentar el horno a 180°C</li>
    <li>Mezclar los ingredientes secos</li>
    <li>Agregar los ingredientes húmedos</li>
    <li>Verter en el molde</li>
    <li>Hornear por 30 minutos</li>
</ol>

<!-- Top 5 películas -->
<h2>Mis 5 Películas Favoritas</h2>
<ol>
    <li>El Padrino</li>
    <li>Pulp Fiction</li>
    <li>Matrix</li>
    <li>Inception</li>
    <li>Interstellar</li>
</ol>
```

### Listas Anidadas

Puedes anidar listas dentro de otras listas para crear estructuras jerárquicas:

```html
<ul>
    <li>Frutas
        <ul>
            <li>Manzanas</li>
            <li>Plátanos</li>
            <li>Naranjas</li>
        </ul>
    </li>
    <li>Verduras
        <ul>
            <li>Zanahorias</li>
            <li>Brócoli</li>
            <li>Espinacas</li>
        </ul>
    </li>
</ul>
```

**Ejemplo práctico - Menú de navegación con submenús**:

```html
<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li>Productos
            <ul>
                <li><a href="/productos/electronica">Electrónica</a></li>
                <li><a href="/productos/ropa">Ropa</a></li>
                <li><a href="/productos/libros">Libros</a></li>
            </ul>
        </li>
        <li><a href="/contacto">Contacto</a></li>
    </ul>
</nav>
```

### Listas de Descripción (`<dl>`)

Se utilizan para listar **términos y sus descripciones**. Es ideal para glosarios, definiciones, o pares clave-valor.

**Estructura**:
- `<dl>`: Define la lista de descripción (description list)
- `<dt>`: Define el término (definition term)
- `<dd>`: Define la descripción del término (definition description)

```html
<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para la web. Define la estructura de las páginas.</dd>
    
    <dt>CSS</dt>
    <dd>Lenguaje de hojas de estilo para dar diseño a la web.</dd>
    
    <dt>JavaScript</dt>
    <dd>Lenguaje de programación que hace las páginas web interactivas.</dd>
</dl>
```

**Cuándo usar `<dl>`**:
- Glosarios de términos técnicos
- Preguntas frecuentes (FAQ)
- Metadatos (autor, fecha, etc.)
- Listas de definiciones
- Información en formato clave-valor

**Ejemplos prácticos**:

```html
<!-- Glosario -->
<h2>Glosario de Términos Web</h2>
<dl>
    <dt>API</dt>
    <dd>Interfaz de Programación de Aplicaciones. Permite que diferentes aplicaciones se comuniquen entre sí.</dd>
    
    <dt>Responsive Design</dt>
    <dd>Diseño que se adapta a diferentes tamaños de pantalla (móvil, tablet, desktop).</dd>
</dl>

<!-- Información de contacto -->
<dl>
    <dt>Email</dt>
    <dd>contacto@ejemplo.com</dd>
    
    <dt>Teléfono</dt>
    <dd>+34 123 456 789</dd>
    
    <dt>Dirección</dt>
    <dd>Calle Principal 123, Madrid, España</dd>
</dl>
```

**Múltiples descripciones para un término**:

```html
<dl>
    <dt>Navegador</dt>
    <dd>Software para acceder a internet</dd>
    <dd>Ejemplos: Chrome, Firefox, Safari</dd>
</dl>
```

## Tablas

Las tablas se utilizan para mostrar **datos tabulares** (información organizada en filas y columnas). Son ideales para datos estructurados como horarios, precios, comparaciones, estadísticas, etc.

### ¿Cuándo usar tablas?

✅ **Usa tablas para**:
- Datos numéricos organizados (precios, estadísticas)
- Comparaciones (características de productos)
- Horarios y calendarios
- Información estructurada en filas y columnas
- Datos que tienen relación lógica entre filas y columnas

❌ **NO uses tablas para**:
- Diseño de layout (usa CSS Grid o Flexbox)
- Crear columnas visuales (usa CSS)
- Estructura de página (usa elementos semánticos)

### Estructura Básica de una Tabla

```html
<table>
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dato 1.1</td>
            <td>Dato 1.2</td>
            <td>Dato 1.3</td>
        </tr>
        <tr>
            <td>Dato 2.1</td>
            <td>Dato 2.2</td>
            <td>Dato 2.3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Pie 1</td>
            <td>Pie 2</td>
            <td>Pie 3</td>
        </tr>
    </tfoot>
</table>
```

### Elementos de una Tabla

#### `<table>`
El contenedor principal de toda la tabla.

#### `<thead>` (Table Head)
Agrupa el contenido del **encabezado** de la tabla. Contiene las etiquetas `<th>` (table header).

**Ventajas de usar `<thead>`**:
- Mejora la accesibilidad
- Permite hacer scroll del cuerpo manteniendo visible el encabezado
- Facilita el estilo con CSS

#### `<tbody>` (Table Body)
Agrupa el contenido del **cuerpo** de la tabla. Contiene las filas de datos principales.

**Nota**: Aunque técnicamente no es obligatorio, siempre es buena práctica usar `<tbody>`.

#### `<tfoot>` (Table Foot)
Agrupa el contenido del **pie** de la tabla. Útil para resúmenes, totales, o información adicional.

**Ejemplo con tfoot**:

```html
<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>999€</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>25€</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td><strong>Total</strong></td>
            <td><strong>1024€</strong></td>
        </tr>
    </tfoot>
</table>
```

#### `<tr>` (Table Row)
Define una **fila** en la tabla.

#### `<th>` (Table Header)
Define una **celda de encabezado**. Por defecto:
- Texto en **negrita**
- Centrado
- Tiene significado semántico (importante para accesibilidad)

#### `<td>` (Table Data)
Define una **celda de datos** estándar.

### Atributos Útiles de Celdas

#### `colspan` - Combinar Columnas

Permite que una celda ocupe **varias columnas**:

```html
<table>
    <tr>
        <th>Nombre</th>
        <th colspan="2">Teléfonos</th>
    </tr>
    <tr>
        <td>Juan</td>
        <td>555-1234</td>
        <td>555-5678</td>
    </tr>
</table>
```

**Ejemplo práctico**:

```html
<table>
    <tr>
        <th>Producto</th>
        <th colspan="2">Precios</th>
    </tr>
    <tr>
        <th></th>
        <th>Sin IVA</th>
        <th>Con IVA</th>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>826€</td>
        <td>999€</td>
    </tr>
</table>
```

#### `rowspan` - Combinar Filas

Permite que una celda ocupe **varias filas**:

```html
<table>
    <tr>
        <th rowspan="2">Nombre</th>
        <th>Teléfono 1</th>
    </tr>
    <tr>
        <th>Teléfono 2</th>
    </tr>
    <tr>
        <td>Juan</td>
        <td>555-1234</td>
        <td>555-5678</td>
    </tr>
</table>
```

**Ejemplo práctico - Horario de clases**:

```html
<table>
    <tr>
        <th>Hora</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
    </tr>
    <tr>
        <td rowspan="2">9:00-11:00</td>
        <td>Matemáticas</td>
        <td>Historia</td>
        <td>Matemáticas</td>
    </tr>
    <tr>
        <td>Física</td>
        <td>Química</td>
        <td>Física</td>
    </tr>
</table>
```

### Ejemplo Completo - Tabla de Comparación

```html
<table>
    <caption>Comparación de Planes de Hosting</caption>
    <thead>
        <tr>
            <th>Característica</th>
            <th>Plan Básico</th>
            <th>Plan Pro</th>
            <th>Plan Enterprise</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Almacenamiento</td>
            <td>10 GB</td>
            <td>50 GB</td>
            <td>200 GB</td>
        </tr>
        <tr>
            <td>Ancho de Banda</td>
            <td>100 GB/mes</td>
            <td>500 GB/mes</td>
            <td>Ilimitado</td>
        </tr>
        <tr>
            <td>Precio</td>
            <td>9.99€/mes</td>
            <td>19.99€/mes</td>
            <td>49.99€/mes</td>
        </tr>
    </tbody>
</table>
```

### Atributo `<caption>`

Proporciona un título o descripción para la tabla. Se muestra arriba de la tabla.

```html
<table>
    <caption>Ventas Mensuales 2024</caption>
    <!-- contenido de la tabla -->
</table>
```

**Ventajas**:
- Mejora la accesibilidad
- Ayuda a los lectores de pantalla a entender el contexto
- Útil para SEO

### Tabla Simple (sin thead/tbody)

Para tablas muy simples, puedes omitir `<thead>` y `<tbody>`, aunque no es la mejor práctica:

```html
<table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
    </tr>
    <tr>
        <td>Juan</td>
        <td>25</td>
    </tr>
    <tr>
        <td>María</td>
        <td>30</td>
    </tr>
</table>
```

### Buenas Prácticas para Tablas

✅ **Siempre usa `<thead>`** para encabezados
✅ **Usa `<th>` para encabezados**, no `<td>` con estilos
✅ **Incluye `<caption>`** cuando sea apropiado
✅ **Usa `<tbody>`** para agrupar el contenido principal
✅ **Usa `<tfoot>`** para resúmenes o totales
✅ **Mantén las tablas simples** - si es muy compleja, considera dividirla
✅ **Usa `scope` en `<th>`** para accesibilidad (avanzado)

### Accesibilidad en Tablas

Para mejorar la accesibilidad, puedes usar el atributo `scope` en `<th>`:

```html
<table>
    <thead>
        <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Laptop</th>
            <td>999€</td>
            <td>15</td>
        </tr>
    </tbody>
</table>
```

- `scope="col"`: El encabezado aplica a toda la columna
- `scope="row"`: El encabezado aplica a toda la fila

## Ejemplo Completo Combinando Listas y Tablas

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Restaurante - Menú</title>
</head>
<body>
    <header>
        <h1>Restaurante El Buen Sabor</h1>
        <nav>
            <ul>
                <li><a href="#entrantes">Entrantes</a></li>
                <li><a href="#principales">Platos Principales</a></li>
                <li><a href="#postres">Postres</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="entrantes">
            <h2>Entrantes</h2>
            <ul>
                <li>Ensalada César - 8€</li>
                <li>Sopa del día - 6€</li>
                <li>Bruschetta - 7€</li>
            </ul>
        </section>

        <section id="principales">
            <h2>Platos Principales</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plato</th>
                        <th>Precio</th>
                        <th>Tiempo de Preparación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pasta Carbonara</td>
                        <td>12€</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Pizza Margarita</td>
                        <td>10€</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>Salmón a la plancha</td>
                        <td>18€</td>
                        <td>25 min</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="postres">
            <h2>Postres</h2>
            <ol>
                <li>Tiramisú - 6€</li>
                <li>Cheesecake - 5€</li>
                <li>Helado artesanal - 4€</li>
            </ol>
        </section>
    </main>
</body>
</html>
```

## Resumen

- **Listas desordenadas (`<ul>`)**: Para elementos sin orden específico
- **Listas ordenadas (`<ol>`)**: Para elementos con orden importante
- **Listas de descripción (`<dl>`)**: Para términos y definiciones
- **Tablas (`<table>`)**: Para datos tabulares estructurados
- **Usa la estructura correcta**: `<thead>`, `<tbody>`, `<tfoot>` para tablas
- **Combina elementos**: Puedes anidar listas y usar tablas dentro de listas cuando sea apropiado

Las listas y tablas son herramientas fundamentales para organizar y presentar información de manera clara y accesible en tus páginas web. Elige la estructura que mejor se adapte al tipo de información que quieres mostrar.