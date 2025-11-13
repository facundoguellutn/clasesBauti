import { Lesson } from '@/lib/types';
import { quadraticLessons } from './quadratic/lessons';
import { vscodeLessons } from './visualStudio/lessons';
import { webDesignLessons } from './webDesign/lessons';
import { consoleLessons } from './console/lessons';
import { systemsInteractionsLessons } from './systemsInteractions/lessons';
import { pythonLessons } from './python/lessons';



export const getQuadraticLessonById = (id: string) => {
  return quadraticLessons.find(lesson => lesson.id === id);
};

export const getQuadraticLessonBySlug = (slug: string) => {
  return quadraticLessons.find(lesson => lesson.slug === slug);
};

export const getVSCodeLessonById = (id: string) => {
  return vscodeLessons.find(lesson => lesson.id === id);
};

export const getVSCodeLessonBySlug = (slug: string) => {
  return vscodeLessons.find(lesson => lesson.slug === slug);
};

export const getWebDesignLessonById = (id: string) => {
  return webDesignLessons.find(lesson => lesson.id === id);
};

export const getWebDesignLessonBySlug = (slug: string) => {
  return webDesignLessons.find(lesson => lesson.slug === slug);
};

export const getConsoleLessonById = (id: string) => {
  return consoleLessons.find(lesson => lesson.id === id);
};

export const getConsoleLessonBySlug = (slug: string) => {
  return consoleLessons.find(lesson => lesson.slug === slug);
};

export const getSystemsInteractionsLessonById = (id: string) => {
  return systemsInteractionsLessons.find(lesson => lesson.id === id);
};

export const getSystemsInteractionsLessonBySlug = (slug: string) => {
  return systemsInteractionsLessons.find(lesson => lesson.slug === slug);
};

export const getPythonLessonById = (id: string) => {
  return pythonLessons.find(lesson => lesson.id === id);
};

export const getPythonLessonBySlug = (slug: string) => {
  return pythonLessons.find(lesson => lesson.slug === slug);
};
