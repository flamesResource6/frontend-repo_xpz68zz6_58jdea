import { useState } from 'react'
import { Menu, X, Car, Github, Linkedin } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white ring-1 ring-white/10 shadow-lg shadow-red-500/30">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white font-semibold leading-5 tracking-tight">Drivefolio</p>
                <p className="text-xs text-slate-400 -mt-0.5">by You</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="GitHub" className="text-slate-300 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/5">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
