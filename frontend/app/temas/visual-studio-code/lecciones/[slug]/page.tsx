'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { vscodeLessons, getVSCodeLessonBySlug } from '@/lib/data/lessons';

export default function VSCodeLessonPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lesson = getVSCodeLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Lección no encontrada</h1>
          <p className="text-slate-600 dark:text-slate-400">
            La lección que buscas no existe.
          </p>
          <Link href="/temas/visual-studio-code">
            <Button>Volver al tema</Button>
          </Link>
        </div>
      </div>
    );
  }

  const lessonIndex = vscodeLessons.findIndex((l) => l.id === lesson.id);
  const previousLesson = lessonIndex > 0 ? vscodeLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < vscodeLessons.length - 1 ? vscodeLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/temas/visual-studio-code" className="text-green-600 dark:text-green-400 hover:underline">
            ← Volver a Visual Studio Code
          </Link>
          <div>
            <Badge className="bg-green-600 mb-2">Lección {lessonIndex + 1} de {vscodeLessons.length}</Badge>
            <h1 className="text-3xl font-bold mt-2">{lesson.title}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">{lesson.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contenido</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{lesson.content}</p>
            </CardContent>
          </Card>

          {/* Sections */}
          {lesson.sections.map((section, index) => (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{index + 1}</Badge>
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{section.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Key Points */}
          {lesson.keyPoints && lesson.keyPoints.length > 0 && (
            <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle>Puntos Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          {previousLesson ? (
            <Link href={`/temas/visual-studio-code/lecciones/${previousLesson.slug}`}>
              <Button variant="outline">
                ← Lección Anterior
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link href={`/temas/visual-studio-code/lecciones/${nextLesson.slug}`}>
              <Button>
                Siguiente Lección →
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

