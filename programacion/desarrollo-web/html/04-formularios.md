# Formularios en HTML

Los formularios son esenciales para permitir la interacción del usuario con una página web. Permiten recopilar información, enviar datos al servidor, y crear experiencias interactivas.

## ¿Qué son los formularios?

Los formularios HTML son contenedores que agrupan elementos de entrada (inputs) que permiten a los usuarios:
- **Registrarse** en un sitio web
- **Iniciar sesión** con credenciales
- **Enviar comentarios** o mensajes
- **Realizar búsquedas**
- **Completar encuestas**
- **Realizar compras** online
- **Contactar** con empresas o personas

### ¿Por qué son importantes?

- **Interactividad**: Permiten que los usuarios interactúen con tu sitio web
- **Recopilación de datos**: Obtienes información de tus usuarios
- **Funcionalidad**: Sin formularios, muchas funcionalidades web no serían posibles

## La etiqueta `<form>`

Es el contenedor principal de todos los elementos de un formulario. Define dónde y cómo se enviarán los datos.

```html
<form action="/procesar-formulario" method="POST">
    <!-- Elementos del formulario aquí -->
</form>
```

### Atributos importantes de `<form>`:

#### `action`

Especifica la **URL a la que se envían los datos** del formulario cuando se envía. Puede ser:
- Una ruta relativa: `action="/procesar"`
- Una ruta absoluta: `action="https://ejemplo.com/procesar"`
- La misma página: `action=""` o `action="#"` (para procesar con JavaScript)

```html
<!-- Enviar a otra página -->
<form action="/contacto" method="POST">
    <!-- contenido -->
</form>

<!-- Enviar a la misma página (procesar con JavaScript) -->
<form action="#" method="POST">
    <!-- contenido -->
</form>
```

#### `method`

Define el **método HTTP** utilizado para enviar los datos. Hay dos opciones principales:

**`GET`** - Los datos se envían en la URL (visibles)
- Los datos aparecen en la barra de direcciones: `?nombre=Juan&edad=25`
- Límite de tamaño: ~2048 caracteres
- Se puede marcar como favorito
- **Ideal para**: Búsquedas, filtros, datos no sensibles

```html
<form action="/buscar" method="GET">
    <input type="text" name="busqueda" placeholder="Buscar...">
    <button type="submit">Buscar</button>
</form>
<!-- Resultado: /buscar?busqueda=html -->
```

**`POST`** - Los datos se envían en el cuerpo de la solicitud (no visibles en la URL)
- Los datos no aparecen en la URL
- Sin límite práctico de tamaño
- No se puede marcar como favorito
- **Ideal para**: Contraseñas, datos sensibles, envío de archivos, creación de registros

```html
<form action="/registro" method="POST">
    <input type="text" name="usuario">
    <input type="password" name="password">
    <button type="submit">Registrarse</button>
</form>
```

**Regla general**: Usa `GET` para obtener datos, `POST` para enviar/crear datos.

#### Otros atributos útiles

```html
<!-- Enviar archivos (requiere method="POST" y enctype) -->
<form action="/subir" method="POST" enctype="multipart/form-data">
    <!-- contenido -->
</form>

<!-- Validación HTML5 -->
<form novalidate>
    <!-- Desactiva la validación HTML5 (útil si validas con JavaScript) -->
</form>
```

## Elementos de Entrada (`<input>`)

La etiqueta `<input>` es una de las más versátiles y se utiliza para crear diferentes tipos de controles interactivos, dependiendo del valor de su atributo `type`. Es una etiqueta auto-cerrada.

### La importancia de `<label>`

Antes de ver los tipos de input, es crucial entender `<label>`. Los labels mejoran la accesibilidad y la usabilidad:

```html
<!-- ✅ Correcto: label asociado con "for" -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">

<!-- ✅ También correcto: label envolviendo el input -->
<label>
    Nombre:
    <input type="text" name="nombre">
</label>
```

