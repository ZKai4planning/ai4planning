import { Logo } from "./logo";


export function LoginHeader() {
  return (
    <header className="flex items-center justify-between border-b border-solid border-primary/10 px-10 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3 text-primary">
  <a href="/" className="flex items-center gap-3">
    <Logo />
    <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
      Ai4Planning
    </h2>
  </a>
</div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-8">
          {/* <a
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            href="#"
          >
            Documentation
          </a>
          <a
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            href="#"
          >
            System Status
          </a> */}
        </nav>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest"><a  href="/login">
          Login
        </a></span>
        </div>
      </div>
    </header>
  )
}
