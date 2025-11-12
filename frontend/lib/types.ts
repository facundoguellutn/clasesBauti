// Topic types
export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessonsCount: number;
  exercisesCount: number;
}

// Lesson types
export interface Lesson {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  order: number;
  sections: LessonSection[];
  keyPoints: string[];
  relatedLessons?: string[];
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'example' | 'definition' | 'formula' | 'visualization';
  data?: any; // For graphs, examples, etc.
}

// Exercise types
export interface Exercise {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  description: string;
  statement: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  order: number;
  hints: string[];
  solution: ExerciseSolution;
  type: 'multiple-choice' | 'fill-blank' | 'calculation' | 'graph';
}

export interface ExerciseSolution {
  explanation: string;
  steps: string[];
  answer: string;
  alternativeAnswers?: string[];
  visualization?: {
    type: 'graph' | 'diagram';
    data: any;
  };
}

// For Quadratic Functions specifically
export interface QuadraticFunctionData {
  a: number;
  b: number;
  c: number;
  vertex?: { x: number; y: number };
  roots?: number[];
  axis?: number;
  yIntercept?: number;
}

export interface GraphPoint {
  x: number;
  y: number;
}
