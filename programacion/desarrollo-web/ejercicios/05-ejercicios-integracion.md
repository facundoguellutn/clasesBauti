# Ejercicios de Integración HTML + CSS + JavaScript

Estos ejercicios integran HTML, CSS y JavaScript para crear aplicaciones web completas e interactivas. Son proyectos más complejos que combinan todas las tecnologías aprendidas.

**ID de Ejercicios:** INT-01 a INT-15

---

## Bloque 1: Componentes Interactivos (INT-01 a INT-05)

### INT-01: Contador Interactivo

Crea un contador completo:
- **HTML**: Botones (incrementar, decrementar, reset) y display del número
- **CSS**: Diseño atractivo, botones estilizados, efectos hover
- **JavaScript**: 
  - Funcionalidad de incrementar/decrementar
  - No permitir números negativos
  - Actualizar el display en tiempo real
  - Guardar el valor en localStorage

**Objetivo**: Integrar HTML, CSS y JS en un componente simple.

---

### INT-02: Calculadora Funcional

Crea una calculadora completa:
- **HTML**: Teclado numérico y operaciones, display para mostrar resultados
- **CSS**: Diseño tipo calculadora real, botones organizados en grid
- **JavaScript**: 
  - Capturar clics en botones
  - Realizar operaciones matemáticas
  - Manejar la cadena de operaciones
  - Mostrar resultados en el display
  - Manejar errores (división por cero, etc.)

**Objetivo**: Crear una aplicación funcional completa.

---

### INT-03: Lista de Tareas (To-Do List)

Crea una lista de tareas completa:
- **HTML**: Input para nueva tarea, botón agregar, lista de tareas, botones de acción
- **CSS**: Diseño moderno, tareas completadas tachadas, animaciones
- **JavaScript**:
  - Agregar nuevas tareas
  - Marcar tareas como completadas
  - Eliminar tareas
  - Filtrar tareas (todas, activas, completadas)
  - Guardar en localStorage
  - Contador de tareas pendientes

**Objetivo**: Crear una aplicación con persistencia de datos.

---

### INT-04: Formulario con Validación Completa

Crea un formulario de registro con validación:
- **HTML**: Campos (nombre, email, contraseña, confirmar), mensajes de error
- **CSS**: Estilos para campos válidos/inválidos, mensajes de error visibles
- **JavaScript**:
  - Validación en tiempo real
  - Mensajes de error específicos
  - Indicadores visuales (verde/rojo)
  - Prevenir envío si hay errores
  - Mostrar mensaje de éxito al enviar

**Objetivo**: Validación completa de formularios con feedback visual.

---

### INT-05: Galería de Imágenes Interactiva

Crea una galería de imágenes:
- **HTML**: Grid de miniaturas, contenedor para imagen grande
- **CSS**: Layout responsive, efectos hover, transiciones
- **JavaScript**:
  - Click en miniatura muestra imagen grande
  - Botones anterior/siguiente
  - Navegación con teclado (flechas)
  - Lightbox/modal para ver imagen ampliada
  - Cerrar con botón o tecla ESC

**Objetivo**: Crear interacciones complejas con el DOM.

---

## Bloque 2: Componentes Avanzados (INT-06 a INT-10)

### INT-06: Acordeón Interactivo

Crea un acordeón funcional:
- **HTML**: Múltiples secciones con títulos y contenido
- **CSS**: Estilos para abierto/cerrado, iconos, animaciones
- **JavaScript**:
  - Click en título abre/cierra sección
  - Solo una sección abierta a la vez (o múltiples, según diseño)
  - Animación suave al abrir/cerrar
  - Cambiar icono según estado

**Objetivo**: Crear componentes colapsables interactivos.

---

### INT-07: Tabs (Pestañas) Dinámicas

Crea un sistema de pestañas:
- **HTML**: Botones de pestañas y contenido de cada pestaña
- **CSS**: Estilos para pestaña activa/inactiva, transiciones
- **JavaScript**:
  - Click en pestaña muestra su contenido
  - Oculta contenido de otras pestañas
  - Actualiza estado visual de pestañas
  - Transición suave entre pestañas

**Objetivo**: Crear navegación por pestañas.

---

### INT-08: Modal/Dialog

Crea un modal (ventana emergente):
- **HTML**: Botón para abrir, modal con contenido, botón cerrar
- **CSS**: Overlay oscuro, modal centrado, animación de entrada
- **JavaScript**:
  - Abrir modal al hacer clic
  - Cerrar con botón X
  - Cerrar al hacer clic fuera del modal
  - Cerrar con tecla ESC
  - Prevenir scroll del body cuando está abierto

**Objetivo**: Crear modales profesionales.

---

### INT-09: Búsqueda y Filtrado

Crea un sistema de búsqueda:
- **HTML**: Input de búsqueda, lista de items a filtrar
- **CSS**: Estilos para items visibles/ocultos, highlight de búsqueda
- **JavaScript**:
  - Filtrar items en tiempo real mientras escribes
  - Resaltar texto coincidente
  - Mostrar mensaje si no hay resultados
  - Búsqueda case-insensitive

**Objetivo**: Implementar búsqueda en tiempo real.

---

### INT-10: Slider/Carrusel

