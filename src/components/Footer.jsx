import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.25),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tire-tread divider */}
        <div className="mb-8 h-px w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_12px,transparent_12px_24px)]" />
        <div className="flex flex-col items-center justify-between gap-6 text-slate-400 md:flex-row">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Drivefolio — Ready to hit the track?</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="rounded-md p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      {/* Underbody glow */}
      <div aria-hidden className="pointer-events-none h-10 w-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.18),transparent_70%)]" />
    </footer>
  )
}
