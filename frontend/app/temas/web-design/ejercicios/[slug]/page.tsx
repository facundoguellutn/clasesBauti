'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExerciseSolver } from '@/components/ExerciseSolver';
import { getExerciseBySlug } from '@/lib/data/exercises';
import { webDesignExercises } from '@/lib/data/webDesign/exercises';

export default function WebDesignExercisePage() {
  const params = useParams();
  const slug = params.slug as string;
  const exercise = getExerciseBySlug(slug);

  if (!exercise || exercise.topicId !== 'web-design') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-3xl font-bold">Ejercicio no encontrado</h1>
          <p className="text-slate-600 dark:text-slate-400">
            El ejercicio que buscas no existe.
          </p>
          <Link href="/temas/web-design">
            <Button>Volver al tema</Button>
          </Link>
        </div>
      </div>
    );
  }

  const exerciseIndex = webDesignExercises.findIndex((e) => e.id === exercise.id);
  const previousExercise = exerciseIndex > 0 ? webDesignExercises[exerciseIndex - 1] : null;
  const nextExercise = exerciseIndex < webDesignExercises.length - 1 ? webDesignExercises[exerciseIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/temas/web-design" className="text-purple-600 dark:text-purple-400 hover:underline">
            ← Volver a Desarrollo Web
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <ExerciseSolver exercise={exercise} />

        {/* Navigation */}
        <div className="flex gap-4 justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          {previousExercise ? (
            <Link href={`/temas/web-design/ejercicios/${previousExercise.slug}`}>
              <Button variant="outline">
                ← Ejercicio Anterior
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextExercise ? (
            <Link href={`/temas/web-design/ejercicios/${nextExercise.slug}`}>
              <Button>
                Siguiente Ejercicio →
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

