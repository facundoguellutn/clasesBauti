import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { topics } from "@/lib/data/topics";
import { quadraticLessons } from "@/lib/data/lessons";
import { quadraticExercises } from "@/lib/data/exercises";

export default function Home() {
  const featuredTopic = topics[0]; // Funciones Cuadráticas
  const recentLessons = quadraticLessons.slice(0, 3);
  const recentExercises = quadraticExercises.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="w-full px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aprende Matemáticas y Programación
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Plataforma interactiva de educación diseñada para dominar conceptos complejos a través de explicaciones claras, gráficos dinámicos y ejercicios prácticos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href={`/temas/${featuredTopic.slug}`}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Explorar Temas
              </Button>
            </Link>
            <Link href="#temas">
              <Button size="lg" variant="outline">
                Ver Más
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">{topics.length}</p>
              <p className="text-slate-600 dark:text-slate-400">Temas</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-purple-600">{quadraticLessons.length}</p>
              <p className="text-slate-600 dark:text-slate-400">Lecciones</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-pink-600">{quadraticExercises.length}</p>
              <p className="text-slate-600 dark:text-slate-400">Ejercicios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topic Section */}
      <section className="w-full px-4 py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Tema Destacado</h2>
            <p className="text-slate-600 dark:text-slate-400">Comienza con nuestro curso más popular</p>
          </div>

          <Card className="border-2 border-blue-200 dark:border-blue-900">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="text-4xl">{featuredTopic.icon}</div>
                  <CardTitle className="text-2xl">{featuredTopic.title}</CardTitle>
                  <CardDescription className="text-base">{featuredTopic.description}</CardDescription>
                </div>
                <Badge variant="secondary" className="text-sm">Popular</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{featuredTopic.lessonsCount}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Lecciones</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">{featuredTopic.exercisesCount}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Ejercicios</p>
                </div>
              </div>
              <Link href={`/temas/${featuredTopic.slug}`} className="block">
                <Button className="w-full">Comenzar Ahora</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topics Grid Section */}
      <section id="temas" className="w-full px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Todos los Temas</h2>
            <p className="text-slate-600 dark:text-slate-400">Elige el tema que quieras aprender</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/temas/${topic.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-2">{topic.icon}</div>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50">{topic.lessonsCount}</p>
                        <p className="text-slate-600 dark:text-slate-400">Lecciones</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50">{topic.exercisesCount}</p>
                        <p className="text-slate-600 dark:text-slate-400">Ejercicios</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Lessons Section */}
      <section className="w-full px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Primeras Lecciones</h2>
            <p className="text-slate-600 dark:text-slate-400">Comienza por los conceptos fundamentales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentLessons.map((lesson) => (
              <Link key={lesson.id} href={`/temas/funciones-cuadraticas/leccion/${lesson.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{lesson.keyPoints.length} puntos clave</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">¿Listo para aprender?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Elige un tema y comienza tu jornada de aprendizaje hoy. Con explicaciones claras, gráficos interactivos y ejercicios prácticos.
          </p>
          <Link href={`/temas/${topics[0].slug}`}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Explorar Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
