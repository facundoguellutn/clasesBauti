import { Exercise } from '@/lib/types';
import { quadraticExercises } from './quadratic/exercises';
import { vscodeExercises } from './visualStudio/exercises';


export const getExerciseById = (id: string) => {
  return quadraticExercises.find(ex => ex.id === id) || vscodeExercises.find(ex => ex.id === id);
};

export const getExerciseBySlug = (slug: string) => {
  return quadraticExercises.find(ex => ex.slug === slug) || vscodeExercises.find(ex => ex.slug === slug);
};

export const getExercisesByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced') => {
  return [...quadraticExercises, ...vscodeExercises].filter(ex => ex.difficulty === difficulty);
};
