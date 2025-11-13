'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Exercise } from '@/lib/types';
import { QuadraticGraph } from './QuadraticGraph';
import { ContentRenderer } from './ContentRenderer';

interface ExerciseSolverProps {
  exercise: Exercise;
}

export function ExerciseSolver({ exercise }: ExerciseSolverProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  const handleRevealHint = () => {
    if (!showHints) {
      setShowHints(true);
      setCurrentHintIndex(0);
    } else if (currentHintIndex < exercise.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1);
    }
  };

  const handleRevealSolution = () => {
    setShowSolution(true);
  };

  return (
    <div className="space-y-6">
      {/* Exercise Statement */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{exercise.title}</CardTitle>
              <CardDescription>{exercise.description}</CardDescription>
            </div>
            <Badge className={
              exercise.difficulty === 'basic' ? 'bg-green-600' :
              exercise.difficulty === 'intermediate' ? 'bg-yellow-600' :
              'bg-red-600'
            }>
              {exercise.difficulty === 'basic' ? 'Básico' :
               exercise.difficulty === 'intermediate' ? 'Intermedio' :
               'Avanzado'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-900">
            <div className="text-slate-900 dark:text-slate-50 text-lg font-semibold">
              <ContentRenderer content={exercise.statement} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input Area */}
      {!showSolution && (
        <Card>
          <CardHeader>
            <CardTitle>Tu Respuesta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="answer" className="text-sm font-medium">
                Escribe tu respuesta aquí:
              </label>
              <Input
                id="answer"
                placeholder="Ingresa tu respuesta"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="text-base p-3"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button onClick={handleRevealSolution} variant="default">
                Ver Solución
              </Button>
              <Button
                onClick={handleRevealHint}
                variant="outline"
                disabled={currentHintIndex >= exercise.hints.length}
              >
                {!showHints
                  ? 'Mostrar Pista'
                  : currentHintIndex < exercise.hints.length - 1
                  ? `Pista ${currentHintIndex + 2}/${exercise.hints.length}`
                  : 'No hay más pistas'}
              </Button>
            </div>

            {/* Hints Display */}
            {showHints && (
              <Alert className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-900">
                <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                  <strong>Pista {currentHintIndex + 1}:</strong>{' '}
                  <ContentRenderer content={exercise.hints[currentHintIndex]} />
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="space-y-4">
          {/* Correct Answer */}
          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
            <CardHeader>
              <CardTitle className="text-green-900 dark:text-green-100">Respuesta Correcta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-900">
                <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                  {exercise.solution.answer}
                </p>
              </div>
              <div className="text-green-800 dark:text-green-200">
                <ContentRenderer content={exercise.solution.explanation} />
              </div>
            </CardContent>
          </Card>

          {/* Step by Step */}
          <Card>
            <CardHeader>
              <CardTitle>Paso a Paso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {exercise.solution.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <ContentRenderer content={step} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visualization if available */}
          {exercise.solution.visualization && (
            <Card>
              <CardHeader>
                <CardTitle>Visualización</CardTitle>
              </CardHeader>
              <CardContent>
                {exercise.solution.visualization.type === 'graph' && (
                  <QuadraticGraph
                    a={exercise.solution.visualization.data.a}
                    b={exercise.solution.visualization.data.b}
                    c={exercise.solution.visualization.data.c}
                    title={exercise.solution.visualization.data.title}
                    showVertex={true}
                    showRoots={true}
                  />
                )}
              </CardContent>
            </Card>
          )}

          {/* Back Button */}
          <Button
            onClick={() => {
              setShowSolution(false);
              setUserAnswer('');
              setShowHints(false);
              setCurrentHintIndex(0);
            }}
            variant="outline"
            className="w-full"
          >
            Intentar Nuevamente
          </Button>
        </div>
      )}
    </div>
  );
}