**Ventajas de usar `<label>`**:
- Al hacer clic en el label, el input recibe el foco
- Los lectores de pantalla pueden leer el label
- Mejor experiencia de usuario en móviles

### Tipos comunes de `<input>`:

#### `text` - Campo de Texto

Campo de texto de una sola línea. El tipo más básico y común.

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre">
```

**Atributos útiles**:
- `maxlength`: Longitud máxima de caracteres
- `minlength`: Longitud mínima de caracteres
- `pattern`: Expresión regular para validación
- `autocomplete`: Sugerencias automáticas del navegador

```html
<input type="text" 
       name="usuario" 
       placeholder="Usuario"
       minlength="3" 
       maxlength="20"
       pattern="[a-zA-Z0-9]+"
       autocomplete="username">
```

#### `password` - Contraseña

Campo de texto para contraseñas. Los caracteres se ocultan automáticamente.

```html
<label for="password">Contraseña:</label>
<input type="password" id="password" name="password" required>
```

**Buenas prácticas**:
- Siempre usa `required` para contraseñas
- Considera agregar `minlength` para seguridad
- Usa `autocomplete="current-password"` o `autocomplete="new-password"`

```html
<input type="password" 
       name="password" 
       minlength="8"
       autocomplete="new-password"
       required>
```

#### `email` - Correo Electrónico

Campo para direcciones de correo electrónico. Los navegadores validan automáticamente el formato.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

**Validación automática**: El navegador verifica que el formato sea válido (debe contener @ y un dominio).

```html
<input type="email" 
       name="email" 
       placeholder="tu@email.com"
       autocomplete="email"
       required>
```

#### `number` - Números

Campo para introducir números. Puedes especificar rangos y pasos.

```html
<label for="edad">Edad:</label>
<input type="number" id="edad" name="edad" min="0" max="120" step="1">
```

**Atributos útiles**:
- `min`: Valor mínimo permitido
- `max`: Valor máximo permitido
- `step`: Incremento permitido (útil para decimales)

```html
<!-- Edad (solo enteros) -->
<input type="number" name="edad" min="0" max="120">

<!-- Precio (con decimales) -->
<input type="number" name="precio" min="0" step="0.01" placeholder="0.00">

<!-- Cantidad (solo enteros positivos) -->
<input type="number" name="cantidad" min="1" step="1">
```

#### `date` - Fecha

Selector de fecha. Muestra un calendario en navegadores modernos.

```html
<label for="fecha">Fecha de Nacimiento:</label>
<input type="date" id="fecha" name="fecha" max="2024-12-31">
```

**Atributos útiles**:
- `min`: Fecha mínima permitida
- `max`: Fecha máxima permitida

```html
<input type="date" 
       name="fecha_nacimiento" 
       min="1900-01-01" 
       max="2024-12-31">
```

#### Otros tipos de fecha/hora

```html
<!-- Hora -->
<input type="time" name="hora">

<!-- Fecha y hora -->
<input type="datetime-local" name="fecha_hora">

<!-- Mes -->
<input type="month" name="mes">

<!-- Semana -->
<input type="week" name="semana">
```

#### `checkbox` - Casilla de Verificación

Permite seleccionar **múltiples opciones**. Cada checkbox puede estar marcado o no.

```html
<input type="checkbox" id="acepto" name="acepto" value="si" required>
<label for="acepto">Acepto los términos y condiciones</label>
```

**Características importantes**:
- Múltiples checkboxes pueden tener el mismo `name` (se envían como array)
- El `value` es lo que se envía si está marcado
- Si no está marcado, no se envía ningún valor

```html
<!-- Múltiples opciones -->
<fieldset>
    <legend>Intereses</legend>
    <input type="checkbox" id="deportes" name="intereses" value="deportes">
    <label for="deportes">Deportes</label>
    
    <input type="checkbox" id="musica" name="intereses" value="musica">
    <label for="musica">Música</label>
    
    <input type="checkbox" id="lectura" name="intereses" value="lectura">
    <label for="lectura">Lectura</label>
