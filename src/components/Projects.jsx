import { motion } from 'framer-motion'
import { ExternalLink, Wrench, Cpu, Gauge } from 'lucide-react'

const projects = [
  {
    title: 'Trackday Dashboard',
    description: 'Real-time telemetry dashboard with websockets, charts, and custom theming.',
    tags: ['React', 'WebSockets', 'Charts'],
    link: '#'
  },
  {
    title: 'Garage CMS',
    description: 'Content system for builds, mods, and parts with media gallery and search.',
    tags: ['FastAPI', 'MongoDB', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Lap Timer App',
    description: 'PWA lap timer with offline mode and GPS accuracy smoothing.',
    tags: ['PWA', 'Service Worker', 'Framer Motion'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm text-red-400 font-semibold tracking-wider">FEATURED BUILDS</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Projects</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3 text-red-400">
                {i === 0 && <Gauge className="h-5 w-5" />}
                {i === 1 && <Wrench className="h-5 w-5" />}
                {i === 2 && <Cpu className="h-5 w-5" />}
                <span className="text-sm font-medium">Case Study</span>
                <ExternalLink className="ml-auto h-4 w-4 text-slate-400 group-hover:text-white transition" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
