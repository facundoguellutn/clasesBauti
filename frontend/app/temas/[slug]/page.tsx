import { notFound, redirect } from 'next/navigation';
import { topics } from '@/lib/data/topics';

interface TopicPageProps {
  params: {
    slug: string;
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = topics.find((t) => t.slug === params.slug);

  if (!topic) {
    notFound();
  }

  // Redirect to specific topic pages
  if (topic.slug === 'funciones-cuadraticas') {
    redirect('/temas/funciones-cuadraticas');
  }
  
  if (topic.slug === 'visual-studio-code') {
    redirect('/temas/visual-studio-code');
  }

  if (topic.slug === 'systems-interactions') {
    redirect('/temas/systems-interactions');
  }

  if (topic.slug === 'python') {
    redirect('/temas/python');
  }

  // For other topics, show coming soon (placeholder for future topics)
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <div className="text-6xl">{topic.icon}</div>
        <h1 className="text-4xl font-bold">{topic.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {topic.description}
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-base">
          Este tema está en desarrollo. ¡Vuelve pronto!
        </p>
      </div>
    </div>
  );
}