</fieldset>
```

**Nota**: Si todos tienen el mismo `name`, se enviarán todos los valores seleccionados.

#### `radio` - Botón de Opción

Permite seleccionar **solo una opción** de un grupo. Todos los radios con el mismo `name` forman un grupo.

```html
<input type="radio" id="hombre" name="genero" value="hombre">
<label for="hombre">Hombre</label>

<input type="radio" id="mujer" name="genero" value="mujer">
<label for="mujer">Mujer</label>

<input type="radio" id="otro" name="genero" value="otro">
<label for="otro">Otro</label>
```

**Características importantes**:
- Todos los radios del mismo grupo deben tener el mismo `name`
- Solo uno puede estar seleccionado a la vez
- El `value` es lo que se envía cuando está seleccionado

```html
<fieldset>
    <legend>Método de Pago</legend>
    <input type="radio" id="tarjeta" name="pago" value="tarjeta" checked>
    <label for="tarjeta">Tarjeta de Crédito</label>
    
    <input type="radio" id="paypal" name="pago" value="paypal">
    <label for="paypal">PayPal</label>
    
    <input type="radio" id="transferencia" name="pago" value="transferencia">
    <label for="transferencia">Transferencia Bancaria</label>
</fieldset>
```

**Atributo `checked`**: Marca una opción como seleccionada por defecto.

#### `submit` - Enviar Formulario

Botón para enviar el formulario. Al hacer clic, se envían todos los datos del formulario.

```html
<input type="submit" value="Enviar Formulario">
```

**Alternativa moderna**: Usa `<button type="submit">` en lugar de `<input type="submit">`:

```html
<button type="submit">Enviar Formulario</button>
```

**Ventajas de `<button>`**:
- Puede contener otros elementos HTML (imágenes, iconos)
- Más flexible para estilos
- Mejor para accesibilidad

#### `button` - Botón Genérico

Botón que no realiza ninguna acción por defecto. Se usa principalmente con JavaScript.

```html
<input type="button" value="Click aquí" onclick="miFuncion()">
```

**Mejor práctica**: Usa `<button type="button">`:

```html
<button type="button" onclick="miFuncion()">Click aquí</button>
```

#### `file` - Subir Archivos

Campo para seleccionar archivos a subir. Requiere `method="POST"` y `enctype="multipart/form-data"`.

```html
<label for="archivo">Subir archivo:</label>
<input type="file" id="archivo" name="archivo">
```

**Atributos útiles**:
- `accept`: Tipos de archivo permitidos
- `multiple`: Permite seleccionar múltiples archivos

```html
<!-- Solo imágenes -->
<input type="file" name="foto" accept="image/*">

<!-- Solo PDFs -->
<input type="file" name="documento" accept=".pdf">

<!-- Múltiples archivos -->
<input type="file" name="archivos" multiple>

<!-- Imágenes específicas -->
<input type="file" name="foto" accept="image/jpeg,image/png">
```

**Importante**: El formulario debe tener `enctype="multipart/form-data"`:

```html
<form action="/subir" method="POST" enctype="multipart/form-data">
    <input type="file" name="archivo">
    <button type="submit">Subir</button>
</form>
```

#### Otros tipos útiles

```html
<!-- URL -->
<input type="url" name="sitio_web" placeholder="https://ejemplo.com">

<!-- Teléfono -->
<input type="tel" name="telefono" placeholder="+34 123 456 789">

<!-- Búsqueda -->
<input type="search" name="busqueda" placeholder="Buscar...">

<!-- Color -->
<input type="color" name="color_favorito">

<!-- Rango (slider) -->
<input type="range" name="volumen" min="0" max="100" value="50">

