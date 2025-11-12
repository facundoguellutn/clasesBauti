import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 dark:bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Clases Bauti</h3>
            <p className="text-sm text-slate-400">
              Plataforma interactiva para aprender matemáticas y programación.
            </p>
          </div>

          {/* Temas */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Temas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/temas/funciones-cuadraticas" className="hover:text-slate-200 transition-colors">
                  Funciones Cuadráticas
                </Link>
              </li>
              <li>
                <Link href="/#temas" className="hover:text-slate-200 transition-colors">
                  Ver Todos
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-slate-200 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition-colors">
                  Documentación
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-200 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-200 transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 Clases Bauti. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ para aprender</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
