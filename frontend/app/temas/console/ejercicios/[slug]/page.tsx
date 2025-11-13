'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExerciseSolver } from '@/components/ExerciseSolver';
import { getExerciseBySlug } from '@/lib/data/exercises';
import { consoleExercises } from '@/lib/data/console/exercises';

export default function ConsoleExercisePage() {
  const params = useParams();
  const slug = params.slug as string;
  const exercise = getExerciseBySlug(slug);

  if (!exercise || exercise.topicId !== 'console') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-3xl font-bold">Ejercicio no encontrado</h1>
          <p className="text-slate-600 dark:text-slate-400">
            El ejercicio que buscas no existe.
          </p>
          <Link href="/temas/console">
            <Button>Volver al tema</Button>
          </Link>
        </div>
      </div>
    );
  }

  const exerciseIndex = consoleExercises.findIndex((e) => e.id === exercise.id);
  const previousExercise = exerciseIndex > 0 ? consoleExercises[exerciseIndex - 1] : null;
  const nextExercise = exerciseIndex < consoleExercises.length - 1 ? consoleExercises[exerciseIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/temas/console" className="text-orange-600 dark:text-orange-400 hover:underline">
            ← Volver a Terminal y Línea de Comandos
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <ExerciseSolver exercise={exercise} />

        {/* Navigation */}
        <div className="flex gap-4 justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          {previousExercise ? (
            <Link href={`/temas/console/ejercicios/${previousExercise.slug}`}>
              <Button variant="outline">
                ← Ejercicio Anterior
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextExercise ? (
            <Link href={`/temas/console/ejercicios/${nextExercise.slug}`}>
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