<!-- Oculto (para datos que no se muestran) -->
<input type="hidden" name="token" value="abc123">
```

### Atributos comunes de `<input>`:

#### `id` y `name`

- **`id`**: Identificador único para el elemento (usado con `<label>` y JavaScript)
- **`name`**: Nombre del control (usado para enviar los datos al servidor). **Es crucial para que los datos se envíen.**

```html
<!-- ✅ Correcto: id y name -->
<input type="text" id="nombre" name="nombre">

<!-- ❌ Incorrecto: sin name (los datos no se enviarán) -->
<input type="text" id="nombre">
```

#### `value`

El valor inicial del campo o el valor que se envía para checkboxes y radios.

```html
<input type="text" name="usuario" value="usuario123">
<input type="radio" name="genero" value="hombre" checked>
```

#### `placeholder`

Texto de sugerencia que se muestra en el campo cuando está vacío. **No es un valor por defecto**, solo una pista visual.

```html
<input type="text" name="email" placeholder="tu@email.com">
```

**Nota**: No uses `placeholder` como sustituto de `<label>`. Siempre incluye un label.

#### `required`

Hace que el campo sea **obligatorio** antes de enviar el formulario. El navegador valida automáticamente.

```html
<input type="email" name="email" required>
```

#### `disabled`

Deshabilita el campo. El usuario no puede interactuar con él y **no se envía** en el formulario.

```html
<input type="text" name="usuario" disabled>
```

#### `readonly`

Hace que el campo sea de **solo lectura**. El usuario puede ver el valor pero no modificarlo. **Sí se envía** en el formulario.

```html
<input type="text" name="id_usuario" value="12345" readonly>
```

#### `autocomplete`

Ayuda a los navegadores a completar automáticamente el campo con datos guardados.

```html
<input type="email" name="email" autocomplete="email">
<input type="password" name="password" autocomplete="current-password">
<input type="text" name="nombre" autocomplete="name">
```

**Valores comunes**: `name`, `email`, `tel`, `address-line1`, `country`, etc.

## Otros elementos de formulario

### `<textarea>` - Campo de Texto Multi-línea

Campo de texto que permite múltiples líneas. Ideal para comentarios, mensajes, descripciones largas.

```html
<label for="mensaje">Mensaje:</label>
<textarea id="mensaje" name="mensaje" rows="5" cols="30" placeholder="Escribe tu mensaje aquí..."></textarea>
```

**Atributos útiles**:
- `rows`: Número de filas visibles
- `cols`: Número de columnas (ancho aproximado)
- `maxlength`: Longitud máxima de caracteres
- `wrap`: Cómo se envuelve el texto (`soft`, `hard`, `off`)

```html
<textarea name="comentario" 
          rows="10" 
          cols="50" 
          maxlength="500"
          placeholder="Máximo 500 caracteres"
          required></textarea>
```

**Nota**: Aunque `cols` existe, es mejor controlar el ancho con CSS.

### `<select>` y `<option>` - Lista Desplegable

Crea una lista desplegable donde el usuario puede seleccionar una o más opciones.

#### Select Simple

```html
<label for="pais">País:</label>
<select id="pais" name="pais" required>
    <option value="">Selecciona un país</option>
    <option value="es">España</option>
    <option value="mx">México</option>
    <option value="ar">Argentina</option>
    <option value="co">Colombia</option>
</select>
```

**Atributos importantes**:
- `required`: Hace el campo obligatorio
- `multiple`: Permite selección múltiple
- `size`: Número de opciones visibles

#### Opciones Agrupadas

```html
<select name="ciudad">
    <optgroup label="España">
        <option value="madrid">Madrid</option>
        <option value="barcelona">Barcelona</option>
        <option value="valencia">Valencia</option>
    </optgroup>
    <optgroup label="México">
        <option value="cdmx">Ciudad de México</option>
        <option value="guadalajara">Guadalajara</option>
    </optgroup>
