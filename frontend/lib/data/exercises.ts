import { Exercise } from '@/lib/types';
import { quadraticExercises } from './quadratic/exercises';
import { vscodeExercises } from './visualStudio/exercises';
import { webDesignExercises } from './webDesign/exercises';
import { consoleExercises } from './console/exercises';
import { systemsInteractionsExercises } from './systemsInteractions/exercises';
import { pythonExercises } from './python/exercises';


export const getExerciseById = (id: string) => {
  return quadraticExercises.find(ex => ex.id === id) || vscodeExercises.find(ex => ex.id === id) || webDesignExercises.find(ex => ex.id === id) || consoleExercises.find(ex => ex.id === id) || systemsInteractionsExercises.find(ex => ex.id === id) || pythonExercises.find(ex => ex.id === id);
};

export const getExerciseBySlug = (slug: string) => {
  return quadraticExercises.find(ex => ex.slug === slug) || vscodeExercises.find(ex => ex.slug === slug) || webDesignExercises.find(ex => ex.slug === slug) || consoleExercises.find(ex => ex.slug === slug) || systemsInteractionsExercises.find(ex => ex.slug === slug) || pythonExercises.find(ex => ex.slug === slug);
};

export const getExercisesByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced') => {
  return [...quadraticExercises, ...vscodeExercises, ...webDesignExercises, ...consoleExercises, ...systemsInteractionsExercises, ...pythonExercises].filter(ex => ex.difficulty === difficulty);
};
