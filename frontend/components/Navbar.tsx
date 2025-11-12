import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Clases Bauti
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            Inicio
          </Link>
          <Link href="/#temas" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            Temas
          </Link>
          <Link href="/temas/funciones-cuadraticas" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
            Funciones Cuadráticas
          </Link>
        </div>

        <Link href="/temas/funciones-cuadraticas">
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            Comenzar
          </Button>
        </Link>
      </div>
    </nav>
  );
}
