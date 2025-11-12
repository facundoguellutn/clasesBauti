# Clases Bauti - Proyecto de Educación Integral

## Descripción del Proyecto

Este es un repositorio educativo integral diseñado para proporcionar contenido de alta calidad sobre **Programación**, **Matemáticas** y otros temas de interés.

El proyecto consta de tres componentes principales:

### 1. **Frontend (Next.js + shadcn/ui)**
- Ubicación: `/frontend`
- Stack: Next.js con Tailwind CSS y componentes de shadcn/ui
- Propósito: Plataforma web interactiva para consumir el contenido educativo
- Características:
  - Landing page atractiva
  - Secciones de temas y clases
  - Páginas interactivas con ejercicios resueltos
  - Gráficos y visualizaciones matemáticas
  - Interfaz intuitiva y responsive

### 2. **Contenido de Referencia - Matemáticas (Markdown)**
- Ubicación: `/matematicas`
- Formato: Archivos Markdown puros
- Propósito: **Referencia para el desarrollo** del contenido del frontend
- Características:
  - Accesible directamente desde GitHub
  - Control de versiones integrado
  - Fácil de actualizar y mantener
  - Soporta LaTeX para notación matemática
- **Nota**: El frontend NO consume estos archivos directamente. Se usan como referencia para estructurar y redactar el contenido que irá en el frontend.

**Estructura de temas incluidos:**
- Funciones Cuadráticas (completo)
  - 18 lecciones progresivas
  - 3 niveles de ejercicios (básicos, intermedios, avanzados)
  - Soluciones detalladas

### 3. **Contenido de Referencia - Programación (Markdown)**
- Ubicación: `/programacion`
- Formato: Archivos Markdown
- Propósito: Referencia para tutoriales y guías de programación en el frontend

---

## Workflow Típico

1. **Crear contenido en Markdown** → `/matematicas` o `/programacion` (como referencia)
2. **Copiar y estructurar el contenido en el frontend** → Crear componentes y datos en React/Next.js
3. **Visualizar en el navegador** → Interfaz interactiva con ejemplos y ejercicios
4. **Compartir en GitHub** → Acceso al repositorio completo

---

## Estructura General

```
clasesBauti/
├── frontend/              # Aplicación Next.js (frontend independiente)
│   ├── app/
│   │   ├── page.tsx       # Landing page
│   │   ├── temas/         # Páginas de temas
│   │   └── ...
│   └── components/        # Componentes React reutilizables
├── matematicas/           # Referencia para contenido de matemáticas
│   ├── funciones_cuadraticas/
│   │   ├── 01-introduccion.md
│   │   ├── ... (más archivos)
│   │   └── ejercicios/
│   └── ... (otros temas)
├── programacion/          # Referencia para contenido de programación
└── claude.md              # Este archivo
```

---

## Objetivos del Proyecto

- ✅ Proporcionar educación de calidad, accesible y gratuita
- ✅ Crear una plataforma interactiva para aprender matemáticas y programación
- ✅ Mantener contenido de referencia versionado en GitHub
- ✅ Ofrecer ejercicios interactivos con retroalimentación inmediata
- ✅ Visualizar conceptos complejos mediante gráficos y simulaciones

---

## Próximos Pasos

1. Desarrollar landing page y estructura base
2. Implementar página interactiva de funciones cuadráticas
3. Expandir con más temas de matemáticas
4. Agregar contenido de programación
5. Implementar sistema de seguimiento de progreso (opcional)