</select>
```

#### Select Múltiple

```html
<label for="idiomas">Idiomas que hablas:</label>
<select id="idiomas" name="idiomas" multiple size="4">
    <option value="es">Español</option>
    <option value="en">Inglés</option>
    <option value="fr">Francés</option>
    <option value="de">Alemán</option>
</select>
<p><small>Mantén presionada la tecla Ctrl (Cmd en Mac) para seleccionar múltiples opciones</small></p>
```

**Atributos de `<option>`**:
- `value`: Valor que se envía (si no hay value, se envía el texto)
- `selected`: Opción seleccionada por defecto
- `disabled`: Opción deshabilitada

```html
<select name="plan">
    <option value="basico" selected>Plan Básico - 9.99€</option>
    <option value="pro">Plan Pro - 19.99€</option>
    <option value="enterprise" disabled>Plan Enterprise - Próximamente</option>
</select>
```

### `<button>` - Botón

Botón genérico, más flexible que `<input type="button">` o `<input type="submit">` ya que puede contener otros elementos HTML (como imágenes o iconos).

```html
<button type="submit">Enviar formulario</button>
<button type="reset">Limpiar formulario</button>
<button type="button">Un botón cualquiera</button>
```

**Tipos de botón**:
- `type="submit"`: Envía el formulario (por defecto si está dentro de un form)
- `type="reset"`: Restablece los valores del formulario a sus valores iniciales
- `type="button"`: Un botón genérico que no realiza ninguna acción por defecto (útil con JavaScript)

**Ventajas sobre `<input type="submit">`**:
- Puede contener HTML (imágenes, iconos, texto formateado)
- Más flexible para estilos CSS
- Mejor para accesibilidad

```html
<!-- Botón con icono -->
<button type="submit">
    <img src="icono-enviar.png" alt=""> Enviar
</button>

<!-- Botón con estilo -->
<button type="submit" class="boton-primario">
    <strong>Enviar</strong> Formulario
</button>
```

### `<fieldset>` y `<legend>` - Agrupar Campos

Agrupa campos relacionados visualmente y semánticamente. Mejora la accesibilidad y organización.

```html
<fieldset>
    <legend>Información Personal</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" name="apellido">
</fieldset>

<fieldset>
    <legend>Información de Contacto</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <label for="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono">
</fieldset>
```

**Ventajas**:
- Mejora la accesibilidad (lectores de pantalla)
- Organiza visualmente el formulario
- Facilita el estilo con CSS

## Ejemplo Completo de Formulario

Aquí tienes un ejemplo completo que combina todos los elementos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Contacto</title>
</head>
<body>
    <h1>Formulario de Contacto</h1>
    
    <form action="/contacto" method="POST">
        <!-- Información Personal -->
        <fieldset>
            <legend>Información Personal</legend>
            
            <label for="nombre">Nombre completo:</label>
            <input type="text" 
                   id="nombre" 
                   name="nombre" 
                   placeholder="Juan Pérez"
                   required
                   autocomplete="name">
            
            <label for="email">Email:</label>
            <input type="email" 
                   id="email" 
                   name="email" 
                   placeholder="tu@email.com"
                   required
                   autocomplete="email">
            
            <label for="telefono">Teléfono:</label>
            <input type="tel" 
                   id="telefono" 
                   name="telefono" 
                   placeholder="+34 123 456 789"
                   autocomplete="tel">
        </fieldset>

        <!-- Asunto -->
        <fieldset>
            <legend>Asunto</legend>
            
            <label for="asunto">Tipo de consulta:</label>
            <select id="asunto" name="asunto" required>
                <option value="">Selecciona un asunto</option>
                <option value="general">Consulta General</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="ventas">Ventas</option>
                <option value="otro">Otro</option>
            </select>
        </fieldset>

        <!-- Mensaje -->
        <fieldset>
            <legend>Mensaje</legend>
            
            <label for="mensaje">Tu mensaje:</label>
            <textarea id="mensaje" 
                      name="mensaje" 
                      rows="6" 
                      cols="50"
                      placeholder="Escribe tu mensaje aquí..."
                      maxlength="1000"
                      required></textarea>
            <small>Máximo 1000 caracteres</small>
        </fieldset>

        <!-- Preferencias -->
        <fieldset>
            <legend>Preferencias de Contacto</legend>
            
            <p>¿Cómo prefieres que te contactemos?</p>
            <input type="radio" id="contacto-email" name="preferencia" value="email" checked>
            <label for="contacto-email">Email</label>
            
            <input type="radio" id="contacto-telefono" name="preferencia" value="telefono">
            <label for="contacto-telefono">Teléfono</label>
            
            <input type="radio" id="contacto-cualquiera" name="preferencia" value="cualquiera">
            <label for="contacto-cualquiera">Cualquiera</label>
        </fieldset>

        <!-- Términos -->
        <fieldset>
            <input type="checkbox" id="acepto" name="acepto" value="si" required>
            <label for="acepto">Acepto los términos y condiciones de privacidad</label>
        </fieldset>

        <!-- Botones -->
        <button type="submit">Enviar Mensaje</button>
        <button type="reset">Limpiar Formulario</button>
    </form>
</body>
</html>
```

