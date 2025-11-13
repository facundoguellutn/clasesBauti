'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getPythonLessonBySlug } from '@/lib/data/lessons';
import { pythonLessons } from '@/lib/data/python/lessons';
import { ContentRenderer } from '@/components/ContentRenderer';

export default function PythonLessonPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lesson = getPythonLessonBySlug(slug);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Lección no encontrada</h1>
          <p className="text-slate-600 dark:text-slate-400">
            La lección que buscas no existe.
          </p>
          <Link href="/temas/python">
            <Button>Volver al tema</Button>
          </Link>
        </div>
      </div>
    );
  }

  const lessonIndex = pythonLessons.findIndex((l) => l.id === lesson.id);
  const previousLesson = lessonIndex > 0 ? pythonLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < pythonLessons.length - 1 ? pythonLessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/temas/python" className="text-yellow-600 dark:text-yellow-400 hover:underline">
            ← Volver a Python Básico
          </Link>
          <div>
            <Badge className="bg-yellow-600 mb-2">Lección {lessonIndex + 1} de {pythonLessons.length}</Badge>
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
              <ContentRenderer content={lesson.content} />
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
                <ContentRenderer content={section.content} />
              </CardContent>
            </Card>
          ))}

          {/* Key Points */}
          {lesson.keyPoints && lesson.keyPoints.length > 0 && (
            <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900">
              <CardHeader>
                <CardTitle>Puntos Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">✓</span>
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
            <Link href={`/temas/python/lecciones/${previousLesson.slug}`}>
              <Button variant="outline">
                ← Lección Anterior
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link href={`/temas/python/lecciones/${nextLesson.slug}`}>
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

