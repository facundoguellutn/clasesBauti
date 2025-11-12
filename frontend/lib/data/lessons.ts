import { Lesson } from '@/lib/types';
import { quadraticLessons } from './quadratic/lessons';
import { vscodeLessons } from './visualStudio/lessons';
import { webDesignLessons } from './webDesign/lessons';



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
