import { Topic } from '@/lib/types';

export const topics: Topic[] = [
  {
    id: 'funciones-cuadraticas',
    slug: 'funciones-cuadraticas',
    title: 'Funciones Cuadráticas',
    description: 'Domina las parábolas: desde conceptos fundamentales hasta aplicaciones complejas. Aprende las tres formas, cómo graficar y resolver problemas del mundo real.',
    icon: '📈',
    color: 'bg-blue-500',
    lessonsCount: 18,
    exercisesCount: 8,
  },
  {
    id: 'visual-studio-code',
    slug: 'visual-studio-code',
    title: 'Visual Studio Code',
    description: 'Aprende a usar Visual Studio Code desde cero. Instalación, interfaz, extensiones, terminal y todo lo necesario para empezar a programar eficientemente.',
    icon: '💻',
    color: 'bg-green-500',
    lessonsCount: 14,
    exercisesCount: 6,
  },
  {
    id: 'web-design',
    slug: 'web-design',
    title: 'Desarrollo Web',
    description: 'Aprende los fundamentos del desarrollo web: HTML, CSS y JavaScript. Enfocado en JavaScript como lenguaje introductorio para principiantes. Incluye instalación de Node.js y playgrounds online.',
    icon: '🌐',
    color: 'bg-purple-500',
    lessonsCount: 16,
    exercisesCount: 10,
  },
];
