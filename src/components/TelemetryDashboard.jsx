import { motion } from 'framer-motion'
import { Gauge, Activity, Cpu, Zap, BatteryCharging, Map, Timer, Sparkles } from 'lucide-react'

// Utility motion settings
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay }
})

function LED({ color = 'bg-emerald-400', blink = false }) {
  return (
    <motion.span
      className={`inline-block h-2 w-2 rounded-full ${color} shadow-[0_0_8px_theme(colors.emerald.400)]`}
      animate={blink ? { opacity: [1, 0.3, 1] } : undefined}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function Soundwave() {
  const bars = new Array(24).fill(0)
  return (
    <div className="flex items-end gap-1 h-10">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-sm bg-gradient-to-b from-red-500 to-red-700"
          initial={{ height: 4 + (i % 3) * 4 }}
          animate={{ height: [8, 28, 10, 22, 12] }}
          transition={{ duration: 1.2 + (i % 5) * 0.05, repeat: Infinity, ease: 'easeInOut', delay: i * 0.02 }}
        />
      ))}
    </div>
  )
}

function SpeedTrail() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-1/3 h-0.5 w-40 -skew-x-12 bg-gradient-to-r from-transparent via-red-500/70 to-transparent blur-sm"
          style={{ left: `${-30 + i * 20}%` }}
          animate={{ x: ['-10%', '120%'] }}
          transition={{ duration: 2 + i * 0.25, repeat: Infinity, ease: 'easeOut', delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  )
}

export default function TelemetryDashboard() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-slate-950">
      {/* Carbon fiber background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,23,42,1) 0px, rgba(15,23,42,1) 6px, rgba(2,6,23,1) 6px, rgba(2,6,23,1) 12px)",
        }}
      />

      {/* M-stripes accent */}
      <div className="pointer-events-none absolute -left-20 top-24 z-0 h-64 w-[140%] -skew-y-6 opacity-30 mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E6FFF] via-[#00ADEF] to-transparent" />
        <div className="absolute inset-0 -translate-y-2 bg-gradient-to-r from-[#E60026] via-transparent to-transparent opacity-70" />
      </div>

      <SpeedTrail />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 px-4 py-28 sm:px-6 lg:px-8">
        <motion.div {...fadeIn(0)} className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <LED blink /> <span>Track Mode Active</span>
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
            M-Sport Telemetry
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A portfolio tuned like a race car: fast, aggressive, and ruthlessly precise.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#cockpit" className="rounded-xl bg-gradient-to-br from-red-600 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 transition hover:brightness-110">
              Enter Cockpit
            </a>
            <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Angular telemetry cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div {...fadeIn(0.05)} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 [clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,0_100%)]">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <Gauge className="h-5 w-5" /> <span className="text-sm font-medium">RPM</span>
              <div className="ml-auto flex items-center gap-1"><LED blink /><LED blink /><LED color="bg-amber-400" /></div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-white">8,250</span>
              <span className="mb-1 text-xs text-slate-400">redline</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-green-400 via-amber-400 to-red-500" animate={{ width: ['30%', '72%', '55%', '80%'] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.1)} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 [clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,0_100%)]">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <Activity className="h-5 w-5" /> <span className="text-sm font-medium">Telemetry</span>
              <div className="ml-auto flex items-center gap-1"><LED blink /><LED color="bg-emerald-400" /><LED color="bg-emerald-400" /></div>
            </div>
            <p className="text-slate-300">Frame times stable, input latency low.</p>
            <div className="mt-4 flex items-center gap-3 text-slate-300">
              <span className="text-sm">16.7ms</span>
              <span className="text-xs text-slate-500">avg</span>
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.15)} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 [clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,0_100%)]">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <Cpu className="h-5 w-5" /> <span className="text-sm font-medium">Power Unit</span>
              <div className="ml-auto flex items-center gap-1"><LED color="bg-emerald-400" /><LED color="bg-emerald-400" /><LED color="bg-emerald-400" /></div>
            </div>
            <p className="text-slate-300">FastAPI + React + Mongo on tap.</p>
            <div className="mt-4 flex items-center gap-2 text-slate-300">
              <Zap className="h-4 w-4 text-amber-400" /> <span className="text-sm">Turbo Ready</span>
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.2)} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 [clip-path:polygon(0_0,88%_0,100%_18%,100%_100%,0_100%)]">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <BatteryCharging className="h-5 w-5" /> <span className="text-sm font-medium">Charge</span>
              <div className="ml-auto flex items-center gap-1"><LED blink color="bg-amber-400" /><LED color="bg-emerald-400" /></div>
            </div>
            <div className="mt-1 h-20 w-full rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>Ambient</span>
                <span className="text-white font-semibold">M Glow</span>
              </div>
              <div className="mt-2 flex h-6 w-full overflow-hidden rounded-md">
                <div className="h-full w-1/3 bg-[#0E6FFF]" />
                <div className="h-full w-1/3 bg-[#00ADEF]" />
                <div className="h-full w-1/3 bg-[#E60026]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini panels */}
        <div className="grid gap-5 sm:grid-cols-3">
          <motion.div {...fadeIn(0.25)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-slate-300"><Map className="h-4 w-4 text-slate-400" />
              <span className="text-sm">Track: Nordschleife</span>
            </div>
            <Sparkles className="h-4 w-4 text-red-400" />
          </motion.div>
          <motion.div {...fadeIn(0.3)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-slate-300"><Timer className="h-4 w-4 text-slate-400" />
              <span className="text-sm">PB: 7:28</span>
            </div>
            <LED color="bg-emerald-400" />
          </motion.div>
          <motion.div {...fadeIn(0.35)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-slate-300"><Zap className="h-4 w-4 text-amber-400" />
              <span className="text-sm">Mode: Sport+</span>
            </div>
            <LED blink color="bg-red-500" />
          </motion.div>
        </div>

        {/* Soundwave */}
        <motion.div {...fadeIn(0.4)} className="mt-2 flex items-center gap-3 text-slate-300">
          <span className="text-xs uppercase tracking-wider text-slate-400">Engine Rev</span>
          <Soundwave />
        </motion.div>
      </div>
    </section>
  )
}
