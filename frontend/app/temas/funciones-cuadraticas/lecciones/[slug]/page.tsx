'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { QuadraticGraph } from '@/components/QuadraticGraph';
import { CoefficientExplorer } from '@/components/CoefficientExplorer';
import { VertexCalculator } from '@/components/VertexCalculator';
import { DiscriminantCalculator } from '@/components/DiscriminantCalculator';
import { CompletingSquareVisualizer } from '@/components/CompletingSquareVisualizer';
import { GraphComparator } from '@/components/GraphComparator';
import { StepByStepSolver } from '@/components/StepByStepSolver';
import { ExerciseSolver } from '@/components/ExerciseSolver';
import {  getQuadraticLessonBySlug } from '@/lib/data/lessons';
import { quadraticLessons } from '@/lib/data/quadratic/lessons';
import { Exercise } from '@/lib/types';

export default function LessonPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lesson = getQuadraticLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Lección no encontrada</h1>
          <p className="text-slate-600 dark:text-slate-400">
            La lección que buscas no existe.
          </p>
          <Link href="/temas/funciones-cuadraticas">
            <Button>Volver al tema</Button>
          </Link>
        </div>
      </div>
    );
  }

  const lessonIndex = quadraticLessons.findIndex((l) => l.id === lesson.id);
  const previousLesson = lessonIndex > 0 ? quadraticLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < quadraticLessons.length - 1 ? quadraticLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/temas/funciones-cuadraticas" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Volver a Funciones Cuadráticas
          </Link>
          <div className="space-y-2">
            <Badge className="bg-blue-600">{lesson.title}</Badge>
            <h1 className="text-4xl font-bold">{lesson.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">{lesson.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Content Sections */}
        <div className="space-y-8">
          {lesson.sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>

              {section.type === 'definition' && (
                <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                      Definición
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
                    {section.content}
                  </CardContent>
                </Card>
              )}

              {section.type === 'formula' && (
                <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-900">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900 dark:text-purple-100">
                      Fórmula
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-900 dark:text-purple-100">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded font-mono text-lg whitespace-pre-wrap border border-purple-200 dark:border-purple-900">
                      {section.content}
                    </div>
                  </CardContent>
                </Card>
              )}

              {section.type === 'example' && (
                <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 dark:text-green-100">
                      Ejemplo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-900 dark:text-green-100 whitespace-pre-wrap font-mono text-sm">
                    {section.content}
                  </CardContent>
                </Card>
              )}

              {section.type === 'text' && (
                <div className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {section.content}
                </div>
              )}

              {section.type === 'visualization' && section.data && (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  {/* Example visualization for quadratic functions */}
                  {section.data.type === 'quadratic-graph' && (
                    <QuadraticGraph
                      a={section.data.a || 1}
                      b={section.data.b || 0}
                      c={section.data.c || 0}
                      title={section.data.title}
                      showVertex={section.data.showVertex !== false}
                      showRoots={section.data.showRoots !== false}
                      showAxisOfSymmetry={section.data.showAxisOfSymmetry !== false}
                    />
                  )}
                </div>
              )}

              {section.type === 'interactive' && section.data && (
                <div className="space-y-4">
                  {section.data.type === 'coefficient-explorer' && (
                    <CoefficientExplorer
                      initialA={section.data.initialA}
                      initialB={section.data.initialB}
                      initialC={section.data.initialC}
                      showDescription={section.data.showDescription !== false}
                    />
                  )}
                  {section.data.type === 'vertex-calculator' && (
                    <VertexCalculator showDescription={section.data.showDescription !== false} />
                  )}
                  {section.data.type === 'discriminant-calculator' && (
                    <DiscriminantCalculator
                      showDescription={section.data.showDescription !== false}
                    />
                  )}
                  {section.data.type === 'completing-square' && (
                    <CompletingSquareVisualizer
                      showDescription={section.data.showDescription !== false}
                    />
                  )}
                  {section.data.type === 'step-by-step-solver' && (
                    <StepByStepSolver showDescription={section.data.showDescription !== false} />
                  )}
                </div>
              )}

              {section.type === 'comparison' && section.data && (
                <div className="space-y-4">
                  {section.data.type === 'graph-comparator' && section.data.functions && (
                    <GraphComparator
                      functions={section.data.functions}
                      showDescription={section.data.showDescription !== false}
                    />
                  )}
                </div>
              )}

              {section.type === 'tip' && (
                <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-900 dark:text-yellow-100 flex items-center gap-2">
                      💡 Tip
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-yellow-900 dark:text-yellow-100 whitespace-pre-wrap">
                    {section.content}
                  </CardContent>
                </Card>
              )}

              {section.type === 'warning' && (
                <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 dark:text-red-100 flex items-center gap-2">
                      ⚠️ Advertencia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-900 dark:text-red-100 whitespace-pre-wrap">
                    {section.content}
                  </CardContent>
                </Card>
              )}

              {section.type === 'exercise' && section.data && (
                <div className="space-y-4">
                  <ExerciseSolver exercise={section.data as Exercise} />
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Key Points */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Puntos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.keyPoints.map((point, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Navigation */}
        <div className="flex gap-4 justify-between pt-8">
          {previousLesson ? (
            <Link href={`/temas/funciones-cuadraticas/lecciones/${previousLesson.slug}`}>
              <Button variant="outline">
                ← Lección Anterior: {previousLesson.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link href={`/temas/funciones-cuadraticas/lecciones/${nextLesson.slug}`}>
              <Button>
                Siguiente: {nextLesson.title} →
              </Button>
            </Link>
          ) : (
            <Link href="/temas/funciones-cuadraticas">
              <Button>
                Ver Ejercicios →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