Crea un carrusel de imágenes:
- **HTML**: Contenedor de imágenes, botones anterior/siguiente, indicadores
- **CSS**: Layout, ocultar/mostrar imágenes, transiciones
- **JavaScript**:
  - Navegar entre imágenes
  - Auto-play (cambia automáticamente)
  - Pausar auto-play al hacer hover
  - Indicadores de posición
  - Loop infinito (vuelve al inicio)

**Objetivo**: Crear carruseles interactivos.

---

## Bloque 3: Proyectos Completos (INT-11 a INT-15)

### INT-11: Juego: Adivina el Número

Crea un juego simple:
- **HTML**: Input para adivinar, botón enviar, mensajes, contador de intentos
- **CSS**: Diseño de juego, estilos para mensajes de éxito/error
- **JavaScript**:
  - Genera número aleatorio (1-100)
  - Compara con el número del usuario
  - Da pistas (más alto/más bajo)
  - Cuenta intentos
  - Muestra mensaje de victoria
  - Botón para reiniciar juego

**Objetivo**: Crear un juego interactivo completo.

---

### INT-12: Reloj Digital

Crea un reloj digital:
- **HTML**: Display para hora, botones para formato (12/24h), alarma
- **CSS**: Diseño de reloj, animaciones, estilos para alarma activa
- **JavaScript**:
  - Muestra hora actual
  - Actualiza cada segundo
  - Cambia entre formato 12h y 24h
  - Funcionalidad de alarma (opcional)
  - Formato correcto (agregar ceros si es necesario)

**Objetivo**: Trabajar con tiempo y actualizaciones periódicas.

---

### INT-13: Generador de Contraseñas

Crea un generador de contraseñas:
- **HTML**: Inputs para longitud, checkboxes para opciones, botón generar, display
- **CSS**: Diseño moderno, botón copiar estilizado
- **JavaScript**:
  - Genera contraseña aleatoria
  - Opciones: mayúsculas, minúsculas, números, símbolos
  - Muestra contraseña generada
  - Botón para copiar al portapapeles
  - Indicador de fortaleza de contraseña

**Objetivo**: Generar contenido dinámico y útil.

---

### INT-14: Conversor de Unidades

Crea un conversor de unidades:
- **HTML**: Select para tipo de conversión, inputs para valor, display de resultado
- **CSS**: Diseño limpio, layout organizado
- **JavaScript**:
  - Múltiples tipos de conversión (temperatura, longitud, peso, etc.)
  - Conversión en tiempo real
  - Bidireccional (puedes convertir en ambas direcciones)
  - Validación de inputs
  - Muestra unidades correctas

**Objetivo**: Crear herramienta útil con lógica compleja.

---

### INT-15: Proyecto Final - Aplicación Web Completa

Crea una aplicación web completa (elige una opción):

**Opción A: Blog Personal Interactivo**
- Header con navegación
- Sección hero
- Lista de artículos con búsqueda y filtrado
- Modal para ver artículo completo
- Formulario de contacto
- Footer
- Completamente responsive
- Animaciones y transiciones

**Opción B: Tienda Online Simple**
- Catálogo de productos con grid
- Filtros por categoría
- Carrito de compras (agregar/eliminar items)
- Cálculo de total
- Formulario de checkout
- Diseño profesional

**Opción C: Dashboard Personal**
- Múltiples widgets (tiempo, tareas, notas)
- Drag and drop (opcional)
- Persistencia con localStorage
- Temas claro/oscuro
- Responsive

**Objetivo**: Integrar todos los conceptos en un proyecto completo y profesional.

---

## Consejos para Resolver los Ejercicios

1. **Planifica primero**: Dibuja la estructura y piensa en la funcionalidad
2. **HTML primero**: Crea la estructura antes de agregar estilos y funcionalidad
3. **CSS después**: Estiliza cuando la estructura esté lista
4. **JavaScript al final**: Agrega interactividad cuando el diseño esté completo
5. **Divide en funciones**: Organiza tu JavaScript en funciones reutilizables
6. **Maneja errores**: Siempre valida inputs y maneja casos extremos
7. **Prueba constantemente**: Prueba cada funcionalidad mientras la desarrollas
8. **Hazlo responsive**: Asegúrate de que funcione en móvil y desktop
9. **Optimiza**: Elimina código duplicado, usa funciones reutilizables
10. **Documenta**: Comenta código complejo para futuras referencias

---

## Recursos Adicionales

- **MDN Web Docs**: Referencia completa de HTML, CSS y JavaScript
- **Can I Use**: Verifica compatibilidad de características CSS/JS
- **CodePen**: Inspiración y ejemplos de código
- **Chrome DevTools**: Herramientas de desarrollo para depurar

---

**Ejercicios anteriores**: 
- [Ejercicios HTML](01-ejercicios-html.md)
- [Ejercicios CSS](02-ejercicios-css.md)
- [Ejercicios HTML + CSS](03-ejercicios-html-css.md)
- [Ejercicios JavaScript](04-ejercicios-javascript.md)

**Ver soluciones**: [Soluciones](soluciones.md)

---

¡Felicidades por llegar hasta aquí! Estos ejercicios te han preparado para crear aplicaciones web completas. Continúa practicando y construyendo proyectos propios para seguir mejorando.