## Validación HTML5

HTML5 incluye validación automática del navegador. Los campos se validan antes de enviar el formulario.

### Tipos de Validación

```html
<!-- Email válido -->
<input type="email" name="email" required>

<!-- URL válida -->
<input type="url" name="sitio" required>

<!-- Número en rango -->
<input type="number" name="edad" min="18" max="100" required>

<!-- Texto con patrón (solo letras y números) -->
<input type="text" name="usuario" pattern="[a-zA-Z0-9]+" required>

<!-- Longitud mínima y máxima -->
<input type="password" name="password" minlength="8" maxlength="20" required>
```

### Mensajes de Validación Personalizados

Puedes personalizar los mensajes de error con JavaScript, pero HTML5 también permite algunos atributos:

```html
<input type="text" 
       name="usuario" 
       pattern="[a-zA-Z0-9]+"
       title="Solo letras y números, sin espacios"
       required>
```

## Buenas Prácticas

✅ **Siempre usa `<label>`** para cada input
✅ **Agrupa campos relacionados** con `<fieldset>`
✅ **Usa `required`** para campos obligatorios
✅ **Especifica `type` correcto** para mejor validación y UX
✅ **Usa `autocomplete`** para ayudar a los usuarios
✅ **Incluye `placeholder`** como ayuda, pero no como sustituto de label
✅ **Valida en el servidor** también (la validación HTML5 se puede desactivar)
✅ **Proporciona feedback** claro al usuario sobre errores
✅ **Usa `name` único** para cada campo (excepto checkboxes/radios del mismo grupo)

## Errores Comunes

❌ **Olvidar el atributo `name`**: Los datos no se enviarán
❌ **Usar `placeholder` en lugar de `<label>`**: Malo para accesibilidad
❌ **No usar `required`** en campos obligatorios
❌ **Olvidar `enctype`** al subir archivos
❌ **No agrupar radios/checkboxes** con el mismo `name`
❌ **Confiar solo en validación HTML5**: Siempre valida en el servidor también

## Próximos Pasos

Una vez que domines los formularios HTML básicos, puedes:
- **Estilizar formularios** con CSS para hacerlos más atractivos
- **Agregar validación JavaScript** para feedback en tiempo real
- **Procesar formularios** en el servidor (PHP, Node.js, Python, etc.)
- **Usar frameworks** de formularios para validación avanzada

Los formularios son una parte fundamental de la interacción web, y HTML proporciona una rica variedad de elementos para construirlos. La combinación de estos elementos con CSS para el estilo y JavaScript para la validación y la interactividad avanzada, permite crear experiencias de usuario muy dinámicas y profesionales.