import Navbar from './components/Navbar'
import TelemetryDashboard from './components/TelemetryDashboard'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="relative">
        <TelemetryDashboard />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Drivefolio — Built with speed and precision.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
