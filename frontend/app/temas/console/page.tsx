import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { consoleExercises } from '@/lib/data/console/exercises';
import { consoleLessons } from '@/lib/data/console/lessons';

export default function ConsolePage() {
  const basicExercises = consoleExercises.filter((ex) => ex.difficulty === 'basic');
  const intermediateExercises = consoleExercises.filter((ex) => ex.difficulty === 'intermediate');
  const advancedExercises = consoleExercises.filter((ex) => ex.difficulty === 'advanced');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="w-full px-4 py-12 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-b border-orange-200 dark:border-orange-900">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="text-5xl">⌨️</div>
              <h1 className="text-4xl font-bold">Terminal y Línea de Comandos</h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Domina la terminal desde cero. Aprende comandos básicos, navegación, manipulación de archivos, redirección, pipes, scripts y más. Compatible con Windows, Linux y Mac.
              </p>
            </div>
            <div className="text-right space-y-2">
              <p className="text-2xl font-bold text-orange-600">{consoleLessons.length}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Lecciones</p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge className="bg-orange-600">{consoleLessons.length} Lecciones</Badge>
            <Badge variant="outline">{consoleExercises.length} Ejercicios</Badge>
            <Badge variant="outline">3 Niveles</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tabs Navigation */}
        <Tabs defaultValue="lecciones" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="lecciones">
              📚 Lecciones ({consoleLessons.length})
            </TabsTrigger>
            <TabsTrigger value="ejercicios">
              ✏️ Ejercicios ({consoleExercises.length})
            </TabsTrigger>
          </TabsList>

          {/* Lecciones Tab */}
          <TabsContent value="lecciones" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Todas las Lecciones</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Aprende progresivamente, desde los conceptos básicos de la terminal hasta crear scripts avanzados y automatizar tareas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {consoleLessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  href={`/temas/console/lecciones/${lesson.slug}`}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950">
                              {index + 1}
                            </Badge>
                            <CardTitle className="text-lg">{lesson.title}</CardTitle>
                          </div>
                          <CardDescription>{lesson.description}</CardDescription>
                        </div>
                        <span className="text-2xl">→</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {lesson.keyPoints.slice(0, 3).map((point, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {point}
                          </Badge>
                        ))}
                        {lesson.keyPoints.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{lesson.keyPoints.length - 3} más
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Ejercicios Tab */}
          <TabsContent value="ejercicios" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Ejercicios Prácticos</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Practica con ejercicios de diferentes niveles de dificultad. Sigue los pasos, verifica y aprende con explicaciones detalladas.
              </p>
            </div>

            {/* Basic Exercises */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-bold">
                    1
                  </span>
                  Nivel Básico
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  Ejercicios fundamentales para empezar con la terminal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {basicExercises.map((exercise) => (
                  <Link
                    key={exercise.id}
                    href={`/temas/console/ejercicios/${exercise.slug}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <CardTitle className="text-lg">{exercise.title}</CardTitle>
                            <CardDescription className="line-clamp-2">
                              {exercise.description}
                            </CardDescription>
                          </div>
                          <Badge className="bg-orange-600 ml-2">Básico</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {exercise.statement}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Intermediate Exercises */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-bold">
                    2
                  </span>
                  Nivel Intermedio
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                  Ejercicios que combinan varios conceptos de terminal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {intermediateExercises.map((exercise) => (
                  <Link
                    key={exercise.id}
                    href={`/temas/console/ejercicios/${exercise.slug}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <CardTitle className="text-lg">{exercise.title}</CardTitle>
                            <CardDescription className="line-clamp-2">
                              {exercise.description}
                            </CardDescription>
                          </div>
                          <Badge className="bg-yellow-600 ml-2">Intermedio</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {exercise.statement}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advanced Exercises */}
            {advancedExercises.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full text-sm font-bold">
                      3
                    </span>
                    Nivel Avanzado
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 ml-8">
                    Ejercicios avanzados con scripts y automatización
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advancedExercises.map((exercise) => (
                    <Link
                      key={exercise.id}
                      href={`/temas/console/ejercicios/${exercise.slug}`}
                    >
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <CardTitle className="text-lg">{exercise.title}</CardTitle>
                              <CardDescription className="line-clamp-2">
                                {exercise.description}
                              </CardDescription>
                            </div>
                            <Badge className="bg-red-600 ml-2">Avanzado</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                            {exercise.statement}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

